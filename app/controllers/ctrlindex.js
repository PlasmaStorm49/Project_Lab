module.exports.index = function (ctapp, req, res) {
    const connection = ctapp.config.mysql();
    const idxMode = new ctapp.app.models.mdindex(connection);

    idxMode.rendertest(function (error, result) {
        res.render("index", { initial_test_table: result })

    });
}