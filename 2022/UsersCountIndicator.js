// https://www.redditstatic.com/desktop2x/UsersCountIndicator.bd91bb4ddaf792552b85.js
// Retrieved at 3/28/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UsersCountIndicator"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, s, n) {
			var t = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/_copyArray.js"),
				r = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, s) {
				return r(o(e), t(s, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, s) {
			var n = Math.floor,
				t = Math.random;
			e.exports = function(e, s) {
				return e + n(t() * (s - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, s, n) {
			var t = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/_shuffleSelf.js"),
				r = n("./node_modules/lodash/values.js");
			e.exports = function(e, s) {
				var n = r(e);
				return o(n, t(s, 0, n.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, s, n) {
			var t = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, s) {
				var n = -1,
					o = e.length,
					r = o - 1;
				for (s = void 0 === s ? o : s; ++n < s;) {
					var a = t(n, r),
						c = e[a];
					e[a] = e[n], e[n] = c
				}
				return e.length = s, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, s, n) {
			var t = n("./node_modules/lodash/_arraySampleSize.js"),
				o = n("./node_modules/lodash/_baseSampleSize.js"),
				r = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js"),
				c = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, s, n) {
				return s = (n ? a(e, s, n) : void 0 === s) ? 1 : c(s), (r(e) ? t : o)(e, s)
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./node_modules/lodash/sampleSize.js"),
				d = n.n(c),
				u = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				l = n("./src/reddit/hooks/useConstructor.ts"),
				i = n("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = n.n(i);
			const f = Object(t.a)({
					resolved: {},
					chunkName: () => "reddit-components-UserIcon-PresenceDot",
					isReady(e) {
						const s = this.resolve(e);
						return !1 !== this.resolved[s] && !!n.m[s]
					},
					importAsync: () => Promise.resolve().then(n.bind(null, "./src/reddit/components/UserIcon/PresenceDot.tsx")),
					requireAsync(e) {
						const s = this.resolve(e);
						return this.resolved[s] = !1, this.importAsync(e).then(e => (this.resolved[s] = !0, e))
					},
					requireSync(e) {
						const s = this.resolve(e);
						return n(s)
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
						memberIconClassName: n,
						numVisibleIcons: t = p,
						presenceDotOutlineClassName: c,
						shouldShowPresenceDot: i,
						wrapperClassName: _
					} = e, h = Object(o.useRef)([]);
					return Object(l.a)(() => {
						const e = Object(u.a)(s, b, !0);
						h.current = d()(e, t)
					}), r.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, _)
					}, h.current.map((e, s) => {
						let {
							color: o,
							image: d
						} = e;
						return s === t - 1 && i ? r.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: s
						}, r.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, n),
							src: d,
							style: {
								backgroundColor: o
							}
						}), r.a.createElement(f, {
							showPresence: !0,
							outlineClassName: c
						})) : r.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, n),
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
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, s, n) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e"
			}
		},
		"./src/reddit/components/UsersCountIndicator/constants.ts": function(e, s, n) {
			"use strict";
			n.d(s, "a", (function() {
				return t
			})), n.d(s, "b", (function() {
				return o
			})), n.d(s, "c", (function() {
				return r
			})), n.d(s, "d", (function() {
				return a
			})), n.d(s, "e", (function() {
				return c
			})), n.d(s, "f", (function() {
				return d
			})), n.d(s, "g", (function() {
				return u
			}));
			const t = 5,
				o = 2,
				r = 1e4,
				a = 2e3,
				c = 3e4,
				d = 1e4,
				u = 2
		},
		"./src/reddit/components/UsersCountIndicator/index.m.less": function(e, s, n) {
			e.exports = {
				usersCountIndicator: "_3wvjcIArtO7kKPJabZfZ9S",
				isDisplayed: "_1c98ixuh4QUWO9ERiFID3p",
				offsetMembersIconsWrapper: "RtAsN7UrR7u51W5kaOXvp",
				offsetMemberIcon: "_1JRtpiobR4jYtbw-xx1tPO"
			}
		},
		"./src/reddit/components/UsersCountIndicator/index.tsx": function(e, s, n) {
			"use strict";
			n.r(s), n.d(s, "formatPresenceNumber", (function() {
				return I
			}));
			var t = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				r = n("./node_modules/lodash/debounce.js"),
				a = n.n(r),
				c = n("./node_modules/lodash/noop.js"),
				d = n.n(c),
				u = n("./node_modules/lodash/throttle.js"),
				l = n.n(u),
				i = n("./node_modules/react/index.js"),
				m = n.n(i),
				f = n("./src/realtime/GQLSubscription/async.tsx"),
				b = n("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				p = n("./src/reddit/hooks/useClassNameOnMount.ts"),
				_ = n("./src/reddit/components/UsersCountIndicator/constants.ts"),
				h = n("./src/reddit/components/UsersCountIndicator/index.m.less"),
				j = n.n(h);
			const I = e => e > 9999 ? Object(o.b)(e) : e.toString();
			s.default = e => {
				let {
					isReadingIndicatorsExperiment: s,
					isReadingIndicatorsReadLoadTest: n,
					isReadingIndicatorsWriteLoadTest: o,
					isTypingIndicatorsExperiment: r,
					isTypingIndicatorsReadLoadTest: c,
					postId: u
				} = e;
				const h = Object(i.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: u
					}), [u]),
					g = Object(i.useMemo)(() => ({
						input: {
							channel: {
								...h,
								category: "USER_IS_READING_POST"
							}
						}
					}), [u]),
					O = Object(i.useMemo)(() => ({
						input: {
							channel: {
								...h,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [u]),
					v = Object(i.useMemo)(() => ({
						input: {
							channel: {
								...h,
								category: "POST_TYPING_INDICATOR"
							}
						}
					}), [u]),
					[C, y] = Object(i.useState)(0),
					[R, x] = Object(i.useState)(0),
					E = Object(i.useCallback)(a()(e => {
						e(0), A(null)
					}, _.e), []),
					N = Object(i.useCallback)(l()((e, s) => {
						s(e), E(s)
					}, _.d), []),
					S = Object(i.useCallback)(e => {
						const {
							numUsers: s,
							__typename: n
						} = e.subscribe.data;
						N(s, "PostReadingCountMessageData" === n ? y : x)
					}, []),
					D = Object(i.useRef)(""),
					[U, A] = Object(i.useState)(null),
					T = Object(i.useRef)(null);
				Object(i.useEffect)(() => {
					if (!s && !r) return void(U && A(null));
					if (C >= _.a || R >= _.b) return D.current = ((e, s) => {
						return s >= _.b ? t.fbt._("{number of people typing} people typing...", [t.fbt._param("number of people typing", I(s))], {
							hk: "31RibC"
						}) : t.fbt._("{number of users reading} people here", [t.fbt._param("number of users reading", I(e))], {
							hk: "3foy5g"
						})
					})(C, R), void(U || A(Date.now()));
					if (!U) return;
					const e = Date.now() - U;
					e >= _.f ? A(null) : T.current = setTimeout(() => A(null), _.f - e)
				}, [U, s, r, C, R]);
				const {
					className: k,
					shouldMount: M,
					onTransitionEnd: P
				} = Object(p.a)({
					defaultClass: j.a.usersCountIndicator,
					addedClass: j.a.isDisplayed,
					mountCondition: !!U
				});
				return Object(i.useEffect)(() => () => {
					E.cancel(), N.cancel(), T.current && clearTimeout(T.current)
				}, []), m.a.createElement(m.a.Fragment, null, o && m.a.createElement(f.a, {
					variables: g,
					onData: d.a,
					queryKey: "userIsReadingPost"
				}), (n || s) && m.a.createElement(f.a, {
					variables: O,
					onData: s ? S : d.a,
					queryKey: "usersReadingIndicator"
				}), (c || r) && m.a.createElement(f.a, {
					variables: v,
					onData: r ? S : d.a,
					queryKey: "postTypingIndicator"
				}), M && m.a.createElement("div", {
					className: k,
					onTransitionEnd: P
				}, D.current, m.a.createElement(b.a, {
					memberIconClassName: j.a.offsetMemberIcon,
					iconsKey: u,
					numVisibleIcons: _.g,
					wrapperClassName: j.a.offsetMembersIconsWrapper
				})))
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/lodash/memoize.js"),
				o = n.n(t),
				r = n("./src/reddit/constants/categories.tsx"),
				a = n("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, s) => `${a.a.assetPath}/img/snoovatars/snoovatar_${s+1}.png`),
				d = Array.from({
					length: 8
				}).map((e, s) => `${a.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${s}.png`),
				u = [];
			s.a = o()((function(e) {
				let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !s) return u;
				const t = n ? d : c,
					o = Array.from(e).reduce((e, s) => e + s.charCodeAt(0), 0);
				return Array.from({
					length: s
				}).map((e, s) => ({
					color: r.a[(o + s) % r.a.length],
					image: t[(o + s) % t.length]
				}))
			}), (function(e) {
				let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				return `${e}_${s}`
			}))
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n("./src/lib/classNames/index.ts");
			s.a = e => {
				let {
					defaultClass: s,
					addedClass: n,
					mountCondition: r
				} = e;
				const [a, c] = Object(t.useState)(s), [d, u] = Object(t.useState)(!1);
				Object(t.useEffect)(() => {
					r && u(!0)
				}, [r]), Object(t.useEffect)(() => {
					d && (r ? window.setTimeout(() => {
						c(Object(o.a)(s, n))
					}, 100) : c(s))
				}, [n, s, r, d]);
				const l = Object(t.useCallback)(() => {
					r || u(!1)
				}, [r]);
				return {
					className: a,
					shouldMount: d,
					onTransitionEnd: l
				}
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, s, n) {
			"use strict";
			n.d(s, "a", (function() {
				return o
			}));
			var t = n("./node_modules/react/index.js");

			function o(e) {
				const s = Object(t.useRef)(!1);
				s.current || (e(), s.current = !0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UsersCountIndicator.bd91bb4ddaf792552b85.js.map