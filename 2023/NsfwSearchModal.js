// https://www.redditstatic.com/desktop2x/NsfwSearchModal.f718edc35811cae568b3.js
// Retrieved at 5/10/2023, 11:10:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NsfwSearchModal"], {
		"./src/reddit/actions/search/safeSearch.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/history/esm/history.js"),
				r = s("./src/lib/addQueryParams/index.ts"),
				o = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/reddit/constants/parameters.ts"),
				c = s("./src/reddit/helpers/search/searchResultsTabTo.ts");
			const i = (e, t) => async s => {
				var i;
				const {
					include_over_18: l,
					...d
				} = (null == t ? void 0 : t.queryParams) || {}, u = (null === (i = null == t ? void 0 : t.routeMatch) || void 0 === i ? void 0 : i.match.url) || c.a, b = {
					...d,
					...e && {
						[a.m]: "1"
					}
				}, m = {
					pathname: u,
					search: Object(r.a)("", {
						...b
					})
				};
				s(Object(o.b)(Object(n.c)(m)))
			}
		},
		"./src/reddit/components/Upsell/NsfwSearch/Modal.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/higherOrderComponents/asModal/index.tsx"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/lodash/noop.js"),
				a = s.n(o),
				c = s("./node_modules/react/index.js"),
				i = s.n(c),
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				d = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/counters/nsfwBypassableBlocking.ts"),
				p = s("./src/reddit/helpers/trackers/nsfwSignupBypassableUpsell.ts"),
				f = s("./src/reddit/helpers/trackers/nsfwSignupUpsell.ts"),
				C = s("./src/reddit/icons/svgs/NSFWWarningIcon/index.tsx"),
				h = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				O = s("./src/reddit/actions/contentGate.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/actions/modal.ts"),
				v = s("./src/reddit/actions/search/safeSearch.ts"),
				x = s("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				y = s("./src/reddit/constants/modals.ts"),
				w = s("./src/reddit/hooks/usePageLayer.ts"),
				_ = s("./src/reddit/components/Upsell/NsfwSearch/index.m.less"),
				N = s.n(_);
			const k = () => {
					const e = Object(d.d)(),
						t = Object(u.b)(),
						{
							setNsfwSessionSetting: s
						} = Object(x.b)(),
						n = Object(w.a)(),
						o = Object(d.e)(g.S);
					return i.a.createElement("div", {
						className: N.a.modalContent
					}, i.a.createElement("div", {
						className: N.a.textContainer
					}, i.a.createElement(C.b, {
						fill: C.a.DEFAULT
					}), i.a.createElement("span", {
						className: N.a.title
					}, (() => l.fbt._("Confirm you're over 18", null, {
						hk: "UUekV"
					}))()), i.a.createElement("span", {
						className: N.a.body
					}, (() => l.fbt._("This page is NSFW (Not Safe for Work) and may have mature or adult content. To continue, confirm you’re over 18.", null, {
						hk: "1YTdFy"
					}))())), i.a.createElement("div", {
						className: N.a.buttonContainer
					}, i.a.createElement(b.t, {
						priority: b.c.Primary,
						className: N.a.continue,
						onClick: async () => {
							t(Object(p.b)()), Object(m.b)(m.a.Continue), o ? e(Object(O.r)()) : Object(O.q)(), Object(h.d)(), s(!0), e(Object(v.a)(!0, n))
						},
						"data-testid": "continue-button"
					}, (() => l.fbt._("Yes, I'm over 18", null, {
						hk: "3aYK0v"
					}))()), i.a.createElement(b.t, {
						priority: b.c.Secondary,
						className: Object(r.a)(N.a.continue, N.a.dismiss),
						onClick: () => {
							t(Object(p.c)()), Object(m.b)(m.a.Dismiss), e(Object(j.g)(y.a.NSFW_SEARCH_MODAL))
						},
						"data-testid": "dismiss-button"
					}, (() => l.fbt._("Dismiss", null, {
						hk: "s43tA"
					}))())))
				},
				S = () => {
					const e = Object(u.b)();
					return i.a.useEffect(() => {
						e(Object(f.c)())
					}, [e]), i.a.createElement("div", {
						className: N.a.container
					}, i.a.createElement(k, null))
				};

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = Object(n.a)(() => i.a.createElement(S, null));
			t.default = e => i.a.createElement(D, B({}, e, {
				className: Object(r.a)(e.className, N.a.modal),
				shouldBlurBackground: !0,
				onOverlayClick: a.a,
				overlayClassName: N.a.overlay
			}))
		},
		"./src/reddit/components/Upsell/NsfwSearch/index.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_2rWbPvksIjxAX6tDg79U94",
				modal: "_13YnMfF8rZl3vlU7BAeBR7",
				modalContent: "_3aGTJfmI5B_Hl2T4R4tzd8",
				textContainer: "_1jiMTat1IMUgUzvktU4YA2",
				title: "_29QRlgcSZfJBOuZN6if6zz",
				body: "oFV_0h35gJRNUxoYV4WYO",
				buttonContainer: "_3Vm6P36iE3CfHK3yqGvZhs",
				continue: "rQP80TkxFZ1WpheBHESxD",
				dismiss: "_2bZB7W2JwTM6h-fZCBSJfi"
			}
		},
		"./src/reddit/helpers/counters/nsfwBypassableBlocking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/sample/index.ts"),
				a = s("./src/reddit/helpers/counters/nsfwblocking.ts"),
				c = s("./src/telemetry/helpers/sendCounter.ts");
			! function(e) {
				e.Continue = "continue", e.Dismiss = "dismiss", e.Login = "login", e.View = "view"
			}(n || (n = {}));
			const i = e => {
					Object(a.b)() || Object(c.b)(r.o.Redesign, {
						type: c.a.NsfwBypassableBlocking,
						data: {
							action: e
						}
					})
				},
				l = e => {
					!Object(a.b)() && e && Object(o.b)(10) && Object(c.b)(r.o.Redesign, {
						type: c.a.NsfwBypassableBlocking,
						data: {
							action: n.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/search/searchResultsTabTo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/history.ts"),
				o = s("./src/reddit/helpers/history/index.ts");
			const a = "/search/",
				c = e => {
					let {
						searchType: t,
						pageLayer: s
					} = e;
					var c;
					const {
						type: i,
						...l
					} = (null == s ? void 0 : s.queryParams) || {}, d = {
						...l,
						type: t,
						sort: void 0,
						t: void 0
					};
					return {
						pathname: (null === (c = null == s ? void 0 : s.routeMatch) || void 0 === c ? void 0 : c.match.url) || a,
						search: Object(n.a)("", {
							...d
						}),
						state: {
							[r.b.SearchOriginPage]: Object(o.b)(r.b.SearchOriginPage)
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/nsfwSignupBypassableUpsell.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = "nsfw_dialog_bypassable",
				o = () => e => ({
					...Object(n.o)(e),
					source: "xpromo",
					action: "view",
					noun: r,
					actionInfo: {
						...Object(n.d)(e)
					}
				}),
				a = () => e => ({
					...Object(n.o)(e),
					source: "xpromo",
					action: "click",
					noun: r,
					actionInfo: {
						...Object(n.d)(e),
						popupButtonText: "login"
					}
				}),
				c = () => e => ({
					...Object(n.o)(e),
					source: "xpromo",
					action: "dismiss",
					noun: r,
					actionInfo: {
						...Object(n.d)(e),
						popupButtonText: "back"
					}
				}),
				i = () => e => ({
					...Object(n.o)(e),
					source: "xpromo",
					action: "click",
					noun: r,
					actionInfo: {
						...Object(n.d)(e),
						popupButtonText: "continue"
					}
				})
		},
		"./src/reddit/helpers/trackers/nsfwSignupUpsell.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = "nsfw_dialog",
				o = () => e => ({
					...Object(n.o)(e),
					source: "xpromo",
					action: "view",
					noun: r,
					actionInfo: {
						...Object(n.d)(e)
					}
				}),
				a = () => e => ({
					...Object(n.o)(e),
					source: "xpromo",
					action: "click",
					noun: r,
					actionInfo: {
						...Object(n.d)(e)
					}
				}),
				c = () => e => ({
					...Object(n.o)(e),
					source: "xpromo",
					action: "dismiss",
					noun: r,
					actionInfo: {
						...Object(n.d)(e)
					}
				})
		},
		"./src/reddit/icons/svgs/NSFWWarningIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r = s("./node_modules/react/index.js"),
				o = s.n(r);
			! function(e) {
				e.BLACK = "#0F1A1C", e.DEFAULT = "#FF585B"
			}(n || (n = {}));
			t.b = e => o.a.createElement("svg", {
				className: e.className,
				fill: "none",
				height: "60",
				viewBox: "0 0 60 60",
				xmlns: "http://www.w3.org/2000/svg",
				width: "60"
			}, o.a.createElement("path", {
				d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
				fill: e.fill || n.DEFAULT
			}), o.a.createElement("path", {
				d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
				fill: e.fill || n.DEFAULT
			}), o.a.createElement("path", {
				d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
				fill: e.fill || n.DEFAULT
			}))
		},
		"./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "a", (function() {
				return C
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/localStorageAvailable/index.ts"),
				o = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/constants/localStorage.ts"),
				c = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				i = s("./src/reddit/selectors/userPrefs.ts"),
				l = s("./node_modules/reselect/es/index.js");
			const d = 30 * n.qb,
				u = () => {
					localStorage.setItem(a.b.XpromoConsolidation, (new Date).toString())
				},
				b = () => {
					if (!Object(r.a)()) return !1;
					const e = localStorage.getItem(a.b.XpromoConsolidation);
					if (!e) return !0;
					const t = Date.parse(e);
					return Number.isNaN(t) ? (localStorage.removeItem(a.b.XpromoConsolidation), !0) : Date.now() > t + d
				},
				m = (e, t) => t === c.a.NoPreview && (e === o.kb.SkippableButtons || e === o.kb.SkippableText),
				p = (e, t) => t === c.a.NoPreview && e === o.kb.NoUpsell,
				f = Object(l.a)(c.h, c.g, (e, t) => {
					return {
						isControlVariant: !(!e || !t) && ((e, t) => t === c.a.NoPreview && !m(e, t) && !p(e, t))(e, t),
						isNewDesignVariant: !(!e || !t) && m(e, t),
						isOldDesignVariant: !(!e || !t) && p(e, t),
						variant: e
					}
				}),
				C = Object(l.a)(f, i.a, (e, t) => !e.isOldDesignVariant && (!e.isNewDesignVariant || !t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NsfwSearchModal.f718edc35811cae568b3.js.map