// https://www.redditstatic.com/desktop2x/BottomSheetUpsellWrapper.dc3d317bde8a6016335c.js
// Retrieved at 9/23/2021, 12:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BottomSheetUpsellWrapper"], {
		"./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_1CRxXSvUhagxkF2Z5KeFSg",
				closeButton: "_16ynrhAmtfONULXVW-vhhU"
			}
		},
		"./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				r = s("./src/reddit/components/Upsell/SignupUpsell/Loader.ts"),
				n = s("./src/reddit/constants/promo.ts"),
				l = s("./src/reddit/hooks/promo/useIsPromoShown.ts"),
				i = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				d = s("./src/reddit/hooks/usePromoContext.ts");

			function p() {
				const e = function(e) {
						const {
							promos: t
						} = Object(d.a)();
						return t.get(e) === n.a.Dismissed
					}(n.b.SignupUpsellBottomSheet),
					{
						throttleFeature: t
					} = o.useContext(c.a[i.db]),
					{
						throttleFeature: s
					} = o.useContext(c.a[i.eb]),
					{
						throttleFeature: r
					} = o.useContext(c.a[i.fb]);
				o.useEffect(() => {
					e && (t(), s(), r())
				}, [e, t, s, r])
			}
			var u = s("./src/reddit/icons/svgs/Close/index.tsx"),
				a = s("./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.m.less"),
				m = s.n(a);
			t.default = function() {
				p();
				const {
					dismissPromo: e
				} = Object(d.a)();
				return Object(l.a)(n.b.SignupUpsellBottomSheet) ? o.createElement("div", {
					className: m.a.wrapper
				}, o.createElement("button", {
					className: m.a.closeButton,
					onClick: () => e(n.b.SignupUpsellBottomSheet)
				}, o.createElement(u.a, null)), o.createElement(r.a, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BottomSheetUpsellWrapper.dc3d317bde8a6016335c.js.map