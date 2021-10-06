// https://www.redditstatic.com/desktop2x/BottomSheetUpsellWrapper.5d49a580a6338d3a8b6a.js
// Retrieved at 10/6/2021, 4:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BottomSheetUpsellWrapper"], {
		"./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_1CRxXSvUhagxkF2Z5KeFSg"
			}
		},
		"./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				r = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/components/Upsell/SignupUpsell/Loader.ts"),
				i = s("./src/reddit/constants/promo.ts"),
				c = s("./src/reddit/hooks/promo/useIsPromoShown.ts"),
				l = s("./src/reddit/constants/experiments.ts"),
				d = s("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				p = s("./src/reddit/hooks/usePromoContext.ts");

			function u() {
				const e = function(e) {
						const {
							promos: t
						} = Object(p.a)();
						return t.get(e) === i.a.Dismissed
					}(i.b.SignupUpsellBottomSheet),
					{
						throttleFeature: t
					} = o.useContext(d.a[l.fb]),
					{
						throttleFeature: s
					} = o.useContext(d.a[l.gb]),
					{
						throttleFeature: r
					} = o.useContext(d.a[l.hb]);
				o.useEffect(() => {
					e && (t(), s(), r())
				}, [e, t, s, r])
			}
			var a = s("./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.m.less"),
				m = s.n(a);
			t.default = function() {
				u();
				const {
					dismissPromo: e
				} = Object(p.a)();
				return Object(c.a)(i.b.SignupUpsellBottomSheet) ? o.createElement("div", {
					className: Object(r.a)(m.a.wrapper)
				}, o.createElement(n.a, {
					onDismiss: () => e(i.b.SignupUpsellBottomSheet),
					size: "large"
				})) : null
			}
		},
		"./src/reddit/components/Upsell/SignupUpsell/Loader.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
			var o = s("./src/reddit/constants/promo.ts"),
				r = s("./src/reddit/hooks/usePromoContext.ts");

			function n(e) {
				const {
					promos: t
				} = Object(r.a)();
				return t.get(e) === o.a.Shown
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(o.useContext)(r.a)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BottomSheetUpsellWrapper.5d49a580a6338d3a8b6a.js.map