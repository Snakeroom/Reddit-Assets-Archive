// https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.972c2b7bf99a54899f0e.js
// Retrieved at 5/20/2021, 12:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconAchievementFlairModal"], {
		"./src/reddit/components/Econ/AchievementFlairModal/Header.m.less": function(e, s, n) {
			e.exports = {
				container: "_1E3LVViw7qVfg3d8lF_9mW",
				flairPreview: "_2c-Hq9uVjUZ7petNVTpC-5",
				closeIcon: "_1P5skaUcBWuHeEYCf2sAs2"
			}
		},
		"./src/reddit/components/Econ/AchievementFlairModal/UserFlair.m.less": function(e, s, n) {
			e.exports = {
				container: "_1o7YKp29tEhdV_ssSbyBHi"
			}
		},
		"./src/reddit/components/Econ/AchievementFlairModal/index.m.less": function(e, s, n) {
			e.exports = {
				container: "_2IJP2Y03Qtz6PjPHBzsX7"
			}
		},
		"./src/reddit/components/Econ/AchievementFlairModal/index.tsx": function(e, s, n) {
			"use strict";
			n.r(s);
			var a = n("./node_modules/react/index.js"),
				c = n.n(a),
				t = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const i = e => c.a.createElement("div", {
				className: e.className
			});
			var d = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/icons/svgs/Close/index.tsx"),
				E = n("./src/reddit/components/Econ/AchievementFlairModal/Header.m.less"),
				_ = n.n(E);
			const v = () => c.a.createElement("div", {
					className: _.a.flairPreview
				}),
				A = e => c.a.createElement("div", {
					className: Object(d.a)(_.a.container, e.className)
				}, c.a.createElement(v, null), c.a.createElement(m.a, {
					className: _.a.closeIcon,
					onClick: e.onModalClose,
					"data-testid": "close-icon"
				}));
			var u = n("./src/reddit/components/Econ/AchievementFlairModal/index.m.less"),
				p = n.n(u),
				x = n("./src/reddit/components/Econ/AchievementFlairModal/UserFlair.m.less"),
				N = n.n(x);
			const h = e => c.a.createElement("div", {
				className: Object(d.a)(N.a.container, e.className)
			});
			s.default = Object(o.a)(() => {
				const e = Object(t.d)();
				return c.a.createElement("div", {
					className: p.a.container
				}, c.a.createElement(A, {
					onModalClose: () => {
						e(Object(r.g)(l.a.ACHIEVEMENT_FLAIR))
					}
				}), c.a.createElement(h, null), c.a.createElement(i, null))
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.972c2b7bf99a54899f0e.js.map