// https://www.redditstatic.com/desktop2x/CreatePollButton.957a9d7b109255336eae.js
// Retrieved at 3/11/2020, 6:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CreatePollButton"], {
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, a, t) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, a, t) {
			"use strict";
			var s = t("./node_modules/react/index.js"),
				o = t.n(s),
				n = t("./src/higherOrderComponents/asModal/index.tsx"),
				r = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = t("./src/reddit/controls/TextButton/index.tsx"),
				l = t("./src/reddit/i18n/utils.ts"),
				c = t("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = t("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = t.n(d);
			const u = e => e.preventDefault();
			a.a = Object(n.a)(e => o.a.createElement(r.c, null, o.a.createElement(r.g, null, o.a.createElement(c.a, null, o.a.createElement(r.n, null, e.headerText || Object(l.c)("Confirm")), o.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(r.b, null)))), o.a.createElement(r.j, null, o.a.createElement(r.m, {
				className: m.a.ModalText
			}, e.modalText)), o.a.createElement(r.e, null, o.a.createElement(r.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || Object(l.c)("Cancel")), o.a.createElement(r.r, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: a => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
		},
		"./src/reddit/components/IdCard/CreatePollButton/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var s = t("./node_modules/react/index.js"),
				o = t.n(s),
				n = t("./src/lib/opener/index.ts"),
				r = t("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				i = t("./src/reddit/components/TrackingHelper/index.tsx"),
				l = t("./src/reddit/controls/Button/index.tsx"),
				c = t("./src/reddit/helpers/localStorage/index.ts"),
				d = t("./src/reddit/i18n/components.tsx"),
				m = t("./src/reddit/i18n/utils.ts"),
				u = t("./src/reddit/selectors/telemetry.ts"),
				p = t("./src/reddit/components/IdCard/index.m.less"),
				g = t.n(p);
			const h = ["kikpals", "blender", "learnpython", "iosbeta", "shouldibuythisgame", "callofduty", "pareidolia", "whatcarshouldibuy", "edm", "borderlands2", "cozyplaces", "pokemonmasters", "minecrafthelp", "coffee", "jeep", "homelab", "camping", "assassinscreed", "forhire", "fifacareers", "gametheorists", "plumbing", "fantasy_football", "newskaters", "learnmath", "spidermanps4", "applecard", "worldoftanks", "harrypotterwu", "dauntless", "podcasts", "sub4sub", "apstudents", "turkey", "marketing", "plantedtank", "hotwheels", "cycling", "halloween", "amdhelp", "tmobile", "bodyweightfitness", "chelseafc", "mcpe", "bikewrench", "gamestop", "techno", "patopapao", "diablo3", "batman", "physics", "purdue", "vaporwaveaesthetics", "boniver", "starsector", "lollapalooza", "deathstranding", "orangetheory", "software", "amazon", "cursedminecraft", "gamephysics", "stephenking", "gym", "formuladank", "datascience", "mariomaker2", "polska", "unrealengine", "paxpassexchange", "r6proleague", "navy", "hunterxhunter", "surfing", "chrome", "dqbuilders", "nbaforums", "comptia", "iptv", "adventuretime", "tall", "ft86", "mountainbiking", "orchids", "tarantino", "adderall", "sarmssourcetalk", "weather", "shield", "newtothenavy", "mcrealmsservers", "youtubegamers", "ramen", "colorado", "streaming", "asu", "makeupexchange", "aggies", "satisfactorygame", "queen", "rccars", "coinbase", "atetheonion", "astrogaming", "dji", "msp", "hypixelskyblock", "akalimains", "russian", "neverwinter", "badmuas", "bmx", "divinityoriginalsin", "boruto", "murica", "podcasting", "electricalengineering", "hungary", "adobeillustrator", "mrbeast", "ipadpro", "wgu", "campinggear", "seahawks", "delusionalcraigslist", "owconsole", "dyinglight", "bleach", "xcom", "epilepsy", "battlecats", "callofdutymobile", "sourdough", "vzla", "mturk", "chefknives", "teslore", "amateurroomporn", "virginiatech", "mangacollectors", "wiihacks", "northernlion", "gamedeals", "linuxmasterrace", "dreadlocks", "oregon", "lexus", "retropie", "redskins", "gta5modding", "birmingham", "g0ularte", "sbeve", "genesis_official", "im14andthisiswoooosh", "design_critiques", "libertarianmeme", "java", "srgrafo", "megaman", "norway", "orthodoxchristianity", "gorving", "bachelorinparadise", "brave_browser", "civilengineering", "skyfactory", "uofm", "jrpg", "omscs", "tefl", "jurassicworldevo", "violinist", "residency", "bokunometaacademia", "narutoshinobistriker", "saplings", "vegetablegardening", "sailormoon", "democraticsocialism", "toddlers", "nasa", "jacksonville", "climbingcirclejerk", "bicycletouring", "boomerhumour", "peyups", "ironmaiden", "steinsgate", "plantbaseddiet", "greysanatomy", "wowservers", "googlefi", "gerd", "talesfromtechsupport", "orks", "cryptoairdrop", "asheville", "alexa", "php", "cataclysmdda", "guiltygear", "scottishfootball", "bostonceltics", "jhinmains", "disneyemojiblitz", "mariokart", "telegram", "oklahoma", "paris", "riskofrain", "transdiy", "pkmntcgtrades", "destinychildglobal", "pinkomega", "audible", "huskers", "camaro", "engineeringporn", "evelynnmains", "gcxrep", "volleyball", "regularcarreviews", "toomeirlformeirl", "csmajors", "chernobyltv", "ck2gameofthrones", "aldi", "iceland", "phenibut", "dresdenfiles", "uofmn", "industrialized", "rs2vietnam", "realtors", "cytus", "switzerland", "javahelp", "ucr", "realmroyale", "turning", "offlinetv", "laclippers", "cardfightvanguard", "scottishpeopletwitter", "arenahs", "ethfinance", "usmcboot", "stronglifts5x5", "dfo", "forhonorvikings", "christmas", "narcolepsy", "leedsunited", "lawyers", "virginia", "sleepapnea", "jonbellion", "annarbor", "ygomarketplace", "massachusetts", "shoestring", "howtokeepanidiotbusy", "pokemoonsun", "palemua", "okc", "yms", "suboxone", "lgg7", "starfinder_rpg", "wingsoffire", "dumpsterdiving", "ratemydessert", "talesfromdf", "foxholegame", "socialism_101", "cfl", "k12sysadmin", "ripcity", "republic_of_teenagers", "lifeafterschool", "yandere_simulator", "seriouseats", "mordekaisermains", "usenet", "bloodbowl", "chicagobulls", "accuratebattlesim", "blackoutbattleroyale", "ffxi", "neekomains", "wizardsunitefriends", "marvelavengersproject", "iossetups", "roastmycat", "foofighters", "khazixmains", "disneypinswap", "superstarsmtown", "amipretty", "cardsagainsthumanity", "xfl", "limerence", "mephheads", "mordhaufashion", "papermario", "thefence", "boomtownfestival", "championship"];
			class b extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isDismissed: !1,
						isModalOpen: !1
					}, this.onConfirm = () => {
						Object(n.d)("https://forms.gle/1wn2oCNFz3mXVf9S8", n.c.BLANK)
					}, this.closeModal = () => {
						this.setState({
							isDismissed: !0,
							isModalOpen: !1
						})
					}, this.onCreatePostButtonClick = () => {
						this.setState({
							isModalOpen: !0
						}), Object(c.G)(), this.props.sendEvent(e => Object.assign({
							source: "id_card",
							action: "click",
							noun: "create_poll"
						}, u.defaults(e)))
					}
				}
				render() {
					return this.state.isDismissed || !h.includes(this.props.listingName.toLowerCase()) ? null : o.a.createElement(o.a.Fragment, null, o.a.createElement(l.f, {
						className: g.a.CreatePostButton,
						onClick: this.onCreatePostButtonClick
					}, o.a.createElement(d.c, null, "Submit a poll")), this.state.isModalOpen && o.a.createElement(r.a, {
						actionText: Object(m.c)("Sure"),
						cancelActionText: Object(m.c)("No, thanks"),
						headerText: Object(m.c)("Polls are not ready yet"),
						modalText: o.a.createElement(o.a.Fragment, null, "Sorry, Polls are not ready yet. We are working hard on it and are excited to share them with you.", o.a.createElement("br", null), o.a.createElement("br", null), "Do you have a few minutes to answer a couple of questions and help us make the new Polls post type even better?"),
						onConfirm: this.onConfirm,
						toggleModal: this.closeModal,
						withOverlay: !0
					}))
				}
			}
			a.default = Object(i.b)(b)
		}
	}
]);
//# sourceMappingURL=CreatePollButton.957a9d7b109255336eae.js.map