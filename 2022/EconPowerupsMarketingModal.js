// https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.d278894b696872627940.js
// Retrieved at 5/3/2022, 3:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsMarketingModal"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return k
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-dom/index.js"),
				a = (r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function c(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(r, n) {
					return c(e[n], t[n])
				})) : e !== t
			}
			var i = new Map;

			function l(e) {
				void 0 === e && (e = {});
				for (var t, r = e.root || null, n = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							r = t[0],
							n = void 0 === r ? "0px" : r,
							o = t[1],
							s = void 0 === o ? n : o,
							c = t[2],
							i = void 0 === c ? n : c,
							l = t[3];
						return n + " " + s + " " + i + " " + (void 0 === l ? s : l)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = i.keys(); t = s.next().value;) {
					if (!(r !== t.root || n !== t.rootMargin || c(o, t.thresholds))) return t
				}
				return null
			}

			function d(e, t) {
				var r = i.get(e);
				if (r)
					for (var n, o = r.values(); n = o.next().value;)
						if (n.target === t.target) return n;
				return null
			}

			function u(e, t) {
				for (var r = 0; r < e.length; r++) {
					var n = d(t, e[r]);
					n && n.handleChange(e[r])
				}
			}

			function m(e) {
				return l(e) || new IntersectionObserver(u, e)
			}
			var p = r("./node_modules/invariant/browser.js"),
				b = r.n(p),
				h = {},
				f = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return h.errorReporter || function(e) {
								return b()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							h.errorReporter = e
						}
					}
				});

			function w(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function v(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var _ = ["root", "rootMargin", "threshold"],
				g = ["root", "rootMargin", "threshold", "disabled"],
				x = Object.prototype,
				E = x.hasOwnProperty,
				j = x.toString,
				O = function(e) {
					return _.reduce((function(t, r) {
						if (E.call(e, r)) {
							var n = "root" === r && "[object String]" === j.call(e[r]);
							t[r] = n ? document.querySelector(e[r]) : e[r]
						}
						return t
					}), {})
				},
				k = function(e) {
					var t, r;

					function n() {
						for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
						return v(w(t = e.call.apply(e, [this].concat(n)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), v(w(t), "handleNode", (function(e) {
							var r = t.props.children;
							if (null != r) {
								var n = r.ref;
								n && ("function" == typeof n ? n(e) : "object" == typeof n && (n.current = e))
							}
							t.targetNode = e && Object(s.findDOMNode)(e)
						})), v(w(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = m(O(t.props)), t.target = t.targetNode, e = w(t), i.has(e.observer) || i.set(e.observer, new Set), i.get(e.observer).add(e), e.observer.observe(e.target), !0) : (f.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), v(w(t), "unobserve", (function(e) {
							! function(e, t) {
								if (i.has(e.observer)) {
									var r = i.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), i.delete(e.observer)))
								}
							}(w(t), e)
						})), v(w(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
					var a = n.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var r = g.some((function(r) {
							return c(t.props[r], e[r])
						}));
						return r && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), r
					}, a.componentDidUpdate = function(e, t, r) {
						var n = !1;
						r || (n = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (r || n) && this.observe()
					}, a.componentDidMount = function() {
						this.observe()
					}, a.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, a.render = function() {
						var e = this.props.children;
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, n
				}(o.a.Component);
			v(k, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function s() {}
			s.resetWarningCache = o, e.exports = function() {
				function e(e, t, r, o, s, a) {
					if (a !== n) {
						var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw c.name = "Invariant Violation", c
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var r = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: s,
					resetWarningCache: o
				};
				return r.PropTypes = r, r
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, r) {
			e.exports = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/reddit/components/Econ/Common/BenefitTile/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3WUWb7Sw86xRHJJhjUgdZ9",
				icon: "_4UcAT87VyI5VbP6S7bhhK",
				title: "_7IEgYd0otS-qkC7jLZMRc",
				description: "_1Lmps3yUL3wlUeYBq8e1NW",
				new: "_2xYObLxCbdZPVZMoClN8r0"
			}
		},
		"./src/reddit/components/Econ/Common/BenefitTile/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				c = r("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				i = r.n(c);
			const l = e => {
				let {
					className: t,
					onClick: r,
					benefit: o
				} = e;
				return s.a.createElement("div", {
					className: Object(n.a)(t, i.a.container),
					onClick: () => null == r ? void 0 : r(o),
					"data-testid": "benefit-tile"
				}, o.isNew && s.a.createElement(a.a, {
					className: i.a.new
				}), s.a.createElement("div", {
					className: i.a.icon,
					style: {
						backgroundImage: `url('${o.iconUrl}')`
					}
				}), o.title && s.a.createElement("h3", {
					className: i.a.title,
					"data-testid": "benefit-title"
				}, o.title), o.description && s.a.createElement("p", {
					className: i.a.description
				}, o.description))
			}
		},
		"./src/reddit/components/Econ/Common/JoinHeroes/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1tjm5mAw6CbmqAm82cwaAe",
				containerClickable: "_12ETqwk_rEASwSwC4LTdl2",
				heroes: "_1xr8vOZkP3Z1aqi0GVlhG7",
				heroesAvatarContainer: "_33ipNjYYNHKNP6aRMCuqyu",
				twoAvatarsContainer: "QEGs83pht1e9sqreE8rdg",
				heroesAvatar: "_1Rhp-wU2kBaVjLOMcsBK7R",
				heroImage: "_1s4Q5XjokhPDv6KobkwfC_",
				heroesTitle: "_1lF-V9k5_vuSgmcqbFv1-r",
				title: "afIbbnRh2nmaJ17MKDECR",
				progressBar: "u6z9wwkHkYsAHhii9K7g9"
			}
		},
		"./src/reddit/components/Econ/Common/JoinHeroes/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				i = r("./src/reddit/components/UserIcon/index.tsx"),
				l = r("./src/reddit/selectors/gold/powerups/index.ts"),
				d = r("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				u = r.n(d);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let {
					className: t,
					subredditId: r,
					onClick: n
				} = e;
				const d = Object(s.e)(e => Object(l.k)(e, {
						subredditId: r
					})),
					p = Object(s.e)(e => Object(l.m)(e, {
						subredditId: r
					}));
				if (!d) return null;
				const {
					tier: b,
					count: h,
					tiersInfo: f,
					supportersCount: w
				} = d, v = f[1].powerupsCost, _ = b >= 2, g = (null == p ? void 0 : p.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], x = Math.min(h, v) / v, E = v - h;
				return o.a.createElement("div", {
					className: Object(a.a)(u.a.container, t, {
						[u.a.containerClickable]: !!n
					}),
					"data-testid": "join-heroes",
					onClick: () => null == n ? void 0 : n(h)
				}, o.a.createElement("div", {
					className: u.a.heroes
				}, !!g.length && o.a.createElement("div", {
					className: Object(a.a)(u.a.heroesAvatarContainer, {
						[u.a.twoAvatarsContainer]: g.length > 1
					})
				}, g.map(e => {
					var t, r;
					return o.a.createElement("div", {
						className: u.a.heroesAvatar,
						key: e.supporterInfo.id
					}, o.a.createElement(i.a, {
						className: u.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (r = e.supporterInfo.profile) || void 0 === r ? void 0 : r.isNsfw)
					}))
				})), o.a.createElement("div", {
					className: u.a.heroesTitle
				}, (() => w ? m._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [m._plural(w, "subreddit supporters")], {
					hk: "2UisaO"
				}) : m._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), o.a.createElement("p", {
					className: u.a.title
				}, _ ? m._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : m._({
					"*": "{powerups needed} more Powerups will unlock perks for the community",
					_1: "{powerups needed} more Powerup will unlock perks for the community"
				}, [m._param("powerups needed", E), m._plural(E)], {
					hk: "2aHf4k"
				})), o.a.createElement(c.a, {
					className: u.a.progressBar,
					progress: x
				}))
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, r) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = r.n(c);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js"), d = e => {
				let {
					className: t,
					highContrast: r,
					onClick: o
				} = e;
				return s.a.createElement("button", {
					onClick: o,
					className: Object(n.a)(i.a.closeButton, {
						[i.a.highContrast]: r
					}, t),
					"aria-label": l._("Close", null, {
						hk: "3Qarlp"
					})
				}, s.a.createElement(a.b, {
					className: i.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.m.less": function(e, t, r) {
			e.exports = {
				new: "_2u3fkh0zbVoixCjyXrW0_e"
			}
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				c = r.n(a);
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("span", {
					className: Object(s.a)(c.a.new, t)
				}, i._("NEW", null, {
					hk: "2P5bsM"
				}))
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1wsC6xtrQxNdQdcEh1xPYL",
				benefit: "_8AcMAlnrsNTtD3sjdjQ-8"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3-wzlsd2L9K9BE7yms9IhJ",
				title: "_258n2TylpikH2fhZLhlAgr",
				subtitle: "_1AYSLhpiU1fIwgPPxu2Xuy"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				c = r.n(a);
			t.a = e => s.a.createElement("header", {
				className: Object(n.a)(c.a.container, e.className)
			}, s.a.createElement("h2", {
				className: c.a.title
			}, e.title), s.a.createElement("h3", {
				className: c.a.subtitle
			}, e.subtitle))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less": function(e, t, r) {
			e.exports = {
				modal: "_3niK6SoqYWVz3C_LHPXMDD",
				container: "_3fbFTODVaP-23SwM_RYHWW",
				main: "_1PP4a1vxBKAZclzVmYW7SH",
				scrollGradient: "_2m6ArgQ8jrc2aM13gVdJOH",
				modDisclaimer: "_1Cj6AeKuH51FKrEs9jZiDz",
				howItWorksTitle: "Pv4vj5-Zps24hD9scZUdd",
				howItWorksList: "_48giMwZjdVcsSk4RNOioH",
				howItWorksStep: "_3zPOTfP_lw9HxZYfDSLqWV",
				howItWorksSubtitle: "_1mHfIbh68RFw-s9Cabk7Ym",
				howItWorksDesc: "_3ZrdxYotyFfYwi18Y3S3-f",
				joinHeroes: "_1pFvP6hkixRjYBho5_-17x",
				footer: "Fy43-QYAjt3CP4mAs7x6r",
				footerButton: "HGL2YGi64zD6F6gaFCcoL",
				Icon: "_1Raz7RPI_ak_MJXOk7GsQJ",
				icon: "_1Raz7RPI_ak_MJXOk7GsQJ",
				isLeft: "_1Zshq2LYnALasR61IdhJ6e",
				isRight: "_2xT7cEnlPQg0E-E5GbHSj-"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				c = r("./src/reddit/selectors/platform.ts"),
				i = r("./node_modules/reselect/es/index.js"),
				l = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/actions/gold/powerups.ts"),
				m = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				b = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				h = r("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"),
				f = r("./src/reddit/components/ScrollGradient/index.tsx"),
				w = r("./src/reddit/constants/modals.ts"),
				v = r("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/helpers/localStorage/index.ts"),
				x = r("./src/reddit/helpers/trackers/powerups.ts"),
				E = r("./src/reddit/hooks/useScrollGradient.ts"),
				j = r("./src/reddit/hooks/useTracking.ts"),
				O = r("./src/reddit/selectors/gold/powerups/index.ts"),
				k = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"),
				N = r("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				P = r("./src/reddit/models/Gold/Powerups/index.ts"),
				C = r("./src/reddit/selectors/experiments/econ/index.ts"),
				M = r("./src/reddit/selectors/experiments/econ/powerupsAward.ts");
			const S = [P.a.CommentRecognition, P.a.PowerupsAward, P.a.CommunityGear, P.a.CommentsWithGifs, P.a.CommentsWithEmoji, P.a.Achievements, P.a.HeroStatus, P.a.HdVideo],
				I = Object(i.a)([M.b, C.h], (e, t) => {
					let r = S;
					return e || (r = r.filter(e => e !== P.a.PowerupsAward)), t || (r = r.filter(e => e !== P.a.CommunityGear)), r
				});
			var T = r("./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less"),
				L = r.n(T);
			const {
				fbt: A
			} = r("./node_modules/fbt/lib/FbtPublic.js"), R = e => e.length % 2 == 1 ? [...e, P.a.More] : e;
			var B = function(e) {
					const {
						className: t
					} = e, r = Object(j.a)(), n = Object(s.e)(I), a = R(n).map(P.b), c = e => {
						r(Object(x.g)(e.telemetryTag))
					};
					return o.a.createElement("div", {
						className: Object(d.a)(L.a.container, t)
					}, a.map(e => e.title && o.a.createElement(N.a, {
						className: L.a.benefit,
						benefit: e,
						key: e.key,
						onClick: c
					})))
				},
				W = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				H = r("./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less"),
				D = r.n(H);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: F
			} = r("./node_modules/fbt/lib/FbtPublic.js"), G = Object(v.u)(), Y = Object(i.c)({
				currentSubredditId: c.s,
				powerups: (e, t) => {
					const r = Object(c.s)(e);
					return r ? Object(O.k)(e, {
						subredditId: r
					}) : null
				},
				subreddit: c.t
			}), V = Object(s.b)(Y);
			const K = Object(l.a)(G(V((function(e) {
				const {
					currentSubredditId: t,
					powerups: r,
					subreddit: c
				} = e, i = Object(s.d)(), l = Object(j.a)(), v = Object(s.e)(e => !Object(k.w)(e)), {
					container: O,
					isScrollGradientVisible: N,
					calculateGradientVisibility: P
				} = Object(E.b)(!0);
				Object(n.useEffect)(() => {
					v ? Object(y.a)() : Object(h.a)(), t && i(Object(u.m)(t, {
						fullData: !0
					}))
				}, [v, t, i]), Object(n.useLayoutEffect)(() => {
					P()
				});
				const C = () => i(Object(m.g)(w.a.ECON_POWERUPS_MARKETING)),
					M = () => {
						Object(g.Hb)(w.a.ECON_POWERUPS_MARKETING, !0), i(v ? Object(u.h)(t) : Object(m.h)(w.a.ECON_POWERUPS_PURCHASE, {
							subredditId: t
						}))
					};
				if (!t || !c || !r) return C(), null;
				const S = F._("Unlock perks for the whole community", null, {
					hk: "faCTq"
				});
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: D.a.container
				}, o.a.createElement("div", {
					className: Object(d.a)(D.a.main),
					ref: O,
					onScroll: P
				}, o.a.createElement(b.a, {
					onClick: C,
					highContrast: !0
				}), o.a.createElement(W.a, {
					title: F._("Powerup {r/community}", [F._param("r/community", c.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: S
				}), o.a.createElement(B, null), o.a.createElement("span", {
					className: D.a.modDisclaimer
				}, F._("Mods may choose to opt out of some perks.", null, {
					hk: "3W2PR1"
				})), o.a.createElement("h2", {
					className: D.a.howItWorksTitle
				}, F._("How it works", null, {
					hk: "1S8XOX"
				})), o.a.createElement("ul", {
					className: D.a.howItWorksList
				}, o.a.createElement("li", {
					className: D.a.howItWorksStep
				}, o.a.createElement("h3", {
					className: D.a.howItWorksSubtitle
				}, F._("Buy a monthly Powerup subscription", null, {
					hk: "1xgdW6"
				})), o.a.createElement("p", {
					className: D.a.howItWorksDesc
				}, F._("Purchase a Powerup or apply your monthly Powerup included with paid Reddit Premium", null, {
					hk: "2rBQGS"
				}))), o.a.createElement("li", {
					className: D.a.howItWorksStep
				}, o.a.createElement("h3", {
					className: D.a.howItWorksSubtitle
				}, F._("Help unlock perks for your community", null, {
					hk: "4qBTJD"
				})), o.a.createElement(p.a, {
					className: D.a.joinHeroes,
					subredditId: t,
					onClick: e => {
						l(Object(x.e)("powerups_modal")), e ? i(Object(u.i)(c.id)) : M()
					}
				})), o.a.createElement("li", {
					className: D.a.howItWorksStep
				}, o.a.createElement("h3", {
					className: D.a.howItWorksSubtitle
				}, F._("Unlock perks for yourself", null, {
					hk: "4dQOvK"
				})), o.a.createElement("p", {
					className: D.a.howItWorksDesc
				}, F._("Get instant access to perks, a hero badge, and a spot on the heroes list", null, {
					hk: "3uxTLG"
				}))))), o.a.createElement("div", {
					className: D.a.footer
				}, o.a.createElement(_.t, {
					className: D.a.footerButton,
					onClick: M,
					priority: _.c.Primary
				}, F._("Powerup This Community", null, {
					hk: "3gjy90"
				})), o.a.createElement(f.a, {
					className: D.a.scrollGradient,
					isVisible: N
				})), o.a.createElement(a.a, {
					space: a.b.MODAL
				})))
			}))));
			t.default = e => o.a.createElement(K, U({}, e, {
				className: Object(d.a)(e.className, D.a.modal)
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				l = r.n(i);
			const d = () => r.e("PowerupsPremiumUpsellModal").then(r.bind(null, "./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.tsx")),
				u = Object(n.a)(d);
			Object(a.b)(c.a.ECON_POWERUPS_PREMIUM_UPSELL, e => s.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modal
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less": function(e, t, r) {
			e.exports = {
				modal: "_1KwpOybv6p44QN3WvUVBoQ",
				container: "TPBQxpFGmnc7DlYlMReTd",
				title: "_1MbiZSwLn6AEllOCsl_VOs",
				footer: "_3rKjfC0Km1veZhKaJ4mY5g"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/higherOrderComponents/makeAsync.tsx"),
				a = r("./src/lib/loadWithRetries/index.ts"),
				c = r("./src/reddit/helpers/loadThirdPartyScript.ts"),
				i = r("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = r("./src/reddit/constants/modals.ts");
			const d = () => Promise.all([r.e("EconPowerupsPurchaseModal").then(r.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(c.d)().catch(() => {})]),
				u = Object(s.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(d).then(e => e[0].default)
				});
			Object(i.b)(l.a.ECON_POWERUPS_PURCHASE, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, r) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
				isInFeedUnit: "_2hif8-1kZa1knghBW2qHUl",
				colorBlockCorner: "_3cb-_dMe8EWVymoglw4OyK",
				isNightmodeOn: "_2aTpeK-XP6gqT5wf5i532u",
				colorBlockThrough: "_1oWuVmyyrm-f2cYxR7EV9F",
				circle: "NsyhNpI3rn1O5dhzAooci",
				circleStriped: "_3wLmFEQT-lNFxQtTZSBM-A",
				circleDotted: "_2Y6YoeMfdGRReebFzEkb1a",
				circleOrangeHollow: "_2MNXM_uf6rOUZgaO42Wnl0",
				circleGreenHollow: "_1ThCjjX1kI9WTSqGhdfbEY",
				circleYellowHollow: "_2tVCe8UCeeIcsfKn_uIZKT"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return m
			}));
			var n, o = r("./src/config.ts"),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				c = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				u = r.n(d);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL", e[e.INFEED_UNIT = 2] = "INFEED_UNIT"
			}(n || (n = {}));
			const m = e => {
				let {
					space: t
				} = e;
				const r = Object(i.e)(l.eb),
					a = t === n.MODAL,
					d = t === n.INFEED_UNIT;
				return c.a.createElement("div", {
					className: Object(s.a)(u.a.background, {
						[u.a.isNightmodeOn]: r,
						[u.a.isModal]: a,
						[u.a.isInFeedUnit]: d
					})
				}, c.a.createElement("div", {
					className: u.a.colorBlockCorner
				}), c.a.createElement("div", {
					className: u.a.colorBlockThrough
				}), c.a.createElement("div", {
					className: u.a.circleStriped,
					style: {
						backgroundImage: r ? `url(${o.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${o.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), c.a.createElement("div", {
					className: u.a.circleOrangeHollow
				}), c.a.createElement("div", {
					className: u.a.circleDotted,
					style: {
						backgroundImage: `url(${o.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), c.a.createElement("div", {
					className: u.a.circleGreenHollow
				}), c.a.createElement("div", {
					className: u.a.circleYellowHollow
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				i = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				l = r.n(i);
			const d = Object(o.forwardRef)((function(e, t) {
					let {
						className: r,
						progress: n
					} = e;
					const o = 100 * n;
					return s.a.createElement("div", {
						className: Object(a.a)(l.a.barRow, r),
						ref: t
					}, s.a.createElement("div", {
						className: l.a.track
					}), s.a.createElement("div", {
						className: l.a.progress,
						style: {
							width: `${o}%`
						}
					}, s.a.createElement(c.a, {
						className: Object(a.a)(l.a.icon, {
							[l.a.empty]: 0 === n,
							[l.a.full]: n >= 1
						})
					})))
				})),
				u = e => {
					let {
						className: t,
						progress: r
					} = e;
					const [a, c] = Object(o.useState)(!1), i = a ? r : 0;
					return s.a.createElement(n.a, {
						onChange: e => {
							a || e.intersectionRatio < .75 || c(!0)
						},
						threshold: .75
					}, s.a.createElement(d, {
						className: t,
						progress: i
					}))
				}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less": function(e, t, r) {
			e.exports = {
				titleRow: "_2b_W3JXE3VJ8DO4pd1cR3l",
				barRow: "_1ER29kj_M6FYxLorbh1AsJ",
				track: "_3MISl1dByeWJEV8uKLNtbV",
				progress: "_2Y6DmLHlgwPOvY5OenOM7j",
				icon: "_2R4rnD4fdTnIksADG42tm-",
				empty: "hkgHKu8P-BXFRaoLtGkuH",
				full: "_1HqxlPwcLJ3eBF_qCn5-go"
			}
		},
		"./src/reddit/components/ScrollGradient/index.m.less": function(e, t, r) {
			e.exports = {
				gradient: "_3-kakYRJykUyPafukcDzry",
				visible: "_24Ju7hkI6TbfWdJ0X4gSqu"
			}
		},
		"./src/reddit/components/ScrollGradient/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./src/reddit/components/ScrollGradient/index.m.less"),
				c = r.n(a);
			const i = e => {
				let {
					className: t,
					isVisible: r
				} = e;
				return s.a.createElement("div", {
					className: Object(n.a)(c.a.gradient, t, {
						[c.a.visible]: r
					})
				})
			}
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/config.ts"),
				o = r("./src/lib/fastdom/index.ts");
			const s = "https://js.stripe.com/v3/",
				a = "https://www.paypalobjects.com/api/checkout.js",
				c = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${n.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function i(e, t) {
				return t() ? Promise.resolve() : new Promise((r, n) => o.a.write(() => {
					t() && r();
					const o = document.head;
					let s = o.querySelector(`script[src='${e}']`);

					function a() {
						this.removeEventListener("load", a), this.removeEventListener("error", c), r()
					}

					function c() {
						this.removeEventListener("load", a), this.removeEventListener("error", c), s && o.removeChild(s), n()
					}
					s || ((s = document.createElement("script")).src = e, o.appendChild(s)), s.addEventListener("load", a), s.addEventListener("error", c)
				}))
			}

			function l() {
				return i(s, () => "undefined" != typeof Stripe)
			}

			function d() {
				return i(a, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function u() {
				return Promise.all(Object.keys(c).map(e => {
					const t = "__" + e;
					return i(c[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			}));
			var n, o = r("./node_modules/react/index.js");

			function s(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.Bottom;
				const [r, s] = Object(o.useState)(e), a = Object(o.useRef)(null);
				return {
					container: a,
					isScrollGradientVisible: r,
					calculateGradientVisibility: () => {
						const e = a.current;
						if (!e) return;
						const r = e.getBoundingClientRect().height,
							{
								scrollHeight: o,
								scrollTop: c
							} = e,
							i = Math.ceil(c + r) >= o,
							l = Math.ceil(r - c) >= o,
							d = t === n.Bottom ? i : l;
						s(!d)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(n || (n = {}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), o.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), o.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), o.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/selectors/experiments/econ/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return s
			})), r.d(t, "r", (function() {
				return a
			})), r.d(t, "t", (function() {
				return c
			})), r.d(t, "n", (function() {
				return i
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "p", (function() {
				return d
			})), r.d(t, "q", (function() {
				return u
			})), r.d(t, "w", (function() {
				return m
			})), r.d(t, "u", (function() {
				return p
			})), r.d(t, "v", (function() {
				return b
			})), r.d(t, "o", (function() {
				return h
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "h", (function() {
				return w
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "j", (function() {
				return j
			})), r.d(t, "k", (function() {
				return O
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "s", (function() {
				return y
			})), r.d(t, "x", (function() {
				return N
			})), r.d(t, "y", (function() {
				return P
			})), r.d(t, "B", (function() {
				return C
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "z", (function() {
				return S
			})), r.d(t, "A", (function() {
				return I
			})), r.d(t, "C", (function() {
				return T
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const s = Object(o.a)(n.id),
				a = Object(o.a)(n.gd),
				c = Object(o.a)(n.jd),
				i = Object(o.a)(n.bd),
				l = (Object(o.a)(n.cd), Object(o.a)(n.ad)),
				d = Object(o.a)(n.ed),
				u = Object(o.a)(n.fd),
				m = Object(o.a)(n.md),
				p = Object(o.a)(n.kd),
				b = Object(o.a)(n.ld),
				h = Object(o.a)(n.dd),
				f = Object(o.a)(n.Wc),
				w = Object(o.a)(n.Uc),
				v = Object(o.a)(n.Nc),
				_ = Object(o.a)(n.Lc),
				g = Object(o.a)(n.Mc),
				x = Object(o.a)(n.Pc),
				E = Object(o.a)(n.Kc),
				j = Object(o.a)(n.Xc),
				O = Object(o.a)(n.Yc),
				k = Object(o.a)(n.Zc),
				y = Object(o.a)(n.hd),
				N = Object(o.a)(n.nd),
				P = Object(o.a)(n.td),
				C = Object(o.a)(n.sd),
				M = Object(o.a)(n.Kf),
				S = Object(o.a)(n.pd),
				I = Object(o.a)(n.rd),
				T = Object(o.a)(n.qd)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.d278894b696872627940.js.map