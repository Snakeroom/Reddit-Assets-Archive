// https://www.redditstatic.com/desktop2x/NewCommentPill.901ed200a8cf19b950cd.js
// Retrieved at 11/11/2021, 10:50:11 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NewCommentPill"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				o = s("./node_modules/lodash/_copyArray.js"),
				r = s("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return r(o(e), n(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				o = s("./node_modules/lodash/_shuffleSelf.js"),
				r = s("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var s = r(e);
				return o(s, n(t, 0, s.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var s = -1,
					o = e.length,
					r = o - 1;
				for (t = void 0 === t ? o : t; ++s < t;) {
					var a = n(s, r),
						c = e[a];
					e[a] = e[s], e[s] = c
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arraySampleSize.js"),
				o = s("./node_modules/lodash/_baseSampleSize.js"),
				r = s("./node_modules/lodash/isArray.js"),
				a = s("./node_modules/lodash/_isIterateeCall.js"),
				c = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return t = (s ? a(e, t, s) : void 0 === t) ? 1 : c(t), (r(e) ? n : o)(e, t)
			}
		},
		"./src/reddit/components/NewCommentPill/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2X4xugrTQ5e3TVxPPEHqGh",
				pillContainer: "_3JKnqeBKw2wp7eHzFXNXSe",
				newCommentsText: "_2nAeJnoRM4DyyVYoJhvMc4",
				pillButton: "_1cubpGNEaCAVnpJl1KBPcO",
				isOverlayWrapper: "_17DaQdt4k4TJ6mwt56tklv",
				wrapperVisible: "ZLsbIthTKUHOvUiC24Rjy",
				memberIcon: "_2w3IfaLQEQVcXSaXJI2vBR"
			}
		},
		"./src/reddit/components/NewCommentPill/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "trackNewCommentPill", (function() {
				return B
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/fastdom/index.ts"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/realtime/GQLSubscription/async.tsx"),
				m = s("./src/reddit/components/CommentSort/index.tsx"),
				u = s("./src/reddit/components/Pill/index.tsx"),
				p = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				b = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				_ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/constants/elementIds.ts"),
				j = s("./src/reddit/constants/tracking.ts"),
				O = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/hooks/usePostContext.ts"),
				C = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/telemetry.ts"),
				g = s("./src/lib/classNames/index.ts"),
				N = s("./src/reddit/components/NewCommentPill/index.m.less"),
				y = s.n(N);
			const w = `?sort=${o.t.NEW}`,
				B = (e, t) => s => ({
					source: "post",
					action: e,
					noun: "new_comment_pill",
					post: Object(I.post)(s, t.id),
					subreddit: Object(x.I)(s, {
						identifier: t.belongsTo
					})
				}),
				E = (e, {
					type: t,
					delta: s
				}) => "add" === t ? e + (s || 0) : 0;
			t.default = Object(_.c)(({
				sendEvent: e,
				postId: t,
				isOverlay: s,
				intersectionRef: o
			}) => {
				const _ = Object(a.useRef)(null),
					{
						post: x
					} = Object(v.a)() || {},
					I = Object(a.useRef)(null),
					[N, T] = Object(a.useReducer)(E, 0),
					A = Object(l.e)(C.a),
					[P, S] = Object(a.useState)(!1),
					[U, k] = Object(a.useState)(!0);
				Object(a.useEffect)(() => {
					I.current = o || null
				}, [o]);
				const D = Object(a.useCallback)(([e]) => {
					o && e.boundingClientRect.top < f.f && (k(!1), S(!1))
				}, [o]);
				Object(O.a)(I, D), Object(a.useEffect)(() => {
					if (!P || U) return;
					const e = () => {
							S(!1)
						},
						t = s ? document.getElementById(h.d) : document;
					return null == t || t.addEventListener("scroll", e), () => null == t ? void 0 : t.removeEventListener("scroll", e)
				}, [U, s, P]);
				const R = Object(a.useMemo)(() => ({
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "COMMENT_COUNT_UPDATE",
								postID: t
							}
						}
					}), [t]),
					J = Object(l.d)(),
					z = Object(a.useCallback)(() => {
						if (!x) return;
						e(B(j.c.CLICK, x)), S(!1), (() => J(Object(d.b)(`${window.location.pathname}${w}`)))(), r.a.read(() => {
							const e = document.getElementById(m.a);
							if (e) {
								const t = e.offsetTop - 50;
								r.a.write(() => window.scrollTo({
									top: t,
									behavior: "smooth"
								}))
							}
						})
					}, [x]);
				Object(a.useEffect)(() => {
					N && S(!0)
				}, [N]), Object(a.useEffect)(() => {
					P && x ? (_.current && clearTimeout(_.current), e(B(j.c.VIEW, x))) : _.current = setTimeout(() => T({
						type: "reset"
					}), 1e3)
				}, [P, e, x]);
				const L = Object(a.useCallback)(e => {
					const {
						topLevelCommentCountChange: t
					} = e.subscribe.data;
					t && T({
						type: "add",
						delta: t
					})
				}, []);
				return A ? c.a.createElement(c.a.Fragment, null, c.a.createElement(i.a, {
					variables: R,
					onData: L,
					queryKey: "topLevelCommentCountChange"
				}), c.a.createElement("div", {
					className: Object(g.a)(y.a.wrapper, {
						[y.a.isOverlayWrapper]: s,
						[y.a.wrapperVisible]: P
					})
				}, c.a.createElement(u.a, {
					className: y.a.pillContainer
				}, c.a.createElement(p.a, {
					className: y.a.pillButton,
					onClick: z,
					variant: p.b.BUTTON
				}, c.a.createElement(b.a, {
					iconsKey: t,
					shouldShowPresenceDot: !0,
					shouldUseColoredSilhouetteIcons: !0,
					shouldOutlinePresenceDot: !0,
					memberIconClassName: y.a.memberIcon
				}), c.a.createElement("span", {
					className: y.a.newCommentsText
				}, N > 1 ? n.fbt._("{number of new comments} new comments", [n.fbt._param("number of new comments", N.toString())], {
					hk: "2jSNSA"
				}) : n.fbt._("1 new comment", null, {
					hk: "4nXICl"
				})))))) : null
			})
		},
		"./src/reddit/components/Pill/PillButton/index.m.less": function(e, t, s) {
			e.exports = {
				primaryButton: "cmR5BF4NpBUm3DBMZCmJS",
				active: "_2dj14FxV-bfkwopj1jV_fF",
				redditStyle: "C64b9palJF2n26mG_1q3D",
				DangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				dangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				GoldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				goldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				PremiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				premiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				Icon: "_1V9TNuAloX-Z3moRIXc8tO",
				icon: "_1V9TNuAloX-Z3moRIXc8tO",
				isLeft: "HjpiNF5rj_I6fiMfmW-X7",
				isRight: "_1A_npZJAxjfyiijZ14jtzh",
				tabGroup: "_2jNQT-6WbFOjX2hdDWV56w",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return u
			}));
			var n, o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Pill/PillButton/index.m.less"),
				l = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.BUTTON = "BUTTON", e.TAB_GROUP = "TAB_GROUP"
			}(n || (n = {}));
			const i = {
					[n.BUTTON]: void 0,
					[n.TAB_GROUP]: l.a.tabGroup
				},
				m = (e, t) => {
					if (t !== n.BUTTON) return e ? l.a.active : l.a.inactive
				},
				u = ({
					active: e = !0,
					children: t,
					className: s,
					disabled: n = !1,
					onClick: o,
					variant: c,
					...u
				}) => r.a.createElement("button", d({}, u, {
					className: Object(a.a)(l.a.primaryButton, i[c], m(e, c), s),
					disabled: n,
					onClick: o
				}), t)
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./node_modules/lodash/sampleSize.js"),
				l = s.n(c),
				d = s("./src/reddit/helpers/getFakeUserIcons.ts"),
				i = s("./src/reddit/hooks/useConstructor.ts"),
				m = s("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				u = s.n(m);
			const p = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-UserIcon-PresenceDot",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/components/UserIcon/PresenceDot.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/UserIcon/PresenceDot.tsx"
					}
				}),
				b = 8,
				_ = 20,
				f = 3,
				h = e => {
					const {
						iconsKey: t,
						memberIconClassName: s,
						numVisibleIcons: n = f,
						shouldOutlinePresenceDot: c,
						shouldShowPresenceDot: m,
						shouldUseColoredSilhouetteIcons: h,
						numIconsToDrawFrom: j = (h ? b : _),
						wrapperClassName: O
					} = e, v = Object(o.useRef)([]);
					return Object(i.a)(() => {
						const e = Object(d.a)(t, j, h);
						v.current = l()(e, n)
					}), r.a.createElement("div", {
						className: Object(a.a)(u.a.membersIcons, O)
					}, v.current.map(({
						color: e,
						image: t
					}, o) => {
						return o === n - 1 && m ? r.a.createElement("div", {
							className: u.a.presenceWrapper,
							key: o
						}, r.a.createElement("img", {
							className: Object(a.a)(u.a.memberIcon, s),
							src: t,
							style: {
								backgroundColor: e
							}
						}), r.a.createElement(p, {
							showPresence: !0,
							outlineClassName: Object(a.a)({
								[u.a.presenceDotClass]: c
							})
						})) : r.a.createElement("img", {
							className: Object(a.a)(u.a.memberIcon, s),
							key: o,
							src: t,
							style: {
								backgroundColor: e
							}
						})
					}))
				};
			t.a = h
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, t, s) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e",
				presenceDotClass: "_29m-SAo1wzA0dkdfJutrjs"
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/memoize.js"),
				o = s.n(n),
				r = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, t) => `${a.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				l = Array.from({
					length: 8
				}).map((e, t) => `${a.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				d = [];
			t.a = o()((e, t = 3, s) => {
				if (!e || !t) return d;
				const n = s ? l : c,
					o = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: r.a[(o + t) % r.a.length],
					image: n[(o + t) % n.length]
				}))
			}, (e, t = 3) => `${e}_${t}`)
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function o(e) {
				const t = Object(n.useRef)(!1);
				t.current || (e(), t.current = !0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommentPill.901ed200a8cf19b950cd.js.map