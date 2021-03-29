// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CreatingTournamentBanner.202624e04a2379be83c5.js
// Retrieved at 3/29/2021, 12:50:04 PM by Reddit Dataminer v1.0.0
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
				return j
			}));
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				o = n("./src/reddit/actions/subreddit.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/models/Poll/index.ts"),
				m = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = n("./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.m.less"),
				g = n.n(_);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function j({
				subreddit: e
			}) {
				const t = Object(d.d)(),
					[n, _] = Object(i.useState)(!1),
					j = Object(d.e)(t => !!e && Object(m.j)(t, {
						subredditId: e.id
					})),
					p = Object(d.e)(t => !!e && Object(m.i)(t, {
						subredditId: e.id,
						listingKey: e.name
					}));
				return Object(d.e)(t => !!e && Object(b.g)(t, {
					subredditId: e.id
				})) && (j || p) ? s.a.createElement("div", {
					className: g.a.creatingTournamentBanner
				}, s.a.createElement("h1", {
					className: g.a.title
				}, x._("Creating predictions posts...", null, {
					hk: "2r0wY9"
				})), s.a.createElement("p", {
					className: g.a.description
				}, x._("This may take up to a few minutes. No progress will be lost if you leave", null, {
					hk: "3vuTHr"
				})), s.a.createElement(c.i, {
					className: Object(r.a)(g.a.button, g.a.reloadButton, {
						[g.a.isLoading]: n
					}),
					onClick: async () => {
						if (!e || n) return null;
						_(!0), (await t(Object(a.g)(e.name)))[0].status === u.d.Live && await t(Object(o.s)({
							subredditName: e.name
						})), _(!1)
					}
				}, n ? s.a.createElement(l.a, {
					className: g.a.loadingSpinner,
					sizePx: 16
				}) : x._("Reload", null, {
					hk: "2MIb6e"
				}))) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CreatingTournamentBanner.202624e04a2379be83c5.js.map