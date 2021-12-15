// https://www.redditstatic.com/desktop2x/GifTooltip.00288b294c889b2b2969.js
// Retrieved at 12/15/2021, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GifTooltip"], {
		"./src/reddit/components/RichTextEditor/media/GifTooltip/Powerups/async.ts": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "PowerupsGifsTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!i.m[t]
				},
				importAsync: () => i.e("PowerupsGifsTooltip").then(i.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/Powerups/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return i(t)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/media/GifTooltip/Powerups/index.tsx"
				}
			})
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/async.ts": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "SpecialMembershipsGifsTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!i.m[t]
				},
				importAsync: () => i.e("SpecialMembershipsGifsTooltip").then(i.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return i(t)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/index.tsx"
				}
			})
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var s = i("./node_modules/react/index.js"),
				o = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				n = i("./node_modules/uuid/v4.js"),
				d = i.n(n),
				c = i("./src/reddit/selectors/gold/powerups/index.ts"),
				l = i("./src/reddit/components/RichTextEditor/media/GifTooltip/Powerups/async.ts"),
				a = i("./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/async.ts");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.default = e => {
				const {
					subreddit: t
				} = e, i = t.id, n = Object(s.useRef)(d()());
				return Object(r.e)(e => Object(c.h)(e, {
					subredditId: i
				})) ? o.a.createElement(l.a, p({}, e, {
					correlationId: n.current
				})) : o.a.createElement(a.a, p({}, e, {
					correlationId: n.current
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GifTooltip.00288b294c889b2b2969.js.map