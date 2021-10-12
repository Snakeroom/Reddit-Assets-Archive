// https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.334e74be73315f974419.js
// Retrieved at 10/12/2021, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-TypingIndicators"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, s, t) {
			var o = t("./node_modules/lodash/_baseClamp.js"),
				n = t("./node_modules/lodash/_copyArray.js"),
				a = t("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, s) {
				return a(n(e), o(s, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, s) {
			var t = Math.floor,
				o = Math.random;
			e.exports = function(e, s) {
				return e + t(o() * (s - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, s, t) {
			var o = t("./node_modules/lodash/_baseClamp.js"),
				n = t("./node_modules/lodash/_shuffleSelf.js"),
				a = t("./node_modules/lodash/values.js");
			e.exports = function(e, s) {
				var t = a(e);
				return n(t, o(s, 0, t.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, s, t) {
			var o = t("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, s) {
				var t = -1,
					n = e.length,
					a = n - 1;
				for (s = void 0 === s ? n : s; ++t < s;) {
					var r = o(t, a),
						c = e[r];
					e[r] = e[t], e[t] = c
				}
				return e.length = s, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, s, t) {
			var o = t("./node_modules/lodash/_arraySampleSize.js"),
				n = t("./node_modules/lodash/_baseSampleSize.js"),
				a = t("./node_modules/lodash/isArray.js"),
				r = t("./node_modules/lodash/_isIterateeCall.js"),
				c = t("./node_modules/lodash/toInteger.js");
			e.exports = function(e, s, t) {
				return s = (t ? r(e, s, t) : void 0 === s) ? 1 : c(s), (a(e) ? o : n)(e, s)
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, s, t) {
			"use strict";
			var o = t("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = t("./node_modules/react/index.js"),
				a = t.n(n),
				r = t("./src/lib/classNames/index.ts"),
				c = t("./node_modules/lodash/sampleSize.js"),
				d = t.n(c),
				l = t("./src/reddit/helpers/getFakeUserIcons.ts"),
				i = t("./src/reddit/hooks/useConstructor.ts"),
				m = t("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				u = t.n(m);
			const p = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-UserIcon-PresenceDot",
					isReady(e) {
						const s = this.resolve(e);
						return !1 !== this.resolved[s] && !!t.m[s]
					},
					importAsync: () => Promise.resolve().then(t.bind(null, "./src/reddit/components/UserIcon/PresenceDot.tsx")),
					requireAsync(e) {
						const s = this.resolve(e);
						return this.resolved[s] = !1, this.importAsync(e).then(e => (this.resolved[s] = !0, e))
					},
					requireSync(e) {
						const s = this.resolve(e);
						return t(s)
					},
					resolve() {
						return "./src/reddit/components/UserIcon/PresenceDot.tsx"
					}
				}),
				h = 8,
				_ = 20,
				f = 3,
				b = e => {
					const {
						iconsKey: s,
						memberIconClassName: t,
						numVisibleIcons: o = f,
						shouldOutlinePresenceDot: c,
						shouldShowPresenceDot: m,
						shouldUseColoredSilhouetteIcons: b,
						numIconsToDrawFrom: j = (b ? h : _),
						wrapperClassName: I
					} = e, g = Object(n.useRef)([]);
					return Object(i.a)(() => {
						const e = Object(l.a)(s, j, b);
						g.current = d()(e, o)
					}), a.a.createElement("div", {
						className: Object(r.a)(u.a.membersIcons, I)
					}, g.current.map(({
						color: e,
						image: s
					}, n) => {
						return n === o - 1 && m ? a.a.createElement("div", {
							className: u.a.presenceWrapper,
							key: n
						}, a.a.createElement("img", {
							className: Object(r.a)(u.a.memberIcon, t),
							src: s,
							style: {
								backgroundColor: e
							}
						}), a.a.createElement(p, {
							showPresence: !0,
							outlineClassName: Object(r.a)({
								[u.a.presenceDotClass]: c
							})
						})) : a.a.createElement("img", {
							className: Object(r.a)(u.a.memberIcon, t),
							key: n,
							src: s,
							style: {
								backgroundColor: e
							}
						})
					}))
				};
			s.a = b
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, s, t) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e",
				presenceDotClass: "_29m-SAo1wzA0dkdfJutrjs"
			}
		},
		"./src/reddit/components/TypingIndicators/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var o = t("./node_modules/fbt/lib/FbtPublic.js"),
				n = t("./node_modules/react/index.js"),
				a = t.n(n),
				r = t("./src/realtime/GQLSubscription/async.tsx"),
				c = t("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				d = t("./src/reddit/helpers/trackers/commentsPage.ts"),
				l = t("./src/reddit/selectors/telemetry.ts");
			const i = (() => (e, s) => t => ({
				source: d.a,
				action: "view",
				noun: "typing_indicator",
				...l.defaults(t),
				actionInfo: l.actionInfo(t, {
					reason: s.toString()
				}),
				post: l.post(t, e),
				subreddit: l.subreddit(t)
			}))();
			var m = t("./src/reddit/hooks/useClassNameOnMount.ts"),
				u = t("./src/reddit/hooks/useTracking.ts"),
				p = t("./src/reddit/components/TypingIndicators/index.m.less"),
				h = t.n(p);
			s.default = e => {
				const {
					minNumUsersTyping: s,
					postId: t
				} = e, [d, l] = Object(n.useState)(0), p = Object(u.a)(), _ = Object(n.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_TYPING_INDICATOR",
							postID: t
						}
					}
				}), [t]), f = Object(n.useCallback)(e => {
					const {
						numUsers: s
					} = e.subscribe.data;
					s && s !== d && l(s)
				}, [d]), {
					className: b,
					shouldMount: j,
					onTransitionEnd: I
				} = Object(m.a)({
					defaultClass: h.a.typingIndicator,
					addedClass: h.a.isDisplayed,
					mountCondition: d >= s
				});
				return Object(n.useEffect)(() => {
					j && p(i(t, d))
				}, [j, t, p]), a.a.createElement(a.a.Fragment, null, a.a.createElement(r.a, {
					variables: _,
					onData: f,
					queryKey: "postTypingIndicator"
				}), j && a.a.createElement("div", {
					className: b,
					onTransitionEnd: I
				}, a.a.createElement(c.a, {
					iconsKey: t,
					memberIconClassName: h.a.offsetMemberIcon,
					numVisibleIcons: s,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: h.a.offsetMembersIcons
				}), a.a.createElement("div", {
					className: h.a.numUsersTyping
				}, o.fbt._("{number of people typing} people typing", [o.fbt._param("number of people typing", d >= 2 ? d.toString() : "0")], {
					hk: "1EaTEX"
				})), a.a.createElement("div", {
					className: h.a.typingDots
				}, a.a.createElement("span", {
					className: h.a.dot
				}), a.a.createElement("span", {
					className: h.a.dot
				}), a.a.createElement("span", {
					className: h.a.dot
				}))))
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, s, t) {
			"use strict";
			var o = t("./node_modules/lodash/memoize.js"),
				n = t.n(o),
				a = t("./src/reddit/constants/categories.tsx"),
				r = t("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, s) => `${r.a.assetPath}/img/snoovatars/snoovatar_${s+1}.png`),
				d = Array.from({
					length: 8
				}).map((e, s) => `${r.a.processingAvatarImageUrl}/defaults/avatar_default_${s}.png`),
				l = [];
			s.a = n()((e, s = 3, t) => {
				if (!e || !s) return l;
				const o = t ? d : c,
					n = Array.from(e).reduce((e, s) => e + s.charCodeAt(0), 0);
				return Array.from({
					length: s
				}).map((e, s) => ({
					color: a.a[(n + s) % a.a.length],
					image: o[(n + s) % o.length]
				}))
			}, (e, s = 3) => `${e}_${s}`)
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, s, t) {
			"use strict";
			var o = t("./node_modules/react/index.js"),
				n = t("./src/lib/classNames/index.ts");
			s.a = ({
				defaultClass: e,
				addedClass: s,
				mountCondition: t
			}) => {
				const [a, r] = Object(o.useState)(e), [c, d] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					t && d(!0)
				}, [t]), Object(o.useEffect)(() => {
					c && (t ? window.setTimeout(() => {
						r(Object(n.a)(e, s))
					}, 100) : r(e))
				}, [s, e, t, c]);
				const l = Object(o.useCallback)(() => {
					t || d(!1)
				}, [t]);
				return {
					className: a,
					shouldMount: c,
					onTransitionEnd: l
				}
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return n
			}));
			var o = t("./node_modules/react/index.js");

			function n(e) {
				const s = Object(o.useRef)(!1);
				s.current || (e(), s.current = !0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.334e74be73315f974419.js.map