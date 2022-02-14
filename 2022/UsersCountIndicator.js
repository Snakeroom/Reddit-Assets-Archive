// https://www.redditstatic.com/desktop2x/UsersCountIndicator.009d30e9fb1d443abfdc.js
// Retrieved at 2/14/2022, 11:00:10 AM by Reddit Dataminer v1.0.0
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
				i = n("./src/reddit/hooks/useConstructor.ts"),
				l = n("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = n.n(l);
			const b = Object(t.a)({
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
				f = 8,
				p = 3,
				_ = e => {
					const {
						iconsKey: s,
						memberIconClassName: n,
						numVisibleIcons: t = p,
						presenceDotOutlineClassName: c,
						shouldShowPresenceDot: l,
						wrapperClassName: _
					} = e, h = Object(o.useRef)([]);
					return Object(i.a)(() => {
						const e = Object(u.a)(s, f, !0);
						h.current = d()(e, t)
					}), r.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, _)
					}, h.current.map(({
						color: e,
						image: s
					}, o) => {
						return o === t - 1 && l ? r.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: o
						}, r.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, n),
							src: s,
							style: {
								backgroundColor: e
							}
						}), r.a.createElement(b, {
							showPresence: !0,
							outlineClassName: c
						})) : r.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, n),
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
				i = n.n(u),
				l = n("./node_modules/react/index.js"),
				m = n.n(l),
				b = n("./src/realtime/GQLSubscription/async.tsx"),
				f = n("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				p = n("./src/reddit/hooks/useClassNameOnMount.ts"),
				_ = n("./src/reddit/components/UsersCountIndicator/constants.ts"),
				h = n("./src/reddit/components/UsersCountIndicator/index.m.less"),
				j = n.n(h);
			const I = e => e > 9999 ? Object(o.b)(e) : e.toString();
			s.default = ({
				isReadingIndicatorsExperiment: e,
				isReadingIndicatorsReadLoadTest: s,
				isReadingIndicatorsWriteLoadTest: n,
				isTypingIndicatorsExperiment: o,
				isTypingIndicatorsReadLoadTest: r,
				postId: c
			}) => {
				const u = Object(l.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: c
					}), [c]),
					h = Object(l.useMemo)(() => ({
						input: {
							channel: {
								...u,
								category: "USER_IS_READING_POST"
							}
						}
					}), [c]),
					O = Object(l.useMemo)(() => ({
						input: {
							channel: {
								...u,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [c]),
					g = Object(l.useMemo)(() => ({
						input: {
							channel: {
								...u,
								category: "POST_TYPING_INDICATOR"
							}
						}
					}), [c]),
					[C, v] = Object(l.useState)(0),
					[y, R] = Object(l.useState)(0),
					x = Object(l.useCallback)(a()(e => {
						e(0), U(null)
					}, _.e), []),
					E = Object(l.useCallback)(i()((e, s) => {
						s(e), x(s)
					}, _.d), []),
					N = Object(l.useCallback)(e => {
						const {
							numUsers: s,
							__typename: n
						} = e.subscribe.data;
						E(s, "PostReadingCountMessageData" === n ? v : R)
					}, []),
					S = Object(l.useRef)(""),
					[D, U] = Object(l.useState)(null),
					A = Object(l.useRef)(null);
				Object(l.useEffect)(() => {
					if (!e && !o) return void(D && U(null));
					if (C >= _.a || y >= _.b) return S.current = ((e, s) => {
						return s >= _.b ? t.fbt._("{number of people typing} people typing...", [t.fbt._param("number of people typing", I(s))], {
							hk: "31RibC"
						}) : t.fbt._("{number of users reading} people here", [t.fbt._param("number of users reading", I(e))], {
							hk: "3foy5g"
						})
					})(C, y), void(D || U(Date.now()));
					if (!D) return;
					const s = Date.now() - D;
					s >= _.f ? U(null) : A.current = setTimeout(() => U(null), _.f - s)
				}, [D, e, o, C, y]);
				const {
					className: T,
					shouldMount: k,
					onTransitionEnd: M
				} = Object(p.a)({
					defaultClass: j.a.usersCountIndicator,
					addedClass: j.a.isDisplayed,
					mountCondition: !!D
				});
				return Object(l.useEffect)(() => () => {
					x.cancel(), E.cancel(), A.current && clearTimeout(A.current)
				}, []), m.a.createElement(m.a.Fragment, null, n && m.a.createElement(b.a, {
					variables: h,
					onData: d.a,
					queryKey: "userIsReadingPost"
				}), (s || e) && m.a.createElement(b.a, {
					variables: O,
					onData: e ? N : d.a,
					queryKey: "usersReadingIndicator"
				}), (r || o) && m.a.createElement(b.a, {
					variables: g,
					onData: o ? N : d.a,
					queryKey: "postTypingIndicator"
				}), k && m.a.createElement("div", {
					className: T,
					onTransitionEnd: M
				}, S.current, m.a.createElement(f.a, {
					memberIconClassName: j.a.offsetMemberIcon,
					iconsKey: c,
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
			s.a = o()((e, s = 3, n) => {
				if (!e || !s) return u;
				const t = n ? d : c,
					o = Array.from(e).reduce((e, s) => e + s.charCodeAt(0), 0);
				return Array.from({
					length: s
				}).map((e, s) => ({
					color: r.a[(o + s) % r.a.length],
					image: t[(o + s) % t.length]
				}))
			}, (e, s = 3) => `${e}_${s}`)
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n("./src/lib/classNames/index.ts");
			s.a = ({
				defaultClass: e,
				addedClass: s,
				mountCondition: n
			}) => {
				const [r, a] = Object(t.useState)(e), [c, d] = Object(t.useState)(!1);
				Object(t.useEffect)(() => {
					n && d(!0)
				}, [n]), Object(t.useEffect)(() => {
					c && (n ? window.setTimeout(() => {
						a(Object(o.a)(e, s))
					}, 100) : a(e))
				}, [s, e, n, c]);
				const u = Object(t.useCallback)(() => {
					n || d(!1)
				}, [n]);
				return {
					className: r,
					shouldMount: c,
					onTransitionEnd: u
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UsersCountIndicator.009d30e9fb1d443abfdc.js.map