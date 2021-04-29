// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.3c29c4ca3c9c763fc2c7.js
// Retrieved at 4/29/2021, 10:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"], {
		"./src/graphql/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"afc557a7dcb1"}')
		},
		"./src/graphql/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"e5d76df5b02a"}')
		},
		"./src/graphql/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"4b74515cd8a2"}')
		},
		"./src/graphql/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"3785e4a718f5"}')
		},
		"./src/graphql/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"6829c428155b"}')
		},
		"./src/graphql/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/graphql/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"278755e4d90f"}')
		},
		"./src/graphql/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"45c2e0b86b90"}')
		},
		"./src/graphql/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/graphql/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"e53ac80e9ff1"}')
		},
		"./src/graphql/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, r) {
			"use strict";

			function n(e, t, r, n) {
				const s = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: n ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: r ? "UTC" : void 0
				}).format(s)
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "i", (function() {
				return E
			}));
			var n = r("./node_modules/linkify-it/index.js"),
				s = r.n(n),
				i = r("./node_modules/tlds/index.js"),
				a = r.n(i),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				d = r("./node_modules/lodash/values.js"),
				c = r.n(d);
			const l = e => c()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				b = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				h = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				f = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				g = s()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				x = s()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subredditFullUrl.config).add(o.g.subredditFull.prefix, o.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const w = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const r = l(e.text);
						return !r || r && t
					})
				},
				y = e => {
					return [...f.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const r = e.match(t);
					if (r && 1 === r.length && 0 === r[0].index && r[0].lastIndex === t.length) return r[0]
				},
				E = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const r = t[0];
						return r.lastIndex === e.length ? r : ((e, t) => {
							const r = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(r)) return t.lastIndex += r.length, t.url += r, t
						})(e, r)
					}
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
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return y
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "m", (function() {
				return P
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "a", (function() {
				return F
			})), r.d(t, "n", (function() {
				return B
			})), r.d(t, "i", (function() {
				return M
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "e", (function() {
				return D
			}));
			var n = r("./node_modules/uuid/index.js"),
				s = r.n(n),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/predictions/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/endpoints/economics/predictions.ts"),
				c = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				l = r("./src/reddit/models/Poll/index.ts"),
				u = r("./src/reddit/selectors/experiments/econ/predictions.ts"),
				m = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/selectors/features/predictions/creation/index.ts"),
				f = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				g = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(i.a)({
				features: {
					predictions: a.a
				}
			});
			const x = Object(o.a)(g.d),
				v = Object(o.a)(g.h),
				w = Object(o.a)(g.g),
				y = (e, t, r, n) => async (s, i, {
					gqlContext: a
				}) => {
					const o = Object(b.J)(i()),
						c = await Object(d.h)(a(), {
							subredditId: e,
							period: t,
							top: r,
							includeCurrentRank: o,
							tournamentId: n
						});
					if (c.error || !c.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: l
					} = c.body.data;
					if (!l || !l.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: u
					} = l, m = {
						subredditId: e,
						...u
					};
					return s(x(m)), m
				}, _ = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = r(),
						i = Object(m.R)(s, {
							postId: e,
							disallowProfile: !0
						});
					if (!i) throw new Error("Post does not belong to a subreddit");
					const a = await Object(d.f)(n(), i.name, Object(u.e)(s));
					if (a.error || !a.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: o
					} = a.body.data;
					if (!o || !o.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return o.predictionCoinPackages
				}, E = ({
					coinPackageId: e,
					optionId: t,
					postId: r,
					price: n
				}) => async (s, i, {
					gqlContext: a
				}) => {
					const o = await Object(d.l)(a(), {
						coinPackageId: e,
						optionId: t,
						postId: r,
						price: n
					});
					if (o.error || !o.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: c
					} = o.body.data;
					if (!c) throw new Error("Failed to create prediction vote");
					return s(v({
						pollId: r,
						prediction: c.poll,
						price: n
					})), c.poll
				}, O = ({
					optionId: e,
					postId: t
				}) => async (r, n, {
					gqlContext: s
				}) => {
					const i = await Object(d.j)(s(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: a
						} = i.body.data;
					if (!(null == a ? void 0 : a.poll)) throw new Error("Failed to resolve prediction");
					return r(w({
						pollId: t,
						prediction: a.poll
					})), a.poll
				}, j = Object(o.a)(g.b), C = Object(o.a)(g.c), k = Object(o.a)(g.f), N = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = r(),
						i = Object(p.F)(s, e);
					if (Object(f.i)(s, {
							subredditId: i
						})) return Object(f.e)(s, {
						subredditId: i
					});
					t(j({
						subredditId: i
					}));
					const a = await Object(d.i)(n(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0
					});
					if (a.error || !a.ok) throw new Error("Failed to fetch tournaments");
					const {
						subredditInfoByName: o
					} = a.body.data;
					if (!o.predictionTournaments) return [];
					const l = o.predictionTournaments.map(e => {
							var t, r;
							const n = null !== (r = null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.map(e => {
								const t = Object(c.e)(e),
									r = t.pollData;
								return {
									...t,
									pollData: r
								}
							})) && void 0 !== r ? r : [];
							return {
								...e,
								predictionPosts: n
							}
						}),
						u = l.reduce((e, t) => (t.predictionPosts.length && t.predictionPosts.forEach(t => {
							e[t.id] = t
						}), e), {});
					return t(C({
						subredditId: i,
						tournaments: l
					})), t(k({
						posts: u,
						meta: s.meta
					})), l
				}, I = Object(o.a)(g.a), S = Object(o.a)(g.i), P = Object(o.a)(g.j), T = ({
					subredditId: e
				}) => async (t, r, {
					gqlContext: n
				}) => {
					const s = r(),
						i = Object(h.b)(s),
						a = Object(u.a)(s);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const o = await Object(d.c)(n(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: a ? l.b.Coins : l.b.Tokens
						}),
						{
							createPredictionTournament: c
						} = o.body.data;
					if (!(null == c ? void 0 : c.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: m
					} = c;
					return t(C({
						subredditId: e,
						tournaments: [m]
					})), m
				}, F = (e, t) => async (r, n, {
					gqlContext: i
				}) => {
					var a;
					const o = Object(h.b)(n());
					if (!o) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(d.b)(i(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${s.a.v4()}`,
							subredditId: t,
							predictionDrafts: o
						}),
						{
							addPredictionDrafts: l
						} = c.body.data;
					if (null === (a = l.errors) || void 0 === a ? void 0 : a.length) throw new Error(l.errors[0].message);
					if (!(null == l ? void 0 : l.tournament)) throw new Error("Failed to create prediction");
					return l.tournament
				}, L = Object(o.a)(g.k), B = (e, t, r) => async (n, s, {
					gqlContext: i
				}) => {
					const a = await Object(d.k)(i(), {
							tournamentId: e,
							name: r
						}),
						{
							updatePredictionTournament: o
						} = a.body.data;
					if (!o.tournament) throw new Error("Failed to update prediction name");
					return n(L({
						subredditId: t,
						tournament: o.tournament
					})), o.tournament
				}, M = (e, t) => async (r, n, {
					gqlContext: s
				}) => {
					const i = await Object(d.d)(s(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: a
						} = i.body.data;
					if (!a.tournament) throw new Error("Failed to update prediction name");
					return r(L({
						subredditId: t,
						tournament: a.tournament
					})), a.tournament
				}, A = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = await Object(d.e)(n(), {
						postId: e
					});
					if (!s.ok || s.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = s.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, D = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = await Object(d.g)(n(), {
						tournamentId: e
					});
					if (!s.ok || s.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = s.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/config.ts"),
				d = r("./src/lib/addQueryParams/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/doubleclickForPublishers/index.ts"),
				u = r("./src/lib/intersectionObserver/index.ts"),
				m = r("./src/lib/objectSelector/index.ts"),
				p = r("./src/reddit/helpers/createBannerProperties/index.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/helpers/trackers/ads.ts"),
				g = r("./src/reddit/components/BannerAd/index.m.less"),
				x = r.n(g),
				v = r("./src/lib/lessComponent.tsx");
			const w = v.a.div("Container", x.a),
				y = v.a.div("LoadingHitbox", x.a),
				_ = e => setTimeout(() => {
					throw e
				}, 0);
			class E extends s.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1, this.refreshedOnce = !1, this.refreshInterval = null
				}
				componentDidCatch(e) {
					_(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: r,
						sizes: n = []
					} = this.props;
					try {
						return this.frame && l.a(this.frame, {
							id: e,
							slot: t,
							properties: r,
							sizes: n
						})
					} catch (s) {
						_(s)
					}
				}
				destroySlot() {
					try {
						this.refreshInterval && window.clearInterval(this.refreshInterval), this.frame && l.b(this.frame)
					} catch (e) {
						_(e)
					}
				}
				refreshPeriodically() {
					this.props.isRefreshableAd && null != this.props.incrementRefreshCounter && null != this.props.refreshCount && (this.props.refreshCount >= o.a.dfpRefreshSlotIntervalLimit ? (this.refreshInterval && window.clearInterval(this.refreshInterval), this.refreshInterval = null) : (this.refresh(this.props), this.props.incrementRefreshCounter()))
				}
				async componentDidMount() {
					this.props.sendEvent(Object(f.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						_(e)
					}
					this.loader && u.a(this.loader, e => {
						this.isWithinLoadingDistance = !0, this.refreshedOnce || (this.frame && l.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.refresh(this.props), this.refreshedOnce = !0), this.props.isRefreshableAd && (!this.refreshInterval && e.isIntersecting && null != this.props.refreshCount ? this.props.refreshCount < o.a.dfpRefreshSlotIntervalLimit && (this.refreshInterval = window.setInterval(this.refreshPeriodically.bind(this), o.a.dfpRefreshSlotInterval)) : this.refreshInterval && !e.isIntersecting && (window.clearInterval(this.refreshInterval), this.refreshInterval = null))
					})
				}
				componentWillUnmount() {
					this.loader && u.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && l.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				UNSAFE_componentWillReceiveProps(e) {
					if (this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3) return this.refresh(e), void(this.refreshedOnce = !0)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: r
					} = this.props;
					return t ? s.a.createElement(w, {
						"data-slot": t
					}, s.a.createElement(y, {
						key: `${e}-loadinghitbox`,
						innerRef: e => {
							this.loader = e
						}
					}), s.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: `${e}-div`,
						className: r,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : s.a.createElement("div", {
						className: r
					})
				}
			}
			E.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(i.b)(() => Object(a.c)({
				properties: Object(m.a)((e, t) => {
					const r = e.platform.currentPage;
					if (!r) return {};
					const n = `${e.meta.protocol}://${e.meta.domain}`;
					return Object(p.b)(t.placement, e.user, Object(d.a)(`${n}${r.url}`, r.queryParams), Object(b.A)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const r = e.platform.currentPage;
					return r && r.meta ? l.c(t.listingName, r.meta.name) : ""
				}
			}))(Object(h.c)(E))
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
			const f = d.a.wrapped(u.a, "Planet", h.a),
				g = d.a.div("SubredditIcon", h.a),
				x = d.a.div("PositionedImage", h.a),
				v = d.a.div("HeaderContent", h.a),
				w = d.a.div("HeaderContainer", h.a),
				y = d.a.span("HeaderText", h.a),
				_ = d.a.wrapped(i.a, "HeaderUrl", h.a),
				E = d.a.span("Container", h.a),
				O = Object(o.a)(e => {
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
						O = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						j = `${4+O}px`;
					return s.a.createElement(E, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, s.a.createElement(_, {
						className: e.className,
						to: e.url
					}, s.a.createElement(w, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||c.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && s.a.createElement(v, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (r ? s.a.createElement(g, {
						style: {
							backgroundImage: `url(${r})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: j,
							width: j
						}
					}) : s.a.createElement(f, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: j,
							width: j
						}
					})), s.a.createElement(y, {
						style: {
							paddingTop: 32 === O ? "4px" : "14px"
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
			t.a = O
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
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				o = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				d = r.n(o);
			const c = ({
				className: e,
				progress: t
			}) => s.a.createElement("div", {
				className: Object(i.a)(d.a.barRow, e)
			}, s.a.createElement("div", {
				className: d.a.track
			}), s.a.createElement("div", {
				className: d.a.progress,
				style: {
					width: `${100*t}%`
				}
			}, s.a.createElement(a.a, {
				className: Object(i.a)(d.a.icon, {
					[d.a.empty]: 0 === t,
					[d.a.full]: t >= 1
				})
			})))
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
				return b
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				d = r("./src/reddit/components/UserIcon/index.tsx"),
				c = r("./src/reddit/controls/InternalLink/index.tsx"),
				l = r("./src/reddit/helpers/trackers/powerups.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				p = r.n(m);
			const b = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: Object(a.a)(p.a.userIconContainer, e.iconClassName)
			}, i.a.createElement(d.a, {
				userName: e.userName || "",
				iconUrl: e.iconUrl,
				className: p.a.userIcon,
				isNSFW: e.isNsfw
			})), i.a.createElement("h4", {
				className: Object(a.a)(p.a.name, e.textClassName)
			}, e.displayName || e.userName));
			t.b = function(e) {
				var t, r;
				const s = Object(u.a)(),
					{
						className: d,
						supporter: m
					} = e,
					{
						score: h,
						supporterInfo: f
					} = m,
					g = (null == f ? void 0 : f.displayName) || n.fbt._({
						"*": "Anonymous Heroes",
						_1: "Anonymous Hero"
					}, [n.fbt._plural(h)], {
						hk: "8kyEI"
					}).toString(),
					x = null === (t = null == f ? void 0 : f.icon) || void 0 === t ? void 0 : t.url,
					v = !!(null === (r = null == f ? void 0 : f.profile) || void 0 === r ? void 0 : r.isNsfw),
					w = Object(o.a)(h),
					y = i.a.createElement(b, {
						userName: g,
						isNsfw: v,
						iconUrl: x
					});
				return i.a.createElement("div", {
					className: Object(a.a)(d, p.a.container)
				}, f ? i.a.createElement(c.a, {
					className: p.a.user,
					to: `/user/${g}/`,
					onClick: () => {
						f && s(Object(l.r)(f.id, f.displayName))
					}
				}, y) : i.a.createElement("div", {
					className: p.a.user
				}, y), i.a.createElement("div", {
					className: p.a.counter
				}, i.a.createElement(w, {
					className: p.a.powerupIcon
				}), h))
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
			const f = e => ({
				key: h(e),
				data: {
					supporter: e
				}
			});

			function g(e, t) {
				const r = t || m;
				return e.slice(0, r).map(f)
			}
			const x = () => ({
					width: p,
					height: Object(a.spring)(0)
				}),
				v = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class w extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: g(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: r,
						isShortSupportersEnabled: s
					} = this.props, d = s && this.state.items.length < t.length;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(n.a)(c.a.container, e)
					}, i.a.createElement(a.TransitionMotion, {
						willLeave: x,
						willEnter: v,
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
					}))))))), d && i.a.createElement(o.q, {
						priority: o.b.Secondary,
						className: c.a.expandButton,
						onClick: r,
						isFullWidth: !0
					}, u._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: g(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = i.a.memo(w)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				s = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				i = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const a = 2,
				o = 5;

			function d(e) {
				return e >= o ? i.a : e >= a ? s.a : n.a
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
				o = r("./src/reddit/actions/gold/powerups.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx"),
				l = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				b = r("./src/reddit/helpers/trackers/powerups.ts"),
				h = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				g = r("./src/reddit/constants/experiments.ts"),
				x = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const v = Object(x.a)(g.Db);
			var w = r("./src/reddit/selectors/gold/powerups.ts"),
				y = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				E = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				O = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				j = r.n(O);
			const {
				fbt: C
			} = r("./node_modules/fbt/lib/FbtPublic.js"), k = e => {
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
					className: j.a.titleRow
				}, i.a.createElement("span", null, C._("Powerups", null, {
					hk: "DrcXp"
				})), i.a.createElement("span", null, s < o ? `${s}/${o}` : s)), i.a.createElement(E.a, {
					progress: d
				}))
			};
			var N = r("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				I = r("./src/reddit/components/PowerupsSidebar/index.m.less"),
				S = r.n(I);
			const {
				fbt: P
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				subredditId: t
			}) => {
				const r = Object(a.d)(),
					s = Object(h.a)(),
					g = Object(a.e)(_.i),
					x = Object(a.e)(e => Object(w.j)(e, {
						subredditId: t
					})),
					E = Object(a.e)(e => Object(y.T)(e, {
						subredditId: t
					})),
					O = Object(a.e)(e => Object(w.m)(e, {
						subredditId: t
					})),
					j = Object(a.e)(w.u),
					C = Object(a.e)(e => !!Object(w.k)(e, {
						subredditId: t
					})),
					I = Object(a.e)(v),
					T = Object(a.e)(e => Object(w.a)(e, {
						subredditId: t
					})),
					F = C || T,
					L = () => {
						s(I ? Object(b.l)() : Object(b.h)()), r(Object(o.c)("powerups_sidebar"))
					};
				if (!x || 1 === x.tiersInfo.length || !E) return null;
				const B = !!(null == j ? void 0 : j.freeCount),
					M = I ? 8 : 50,
					A = F ? P._("Powerups are unlocked in", null, {
						hk: "fquP8"
					}) : P._("Powerup to unlock perks for", null, {
						hk: "3kTNGL"
					});
				return i.a.createElement(l.a, null, i.a.createElement(u.a, {
					className: e,
					title: P._("Powerups", null, {
						hk: "DrcXp"
					})
				}, i.a.createElement("div", {
					className: S.a.container
				}, I && i.a.createElement("div", {
					className: S.a.titleGroup
				}, i.a.createElement("div", {
					className: S.a.powerupsIcon
				}, i.a.createElement("img", {
					className: S.a.powerupsIconImage,
					src: `${n.a.assetPath}/img/powerups/powerup.png`
				})), i.a.createElement("h2", {
					className: S.a.title
				}, A, " ", E.displayText), i.a.createElement(p.q, {
					priority: p.b.Primary,
					className: S.a.button,
					onClick: L,
					isFullWidth: !0
				}, B && !F ? P._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : P._("Become a Hero", null, {
					hk: "3IZNw3"
				}))), !I && i.a.createElement("div", {
					className: S.a.oldTitleGroup
				}, i.a.createElement("h2", {
					className: S.a.title
				}, P._("Powerup and unlock perks for {subreddit name}", [P._param("subreddit name", E.displayText)], {
					hk: "2gDqtV"
				})), i.a.createElement("button", {
					className: S.a.perksButton,
					onClick: L
				}, P._("Show Perks", null, {
					hk: "3TgZRL"
				}))), i.a.createElement("div", {
					className: S.a.group
				}, i.a.createElement("h3", {
					className: S.a.subTitle
				}, P._("Community heroes", null, {
					hk: "1hGdba"
				})), i.a.createElement(k, {
					className: S.a.progress,
					powerups: x
				}), !!(null == O ? void 0 : O.length) && i.a.createElement(N.a, {
					supporters: O,
					className: S.a.heroes,
					maxSupporters: M,
					isShortSupportersEnabled: I,
					onShowFullSupportersList: () => {
						s(Object(b.n)()), r(Object(d.h)(m.a.ECON_SUPPORTERS_LIST, {
							subredditId: t
						}))
					}
				}), !(null == O ? void 0 : O.length) && I && i.a.createElement("div", {
					className: S.a.becomeFirstHero
				}, i.a.createElement(c.a, {
					displayName: P._("Become the first hero!", null, {
						hk: "4ta0Hi"
					}).toString(),
					userName: null == g ? void 0 : g.displayName,
					isNsfw: !!(null == g ? void 0 : g.isNSFW),
					iconUrl: null == g ? void 0 : g.accountIcon,
					textClassName: S.a.becomeFirstHeroLabel
				}))), !I && i.a.createElement("div", {
					className: S.a.oldGroup
				}, i.a.createElement(p.q, {
					priority: p.b.Primary,
					className: S.a.button,
					onClick: () => {
						s(Object(b.h)()), r(Object(d.h)(m.a.ECON_POWERUPS_PURCHASE))
					},
					isFullWidth: !0
				}, B ? P._("Apply Your Powerup", null, {
					hk: "10PunM"
				}) : P._("Become a Hero", null, {
					hk: "3IZNw3"
				})), B && i.a.createElement("div", {
					className: S.a.premiumDescription
				}, i.a.createElement("div", {
					className: S.a.premiumIconWrapper
				}, i.a.createElement(f.a, {
					className: S.a.premiumIcon
				})), i.a.createElement("span", null, P._("Premium gives you one monthly Powerup", null, {
					hk: "tdfip"
				})))))))
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, r) {
			e.exports = {
				sideBarStyle: "wYQbYt3FNY5w9oBiYrHzv",
				BannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				bannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1",
				SidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9",
				sidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r.n(n),
				i = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = r("./node_modules/lodash/random.js"),
				o = r.n(a),
				d = r("./node_modules/react/index.js"),
				c = r.n(d),
				l = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				m = r("./src/config.ts"),
				p = r("./src/reddit/components/BannerAd/index.tsx"),
				b = r("./src/reddit/components/FakeBannerAd/index.tsx"),
				h = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				f = r("./src/reddit/components/TrackingHelper/index.tsx"),
				g = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = r("./src/reddit/helpers/adCount/index.ts"),
				v = r("./src/reddit/helpers/trackers/ads.ts"),
				w = r("./src/reddit/models/Media/index.ts"),
				y = r("./src/reddit/selectors/platform.ts"),
				_ = r("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				E = r.n(_),
				O = r("./src/lib/constants/index.ts"),
				j = r("./src/lib/lessComponent.tsx");
			const C = Object(i.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), r.e("reddit-components-SidebarNativeAd")]).then(r.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
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
				k = Object(u.c)({
					post: (e, t) => {
						const {
							placement: r,
							placementIndex: n
						} = t, s = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(x.a)(r, s, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch,
					isSubredditOrCommentsPage: e => Object(y.p)(e) === O.Gb.SUBREDDIT || Object(y.p)(e) === O.Gb.COMMENTS
				}),
				N = Object(l.b)(k),
				I = j.a.wrapped(p.a, "BannerAd", E.a),
				S = j.a.wrapped(g.a, "ThemedWidget", E.a),
				P = j.a.div("SidebarAdPlaceholder", E.a),
				T = e => !(window.aax && window.aax.getAbpStatus && window.aax.getAbpStatus()) && e,
				F = (e, t, r) => {
					let n = "";
					return t && (n += "overlay-"), n += `sidebar-${e}`, null != r && (n += `-${r}`), n
				},
				L = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(w.F)(e.media) && e.media.content)),
				B = e => !!e && e.isBlank,
				M = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				A = Object(f.c)(class extends c.a.Component {
					shouldComponentUpdate(e, t) {
						const {
							className: r,
							redditStyle: n
						} = this.props;
						return r !== e.className || n !== e.redditStyle
					}
					trackViewability(e, t, r) {
						Math.random() <= m.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(v.d)(e, t, r))
					}
					render() {
						const e = o()(0, M.length - 1),
							{
								img: t,
								href: r
							} = M[e],
							{
								className: n,
								placement: s,
								redditStyle: i,
								removeSidebarSpacer: a
							} = this.props,
							d = a ? c.a.Fragment : h.a;
						return c.a.createElement(d, null, c.a.createElement(S, {
							className: n,
							contentOnly: !0,
							redditStyle: i
						}, c.a.createElement(b.a, {
							img: t,
							href: r,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, s)
						})))
					}
				});
			class D extends c.a.Component {
				constructor(e) {
					super(e), this.incrementRefreshCounter = this.incrementRefreshCounter.bind(this), this.state = {
						refreshCount: 0
					}
				}
				incrementRefreshCounter() {
					this.setState(e => ({
						refreshCount: e.refreshCount + 1
					}))
				}
				render() {
					const {
						className: e,
						pending: t,
						post: r,
						isOverlay: s,
						placementIndex: i,
						refreshKey: a,
						listingName: o,
						placement: d,
						sizes: l,
						position: u,
						redditStyle: m,
						forcePlaceholder: p,
						forceHouseAd: b,
						waitForProgrammatic: f,
						isSubredditOrCommentsPage: g,
						removeSidebarSpacer: x
					} = this.props, v = n.fbt._("advertisement", null, {
						hk: "35HaIb"
					}), w = x ? c.a.Fragment : h.a;
					return p || t || !L(r) && f ? c.a.createElement(w, null, c.a.createElement(S, {
						className: e,
						contentOnly: !0,
						redditStyle: m
					}, c.a.createElement(P, {
						"data-before-content": v
					}))) : b ? c.a.createElement(A, {
						className: e,
						redditStyle: m,
						placement: d,
						removeSidebarSpacer: x
					}) : L(r) ? c.a.createElement(w, null, c.a.createElement(C, {
						post: r,
						refreshKey: a,
						listingName: o,
						placement: d,
						placementIndex: i
					})) : c.a.createElement(w, null, c.a.createElement(S, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: m
					}, B(r) && c.a.createElement(C, {
						post: r,
						refreshKey: a,
						listingName: o,
						placement: d,
						placementIndex: i
					}), c.a.createElement(I, {
						id: F(d, s, i),
						isRefreshableAd: T(g),
						incrementRefreshCounter: this.incrementRefreshCounter,
						sizes: l,
						placement: d,
						listingName: o,
						refreshKey: a,
						refreshCount: this.state.refreshCount,
						position: u,
						dataBeforeContent: v
					})))
				}
			}
			t.a = N(D)
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
				u = r("./src/reddit/actions/subreddit.ts"),
				m = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				h = r("./src/reddit/components/SubredditNav/index.m.less"),
				f = r.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = (e, t, r) => Object(p.a)(e, {
					[f.a.mActive]: t
				}, {
					[f.a.topBannerVariant]: r
				}),
				v = ({
					children: e,
					isActive: t,
					isTopBannerVariant: r,
					...n
				}) => s.a.createElement("div", g({
					className: x(f.a.subNavTitle, t, r)
				}, n), s.a.createElement("span", null, e), s.a.createElement(b.b, {
					className: f.a.navDropdownIcon
				})),
				w = ({
					className: e,
					isActive: t,
					to: r,
					isTopBannerVariant: n,
					...i
				}) => {
					const a = x(f.a.navLink, t, n);
					return r ? s.a.createElement(m.a, g({
						className: a,
						to: r
					}, i)) : s.a.createElement("a", g({
						className: a
					}, i))
				},
				y = ({
					className: e,
					isActive: t,
					...r
				}) => s.a.createElement(m.a, g({
					className: Object(p.a)(x(f.a.navLink, t), e)
				}, r)),
				_ = ({
					className: e,
					isActive: t,
					...r
				}) => s.a.createElement("a", g({
					className: x(f.a.subNavLink, t)
				}, r)),
				E = ({
					className: e,
					...t
				}) => s.a.createElement("div", g({
					className: Object(p.a)(f.a.subNavContainer, e)
				}, t)),
				O = ({
					className: e,
					isOpen: t,
					...r
				}) => s.a.createElement("div", g({
					className: Object(p.a)(f.a.subNavList, e, {
						[f.a.mIsOpen]: t
					})
				}, r)),
				{
					fbt: j
				} = r("./node_modules/fbt/lib/FbtPublic.js");
			const C = Object(a.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var k = Object(d.t)()(Object(i.b)(C, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: r
					} = e;
					return r ? s.a.createElement(y, {
						className: f.a.metaNavLink,
						to: r.url,
						isActive: e.isActive,
						onClick: r => {
							Object(d.E)(t) && r.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, j._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				N = r("./src/lib/linkMatchers/index.ts");
			class I extends s.a.Component {
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
					return s.a.createElement(E, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, s.a.createElement(v, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), s.a.createElement(O, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var S = I;
			const P = e => {
				const t = e.url && Object(N.h)(N.f, e.url);
				return t ? t.url : e.url
			};
			var T = e => e.menuItem.url ? s.a.createElement(w, {
					href: P(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : s.a.createElement(S, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => s.a.createElement(_, {
					key: `${e.text}-${P(e)}`,
					role: "listitem",
					href: P(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				F = r("./src/reddit/actions/economics/predictions/index.ts"),
				L = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				B = r("./src/reddit/helpers/trackers/predictions.ts"),
				M = r("./src/reddit/hooks/usePageLayer.ts"),
				A = r("./src/reddit/hooks/useTracking.ts"),
				D = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				R = r("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: W
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function H({
				subredditId: e
			}) {
				const t = Object(i.d)(),
					r = Object(M.a)(),
					a = Object(A.a)(),
					o = Object(L.L)(r),
					[d, c] = Object(n.useState)(!1),
					l = Object(i.e)(t => Object(R.T)(t, {
						subredditId: e
					})),
					u = Object(i.e)(t => Object(R.N)(t, {
						subredditId: e
					})),
					m = Object(i.e)(t => Object(D.c)(t, {
						subredditId: e
					})),
					p = Object(i.e)(t => Object(D.b)(t, {
						subredditId: e
					}));
				return Object(n.useEffect)(() => {
					o && a(Object(B.w)())
				}, [o, a]), Object(n.useEffect)(() => {
					(async () => {
						u && !d && (t(Object(F.g)(l.name)), c(!0))
					})()
				}, [u, d, t, l.name]), u && m ? s.a.createElement(y, {
					className: f.a.predictionsFilter,
					isActive: o,
					onClick: () => a(Object(B.g)()),
					to: `${l.url}predictions/`
				}, W._("Predictions", null, {
					hk: "Cv5GC"
				}), p && s.a.createElement("span", {
					className: f.a.liveIcon
				}, W._("Live", null, {
					hk: "1o89m4"
				}))) : null
			}
			var z = r("./src/lib/constants/index.ts");
			const {
				fbt: q
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const U = Object(d.t)(),
				V = [z.Gb.SUBREDDIT, z.Gb.COMMENTS, z.Gb.COLLECTION_COMMENTS],
				G = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && V.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.L)(t.pageLayer)
				});
			var J = U(Object(i.b)(G, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(u.p)({
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
					return s.a.createElement(w, {
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
				Z = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Y = r("./src/higherOrderComponents/makeAsync.tsx");
			var K = Object(Y.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("HarbergerTaxBannerPurchaseCTA").then(r.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				$ = r("./src/reddit/constants/postLayout.ts"),
				X = r("./src/reddit/constants/screenWidths.ts"),
				Q = r("./src/reddit/models/Theme/index.ts"),
				ee = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const te = Object(Z.a)(({
				className: e,
				children: t,
				isTopBannerVariant: r,
				...n
			}) => {
				const i = Object(ee.a)(n);
				return s.a.createElement("div", {
					className: Object(p.a)(f.a.outerContainer, e),
					style: {
						position: i.navBar.useOverlay && !r ? "absolute" : "static",
						background: r ? "inherit" : Object(Q.g)(i.navBar.backgroundColor, i.navBar.backgroundImage, "tiled")
					}
				}, t)
			});
			var re = e => s.a.createElement(te, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, s.a.createElement("div", {
					className: f.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === $.g.Large ? `${e.maxWidth||X.a}px` : "100%"
					}
				}, s.a.createElement("div", null, e.children), s.a.createElement(K, null))),
				ne = r("./src/reddit/constants/wiki.ts"),
				se = r("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: ie
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ae = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: r,
					pageLayer: n
				} = e, i = !!n && !!n.meta && n.meta.name === z.Gb.SUBREDDIT_WIKI, a = `wiki/${ne.i}`, o = t.endsWith("/") ? t + a : `${t}/${a}`;
				return s.a.createElement(w, {
					isActive: i,
					isTopBannerVariant: r,
					to: o,
					onClick: () => e.sendEvent(Object(se.g)())
				}, ie._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const oe = Object(c.a)("spPolls", k),
				de = Object(d.t)(),
				ce = Object(a.c)({
					layout: d.O,
					widget: l.f
				}),
				le = Object(i.b)(ce);
			t.a = de(le(Object(o.c)(e => s.a.createElement(re, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && s.a.createElement(s.a.Fragment, null, s.a.createElement(J, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), s.a.createElement(oe, {
				subredditId: e.subredditId
			}), s.a.createElement(H, {
				subredditId: e.subredditId
			})), e.widget && s.a.createElement(s.a.Fragment, null, e.widget.showWiki && s.a.createElement(ae, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, r) => s.a.createElement(T, {
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
				l = i.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(a.b, {
					type: a.a.Widget
				}, e)), "WidgetHeader", d.a);
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
				return N
			})), r.d(t, "a", (function() {
				return S
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
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, r))
					}
				})(r("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/constants/componentSizes.ts"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				v = r("./src/reddit/icons/fonts/index.tsx"),
				w = r("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				y = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				_ = r("./src/reddit/models/Flair/index.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				j = r("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				C = r.n(j);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => i.a.createElement(b.a, {
					className: Object(c.a)(C.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: C.a.container
				}, e.isLoading ? i.a.createElement(g.a, {
					className: C.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: C.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(S, k({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(f.q, {
					className: C.a.bottomButton,
					kind: f.a.Button,
					priority: f.b.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				I = Object(d.c)({
					hideNSFWPref: E.B,
					nightmode: E.V
				}),
				S = Object(a.b)(I)(e => {
					const t = Object(x.a)();
					return i.a.createElement("div", {
						className: Object(c.a)(C.a.communityItemContainer, {
							[C.a.withBottomFlair]: e.isNSFW
						})
					}, i.a.createElement(y.a, {
						className: C.a.communityItemExpandCenter,
						widthRight: h.t
					}, i.a.createElement("div", {
						className: C.a.iconContainer
					}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
						className: C.a.subredditIcon,
						src: e.iconUrl || e.communityIcon
					}) : t ? i.a.createElement(v.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(c.a)(C.a.defaultCommunityIcon, {
							[C.a.mNightmode]: e.nightmode
						})
					}) : i.a.createElement(w.a, {
						className: C.a.planetIcon,
						"data-redditstyle": !0
					})), i.a.createElement("div", {
						className: C.a.communityDescriptionContainer
					}, i.a.createElement(o.a, {
						className: C.a.communityName,
						onClick: e.onCommunityNameClick,
						title: Object(O.b)(e.name, e.type),
						to: Object(O.a)(e.name, e.type)
					}, Object(O.b)(e.name, e.type)), i.a.createElement("div", {
						className: C.a.communityInfoContainer
					}, !!e.subscribers && i.a.createElement("p", {
						className: C.a.subscriberCount
					}, n.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [n.fbt._plural(e.subscribers, "number")], {
						hk: "6i1wh"
					})), e.isNSFW && i.a.createElement(l.b, {
						className: C.a.nsfwFlair,
						flair: {
							type: _.f.Nsfw,
							text: "nsfw"
						}
					}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(g.a, {
						className: Object(c.a)(C.a.communityCta, C.a.smallLoadingIcon),
						sizePx: 12
					}) : i.a.createElement(f.q, {
						className: Object(c.a)(C.a.communityCta, {
							[C.a.showOnHover]: e.showTertiaryButtonOnHover
						}),
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
						className: C.a.communityDescription
					}, e.description))
				})
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
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
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
				f = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/helpers/correlationIdTracker.ts"),
				x = r("./src/reddit/helpers/flair.ts"),
				v = r("./src/reddit/helpers/trackers/postFlair.ts"),
				w = r("./src/reddit/models/Widgets/index.ts"),
				y = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = r.n(_);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 129,
				C = Object(h.t)({
					filterName: e => Object(h.T)(e)[b.g],
					url: e => Object(h.Y)(e)
				}),
				k = Object(o.c)({
					subredditId: (e, t) => Object(y.F)(e, t.subredditName)
				}),
				N = Object(a.b)(k),
				I = l.a.div("WidgetContent", E.a),
				S = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: r,
					...n
				}) => i.a.createElement("li", {
					className: Object(d.a)(E.a.StyledFlair, e === w.d.Cloud && E.a.cloudDisplay, {
						[E.a.flairFilter]: t,
						[E.a["m-selected"]]: n.isSelected
					}),
					onMouseDown: r
				}, i.a.createElement(u.b, O({}, n, {
					className: E.a.Flair,
					isFlairFilter: t,
					forceSmallEmojis: !0
				})));
			class P extends i.a.Component {
				constructor(e) {
					super(e), this.flairListRef = i.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(v.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(v.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(v.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(g.d)(g.a.SearchResults), this.props.sendEvent(Object(v.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > j && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return i.a.createElement(f.o, {
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
					}, e.map(e => i.a.createElement(S, {
						key: e.templateId,
						display: r.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, r = t ? j : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
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
					return i.a.createElement("ul", null, i.a.createElement(S, {
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
					}, i.a.createElement(I, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(s), o && this.renderButton()))
				}
			}
			t.a = C(N(Object(m.c)(P)))
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
				o = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				u = r("./src/reddit/components/RichTextJson/index.tsx"),
				m = r("./src/reddit/helpers/dom/index.ts"),
				p = r("./src/reddit/icons/fonts/index.tsx"),
				b = r("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = r("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				f = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = r("./src/reddit/models/Widgets/index.ts"),
				x = r("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				v = r.n(x);
			const w = c.a.div("RuleShortName", v.a),
				y = c.a.div("RuleIndex", v.a),
				_ = c.a.div("RuleTitle", v.a),
				E = c.a.div("RuleDescription", v.a),
				O = c.a.wrapped(l.a, "RawHTMLDisplay", v.a),
				j = {};
			class C extends i.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(m.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === g.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: r,
						shouldShowFullDisplay: n
					} = this, s = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !n(e) && !!s;
					return i.a.createElement(w, {
						className: Object(d.a)({
							[v.a.pointerCursor]: a
						}),
						onClick: n(e) || !s ? void 0 : r
					}, i.a.createElement(f.a, null, i.a.createElement(y, null, `${e.humanIndex}.`), i.a.createElement(_, null, `${e.rule.shortName}`), i.a.createElement("div", null, !n(e) && s && (e.isInIcons2020 ? i.a.createElement(p.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}) : t.isVisible ? i.a.createElement(h.a, {
						className: v.a.Chevron
					}) : i.a.createElement(b.a, {
						className: v.a.Chevron
					})))), t.isVisible && i.a.createElement(E, null, e.rule.descriptionRichText ? i.a.createElement(u.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: j
					}) : e.rule.descriptionHtml ? i.a.createElement(O, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const k = e => {
				const t = Object(o.a)();
				return e.rules.length > 0 ? i.a.createElement(a.a, {
					className: e.className,
					styles: e.styles,
					title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", `r/${e.subredditName}`)], {
						hk: "2AwRLk"
					}),
					redditStyle: e.redditStyle
				}, e.rules.map((function(r, n) {
					return i.a.createElement(C, {
						key: `rule${r.shortName}${r.createdUtc}`,
						rule: r,
						display: e.display,
						humanIndex: n + 1,
						isInIcons2020: t
					})
				}))) : null
			};
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
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return Be
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
				b = r("./src/reddit/models/Image/index.tsx"),
				h = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = r("./src/reddit/models/Widgets/index.ts"),
				g = r("./src/reddit/selectors/structuredStyles.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/components/Widgets/Button/index.m.less"),
				w = r.n(v);
			const y = (e, t, r) => {
					let n = {},
						s = {};
					n = e.kind === f.f.Image ? {
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
					if (i.kind === f.f.Image) s = {
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
				_ = e => e.kind === f.f.Image ? w.a.imageButton : w.a.textButton,
				E = e => {
					const t = Object(f.n)(e),
						r = Object(p.h)(p.f, t);
					return r ? r.url : e.url
				},
				O = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: r
					} = e, n = Object(h.a)(e).button;
					return s.a.createElement(c.q, {
						className: _(t),
						style: y(t, r, n),
						isFullWidth: !0,
						size: c.c.S,
						priority: c.b.Secondary
					}, t.kind === f.f.Text && s.a.createElement("span", {
						className: t.hoverState ? w.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === f.f.Text && s.a.createElement("span", {
						className: w.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				j = e => s.a.createElement(l.b, {
					href: E(e.button),
					isSponsored: !1,
					source: null
				}, s.a.createElement(O, e)),
				C = m.a.wrapped(o.a, "RawHTMLDisplay", w.a);
			var k = Object(i.b)(() => Object(a.c)({
					forceRedditStyle: g.l,
					isNightmodeOn: x.V
				}))(e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && s.a.createElement(C, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== f.f.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== f.f.Image || e.hoverState.url !== b.c)).map(t => s.a.createElement(j, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				N = r("./node_modules/fbt/lib/FbtPublic.js"),
				I = r("./src/lib/humanizeDate/index.ts"),
				S = r("./src/reddit/controls/TextButton/index.tsx"),
				P = r("./src/reddit/components/Widgets/Calendar/index.m.less"),
				T = r.n(P);
			const F = 100,
				L = {
					isExpanded: !1
				},
				B = m.a.wrapped(o.a, "RawHTMLDisplay", T.a),
				M = m.a.div("EventContainer", T.a),
				A = m.a.div("EventTitle", T.a),
				D = m.a.div("EventDate", T.a),
				R = m.a.div("EventLocation", T.a),
				W = m.a.div("EventDescription", T.a),
				H = m.a.wrapped(S.a, "ToggleDescription", T.a);
			class z extends s.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = L
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > F ? s.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, F), s.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? N.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : N.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : s.a.createElement(W, null, e.text)
				}
			}
			var q = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, r) => s.a.createElement(M, {
					key: `${r}-${t.title}`
				}, s.a.createElement(A, null, t.titleHtml ? s.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && s.a.createElement(D, null, Object(I.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && s.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						r = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? `${r}:0${n}` : `${r}:${n}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && s.a.createElement(R, null, t.locationHtml ? s.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && s.a.createElement(z, {
					text: t.description
				})))),
				U = r("./src/reddit/components/TrackingHelper/index.tsx"),
				V = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var G = Object(U.c)(e => s.a.createElement(V.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const J = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				Z = Object(i.b)(J),
				Y = (e, t, r) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${r}</body>`;
			class K extends s.a.Component {
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
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Y(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
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
			var $ = Z(K),
				X = r("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				Q = r.n(X);
			var ee = m.a.div("ImageFrame", Q.a),
				te = r("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				re = r.n(te);
			var ne = m.a.img("StyledImage", re.a);
			class se extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === b.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== b.c) return t
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
						n = s.a.createElement(ee, null, s.a.createElement(ne, {
							alt: N.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: r.url
						}));
					return r.linkUrl ? s.a.createElement(l.b, {
						href: r.linkUrl,
						isSponsored: !1,
						source: null
					}, n) : n
				}
			}
			var ie = se,
				ae = r("./src/config.ts"),
				oe = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				de = r("./src/lib/opener/index.ts"),
				ce = r("./src/reddit/components/Flair/index.tsx"),
				le = r("./src/reddit/controls/InternalLink/index.tsx"),
				ue = r("./src/reddit/icons/fonts/Envelope/index.tsx"),
				me = r("./src/reddit/models/Flair/index.ts"),
				pe = r("./src/reddit/selectors/subreddit.ts"),
				be = r("./src/reddit/components/Widgets/Moderator/index.m.less"),
				he = r.n(be);
			const fe = m.a.a("ExternalLink", he.a),
				ge = m.a.div("ModeratorListItem", he.a),
				xe = m.a.div("Username", he.a),
				ve = m.a.wrapped(ce.b, "FlairComponent", he.a),
				we = e => e.authorFlairType === me.f.Richtext ? {
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
				ye = e => s.a.createElement(xe, null, `u/${e}`),
				_e = m.a.wrapped(le.a, "InternalLink", he.a),
				Ee = m.a.div("LinkContainer", he.a),
				Oe = Object(a.c)({
					userIsBanned: pe.eb
				});
			var je = Object(i.b)(Oe)(e => {
					const {
						subredditName: t,
						widget: r,
						userIsBanned: n
					} = e;
					return s.a.createElement(d.a, {
						styles: r.styles,
						title: N.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (r.mods && r.mods.length || n) && s.a.createElement(c.q, {
						kind: c.a.InternalLink,
						priority: c.b.Secondary,
						className: he.a.MessageModsButton,
						rel: de.b,
						target: de.c.BLANK,
						to: `${ae.a.redditUrl}/message/compose?to=/r/${t}`
					}, s.a.createElement(ue.a, {
						className: he.a.MessageModsButtonIcon
					}), N.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), r.mods && r.mods.length && !n ? s.a.createElement(s.a.Fragment, null, r.mods.map(e => s.a.createElement(ge, {
						key: e.name
					}, (e => s.a.createElement(oe.a, {
						to: `/user/${e.name}/`
					}, ye(e.name)))(e), s.a.createElement(ve, {
						flair: we(e),
						forceSmallEmojis: !0
					}))), s.a.createElement(Ee, null, s.a.createElement(_e, {
						to: `/r/${t}/about/moderators/`
					}, N.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n ? s.a.createElement("div", {
						className: he.a.HelpCenterMessage
					}, N.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", s.a.createElement(fe, {
						href: `${ae.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: de.b,
						target: de.c.BLANK
					}, N.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : s.a.createElement("div", {
						className: he.a.UnModeratedSubreddit
					}, N.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", s.a.createElement(fe, {
						href: `${ae.a.redditUrl}/r/redditrequest`,
						rel: de.b,
						target: de.c.BLANK
					}, N.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", N.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Ce = r("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				ke = r("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ne = r("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Ie = r.n(Ne);
			const Se = m.a.div("WidgetContent", Ie.a),
				Pe = m.a.wrapped(o.a, "RawHTMLDisplay", Ie.a);
			var Te = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, s.a.createElement(Se, null, s.a.createElement(Pe, {
					html: e.widget.textHtml || ""
				}))),
				Fe = r("./src/reddit/components/Widgets/Base/index.tsx");
			var Le = e => s.a.createElement(Fe.b, null, "This widget hasn't been implemented yet!");

			function Be(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return je;
						case "textarea":
							return Te;
						case "button":
							return k;
						case "subreddit-rules":
							return ke.b;
						case "community-list":
							return G;
						case "calendar":
							return q;
						case "image":
							return ie;
						case "custom":
							return $;
						case "post-flair":
							return Ce.a;
						default:
							return Le
					}
				}(e.widget);
				return s.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return h
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "j", (function() {
				return g
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "g", (function() {
				return C
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/graphql/operations/AddPredictionDrafts.json"),
				i = r("./src/graphql/operations/CreatePredictionTournament.json"),
				a = r("./src/graphql/operations/EndPredictionTournament.json"),
				o = r("./src/graphql/operations/GetPredictionChipPackages.json"),
				d = r("./src/graphql/operations/GetPredictionCoinPackages.json"),
				c = r("./src/graphql/operations/GetPredictionToken.json"),
				l = r("./src/graphql/operations/GetTournaments.json"),
				u = r("./src/graphql/operations/ResolvePrediction.json"),
				m = r("./src/graphql/operations/SubredditTopPredictors.json"),
				p = r("./src/graphql/operations/UpdatePredictionTournament.json"),
				b = r("./src/graphql/operations/VotePrediction.json");
			const h = (e, t, r) => Object(n.a)(e, {
					...d,
					variables: {
						subredditName: t,
						includeFreePackage: r
					}
				}),
				f = (e, {
					postId: t,
					optionId: r,
					coinPackageId: s,
					price: i
				}) => Object(n.a)(e, {
					...b,
					variables: {
						input: {
							postId: t,
							optionId: r,
							coinPackageId: s,
							price: i
						}
					}
				}),
				g = (e, {
					postId: t,
					optionId: r
				}) => Object(n.a)(e, {
					...u,
					variables: {
						input: {
							postId: t,
							optionId: r
						}
					}
				});
			var x;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(x || (x = {}));
			const v = (e, {
					subredditId: t,
					period: r,
					top: s,
					includeCurrentRank: i,
					tournamentId: a
				}) => Object(n.a)(e, {
					...m,
					variables: {
						subredditId: t,
						period: r,
						top: s,
						includeCurrentRank: i,
						tournamentId: a
					}
				}),
				w = (e, t) => Object(n.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				y = (e, t) => Object(n.a)(e, {
					...l,
					variables: t
				}),
				_ = (e, t) => Object(n.a)(e, {
					...s,
					variables: {
						input: t
					}
				}),
				E = (e, t) => Object(n.a)(e, {
					...p,
					variables: {
						input: t
					}
				}),
				O = (e, t) => Object(n.a)(e, {
					...a,
					variables: {
						input: t
					}
				}),
				j = (e, t) => Object(n.a)(e, {
					...o,
					variables: t
				}),
				C = (e, t) => Object(n.a)(e, {
					...c,
					variables: t
				})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const r = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === n.b.NO_ADS);
				return !r && !s
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/lib/isFakeSubreddit/index.ts"),
				s = r("./src/reddit/constants/postLayout.ts");
			const i = Math.floor(100 * Math.random());
			var a;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(a || (a = {}));
			t.b = (e, t, r, a, o) => {
				const d = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: r,
					layout: s.b[t.prefs.layout]
				};
				return a && !Object(n.a)(a.name) && (d.subreddit = a.name, d.subreddit_screen = !0), d.wls = 6, d.whitelist_status = "all_ads", d.percentage = d.random_number = i, o && (d.position = o), d
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "o", (function() {
				return s
			})), r.d(t, "p", (function() {
				return i
			})), r.d(t, "q", (function() {
				return a
			})), r.d(t, "k", (function() {
				return o
			})), r.d(t, "s", (function() {
				return d
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "n", (function() {
				return l
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "r", (function() {
				return p
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "u", (function() {
				return h
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "w", (function() {
				return g
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "t", (function() {
				return w
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "g", (function() {
				return C
			}));
			var n = r("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "select",
					noun: "poll_option"
				}),
				i = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "select",
					noun: "prediction_option"
				}),
				a = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_info_modal"
				}),
				o = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "close",
					noun: "predict_info_modal"
				}),
				d = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_option_modal"
				}),
				c = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: r
				}) => s => ({
					...Object(n.defaults)(s),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(n.poll)(s, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: r
					}
				}),
				l = ({
					pollId: e,
					selectedNumberTokens: t
				}) => r => ({
					...Object(n.defaults)(r),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(n.poll)(r, e, !1, void 0, void 0, t)
				}),
				u = ({
					pollId: e,
					selectedNumberCoins: t,
					selectedNumberTokens: r
				}) => s => ({
					...Object(n.defaults)(s),
					source: "poll",
					action: "close",
					noun: "prediction_modal",
					poll: Object(n.poll)(s, e, !1, t, r)
				}),
				m = e => ({
					...Object(n.defaults)(e),
					source: "poll",
					action: "click",
					noun: "add_coins"
				}),
				p = e => t => ({
					...Object(n.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				b = ({
					targetUserId: e
				}) => t => ({
					...Object(n.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				h = ({
					numberPredictionTokens: e,
					pollId: t
				}) => r => ({
					...Object(n.defaults)(r),
					source: "poll",
					action: "view",
					noun: "token_claim_modal",
					poll: Object(n.poll)(r, t, !1, void 0, void 0, e)
				}),
				f = ({
					pageType: e
				}) => t => ({
					...Object(n.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				g = () => e => ({
					...Object(n.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				x = () => e => ({
					...Object(n.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				v = () => e => ({
					...Object(n.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				w = () => e => ({
					...Object(n.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				y = () => e => ({
					...Object(n.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				_ = () => e => ({
					...Object(n.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				E = () => e => ({
					...Object(n.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "next"
				}),
				O = () => e => ({
					...Object(n.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "add_more"
				}),
				j = () => e => ({
					...Object(n.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "start_tournament"
				}),
				C = () => e => ({
					...Object(n.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
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
				return f
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "o", (function() {
				return j
			}));
			var n = r("./src/reddit/models/SubredditWikiPage/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					...s.defaults(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
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
				c = (e = !1) => d(e ? "create_wiki_page" : "save_wiki_page"),
				l = d("compare_wiki_pages"),
				u = d("revert_wiki_page"),
				m = d("view_wiki_page"),
				p = d("view_source"),
				b = d("add_wiki_page_contributor"),
				h = d("remove_wiki_page_contributor"),
				f = d("save_wiki_page_settings"),
				g = d("copy_url"),
				x = d("add_wiki_subreddit_contributor"),
				v = d("remove_wiki_subreddit_contributor"),
				w = d("ban_wiki_contributor"),
				y = d("unban_wiki_contributor"),
				_ = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				E = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				O = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: s.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				j = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: s.actionInfo(t, {
						settingValue: E[e]
					})
				})
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = n.Z
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, r) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				o = r("./src/reddit/icons/fonts/Envelope/index.m.less"),
				d = r.n(o);
			t.a = e => {
				const t = Object(i.a)();
				return s.a.createElement("i", {
					className: `${Object(a.b)(t?"message":"envelope",e.isFilled)} ${d.a.Envelope} ${e.className}`
				})
			}
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, r) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/Menu/index.m.less"),
				o = r.n(a);
			const d = r("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(i.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", o.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
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
				id: e.id
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
			const o = e => s.e[Object(i.O)(e, {})] === s.d.Card,
				d = e => Object(a.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: n.N
				}) === n.fb.Treatment
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/predictions/index.ts"),
				i = r("./src/reddit/selectors/postCreations.ts");
			Object(n.a)({
				features: {
					predictions: s.a
				}
			});
			const a = e => {
					const t = (e => {
						var t, r;
						return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const r = Object(i.cb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							n = t.formData.polls,
							s = n.options.map(e => ({
								text: e.text
							})),
							a = {};
						return r.document ? a.richText = JSON.stringify({
							document: r.document
						}) : r.markdown && (a.markdown = r.markdown), {
							title: r.title,
							isLiveChat: r.isChatPost,
							isNsfw: r.isNSFW,
							isSpoiler: r.isSpoiler,
							votingEndsAt: n.endDate.toISOString(),
							body: a,
							options: s
						}
					}) : []
				},
				o = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation.length)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.3c29c4ca3c9c763fc2c7.js.map