// https://www.redditstatic.com/desktop2x/SubredditTopContent.f78ad981248f50772644.js
// Retrieved at 6/1/2022, 6:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditTopContent"], {
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less": function(e, t, n) {
			e.exports = {
				title: "_1sf7GjDaEBhme5ClA39yBo",
				closeButton: "_3NeLiUZNL4IFv7G1HHx8Km",
				communityBackground: "_1pX_BOlTi53SAMVSDu_OrT",
				seeAllPosts: "_2zf-tJ6dr3umn1gcuEpDk8",
				communityDescriptionPlaceholder: "_1RYE13EcDNn1A1X1-h42f_",
				arrowPlaceholder: "_1q9k3G4VKHdAOsl64CbSge",
				headerLink: "_2HnhAFvq_dYxe2LgLqRXfK",
				layout: "_1p-hDqS1MBOTryteGnBenr",
				widgetHeader: "_3vKpqOprvaCysVAD8GUe6L"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/memoize.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				d = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/constants/index.ts"),
				p = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				m = n("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				x = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = n("./src/reddit/components/Widgets/Base/index.tsx"),
				f = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				y = n("./src/reddit/constants/experiments.ts"),
				C = n("./src/reddit/helpers/chooseVariant/index.ts"),
				h = n("./src/reddit/selectors/user.ts");
			const T = e => Object(h.N)(e) || y.yf.ShowTopContent === Object(C.c)(e, {
				experimentEligibilitySelector: C.a,
				experimentName: y.sf
			});
			var v = n("./src/reddit/selectors/subreddit.ts"),
				M = n("./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less"),
				b = n.n(M);
			const U = Object(i.b)(() => Object(l.c)({
				inSubredditTopContentExperiment: T,
				subredditUrl: v.d
			}), e => ({
				trackDiscoveryUnitView: t => e((e, n) => f.a(n(), t)),
				trackDismissClick: t => e((e, n) => f.c(n(), t)),
				trackPostView: r()((t, n, o) => e((e, s) => f.s(s(), t, n, o)), (e, t) => {
					let {
						id: n
					} = e;
					return `${n}-${t}`
				})
			}));
			class S extends d.a.Component {
				constructor() {
					super(...arguments), this.onCloseClick = () => {
						const {
							discoveryUnit: e,
							onCloseClick: t,
							trackDismissClick: n
						} = this.props;
						e && n(e), t()
					}
				}
				componentDidMount() {
					const {
						discoveryUnit: e,
						trackDiscoveryUnitView: t
					} = this.props;
					e && t(e)
				}
				render() {
					const {
						inSubredditTopContentExperiment: e,
						subredditUrl: t,
						topContent: n
					} = this.props;
					if (!e || !n) return null;
					const {
						postIds: s,
						range: r
					} = n, a = `${t}${u.W.TOP}?t=${r}`, i = d.a.createElement(_.a, {
						className: b.a.widgetHeader
					}, d.a.createElement("button", {
						className: b.a.closeButton,
						onClick: this.onCloseClick
					}, d.a.createElement(x.b, {
						className: b.a.closeIcon,
						"data-redditstyle": !0
					})), d.a.createElement(c.a, {
						className: b.a.headerLink,
						to: a
					}, o.fbt._("Top posts from the past {range}", [o.fbt._param("range", r)], {
						hk: "xhJKf"
					})));
					return d.a.createElement("div", {
						className: this.props.className
					}, d.a.createElement(p.a, {
						className: b.a.layout,
						header: i,
						hidePadding: !0
					}, d.a.createElement(m.a, {
						discoveryUnit: this.props.discoveryUnit,
						searchDiscoveryUnit: this.props.searchDiscoveryUnit,
						isLoading: !1,
						isMiniCard: !1,
						items: s,
						searchOptions: this.props.searchOptions,
						showSubreddit: !0,
						showTopPosts: !0,
						singleSubredditMode: !0,
						onPostView: this.props.trackPostView
					})))
				}
			}
			t.default = U(S)
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
				return m
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "k", (function() {
				return M
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "t", (function() {
				return g
			})), n.d(t, "u", (function() {
				return B
			})), n.d(t, "r", (function() {
				return j
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "s", (function() {
				return k
			})), n.d(t, "c", (function() {
				return I
			}));
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				d = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/Input/ModalInput.tsx"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = s.a.wrapped(c.a, "CloseIcon", u.a),
				x = s.a.section("ModalBody", u.a),
				_ = s.a.section("ModalPostPreview", u.a),
				f = s.a.p("ModalText", u.a),
				y = s.a.div("ModalSmallText", u.a),
				C = s.a.div("ModalDescriptionText", u.a),
				h = s.a.div("ModalMetaText", u.a),
				T = s.a.label("ModalFormItem", u.a),
				v = s.a.wrapped(i.a, "ModalInput", u.a),
				M = s.a.label("ModalInputLabel", u.a),
				b = s.a.footer("ModalFooter", u.a),
				U = s.a.header("ModalHeader", u.a),
				S = s.a.div("ModalTitle", u.a),
				w = s.a.div("ModalAnnotation", u.a),
				D = s.a.div("ModalMain", u.a),
				g = s.a.textarea("TextArea", u.a),
				B = s.a.wrapped(d.l, "WarningButton", u.a),
				j = s.a.wrapped(d.l, "PrimaryButton", u.a),
				P = s.a.wrapped(d.o, "CancelButton", u.a),
				k = s.a.wrapped(d.r, "RemoveButton", u.a),
				I = e => {
					let {
						className: t,
						...n
					} = e;
					return a.a.createElement(d.t, p({
						kind: d.b.Button,
						priority: d.c.Primary,
						className: Object(o.a)(u.a.ConfirmButton, t)
					}, n))
				}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class p extends s.a.Component {
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
					return s.a.createElement("input", u({
						className: Object(a.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: d.f
			})(p)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditTopContent.f78ad981248f50772644.js.map