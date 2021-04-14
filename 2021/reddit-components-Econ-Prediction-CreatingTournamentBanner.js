// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CreatingTournamentBanner.5f7198ec93cd79a0150c.js
// Retrieved at 4/14/2021, 6:20:04 PM by Reddit Dataminer v1.0.0
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
				return p
			}));
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				r = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				o = n("./src/reddit/actions/subreddit.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/models/Poll/index.ts"),
				m = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = n("./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.m.less"),
				x = n.n(_);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function p({
				subreddit: e
			}) {
				const t = Object(r.d)(),
					[n, _] = Object(i.useState)(!1),
					p = Object(r.e)(t => !!e && Object(m.h)(t, {
						subredditId: e.id
					}));
				return Object(r.e)(t => !!e && Object(b.g)(t, {
					subredditId: e.id
				})) && p ? s.a.createElement("div", {
					className: x.a.creatingTournamentBanner
				}, s.a.createElement("h1", {
					className: x.a.title
				}, g._("Creating predictions posts...", null, {
					hk: "2r0wY9"
				})), s.a.createElement("p", {
					className: x.a.description
				}, g._("This may take up to a few minutes. No progress will be lost if you leave", null, {
					hk: "3vuTHr"
				})), s.a.createElement(c.i, {
					className: Object(d.a)(x.a.button, x.a.reloadButton, {
						[x.a.isLoading]: n
					}),
					onClick: async () => {
						if (!e || n) return null;
						_(!0), (await t(Object(a.g)(e.name)))[0].status === u.d.Live && await t(Object(o.s)({
							subredditName: e.name
						})), _(!1)
					}
				}, n ? s.a.createElement(l.a, {
					className: x.a.loadingSpinner,
					sizePx: 16
				}) : g._("Reload", null, {
					hk: "2MIb6e"
				}))) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CreatingTournamentBanner.5f7198ec93cd79a0150c.js.map