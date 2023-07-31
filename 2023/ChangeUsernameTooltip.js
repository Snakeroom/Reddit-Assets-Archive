// https://www.redditstatic.com/desktop2x/ChangeUsernameTooltip.16db4da73c85f9f003db.js
// Retrieved at 7/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
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
				o = t("./node_modules/react/index.js"),
				r = t.n(o),
				a = t("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = t("./src/reddit/components/TrackingHelper/index.tsx"),
				u = t("./src/reddit/controls/Button/index.tsx"),
				l = t("./src/reddit/helpers/trackers/changeUsername.ts"),
				p = t("./src/reddit/icons/svgs/Close/index.tsx"),
				E = t("./src/reddit/components/ChangeUsernameTooltip/index.m.less"),
				m = t.n(E);
			class N extends r.a.Component {
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
					return r.a.createElement("div", {
						className: m.a.container
					}, r.a.createElement("div", {
						className: m.a.topLine
					}), r.a.createElement("button", {
						className: m.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, r.a.createElement(p.a, {
						className: m.a.closeIcon
					})), r.a.createElement("h5", {
						className: m.a.title
					}, s.fbt._("Do you want to change or keep this username?", null, {
						hk: "4vHGxH"
					})), r.a.createElement("p", {
						className: m.a.username
					}, r.a.createElement("span", {
						className: m.a.usernamePrefix
					}, "u/"), this.props.username), r.a.createElement("div", {
						className: m.a.buttonWrapper
					}, r.a.createElement(u.l, {
						className: Object(c.a)(m.a.commonBtn, m.a.primaryBtn),
						onClick: this.onChangeUsernameModalOpen
					}, s.fbt._("Change Username", null, {
						hk: "1nRhNE"
					})), r.a.createElement(u.r, {
						className: Object(c.a)(m.a.commonBtn, m.a.secondaryBtn),
						onClick: this.onKeepUsernameModalOpen
					}, s.fbt._("Keep Username", null, {
						hk: "GUBlZ"
					}))))
				}
			}
			N.shouldSendViewEvent = !0;
			const _ = Object(i.a)(N, [a.a.Click, a.a.Keydown, a.a.Resize]);
			n.default = Object(d.c)(_)
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
				return U
			})), t.d(n, "i", (function() {
				return T
			})), t.d(n, "e", (function() {
				return A
			})), t.d(n, "f", (function() {
				return I
			})), t.d(n, "j", (function() {
				return b
			}));
			var s, o, r = t("./src/reddit/actions/comment/constants.ts"),
				a = t("./src/reddit/actions/modal.ts"),
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
				N = e => {
					if (!e) return o.UNKNOWN;
					switch (e.type) {
						case r.s:
						case r.m:
							return o.COMMENT;
						case a.c:
							if (e.payload === i.a.MULTIREDDIT_ADD_SUBREDDIT || e.payload === i.a.MULTIREDDIT_CREATE) return o.CUSTOM_FEED;
							break;
						case c.a: {
							const n = _(e);
							if (n.startsWith("/user/")) return o.PROFILE;
							if (n.includes(u.b)) return o.POST;
							break
						}
					}
					return o.UNKNOWN
				},
				_ = e => e.payload.args && "string" == typeof e.payload.args[0] && e.payload.args[0] || "",
				C = (e, n) => t => ({
					...Object(p.q)(t),
					action: d.c.VIEW,
					actionInfo: Object(p.d)(t, {
						reason: n ? N(Object(l.a)(t)) : void 0
					}),
					noun: s.CHANGE_USERNAME_INITIAL,
					source: e
				}),
				h = (e, n) => t => ({
					...Object(p.q)(t),
					action: d.c.CLICK,
					noun: s.CHANGE_USERNAME_INITIAL,
					popup: {
						buttonText: n
					},
					source: e
				}),
				O = () => e => ({
					...Object(p.q)(e),
					action: d.c.VIEW,
					noun: s.CHANGE_USERNAME_CONFIRMATION,
					source: E
				}),
				U = e => n => ({
					...Object(p.q)(n),
					action: d.c.CLICK,
					noun: s.CHANGE_USERNAME_CONFIRMATION,
					source: E,
					popup: {
						buttonText: e
					}
				}),
				T = () => e => ({
					...Object(p.q)(e),
					action: d.c.VIEW,
					noun: s.CHANGE_USERNAME_INPUT,
					source: E
				}),
				A = () => e => ({
					...Object(p.q)(e),
					action: d.c.CLICK,
					noun: s.CHANGE_USERNAME_INPUT,
					popup: {
						buttonText: "next"
					},
					source: E
				}),
				I = () => e => ({
					...Object(p.q)(e),
					action: d.c.SELECT,
					noun: s.CHANGE_USERNAME_INPUT,
					source: E
				}),
				b = () => e => ({
					...Object(p.q)(e),
					action: d.c.VIEW,
					noun: s.CHANGE_USERNAME_SUCCESS,
					source: "toast"
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChangeUsernameTooltip.16db4da73c85f9f003db.js.map