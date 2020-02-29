module.exports = function (rtapp) {

    rtapp.get('/', function (req, res) {
        rtapp.app.controllers.ctrlindex.index(rtapp, req, res);
    });
}