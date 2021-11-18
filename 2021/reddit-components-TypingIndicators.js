// https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.5d8837c84b14ebc5fedd.js
// Retrieved at 11/18/2021, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-TypingIndicators"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_baseClamp.js"),
				o = t("./node_modules/lodash/_copyArray.js"),
				r = t("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, s) {
				return r(o(e), n(s, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, s) {
			var t = Math.floor,
				n = Math.random;
			e.exports = function(e, s) {
				return e + t(n() * (s - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_baseClamp.js"),
				o = t("./node_modules/lodash/_shuffleSelf.js"),
				r = t("./node_modules/lodash/values.js");
			e.exports = function(e, s) {
				var t = r(e);
				return o(t, n(s, 0, t.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, s) {
				var t = -1,
					o = e.length,
					r = o - 1;
				for (s = void 0 === s ? o : s; ++t < s;) {
					var a = n(t, r),
						c = e[a];
					e[a] = e[t], e[t] = c
				}
				return e.length = s, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_arraySampleSize.js"),
				o = t("./node_modules/lodash/_baseSampleSize.js"),
				r = t("./node_modules/lodash/isArray.js"),
				a = t("./node_modules/lodash/_isIterateeCall.js"),
				c = t("./node_modules/lodash/toInteger.js");
			e.exports = function(e, s, t) {
				return s = (t ? a(e, s, t) : void 0 === s) ? 1 : c(s), (r(e) ? n : o)(e, s)
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = t("./node_modules/react/index.js"),
				r = t.n(o),
				a = t("./src/lib/classNames/index.ts"),
				c = t("./node_modules/lodash/sampleSize.js"),
				d = t.n(c),
				l = t("./src/reddit/helpers/getFakeUserIcons.ts"),
				i = t("./src/reddit/hooks/useConstructor.ts"),
				u = t("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = t.n(u);
			const p = Object(n.a)({
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
				f = 8,
				b = 20,
				_ = 3,
				h = e => {
					const {
						iconsKey: s,
						memberIconClassName: t,
						numVisibleIcons: n = _,
						shouldOutlinePresenceDot: c,
						shouldShowPresenceDot: u,
						shouldUseColoredSilhouetteIcons: h,
						numIconsToDrawFrom: j = (h ? f : b),
						wrapperClassName: I
					} = e, g = Object(o.useRef)([]);
					return Object(i.a)(() => {
						const e = Object(l.a)(s, j, h);
						g.current = d()(e, n)
					}), r.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, I)
					}, g.current.map(({
						color: e,
						image: s
					}, o) => {
						return o === n - 1 && u ? r.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: o
						}, r.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, t),
							src: s,
							style: {
								backgroundColor: e
							}
						}), r.a.createElement(p, {
							showPresence: !0,
							outlineClassName: Object(a.a)({
								[m.a.presenceDotClass]: c
							})
						})) : r.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, t),
							key: o,
							src: s,
							style: {
								backgroundColor: e
							}
						})
					}))
				};
			s.a = h
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, s, t) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e",
				presenceDotClass: "_29m-SAo1wzA0dkdfJutrjs"
			}
		},
		"./src/reddit/components/TypingIndicators/index.m.less": function(e, s, t) {
			e.exports = {
				fadeOut: "hxgpjMmP5DkIH9qjzKU76",
				typingIndicator: "xQIeDIIVr1yVZYxsz0ozp",
				isDisplayed: "_3SppaUc9TkqJc-zbqJt-3h",
				numUsersTyping: "_3TiTD1rBkrFHlvu6vJ2D_n",
				offsetMembersIcons: "CnV1Edi-ImN72TXNKOCUu",
				typingDots: "_3Sck3A9yG3NOFzt_N7zrlr",
				dot: "_1fMgUDC_-k-rdiT8UGZ6j4",
				typingAnimation: "_3Qj9QSvdQ5qft-VPaBowdQ",
				offsetMemberIcon: "KCCH40yFmIIE1YdtzgwrD"
			}
		},
		"./src/reddit/components/TypingIndicators/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				o = t("./node_modules/react/index.js"),
				r = t.n(o),
				a = t("./src/realtime/GQLSubscription/async.tsx"),
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
			var u = t("./src/reddit/hooks/useClassNameOnMount.ts"),
				m = t("./src/reddit/hooks/useTracking.ts"),
				p = t("./src/reddit/components/TypingIndicators/constants.ts"),
				f = t("./src/reddit/components/TypingIndicators/index.m.less"),
				b = t.n(f);
			s.default = e => {
				const s = Object(o.useRef)(null),
					t = Object(o.useRef)(0),
					{
						minNumUsersTyping: d,
						minTimeVisible: l,
						postId: f
					} = e,
					[_, h] = Object(o.useState)(0),
					[j, I] = Object(o.useState)(null),
					g = Object(m.a)(),
					y = Object(o.useMemo)(() => ({
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "POST_TYPING_INDICATOR",
								postID: f
							}
						}
					}), [f]),
					O = Object(o.useRef)(null),
					v = Object(o.useRef)(null),
					C = Object(o.useRef)(0),
					N = Object(o.useCallback)(e => {
						const {
							numUsers: s
						} = e.subscribe.data, t = () => {
							v.current && clearTimeout(v.current), v.current = setTimeout(() => {
								h(0), I(null), v.current = null
							}, p.b)
						}, n = () => setTimeout(() => {
							C.current ? (h(C.current), C.current = null, O.current = n(), t()) : O.current = null
						}, p.a);
						O.current ? C.current = s : (h(s), C.current = null, O.current = n(), t())
					}, []);
				Object(o.useEffect)(() => {
					if (_ >= d) return t.current = _, void(j || (s.current && clearTimeout(s.current), I(Date.now())));
					if (!j) return;
					const e = Date.now() - j;
					e > l ? I(null) : s.current = setTimeout(() => I(null), l - e)
				}, [j, l, _, d]);
				const {
					className: T,
					shouldMount: E,
					onTransitionEnd: S
				} = Object(u.a)({
					defaultClass: b.a.typingIndicator,
					addedClass: b.a.isDisplayed,
					mountCondition: !!j
				});
				return Object(o.useEffect)(() => {
					E && g(i(f, _))
				}, [E, f, g, _]), r.a.createElement(r.a.Fragment, null, r.a.createElement(a.a, {
					variables: y,
					onData: N,
					queryKey: "postTypingIndicator"
				}), E && r.a.createElement("div", {
					className: T,
					onTransitionEnd: S
				}, r.a.createElement(c.a, {
					iconsKey: f,
					memberIconClassName: b.a.offsetMemberIcon,
					numVisibleIcons: d,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: b.a.offsetMembersIcons
				}), r.a.createElement("div", {
					className: b.a.numUsersTyping
				}, n.fbt._("{number of people typing} people typing", [n.fbt._param("number of people typing", t.current.toString())], {
					hk: "1EaTEX"
				})), r.a.createElement("div", {
					className: b.a.typingDots
				}, r.a.createElement("span", {
					className: b.a.dot
				}), r.a.createElement("span", {
					className: b.a.dot
				}), r.a.createElement("span", {
					className: b.a.dot
				}))))
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/lodash/memoize.js"),
				o = t.n(n),
				r = t("./src/reddit/constants/categories.tsx"),
				a = t("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, s) => `${a.a.assetPath}/img/snoovatars/snoovatar_${s+1}.png`),
				d = Array.from({
					length: 8
				}).map((e, s) => `${a.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${s}.png`),
				l = [];
			s.a = o()((e, s = 3, t) => {
				if (!e || !s) return l;
				const n = t ? d : c,
					o = Array.from(e).reduce((e, s) => e + s.charCodeAt(0), 0);
				return Array.from({
					length: s
				}).map((e, s) => ({
					color: r.a[(o + s) % r.a.length],
					image: n[(o + s) % n.length]
				}))
			}, (e, s = 3) => `${e}_${s}`)
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				o = t("./src/lib/classNames/index.ts");
			s.a = ({
				defaultClass: e,
				addedClass: s,
				mountCondition: t
			}) => {
				const [r, a] = Object(n.useState)(e), [c, d] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					t && d(!0)
				}, [t]), Object(n.useEffect)(() => {
					c && (t ? window.setTimeout(() => {
						a(Object(o.a)(e, s))
					}, 100) : a(e))
				}, [s, e, t, c]);
				const l = Object(n.useCallback)(() => {
					t || d(!1)
				}, [t]);
				return {
					className: r,
					shouldMount: c,
					onTransitionEnd: l
				}
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return o
			}));
			var n = t("./node_modules/react/index.js");

			function o(e) {
				const s = Object(n.useRef)(!1);
				s.current || (e(), s.current = !0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.5d8837c84b14ebc5fedd.js.map