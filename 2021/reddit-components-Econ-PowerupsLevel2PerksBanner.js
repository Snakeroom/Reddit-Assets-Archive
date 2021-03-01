// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsLevel2PerksBanner.63e4d6cd0be979be8c3b.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PowerupsLevel2PerksBanner"], {
		"./src/reddit/components/Econ/PowerupsLevel2PerksBanner/Navigation/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_389rzQFe5SmNCDpjjkolF4",
				dots: "_1lnWd01oTvBaDQAJnF7p3Q",
				dot: "jLly5JOO53nUJ38RQrN6Z",
				active: "_2VdOE5X5UUf9R9aezkdwKB",
				nextButton: "_2qOkuW5pdj8KPbZi98xDvZ",
				prevButton: "_1OMMtxQVPuU817dE6PVAT",
				hidden: "eZRmzhigJXxxssGYuuh4x",
				icon: "_36S0JjSFLHTyvcMRldZ7-g"
			}
		},
		"./src/reddit/components/Econ/PowerupsLevel2PerksBanner/Slide/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_12DBw-3ej3pbX6JIeo6r_L",
				icon: "MJAIODLDXqWxOM-4AmPnt",
				title: "AdjVf5mFNn0blvTU4WrHQ",
				badge: "M15uCnDX7tnhEMAVAl9lg",
				unlocked: "_2qXTxwVF0cFX4nYjgkTqCc",
				lockIcon: "_2xeGEGtibWCbVP3mmOJBgI"
			}
		},
		"./src/reddit/components/Econ/PowerupsLevel2PerksBanner/SlidesGallery/index.m.less": function(e, t, s) {
			e.exports = {
				container: "v8XQ8OSl_ImFi53qZaPRC",
				fillContainer: "_3FTjzZda0zi14iGeI9D8fi",
				slidesBackground: "_3mIQu6BL2KcEQ1OuhlScr-",
				background: "_2brVzudfb0e7vOf1X9-wvL",
				visible: "E8RTLHFZFDAfdbWf2w9fy",
				slides: "_1tlD25qrdPUFJ8uEvC0dTI",
				slide: "_13-47aRJskbgWfNDenLZjY",
				navigation: "_3pGjK93-hehjmhiiBlv1nG",
				counter: "_1-cd7NHGGgYlC6g3DpTgPf"
			}
		},
		"./src/reddit/components/Econ/PowerupsLevel2PerksBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_20bc8knoKkcH7G7LpLZKKj",
				title: "_1YXAN45wM1N-8uVAYldqtK",
				footer: "_244BnmkmhNJh0Jexagyawt"
			}
		},
		"./src/reddit/components/Econ/PowerupsLevel2PerksBanner/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/hooks/useTracking.ts"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/helpers/trackers/powerups.ts"),
				d = s("./src/reddit/actions/gold/powerups.ts"),
				u = s("./src/reddit/selectors/gold/powerups.ts"),
				m = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/config.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/models/Gold/Powerups/index.ts"),
				E = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				g = s("./src/reddit/components/Econ/PowerupsLevel2PerksBanner/Navigation/index.m.less"),
				f = s.n(g);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var _ = e => {
					const {
						className: t,
						step: s,
						stepCount: a,
						setStep: r,
						onClick: c
					} = e, o = s === a - 1;
					return n.a.createElement("footer", {
						className: Object(i.a)(t, f.a.container),
						onClick: c
					}, n.a.createElement("button", {
						className: Object(i.a)(f.a.prevButton, {
							[f.a.hidden]: 0 === s
						}),
						onClick: e => {
							e.stopPropagation(), r(0 === s ? a - 1 : s - 1)
						}
					}, n.a.createElement(E.a, {
						className: f.a.icon
					})), n.a.createElement("div", {
						className: f.a.dots
					}, Array.from(Array(a), (e, t) => n.a.createElement("button", {
						className: Object(i.a)(f.a.dot, {
							[f.a.active]: s === t
						}),
						onClick: e => {
							e.stopPropagation(), r(t)
						}
					}))), n.a.createElement("button", {
						className: Object(i.a)(f.a.nextButton, {
							[f.a.hidden]: o
						}),
						onClick: e => {
							e.stopPropagation(), r(o ? 0 : s + 1)
						}
					}, n.a.createElement(E.a, {
						className: f.a.icon
					})))
				},
				N = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				O = s("./src/reddit/components/Econ/PowerupsLevel2PerksBanner/Slide/index.m.less"),
				P = s.n(O);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var h = e => n.a.createElement("div", {
					className: Object(i.a)(e.className, P.a.container)
				}, n.a.createElement("div", {
					className: P.a.icon,
					style: {
						backgroundImage: `url('${e.iconUrl}')`
					}
				}), n.a.createElement("h3", {
					className: P.a.title
				}, e.title), n.a.createElement("div", {
					className: P.a.badge
				}, e.isUnlocked ? n.a.createElement("span", {
					className: P.a.unlocked
				}, x._("Unlocked", null, {
					hk: "3wuVfi"
				})) : n.a.createElement(N.a, {
					className: P.a.lockIcon
				}))),
				B = s("./src/reddit/components/Econ/PowerupsLevel2PerksBanner/SlidesGallery/index.m.less"),
				w = s.n(B);
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js"), A = Object(o.c)({
				isTopSupporter: (e, {
					subredditId: t
				}) => {
					const s = Object(v.i)(e);
					return !!s && Object(u.a)(e, {
						subredditId: t,
						userId: s.id
					})
				},
				subreddit: m.S,
				userBenefits: u.l
			});
			var C;
			! function(e) {
				e.Intro = "intro", e.Benefits = "benefits", e.Outro = "outro"
			}(C || (C = {}));
			const D = {
				[C.Intro]: "linear-gradient(90deg, #EC7406 0%, #F5D21A 100%)",
				[k.a.HdVideo]: "linear-gradient(83deg, #7544FF 0%, #FF585B 100%)",
				[k.a.CommentsWithGifs]: "linear-gradient(90deg, #0E69A2 0%, #50CABD 100%)",
				[k.a.CommentsWithEmoji]: "linear-gradient(90deg, #DC0A0A 0%, #F7A456 100%)",
				[C.Outro]: "linear-gradient(90deg, #219A52 0%, #00D5D5 100%)"
			};
			var F = Object(r.b)(A)((function(e) {
					const {
						areAllBenefitsUnlocked: t,
						benefits: s,
						className: r,
						isTopSupporter: c,
						onClick: o,
						subreddit: l,
						userBenefits: d
					} = e, [u, m] = Object(a.useState)(0);
					if (!l) return null;
					const b = s.filter(e => D[e] && k.e[e]),
						v = b.length + 2,
						E = t || b.every(e => d.includes(e)) && c;
					return n.a.createElement("div", {
						className: Object(i.a)(w.a.container, r)
					}, n.a.createElement("div", {
						className: w.a.slidesBackground
					}, n.a.createElement("div", {
						className: Object(i.a)(w.a.background, {
							[w.a.visible]: 0 === u
						}),
						style: {
							background: D[C.Intro]
						}
					}), b.map((e, t) => n.a.createElement("div", {
						className: Object(i.a)(w.a.background, {
							[w.a.visible]: u === t + 1
						}),
						key: `bg_${e}`,
						style: {
							background: D[e] || D[C.Intro]
						}
					})), n.a.createElement("div", {
						className: Object(i.a)(w.a.background, {
							[w.a.visible]: u === v - 1
						}),
						style: {
							background: D[C.Outro]
						}
					})), n.a.createElement("div", {
						className: w.a.slides
					}, n.a.createElement("div", {
						className: Object(i.a)(w.a.slide, {
							[w.a.visible]: 0 === u
						})
					}, n.a.createElement(h, {
						iconUrl: `${p.a.assetPath}/img/powerups/perks-blue-phone.svg`,
						title: L._("Unlock perks for {subreddit name}", [L._param("subreddit name", l.displayText)], {
							hk: "UpSK1"
						}),
						isUnlocked: E
					})), b.map((e, t) => n.a.createElement("div", {
						className: Object(i.a)(w.a.slide, {
							[w.a.visible]: u === t + 1
						}),
						key: `slide_${e}`
					}, n.a.createElement(h, {
						iconUrl: `${p.a.assetPath}/img/powerups/${e}.svg`,
						title: k.e[e](),
						isUnlocked: E || d.includes(e)
					}))), n.a.createElement("div", {
						className: Object(i.a)(w.a.slide, {
							[w.a.visible]: u === v - 1
						})
					}, n.a.createElement(h, {
						iconUrl: `${p.a.assetPath}/img/powerups/hero-status.svg`,
						title: L._("Get Hero Icon", null, {
							hk: "1jsMQs"
						}),
						isUnlocked: c
					}))), n.a.createElement(_, {
						stepCount: v,
						setStep: m,
						step: u,
						className: w.a.navigation,
						onClick: o
					}), n.a.createElement("div", {
						className: w.a.counter
					}, u + 1, "/", v))
				})),
				I = s("./src/reddit/components/Econ/PowerupsLevel2PerksBanner/index.m.less"),
				U = s.n(I);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = Object(o.c)({
				powerups: u.i,
				subreddit: m.S
			});
			t.default = Object(r.b)(y)(e => {
				var t;
				const {
					className: s,
					powerups: o,
					subreddit: u,
					subredditId: m
				} = e, p = Object(r.d)(), v = Object(c.a)();
				Object(a.useEffect)(() => {
					v(Object(l.e)())
				}, [m, v]);
				const k = () => {
					v(Object(l.d)()), p(Object(d.b)())
				};
				if (!o || 1 === o.tiersInfo.length || !u) return null;
				const {
					tier: E,
					tiersInfo: g
				} = o, f = null === (t = g[1]) || void 0 === t ? void 0 : t.benefits, j = E >= 2;
				return n.a.createElement("div", {
					className: Object(i.a)(U.a.container, s)
				}, n.a.createElement("h2", {
					className: U.a.title
				}, S._("Powerup", null, {
					hk: "4p1fZz"
				})), n.a.createElement(F, {
					areAllBenefitsUnlocked: j,
					benefits: f,
					className: U.a.gallery,
					onClick: k,
					subredditId: m
				}), n.a.createElement("footer", {
					className: U.a.footer
				}, n.a.createElement(b.l, {
					className: U.a.button,
					onClick: k
				}, S._("Learn more", null, {
					hk: "1hZsGq"
				}))))
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsLevel2PerksBanner.63e4d6cd0be979be8c3b.js.map