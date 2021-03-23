// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CreatingTournamentBanner.0b927b68b428743b8273.js
// Retrieved at 3/23/2021, 4:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-CreatingTournamentBanner"], {
		"./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.m.less": function(e, n, t) {
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
		"./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n), t.d(n, "default", (function() {
				return g
			}));
			var i = t("./node_modules/react/index.js"),
				s = t.n(i),
				d = t("./node_modules/react-redux/es/index.js"),
				r = t("./src/lib/classNames/index.ts"),
				a = t("./src/reddit/actions/economics/predictions/index.ts"),
				o = t("./src/reddit/actions/subreddit.ts"),
				c = t("./src/reddit/controls/Button/index.tsx"),
				l = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = t("./src/reddit/models/Poll/index.ts"),
				m = t("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				b = t("./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.m.less"),
				_ = t.n(b);
			const {
				fbt: x
			} = t("./node_modules/fbt/lib/FbtPublic.js");

			function g({
				subreddit: e
			}) {
				const n = Object(d.d)(),
					[t, b] = Object(i.useState)(!1),
					g = Object(d.e)(n => !!e && Object(m.j)(n, {
						subredditId: e.id
					})),
					p = Object(d.e)(n => !!e && Object(m.i)(n, {
						subredditId: e.id,
						listingKey: e.name
					}));
				return g || p ? s.a.createElement("div", {
					className: _.a.creatingTournamentBanner
				}, s.a.createElement("h1", {
					className: _.a.title
				}, x._("Creating predictions posts...", null, {
					hk: "2r0wY9"
				})), s.a.createElement("p", {
					className: _.a.description
				}, x._("This may take up to a few minutes. No progress will be lost if you leave", null, {
					hk: "3vuTHr"
				})), s.a.createElement(c.i, {
					className: Object(r.a)(_.a.button, _.a.reloadButton, {
						[_.a.isLoading]: t
					}),
					onClick: async () => {
						if (!e || t) return null;
						b(!0), (await n(Object(a.g)(e.name)))[0].status === u.d.Live && await n(Object(o.s)({
							subredditName: e.name
						})), b(!1)
					}
				}, t ? s.a.createElement(l.a, {
					className: _.a.loadingSpinner,
					sizePx: 16
				}) : x._("Reload", null, {
					hk: "2MIb6e"
				}))) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CreatingTournamentBanner.0b927b68b428743b8273.js.map