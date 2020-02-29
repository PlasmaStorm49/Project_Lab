function idxModel(connection) {
    this._connection = connection

}

idxModel.prototype.rendertest = function (callback) {
    this._connection.query('select * from initial_test_table', callback);
}

module.exports = function () {
    return idxModel;
}