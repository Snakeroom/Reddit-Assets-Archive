// https://www.redditstatic.com/desktop2x/ChangeUsernameTooltip.163dcfafbc3dfb5229c7.js
// Retrieved at 5/26/2020, 3:00:06 PM by Reddit Dataminer v1.0.0
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
				buttonWrapper: "lvHFLjGg76LoUfNXv4eik",
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
				o = t.n(a),
				c = t("./src/higherOrderComponents/addOverlayEvents.tsx"),
				r = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = t("./src/reddit/components/TrackingHelper/index.tsx"),
				u = t("./src/reddit/controls/Button/index.tsx"),
				l = t("./src/reddit/helpers/trackers/changeUsername.ts"),
				p = t("./src/reddit/icons/svgs/Close/index.tsx"),
				E = t("./src/reddit/components/ChangeUsernameTooltip/index.m.less"),
				m = t.n(E);
			class N extends o.a.Component {
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
					N.shouldSendViewEvent && (N.shouldSendViewEvent = !1, this.props.sendEvent(Object(l.h)(l.b)))
				}
				render() {
					return o.a.createElement("div", {
						className: m.a.container
					}, o.a.createElement("div", {
						className: m.a.topLine
					}), o.a.createElement("button", {
						className: m.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, o.a.createElement(p.a, {
						className: m.a.closeIcon
					})), o.a.createElement("h5", {
						className: m.a.title
					}, s.fbt._("Do you want to change or keep this username?", null, {
						hk: "4vHGxH"
					})), o.a.createElement("p", {
						className: m.a.username
					}, o.a.createElement("span", {
						className: m.a.usernamePrefix
					}, "u/"), this.props.username), o.a.createElement("div", {
						className: m.a.buttonWrapper
					}, o.a.createElement(u.f, {
						className: Object(r.a)(m.a.commonBtn, m.a.primaryBtn),
						onClick: this.onChangeUsernameModalOpen
					}, s.fbt._("Change Username", null, {
						hk: "1nRhNE"
					})), o.a.createElement(u.n, {
						className: Object(r.a)(m.a.commonBtn, m.a.secondaryBtn),
						onClick: this.onKeepUsernameModalOpen
					}, s.fbt._("Keep Username", null, {
						hk: "GUBlZ"
					}))))
				}
			}
			N.shouldSendViewEvent = !0;
			const _ = Object(i.a)(N, [c.a.Click, c.a.Keydown, c.a.Resize]);
			n.default = Object(d.c)(_)
		},
		"./src/reddit/helpers/trackers/changeUsername.ts": function(e, n, t) {
			"use strict";
			t.d(n, "a", (function() {
				return E
			})), t.d(n, "b", (function() {
				return m
			})), t.d(n, "h", (function() {
				return _
			})), t.d(n, "d", (function() {
				return O
			})), t.d(n, "g", (function() {
				return C
			})), t.d(n, "c", (function() {
				return h
			})), t.d(n, "i", (function() {
				return b
			})), t.d(n, "e", (function() {
				return U
			})), t.d(n, "f", (function() {
				return T
			})), t.d(n, "j", (function() {
				return f
			}));
			var s, a, o = t("./src/reddit/actions/comment/index.ts"),
				c = t("./src/reddit/actions/modal.ts"),
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
				e.COMMENT = "comment", e.CUSTOM_FEED = "custom_feed", e.POST = "post", e.UNKNOWN = "unknown"
			}(a || (a = {}));
			const E = "popup",
				m = "tooltip",
				N = e => {
					if (!e) return a.UNKNOWN;
					switch (e.type) {
						case o.p:
						case o.j:
							return a.COMMENT;
						case c.c:
							if (e.payload === i.a.MULTIREDDIT_ADD_SUBREDDIT || e.payload === i.a.MULTIREDDIT_CREATE) return a.CUSTOM_FEED;
							break;
						case r.a:
							if (e.payload.args && e.payload.args[0] && "string" == typeof e.payload.args[0] && e.payload.args[0].includes(u.b)) return a.POST
					}
					return a.UNKNOWN
				},
				_ = (e, n) => t => Object.assign({}, Object(p.defaults)(t), {
					action: d.c.VIEW,
					actionInfo: Object(p.actionInfo)(t, {
						reason: n ? N(Object(l.a)(t)) : void 0
					}),
					noun: s.CHANGE_USERNAME_INITIAL,
					source: e
				}),
				O = (e, n) => t => Object.assign({}, Object(p.defaults)(t), {
					action: d.c.CLICK,
					noun: s.CHANGE_USERNAME_INITIAL,
					popup: {
						buttonText: n
					},
					source: e
				}),
				C = () => e => Object.assign({}, Object(p.defaults)(e), {
					action: d.c.VIEW,
					noun: s.CHANGE_USERNAME_CONFIRMATION,
					source: E
				}),
				h = e => n => Object.assign({}, Object(p.defaults)(n), {
					action: d.c.CLICK,
					noun: s.CHANGE_USERNAME_CONFIRMATION,
					source: E,
					popup: {
						buttonText: e
					}
				}),
				b = () => e => Object.assign({}, Object(p.defaults)(e), {
					action: d.c.VIEW,
					noun: s.CHANGE_USERNAME_INPUT,
					source: E
				}),
				U = () => e => Object.assign({}, Object(p.defaults)(e), {
					action: d.c.CLICK,
					noun: s.CHANGE_USERNAME_INPUT,
					popup: {
						buttonText: "next"
					},
					source: E
				}),
				T = () => e => Object.assign({}, Object(p.defaults)(e), {
					action: d.c.SELECT,
					noun: s.CHANGE_USERNAME_INPUT,
					source: E
				}),
				f = () => e => Object.assign({}, Object(p.defaults)(e), {
					action: d.c.VIEW,
					noun: s.CHANGE_USERNAME_SUCCESS,
					source: "toast"
				})
		}
	}
]);
//# sourceMappingURL=ChangeUsernameTooltip.163dcfafbc3dfb5229c7.js.map