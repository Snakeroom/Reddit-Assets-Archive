// https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.52ed55b37531a5d9f228.js
// Retrieved at 10/13/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-TypingIndicators"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_baseClamp.js"),
				o = t("./node_modules/lodash/_copyArray.js"),
				a = t("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, s) {
				return a(o(e), n(s, 0, e.length))
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
				a = t("./node_modules/lodash/values.js");
			e.exports = function(e, s) {
				var t = a(e);
				return o(t, n(s, 0, t.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, s) {
				var t = -1,
					o = e.length,
					a = o - 1;
				for (s = void 0 === s ? o : s; ++t < s;) {
					var r = n(t, a),
						c = e[r];
					e[r] = e[t], e[t] = c
				}
				return e.length = s, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_arraySampleSize.js"),
				o = t("./node_modules/lodash/_baseSampleSize.js"),
				a = t("./node_modules/lodash/isArray.js"),
				r = t("./node_modules/lodash/_isIterateeCall.js"),
				c = t("./node_modules/lodash/toInteger.js");
			e.exports = function(e, s, t) {
				return s = (t ? r(e, s, t) : void 0 === s) ? 1 : c(s), (a(e) ? n : o)(e, s)
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = t("./node_modules/react/index.js"),
				a = t.n(o),
				r = t("./src/lib/classNames/index.ts"),
				c = t("./node_modules/lodash/sampleSize.js"),
				d = t.n(c),
				l = t("./src/reddit/helpers/getFakeUserIcons.ts"),
				i = t("./src/reddit/hooks/useConstructor.ts"),
				m = t("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				u = t.n(m);
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
				h = 3,
				_ = e => {
					const {
						iconsKey: s,
						memberIconClassName: t,
						numVisibleIcons: n = h,
						shouldOutlinePresenceDot: c,
						shouldShowPresenceDot: m,
						shouldUseColoredSilhouetteIcons: _,
						numIconsToDrawFrom: j = (_ ? f : b),
						wrapperClassName: I
					} = e, g = Object(o.useRef)([]);
					return Object(i.a)(() => {
						const e = Object(l.a)(s, j, _);
						g.current = d()(e, n)
					}), a.a.createElement("div", {
						className: Object(r.a)(u.a.membersIcons, I)
					}, g.current.map(({
						color: e,
						image: s
					}, o) => {
						return o === n - 1 && m ? a.a.createElement("div", {
							className: u.a.presenceWrapper,
							key: o
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
							key: o,
							src: s,
							style: {
								backgroundColor: e
							}
						})
					}))
				};
			s.a = _
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
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				o = t("./node_modules/react/index.js"),
				a = t.n(o),
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
				f = t.n(p);
			s.default = e => {
				const s = Object(o.useRef)(null),
					t = Object(o.useRef)(0),
					{
						minNumUsersTyping: d,
						minTimeVisible: l,
						postId: p
					} = e,
					[b, h] = Object(o.useState)(0),
					[_, j] = Object(o.useState)(null),
					I = Object(u.a)(),
					g = Object(o.useMemo)(() => ({
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "POST_TYPING_INDICATOR",
								postID: p
							}
						}
					}), [p]),
					v = Object(o.useCallback)(e => {
						const {
							numUsers: s
						} = e.subscribe.data;
						"number" == typeof s && s !== b && h(s)
					}, [b]);
				Object(o.useEffect)(() => {
					if (b >= d) return t.current = b, void(_ || (s.current && clearTimeout(s.current), j(Date.now())));
					if (!_) return;
					const e = Date.now() - _;
					e > l ? j(null) : s.current = setTimeout(() => j(null), l - e)
				}, [_, l, b, d]);
				const {
					className: y,
					shouldMount: O,
					onTransitionEnd: C
				} = Object(m.a)({
					defaultClass: f.a.typingIndicator,
					addedClass: f.a.isDisplayed,
					mountCondition: !!_
				});
				return Object(o.useEffect)(() => {
					O && I(i(p, b))
				}, [O, p, I]), a.a.createElement(a.a.Fragment, null, a.a.createElement(r.a, {
					variables: g,
					onData: v,
					queryKey: "postTypingIndicator"
				}), O && a.a.createElement("div", {
					className: y,
					onTransitionEnd: C
				}, a.a.createElement(c.a, {
					iconsKey: p,
					memberIconClassName: f.a.offsetMemberIcon,
					numVisibleIcons: d,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: f.a.offsetMembersIcons
				}), a.a.createElement("div", {
					className: f.a.numUsersTyping
				}, n.fbt._("{number of people typing} people typing", [n.fbt._param("number of people typing", t.current.toString())], {
					hk: "1EaTEX"
				})), a.a.createElement("div", {
					className: f.a.typingDots
				}, a.a.createElement("span", {
					className: f.a.dot
				}), a.a.createElement("span", {
					className: f.a.dot
				}), a.a.createElement("span", {
					className: f.a.dot
				}))))
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/lodash/memoize.js"),
				o = t.n(n),
				a = t("./src/reddit/constants/categories.tsx"),
				r = t("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, s) => `${r.a.assetPath}/img/snoovatars/snoovatar_${s+1}.png`),
				d = Array.from({
					length: 8
				}).map((e, s) => `${r.a.processingAvatarImageUrl}/defaults/avatar_default_${s}.png`),
				l = [];
			s.a = o()((e, s = 3, t) => {
				if (!e || !s) return l;
				const n = t ? d : c,
					o = Array.from(e).reduce((e, s) => e + s.charCodeAt(0), 0);
				return Array.from({
					length: s
				}).map((e, s) => ({
					color: a.a[(o + s) % a.a.length],
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
				const [a, r] = Object(n.useState)(e), [c, d] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					t && d(!0)
				}, [t]), Object(n.useEffect)(() => {
					c && (t ? window.setTimeout(() => {
						r(Object(o.a)(e, s))
					}, 100) : r(e))
				}, [s, e, t, c]);
				const l = Object(n.useCallback)(() => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.52ed55b37531a5d9f228.js.map