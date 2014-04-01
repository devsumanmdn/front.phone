(function() {
  var Paraguay, root,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  Paraguay = (function() {
    function Paraguay() {
      this.splitNumber = __bind(this.splitNumber, this);
      this.specialRules = __bind(this.specialRules, this);
      this.countryName = "Paraguay";
      this.countryNameAbbr = "PRY";
      this.countryCode = '595';
      this.regex = /^(?:(?:\+|)595|)(?:0|)(?:(?:(?:21|32|38|39|41|44|46|47|48|61|71|72|73|81|83)(?:\d{7}))|(?:(?:220|224|225|226|228|271|275|291|292|293|294|295|318|330|331|336|337|342|343|345|347|350|351|360|370|418|420|424|425|431|432|451|453|464|471|491|492|493|494|497|510|511|512|513|514|515|516|517|518|519|520|521|522|523|524|525|526|527|528|529|530|531|532|533|534|535|536|537|538|539|540|541|542|543|544|545|546|547|548|549|550|552|553|554|570|571|572|573|580|631|632|633|644|660|671|672|673|674|676|677|678|717|740|741|742|743|744|750|762|763|764|765|767|768|770|775|780|781|782|783|784|785|786|787|788|790|858|961|962|971|972|973|975|976|981|982|983|984|985|991|992|993|995)(?:\d{6})))$/;
      this.optionalTrunkPrefix = '0';
      this.nationalNumberSeparator = ' ';
      this.nationalDestinationCode = ['21', '32', '38', '39', '41', '44', '46', '47', '48', '61', '71', '72', '73', '81', '83', '220', '224', '225', '226', '228', '271', '275', '291', '292', '293', '294', '295', '318', '330', '331', '336', '337', '342', '343', '345', '347', '350', '351', '360', '370', '418', '420', '424', '425', '431', '432', '451', '453', '464', '471', '491', '492', '493', '494', '497', '510', '511', '512', '513', '514', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534', '535', '536', '537', '538', '539', '540', '541', '542', '543', '544', '545', '546', '547', '548', '549', '550', '552', '553', '554', '570', '571', '572', '573', '580', '631', '632', '633', '644', '660', '671', '672', '673', '674', '676', '677', '678', '717', '740', '741', '742', '743', '744', '750', '762', '763', '764', '765', '767', '768', '770', '775', '780', '781', '782', '783', '784', '785', '786', '787', '788', '790', '858', '961', '962', '971', '972', '973', '975', '976', '981', '982', '983', '984', '985', '991', '992', '993', '995'];
    }

    Paraguay.prototype.specialRules = function(withoutCountryCode, withoutNDC, ndc) {
      var phone;
      phone = new vtex.phone.PhoneNumber(this.countryCode, ndc, withoutNDC);
      if (ndc.length === 3 && ndc[0] === '9') {
        phone.isMobile = true;
      }
      return phone;
    };

    Paraguay.prototype.splitNumber = function(number) {
      if (number.length === 7) {
        return vtex.phone.compact(number.split(/(\d{3})(\d{4})/));
      } else {
        return vtex.phone.compact(number.split(/(\d{2})(\d{4})/));
      }
      return [number];
    };

    return Paraguay;

  })();

  root.vtex.phone.countries = root.vtex.phone.countries || {};

  root.vtex.phone.countries['595'] = new Paraguay();

}).call(this);