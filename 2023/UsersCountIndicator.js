// https://www.redditstatic.com/desktop2x/UsersCountIndicator.f0a396219d0cdf9eccee.js
// Retrieved at 2/21/2023, 3:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UsersCountIndicator"], {
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
				u = t("./src/reddit/helpers/getFakeUserIcons.ts"),
				i = t("./src/reddit/hooks/useConstructor.ts"),
				l = t("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = t.n(l);
			const f = Object(n.a)({
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
				b = 8,
				p = 3,
				_ = e => {
					const {
						iconsKey: s,
						memberIconClassName: t,
						numVisibleIcons: n = p,
						presenceDotOutlineClassName: c,
						shouldShowPresenceDot: l,
						wrapperClassName: _
					} = e, h = Object(o.useRef)([]);
					return Object(i.a)(() => {
						const e = Object(u.a)(s, b, !0);
						h.current = d()(e, n)
					}), r.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, _)
					}, h.current.map((e, s) => {
						let {
							color: o,
							image: d
						} = e;
						return s === n - 1 && l ? r.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: s
						}, r.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, t),
							src: d,
							style: {
								backgroundColor: o
							}
						}), r.a.createElement(f, {
							showPresence: !0,
							outlineClassName: c
						})) : r.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, t),
							key: s,
							src: d,
							style: {
								backgroundColor: o
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
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e"
			}
		},
		"./src/reddit/components/UsersCountIndicator/constants.ts": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return n
			})), t.d(s, "b", (function() {
				return o
			})), t.d(s, "c", (function() {
				return r
			})), t.d(s, "d", (function() {
				return a
			})), t.d(s, "e", (function() {
				return c
			})), t.d(s, "f", (function() {
				return d
			})), t.d(s, "g", (function() {
				return u
			}));
			const n = 5,
				o = 2,
				r = 1e4,
				a = 2e3,
				c = 3e4,
				d = 1e4,
				u = 2
		},
		"./src/reddit/components/UsersCountIndicator/index.m.less": function(e, s, t) {
			e.exports = {
				usersCountIndicator: "_3wvjcIArtO7kKPJabZfZ9S",
				isDisplayed: "_1c98ixuh4QUWO9ERiFID3p",
				offsetMembersIconsWrapper: "RtAsN7UrR7u51W5kaOXvp",
				offsetMemberIcon: "_1JRtpiobR4jYtbw-xx1tPO"
			}
		},
		"./src/reddit/components/UsersCountIndicator/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s), t.d(s, "formatPresenceNumber", (function() {
				return I
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				o = t("./src/lib/prettyPrintNumber/index.ts"),
				r = t("./node_modules/lodash/debounce.js"),
				a = t.n(r),
				c = t("./node_modules/lodash/noop.js"),
				d = t.n(c),
				u = t("./node_modules/lodash/throttle.js"),
				i = t.n(u),
				l = t("./node_modules/react/index.js"),
				m = t.n(l),
				f = t("./src/realtime/GQLSubscription/async.tsx"),
				b = t("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				p = t("./src/reddit/hooks/useClassNameOnMount.ts"),
				_ = t("./src/reddit/components/UsersCountIndicator/constants.ts"),
				h = t("./src/reddit/components/UsersCountIndicator/index.m.less"),
				j = t.n(h);
			const I = e => e > 9999 ? Object(o.b)(e) : e.toString();
			s.default = e => {
				let {
					isReadingIndicatorsExperiment: s,
					isReadingIndicatorsReadLoadTest: t,
					isReadingIndicatorsWriteLoadTest: o,
					isTypingIndicatorsExperiment: r,
					isTypingIndicatorsReadLoadTest: c,
					postId: u
				} = e;
				const h = Object(l.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: u
					}), [u]),
					g = Object(l.useMemo)(() => ({
						input: {
							channel: {
								...h,
								category: "USER_IS_READING_POST"
							}
						}
					}), [u]),
					O = Object(l.useMemo)(() => ({
						input: {
							channel: {
								...h,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [u]),
					v = Object(l.useMemo)(() => ({
						input: {
							channel: {
								...h,
								category: "POST_TYPING_INDICATOR"
							}
						}
					}), [u]),
					[C, y] = Object(l.useState)(0),
					[R, x] = Object(l.useState)(0),
					E = Object(l.useCallback)(a()(e => {
						e(0), A(null)
					}, _.e), []),
					N = Object(l.useCallback)(i()((e, s) => {
						s(e), E(s)
					}, _.d), []),
					S = Object(l.useCallback)(e => {
						const {
							numUsers: s,
							__typename: t
						} = e.subscribe.data;
						N(s, "PostReadingCountMessageData" === t ? y : x)
					}, []),
					D = Object(l.useRef)(""),
					[U, A] = Object(l.useState)(null),
					T = Object(l.useRef)(null);
				Object(l.useEffect)(() => {
					if (!s && !r) return void(U && A(null));
					if (C >= _.a || R >= _.b) return D.current = ((e, s) => {
						return s >= _.b ? n.fbt._("{number of people typing} people typing...", [n.fbt._param("number of people typing", I(s))], {
							hk: "31RibC"
						}) : n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", I(e))], {
							hk: "3foy5g"
						})
					})(C, R), void(U || A(Date.now()));
					if (!U) return;
					const e = Date.now() - U;
					e >= _.f ? A(null) : T.current = setTimeout(() => A(null), _.f - e)
				}, [U, s, r, C, R]);
				const {
					className: k,
					shouldMount: P,
					onTransitionEnd: M
				} = Object(p.a)({
					defaultClass: j.a.usersCountIndicator,
					addedClass: j.a.isDisplayed,
					mountCondition: !!U
				});
				return Object(l.useEffect)(() => () => {
					E.cancel(), N.cancel(), T.current && clearTimeout(T.current)
				}, []), m.a.createElement(m.a.Fragment, null, o && m.a.createElement(f.a, {
					variables: g,
					onData: d.a,
					queryKey: "userIsReadingPost"
				}), (t || s) && m.a.createElement(f.a, {
					variables: O,
					onData: s ? S : d.a,
					queryKey: "usersReadingIndicator"
				}), (c || r) && m.a.createElement(f.a, {
					variables: v,
					onData: r ? S : d.a,
					queryKey: "postTypingIndicator"
				}), P && m.a.createElement("div", {
					className: k,
					onTransitionEnd: M
				}, D.current, m.a.createElement(b.a, {
					memberIconClassName: j.a.offsetMemberIcon,
					iconsKey: u,
					numVisibleIcons: _.g,
					wrapperClassName: j.a.offsetMembersIconsWrapper
				})))
			}
		},
		"./src/reddit/constants/imagePaths.ts": function(e, s, t) {
			"use strict";
			t.d(s, "b", (function() {
				return o
			})), t.d(s, "a", (function() {
				return r
			}));
			var n = t("./src/config.ts");
			const o = Array.from({
					length: 20
				}).map((e, s) => `${n.a.assetPath}/img/snoovatars/snoovatar_${s+1}.png`),
				r = Array.from({
					length: 8
				}).map((e, s) => `${n.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${s}.png`)
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/lodash/memoize.js"),
				o = t.n(n),
				r = t("./src/reddit/constants/categories.tsx"),
				a = t("./src/reddit/constants/imagePaths.ts");
			const c = [];
			s.a = o()((function(e) {
				let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					t = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !s) return c;
				const n = t ? a.a : a.b,
					o = Array.from(e).reduce((e, s) => e + s.charCodeAt(0), 0);
				return Array.from({
					length: s
				}).map((e, s) => ({
					color: r.a[(o + s) % r.a.length],
					image: n[(o + s) % n.length]
				}))
			}), (function(e) {
				let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				return `${e}_${s}`
			}))
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				o = t("./src/lib/classNames/index.ts");
			s.a = e => {
				let {
					defaultClass: s,
					addedClass: t,
					mountCondition: r
				} = e;
				const [a, c] = Object(n.useState)(s), [d, u] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					r && u(!0)
				}, [r]), Object(n.useEffect)(() => {
					d && (r ? window.setTimeout(() => {
						c(Object(o.a)(s, t))
					}, 100) : c(s))
				}, [t, s, r, d]);
				const i = Object(n.useCallback)(() => {
					r || u(!1)
				}, [r]);
				return {
					className: a,
					shouldMount: d,
					onTransitionEnd: i
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UsersCountIndicator.f0a396219d0cdf9eccee.js.map