module.exports = function AnalyticsContext(){
    var self = this;
    self.Scope = "";
    self.ExtraData = {};
    self.MetaData = {};
    self.Filters = [];

    return self;
};