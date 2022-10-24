// https://www.redditstatic.com/desktop2x/GifTooltip.8c5733466be16fcb1876.js
// Retrieved at 10/24/2022, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GifTooltip"], {
		"./src/reddit/components/RichTextEditor/media/GifTooltip/General/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "GeneralGifsTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("GeneralGifsTooltip").then(s.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/General/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/media/GifTooltip/General/index.tsx"
				}
			})
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/Powerups/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "PowerupsGifsTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("PowerupsGifsTooltip").then(s.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/Powerups/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/media/GifTooltip/Powerups/index.tsx"
				}
			})
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "SpecialMembershipsGifsTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("SpecialMembershipsGifsTooltip").then(s.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/index.tsx"
				}
			})
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				d = s("./src/reddit/selectors/experiments/mediaInComments.ts"),
				c = s("./src/reddit/selectors/gold/powerups/index.ts"),
				l = s("./src/reddit/components/RichTextEditor/media/GifTooltip/General/async.ts"),
				a = s("./src/reddit/components/RichTextEditor/media/GifTooltip/Powerups/async.ts"),
				p = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SpecialMemberships/async.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.default = e => {
				const {
					subreddit: t
				} = e, s = t.id, u = Object(i.useRef)(Object(n.a)()), h = Object(r.e)(e => Object(d.a)(e)), T = Object(r.e)(e => Object(c.b)(e, {
					subredditId: s
				}));
				return h ? o.a.createElement(l.a, e) : T ? o.a.createElement(a.a, m({}, e, {
					correlationId: u.current
				})) : o.a.createElement(p.a, m({}, e, {
					correlationId: u.current
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GifTooltip.8c5733466be16fcb1876.js.map