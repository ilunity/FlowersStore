const sequalize = require('../db');
const {DataTypes} = require('sequelize');


const User = sequalize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "User"},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
});

const Basket = sequalize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Item = sequalize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    count: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
});

const Category = sequalize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const ItemInfo = sequalize.define('item_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
});

const BasketItem = sequalize.define('basket_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER, allowNull: false},
});

const CategoryItem = sequalize.define('category_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});


User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketItem);
BasketItem.belongsTo(Basket);

Category.hasMany(CategoryItem);
CategoryItem.belongsTo(Category);

Item.hasMany(BasketItem);
BasketItem.belongsTo(Item);

Item.hasMany(CategoryItem);
CategoryItem.belongsTo(Item);

Item.hasMany(ItemInfo);
ItemInfo.belongsTo(Item);


module.exports = {User, Basket, Item, Category, ItemInfo, BasketItem, CategoryItem};