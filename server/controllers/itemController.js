const uuid = require('uuid');
const path = require('path');
const {Item, CategoryItem, Category, ItemInfo} = require('../models/models');
const APIError = require('../error/APIError');

const itemController = {
    async create(req, res, next) {
        try {
            const {name, price, count, info: infoJSON} = req.body;
            const {img} = req.files;
            if (!name || !price || !count) next(APIError.noParameters());

            const fileName = uuid.v4() + '.jpg';
            await img.mv(path.resolve(__dirname, "..", "static", fileName));

            const item = await Item.create({name, price, count, img: fileName});

            if (infoJSON) {
                const info = JSON.parse(infoJSON);

                info.forEach((infoItem) => {
                    ItemInfo.create({
                        title: infoItem.title,
                        description: infoItem.description,
                        itemId: item.id,
                    });
                });
            }

            return res.json(item);
        } catch (e) {
            next(APIError.badRequest(e.message));
        }
    },
    async getAll(req, res, next) {
        const {categories: categoryNamesJSON, limit = 12, page = 1} = req.query;
        const offset = page * limit - limit;
        const categoryNames = JSON.parse(categoryNamesJSON);

        if (!categoryNames) {
            const {id} = req.params;
            const item = await Item.findAll({limit, offset});

            return res.json(item);
        }

        if (categoryNames) {
            const categoryIds = await Category.findAll({
                attributes: ['id'],
                where: {name: categoryNames},
            });
            if (!categoryIds.length) next(APIError.badRequest("There is no such category"));
            console.log(categoryIds);

            const itemsIds = await CategoryItem.findAll({
                attributes: ['id'],
                where: {CategoryId: categoryIds,}
            });
            if (!itemsIds.length) next(APIError.badRequest("There are no items with these category"));

            const items = await Item.findAndCountAll({
                where: {id: itemsIds},
                limit,
                offset,
            });

            return res.json(items);
        }

        const items = await Item.findAll();
        if (items === null) next(APIError.badRequest('There are no items'));
        return res.json(items);
    },
    async getOne(req, res) {
        const {id} = req.params;
        const item = await Item.findOne({
            where: {id},
            include: ItemInfo,
        });

        return res.json(item);
    },
};

module.exports = itemController;