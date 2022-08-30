// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CreatingTournamentBanner.2dd3da6c6352ad0bd838.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-CreatingTournamentBanner"], {
		"./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.m.less": function(e, t, n) {
			e.exports = {
				creatingTournamentBanner: "_2XZRdQoVSSXHid-MIfLJwJ",
				title: "_23UwcBZYeo4dXJvg2bUA74",
				description: "ix84ySsiijBOBCmL6QgKz",
				button: "_3lBmDDlPu3bzULjEzxhqdf",
				reloadButton: "_2wtHmZ6JuzS6sLjZnM6di_",
				isLoading: "_2YX9c9aPkcdtUyz9TlkMnP",
				loadingSpinner: "_2JZEpqzG-Ov9tidg8SHZfh"
			}
		},
		"./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return g
			}));
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				r = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				o = n("./src/reddit/actions/subreddit.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				m = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = n("./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.m.less"),
				x = n.n(_);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function g(e) {
				let {
					subreddit: t
				} = e;
				const n = Object(r.d)(),
					[_, g] = Object(i.useState)(!1),
					j = Object(r.e)(e => !!t && Object(m.j)(e, {
						subredditId: t.id
					}));
				return Object(r.e)(e => !!t && Object(b.h)(e, {
					subredditId: t.id
				})) && j ? s.a.createElement("div", {
					className: x.a.creatingTournamentBanner
				}, s.a.createElement("h1", {
					className: x.a.title
				}, p._("Creating predictions posts...", null, {
					hk: "2r0wY9"
				})), s.a.createElement("p", {
					className: x.a.description
				}, p._("This may take up to a few minutes. No progress will be lost if you leave", null, {
					hk: "3vuTHr"
				})), s.a.createElement(c.l, {
					className: Object(d.a)(x.a.button, x.a.reloadButton, {
						[x.a.isLoading]: _
					}),
					onClick: async () => {
						if (!t || _) return null;
						g(!0), (await n(Object(a.l)(t.name)))[0].status === u.a.Live && await n(Object(o.s)({
							subredditName: t.name
						})), g(!1)
					}
				}, _ ? s.a.createElement(l.a, {
					className: x.a.loadingSpinner,
					sizePx: 16
				}) : p._("Reload", null, {
					hk: "2MIb6e"
				}))) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CreatingTournamentBanner.2dd3da6c6352ad0bd838.js.map