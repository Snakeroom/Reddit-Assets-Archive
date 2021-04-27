// https://www.redditstatic.com/desktop2x/ChangeUsernameTooltip.382919216043f7c73e9c.js
// Retrieved at 4/27/2021, 9:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChangeUsernameTooltip"], {
		"./src/reddit/components/ChangeUsernameTooltip/index.m.less": function(e, n, t) {
			e.exports = {
				closeIcon: "_2-ldLIsQN5O_ifhbTuAc_g",
				closeWrapper: "_2rTvRcuKpM60TWFtmch-9c",
				container: "_14TDRVDZJj2YqAP-N0a4kj",
				topLine: "k_Oo03XySnmf-UMMOirS-",
				title: "_3pcdqdRWruf7eepiLXw4CB",
				username: "_1G1CITYgxpC6TIO7TGwhG3",
				usernamePrefix: "_1Tq29ay6ogsCeK60Ouhv_q",
				commonBtn: "_2c8uIH6hCLT9iEVO5N8-9o",
				primaryBtn: "qUwq87ZWjStAxoxwoPOJA",
				secondaryBtn: "MnLwM5PL1ET2BmK5lLIvR"
			}
		},
		"./src/reddit/components/ChangeUsernameTooltip/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var s = t("./node_modules/fbt/lib/FbtPublic.js"),
				o = t("./node_modules/react/index.js"),
				a = t.n(o),
				r = t("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = t("./src/reddit/components/TrackingHelper/index.tsx"),
				u = t("./src/reddit/controls/Button/index.tsx"),
				l = t("./src/reddit/helpers/trackers/changeUsername.ts"),
				p = t("./src/reddit/icons/svgs/Close/index.tsx"),
				E = t("./src/reddit/components/ChangeUsernameTooltip/index.m.less"),
				m = t.n(E);
			class _ extends a.a.Component {
				constructor() {
					super(...arguments), this.onChangeUsernameModalOpen = () => {
						this.props.sendEvent(Object(l.d)(l.b, "change")), this.props.openChangeUsernameModal()
					}, this.onCloseTooltip = () => {
						this.props.closeTooltip()
					}, this.onKeepUsernameModalOpen = () => {
						this.props.sendEvent(Object(l.d)(l.b, "keep")), this.props.openKeepUsernameModal()
					}
				}
				componentDidMount() {
					_.shouldSendViewEvent && (_.shouldSendViewEvent = !1, this.props.sendEvent(Object(l.h)(l.b)))
				}
				render() {
					return a.a.createElement("div", {
						className: m.a.container
					}, a.a.createElement("div", {
						className: m.a.topLine
					}), a.a.createElement("button", {
						className: m.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, a.a.createElement(p.a, {
						className: m.a.closeIcon
					})), a.a.createElement("h5", {
						className: m.a.title
					}, s.fbt._("Do you want to change or keep this username?", null, {
						hk: "4vHGxH"
					})), a.a.createElement("p", {
						className: m.a.username
					}, a.a.createElement("span", {
						className: m.a.usernamePrefix
					}, "u/"), this.props.username), a.a.createElement("div", {
						className: m.a.buttonWrapper
					}, a.a.createElement(u.i, {
						className: Object(c.a)(m.a.commonBtn, m.a.primaryBtn),
						onClick: this.onChangeUsernameModalOpen
					}, s.fbt._("Change Username", null, {
						hk: "1nRhNE"
					})), a.a.createElement(u.o, {
						className: Object(c.a)(m.a.commonBtn, m.a.secondaryBtn),
						onClick: this.onKeepUsernameModalOpen
					}, s.fbt._("Keep Username", null, {
						hk: "GUBlZ"
					}))))
				}
			}
			_.shouldSendViewEvent = !0;
			const N = Object(i.a)(_, [r.a.Click, r.a.Keydown, r.a.Resize]);
			n.default = Object(d.c)(N)
		},
		"./src/reddit/helpers/trackers/changeUsername.ts": function(e, n, t) {
			"use strict";
			t.d(n, "a", (function() {
				return E
			})), t.d(n, "b", (function() {
				return m
			})), t.d(n, "h", (function() {
				return C
			})), t.d(n, "d", (function() {
				return h
			})), t.d(n, "g", (function() {
				return O
			})), t.d(n, "c", (function() {
				return T
			})), t.d(n, "i", (function() {
				return U
			})), t.d(n, "e", (function() {
				return f
			})), t.d(n, "f", (function() {
				return A
			})), t.d(n, "j", (function() {
				return I
			}));
			var s, o, a = t("./src/reddit/actions/comment/constants.ts"),
				r = t("./src/reddit/actions/modal.ts"),
				c = t("./src/reddit/constants/actions.ts"),
				i = t("./src/reddit/constants/modals.ts"),
				d = t("./src/reddit/constants/tracking.ts"),
				u = t("./src/reddit/routes/postCreation/constants.ts"),
				l = t("./src/reddit/selectors/interceptedAction.ts"),
				p = t("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.CHANGE_USERNAME_INITIAL = "change_username_initial", e.CHANGE_USERNAME_CONFIRMATION = "change_username_confirmation", e.CHANGE_USERNAME_INPUT = "change_username_input", e.CHANGE_USERNAME_SUCCESS = "change_username_success"
			}(s || (s = {})),
			function(e) {
				e.COMMENT = "comment", e.CUSTOM_FEED = "custom_feed", e.POST = "post", e.PROFILE = "profile", e.UNKNOWN = "unknown"
			}(o || (o = {}));
			const E = "popup",
				m = "tooltip",
				_ = e => {
					if (!e) return o.UNKNOWN;
					switch (e.type) {
						case a.q:
						case a.k:
							return o.COMMENT;
						case r.c:
							if (e.payload === i.a.MULTIREDDIT_ADD_SUBREDDIT || e.payload === i.a.MULTIREDDIT_CREATE) return o.CUSTOM_FEED;
							break;
						case c.a: {
							const n = N(e);
							if (n.startsWith("/user/")) return o.PROFILE;
							if (n.includes(u.b)) return o.POST;
							break
						}
					}
					return o.UNKNOWN
				},
				N = e => e.payload.args && "string" == typeof e.payload.args[0] && e.payload.args[0] || "",
				C = (e, n) => t => ({
					...Object(p.defaults)(t),
					action: d.c.VIEW,
					actionInfo: Object(p.actionInfo)(t, {
						reason: n ? _(Object(l.a)(t)) : void 0
					}),
					noun: s.CHANGE_USERNAME_INITIAL,
					source: e
				}),
				h = (e, n) => t => ({
					...Object(p.defaults)(t),
					action: d.c.CLICK,
					noun: s.CHANGE_USERNAME_INITIAL,
					popup: {
						buttonText: n
					},
					source: e
				}),
				O = () => e => ({
					...Object(p.defaults)(e),
					action: d.c.VIEW,
					noun: s.CHANGE_USERNAME_CONFIRMATION,
					source: E
				}),
				T = e => n => ({
					...Object(p.defaults)(n),
					action: d.c.CLICK,
					noun: s.CHANGE_USERNAME_CONFIRMATION,
					source: E,
					popup: {
						buttonText: e
					}
				}),
				U = () => e => ({
					...Object(p.defaults)(e),
					action: d.c.VIEW,
					noun: s.CHANGE_USERNAME_INPUT,
					source: E
				}),
				f = () => e => ({
					...Object(p.defaults)(e),
					action: d.c.CLICK,
					noun: s.CHANGE_USERNAME_INPUT,
					popup: {
						buttonText: "next"
					},
					source: E
				}),
				A = () => e => ({
					...Object(p.defaults)(e),
					action: d.c.SELECT,
					noun: s.CHANGE_USERNAME_INPUT,
					source: E
				}),
				I = () => e => ({
					...Object(p.defaults)(e),
					action: d.c.VIEW,
					noun: s.CHANGE_USERNAME_SUCCESS,
					source: "toast"
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChangeUsernameTooltip.382919216043f7c73e9c.js.map