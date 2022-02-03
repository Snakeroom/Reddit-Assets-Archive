// https://www.redditstatic.com/desktop2x/CreatePollButton.5c1e6344992d5e05b095.js
// Retrieved at 2/3/2022, 4:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CreatePollButton"], {
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, a) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/react/index.js"),
				r = a.n(o),
				s = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = a("./src/reddit/controls/TextButton/index.tsx"),
				d = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				c = a("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = a.n(c);
			const m = e => e.preventDefault();
			t.a = Object(s.a)(e => r.a.createElement(i.e, null, r.a.createElement(i.i, null, r.a.createElement(d.a, null, r.a.createElement(i.q, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(l.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(i.b, null)))), r.a.createElement(i.l, null, r.a.createElement(i.p, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(i.g, null, !e.hideCancelButton && r.a.createElement(i.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(i.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/IdCard/CreatePollButton/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/react/index.js"),
				r = a.n(o),
				s = a("./src/lib/opener/index.ts"),
				i = a("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = a("./src/reddit/components/TrackingHelper/index.tsx"),
				d = a("./src/reddit/controls/Button/index.tsx"),
				c = a("./src/reddit/helpers/localStorage/index.ts"),
				u = a("./src/reddit/selectors/telemetry.ts"),
				m = a("./src/reddit/components/IdCard/index.m.less"),
				p = a.n(m);
			const h = ["kikpals", "blender", "learnpython", "iosbeta", "shouldibuythisgame", "callofduty", "pareidolia", "whatcarshouldibuy", "edm", "borderlands2", "cozyplaces", "pokemonmasters", "minecrafthelp", "coffee", "jeep", "homelab", "camping", "assassinscreed", "forhire", "fifacareers", "gametheorists", "plumbing", "fantasy_football", "newskaters", "learnmath", "spidermanps4", "applecard", "worldoftanks", "harrypotterwu", "dauntless", "podcasts", "sub4sub", "apstudents", "turkey", "marketing", "plantedtank", "hotwheels", "cycling", "halloween", "amdhelp", "tmobile", "bodyweightfitness", "chelseafc", "mcpe", "bikewrench", "gamestop", "techno", "patopapao", "diablo3", "batman", "physics", "purdue", "vaporwaveaesthetics", "boniver", "starsector", "lollapalooza", "deathstranding", "orangetheory", "software", "amazon", "cursedminecraft", "gamephysics", "stephenking", "gym", "formuladank", "datascience", "mariomaker2", "polska", "unrealengine", "paxpassexchange", "r6proleague", "navy", "hunterxhunter", "surfing", "chrome", "dqbuilders", "nbaforums", "comptia", "iptv", "adventuretime", "tall", "ft86", "mountainbiking", "orchids", "tarantino", "adderall", "sarmssourcetalk", "weather", "shield", "newtothenavy", "mcrealmsservers", "youtubegamers", "ramen", "colorado", "streaming", "asu", "makeupexchange", "aggies", "satisfactorygame", "queen", "rccars", "coinbase", "atetheonion", "astrogaming", "dji", "msp", "hypixelskyblock", "akalimains", "russian", "neverwinter", "badmuas", "bmx", "divinityoriginalsin", "boruto", "murica", "podcasting", "electricalengineering", "hungary", "adobeillustrator", "mrbeast", "ipadpro", "wgu", "campinggear", "seahawks", "delusionalcraigslist", "owconsole", "dyinglight", "bleach", "xcom", "epilepsy", "battlecats", "callofdutymobile", "sourdough", "vzla", "mturk", "chefknives", "teslore", "amateurroomporn", "virginiatech", "mangacollectors", "wiihacks", "northernlion", "gamedeals", "linuxmasterrace", "dreadlocks", "oregon", "lexus", "retropie", "redskins", "gta5modding", "birmingham", "g0ularte", "sbeve", "genesis_official", "im14andthisiswoooosh", "design_critiques", "libertarianmeme", "java", "srgrafo", "megaman", "norway", "orthodoxchristianity", "gorving", "bachelorinparadise", "brave_browser", "civilengineering", "skyfactory", "uofm", "jrpg", "omscs", "tefl", "jurassicworldevo", "violinist", "residency", "bokunometaacademia", "narutoshinobistriker", "saplings", "vegetablegardening", "sailormoon", "democraticsocialism", "toddlers", "nasa", "jacksonville", "climbingcirclejerk", "bicycletouring", "boomerhumour", "peyups", "ironmaiden", "steinsgate", "plantbaseddiet", "greysanatomy", "wowservers", "googlefi", "gerd", "talesfromtechsupport", "orks", "cryptoairdrop", "asheville", "alexa", "php", "cataclysmdda", "guiltygear", "scottishfootball", "bostonceltics", "jhinmains", "disneyemojiblitz", "mariokart", "telegram", "oklahoma", "paris", "riskofrain", "transdiy", "pkmntcgtrades", "destinychildglobal", "pinkomega", "audible", "huskers", "camaro", "engineeringporn", "evelynnmains", "gcxrep", "volleyball", "regularcarreviews", "toomeirlformeirl", "csmajors", "chernobyltv", "ck2gameofthrones", "aldi", "iceland", "phenibut", "dresdenfiles", "uofmn", "industrialized", "rs2vietnam", "realtors", "cytus", "switzerland", "javahelp", "ucr", "realmroyale", "turning", "offlinetv", "laclippers", "cardfightvanguard", "scottishpeopletwitter", "arenahs", "ethfinance", "usmcboot", "stronglifts5x5", "dfo", "forhonorvikings", "christmas", "narcolepsy", "leedsunited", "lawyers", "virginia", "sleepapnea", "jonbellion", "annarbor", "ygomarketplace", "massachusetts", "shoestring", "howtokeepanidiotbusy", "pokemoonsun", "palemua", "okc", "yms", "suboxone", "lgg7", "starfinder_rpg", "wingsoffire", "dumpsterdiving", "ratemydessert", "talesfromdf", "foxholegame", "socialism_101", "cfl", "k12sysadmin", "ripcity", "republic_of_teenagers", "lifeafterschool", "yandere_simulator", "seriouseats", "mordekaisermains", "usenet", "bloodbowl", "chicagobulls", "accuratebattlesim", "blackoutbattleroyale", "ffxi", "neekomains", "wizardsunitefriends", "marvelavengersproject", "iossetups", "roastmycat", "foofighters", "khazixmains", "disneypinswap", "superstarsmtown", "amipretty", "cardsagainsthumanity", "xfl", "limerence", "mephheads", "mordhaufashion", "papermario", "thefence", "boomtownfestival", "championship"];
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isDismissed: !1,
						isModalOpen: !1
					}, this.onConfirm = () => {
						Object(s.e)("https://forms.gle/1wn2oCNFz3mXVf9S8", s.d.BLANK)
					}, this.closeModal = () => {
						this.setState({
							isDismissed: !0,
							isModalOpen: !1
						})
					}, this.onCreatePostButtonClick = () => {
						this.setState({
							isModalOpen: !0
						}), Object(c.mb)(), this.props.sendEvent(e => ({
							source: "id_card",
							action: "click",
							noun: "create_poll",
							...u.n(e)
						}))
					}
				}
				render() {
					return this.state.isDismissed || !h.includes(this.props.listingName.toLowerCase()) ? null : r.a.createElement(r.a.Fragment, null, r.a.createElement(d.l, {
						className: p.a.CreatePostButton,
						onClick: this.onCreatePostButtonClick
					}, n.fbt._("Submit a poll", null, {
						hk: "1N5qAj"
					})), this.state.isModalOpen && r.a.createElement(i.a, {
						actionText: n.fbt._("Sure", null, {
							hk: "1vHfdf"
						}),
						cancelActionText: n.fbt._("No, thanks", null, {
							hk: "20SZOo"
						}),
						headerText: n.fbt._("Polls are not ready yet", null, {
							hk: "3X3tQn"
						}),
						modalText: r.a.createElement(r.a.Fragment, null, "Sorry, Polls are not ready yet. We are working hard on it and are excited to share them with you.", r.a.createElement("br", null), r.a.createElement("br", null), "Do you have a few minutes to answer a couple of questions and help us make the new Polls post type even better?"),
						onConfirm: this.onConfirm,
						toggleModal: this.closeModal,
						withOverlay: !0
					}))
				}
			}
			t.default = Object(l.c)(g)
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, a) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return p
			})), a.d(t, "e", (function() {
				return h
			})), a.d(t, "n", (function() {
				return g
			})), a.d(t, "p", (function() {
				return f
			})), a.d(t, "o", (function() {
				return x
			})), a.d(t, "f", (function() {
				return b
			})), a.d(t, "m", (function() {
				return y
			})), a.d(t, "h", (function() {
				return C
			})), a.d(t, "j", (function() {
				return k
			})), a.d(t, "k", (function() {
				return w
			})), a.d(t, "g", (function() {
				return _
			})), a.d(t, "i", (function() {
				return v
			})), a.d(t, "q", (function() {
				return M
			})), a.d(t, "d", (function() {
				return T
			})), a.d(t, "l", (function() {
				return j
			})), a.d(t, "t", (function() {
				return B
			})), a.d(t, "u", (function() {
				return S
			})), a.d(t, "r", (function() {
				return E
			})), a.d(t, "a", (function() {
				return O
			})), a.d(t, "s", (function() {
				return P
			})), a.d(t, "c", (function() {
				return I
			}));
			var n = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/lessComponent.tsx"),
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
				i = a("./src/reddit/controls/Button/index.tsx"),
				l = a("./src/reddit/controls/Input/ModalInput.tsx"),
				d = a("./src/reddit/icons/svgs/Close/index.tsx"),
				c = a("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = a.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.wrapped(d.a, "CloseIcon", u.a),
				h = o.a.section("ModalBody", u.a),
				g = o.a.section("ModalPostPreview", u.a),
				f = o.a.p("ModalText", u.a),
				x = o.a.div("ModalSmallText", u.a),
				b = o.a.div("ModalDescriptionText", u.a),
				y = o.a.div("ModalMetaText", u.a),
				C = o.a.label("ModalFormItem", u.a),
				k = o.a.wrapped(l.a, "ModalInput", u.a),
				w = o.a.label("ModalInputLabel", u.a),
				_ = o.a.footer("ModalFooter", u.a),
				v = o.a.header("ModalHeader", u.a),
				M = o.a.div("ModalTitle", u.a),
				T = o.a.div("ModalAnnotation", u.a),
				j = o.a.div("ModalMain", u.a),
				B = o.a.textarea("TextArea", u.a),
				S = o.a.wrapped(i.l, "WarningButton", u.a),
				E = o.a.wrapped(i.l, "PrimaryButton", u.a),
				O = o.a.wrapped(i.o, "CancelButton", u.a),
				P = o.a.wrapped(i.r, "RemoveButton", u.a),
				I = ({
					className: e,
					...t
				}) => s.a.createElement(i.t, m({
					kind: i.b.Button,
					priority: i.c.Primary,
					className: Object(n.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				o = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				s = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/modal.ts"),
				l = a("./src/reddit/constants/keycodes.ts"),
				d = a("./src/reddit/controls/Input/index.m.less"),
				c = a.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === l.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...a
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(s.a)(c.a.input, e),
						onKeyDown: this.handleKeyDown
					}, a))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: i.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, a) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, a) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				o = a.n(n),
				r = a("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				s = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				l = a.n(i);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(s.a)(l.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: l.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: l.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CreatePollButton.5c1e6344992d5e05b095.js.map