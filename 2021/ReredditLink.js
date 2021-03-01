// https://www.redditstatic.com/desktop2x/ReredditLink.6c8a57691d74676286df.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReredditLink"], {
		"./src/reddit/components/Widgets/ReredditLink/ImageBlock/index.m.less": function(e, t, n) {
			e.exports = {
				ImageContainer: "_2ppRhKEnnVueVHY_G-Ursy",
				imageContainer: "_2ppRhKEnnVueVHY_G-Ursy",
				Center: "_2KLA5wMaJBHg0K2z1q0ci_",
				center: "_2KLA5wMaJBHg0K2z1q0ci_",
				Upvotes: "_1zdLtEEpuWI_Pnujn1lMF2",
				upvotes: "_1zdLtEEpuWI_Pnujn1lMF2",
				LineContainer: "_3s18OZ_KPHs2Ei416c7Q1l",
				lineContainer: "_3s18OZ_KPHs2Ei416c7Q1l",
				HorizontalLine: "LJjFa8EhquYX8xsTnb9n-",
				horizontalLine: "LJjFa8EhquYX8xsTnb9n-",
				CircleContainer: "_2Zjw1QfT_iMHH7rfaGsfBs",
				circleContainer: "_2Zjw1QfT_iMHH7rfaGsfBs",
				Circle: "_2gaJVJ6_j7vwKV945EABN9",
				circle: "_2gaJVJ6_j7vwKV945EABN9"
			}
		},
		"./src/reddit/components/Widgets/ReredditLink/ReredditButton/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_3gbb_EMFXxTYrxDZ2kusIp",
				button: "_3gbb_EMFXxTYrxDZ2kusIp"
			}
		},
		"./src/reddit/components/Widgets/ReredditLink/index.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_2YJDRz5rCYQfu8YdgB_neb",
				widget: "_2YJDRz5rCYQfu8YdgB_neb",
				ButtonContainer: "_37WD6iicVS6vGN0RomNTwh",
				buttonContainer: "_37WD6iicVS6vGN0RomNTwh"
			}
		},
		"./src/reddit/components/Widgets/ReredditLink/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				o = n("./src/config.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/helpers/trackers/widgets.ts"),
				l = n("./src/reddit/components/Widgets/ReredditLink/ImageBlock/index.m.less"),
				m = n.n(l);
			const _ = `${o.a.assetPath}/img/widgets/rereddit-promo/`;
			var p = ({
					url: e,
					postId: t
				}) => {
					const n = Object(d.b)(),
						a = Object(r.useCallback)(() => {
							n(Object(c.a)(t))
						}, [t, n]),
						i = `${o.a.redditUrl}/posts/${e}`;
					return s.a.createElement("a", {
						href: i,
						onClick: a,
						target: "_blank"
					}, s.a.createElement("div", {
						className: m.a.ImageContainer
					}, s.a.createElement("img", {
						src: `${_}left.png`
					}), s.a.createElement("img", {
						className: m.a.Center,
						src: `${_}center.png`
					}), s.a.createElement("img", {
						src: `${_}right.png`
					}), s.a.createElement("img", {
						className: m.a.Upvotes,
						src: `${_}upvotes.png`
					})), s.a.createElement("div", {
						className: m.a.LineContainer
					}, s.a.createElement("img", {
						className: m.a.HorizontalLine,
						src: `${_}line.png`
					}), s.a.createElement("div", {
						className: m.a.CircleContainer
					}, s.a.createElement("div", {
						className: m.a.Circle
					}))))
				},
				u = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/components/Widgets/ReredditLink/ReredditButton/index.m.less"),
				b = n.n(g),
				E = n("./src/reddit/controls/Button/index.m.less"),
				x = n.n(E);
			var C = ({
					buttonText: e,
					children: t,
					postId: n,
					url: a
				}) => {
					const i = Object(d.b)(),
						l = Object(r.useCallback)(() => {
							i(Object(c.a)(n, e))
						}, [n, e, i]);
					return s.a.createElement(u.q, {
						className: b.a.Button,
						href: `${o.a.redditUrl}/posts/${a}`,
						kind: u.a.ExternalLink,
						legacyClassName: x.a.PrimaryLinkButton,
						onClick: l,
						target: "_blank"
					}, t)
				},
				$ = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				L = n("./src/reddit/helpers/ordinal/index.ts"),
				k = n("./src/reddit/components/Widgets/ReredditLink/index.m.less"),
				f = n.n(k);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), B = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"], j = a.a.div("ButtonContainer", f.a);
			t.default = ({
				directoryTimestamp: e,
				postId: t
			}) => {
				const n = new Date(e),
					r = B[n.getMonth()],
					a = n.getFullYear(),
					o = n.getDate(),
					d = Object(L.a)(o),
					c = `${a}/${r}-${o}-1/`,
					l = `${a}/${r}/`,
					m = `${a}/`;
				return s.a.createElement(i.a, null, s.a.createElement($.a, {
					className: f.a.Widget,
					contentOnly: !0
				}, s.a.createElement(p, {
					postId: t,
					url: c
				}), s.a.createElement(j, null, s.a.createElement(C, {
					buttonText: `top_posts_${r}_${d}_${a}`,
					postId: t,
					url: c
				}, h._("Top posts {date}", [h._param("date", `${r} ${d} ${a}`)], {
					hk: "4xgYoo"
				})), s.a.createElement(C, {
					buttonText: `top_posts_of_${r}_${a}`,
					postId: t,
					url: l
				}, h._("Top posts of {date}", [h._param("date", `${r}, ${a}`)], {
					hk: "HQnvs"
				})), s.a.createElement(C, {
					buttonText: `top_posts_${a}`,
					postId: t,
					url: m
				}, h._("Top posts {date}", [h._param("date", `${a}`)], {
					hk: "4xgYoo"
				})))))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReredditLink.6c8a57691d74676286df.js.map