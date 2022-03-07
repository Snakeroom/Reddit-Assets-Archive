// https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.ec668f186592b5c41794.js
// Retrieved at 3/7/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
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
				return a
			})), n.d(t, "u", (function() {
				return d
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "k", (function() {
				return D
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "A", (function() {
				return U
			})), n.d(t, "B", (function() {
				return R
			})), n.d(t, "z", (function() {
				return C
			})), n.d(t, "y", (function() {
				return b
			})), n.d(t, "v", (function() {
				return w
			})), n.d(t, "w", (function() {
				return O
			})), n.d(t, "x", (function() {
				return L
			})), n.d(t, "d", (function() {
				return N
			}));
			const r = "MULTIREDDIT__MORE_POSTS_FAILED",
				o = "MULTIREDDIT__MORE_POSTS_LOADED",
				s = "MULTIREDDIT__MORE_POSTS_PENDING",
				a = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				d = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				i = "MULTIREDDIT__CREATE_FAILURE",
				c = "MULTIREDDIT__CREATE_PENDING",
				l = "MULTIREDDIT__CREATE_SUCCESS",
				u = "MULTIREDDIT__DELETE_PENDING",
				_ = "MULTIREDDIT__DELETE_SUCCESS",
				I = "MULTIREDDIT__DELETE_FAILURE",
				m = "MULTIREDDIT__DUPLICATE_PENDING",
				p = "MULTIREDDIT__DUPLICATE_SUCCESS",
				D = "MULTIREDDIT__DUPLICATE_FAILURE",
				E = "MULTIREDDIT__EDIT_FAILURE",
				T = "MULTIREDDIT__EDIT_PENDING",
				x = "MULTIREDDIT__EDIT_SUCCESS",
				f = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				M = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				S = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				U = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				R = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				C = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				b = 10,
				w = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				O = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				L = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var N;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(N || (N = {}))
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
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/MultiredditSidebar/index.tsx"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/multireddit.ts");
			const l = Object(i.u)(),
				u = Object(a.c)({
					multireddit: c.a,
					subredditCategory: i.m
				}),
				_ = Object(s.b)(u);
			t.default = l(_(e => o.a.createElement(d.a, e)))
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
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "p", (function() {
				return D
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "j", (function() {
				return M
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "g", (function() {
				return U
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "t", (function() {
				return O
			})), n.d(t, "u", (function() {
				return L
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "c", (function() {
				return h
			}));
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				d = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/Input/ModalInput.tsx"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const I = o.a.wrapped(c.a, "CloseIcon", u.a),
				m = o.a.section("ModalBody", u.a),
				p = o.a.section("ModalPostPreview", u.a),
				D = o.a.p("ModalText", u.a),
				E = o.a.div("ModalSmallText", u.a),
				T = o.a.div("ModalDescriptionText", u.a),
				x = o.a.div("ModalMetaText", u.a),
				f = o.a.label("ModalFormItem", u.a),
				M = o.a.wrapped(i.a, "ModalInput", u.a),
				S = o.a.label("ModalInputLabel", u.a),
				U = o.a.footer("ModalFooter", u.a),
				R = o.a.header("ModalHeader", u.a),
				C = o.a.div("ModalTitle", u.a),
				b = o.a.div("ModalAnnotation", u.a),
				w = o.a.div("ModalMain", u.a),
				O = o.a.textarea("TextArea", u.a),
				L = o.a.wrapped(d.l, "WarningButton", u.a),
				N = o.a.wrapped(d.l, "PrimaryButton", u.a),
				j = o.a.wrapped(d.o, "CancelButton", u.a),
				P = o.a.wrapped(d.r, "RemoveButton", u.a),
				h = ({
					className: e,
					...t
				}) => a.a.createElement(d.t, _({
					kind: d.b.Button,
					priority: d.c.Primary,
					className: Object(r.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return M
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/index.tsx"),
				I = n("./src/reddit/controls/Dropdown/Row.tsx"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				D = n("./src/reddit/components/OverflowMenu/index.m.less"),
				E = n.n(D);
			const T = c.a.wrapped(_.a, "_Dropdown", E.a),
				x = Object(u.a)(T),
				f = c.a.button("MenuButton", E.a),
				M = c.a.wrapped(I.b, "DropdownRow", E.a),
				S = Object(d.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(p.b)(t)(e)
				}),
				U = Object(a.b)(S, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				R = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = U(e => s.a.createElement(f, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": r.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(i.a)(e.className, {
					[E.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: R(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : s.a.createElement(m.a, {
				name: "overflow_horizontal",
				className: E.a.MenuIcon
			}), s.a.createElement(x, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				_ = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				I = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				m = n.n(I);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const D = Object(d.c)({
					currentUser: c.k,
					isNightMode: c.bb,
					isPresenceUserPrefEnabled: c.T,
					shouldHideNSFW: c.E
				}),
				E = Object(a.b)(D);
			t.a = E(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: a,
					...d
				} = e, c = Object(i.b)(null == t ? void 0 : t.accountIcon);
				return s.a.createElement("div", {
					className: Object(r.a)(m.a.currentUserIconWrapper, a)
				}, c ? s.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : s.a.createElement(_.b, p({}, d, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && s.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === i.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(a.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(s.b)(null, {
				closeModal: d.f
			})(_)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledMetaSeparator: "_3LS4zudUBagjFS7HjWJYxo",
				metaSeparator: "_37gsGHa8DMRAxBmQS-Ppg8"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/MetaSeparator/index.m.less"),
				d = n.n(a);
			const i = e => o.a.createElement("span", {
				className: Object(s.a)(d.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => o.a.createElement(i, {
				className: Object(s.a)(d.a.metaSeparator, e),
				isSmall: t
			})
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
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				i = n.n(d);
			t.a = Object(s.a)(e => o.a.createElement("div", {
				className: Object(a.a)(i.a.exapndLeftContainer, e.className)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.ec668f186592b5c41794.js.map