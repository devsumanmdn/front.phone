root = exports ? this

# For more info check:
# http://www.copaco.com.py/portal/index.php/atencion-al-cliente/8-empresa/74-codigos-de-area.html
class Paraguay
	constructor: ->
		@countryName = "Paraguay"
		@countryNameAbbr = "PRY"
		@countryCode = '595'
		@regex = /^(?:(?:\+|)595|)(?:0|)(?:(?:(?:21|32|38|39|41|44|46|47|48|61|71|72|73|81|83)(?:\d{7}))|(?:(?:220|224|225|226|228|271|275|291|292|293|294|295|318|330|331|336|337|342|343|345|347|350|351|360|370|418|420|424|425|431|432|451|453|464|471|491|492|493|494|497|510|511|512|513|514|515|516|517|518|519|520|521|522|523|524|525|526|527|528|529|530|531|532|533|534|535|536|537|538|539|540|541|542|543|544|545|546|547|548|549|550|552|553|554|570|571|572|573|580|631|632|633|644|660|671|672|673|674|676|677|678|717|740|741|742|743|744|750|762|763|764|765|767|768|770|775|780|781|782|783|784|785|786|787|788|790|858|961|962|971|972|973|975|976|981|982|983|984|985|991|992|993|995)(?:\d{6})))$/
		@optionalTrunkPrefix = '0'
		@nationalNumberSeparator = ' '
		@nationalDestinationCode =
			[
				'21', '32', '38', '39', '41', '44', '46', '47', '48', '61', '71', '72', '73', '81', '83', '220', '224', '225', '226', '228', '271', '275', '291', '292', '293', '294', '295', '318', '330', '331', '336', '337', '342', '343', '345', '347', '350', '351', '360', '370', '418', '420', '424', '425', '431', '432', '451', '453', '464', '471', '491', '492', '493', '494', '497', '510', '511', '512', '513', '514', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534', '535', '536', '537', '538', '539', '540', '541', '542', '543', '544', '545', '546', '547', '548', '549', '550', '552', '553', '554', '570', '571', '572', '573', '580', '631', '632', '633', '644', '660', '671', '672', '673', '674', '676', '677', '678', '717', '740', '741', '742', '743', '744', '750', '762', '763', '764', '765', '767', '768', '770', '775', '780', '781', '782', '783', '784', '785', '786', '787', '788', '790', '858', '961', '962', '971', '972', '973', '975', '976', '981', '982', '983', '984', '985', '991', '992', '993', '995'
			]

	specialRules: (withoutCountryCode, withoutNDC, ndc) =>
		phone = new vtex.phone.PhoneNumber(@countryCode, ndc, withoutNDC)

		if ndc.length is 3 and ndc[0] is '9'
			phone.isMobile = true

		return phone

	splitNumber: (number) =>
		if number.length is 7
			return vtex.phone.compact number.split(/(\d{3})(\d{4})/)
		else
			return vtex.phone.compact number.split(/(\d{2})(\d{4})/)

		return [number]

# exports
root.vtex.phone.countries = root.vtex.phone.countries || {}
root.vtex.phone.countries['595'] = new Paraguay()