// https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.235f6e0aa12854ceb48d.js
// Retrieved at 4/7/2022, 6:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-AdHocMultiredditSidebar"], {
		"./src/reddit/actions/multireddit/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return r
			})), n.d(t, "r", (function() {
				return o
			})), n.d(t, "s", (function() {
				return s
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "u", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "l", (function() {
				return T
			})), n.d(t, "m", (function() {
				return D
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "p", (function() {
				return M
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "A", (function() {
				return S
			})), n.d(t, "B", (function() {
				return R
			})), n.d(t, "z", (function() {
				return C
			})), n.d(t, "y", (function() {
				return L
			})), n.d(t, "v", (function() {
				return O
			})), n.d(t, "w", (function() {
				return b
			})), n.d(t, "x", (function() {
				return N
			})), n.d(t, "d", (function() {
				return A
			}));
			const r = "MULTIREDDIT__MORE_POSTS_FAILED",
				o = "MULTIREDDIT__MORE_POSTS_LOADED",
				s = "MULTIREDDIT__MORE_POSTS_PENDING",
				d = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				a = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				i = "MULTIREDDIT__CREATE_FAILURE",
				c = "MULTIREDDIT__CREATE_PENDING",
				u = "MULTIREDDIT__CREATE_SUCCESS",
				l = "MULTIREDDIT__DELETE_PENDING",
				_ = "MULTIREDDIT__DELETE_SUCCESS",
				I = "MULTIREDDIT__DELETE_FAILURE",
				T = "MULTIREDDIT__DUPLICATE_PENDING",
				D = "MULTIREDDIT__DUPLICATE_SUCCESS",
				E = "MULTIREDDIT__DUPLICATE_FAILURE",
				m = "MULTIREDDIT__EDIT_FAILURE",
				f = "MULTIREDDIT__EDIT_PENDING",
				M = "MULTIREDDIT__EDIT_SUCCESS",
				U = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				p = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				x = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				S = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				R = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				C = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				L = 10,
				O = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				b = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				N = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var A;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(A || (A = {}))
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				o = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				s = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/components/AdHocMultiredditSidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/MultiredditSidebar/index.tsx"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/multireddit.ts");
			const u = Object(i.u)(),
				l = Object(d.c)({
					multireddit: c.a,
					subredditCategory: i.m
				}),
				_ = Object(s.b)(l);
			t.default = u(_(e => o.a.createElement(a.a, e)))
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "n", (function() {
				return D
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "m", (function() {
				return M
			})), n.d(t, "h", (function() {
				return U
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "t", (function() {
				return b
			})), n.d(t, "u", (function() {
				return N
			})), n.d(t, "r", (function() {
				return A
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "c", (function() {
				return y
			}));
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				s = n("./node_modules/react/index.js"),
				d = n.n(s),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/Input/ModalInput.tsx"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				l = n.n(u);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const I = o.a.wrapped(c.a, "CloseIcon", l.a),
				T = o.a.section("ModalBody", l.a),
				D = o.a.section("ModalPostPreview", l.a),
				E = o.a.p("ModalText", l.a),
				m = o.a.div("ModalSmallText", l.a),
				f = o.a.div("ModalDescriptionText", l.a),
				M = o.a.div("ModalMetaText", l.a),
				U = o.a.label("ModalFormItem", l.a),
				p = o.a.wrapped(i.a, "ModalInput", l.a),
				x = o.a.label("ModalInputLabel", l.a),
				S = o.a.footer("ModalFooter", l.a),
				R = o.a.header("ModalHeader", l.a),
				C = o.a.div("ModalTitle", l.a),
				L = o.a.div("ModalAnnotation", l.a),
				O = o.a.div("ModalMain", l.a),
				b = o.a.textarea("TextArea", l.a),
				N = o.a.wrapped(a.l, "WarningButton", l.a),
				A = o.a.wrapped(a.l, "PrimaryButton", l.a),
				v = o.a.wrapped(a.o, "CancelButton", l.a),
				P = o.a.wrapped(a.r, "RemoveButton", l.a),
				y = e => {
					let {
						className: t,
						...n
					} = e;
					return d.a.createElement(a.t, _({
						kind: a.b.Button,
						priority: a.c.Primary,
						className: Object(r.a)(l.a.ConfirmButton, t)
					}, n))
				}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				l = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				_ = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				I = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				T = n.n(I);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = Object(a.c)({
					currentUser: c.k,
					isNightMode: c.db,
					isPresenceUserPrefEnabled: c.V,
					shouldHideNSFW: c.F
				}),
				m = Object(d.b)(E);
			t.a = m(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: d,
					...a
				} = e, c = Object(i.b)(null == t ? void 0 : t.accountIcon);
				return s.a.createElement("div", {
					className: Object(r.a)(T.a.currentUserIconWrapper, d)
				}, c ? s.a.createElement(l.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : s.a.createElement(_.b, D({}, a, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && s.a.createElement(u.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Input/index.m.less"),
				u = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === i.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return o.a.createElement("input", l({
						className: Object(d.a)(u.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(s.b)(null, {
				closeModal: a.f
			})(_)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/endpoints/subreddit/recommendations.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/redditGQL/operations/SubredditRecommendations.json");
			t.a = (e, t) => Object(r.a)(e, {
				...o,
				variables: t
			})
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(o);
			t.a = r.a.div("inlineRow", s.a)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				i = n.n(a);
			t.a = Object(s.a)(e => o.a.createElement("div", {
				className: Object(d.a)(i.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: i.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: i.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"074eb98957ec"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.235f6e0aa12854ceb48d.js.map