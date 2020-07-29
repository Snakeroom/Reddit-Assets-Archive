// https://www.redditstatic.com/desktop2x/ChangeUsernameTooltip.26b558f4edfacf4ecb3b.js
// Retrieved at 7/28/2020, 10:42:45 PM by Reddit Dataminer v1.0.0
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
				a = t("./node_modules/react/index.js"),
				c = t.n(a),
				o = t("./src/higherOrderComponents/addOverlayEvents.tsx"),
				r = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = t("./src/reddit/components/TrackingHelper/index.tsx"),
				u = t("./src/reddit/controls/Button/index.tsx"),
				l = t("./src/reddit/helpers/trackers/changeUsername.ts"),
				p = t("./src/reddit/icons/svgs/Close/index.tsx"),
				E = t("./src/reddit/components/ChangeUsernameTooltip/index.m.less"),
				m = t.n(E);
			class O extends c.a.Component {
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
					O.shouldSendViewEvent && (O.shouldSendViewEvent = !1, this.props.sendEvent(Object(l.h)(l.b)))
				}
				render() {
					return c.a.createElement("div", {
						className: m.a.container
					}, c.a.createElement("div", {
						className: m.a.topLine
					}), c.a.createElement("button", {
						className: m.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, c.a.createElement(p.a, {
						className: m.a.closeIcon
					})), c.a.createElement("h5", {
						className: m.a.title
					}, s.fbt._("Do you want to change or keep this username?", null, {
						hk: "4vHGxH"
					})), c.a.createElement("p", {
						className: m.a.username
					}, c.a.createElement("span", {
						className: m.a.usernamePrefix
					}, "u/"), this.props.username), c.a.createElement("div", {
						className: m.a.buttonWrapper
					}, c.a.createElement(u.f, {
						className: Object(r.a)(m.a.commonBtn, m.a.primaryBtn),
						onClick: this.onChangeUsernameModalOpen
					}, s.fbt._("Change Username", null, {
						hk: "1nRhNE"
					})), c.a.createElement(u.n, {
						className: Object(r.a)(m.a.commonBtn, m.a.secondaryBtn),
						onClick: this.onKeepUsernameModalOpen
					}, s.fbt._("Keep Username", null, {
						hk: "GUBlZ"
					}))))
				}
			}
			O.shouldSendViewEvent = !0;
			const _ = Object(i.a)(O, [o.a.Click, o.a.Keydown, o.a.Resize]);
			n.default = Object(d.c)(_)
		},
		"./src/reddit/helpers/trackers/changeUsername.ts": function(e, n, t) {
			"use strict";
			t.d(n, "a", (function() {
				return E
			})), t.d(n, "b", (function() {
				return m
			})), t.d(n, "h", (function() {
				return N
			})), t.d(n, "d", (function() {
				return C
			})), t.d(n, "g", (function() {
				return b
			})), t.d(n, "c", (function() {
				return h
			})), t.d(n, "i", (function() {
				return f
			})), t.d(n, "e", (function() {
				return T
			})), t.d(n, "f", (function() {
				return U
			})), t.d(n, "j", (function() {
				return g
			}));
			var s, a, c = t("./src/reddit/actions/comment/index.ts"),
				o = t("./src/reddit/actions/modal.ts"),
				r = t("./src/reddit/constants/actions.ts"),
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
			}(a || (a = {}));
			const E = "popup",
				m = "tooltip",
				O = e => {
					if (!e) return a.UNKNOWN;
					switch (e.type) {
						case c.p:
						case c.j:
							return a.COMMENT;
						case o.c:
							if (e.payload === i.a.MULTIREDDIT_ADD_SUBREDDIT || e.payload === i.a.MULTIREDDIT_CREATE) return a.CUSTOM_FEED;
							break;
						case r.a: {
							const n = _(e);
							if (n.startsWith("/user/")) return a.PROFILE;
							if (n.includes(u.b)) return a.POST;
							break
						}
					}
					return a.UNKNOWN
				},
				_ = e => e.payload.args && "string" == typeof e.payload.args[0] && e.payload.args[0] || "",
				N = (e, n) => t => Object.assign(Object.assign({}, Object(p.defaults)(t)), {
					action: d.c.VIEW,
					actionInfo: Object(p.actionInfo)(t, {
						reason: n ? O(Object(l.a)(t)) : void 0
					}),
					noun: s.CHANGE_USERNAME_INITIAL,
					source: e
				}),
				C = (e, n) => t => Object.assign(Object.assign({}, Object(p.defaults)(t)), {
					action: d.c.CLICK,
					noun: s.CHANGE_USERNAME_INITIAL,
					popup: {
						buttonText: n
					},
					source: e
				}),
				b = () => e => Object.assign(Object.assign({}, Object(p.defaults)(e)), {
					action: d.c.VIEW,
					noun: s.CHANGE_USERNAME_CONFIRMATION,
					source: E
				}),
				h = e => n => Object.assign(Object.assign({}, Object(p.defaults)(n)), {
					action: d.c.CLICK,
					noun: s.CHANGE_USERNAME_CONFIRMATION,
					source: E,
					popup: {
						buttonText: e
					}
				}),
				f = () => e => Object.assign(Object.assign({}, Object(p.defaults)(e)), {
					action: d.c.VIEW,
					noun: s.CHANGE_USERNAME_INPUT,
					source: E
				}),
				T = () => e => Object.assign(Object.assign({}, Object(p.defaults)(e)), {
					action: d.c.CLICK,
					noun: s.CHANGE_USERNAME_INPUT,
					popup: {
						buttonText: "next"
					},
					source: E
				}),
				U = () => e => Object.assign(Object.assign({}, Object(p.defaults)(e)), {
					action: d.c.SELECT,
					noun: s.CHANGE_USERNAME_INPUT,
					source: E
				}),
				g = () => e => Object.assign(Object.assign({}, Object(p.defaults)(e)), {
					action: d.c.VIEW,
					noun: s.CHANGE_USERNAME_SUCCESS,
					source: "toast"
				})
		}
	}
]);
//# sourceMappingURL=ChangeUsernameTooltip.26b558f4edfacf4ecb3b.js.map