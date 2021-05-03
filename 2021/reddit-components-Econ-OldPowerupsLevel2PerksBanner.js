// https://www.redditstatic.com/desktop2x/reddit-components-Econ-OldPowerupsLevel2PerksBanner.386d60cb87852f82faed.js
// Retrieved at 5/3/2021, 10:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-OldPowerupsLevel2PerksBanner"], {
		"./src/reddit/components/Econ/OldPowerupsLevel2PerksBanner/Navigation/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3xWCgPKRz2BjXj8Zt5Y123",
				dots: "bhRP0ICeBQhP92S6Xb06s",
				dot: "_3-ur89vVneYNGqRd8H984C",
				active: "JwpR0_sdViCxUnNux3caV",
				nextButton: "wtFqzstpPNtCisWW90LmG",
				prevButton: "_1BaQOIRRjGj8d50OELPDE6",
				hidden: "UQDSHw9LASXab16dLd2gA",
				icon: "_2X7n8E07VmjKOoZ7ZEFx1P"
			}
		},
		"./src/reddit/components/Econ/OldPowerupsLevel2PerksBanner/Slide/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1COD9o_-zrPtNATlQ3SAEV",
				icon: "OWK4REfyknejCrSk1SxmB",
				title: "_1djl4ET901Jj62FZzSytbE",
				badge: "_1nyz4f_gOtmfeC3VbklnL6",
				unlocked: "Cg2XRFdwNnY8brwIChCJt",
				lockIcon: "_2XTNffbc2HQCk5g7TWeboP"
			}
		},
		"./src/reddit/components/Econ/OldPowerupsLevel2PerksBanner/SlidesGallery/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3FReHaTi87PEka6YVcLAwY",
				fillContainer: "_1cU21aod53bb8rJjMA1GVi",
				slidesBackground: "_26U-28I3DkIL4YUyQgFT3T",
				background: "kGaw95GN_w9Fl-OSMYpqu",
				visible: "rU-CQnsiUkmEGCw3sFyLI",
				slides: "_3nalVTjjpdBKRVOAwvQPci",
				slide: "_1XqHSGj3aiUBow9o_9Vxbo",
				navigation: "_3_jTYNtF-TYYE4Adwks0BL",
				counter: "_12gyt2CwZZaWz49DXb9I9s"
			}
		},
		"./src/reddit/components/Econ/OldPowerupsLevel2PerksBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3WNPvI7fC9scHJ_32NZbkk",
				title: "_31A2igXkjI3EuV2cVTlzKP",
				footer: "_33i1PsWAjpQANvwNqoYh2_"
			}
		},
		"./src/reddit/components/Econ/OldPowerupsLevel2PerksBanner/index.tsx": function(e, t, s) {
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
				g = s("./src/reddit/components/Econ/OldPowerupsLevel2PerksBanner/Navigation/index.m.less"),
				_ = s.n(g);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var j = e => {
					const {
						className: t,
						step: s,
						stepCount: a,
						setStep: r,
						onClick: c
					} = e, o = s === a - 1;
					return n.a.createElement("footer", {
						className: Object(i.a)(t, _.a.container),
						onClick: c
					}, n.a.createElement("button", {
						className: Object(i.a)(_.a.prevButton, {
							[_.a.hidden]: 0 === s
						}),
						onClick: e => {
							e.stopPropagation(), r(0 === s ? a - 1 : s - 1)
						}
					}, n.a.createElement(E.a, {
						className: _.a.icon
					})), n.a.createElement("div", {
						className: _.a.dots
					}, Array.from(Array(a), (e, t) => n.a.createElement("button", {
						className: Object(i.a)(_.a.dot, {
							[_.a.active]: s === t
						}),
						onClick: e => {
							e.stopPropagation(), r(t)
						}
					}))), n.a.createElement("button", {
						className: Object(i.a)(_.a.nextButton, {
							[_.a.hidden]: o
						}),
						onClick: e => {
							e.stopPropagation(), r(o ? 0 : s + 1)
						}
					}, n.a.createElement(E.a, {
						className: _.a.icon
					})))
				},
				N = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				O = s("./src/reddit/components/Econ/OldPowerupsLevel2PerksBanner/Slide/index.m.less"),
				w = s.n(O);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var x = e => n.a.createElement("div", {
					className: Object(i.a)(e.className, w.a.container)
				}, n.a.createElement("div", {
					className: w.a.icon,
					style: {
						backgroundImage: `url('${e.iconUrl}')`
					}
				}), n.a.createElement("h3", {
					className: w.a.title
				}, e.title), n.a.createElement("div", {
					className: w.a.badge
				}, e.isUnlocked ? n.a.createElement("span", {
					className: w.a.unlocked
				}, P._("Unlocked", null, {
					hk: "3wuVfi"
				})) : n.a.createElement(N.a, {
					className: w.a.lockIcon
				}))),
				C = s("./src/reddit/components/Econ/OldPowerupsLevel2PerksBanner/SlidesGallery/index.m.less"),
				h = s.n(C);
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), L = Object(o.c)({
				isTopSupporter: (e, {
					subredditId: t
				}) => {
					const s = Object(v.i)(e);
					return !!s && Object(u.b)(e, {
						subredditId: t,
						userId: s.id
					})
				},
				subreddit: m.T,
				userBenefits: u.n
			});
			var A;
			! function(e) {
				e.Intro = "intro", e.Benefits = "benefits", e.Outro = "outro"
			}(A || (A = {}));
			const I = {
				[A.Intro]: "linear-gradient(90deg, #EC7406 0%, #F5D21A 100%)",
				[k.a.HdVideo]: "linear-gradient(83deg, #7544FF 0%, #FF585B 100%)",
				[k.a.CommentsWithGifs]: "linear-gradient(90deg, #0E69A2 0%, #50CABD 100%)",
				[k.a.CommentsWithEmoji]: "linear-gradient(90deg, #DC0A0A 0%, #F7A456 100%)",
				[A.Outro]: "linear-gradient(90deg, #219A52 0%, #00D5D5 100%)"
			};
			var U = Object(r.b)(L)((function(e) {
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
					const b = s.filter(e => I[e] && k.d[e]),
						v = b.length + 2,
						E = t || b.every(e => d.includes(e)) && c;
					return n.a.createElement("div", {
						className: Object(i.a)(h.a.container, r)
					}, n.a.createElement("div", {
						className: h.a.slidesBackground
					}, n.a.createElement("div", {
						className: Object(i.a)(h.a.background, {
							[h.a.visible]: 0 === u
						}),
						style: {
							background: I[A.Intro]
						}
					}), b.map((e, t) => n.a.createElement("div", {
						className: Object(i.a)(h.a.background, {
							[h.a.visible]: u === t + 1
						}),
						key: `bg_${e}`,
						style: {
							background: I[e] || I[A.Intro]
						}
					})), n.a.createElement("div", {
						className: Object(i.a)(h.a.background, {
							[h.a.visible]: u === v - 1
						}),
						style: {
							background: I[A.Outro]
						}
					})), n.a.createElement("div", {
						className: h.a.slides
					}, n.a.createElement("div", {
						className: Object(i.a)(h.a.slide, {
							[h.a.visible]: 0 === u
						})
					}, n.a.createElement(x, {
						iconUrl: `${p.a.assetPath}/img/powerups/perks-blue-phone.svg`,
						title: B._("Unlock perks for {subreddit name}", [B._param("subreddit name", l.displayText)], {
							hk: "UpSK1"
						}),
						isUnlocked: E
					})), b.map((e, t) => n.a.createElement("div", {
						className: Object(i.a)(h.a.slide, {
							[h.a.visible]: u === t + 1
						}),
						key: `slide_${e}`
					}, n.a.createElement(x, {
						iconUrl: `${p.a.assetPath}/img/powerups/${e}.svg`,
						title: k.d[e](),
						isUnlocked: E || d.includes(e)
					}))), n.a.createElement("div", {
						className: Object(i.a)(h.a.slide, {
							[h.a.visible]: u === v - 1
						})
					}, n.a.createElement(x, {
						iconUrl: `${p.a.assetPath}/img/powerups/hero-status.svg`,
						title: B._("Get Hero Icon", null, {
							hk: "1jsMQs"
						}),
						isUnlocked: c
					}))), n.a.createElement(j, {
						stepCount: v,
						setStep: m,
						step: u,
						className: h.a.navigation,
						onClick: o
					}), n.a.createElement("div", {
						className: h.a.counter
					}, u + 1, "/", v))
				})),
				S = s("./src/reddit/components/Econ/OldPowerupsLevel2PerksBanner/index.m.less"),
				y = s.n(S);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = Object(o.c)({
				powerups: u.j,
				subreddit: m.T
			});
			t.default = Object(r.b)(T)(e => {
				var t;
				const {
					className: s,
					powerups: o,
					subreddit: u,
					subredditId: m
				} = e, p = Object(r.d)(), v = Object(c.a)();
				Object(a.useEffect)(() => {
					v(Object(l.l)())
				}, [m, v]);
				const k = () => {
					v(Object(l.k)()), p(Object(d.c)("in_feed_unit"))
				};
				if (!o || 1 === o.tiersInfo.length || !u) return null;
				const {
					tier: E,
					tiersInfo: g
				} = o, _ = null === (t = g[1]) || void 0 === t ? void 0 : t.benefits, f = E >= 2;
				return n.a.createElement("div", {
					className: Object(i.a)(y.a.container, s)
				}, n.a.createElement("h2", {
					className: y.a.title
				}, F._("Powerup", null, {
					hk: "4p1fZz"
				})), n.a.createElement(U, {
					areAllBenefitsUnlocked: f,
					benefits: _,
					className: y.a.gallery,
					onClick: k,
					subredditId: m
				}), n.a.createElement("footer", {
					className: y.a.footer
				}, n.a.createElement(b.l, {
					className: y.a.button,
					onClick: k
				}, F._("Learn more", null, {
					hk: "1hZsGq"
				}))))
			})
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-OldPowerupsLevel2PerksBanner.386d60cb87852f82faed.js.map