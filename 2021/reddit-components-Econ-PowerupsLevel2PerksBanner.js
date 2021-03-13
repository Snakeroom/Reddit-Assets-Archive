// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsLevel2PerksBanner.8a5ef22f1d594f2c2f50.js
// Retrieved at 3/12/2021, 8:30:05 PM by Reddit Dataminer v1.0.0
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
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
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
				g = s("./src/reddit/models/Gold/Powerups/index.ts"),
				k = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				E = s("./src/reddit/components/Econ/PowerupsLevel2PerksBanner/Navigation/index.m.less"),
				f = s.n(E);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var _ = e => {
					const {
						className: t,
						step: s,
						stepCount: n,
						setStep: r,
						onClick: c
					} = e, o = s === n - 1;
					return a.a.createElement("footer", {
						className: Object(i.a)(t, f.a.container),
						onClick: c
					}, a.a.createElement("button", {
						className: Object(i.a)(f.a.prevButton, {
							[f.a.hidden]: 0 === s
						}),
						onClick: e => {
							e.stopPropagation(), r(0 === s ? n - 1 : s - 1)
						}
					}, a.a.createElement(k.a, {
						className: f.a.icon
					})), a.a.createElement("div", {
						className: f.a.dots
					}, Array.from(Array(n), (e, t) => a.a.createElement("button", {
						className: Object(i.a)(f.a.dot, {
							[f.a.active]: s === t
						}),
						onClick: e => {
							e.stopPropagation(), r(t)
						}
					}))), a.a.createElement("button", {
						className: Object(i.a)(f.a.nextButton, {
							[f.a.hidden]: o
						}),
						onClick: e => {
							e.stopPropagation(), r(o ? 0 : s + 1)
						}
					}, a.a.createElement(k.a, {
						className: f.a.icon
					})))
				},
				N = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				x = s("./src/reddit/components/Econ/PowerupsLevel2PerksBanner/Slide/index.m.less"),
				O = s.n(x);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var P = e => a.a.createElement("div", {
					className: Object(i.a)(e.className, O.a.container)
				}, a.a.createElement("div", {
					className: O.a.icon,
					style: {
						backgroundImage: `url('${e.iconUrl}')`
					}
				}), a.a.createElement("h3", {
					className: O.a.title
				}, e.title), a.a.createElement("div", {
					className: O.a.badge
				}, e.isUnlocked ? a.a.createElement("span", {
					className: O.a.unlocked
				}, h._("Unlocked", null, {
					hk: "3wuVfi"
				})) : a.a.createElement(N.a, {
					className: O.a.lockIcon
				}))),
				w = s("./src/reddit/components/Econ/PowerupsLevel2PerksBanner/SlidesGallery/index.m.less"),
				B = s.n(w);
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = Object(o.c)({
				isTopSupporter: (e, {
					subredditId: t
				}) => {
					const s = Object(v.i)(e);
					return !!s && Object(u.a)(e, {
						subredditId: t,
						userId: s.id
					})
				},
				subreddit: m.T,
				userBenefits: u.l
			});
			var A;
			! function(e) {
				e.Intro = "intro", e.Benefits = "benefits", e.Outro = "outro"
			}(A || (A = {}));
			const D = {
				[A.Intro]: "linear-gradient(90deg, #EC7406 0%, #F5D21A 100%)",
				[g.a.HdVideo]: "linear-gradient(83deg, #7544FF 0%, #FF585B 100%)",
				[g.a.CommentsWithGifs]: "linear-gradient(90deg, #0E69A2 0%, #50CABD 100%)",
				[g.a.CommentsWithEmoji]: "linear-gradient(90deg, #DC0A0A 0%, #F7A456 100%)",
				[A.Outro]: "linear-gradient(90deg, #219A52 0%, #00D5D5 100%)"
			};
			var F = Object(r.b)(C)((function(e) {
					const {
						areAllBenefitsUnlocked: t,
						benefits: s,
						className: r,
						isTopSupporter: c,
						onClick: o,
						subreddit: l,
						userBenefits: d
					} = e, [u, m] = Object(n.useState)(0);
					if (!l) return null;
					const b = s.filter(e => D[e] && g.e[e]),
						v = b.length + 2,
						k = t || b.every(e => d.includes(e)) && c;
					return a.a.createElement("div", {
						className: Object(i.a)(B.a.container, r)
					}, a.a.createElement("div", {
						className: B.a.slidesBackground
					}, a.a.createElement("div", {
						className: Object(i.a)(B.a.background, {
							[B.a.visible]: 0 === u
						}),
						style: {
							background: D[A.Intro]
						}
					}), b.map((e, t) => a.a.createElement("div", {
						className: Object(i.a)(B.a.background, {
							[B.a.visible]: u === t + 1
						}),
						key: `bg_${e}`,
						style: {
							background: D[e] || D[A.Intro]
						}
					})), a.a.createElement("div", {
						className: Object(i.a)(B.a.background, {
							[B.a.visible]: u === v - 1
						}),
						style: {
							background: D[A.Outro]
						}
					})), a.a.createElement("div", {
						className: B.a.slides
					}, a.a.createElement("div", {
						className: Object(i.a)(B.a.slide, {
							[B.a.visible]: 0 === u
						})
					}, a.a.createElement(P, {
						iconUrl: `${p.a.assetPath}/img/powerups/perks-blue-phone.svg`,
						title: L._("Unlock perks for {subreddit name}", [L._param("subreddit name", l.displayText)], {
							hk: "UpSK1"
						}),
						isUnlocked: k
					})), b.map((e, t) => a.a.createElement("div", {
						className: Object(i.a)(B.a.slide, {
							[B.a.visible]: u === t + 1
						}),
						key: `slide_${e}`
					}, a.a.createElement(P, {
						iconUrl: `${p.a.assetPath}/img/powerups/${e}.svg`,
						title: g.e[e](),
						isUnlocked: k || d.includes(e)
					}))), a.a.createElement("div", {
						className: Object(i.a)(B.a.slide, {
							[B.a.visible]: u === v - 1
						})
					}, a.a.createElement(P, {
						iconUrl: `${p.a.assetPath}/img/powerups/hero-status.svg`,
						title: L._("Get Hero Icon", null, {
							hk: "1jsMQs"
						}),
						isUnlocked: c
					}))), a.a.createElement(_, {
						stepCount: v,
						setStep: m,
						step: u,
						className: B.a.navigation,
						onClick: o
					}), a.a.createElement("div", {
						className: B.a.counter
					}, u + 1, "/", v))
				})),
				I = s("./src/reddit/components/Econ/PowerupsLevel2PerksBanner/index.m.less"),
				U = s.n(I);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(o.c)({
				powerups: u.i,
				subreddit: m.T
			});
			t.default = Object(r.b)(S)(e => {
				var t;
				const {
					className: s,
					powerups: o,
					subreddit: u,
					subredditId: m
				} = e, p = Object(r.d)(), v = Object(c.a)();
				Object(n.useEffect)(() => {
					v(Object(l.g)())
				}, [m, v]);
				const g = () => {
					v(Object(l.f)()), p(Object(d.b)())
				};
				if (!o || 1 === o.tiersInfo.length || !u) return null;
				const {
					tier: k,
					tiersInfo: E
				} = o, f = null === (t = E[1]) || void 0 === t ? void 0 : t.benefits, j = k >= 2;
				return a.a.createElement("div", {
					className: Object(i.a)(U.a.container, s)
				}, a.a.createElement("h2", {
					className: U.a.title
				}, y._("Powerup", null, {
					hk: "4p1fZz"
				})), a.a.createElement(F, {
					areAllBenefitsUnlocked: j,
					benefits: f,
					className: U.a.gallery,
					onClick: g,
					subredditId: m
				}), a.a.createElement("footer", {
					className: U.a.footer
				}, a.a.createElement(b.l, {
					className: U.a.button,
					onClick: g
				}, y._("Learn more", null, {
					hk: "1hZsGq"
				}))))
			})
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, a.a.createElement("g", null, a.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), a.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsLevel2PerksBanner.8a5ef22f1d594f2c2f50.js.map