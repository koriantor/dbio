/* ==================================================
 *  Database Interface
 *      Functions to interface with database.
 *  ------ACCESS ONLY THROUGH SERVER-SIDE CONTROLLER------
 *
 *  Functions:
 *      talkToModel()
 * ================================================== */

module.exports.talkToModel = function talkToModel(btnYes) {
    var msg;
    if (btnYes)
        msg = "Yes! RandomMessage! Aaaaah!";
    else
        msg = "No!";
    return msg;
};