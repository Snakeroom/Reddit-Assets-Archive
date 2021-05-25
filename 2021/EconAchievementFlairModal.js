// https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.5877e4062ecd573d348b.js
// Retrieved at 5/25/2021, 9:50:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconAchievementFlairModal"], {
		"./src/reddit/components/Econ/AchievementFlairModal/Header.m.less": function(e, t, s) {
			e.exports = {
				container: "_1E3LVViw7qVfg3d8lF_9mW",
				flairPreview: "_2c-Hq9uVjUZ7petNVTpC-5",
				closeIcon: "_1P5skaUcBWuHeEYCf2sAs2"
			}
		},
		"./src/reddit/components/Econ/AchievementFlairModal/UserFlair.m.less": function(e, t, s) {
			e.exports = {
				container: "_1o7YKp29tEhdV_ssSbyBHi",
				header: "_3JcVg51RLYedFAfq2GUg2I",
				flairText: "_11wC0M8vUhXMrxTMtcdttU",
				editButton: "_40lOYdZKD201SS9kmOhkr",
				svg: "_2MlWLb_0hbzpP4W3d20J9l",
				flair: "_1cD8GS2H_31Nhfgi-MosZn"
			}
		},
		"./src/reddit/components/Econ/AchievementFlairModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2IJP2Y03Qtz6PjPHBzsX7"
			}
		},
		"./src/reddit/components/Econ/AchievementFlairModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				d = s("./src/reddit/selectors/platform.ts"),
				o = s("./src/reddit/selectors/userFlair.ts");
			const m = e => n.a.createElement("div", {
				className: e.className
			});
			var u = s("./src/lib/classNames/index.ts"),
				E = s("./src/reddit/icons/svgs/Close/index.tsx"),
				b = s("./src/reddit/components/Econ/AchievementFlairModal/Header.m.less"),
				_ = s.n(b);
			const v = () => n.a.createElement("div", {
					className: _.a.flairPreview
				}),
				x = e => n.a.createElement("div", {
					className: Object(u.a)(_.a.container, e.className)
				}, n.a.createElement(v, null), n.a.createElement(E.a, {
					className: _.a.closeIcon,
					onClick: e.onModalClose,
					"data-testid": "close-icon"
				}));
			var f = s("./src/reddit/components/Econ/AchievementFlairModal/index.m.less"),
				p = s.n(f),
				h = s("./src/reddit/actions/authorFlair.ts"),
				C = s("./src/reddit/components/Flair/index.tsx"),
				N = s("./src/reddit/controls/Button/index.tsx"),
				j = s("./src/reddit/icons/svgs/EditPencil/index.tsx"),
				O = s("./src/reddit/models/User/index.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/Econ/AchievementFlairModal/UserFlair.m.less"),
				A = s.n(M);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				className: e,
				subredditId: t,
				flairData: s
			}) => {
				const a = Object(c.d)(),
					r = Object(c.e)(L.i);
				return r ? n.a.createElement("div", {
					className: Object(u.a)(A.a.container, e)
				}, n.a.createElement("div", {
					className: A.a.header
				}, n.a.createElement("h4", {
					className: A.a.flairText
				}, F._("User flair", null, {
					hk: "3ToqP0"
				})), n.a.createElement(N.q, {
					className: A.a.editButton,
					priority: N.b.Plain,
					onClick: () => {
						const e = r ? Object(O.e)(r) : null;
						a(Object(h.b)({
							username: e,
							subredditId: t
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, n.a.createElement(j.a, {
					className: A.a.svg
				}))), (null == s ? void 0 : s.applied) && s.displaySettings.isUserEnabled && n.a.createElement(C.b, {
					className: A.a.flair,
					flair: s.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(r.a)(() => {
				const e = Object(c.d)(),
					t = Object(c.e)(d.e),
					s = Object(c.e)(e => t ? Object(o.b)(e, {
						subredditId: t.id
					}) : null),
					a = Object(c.e)(e => t ? Object(o.c)(e, {
						subredditId: t.id
					}) : null),
					r = !!s && !!a;
				return t ? n.a.createElement("div", {
					className: p.a.container
				}, n.a.createElement(x, {
					onModalClose: () => {
						e(Object(i.g)(l.a.ACHIEVEMENT_FLAIR))
					}
				}), r && n.a.createElement(g, {
					subredditId: t.id,
					flairData: a
				}), n.a.createElement(m, null)) : null
			})
		},
		"./src/reddit/icons/svgs/EditPencil/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 14 14",
				xmlns: "http://www.w3.org/2000/svg",
				version: "1.1"
			}, n.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M8.1168,3.0832 L10.9168,5.8832 C11.0728,6.0392 11.0728,6.2928 10.9168,6.4488 L4.0824,13.2832 C4.0072,13.3584 3.9056,13.4 3.8,13.4 L1,13.4 C0.7784,13.4 0.6,13.2216 0.6,13 L0.6,10.2 C0.6,10.0944 0.6416,9.9928 0.7168,9.9176 L7.5512,3.0832 C7.7072,2.9272 7.9608,2.9272 8.1168,3.0832 Z M13.5168,2.152 C13.9848,2.62 13.9848,3.3808 13.5168,3.8488 L12.048,5.3176 C11.9696,5.396 11.8672,5.4352 11.7656,5.4352 C11.6632,5.4352 11.5608,5.396 11.4824,5.3176 L8.6824,2.5176 C8.5264,2.3616 8.5264,2.108 8.6824,1.952 L10.1512,0.4832 C10.6192,0.0152 11.38,0.0152 11.848,0.4832 L13.5168,2.152 Z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.5877e4062ecd573d348b.js.map