// https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.8eeb97ef501830abe74e.js
// Retrieved at 9/21/2020, 12:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsMarketingModal"], {
		"./src/reddit/components/Econ/PowerupsMarketingModal/BenefitStep/index.m.less": function(e, t, a) {
			e.exports = {
				container: "i8lE8BdtJKQPn5eeWMgn0",
				icon: "_1fcm1hGzINz7uiHiCxtCq_",
				title: "cbq6-rigN4GYkPok9XA1L",
				description: "_3Sz8BQpu9omk76sAdzXmnU"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Footer/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3SE-kqcXOIEeR9_kBqK-4s",
				dots: "_2XLMAsPXyeZz5rO-qam1bM",
				dot: "_1Bi7O6MSpraMjx9KsjLTk-",
				active: "_1gNXa4XJUv8hzWxs44jCUS",
				buttons: "_1WEnsKD-4El7gAtbc3HAoc",
				primaryButton: "_3LL6dXIZhm06QSQNZDp5Q8",
				secondaryButton: "_1ZeS7kvv4wWK88MA_q6QzS",
				firstStep: "_3FxXnbd6Etdr7N7xainmf8"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3-wzlsd2L9K9BE7yms9IhJ",
				text: "_1bQWFmmhSPbDhEh5cECnmB",
				close: "_1YVfqNhMUoIjsUAEr4MPS8"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/IntroStep/index.m.less": function(e, t, a) {
			e.exports = {
				row: "_1hXu-P4IyrHPVJ6oMenK8t",
				icon: "_3eoDUZaM6OjQv3-0NKiPMO",
				title: "JdAH83cQdrns3U3HtFI2J",
				description: "ATarT06kJMHeK4IMZbl8a"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/OutroStep/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "BRFkuWLzYUxfy-kwo_rr6",
				title: "_2PYdHIZ__W_CE5PCMOjuoo",
				list: "D4z11vLdYS7VL9sZTNl8u",
				listItem: "_1RlD2Yk_JFqOvxkxNnEXUw",
				checkIcon: "_2oz_uHyhvXF3mHtpNJmECe"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/SlidesGallery/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3pn7dZnIuE7mHlu1ctjVoO",
				fillContainer: "yCN-c-X12So4goeJ87019",
				slidesBackground: "_3HguWy58CZK3wDY6XJ4al9",
				background: "_1updyg9aIqJvaNZ4I_emPy",
				visible: "_2oboS4gbga6kwIjv2ntg77",
				slides: "_3zxtr58_pBYdZbp7OC_6-h",
				slide: "_1LTI9ttBzmvOfZfHgw97KN",
				slideBenefit: "_3-nolTztzK0KF9fkETC4dW",
				slideOutro: "_1DLZrjx6uCHAezctvK6Gf5",
				footer: "_3LETbnl_kmFTOwJamqNYCr"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less": function(e, t, a) {
			e.exports = {
				modal: "_3niK6SoqYWVz3C_LHPXMDD",
				gallery: "_3nRfWznpJcmaTZBj5QvmIl"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				c = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/reddit/helpers/localStorage/index.ts"),
				i = a("./src/reddit/constants/modals.ts"),
				d = a("./src/reddit/contexts/PageLayer/index.tsx"),
				m = a("./src/lib/classNames/index.ts"),
				u = a("./src/reddit/selectors/gold/powerups.ts"),
				p = a("./src/reddit/selectors/subreddit.ts"),
				E = a("./src/reddit/actions/modal.ts"),
				b = a("./src/reddit/icons/svgs/Close/index.tsx"),
				N = a("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				g = a.n(N);
			var _ = e => n.a.createElement("header", {
					className: g.a.container
				}, n.a.createElement("div", {
					className: g.a.text
				}, e.title), n.a.createElement(b.a, {
					className: g.a.close,
					onClick: e.onClose
				})),
				k = a("./src/config.ts"),
				v = a("./src/reddit/models/Gold/Powerups/index.ts"),
				h = a("./src/reddit/components/Econ/PowerupsMarketingModal/BenefitStep/index.m.less"),
				f = a.n(h);
			var x = e => n.a.createElement("div", {
					className: Object(m.a)(e.className, f.a.container)
				}, n.a.createElement("div", {
					className: f.a.icon,
					style: {
						backgroundImage: "url('".concat(e.iconUrl, "')")
					}
				}), n.a.createElement("h3", {
					className: f.a.title
				}, e.title), n.a.createElement("p", {
					className: f.a.description
				}, e.description)),
				C = a("./src/reddit/controls/Button/index.tsx"),
				O = a("./src/reddit/components/Econ/PowerupsMarketingModal/Footer/index.m.less"),
				y = a.n(O);
			const {
				fbt: M
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var w = e => {
					const {
						className: t,
						onFinish: a,
						step: s,
						stepCount: c,
						setStep: r
					} = e, o = s === c - 1;
					return n.a.createElement("footer", {
						className: Object(m.a)(t, y.a.container, {
							[y.a.firstStep]: 0 === s
						})
					}, n.a.createElement("div", {
						className: y.a.buttons
					}, o ? n.a.createElement(C.f, {
						onClick: a,
						className: y.a.primaryButton
					}, M._("Become a Hero", null, {
						hk: "1CJLOR"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
						onClick: a,
						className: y.a.secondaryButton
					}, M._("Skip", null, {
						hk: "2XN1wD"
					})), n.a.createElement(C.f, {
						onClick: () => r(o ? 1 : s + 1),
						className: y.a.primaryButton
					}, M._("Next", null, {
						hk: "2K1TBT"
					})))), n.a.createElement("div", {
						className: y.a.dots
					}, Array.from(Array(c), (e, t) => n.a.createElement("button", {
						className: Object(m.a)(y.a.dot, {
							[y.a.active]: s === t
						}),
						onClick: () => r(t)
					}))))
				},
				P = a("./src/reddit/components/Econ/PowerupsMarketingModal/IntroStep/index.m.less"),
				j = a.n(P);
			const {
				fbt: I
			} = a("./node_modules/fbt/lib/FbtPublic.js"), S = ["/img/powerups/bolt.svg", "/img/powerups/perks.svg", "/img/powerups/hero.svg"];
			var B = e => n.a.createElement("div", {
					className: e.className
				}, n.a.createElement("div", {
					className: j.a.row
				}, n.a.createElement("div", {
					className: j.a.icon,
					style: {
						backgroundImage: 'url("'.concat(k.a.assetPath).concat(S[0], '")')
					}
				}), n.a.createElement("div", null, n.a.createElement("h3", {
					className: j.a.title
				}, I._("Combine your efforts", null, {
					hk: "1iTM5h"
				})), n.a.createElement("p", {
					className: j.a.description
				}, I._("Rally other community members to unlock perks for the whole community", null, {
					hk: "31C4fl"
				})))), n.a.createElement("div", {
					className: j.a.row
				}, n.a.createElement("div", {
					className: j.a.icon,
					style: {
						backgroundImage: 'url("'.concat(k.a.assetPath).concat(S[1], '")')
					}
				}), n.a.createElement("div", null, n.a.createElement("h3", {
					className: j.a.title
				}, I._("Unlock perks for everyone", null, {
					hk: "3GrCpc"
				})), n.a.createElement("p", {
					className: j.a.description
				}, I._("HD videos, GIFs replies, and custom emojis take your community the next level", null, {
					hk: "hcQNc"
				})))), n.a.createElement("div", {
					className: j.a.row
				}, n.a.createElement("div", {
					className: j.a.icon,
					style: {
						backgroundImage: "url(".concat(k.a.assetPath).concat(S[2], ")")
					}
				}), n.a.createElement("div", null, n.a.createElement("h3", {
					className: j.a.title
				}, I._("Become a hero", null, {
					hk: "gXtDH"
				})), n.a.createElement("p", {
					className: j.a.description
				}, I._("Your generosity is rewarded—get perks before they’re unlocked and enjoy your hero status", null, {
					hk: "3to1m4"
				}))))),
				L = a("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				H = a("./src/reddit/components/Econ/PowerupsMarketingModal/OutroStep/index.m.less"),
				A = a.n(H);
			const {
				fbt: D
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var F = e => n.a.createElement("div", {
					className: e.className
				}, n.a.createElement("div", {
					className: A.a.icon,
					style: {
						backgroundImage: "url(".concat(k.a.assetPath, "/img/powerups/hero-status.svg)")
					}
				}), n.a.createElement("h3", {
					className: A.a.title
				}, D._("Hero Status", null, {
					hk: "pLtVB"
				})), n.a.createElement("ul", {
					className: A.a.list
				}, n.a.createElement("li", {
					className: A.a.listItem
				}, n.a.createElement(L.a, {
					className: A.a.checkIcon
				}), n.a.createElement("span", {
					className: A.a.description
				}, D._("Use perks before they’re unlocked", null, {
					hk: "1QVuzf"
				}))), n.a.createElement("li", {
					className: A.a.listItem
				}, n.a.createElement(L.a, {
					className: A.a.checkIcon
				}), n.a.createElement("span", {
					className: A.a.description
				}, D._("Get a hero badge next to your name", null, {
					hk: "3hU3bk"
				}))), n.a.createElement("li", {
					className: A.a.listItem
				}, n.a.createElement(L.a, {
					className: A.a.checkIcon
				}), n.a.createElement("span", {
					className: A.a.description
				}, D._("Join the community hero list", null, {
					hk: "4pVKpt"
				}))))),
				K = a("./src/reddit/components/Econ/PowerupsMarketingModal/SlidesGallery/index.m.less"),
				U = a.n(K);
			const {
				fbt: z
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var X;
			! function(e) {
				e.Intro = "intro", e.Benefits = "benefits", e.Outro = "Outro"
			}(X || (X = {}));
			const T = {
				[X.Intro]: "var(--newCommunityTheme-body)",
				[v.a.HdVideo]: "linear-gradient(14deg, #5D3BBC 0%, #933DBB 89%)",
				[v.a.CommentsWithGifs]: "linear-gradient(14deg, #0E68A2 0%, #51CBBC 95%)",
				[v.a.CommentsWithEmoji]: "linear-gradient(14deg, #DC0909 0%, #F7A356 89%)",
				[X.Outro]: "linear-gradient(13deg, #219951 0%, #34D9B1 95%)"
			};
			var Z = function(e) {
					const {
						benefits: t,
						className: a,
						onFinish: c
					} = e, [r, o] = Object(s.useState)(0), l = t.length + 2;
					return n.a.createElement("div", {
						className: Object(m.a)(U.a.container, a)
					}, n.a.createElement("div", {
						className: U.a.slidesBackground
					}, n.a.createElement("div", {
						className: Object(m.a)(U.a.background, {
							[U.a.visible]: 0 === r
						}),
						style: {
							background: T[X.Intro]
						}
					}), t.map((e, t) => v.d[e] && n.a.createElement("div", {
						className: Object(m.a)(U.a.background, {
							[U.a.visible]: r === t + 1
						}),
						key: "bg_".concat(e),
						style: {
							background: T[e] || T[X.Intro]
						}
					})), n.a.createElement("div", {
						className: Object(m.a)(U.a.background, {
							[U.a.visible]: r === l - 1
						}),
						style: {
							background: T[X.Outro]
						}
					})), n.a.createElement("div", {
						className: U.a.slides
					}, n.a.createElement("div", {
						className: Object(m.a)(U.a.slide, {
							[U.a.visible]: 0 === r
						})
					}, n.a.createElement(B, {
						className: U.a.introStep
					})), t.map((e, t) => v.d[e] && n.a.createElement("div", {
						className: Object(m.a)(U.a.slide, U.a.slideBenefit, {
							[U.a.visible]: r === t + 1
						}),
						key: "slide_".concat(e)
					}, n.a.createElement(x, {
						className: U.a.benefitStep,
						description: v.c[e](),
						iconUrl: "".concat(k.a.assetPath, "/img/powerups/").concat(e, ".svg"),
						title: v.d[e]()
					}))), n.a.createElement("div", {
						className: Object(m.a)(U.a.slide, U.a.slideOutro, {
							[U.a.visible]: r === l - 1
						})
					}, n.a.createElement(F, {
						className: U.a.outroStep
					}))), n.a.createElement(w, {
						className: U.a.footer,
						step: r,
						stepCount: l,
						setStep: o,
						onFinish: c
					}))
				},
				J = a("./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less"),
				W = a.n(J);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Q
			} = a("./node_modules/fbt/lib/FbtPublic.js"), R = Object(d.t)(), q = Object(r.c)({
				currentSubredditId: d.m,
				powerups: (e, t) => {
					const a = Object(d.m)(e, t);
					return a ? Object(u.f)(e, {
						subredditId: a
					}) : null
				},
				subreddit: (e, t) => {
					const a = Object(d.m)(e, t);
					return a ? Object(p.S)(e, {
						subredditId: a
					}) : null
				}
			}), Y = Object(c.b)(q);
			const V = Object(o.a)(R(Y((function(e) {
				var t;
				const {
					currentSubredditId: a,
					powerups: s,
					subreddit: r
				} = e, o = Object(c.c)(), d = () => o(Object(E.g)(i.a.ECON_POWERUPS_MARKETING));
				if (!a || !r || !s) return d(), null;
				const {
					tier: m,
					tiersInfo: u
				} = s, p = null === (t = u[m] || u[m - 1]) || void 0 === t ? void 0 : t.benefits;
				return n.a.createElement("div", null, n.a.createElement(_, {
					title: Q._("Powerup {r/community}", [Q._param("r/community", r.displayText)], {
						hk: "2HkBNV"
					}),
					onClose: d
				}), n.a.createElement(Z, {
					benefits: p,
					className: W.a.gallery,
					onFinish: () => {
						Object(l.X)(i.a.ECON_POWERUPS_MARKETING, !0), o(Object(E.h)(i.a.ECON_POWERUPS_PURCHASE))
					}
				}))
			}))));
			t.default = e => n.a.createElement(V, G({}, e, {
				className: Object(m.a)(e.className, W.a.modal)
			}))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.8eeb97ef501830abe74e.js.map