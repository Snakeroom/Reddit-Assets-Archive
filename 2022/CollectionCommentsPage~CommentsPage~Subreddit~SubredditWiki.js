// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.219b91980addd9632b05.js
// Retrieved at 6/8/2022, 11:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"], {
		"./node_modules/lodash/random.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseRandom.js"),
				s = r("./node_modules/lodash/_isIterateeCall.js"),
				i = r("./node_modules/lodash/toFinite.js"),
				a = parseFloat,
				o = Math.min,
				d = Math.random;
			e.exports = function(e, t, r) {
				if (r && "boolean" != typeof r && s(e, t, r) && (t = r = void 0), void 0 === r && ("boolean" == typeof t ? (r = t, t = void 0) : "boolean" == typeof e && (r = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = i(e), void 0 === t ? (t = e, e = 0) : t = i(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (r || e % 1 || t % 1) {
					var l = d();
					return o(e + l * (t - e + a("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./src/lib/loginHref/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/history/esm/history.js");
			t.a = (e, t, r) => {
				const i = Object(s.e)(e),
					a = encodeURIComponent(`${t}${i}`);
				return `${n.a.accountManagerOrigin}${r||"/login"}?dest=${a}`
			}
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return y
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return v
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return _
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return E
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return k
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return O
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return C
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return S
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return j
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return N
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return I
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return F
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return T
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return L
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const c = async (e, t, r, n) => {
				const s = await Object(a.a)(e, {
					...d,
					variables: {
						subredditId: t,
						flairTypes: r,
						isHidden: n
					}
				});
				if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = r("./src/reddit/actions/gold/powerups.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts"),
				h = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/actions/economics/powerups/constants.ts"),
				x = r("./src/lib/initializeClient/installReducer.ts"),
				w = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(x.a)({
				features: {
					powerups: w.a
				}
			});
			const y = Object(s.a)(f.d),
				v = Object(s.a)(f.i),
				_ = Object(s.a)(f.f),
				E = Object(s.a)(f.g),
				k = Object(s.a)(f.e),
				O = Object(s.a)(f.h),
				C = (e, t) => async (r, n, s) => {
					let {
						gqlContext: d
					} = s;
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const t = await (async (e, t, r) => {
								const n = await Object(a.a)(e, {
									...o,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: !0
									}
								});
								if (!n.ok) throw new Error("Unable to fetch user achievements");
								return n.body.data
							})(d(), e, c),
							{
								subredditInfoById: n,
								redditorsInfoByIds: s
							} = t;
						await r(y(n)), s && await r(v(s))
					} catch (l) {
						i.c.captureException(l)
					}
				}, S = (e, t) => async (r, n) => {
					if (!e) return;
					const s = n(),
						i = Object(g.k)(s);
					if (!i || !Object(b.h)(s, {
							subredditId: e
						})) return;
					const a = !!Object(h.f)(s, {
						subredditId: e,
						userId: i.id
					});
					!t && a || await r(C(e, [i.id]))
				}, j = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(l.m)(e, {
						fullData: !0
					}));
					const n = r();
					return Object(b.h)(n, {
						subredditId: e
					})
				}, N = e => async (t, r) => {
					var n;
					const s = r(),
						i = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						a = Object(p.c)(s, {
							commentIds: i
						}),
						o = null === (n = a.find(e => e && e.subredditId)) || void 0 === n ? void 0 : n.subredditId;
					if (!(await t(j(o)))) return;
					const d = new Set(a.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(C(o, Array.from(d)))
				}, I = (e, t) => async (r, n) => {
					if (!t) return;
					if (!(await r(j(e)))) return;
					const s = new Set;
					Object.values(t).forEach(e => {
						s.add(e.authorId)
					}), await r(C(e, Array.from(s)))
				}, F = (e, t) => async (r, n) => {
					const s = n(),
						i = Object(g.k)(s);
					if (!i) return;
					const a = i.id,
						o = Object(h.i)(s, {
							subredditId: e,
							userId: a
						});
					r(P({
						subredditId: e,
						userId: a,
						achievementFlairType: t,
						supporterFlairType: o
					}))
				}, T = (e, t) => async (r, n) => {
					const s = n(),
						i = Object(g.k)(s);
					if (!i) return;
					const a = i.id,
						o = Object(h.h)(s, {
							subredditId: e,
							userId: a
						});
					r(P({
						subredditId: e,
						userId: a,
						achievementFlairType: o,
						supporterFlairType: t
					}))
				}, P = e => async (t, r, s) => {
					let {
						gqlContext: a
					} = s;
					const o = r(),
						d = Object(g.k)(o);
					if (!d) return;
					const l = d.id;
					t(_(e));
					const {
						subredditId: p,
						achievementFlairType: b,
						supporterFlairType: f
					} = e, x = [b, f].filter(Boolean), w = Object(h.e)(o, {
						subredditId: p,
						userId: l
					});
					try {
						await c(a(), p, x, w), t(E(e))
					} catch (y) {
						t(k(e)), i.c.captureException(y), t(Object(u.f)({
							duration: u.a,
							kind: m.b.Error,
							text: n.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, L = (e, t) => async (r, s, a) => {
					let {
						gqlContext: o
					} = a;
					const d = s(),
						l = Object(g.k)(d);
					if (!l) return;
					const p = l.id,
						b = {
							subredditId: e,
							userId: p
						},
						f = [Object(h.h)(d, b), Object(h.i)(d, b)].filter(Boolean);
					r(O({
						...b,
						isHidden: t
					}));
					try {
						await c(o(), e, f, t)
					} catch (x) {
						r(O({
							...b,
							isHidden: !t
						})), i.c.captureException(x), r(Object(u.f)({
							duration: u.a,
							kind: m.b.Error,
							text: n.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return x
			})), r.d(t, "a", (function() {
				return y
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/structuredStyles/index.ts"),
				a = r("./src/reddit/actions/subreddit/constants.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/constants/blade.ts"),
				c = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = r("./src/reddit/models/Image/index.tsx"),
				u = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/selectors/structuredStyles.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/telemetry/index.ts");
			const h = Object(s.a)(a.w),
				g = Object(s.a)(a.x),
				f = Object(s.a)(a.v),
				x = (e, t, r) => async (n, s, i) => {
					const a = Object(p.z)(s(), {
						subredditName: e
					});
					if (a) return y(a.id, t, r)(n, s, i)
				}, w = () => n.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), y = (e, t, r) => async (s, a, p) => {
					const x = await Object(l.e)(t);
					s(h());
					const y = a();
					try {
						await Object(i.g)("communityIcon", x, e)(s, a, p)
					} catch (_) {
						return Object(b.a)(Object(c.c)(y, "something went wrong with the uploading the image")), s(Object(o.f)({
							kind: u.b.Error,
							text: w()
						})), void s(f())
					}
					const v = Object(m.c)(a(), {
						name: "communityIcon"
					});
					if (!v) return Object(b.a)(Object(c.c)(y, "image is null")), s(Object(o.f)({
						kind: u.b.Error,
						text: w()
					})), void s(f());
					await Object(i.k)(e, {
						communityIcon: v
					}, d.b.idCard, r)(s, a, p), s(Object(o.f)({
						kind: u.b.SuccessCommunity,
						text: n.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), s(g())
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "b", (function() {
				return g
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = r("./src/reddit/actions/notificationsInbox/index.ts"),
				o = r("./src/reddit/actions/subreddit/constants.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/models/Toast/index.ts");
			const m = Object(s.a)(o.u),
				p = Object(s.a)(o.t),
				b = Object(s.a)(o.s),
				h = e => {
					switch (e) {
						case l.c.OFF:
							return n.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return n.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return n.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const g = e => {
				let {
					subredditId: t,
					notificationLevel: r,
					successCallback: s,
					undoCallback: o
				} = e;
				return async (e, g, f) => {
					let {
						gqlContext: x
					} = f;
					var w, y, v;
					e(p());
					const _ = (e => {
							switch (e) {
								case l.c.FREQUENT:
									return {
										isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
									};
								case l.c.LOW:
									return {
										isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
									};
								case l.c.OFF:
								default:
									return {
										isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
									}
							}
						})(r),
						E = await Object(c.b)(x(), t, _);
					if ((null === (y = null === (w = E.error) || void 0 === w ? void 0 : w.fields) || void 0 === y ? void 0 : y.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(E.body) && (null === (v = E.body.data.updateSubredditNotificationSettings.errors) || void 0 === v ? void 0 : v.length)) return e(b()), e(Object(d.f)({
						kind: u.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					E.ok && (e(Object(i.c)({
						subredditId: t,
						notificationLevel: r
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: r
							}
						}
					})), s && s(), e(o ? Object(d.f)(Object(d.e)(h(r), u.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(a.i)(t, o))) : Object(d.f)(Object(d.e)(h(r), u.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/actions/economics/predictions/index.ts"),
				o = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				d = r("./src/reddit/selectors/subreddit.ts");

			function c(e) {
				const t = Object(i.d)(),
					r = Object(i.e)(t => Object(d.U)(t, {
						subredditId: e
					})),
					n = Object(i.e)(t => Object(o.i)(t, {
						subredditId: e
					})),
					c = Object(i.e)(t => Object(o.k)(t, {
						subredditId: e
					})),
					l = s.a.useCallback(() => {
						r.name && t(Object(a.l)(r.name))
					}, [r.name, t]);
				return s.a.useEffect(() => {
					c || n || l()
				}, [c, n, l]), {
					isFetching: c,
					isFetched: n,
					fetch: l
				}
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/reddit/featureFlags/component.tsx");
			const i = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => r.e("EconomicsSubredditPremiumSidebarCards").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(s.a)("spSpecialMemberships", i)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, r) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./src/config.ts"),
				d = r("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = r.n(d),
				l = r("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", c.a),
				m = l.a.wrapped(e => a.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", c.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = a.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								r = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, r), this.setState({
								sentOncePerRender: !0
							})
						}
					}
				}
				render() {
					const {
						href: e,
						img: t
					} = this.props, {
						sentOncePerRender: r
					} = this.state, i = r ? a.a.createElement(m, {
						src: o.a.assetPath + t
					}) : a.a.createElement(s.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, a.a.createElement(m, {
						src: o.a.assetPath + t
					}));
					return a.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": n.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, a.a.createElement("a", {
						href: o.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, i))
				}
			}
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, r) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				mIsWhite: "_3TyrvwTfHlJHEevBoOKkDJ",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				mIsGrey: "_2g4mHpbVF30jxvk8ZPbqBe"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/config.ts"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/components/Footer/index.m.less"),
				c = r.n(d);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = o.a.div("UserAgreement", c.a), m = o.a.a("UserAgreementLink", c.a), p = o.a.a("PrivacyLink", c.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => s.a.createElement("div", {
				className: Object(a.a)(c.a.FooterContainer, {
					[c.a.mIsGrey]: e.textColor === b.Grey,
					[c.a.mIsWhite]: e.textColor === b.White
				})
			}, s.a.createElement(u, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", s.a.createElement(m, {
				href: `${i.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "YviZP"
			}))), l._param("=Privacy Policy.", s.a.createElement(p, {
				href: `${i.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("reddit-components-Governance-CommunityCard").then(r.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("reddit-components-Governance-Leaderboard").then(r.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, r) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/constants/screenWidths.ts"),
				l = r("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = r("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = r("./src/reddit/models/Theme/index.ts"),
				p = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = r("./src/reddit/components/HeaderImage/index.m.less"),
				h = r.n(b);
			const g = d.a.wrapped(u.a, "Planet", h.a),
				f = d.a.div("SubredditIcon", h.a),
				x = d.a.div("PositionedImage", h.a),
				w = d.a.div("HeaderContent", h.a),
				y = d.a.div("HeaderContainer", h.a),
				v = d.a.span("HeaderText", h.a),
				_ = d.a.wrapped(i.a, "HeaderUrl", h.a),
				E = d.a.span("Container", h.a),
				k = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						r = Object(l.a)(e),
						n = Object(p.a)(e).banner.positionedImageAlignment,
						i = Object(p.a)(e).banner.positionedImage,
						o = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (n) {
						case "right":
							d = {
								right: "-8px"
							};
							break;
						case "centered":
							d = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							d = {
								left: "-8px"
							}
					}
					const u = !!i && !!o && "left" === n,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						k = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						O = `${4+k}px`;
					return s.a.createElement(E, {
						style: {
							background: b,
							filter: e.shouldBlurHeaderImage ? "blur(6px)" : "none",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, s.a.createElement(_, {
						className: e.className,
						to: e.url
					}, s.a.createElement(y, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||c.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && s.a.createElement(w, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (r ? s.a.createElement(f, {
						style: {
							backgroundImage: `url(${r})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: O,
							width: O
						}
					}) : s.a.createElement(g, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: O,
							width: O
						}
					})), s.a.createElement(v, {
						style: {
							paddingTop: 32 === k ? "4px" : "14px"
						}
					}, t)), s.a.createElement(x, {
						className: Object(a.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!i,
							[h.a.hoverPositionedImage]: !!i && !!o
						}),
						style: {
							...d,
							height: `${Object(p.a)(e).banner.positionedImageHeight}px`
						}
					}))))
				});
			t.a = k
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("IdCard").then(r.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), c = e => {
				let {
					className: t,
					onClick: r,
					disabled: n
				} = e;
				const c = Object(i.e)(o.w);
				return s.a.createElement(a.t, {
					priority: a.c.Primary,
					className: t,
					onClick: r,
					isFullWidth: !0,
					disabled: n
				}, (() => c ? d._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : d._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
			}
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
			var n, s = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				u = r.n(l);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL", e[e.INFEED_UNIT = 2] = "INFEED_UNIT"
			}(n || (n = {}));
			const m = e => {
				let {
					space: t
				} = e;
				const r = Object(d.e)(c.db),
					a = t === n.MODAL,
					l = t === n.INFEED_UNIT;
				return o.a.createElement("div", {
					className: Object(i.a)(u.a.background, {
						[u.a.isNightmodeOn]: r,
						[u.a.isModal]: a,
						[u.a.isInFeedUnit]: l
					})
				}, o.a.createElement("div", {
					className: u.a.colorBlockCorner
				}), o.a.createElement("div", {
					className: u.a.colorBlockThrough
				}), o.a.createElement("div", {
					className: u.a.circleStriped,
					style: {
						backgroundImage: r ? `url(${s.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${s.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), o.a.createElement("div", {
					className: u.a.circleOrangeHollow
				}), o.a.createElement("div", {
					className: u.a.circleDotted,
					style: {
						backgroundImage: `url(${s.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), o.a.createElement("div", {
					className: u.a.circleGreenHollow
				}), o.a.createElement("div", {
					className: u.a.circleYellowHollow
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				d = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				c = r.n(d);
			const l = Object(s.forwardRef)((function(e, t) {
					let {
						className: r,
						progress: n
					} = e;
					const s = 100 * n;
					return i.a.createElement("div", {
						className: Object(a.a)(c.a.barRow, r),
						ref: t
					}, i.a.createElement("div", {
						className: c.a.track
					}), i.a.createElement("div", {
						className: c.a.progress,
						style: {
							width: `${s}%`
						}
					}, i.a.createElement(o.a, {
						className: Object(a.a)(c.a.icon, {
							[c.a.empty]: 0 === n,
							[c.a.full]: n >= 1
						})
					})))
				})),
				u = e => {
					let {
						className: t,
						progress: r
					} = e;
					const [a, o] = Object(s.useState)(!1), d = a ? r : 0;
					return i.a.createElement(n.a, {
						onChange: e => {
							a || e.intersectionRatio < .75 || o(!0)
						},
						threshold: .75
					}, i.a.createElement(l, {
						className: t,
						progress: d
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
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, r) {
			e.exports = {
				container: "nLQ3kCzR-nlu3TdaikC9s",
				user: "_2RyQRwN8Zuq56O4TBtmkg1",
				name: "_2IGaFqLglCamTtD4mDQRiZ",
				userIconContainer: "k58KWeKTpmEL6oqR3bKIu",
				userIcon: "_1y6mzxZTJEsSjG3_NbXIiS",
				counter: "_2tSuwxjSKGj8dCE3nAMNQ1",
				powerupIcon: "_1zBtXZdl9mR2-othyOeQr6"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				o = r("./src/reddit/components/UserIcon/index.tsx"),
				d = r("./src/reddit/controls/InternalLink/index.tsx"),
				c = r("./src/reddit/helpers/trackers/powerups.ts"),
				l = r("./src/reddit/hooks/useTracking.ts"),
				u = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				m = r.n(u);
			const p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: Object(i.a)(m.a.userIconContainer, e.iconClassName)
			}, s.a.createElement(o.a, {
				userName: e.userName || "",
				iconUrl: e.iconUrl,
				className: m.a.userIcon,
				isNSFW: e.isNsfw
			})), s.a.createElement("h4", {
				className: Object(i.a)(m.a.name, e.textClassName)
			}, e.displayName || e.userName));
			t.b = function(e) {
				var t;
				const r = Object(l.a)(),
					{
						className: n,
						supporter: o
					} = e,
					{
						score: u,
						supporterInfo: b
					} = o,
					h = Object(a.b)({
						displayName: null == b ? void 0 : b.displayName,
						score: u
					}),
					g = !!(null === (t = null == b ? void 0 : b.profile) || void 0 === t ? void 0 : t.isNsfw),
					f = Object(a.c)(b),
					x = Object(a.a)(u),
					w = s.a.createElement(p, {
						userName: h,
						isNsfw: g,
						iconUrl: f
					});
				return s.a.createElement("div", {
					className: Object(i.a)(n, m.a.container)
				}, b ? s.a.createElement(d.default, {
					className: m.a.user,
					to: `/user/${h}/`,
					onClick: () => {
						b && r(Object(c.K)(b.id, b.displayName))
					}
				}, w) : s.a.createElement("div", {
					className: m.a.user
				}, w), s.a.createElement("div", {
					className: m.a.counter
				}, s.a.createElement(x, {
					className: m.a.powerupIcon
				}), u))
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, r) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S",
				container: "_2B49Ad8MgHu8TYDSLNtfM3",
				expandButton: "_3xPQmoZqoeq-xOuehYr_2f"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-motion/lib/react-motion.js"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				c = r.n(d),
				l = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx");
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js"), m = 100, p = 302, b = 40;

			function h(e) {
				return `${e.lastSupportedAt}__${e.score}`
			}
			const g = e => ({
				key: h(e),
				data: {
					supporter: e
				}
			});

			function f(e, t) {
				const r = t || m;
				return e.slice(0, r).map(g)
			}
			const x = () => ({
					width: p,
					height: Object(a.spring)(0)
				}),
				w = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class y extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: f(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: r
					} = this.props, s = this.state.items.length < t.length;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(n.a)(c.a.container, e)
					}, i.a.createElement(a.TransitionMotion, {
						willLeave: x,
						willEnter: w,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(a.spring)(p),
								height: Object(a.spring)(b),
								motionProgress: Object(a.spring)(1)
							}
						}))
					}, e => i.a.createElement(i.a.Fragment, null, e.map(e => i.a.createElement("div", {
						className: c.a.item,
						key: e.key
					}, i.a.createElement("div", {
						className: c.a.itemCropper,
						style: {
							...e.style
						}
					}, i.a.createElement(l.b, {
						supporter: e.data.supporter
					}))))))), s && i.a.createElement(o.t, {
						priority: o.c.Secondary,
						className: c.a.expandButton,
						onClick: r,
						isFullWidth: !0
					}, u._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: f(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = i.a.memo(y)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				a = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				o = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const d = 2,
				c = 3;

			function l(e) {
				return e >= c ? o.a : e >= d ? a.a : i.a
			}

			function u(e) {
				var t;
				const r = !e,
					s = `${n.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return r ? s : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = e => {
				let {
					displayName: t,
					score: r
				} = e;
				return t || s.fbt._({
					"*": "Anonymous Heroes",
					_1: "Anonymous Hero"
				}, [s.fbt._plural(r)], {
					hk: "8kyEI"
				}).toString()
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.m.less": function(e, t, r) {
			e.exports = {
				container: "YgQMt0wJgGwSzvy9w0JK8",
				titleGroup: "_2Fz8jK5e-6cq1YKgYEj-n0",
				oldTitleGroup: "bp_YzVmUt92uGSsPIf4j3",
				group: "_33p4q-VA_ubIAGTrkYy18Z",
				oldGroup: "_3y6WM5j8-wIqZ0RrXxy7j_",
				title: "_11_vLMByyp2z23bapR4owd",
				powerupsIcon: "_1FxdCwvprzQqdbsn7m_kVA",
				powerupsIconImage: "_12haD-enU6DNikY4x-ASUt",
				perksButton: "l_DpA1PxJZF1VgtfMYTmH",
				Icon: "_1RbtxFt4ax1dr88gEaw4ei",
				icon: "_1RbtxFt4ax1dr88gEaw4ei",
				isLeft: "_306IYOFAyc7DNe0yxnopfx",
				isRight: "_3IBC8iz6vb1bAK-tnNHYqz",
				active: "_3nzY1PxewxdnUvnDIkdLGq",
				redditStyle: "_1uz5vLZgNj3zHMeVyKFNN3",
				subTitle: "Bks9fiWNtmEGkO-O02zvZ",
				progress: "_3kNzltm7kFAgzESGFqpNKJ",
				heroes: "_36CBrbv63kmBRBZvTC9Ty9",
				becomeFirstHero: "aJNQr1T_lEkfCdXvnmNcQ",
				becomeFirstHeroLabel: "_3c0aoF8IoxBMG3vuqMWoox",
				button: "_3H6aN2LsU-HPJq_wZmyeHm",
				premiumDescription: "_3ZUMj-Yl_XJgexvK3K0N",
				premiumIconWrapper: "_2Jfqs4IPBuRljRHV2X8nwq",
				premiumIcon: "_3Rp23Miges4ZwfnHm13T9Z"
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				d = r("./src/reddit/actions/gold/powerups.ts"),
				c = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				l = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				u = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx"),
				m = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = r("./src/reddit/helpers/trackers/powerups.ts"),
				h = r("./src/reddit/hooks/useTracking.ts"),
				g = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/subreddit.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				w = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				y = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				v = r.n(y);
			const {
				fbt: _
			} = r("./node_modules/fbt/lib/FbtPublic.js"), E = e => {
				const {
					className: t,
					powerups: r
				} = e, {
					tier: n,
					count: s,
					tiersInfo: a
				} = r, o = (a[n] || a[n - 1]).powerupsCost;
				if (!o) return null;
				const d = Math.min(o, s) / o;
				return i.a.createElement("div", {
					className: t
				}, i.a.createElement("div", {
					className: v.a.titleRow
				}, i.a.createElement("span", null, _._("Powerups", null, {
					hk: "DrcXp"
				})), i.a.createElement("span", null, s < o ? `${s}/${o}` : s)), i.a.createElement(w.b, {
					progress: d
				}))
			};
			var k = r("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				O = r("./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts"),
				C = r("./src/reddit/components/PowerupsSidebar/index.m.less"),
				S = r.n(C);
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					className: t,
					subredditId: r
				} = e;
				const w = Object(a.d)(),
					y = Object(h.a)(),
					v = Object(a.e)(x.k),
					_ = Object(a.e)(e => Object(g.k)(e, {
						subredditId: r
					})),
					C = Object(a.e)(e => Object(f.U)(e, {
						subredditId: r
					})),
					N = Object(a.e)(e => Object(g.n)(e, {
						subredditId: r
					})),
					I = Object(a.e)(e => !!Object(g.l)(e, {
						subredditId: r
					})),
					F = Object(a.e)(O.a) && Object(O.b)(r);
				Object(s.useEffect)(() => {
					_ && w(Object(o.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo)(r))
				}, [_, r, w]);
				if (!_ || 1 === _.tiersInfo.length || !C || F) return null;
				return i.a.createElement(m.a, null, i.a.createElement(p.a, {
					className: t,
					title: j._("Powerups", null, {
						hk: "DrcXp"
					})
				}, i.a.createElement("div", {
					className: S.a.container
				}, i.a.createElement("div", {
					className: S.a.titleGroup
				}, i.a.createElement("div", {
					className: S.a.powerupsIcon
				}, i.a.createElement("img", {
					className: S.a.powerupsIconImage,
					src: `${n.a.assetPath}/img/powerups/powerups-rangers.png`
				})), i.a.createElement("h2", {
					className: S.a.title
				}, (() => I ? j._("Powerups are unlocked in {communityName}", [j._param("communityName", C.displayText)], {
					hk: "3xCZkG"
				}) : j._("Powerup to unlock perks for {communityName}", [j._param("communityName", C.displayText)], {
					hk: "2OPLXh"
				}))()), i.a.createElement(c.a, {
					className: S.a.button,
					onClick: () => {
						y(Object(b.z)()), w(Object(d.g)("powerups_sidebar"))
					}
				}), i.a.createElement(l.a, {
					space: l.b.SIDEBAR
				})), i.a.createElement("div", {
					className: S.a.group
				}, i.a.createElement("h3", {
					className: S.a.subTitle
				}, j._("Community Heroes", null, {
					hk: "2ssat0"
				})), i.a.createElement(E, {
					className: S.a.progress,
					powerups: _
				}), !!(null == N ? void 0 : N.length) && i.a.createElement(k.a, {
					supporters: N,
					className: S.a.heroes,
					maxSupporters: 8,
					onShowFullSupportersList: () => {
						y(Object(b.B)()), w(Object(d.i)(r))
					}
				}), !(null == N ? void 0 : N.length) && i.a.createElement("div", {
					className: S.a.becomeFirstHero
				}, i.a.createElement(u.a, {
					displayName: j._("Become the first hero!", null, {
						hk: "4ta0Hi"
					}).toString(),
					userName: null == v ? void 0 : v.displayName,
					isNsfw: !!(null == v ? void 0 : v.isNSFW),
					iconUrl: null == v ? void 0 : v.accountIcon,
					textClassName: S.a.becomeFirstHeroLabel
				}))))))
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, r) {
			e.exports = {
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/lodash/random.js"),
				i = r.n(s),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/config.ts"),
				u = r("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/helpers/adCount/index.ts"),
				g = r("./src/reddit/helpers/trackers/ads.ts"),
				f = r("./src/reddit/models/Media/index.ts"),
				x = r("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				w = r.n(x),
				y = r("./src/lib/lessComponent.tsx");
			const v = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), r.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), r.e("reddit-components-SidebarNativeAd")]).then(r.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				_ = Object(c.c)({
					post: (e, t) => {
						const {
							placement: r,
							placementIndex: n
						} = t, s = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(r, s, n)]
					}
				}),
				E = Object(d.b)(_),
				k = y.a.wrapped(b.a, "ThemedWidget", w.a),
				O = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(f.F)(e.media) && e.media.content)),
				C = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				S = Object(p.c)(class extends o.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: r
						} = this.props;
						return t !== e.className || r !== e.redditStyle
					}
					trackViewability(e, t, r) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(g.b)(e, t, r))
					}
					render() {
						const e = i()(0, C.length - 1),
							{
								img: t,
								href: r
							} = C[e],
							{
								className: n,
								placement: s,
								redditStyle: a
							} = this.props;
						return o.a.createElement(k, {
							className: n,
							contentOnly: !0,
							redditStyle: a
						}, o.a.createElement(u.a, {
							img: t,
							href: r,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, s)
						}))
					}
				});

			function j(e) {
				let {
					className: t,
					post: r,
					placementIndex: n,
					refreshKey: s,
					listingName: i,
					placement: a,
					redditStyle: d,
					awaitingBrandSafetyCheck: c,
					forceHouseAd: l,
					removeSidebarSpacer: u
				} = e;
				const p = u ? o.a.Fragment : m.a;
				if (!c && O(r)) {
					let e = null;
					return l ? e = o.a.createElement(S, {
						className: t,
						redditStyle: d,
						placement: a
					}) : r && (e = o.a.createElement(v, {
						post: r,
						postId: r.id,
						refreshKey: s,
						listingName: i,
						placement: a,
						placementIndex: n
					})), o.a.createElement(p, null, e)
				}
				return null
			}
			t.a = E(j)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, r) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/constants/location.ts"),
				p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				b = r("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				h = r("./src/reddit/helpers/trackers/navigation.ts"),
				g = r("./src/reddit/selectors/experiments/countrySites.ts"),
				f = r("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = r("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				w = r("./src/reddit/selectors/meta.ts"),
				y = r("./src/reddit/components/SidebarFooter/index.m.less"),
				v = r.n(y);
			const {
				fbt: _
			} = r("./node_modules/fbt/lib/FbtPublic.js"), E = d.a.a("Link", v.a), k = Object(a.c)({
				countryCode: w.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: g.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: x.a
			}), O = Object(i.b)(k), C = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), S = e => {
				let {
					countryCode: t,
					reredditContent: r
				} = e;
				return s.a.createElement("div", {
					className: v.a.GreyRereddit
				}, r, s.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, _._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(E, {
					href: "https://www.reddit.com/coins"
				}, _._("Reddit coins", null, {
					hk: "32iMaN"
				})), s.a.createElement(E, {
					href: "https://www.reddit.com/premium"
				}, _._("Reddit premium", null, {
					hk: "RuO3A"
				})), !!m.c[t] && s.a.createElement(s.a.Fragment, null, s.a.createElement(E, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, _._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, _._("Transparency report", null, {
					hk: "3CgBdG"
				})), s.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, _._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement(E, {
					href: "https://www.redditinc.com/"
				}, _._("about", null, {
					hk: "1sqJKs"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/careers"
				}, _._("careers", null, {
					hk: "26ABvc"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/press"
				}, _._("press", null, {
					hk: "2Qmgdz"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/advertising"
				}, _._("advertise", null, {
					hk: "Mt40U"
				})), s.a.createElement(E, {
					href: "http://www.redditblog.com/"
				}, _._("blog", null, {
					hk: "46IQJw"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, _._("Terms", null, {
					hk: "4qRzfE"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, _._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, _._("Privacy policy", null, {
					hk: "10K04G"
				})), s.a.createElement(E, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, _._("Mod policy", null, {
					hk: "2gYc2T"
				})), s.a.createElement("div", {
					className: v.a.Copyright
				}, _._("Reddit Inc © {year}. All rights reserved", [_._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = C(O(Object(c.c)(e => {
				const t = Object(i.f)().getState(),
					r = Object(g.a)(t, Object(o.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? s.a.createElement(l.a, {
					className: v.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: v.a.LinkContainer
				}, s.a.createElement("div", {
					className: v.a.Column
				}, s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, _._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, _._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: v.a.Column
				}, s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, _._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, _._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), s.a.createElement("div", {
					className: v.a.Copyright
				}, _._("© {year} Reddit, Inc. All rights reserved.", [_._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano",
						pt: "Português"
					};
					return r.includes(t) || "en" === t ? s.a.createElement(E, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, n[t]) : null
				};
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Ac.GreyRereddit ? e.reredditButtons : [];
					return s.a.createElement(S, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				return s.a.createElement(l.a, {
					className: v.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: v.a.LinkContainer
				}, s.a.createElement("div", {
					className: v.a.Column
				}, s.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, _._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(E, {
					href: "https://www.reddit.com/coins"
				}, _._("Reddit coins", null, {
					hk: "32iMaN"
				})), s.a.createElement(E, {
					href: "https://www.reddit.com/premium"
				}, _._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && s.a.createElement(s.a.Fragment, null, s.a.createElement(E, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, _._("Communities", null, {
					hk: "3CJu37"
				})), s.a.createElement(E, {
					href: `https://www.reddit.com${Object(b.a)()}`
				}, _._("Rereddit", null, {
					hk: "1z3k7C"
				})), s.a.createElement(E, {
					href: "https://www.reddit.com/topics/a-1/"
				}, _._("Topics", null, {
					hk: "349RFt"
				}))), !!m.c[e.countryCode] && s.a.createElement(s.a.Fragment, null, s.a.createElement(E, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, _._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, _._("Transparency report", null, {
					hk: "3CgBdG"
				})), s.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, _._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), s.a.createElement("div", {
					className: v.a.Column
				}, s.a.createElement(E, {
					href: "https://www.redditinc.com/"
				}, _._("about", null, {
					hk: "1sqJKs"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/careers"
				}, _._("careers", null, {
					hk: "26ABvc"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/press"
				}, _._("press", null, {
					hk: "2Qmgdz"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/advertising"
				}, _._("advertise", null, {
					hk: "Mt40U"
				})), s.a.createElement(E, {
					href: "http://www.redditblog.com/"
				}, _._("blog", null, {
					hk: "46IQJw"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, _._("Terms", null, {
					hk: "4qRzfE"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, _._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, _._("Privacy policy", null, {
					hk: "10K04G"
				})), s.a.createElement(E, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, _._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: v.a.CountryLinkContainer
				}, s.a.createElement("div", {
					className: v.a.Column
				}, n("en"), n("fr"), n("it")), s.a.createElement("div", {
					className: v.a.Column
				}, n("de"), n("es"), n("pt"))), s.a.createElement("div", {
					className: v.a.Copyright
				}, _._("Reddit Inc © {year}. All rights reserved", [_._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, r) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = r.n(n),
				i = r("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", s.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/lodash/throttle.js"),
				i = r.n(s),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/reddit/constants/elementIds.ts"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/components/BackToTop/index.m.less"),
				m = r.n(u);
			const {
				fbt: p
			} = r("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(c.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var h = e => {
					let {
						className: t,
						isOverlay: r,
						style: s
					} = e;
					return o.a.createElement("div", {
						className: Object(n.a)(t, m.a.container),
						style: s
					}, o.a.createElement(l.l, {
						className: m.a.button,
						onClick: () => b(r)
					}, p._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				g = r("./src/reddit/components/SidebarFooter/index.tsx"),
				f = r("./src/reddit/constants/componentSizes.ts"),
				x = r("./src/reddit/contexts/PageLayer/index.tsx"),
				w = r("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				y = r.n(w),
				v = r("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = d.e[1] + 24,
				k = f.f + 8,
				O = k + 152 + 16,
				C = O + E + 8,
				S = v.a.div("Container", y.a),
				j = v.a.wrapped(e => {
					let {
						className: t,
						isOverlay: r,
						...n
					} = e;
					return o.a.createElement(h, _({
						className: t,
						isOverlay: r,
						style: {
							top: `calc(100vh - ${r?k:8}px)`
						}
					}, n))
				}, "BackToTop", y.a),
				N = e => {
					let {
						children: t,
						className: r,
						isFakeOverlay: s,
						isSticky: i,
						shouldStickToBottom: a
					} = e;
					return o.a.createElement("div", {
						className: Object(n.a)(r, {
							[y.a.BottomStickyStyles]: a,
							[y.a.StickyStyles]: !a && i && !s,
							[y.a.StickyStylesFakeOverlay]: !a && !!s
						})
					}, t)
				};
			class I extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > C,
						shouldFooterSticky: this.windowHeight > O
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = i()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: r,
							children: n,
							className: s,
							hideFooter: i,
							pageLayer: a,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, l = this.state.isAdSticky && !(!t && !n), u = this.state.isBottomSticky;
					return o.a.createElement(S, {
						className: s,
						innerRef: this.setWrapperRef
					}, o.a.createElement(N, {
						isFakeOverlay: r,
						isSticky: l,
						shouldStickToBottom: u
					}, t, n, d, !i && o.a.createElement(g.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && o.a.createElement(j, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const F = Object(x.u)();
			t.a = F(I)
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, r) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys",
				predictionsFilter: "jU3ijmuG8CyRDQhPOHdw4",
				liveIcon: "_39JxJrjNw5NY_Q0ARn8NRe"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/contexts/PageLayer/index.tsx"),
				c = r("./src/reddit/featureFlags/component.tsx"),
				l = r("./src/reddit/selectors/widgets.ts"),
				u = r("./src/lib/linkMatchers/index.ts"),
				m = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/controls/OutboundLink/index.tsx"),
				h = r("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				g = r("./src/telemetry/models/Outbound.ts"),
				f = r("./src/reddit/components/SubredditNav/index.m.less"),
				x = r.n(f);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = (e, t, r) => Object(p.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: r
				}),
				v = e => {
					let {
						children: t,
						isActive: r,
						isTopBannerVariant: n,
						...i
					} = e;
					return s.a.createElement("div", w({
						className: y(x.a.subNavTitle, r, n)
					}, i), s.a.createElement("span", null, t), s.a.createElement(h.b, {
						className: x.a.navDropdownIcon
					}))
				},
				_ = e => {
					let {
						className: t,
						href: r,
						isActive: n,
						to: i,
						isTopBannerVariant: a,
						...o
					} = e;
					const d = y(x.a.navLink, n, a);
					return i ? s.a.createElement(m.a, w({
						className: d,
						to: i
					}, o)) : r ? s.a.createElement(b.b, w({
						className: d,
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: r
					}, o)) : s.a.createElement("a", w({
						className: d
					}, o))
				},
				E = e => {
					let {
						className: t,
						isActive: r,
						...n
					} = e;
					return s.a.createElement(m.a, w({
						className: Object(p.a)(y(x.a.navLink, r), t)
					}, n))
				},
				k = e => {
					let {
						className: t,
						href: r,
						isActive: n,
						...i
					} = e;
					return r ? s.a.createElement(b.b, w({
						className: y(x.a.subNavLink, n),
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: r
					}, i)) : s.a.createElement("a", w({
						className: y(x.a.subNavLink, n)
					}, i))
				},
				O = e => {
					let {
						className: t,
						...r
					} = e;
					return s.a.createElement("div", w({
						className: Object(p.a)(x.a.subNavContainer, t)
					}, r))
				},
				C = e => {
					let {
						className: t,
						isOpen: r,
						...n
					} = e;
					return s.a.createElement("div", w({
						className: Object(p.a)(x.a.subNavList, t, {
							[x.a.mIsOpen]: r
						})
					}, n))
				};
			class S extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement(O, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, s.a.createElement(v, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), s.a.createElement(C, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var j = S;
			const N = e => {
				const t = e.url && Object(u.h)(u.f, e.url);
				return t ? t.url : e.url
			};
			var I = e => e.menuItem.url ? s.a.createElement(_, {
					href: N(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : s.a.createElement(j, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => s.a.createElement(k, {
					key: `${e.text}-${N(e)}`,
					role: "listitem",
					href: N(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				F = r("./src/reddit/selectors/subreddit.ts"),
				T = r("./src/reddit/actions/subreddit.ts"),
				P = r("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: L
			} = r("./node_modules/fbt/lib/FbtPublic.js"), B = Object(a.c)({
				isActive: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Boolean(e.subreddits.appliedFilters.meta[r])
				},
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(F.U)(e, {
						subredditId: r
					})
				}
			});
			var R = Object(i.b)(B, (e, t) => ({
					onActivate: () => e(Object(T.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))(e => {
					let {
						subreddit: t,
						isActive: r,
						onActivate: n
					} = e;
					const i = Object(P.a)();
					return t ? s.a.createElement(E, {
						className: x.a.metaNavLink,
						to: t.url,
						isActive: r,
						onClick: e => {
							Object(d.H)(i) && !Object(d.P)(i) && e.preventDefault(), n()
						}
					}, L._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				M = r("./src/reddit/actions/economics/predictions/index.ts"),
				A = r("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				D = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				W = r("./src/reddit/helpers/trackers/predictions.ts"),
				H = r("./src/reddit/hooks/useTracking.ts"),
				U = r("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), G = e => {
				let {
					subredditId: t
				} = e;
				const r = Object(i.d)(),
					a = Object(P.a)(),
					o = Object(H.a)(),
					d = Object(D.Q)(a),
					[c, l] = Object(n.useState)(!1),
					u = Object(i.e)(e => Object(F.U)(e, {
						subredditId: t
					})),
					m = Object(i.e)(e => Object(F.O)(e, {
						subredditId: t
					})),
					p = Object(i.e)(e => Object(U.d)(e, {
						subredditId: t
					})),
					b = Object(i.e)(e => Object(U.e)(e, {
						subredditId: t
					}));
				Object(A.a)(t);
				return Object(n.useEffect)(() => {
					!m || c || p || d || (r(Object(M.m)(u.name)), l(!0))
				}, [m, c, p, d, r, u.name]), m && p ? s.a.createElement(E, {
					className: x.a.predictionsFilter,
					isActive: d,
					onClick: () => {
						r(Object(T.p)({
							subredditId: t,
							forceState: !1
						})), o(Object(W.i)())
					},
					to: `${u.url}predictions/`
				}, z._("Predictions", null, {
					hk: "Cv5GC"
				}), b && s.a.createElement("span", {
					className: x.a.liveIcon
				}, z._("Live", null, {
					hk: "1o89m4"
				}))) : null
			};
			var V = r("./src/lib/constants/index.ts");
			const {
				fbt: q
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const K = Object(d.u)(),
				J = [V.Nb.SUBREDDIT, V.Nb.COMMENTS, V.Nb.COLLECTION_COMMENTS],
				Z = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && J.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.P)(t.pageLayer)
				});
			var Y = K(Object(i.b)(Z, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(T.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: r,
						isPostsRoute: n,
						isPredictionsPage: i,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: o
					} = e, d = n && !r && !i;
					return s.a.createElement(_, {
						to: t,
						isActive: d,
						isTopBannerVariant: a,
						onClick: e => {
							r && (e.preventDefault(), o())
						}
					}, q._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				X = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Q = r("./src/higherOrderComponents/makeAsync.tsx");
			var $ = Object(Q.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("HarbergerTaxBannerPurchaseCTA").then(r.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				ee = r("./src/reddit/constants/postLayout.ts"),
				te = r("./src/reddit/constants/screenWidths.ts"),
				re = r("./src/reddit/models/Theme/index.ts"),
				ne = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const se = Object(X.a)(e => {
				let {
					className: t,
					children: r,
					isTopBannerVariant: n,
					...i
				} = e;
				const a = Object(ne.a)(i);
				return s.a.createElement("div", {
					className: Object(p.a)(x.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !n ? "relative" : "static",
						...a.navBar.useOverlay && !n ? {
							marginTop: -26
						} : {},
						background: n ? "inherit" : Object(re.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, r)
			});
			var ie = e => s.a.createElement(se, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, s.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === ee.g.Large ? `${e.maxWidth||te.a}px` : "100%"
					}
				}, s.a.createElement("div", null, e.children), s.a.createElement($, null))),
				ae = r("./src/reddit/constants/wiki.ts"),
				oe = r("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: de
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ce = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: r,
					pageLayer: n
				} = e, i = !!n && !!n.meta && n.meta.name === V.Nb.SUBREDDIT_WIKI, a = `wiki/${ae.i}`, o = t.endsWith("/") ? t + a : `${t}/${a}`;
				return s.a.createElement(_, {
					isActive: i,
					isTopBannerVariant: r,
					to: o,
					onClick: () => e.sendEvent(Object(oe.g)())
				}, de._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const le = Object(c.a)("spPolls", R),
				ue = Object(d.u)(),
				me = Object(a.c)({
					layout: d.S,
					widget: l.f
				}),
				pe = Object(i.b)(me);
			t.a = ue(pe(Object(o.c)(e => s.a.createElement(ie, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && s.a.createElement(s.a.Fragment, null, s.a.createElement(Y, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), s.a.createElement(le, {
				subredditId: e.subredditId
			}), s.a.createElement(G, {
				subredditId: e.subredditId
			})), e.widget && s.a.createElement(s.a.Fragment, null, e.widget.showWiki && s.a.createElement(ce, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, r) => s.a.createElement(I, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: r,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/SEOTitle/index.tsx"),
				o = r("./src/reddit/components/Widgets/Base/index.m.less"),
				d = r.n(o);
			const c = i.a.div("WidgetBackground", d.a),
				l = i.a.wrapped(e => {
					let {
						children: t,
						...r
					} = e;
					return s.a.createElement("div", r, s.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return C
			})), r.d(t, "a", (function() {
				return j
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/components/Flair/index.tsx"),
				u = r("./src/reddit/components/SubscribeButton/index.tsx"),
				m = r("./src/reddit/actions/subscription/index.ts");
			var p = Object(a.b)(null, (e, t) => {
					const r = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, r)),
						onSubscriptionsRequested: () => e(m.f()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, r))
					}
				})(r("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/constants/componentSizes.ts"),
				g = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = r("./src/reddit/icons/fonts/index.tsx"),
				w = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				y = r("./src/reddit/models/Flair/index.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = r("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				k = r.n(E);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => i.a.createElement(b.a, {
					className: Object(c.a)(k.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: k.a.container
				}, e.isLoading ? i.a.createElement(f.a, {
					className: k.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: k.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(j, O({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(g.t, {
					className: k.a.bottomButton,
					kind: g.b.Button,
					priority: g.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				S = Object(d.c)({
					hideNSFWPref: v.F,
					nightmode: v.db
				}),
				j = Object(a.b)(S)(e => i.a.createElement("div", {
					className: Object(c.a)(k.a.communityItemContainer, {
						[k.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(w.a, {
					className: k.a.communityItemExpandCenter,
					widthRight: h.s
				}, i.a.createElement("div", {
					className: k.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: k.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(x.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(k.a.defaultCommunityIcon, {
						[k.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: k.a.communityDescriptionContainer
				}, i.a.createElement(o.a, {
					className: k.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(_.b)(e.name, e.type),
					to: Object(_.a)(e.name, e.type)
				}, Object(_.b)(e.name, e.type)), i.a.createElement("div", {
					className: k.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: k.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(l.b, {
					className: k.a.nsfwFlair,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(f.a, {
					className: Object(c.a)(k.a.communityCta, k.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(g.t, {
					className: k.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? i.a.createElement(p, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : i.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && i.a.createElement("p", {
					title: e.description,
					className: k.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/posts.ts"),
				s = r("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(s.d)(e) : Object(s.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, r) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, r) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, r) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, r) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				HelpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				helpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				UnModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				unModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				ExternalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				externalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				MessageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				messageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				MessageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF",
				messageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/fastdom/index.ts"),
				l = r("./src/lib/lessComponent.tsx"),
				u = r("./src/reddit/components/Flair/index.tsx"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = r("./src/reddit/constants/parameters.ts"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				g = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				x = r("./src/reddit/helpers/flair.ts"),
				w = r("./src/reddit/helpers/trackers/postFlair.ts"),
				y = r("./src/reddit/models/Widgets/index.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = r.n(_);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = 129,
				C = Object(h.u)({
					filterName: e => Object(h.X)(e)[b.f],
					url: e => Object(h.eb)(e)
				}),
				S = Object(o.c)({
					subredditId: (e, t) => Object(v.F)(e, t.subredditName)
				}),
				j = Object(a.b)(S),
				N = l.a.div("WidgetContent", E.a),
				I = e => {
					let {
						display: t,
						isFlairFilter: r,
						onMouseDown: n,
						onClick: s,
						...a
					} = e;
					return i.a.createElement("li", {
						className: Object(d.a)(E.a.StyledFlair, t === y.g.Cloud && E.a.cloudDisplay, {
							[E.a.flairFilter]: r,
							[E.a["m-selected"]]: a.isSelected
						}),
						onClick: () => null == s ? void 0 : s(Object(x.g)(a.flair)),
						onMouseDown: n
					}, i.a.createElement(u.b, k({}, a, {
						className: E.a.Flair,
						isFlairFilter: r,
						forceSmallEmojis: !0
					})))
				};
			class F extends i.a.Component {
				constructor(e) {
					super(e), this.flairListRef = i.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(w.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(w.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(w.d)())
					}, this.onClickFlair = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(f.d)(f.a.SearchResults), this.props.sendEvent(Object(w.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > O && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return i.a.createElement(g.r, {
						className: E.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: r
					} = this.props;
					return i.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => i.a.createElement(I, {
						key: e.templateId,
						display: r.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onClick: this.onClickFlair,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, r = t ? O : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return i.a.createElement("div", {
						className: E.a.flairFilterContainer,
						style: {
							maxHeight: r
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: r
					} = this.props;
					return i.a.createElement("ul", null, i.a.createElement(I, {
						key: e.templateId,
						display: r.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: r
					} = this.state, n = t.order, s = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(s) || void 0, o = t.order.length > n.length || r && !a;
					return i.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(N, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(s), o && this.renderButton()))
				}
			}
			t.a = C(j(Object(m.c)(F)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				cleanStyle: "_12zeaxHNQC7XniG1qunPev",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = r("./src/reddit/components/RichTextJson/index.tsx"),
				u = r("./src/reddit/helpers/dom/index.ts"),
				m = r("./src/reddit/icons/fonts/index.tsx"),
				p = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = r("./src/reddit/models/Widgets/index.ts"),
				h = r("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				g = r.n(h);
			const f = d.a.div("RuleShortName", g.a),
				x = d.a.div("RuleIndex", g.a),
				w = d.a.div("RuleTitle", g.a),
				y = d.a.div("RuleDescription", g.a),
				v = d.a.wrapped(c.a, "RawHTMLDisplay", g.a),
				_ = {};
			class E extends i.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(u.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === b.h.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: r,
						shouldShowFullDisplay: n
					} = this, s = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !n(e) && !!s;
					return i.a.createElement(f, {
						className: Object(o.a)({
							[g.a.pointerCursor]: a,
							[g.a.cleanStyle]: e.cleanStyle
						}),
						onClick: n(e) || !s ? void 0 : r
					}, i.a.createElement(p.a, null, i.a.createElement(x, {
						className: Object(o.a)({
							[g.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), i.a.createElement(w, null, `${e.rule.shortName}`), i.a.createElement("div", null, !n(e) && s && i.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && i.a.createElement(y, {
						className: Object(o.a)({
							[g.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? i.a.createElement(l.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: _
					}) : e.rule.descriptionHtml ? i.a.createElement(v, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const k = e => e.rules.length > 0 ? i.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, r) {
				return i.a.createElement(E, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: r + 1
				})
			}))) : null;
			t.b = e => i.a.createElement(k, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, r) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/reddit/components/SEOTitle/index.tsx"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/helpers/trackers/widgets.ts"),
				b = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = r("./src/reddit/selectors/experiments/topPosts.ts"),
				g = r("./src/reddit/selectors/structuredStyles.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/models/Theme/index.ts"),
				w = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(w.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				v = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(w.a)(e).widgetColors.sidebarWidgetHeaderColor,
				_ = e => {
					const t = y(e);
					return Object(x.f)(t)
				},
				E = e => {
					const t = v(e);
					return Object(x.f)(t)
				};
			var k = r("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = r.n(k);
			const {
				fbt: C
			} = r("./node_modules/fbt/lib/FbtPublic.js"), S = Object(u.u)(), j = Object(i.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const r = Object(u.n)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: r
						}),
						s = Object(f.db)(e);
					return n || s
				},
				nigtmode: f.db,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class N extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = _(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: r,
						forceRedditStyle: n,
						headerButton: i,
						id: a,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = r ? O.a.widgetContentOnly : O.a.widgetContent, g = !n && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, x = g ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(o.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: n,
							[O.a.clickable]: !!d,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: d,
						style: f
					}, u && s.a.createElement("div", {
						className: Object(o.a)(O.a.widgetHeader, {
							[O.a.clickable]: !!l
						}),
						id: a,
						style: x,
						onClick: l
					}, s.a.createElement("div", {
						className: Object(o.a)(O.a.widgetTitle, p)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), i), s.a.createElement("div", {
						className: Object(o.a)(h, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.r, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, C._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(j(Object(d.a)(Object(l.c)(N))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return Me
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/controls/OutboundLink/index.tsx"),
				u = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = r("./src/lib/lessComponent.tsx"),
				p = r("./src/lib/linkMatchers/index.ts"),
				b = r("./src/reddit/helpers/widgets/index.tsx"),
				h = r("./src/reddit/models/Image/index.tsx"),
				g = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = r("./src/reddit/models/Widgets/index.ts"),
				x = r("./src/reddit/selectors/structuredStyles.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				y = r("./src/telemetry/models/Outbound.ts"),
				v = r("./src/reddit/components/Widgets/Button/index.m.less"),
				_ = r.n(v);
			const E = (e, t, r) => {
					let n = {},
						s = {};
					n = e.kind === f.k.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, r) => {
						let {
							color: n,
							fillColor: s,
							textColor: i
						} = e;
						return t && (n = i = r, s = "transparent"), {
							"--widget-button-background-color": `${s||"transparent"}`,
							"--widget-button-border": `1px solid ${n}`,
							"--widget-button-color": `${i||n}`
						}
					})(e, t, r);
					const i = e.hoverState || e;
					if (i.kind === f.k.Image) s = {
						"--widget-button-hover-background-image": `url('${i.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: a
						} = i;
						t && (e = a = r, n = "transparent"), s = {
							"--widget-button-hover-background-color": `${n||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${a||e}`
						}
					}
					return {
						...n,
						...s
					}
				},
				k = e => e.kind === f.k.Image ? _.a.imageButton : _.a.textButton,
				O = e => {
					const t = Object(b.h)(e),
						r = Object(p.h)(p.f, t);
					return r ? r.url : e.url
				},
				C = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: r
					} = e, n = Object(g.a)(e).button;
					return s.a.createElement(c.t, {
						className: k(t),
						style: E(t, r, n),
						isFullWidth: !0,
						size: c.d.S,
						priority: c.c.Secondary
					}, t.kind === f.k.Text && s.a.createElement("span", {
						className: t.hoverState ? _.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === f.k.Text && s.a.createElement("span", {
						className: _.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				S = e => s.a.createElement(l.b, {
					href: O(e.button),
					sourceElement: y.SourceElement.SidebarWidget
				}, s.a.createElement(C, e)),
				j = m.a.wrapped(o.a, "RawHTMLDisplay", _.a);
			var N = Object(i.b)(() => Object(a.c)({
					forceRedditStyle: x.l,
					isNightmodeOn: w.db
				}))(e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && s.a.createElement(j, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== f.k.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== f.k.Image || e.hoverState.url !== h.c)).map(t => s.a.createElement(S, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				I = r("./node_modules/fbt/lib/FbtPublic.js"),
				F = r("./src/reddit/components/HumanDate/index.tsx"),
				T = r("./src/reddit/controls/TextButton/index.tsx"),
				P = r("./src/reddit/components/Widgets/Calendar/index.m.less"),
				L = r.n(P);
			const B = 100,
				R = {
					isExpanded: !1
				},
				M = m.a.wrapped(o.a, "RawHTMLDisplay", L.a),
				A = m.a.div("EventContainer", L.a),
				D = m.a.div("EventTitle", L.a),
				W = m.a.div("EventDate", L.a),
				H = m.a.div("EventLocation", L.a),
				U = m.a.div("EventDescription", L.a),
				z = m.a.wrapped(T.a, "ToggleDescription", L.a);
			class G extends s.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = R
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > B ? s.a.createElement(U, null, t.isExpanded ? e.text : e.text.slice(0, B), s.a.createElement(z, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? I.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : I.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : s.a.createElement(U, null, e.text)
				}
			}
			var V = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, r) => s.a.createElement(A, {
					key: `${r}-${t.title}`
				}, s.a.createElement(D, null, t.titleHtml ? s.a.createElement(M, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && s.a.createElement(W, null, s.a.createElement(F.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && s.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						r = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? `${r}:0${n}` : `${r}:${n}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && s.a.createElement(H, null, t.locationHtml ? s.a.createElement(M, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && s.a.createElement(G, {
					text: t.description
				})))),
				q = r("./src/reddit/components/TrackingHelper/index.tsx"),
				K = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var J = Object(q.c)(e => s.a.createElement(K.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Z = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				Y = Object(i.b)(Z),
				X = (e, t, r) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${r}</body>`;
			class Q extends s.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				UNSAFE_componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = X(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, s.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var $ = Y(Q),
				ee = r("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				te = r.n(ee);
			var re = m.a.div("ImageFrame", te.a),
				ne = r("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				se = r.n(ne);
			var ie = m.a.img("StyledImage", se.a);
			class ae extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === h.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== h.c) return t
					}
					return t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						props: t,
						state: r
					} = this;
					e.subredditName === t.subredditName && e.widget.data[r.imageIndex] && e.widget.data[r.imageIndex] === t.widget.data[r.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const r = e.widget.data[t.imageIndex],
						n = s.a.createElement(re, null, s.a.createElement(ie, {
							alt: I.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: r.url
						}));
					return r.linkUrl ? s.a.createElement(l.b, {
						href: r.linkUrl
					}, n) : n
				}
			}
			var oe = ae,
				de = r("./src/config.ts"),
				ce = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				le = r("./src/lib/opener/index.ts"),
				ue = r("./src/reddit/components/Flair/index.tsx"),
				me = r("./src/reddit/controls/InternalLink/index.tsx"),
				pe = r("./src/reddit/icons/fonts/Envelope/index.tsx"),
				be = r("./src/reddit/models/Flair/index.ts"),
				he = r("./src/reddit/selectors/subreddit.ts"),
				ge = r("./src/reddit/components/Widgets/Moderator/index.m.less"),
				fe = r.n(ge);
			const xe = m.a.a("ExternalLink", fe.a),
				we = m.a.div("ModeratorListItem", fe.a),
				ye = m.a.div("Username", fe.a),
				ve = m.a.wrapped(ue.b, "FlairComponent", fe.a),
				_e = e => e.authorFlairType === be.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				Ee = e => s.a.createElement(ye, null, `u/${e}`),
				ke = m.a.wrapped(me.default, "InternalLink", fe.a),
				Oe = m.a.div("LinkContainer", fe.a),
				Ce = Object(a.c)({
					userIsBanned: he.eb,
					userIsLoggedIn: w.Q
				});
			var Se = Object(i.b)(Ce)(e => {
					const {
						subredditName: t,
						widget: r,
						userIsBanned: n,
						userIsLoggedIn: i
					} = e;
					return s.a.createElement(d.a, {
						styles: r.styles,
						title: I.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (r.mods && r.mods.length || n) && s.a.createElement(c.t, {
						kind: c.b.InternalLink,
						priority: c.c.Secondary,
						className: fe.a.MessageModsButton,
						rel: le.c,
						target: le.d.BLANK,
						to: `${de.a.redditUrl}/message/compose?to=/r/${t}`
					}, s.a.createElement(pe.a, {
						className: fe.a.MessageModsButtonIcon
					}), I.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), r.mods && r.mods.length && !n ? s.a.createElement(s.a.Fragment, null, r.mods.map(e => s.a.createElement(we, {
						key: e.name
					}, (e => s.a.createElement(ce.a, {
						to: `/user/${e.name}/`
					}, Ee(e.name)))(e), s.a.createElement(ve, {
						flair: _e(e),
						forceSmallEmojis: !0
					}))), s.a.createElement(Oe, null, s.a.createElement(ke, {
						to: `/r/${t}/about/moderators/`
					}, I.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n || !i ? s.a.createElement("div", {
						className: fe.a.HelpCenterMessage
					}, I.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", s.a.createElement(xe, {
						href: `${de.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : s.a.createElement("div", {
						className: fe.a.UnModeratedSubreddit
					}, I.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", s.a.createElement(xe, {
						href: `${de.a.redditUrl}/r/redditrequest`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", I.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				je = r("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ne = r("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ie = r("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Fe = r.n(Ie);
			const Te = m.a.div("WidgetContent", Fe.a),
				Pe = m.a.wrapped(o.a, "RawHTMLDisplay", Fe.a);
			var Le = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, s.a.createElement(Te, null, s.a.createElement(Pe, {
					html: e.widget.textHtml || ""
				}))),
				Be = r("./src/reddit/components/Widgets/Base/index.tsx");
			var Re = e => s.a.createElement(Be.b, null, "This widget hasn't been implemented yet!");

			function Me(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Se;
						case "textarea":
							return Le;
						case "button":
							return N;
						case "subreddit-rules":
							return Ne.b;
						case "community-list":
							return J;
						case "calendar":
							return V;
						case "image":
							return oe;
						case "custom":
							return $;
						case "post-flair":
							return je.a;
						default:
							return Re
					}
				}(e.widget);
				return s.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			class i extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							r = this.props.multiple ? [...t] : t[0];
						this.props.onChange(r), this.setState(() => ({
							value: r
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, r = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, i = r || n;
					return s.a.createElement("div", {
						className: e.className
					}, r && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: r,
						tabIndex: e.tabIndex
					}), (!i || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./src/lib/isFakeSubreddit/index.ts"), r("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var n;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(n || (n = {}))
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "p", (function() {
				return o
			})), r.d(t, "q", (function() {
				return d
			})), r.d(t, "s", (function() {
				return c
			})), r.d(t, "n", (function() {
				return l
			})), r.d(t, "o", (function() {
				return u
			})), r.d(t, "m", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "l", (function() {
				return h
			})), r.d(t, "t", (function() {
				return g
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "r", (function() {
				return k
			})), r.d(t, "f", (function() {
				return O
			}));
			var n = r("./src/reddit/models/Prediction/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = "poll",
				a = "predictions",
				o = e => ({
					...Object(s.n)(e),
					source: i,
					action: "select",
					noun: "poll_option"
				}),
				d = e => ({
					...Object(s.n)(e),
					source: i,
					action: "select",
					noun: "prediction_option"
				}),
				c = e => ({
					...Object(s.n)(e),
					source: i,
					action: "view",
					noun: "predict_option_modal"
				}),
				l = e => {
					let {
						pollId: t,
						selectedNumberCoins: r,
						totalStakeAmount: n
					} = e;
					return e => ({
						...Object(s.n)(e),
						source: i,
						action: "confirm",
						noun: "predict",
						poll: Object(s.G)(e, t, !1, void 0, r),
						goldPurchase: {
							numberCoins: n
						}
					})
				},
				u = e => {
					let {
						pollId: t,
						selectedNumberTokens: r
					} = e;
					return e => ({
						...Object(s.n)(e),
						source: i,
						action: "confirm",
						noun: "predict",
						poll: Object(s.G)(e, t, !1, void 0, void 0, r)
					})
				},
				m = e => {
					let {
						pollId: t,
						currency: r,
						amount: a
					} = e;
					return e => {
						const o = r === n.a.Coins ? a : void 0,
							d = r === n.a.Tokens ? a : void 0;
						return {
							...Object(s.n)(e),
							source: i,
							action: "close",
							noun: "prediction_modal",
							poll: Object(s.G)(e, t, !1, o, d)
						}
					}
				},
				p = e => ({
					...Object(s.n)(e),
					source: i,
					action: "click",
					noun: "add_coins"
				}),
				b = e => {
					let {
						targetUserId: t
					} = e;
					return e => ({
						...Object(s.n)(e),
						source: a,
						action: "click",
						noun: "leaderboard_profile",
						targetUser: {
							id: t
						}
					})
				},
				h = e => {
					let {
						pageType: t
					} = e;
					return e => ({
						...Object(s.n)(e),
						source: a,
						action: "click",
						noun: "tournament",
						actionInfo: {
							pageType: t
						}
					})
				},
				g = () => e => ({
					...Object(s.n)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				f = () => e => ({
					...Object(s.n)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				x = () => e => ({
					...Object(s.n)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				w = e => t => ({
					...Object(s.n)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "enable_predictions",
					actionInfo: {
						pageType: "predictions_picker"
					},
					setting: {
						value: e ? "1" : "0",
						oldValue: e ? "0" : "1"
					},
					subreddit: Object(s.gb)(t)
				}),
				y = () => e => ({
					...Object(s.n)(e),
					source: a,
					action: "click",
					noun: "next"
				}),
				v = () => e => ({
					...Object(s.n)(e),
					source: a,
					action: "click",
					noun: "add_more"
				}),
				_ = () => e => ({
					...Object(s.n)(e),
					source: a,
					action: "click",
					noun: "start_tournament"
				}),
				E = () => e => ({
					...Object(s.n)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				k = () => e => ({
					...Object(s.n)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(s.gb)(e)
				}),
				O = () => e => ({
					...Object(s.n)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(s.gb)(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "q", (function() {
				return m
			})), r.d(t, "r", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "p", (function() {
				return g
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "n", (function() {
				return k
			})), r.d(t, "o", (function() {
				return O
			}));
			var n = r("./src/reddit/models/SubredditWikiPage/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					...s.n(e),
					subreddit: s.gb(e),
					userSubreddit: s.qb(e)
				}),
				a = () => e => ({
					source: "wiki",
					action: "click",
					noun: "edit",
					...i(e)
				}),
				o = () => e => ({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki",
					...i(e)
				}),
				d = e => t => ({
					source: "wiki",
					action: "click",
					noun: e,
					...i(t)
				}),
				c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return d(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = d("compare_wiki_pages"),
				u = d("revert_wiki_page"),
				m = d("view_wiki_page"),
				p = d("view_source"),
				b = d("add_wiki_page_contributor"),
				h = d("remove_wiki_page_contributor"),
				g = d("save_wiki_page_settings"),
				f = d("copy_url"),
				x = d("add_wiki_subreddit_contributor"),
				w = d("remove_wiki_subreddit_contributor"),
				y = d("ban_wiki_contributor"),
				v = d("unban_wiki_contributor"),
				_ = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				E = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				k = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: s.d(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				O = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: s.d(t, {
						settingValue: E[e]
					})
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return l
			}));
			var n, s, i = r("./src/reddit/constants/tracking.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const o = (e, t) => r => ({
					source: s.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(a.ub)(r, {
						subredditId: e,
						widgetKind: t
					}),
					...a.n
				}),
				d = (e, t) => r => ({
					source: s.POST,
					action: i.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: a.H(r, e),
					subreddit: a.gb(r),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...a.n(r)
				}),
				c = () => e => ({
					source: s.SIDEBAR,
					action: i.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...a.n(e)
				}),
				l = e => t => ({
					source: s.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: n.TOPIC,
					...a.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(i.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), s.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), s.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), s.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), s.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, r) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = r.n(o);
			t.a = Object(i.a)(e => s.a.createElement("div", {
				className: Object(a.a)(d.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, r) {
			"use strict";
			var n, s;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/constants/postLayout.ts"),
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.e[Object(i.S)(e, {})] === s.d.Card,
				d = e => Object(a.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: n.sb
				}) === n.tc.Treatment
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts"),
				a = r("./src/reddit/selectors/experiments/utils.ts"),
				o = r("./src/reddit/selectors/meta.ts"),
				d = r("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => Object(o.g)(e) && Object(i.f)(e),
					experimentName: n.gc
				}), a.a),
				l = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => !Object(o.g)(e) && Object(i.f)(e),
					experimentName: n.fc
				}), a.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = [],
				o = e => a.includes(e),
				d = Object(n.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: s.Md
				}), e => e === s.qd)
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"92790c69eba6"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.219b91980addd9632b05.js.map