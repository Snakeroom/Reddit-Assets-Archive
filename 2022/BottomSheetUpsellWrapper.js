// https://www.redditstatic.com/desktop2x/BottomSheetUpsellWrapper.2af205843281a76cbef7.js
// Retrieved at 10/5/2022, 7:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BottomSheetUpsellWrapper"], {
		"./src/reddit/components/ErrorBoundary/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@sentry/minimal/esm/index.js"),
				o = s("./node_modules/react/index.js");
			class n extends o.Component {
				constructor() {
					super(...arguments), this.state = {
						error: null
					}
				}
				componentDidCatch(e, t) {
					r.l(s => {
						s.setExtra("info", t), r.c(e)
					}), this.setState({
						error: e
					})
				}
				render() {
					const {
						children: e,
						FallbackComponent: t = (() => null)
					} = this.props, {
						error: s
					} = this.state;
					return s ? o.createElement(t, {
						error: s
					}) : e
				}
			}
			t.a = n
		},
		"./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_1CRxXSvUhagxkF2Z5KeFSg"
			}
		},
		"./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/components/ErrorBoundary/index.tsx"),
				i = s("./src/reddit/components/Upsell/SignupUpsell/Loader.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				c = s("./src/reddit/hooks/promo/useIsPromoShown.ts"),
				d = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				u = s("./src/reddit/hooks/usePromoContext.ts");

			function p(e) {
				const {
					promos: t
				} = Object(u.a)();
				return t.get(e) === l.a.Dismissed
			}
			var m = s("./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.m.less"),
				h = s.n(m);

			function x(e) {
				let {
					children: t
				} = e;
				return r.createElement(n.a, null, r.createElement("div", {
					className: Object(o.a)(h.a.wrapper),
					"data-testid": "bottom-sheet-upsell-wrapper"
				}, t))
			}
			t.default = function() {
				! function() {
					const e = p(l.b.SignupUpsellBottomSheet),
						t = p(l.b.SignupUpsellCellDismissible),
						{
							throttleFeature: s
						} = r.useContext(a.a[d.Hb]),
						{
							throttleFeature: o
						} = r.useContext(a.a[d.Ib]),
						{
							throttleFeature: n
						} = r.useContext(a.a[d.Jb]);
					r.useEffect(() => {
						function r() {
							s(), o(), n()
						}
						e && r(), t && r()
					}, [e, t, s, o, n])
				}();
				const {
					dismissPromo: e
				} = Object(u.a)();
				return Object(c.a)(l.b.SignupUpsellBottomSheet) ? r.createElement(x, null, r.createElement(i.a, {
					onDismiss: () => e(l.b.SignupUpsellBottomSheet),
					size: "large"
				})) : null
			}
		},
		"./src/reddit/components/Upsell/SignupUpsell/Loader.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "SignupUpsell",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("SignupUpsell").then(s.bind(null, "./src/reddit/components/Upsell/SignupUpsell/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Upsell/SignupUpsell/index.tsx"
				}
			}, {
				ssr: !1
			})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/constants/promo.ts"),
				o = s("./src/reddit/hooks/usePromoContext.ts");

			function n(e) {
				const {
					promos: t
				} = Object(o.a)();
				return !!e && t.get(e) === r.a.Shown
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(r.useContext)(o.a)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BottomSheetUpsellWrapper.2af205843281a76cbef7.js.map