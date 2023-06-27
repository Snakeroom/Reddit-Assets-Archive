// https://www.redditstatic.com/desktop2x/CreatePollButton.094f4c2a4e6a62cfd3ae.js
// Retrieved at 6/27/2023, 6:20:04 PM by Reddit Dataminer v1.0.0
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
			var o = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				n = t.n(s),
				r = t("./src/higherOrderComponents/asModal/index.tsx"),
				i = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = t("./src/reddit/controls/TextButton/index.tsx"),
				c = t("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = t("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = t.n(d);
			const u = e => e.preventDefault();
			a.a = Object(r.a)(e => n.a.createElement(i.e, null, n.a.createElement(i.i, null, n.a.createElement(c.a, null, n.a.createElement(i.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), n.a.createElement(l.a, {
				onClick: a => {
					e.onClose && e.onClose(a), e.toggleModal && e.toggleModal()
				}
			}, n.a.createElement(i.b, null)))), n.a.createElement(i.l, null, n.a.createElement(i.p, {
				className: m.a.ModalText
			}, e.modalText)), n.a.createElement(i.g, null, !e.hideCancelButton && n.a.createElement(i.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), n.a.createElement(i.u, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: a => {
					e.onConfirm(a), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/IdCard/CreatePollButton/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var o = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				n = t.n(s),
				r = t("./src/lib/opener/index.ts"),
				i = t("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = t("./src/reddit/components/TrackingHelper/index.tsx"),
				c = t("./src/reddit/controls/Button/index.tsx"),
				d = t("./src/reddit/helpers/localStorage/index.ts"),
				m = t("./src/reddit/selectors/telemetry.ts"),
				u = t("./src/reddit/components/IdCard/index.m.less"),
				p = t.n(u);
			const h = ["kikpals", "blender", "learnpython", "iosbeta", "shouldibuythisgame", "callofduty", "pareidolia", "whatcarshouldibuy", "edm", "borderlands2", "cozyplaces", "pokemonmasters", "minecrafthelp", "coffee", "jeep", "homelab", "camping", "assassinscreed", "forhire", "fifacareers", "gametheorists", "plumbing", "fantasy_football", "newskaters", "learnmath", "spidermanps4", "applecard", "worldoftanks", "harrypotterwu", "dauntless", "podcasts", "sub4sub", "apstudents", "turkey", "marketing", "plantedtank", "hotwheels", "cycling", "halloween", "amdhelp", "tmobile", "bodyweightfitness", "chelseafc", "mcpe", "bikewrench", "gamestop", "techno", "patopapao", "diablo3", "batman", "physics", "purdue", "vaporwaveaesthetics", "boniver", "starsector", "lollapalooza", "deathstranding", "orangetheory", "software", "amazon", "cursedminecraft", "gamephysics", "stephenking", "gym", "formuladank", "datascience", "mariomaker2", "polska", "unrealengine", "paxpassexchange", "r6proleague", "navy", "hunterxhunter", "surfing", "chrome", "dqbuilders", "nbaforums", "comptia", "iptv", "adventuretime", "tall", "ft86", "mountainbiking", "orchids", "tarantino", "adderall", "sarmssourcetalk", "weather", "shield", "newtothenavy", "mcrealmsservers", "youtubegamers", "ramen", "colorado", "streaming", "asu", "makeupexchange", "aggies", "satisfactorygame", "queen", "rccars", "coinbase", "atetheonion", "astrogaming", "dji", "msp", "hypixelskyblock", "akalimains", "russian", "neverwinter", "badmuas", "bmx", "divinityoriginalsin", "boruto", "murica", "podcasting", "electricalengineering", "hungary", "adobeillustrator", "mrbeast", "ipadpro", "wgu", "campinggear", "seahawks", "delusionalcraigslist", "owconsole", "dyinglight", "bleach", "xcom", "epilepsy", "battlecats", "callofdutymobile", "sourdough", "vzla", "mturk", "chefknives", "teslore", "amateurroomporn", "virginiatech", "mangacollectors", "wiihacks", "northernlion", "gamedeals", "linuxmasterrace", "dreadlocks", "oregon", "lexus", "retropie", "redskins", "gta5modding", "birmingham", "g0ularte", "sbeve", "genesis_official", "im14andthisiswoooosh", "design_critiques", "libertarianmeme", "java", "srgrafo", "megaman", "norway", "orthodoxchristianity", "gorving", "bachelorinparadise", "brave_browser", "civilengineering", "skyfactory", "uofm", "jrpg", "omscs", "tefl", "jurassicworldevo", "violinist", "residency", "bokunometaacademia", "narutoshinobistriker", "saplings", "vegetablegardening", "sailormoon", "democraticsocialism", "toddlers", "nasa", "jacksonville", "climbingcirclejerk", "bicycletouring", "boomerhumour", "peyups", "ironmaiden", "steinsgate", "plantbaseddiet", "greysanatomy", "wowservers", "googlefi", "gerd", "talesfromtechsupport", "orks", "cryptoairdrop", "asheville", "alexa", "php", "cataclysmdda", "guiltygear", "scottishfootball", "bostonceltics", "jhinmains", "disneyemojiblitz", "mariokart", "telegram", "oklahoma", "paris", "riskofrain", "transdiy", "pkmntcgtrades", "destinychildglobal", "pinkomega", "audible", "huskers", "camaro", "engineeringporn", "evelynnmains", "gcxrep", "volleyball", "regularcarreviews", "toomeirlformeirl", "csmajors", "chernobyltv", "ck2gameofthrones", "aldi", "iceland", "phenibut", "dresdenfiles", "uofmn", "industrialized", "rs2vietnam", "realtors", "cytus", "switzerland", "javahelp", "ucr", "realmroyale", "turning", "offlinetv", "laclippers", "cardfightvanguard", "scottishpeopletwitter", "arenahs", "ethfinance", "usmcboot", "stronglifts5x5", "dfo", "forhonorvikings", "christmas", "narcolepsy", "leedsunited", "lawyers", "virginia", "sleepapnea", "jonbellion", "annarbor", "ygomarketplace", "massachusetts", "shoestring", "howtokeepanidiotbusy", "pokemoonsun", "palemua", "okc", "yms", "suboxone", "lgg7", "starfinder_rpg", "wingsoffire", "dumpsterdiving", "ratemydessert", "talesfromdf", "foxholegame", "socialism_101", "cfl", "k12sysadmin", "ripcity", "republic_of_teenagers", "lifeafterschool", "yandere_simulator", "seriouseats", "mordekaisermains", "usenet", "bloodbowl", "chicagobulls", "accuratebattlesim", "blackoutbattleroyale", "ffxi", "neekomains", "wizardsunitefriends", "marvelavengersproject", "iossetups", "roastmycat", "foofighters", "khazixmains", "disneypinswap", "superstarsmtown", "amipretty", "cardsagainsthumanity", "xfl", "limerence", "mephheads", "mordhaufashion", "papermario", "thefence", "boomtownfestival", "championship"];
			class g extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isDismissed: !1,
						isModalOpen: !1
					}, this.onConfirm = () => {
						Object(r.e)("https://forms.gle/1wn2oCNFz3mXVf9S8", r.d.BLANK)
					}, this.closeModal = () => {
						this.setState({
							isDismissed: !0,
							isModalOpen: !1
						})
					}, this.onCreatePostButtonClick = () => {
						this.setState({
							isModalOpen: !0
						}), Object(d.rb)(), this.props.sendEvent(e => ({
							source: "id_card",
							action: "click",
							noun: "create_poll",
							...m.p(e)
						}))
					}
				}
				render() {
					return this.state.isDismissed || !h.includes(this.props.listingName.toLowerCase()) ? null : n.a.createElement(n.a.Fragment, null, n.a.createElement(c.l, {
						className: p.a.CreatePostButton,
						onClick: this.onCreatePostButtonClick
					}, o.fbt._("Submit a poll", null, {
						hk: "1N5qAj"
					})), this.state.isModalOpen && n.a.createElement(i.a, {
						actionText: o.fbt._("Sure", null, {
							hk: "1vHfdf"
						}),
						cancelActionText: o.fbt._("No, thanks", null, {
							hk: "20SZOo"
						}),
						headerText: o.fbt._("Polls are not ready yet", null, {
							hk: "3X3tQn"
						}),
						modalText: n.a.createElement(n.a.Fragment, null, "Sorry, Polls are not ready yet. We are working hard on it and are excited to share them with you.", n.a.createElement("br", null), n.a.createElement("br", null), "Do you have a few minutes to answer a couple of questions and help us make the new Polls post type even better?"),
						onConfirm: this.onConfirm,
						toggleModal: this.closeModal,
						withOverlay: !0
					}))
				}
			}
			a.default = Object(l.c)(g)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CreatePollButton.094f4c2a4e6a62cfd3ae.js.map