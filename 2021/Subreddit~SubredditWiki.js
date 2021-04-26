// https://www.redditstatic.com/desktop2x/Subreddit~SubredditWiki.cce0b8de14b19be08b24.js
// Retrieved at 4/26/2021, 7:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit~SubredditWiki"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Svg/index.m.less"),
				d = n.n(o);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: a
					} = e;
				return s.a.createElement("svg", {
					className: Object(i.a)(e.className, {
						[d.a.disable]: n,
						[d.a.active]: r,
						[d.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", d.a)
		},
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
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";

			function r(e, t, n, r) {
				const s = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: r ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(s)
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "i", (function() {
				return C
			}));
			var r = n("./node_modules/linkify-it/index.js"),
				s = n.n(r),
				i = n("./node_modules/tlds/index.js"),
				a = n.n(i),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				d = n("./node_modules/lodash/values.js"),
				c = n.n(d);
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
				g = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				f = s()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				x = s()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subredditFullUrl.config).add(o.g.subredditFull.prefix, o.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const y = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				_ = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				E = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				C = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const i = Object(s.e)(e),
					a = encodeURIComponent(`${t}${i}`);
				return `${r.a.accountManagerOrigin}${n||"/login"}?dest=${a}`
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = e => {
					let t = 0,
						n = 0;
					const r = [0];
					for (const s of e) t++, n += s.length, r[t] = n;
					return r
				},
				s = e => {
					let t = 0,
						n = 0;
					const r = [];
					for (const s of e) {
						for (let e = 0; e < s.length; e++) r[n] = t, n++;
						t++
					}
					return r[n] = t, r
				}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return _
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "l", (function() {
				return N
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "n", (function() {
				return F
			})), n.d(t, "i", (function() {
				return M
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "e", (function() {
				return D
			}));
			var r = n("./node_modules/uuid/index.js"),
				s = n.n(r),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/predictions/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/endpoints/economics/predictions.ts"),
				c = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				l = n("./src/reddit/models/Poll/index.ts"),
				u = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				g = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				f = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(i.a)({
				features: {
					predictions: a.a
				}
			});
			const x = Object(o.a)(f.d),
				v = Object(o.a)(f.h),
				y = Object(o.a)(f.g),
				_ = (e, t, n, r) => async (s, i, {
					gqlContext: a
				}) => {
					const o = Object(b.J)(i()),
						c = await Object(d.h)(a(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: o,
							tournamentId: r
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
				}, E = e => async (t, n, {
					gqlContext: r
				}) => {
					const s = n(),
						i = Object(m.P)(s, {
							postId: e,
							disallowProfile: !0
						});
					if (!i) throw new Error("Post does not belong to a subreddit");
					const a = await Object(d.f)(r(), i.name, Object(u.e)(s));
					if (a.error || !a.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: o
					} = a.body.data;
					if (!o || !o.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return o.predictionCoinPackages
				}, C = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: r
				}) => async (s, i, {
					gqlContext: a
				}) => {
					const o = await Object(d.l)(a(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: r
					});
					if (o.error || !o.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: c
					} = o.body.data;
					if (!c) throw new Error("Failed to create prediction vote");
					return s(v({
						pollId: n,
						prediction: c.poll,
						price: r
					})), c.poll
				}, O = ({
					optionId: e,
					postId: t
				}) => async (n, r, {
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
					return n(y({
						pollId: t,
						prediction: a.poll
					})), a.poll
				}, k = Object(o.a)(f.b), w = Object(o.a)(f.c), j = Object(o.a)(f.f), S = e => async (t, n, {
					gqlContext: r
				}) => {
					const s = n(),
						i = Object(p.F)(s, e);
					if (Object(g.i)(s, {
							subredditId: i
						})) return Object(g.e)(s, {
						subredditId: i
					});
					t(k({
						subredditId: i
					}));
					const a = await Object(d.i)(r(), {
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
							var t, n;
							const r = null !== (n = null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.map(e => {
								const t = Object(c.e)(e),
									n = t.pollData;
								return {
									...t,
									pollData: n
								}
							})) && void 0 !== n ? n : [];
							return {
								...e,
								predictionPosts: r
							}
						}),
						u = l.reduce((e, t) => (t.predictionPosts.length && t.predictionPosts.forEach(t => {
							e[t.id] = t
						}), e), {});
					return t(w({
						subredditId: i,
						tournaments: l
					})), t(j({
						posts: u,
						meta: s.meta
					})), l
				}, I = Object(o.a)(f.a), N = Object(o.a)(f.i), P = Object(o.a)(f.j), T = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: r
				}) => {
					const s = n(),
						i = Object(h.b)(s),
						a = Object(u.a)(s);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const o = await Object(d.c)(r(), {
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
					return t(w({
						subredditId: e,
						tournaments: [m]
					})), m
				}, L = (e, t) => async (n, r, {
					gqlContext: i
				}) => {
					var a;
					const o = Object(h.b)(r());
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
				}, B = Object(o.a)(f.k), F = (e, t, n) => async (r, s, {
					gqlContext: i
				}) => {
					const a = await Object(d.k)(i(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: o
						} = a.body.data;
					if (!o.tournament) throw new Error("Failed to update prediction name");
					return r(B({
						subredditId: t,
						tournament: o.tournament
					})), o.tournament
				}, M = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					const i = await Object(d.d)(s(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: a
						} = i.body.data;
					if (!a.tournament) throw new Error("Failed to update prediction name");
					return n(B({
						subredditId: t,
						tournament: a.tournament
					})), a.tournament
				}, R = e => async (t, n, {
					gqlContext: r
				}) => {
					const s = await Object(d.e)(r(), {
						postId: e
					});
					if (!s.ok || s.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = s.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, D = e => async (t, n, {
					gqlContext: r
				}) => {
					const s = await Object(d.g)(r(), {
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
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/blade.ts"),
				c = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(s.a)(a.t),
				g = Object(s.a)(a.u),
				f = Object(s.a)(a.s),
				x = (e, t, n) => async (r, s, i) => {
					const a = Object(p.A)(s(), {
						subredditName: e
					});
					if (a) return y(a, t, n)(r, s, i)
				}, v = () => r.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), y = (e, t, n) => async (s, a, p) => {
					const x = await Object(l.e)(t);
					s(h());
					const y = a();
					try {
						await Object(i.g)("communityIcon", x, e.id)(s, a, p)
					} catch (E) {
						return Object(b.a)(Object(c.c)(y, "something went wrong with the uploading the image")), s(Object(o.f)({
							kind: u.b.Error,
							text: v()
						})), void s(f())
					}
					const _ = Object(m.c)(a(), {
						name: "communityIcon"
					});
					if (!_) return Object(b.a)(Object(c.c)(y, "image is null")), s(Object(o.f)({
						kind: u.b.Error,
						text: v()
					})), void s(f());
					await Object(i.k)(e.id, {
						communityIcon: _
					}, d.b.idCard, n)(s, a, p), s(Object(o.f)({
						kind: u.b.SuccessCommunity,
						text: r.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), s(g())
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				i = n("./node_modules/react-router-redux/es/index.js");
			const a = (e, t = !0) => async (n, a, {
				routes: o
			}) => {
				const d = a();
				Object(r.a)(e, o, d) ? n(Object(i.b)(e)) : t ? Object(s.d)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/config.ts"),
				d = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/doubleclickForPublishers/index.ts"),
				u = n("./src/lib/intersectionObserver/index.ts"),
				m = n("./src/lib/objectSelector/index.ts"),
				p = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				f = n("./src/reddit/components/BannerAd/index.m.less"),
				x = n.n(f),
				v = n("./src/lib/lessComponent.tsx");
			const y = v.a.div("Container", x.a),
				_ = v.a.div("LoadingHitbox", x.a),
				E = e => setTimeout(() => {
					throw e
				}, 0);
			class C extends s.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1, this.refreshedOnce = !1, this.refreshInterval = null
				}
				componentDidCatch(e) {
					E(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: n,
						sizes: r = []
					} = this.props;
					try {
						return this.frame && l.a(this.frame, {
							id: e,
							slot: t,
							properties: n,
							sizes: r
						})
					} catch (s) {
						E(s)
					}
				}
				destroySlot() {
					try {
						this.refreshInterval && window.clearInterval(this.refreshInterval), this.frame && l.b(this.frame)
					} catch (e) {
						E(e)
					}
				}
				refreshPeriodically() {
					this.props.isRefreshableAd && null != this.props.incrementRefreshCounter && null != this.props.refreshCount && (this.props.refreshCount >= o.a.dfpRefreshSlotIntervalLimit ? (this.refreshInterval && window.clearInterval(this.refreshInterval), this.refreshInterval = null) : (this.refresh(this.props), this.props.incrementRefreshCounter()))
				}
				async componentDidMount() {
					this.props.sendEvent(Object(g.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						E(e)
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
						className: n
					} = this.props;
					return t ? s.a.createElement(y, {
						"data-slot": t
					}, s.a.createElement(_, {
						key: `${e}-loadinghitbox`,
						innerRef: e => {
							this.loader = e
						}
					}), s.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: `${e}-div`,
						className: n,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : s.a.createElement("div", {
						className: n
					})
				}
			}
			C.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(i.b)(() => Object(a.c)({
				properties: Object(m.a)((e, t) => {
					const n = e.platform.currentPage;
					if (!n) return {};
					const r = `${e.meta.protocol}://${e.meta.domain}`;
					return Object(p.b)(t.placement, e.user, Object(d.a)(`${r}${n.url}`, n.queryParams), Object(b.A)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const n = e.platform.currentPage;
					return n && n.meta ? l.c(t.listingName, n.meta.name) : ""
				}
			}))(Object(h.c)(C))
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				Planet: "ixfotyd9YXZz0LNAtJ25N",
				planet: "ixfotyd9YXZz0LNAtJ25N",
				DefaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				defaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/subredditWelcomeMessage.ts"),
				u = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				m = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				p = n("./src/reddit/components/SubredditNav/index.tsx"),
				b = n("./src/reddit/components/SubscribeButton/index.tsx"),
				h = n("./src/reddit/constants/postLayout.ts"),
				g = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				v = n("./src/reddit/constants/tracking.ts"),
				y = n("./src/reddit/selectors/telemetry.ts");
			var _ = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				E = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var O = e => s.a.createElement("svg", C({
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, e), s.a.createElement("path", {
					d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
				})),
				k = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/selectors/widgets.ts"),
				S = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				I = n.n(S);
			const N = c.a.wrapped(E.a, "Planet", I.a),
				P = c.a.img("SubredditIcon", I.a),
				T = Object(a.c)({
					spPollsEnabled: f.d.spPolls,
					subredditInlineEditingEnabled: (e, {
						subredditId: t
					}) => Object(k.a)(e, {
						subredditId: t
					}),
					tournamentsEnabled: (e, {
						subredditId: t
					}) => !!t && Object(w.N)(e, {
						subredditId: t
					}),
					userIsSubscriber: (e, {
						subredditName: t
					}) => {
						const n = t;
						return Object(w.gb)(e, {
							identifier: {
								name: n,
								type: "subreddit"
							}
						})
					},
					widget: (e, {
						subredditId: t
					}) => t ? Object(j.f)(e, {
						subredditId: t
					}) : void 0
				});
			t.a = Object(i.b)(T, (e, t) => ({
				_onOpenWelcomeMessageModal: () => {
					var n;
					const r = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (r) return e(Object(l.d)(r))
				}
			}), (e, t, n) => ({
				...e,
				...t,
				...n,
				onOpenWelcomeMessageModal: () => !e.userIsSubscriber && t._onOpenWelcomeMessageModal()
			}))(Object(d.a)(e => {
				const t = Object(_.a)(),
					n = e.subreddit ? e.subreddit.id : e.subredditId,
					r = e.subreddit ? e.subreddit.name : e.subredditName,
					i = e.subreddit ? e.subreddit.url : e.subredditUrl,
					a = e.subreddit ? e.subreddit.title : "",
					d = e.subreddit && Object(x.a)(e),
					c = !(!e.theme || !d),
					l = r.charAt(0).toUpperCase() + r.slice(1),
					f = !!e.subreddit && e.subredditInlineEditingEnabled,
					E = Object(o.a)(I.a.SubredditIcon, I.a.editableIcon, {
						[I.a.emptyEditableIcon]: !d
					}),
					C = s.a.createElement(m.a, {
						className: E,
						subreddit: e.subreddit,
						iconUrl: d || void 0,
						inTopBar: !0
					}),
					k = c ? s.a.createElement(P, {
						src: d || void 0
					}) : t ? s.a.createElement(O, {
						className: I.a.DefaultIcon
					}) : s.a.createElement(N, null),
					w = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					j = e.layout ? e.layout === h.g.Large ? "984px" : "100%" : "1086px";
				return s.a.createElement("div", {
					className: I.a.container,
					style: {
						maxWidth: j
					}
				}, s.a.createElement("div", {
					className: I.a.subredditMetaContainer
				}, f ? C : k, s.a.createElement("div", {
					className: Object(o.a)(I.a.textContainer, {
						[I.a.textContainerNoIcon]: !c
					})
				}, s.a.createElement("div", {
					className: I.a.text
				}, s.a.createElement("h1", {
					className: I.a.title
				}, a || l), !!a && s.a.createElement("h2", {
					className: I.a.description
				}, "r/", r)), s.a.createElement("div", {
					className: I.a.subscribeButtonContainer
				}, s.a.createElement(b.a, {
					className: I.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => ({
							...y.defaults(t),
							source: "id_banner",
							action: v.c.CLICK,
							noun: e,
							subreddit: y.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: r,
						type: g.a.SUBREDDIT
					},
					onClick: e.onOpenWelcomeMessageModal,
					small: !0
				})), e.subreddit && s.a.createElement(u.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), w && s.a.createElement(p.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: i,
					subredditId: n,
					subredditNavContainerClassName: I.a.subredditNavContainer
				}))
			}))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = n("./src/reddit/components/Footer/index.m.less"),
				g = n.n(h);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = c.a.div("FooterContainer", g.a), v = c.a.div("UserAgreement", g.a), y = c.a.a("UserAgreementLink", g.a), _ = c.a.a("PrivacyLink", g.a);
			var E = () => i.a.createElement(x, null, i.a.createElement(v, null, f._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [f._param("=User Agreement", i.a.createElement(y, {
					href: `${r.a.redditUrl}/help/useragreement`
				}, f._("User Agreement", null, {
					hk: "2srkM2"
				}))), f._param("=Privacy Policy", i.a.createElement(_, {
					href: `${r.a.redditUrl}/help/privacypolicy`
				}, f._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), f._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				C = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				O = n("./src/reddit/components/RichTextJson/index.tsx"),
				k = n("./node_modules/lodash/flatMap.js"),
				w = n.n(k),
				j = n("./src/lib/linkMatchers/index.ts"),
				S = n("./src/lib/linkMatchers/customLinks.ts"),
				I = n("./src/reddit/controls/OutboundLink/index.tsx");
			const N = /\[(.+?)\]\((.+?)\)/g,
				P = e => {
					const t = e.split(N);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, s, i] = t.slice(r, r + 3);
						n.push(e), n.push([i, s])
					}
					return n
				};
			var T = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = w()(t, P)), e.parseRegularLinks && (t = w()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = j.f.add(S.g.subreddit.prefix, S.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const s of t) n.push(e.slice(r ? r.lastIndex : 0, s.index)), r = s, n.push([s.url, s.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, s] = t;
							return i.a.createElement(I.b, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: n,
								source: null
							}, s)
						}
						return i.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				L = n("./src/reddit/contexts/PageLayer/index.tsx"),
				B = n("./src/reddit/controls/Button/index.tsx"),
				F = n("./src/chat/controls/Svg/index.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var R = e => i.a.createElement(F.a, M({}, e, {
					viewBox: "-1 -1 21 21"
				}), i.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				D = n("./src/reddit/models/ContentGate.ts"),
				A = n("./src/lib/constants/index.ts"),
				H = n("./src/reddit/selectors/platform.ts"),
				W = n("./src/reddit/selectors/user.ts");
			var U = n("./src/reddit/selectors/meta.ts"),
				V = n("./src/reddit/components/ContentGate/index.m.less"),
				q = n.n(V);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = c.a.wrapped(R, "PrivateKey", q.a), J = c.a.div("ButtonsContainer", q.a), Y = c.a.div("Container", q.a), K = c.a.div("Description", q.a), Z = c.a.div("PrivateSubredditDetails", q.a), X = c.a.div("PrivateSubredditDescription", q.a), Q = c.a.h3("PrivateSubredditName", q.a), $ = c.a.a("Link", q.a), ee = c.a.wrapped(B.k, "LinkRouterButton", q.a), te = c.a.wrapped(B.j, "LinkButton", q.a), ne = c.a.wrapped(B.n, "SecondaryLinkRouterButton", q.a), re = c.a.wrapped(B.m, "SecondaryLinkButton", q.a), se = c.a.wrapped(ee, "GoHomeLinkButton", q.a), ie = c.a.img("Image", q.a), ae = c.a.img("ImagePlaceholder", q.a), oe = c.a.wrapped(ee, "LeftLinkRouterButton", q.a), de = c.a.wrapped(te, "LeftLinkButton", q.a), ce = c.a.wrapped(re, "SecondaryLeftLinkButton", q.a), le = c.a.wrapped(ne, "SecondaryLeftLinkRouterButton", q.a), ue = c.a.h3("Title", q.a), me = c.a.div("PageBody", q.a), pe = c.a.div("QuarantineMessageWrapper", q.a), be = Object(d.c)({
				isLoggedIn: W.I,
				origin: U.i,
				user: W.i,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(W.J)(e)) return !1;
					const t = Object(H.d)(e);
					if (!t) return !1;
					const n = Object(W.e)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const s = 30 * A.x;
					return r > Date.now() - s
				})(e)
			}), he = Object(L.t)(), ge = Object(a.b)(be, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), fe = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: s,
					isLoggedIn: a,
					isContributorRequestsDisabled: o,
					isPrivateSubredditContributorRequestPending: d,
					location: c,
					origin: m,
					pageLayer: h,
					quarantineRequiresEmail: g,
					quarantineMessage: f,
					quarantineMessageHtml: x,
					quarantineMessageRTJson: v,
					setNSFWPreference: y,
					subredditDescription: _,
					subredditName: E,
					user: k
				} = e, w = async () => {
					a ? await y() : await Object(u.k)(), window.location.reload()
				};
				switch (n) {
					case D.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(ue, null, z._("r/{community name} is a Reddit Premium community", [z._param("community name", E)], {
							hk: "2lyDwB"
						})), i.a.createElement(K, null, z._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(J, null, k ? i.a.createElement(ce, {
							href: `${r.a.redditUrl}/premium`
						}, z._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(de, {
							href: Object(l.a)(c, m)
						}, z._("Sign Up", null, {
							hk: "rvpjy"
						})), k ? i.a.createElement(ee, {
							to: "/"
						}, z._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(re, {
							href: Object(l.a)(c, m)
						}, z._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case D.a.Nsfw:
					case D.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(ue, null, n === D.a.Nsfw ? z._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : z._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(K, null, z._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(J, null, i.a.createElement(oe, {
							to: "/"
						}, z._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(re, {
							onClick: w
						}, z._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case D.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(G, null), i.a.createElement(ue, null, "r/", E, " ", z._("is a private community", null, {
							hk: "7zZmq"
						})), _ && _.length && i.a.createElement(Z, null, i.a.createElement(Q, null, "r/", E), i.a.createElement(X, null, i.a.createElement("div", null, _))), i.a.createElement(K, null, z._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", E, " ", z._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), z._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(J, null, k ? i.a.createElement(i.a.Fragment, null, !o && i.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: q.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), i.a.createElement(ce, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${E}`
						}, z._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(ce, {
							href: Object(l.a)(c, m)
						}, z._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(ee, {
							to: "/"
						}, z._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case D.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), i.a.createElement(ue, null, z._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(K, null, z._("This community is {=quarantined}", [z._param("=quarantined", i.a.createElement($, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, z._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), i.a.createElement(pe, null, v ? i.a.createElement(O.a, {
							content: v,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : x ? i.a.createElement(C.a, {
							html: x
						}) : f || z._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), z._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(J, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? i.a.createElement(J, null, i.a.createElement(le, {
								to: "/"
							}, z._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(te, {
								href: `${r.a.redditUrl}/prefs/update`
							}, z._("Verify Email", null, {
								hk: "1893cq"
							}))) : i.a.createElement(J, null, i.a.createElement(oe, {
								to: "/"
							}, z._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(re, {
								onClick: t
							}, z._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(k, s, g)));
					case D.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(ue, null, z._("r/{community name} has been banned from Reddit", [z._param("community name", E)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(K, null, e ? i.a.createElement(T, {
							linkClassName: q.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : z._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(J, null, i.a.createElement(ee, {
							to: "/"
						}, z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(J, null, i.a.createElement(ee, {
							to: "/"
						}, z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ae, null), i.a.createElement(ue, null, z._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(K, null, z._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(J, null, k && i.a.createElement(b.a, {
							eventSource: "content_gate"
						}), i.a.createElement(se, {
							to: "/"
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.ProfileDoesNotExist:
					case D.a.ProfileDeleted:
					case D.a.ProfileSuspended:
					case D.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case D.a.ProfileBlockedForLegalReason:
									return z._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case D.a.ProfileDeleted:
									return z._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case D.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, z._("This account has been {=suspended} .", [z._param("=suspended", i.a.createElement($, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, z._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case D.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(ue, null, z._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(K, null, z._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(J, null, i.a.createElement(se, {
							to: "/"
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, z._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(J, null, i.a.createElement(se, {
							to: "/"
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(J, null, i.a.createElement(ee, {
							to: "/"
						}, z._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = he(ge(Object(o.i)(e => i.a.createElement(Y, null, i.a.createElement("div", null, i.a.createElement(me, null, fe(e))), i.a.createElement(E, null)))))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = s
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(h),
				f = n("./src/lib/lessComponent.tsx");
			const x = "create-community-button",
				v = f.a.wrapped(c.c, "StyledTooltip", g.a),
				y = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.gb)(e),
					userIsSuspended: b.O
				});
			t.a = Object(a.b)(y, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(p.b)(t)), e(Object(m.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: x
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: s,
				openCommunityCreation: a,
				sendEvent: o,
				userDoesNotHaveEnoughExpToCreateCommunity: d,
				userIsSuspended: c
			}) => i.a.createElement(u.l, {
				className: e,
				disabled: c || d,
				onClick: () => a(o),
				onMouseEnter: n,
				onMouseLeave: s,
				id: x,
				isFullWidth: !0
			}, r.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), d ? i.a.createElement(v, {
				caretOnTop: !0,
				tooltipId: x,
				text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : c ? i.a.createElement(v, {
				caretOnTop: !0,
				tooltipId: x,
				text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_23HWOAAvtr9XUARUICwS1l",
				button: "_1FQRn1pPshYj4hu7mq9APN",
				ChatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				chatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				headerButton: "VjmtSca9g92ay_XMP6rCV",
				buttonCaption: "_3iAPYhncpDFRVQFe9wprJs"
			}
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/downToChat.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				u = n("./src/reddit/selectors/downToChat.ts"),
				m = n("./src/reddit/selectors/experiments/downToChat.ts"),
				p = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				b = n.n(p);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = Object(a.c)({
				isDownToChatExperimentEnabled: m.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(u.c)(e, t.id)
			}), f = Object(i.b)(g, e => ({
				startChatting: t => e(Object(o.i)(t))
			}));
			t.a = f(Object(d.c)(e => {
				const {
					headerButton: t,
					isEnabled: n,
					isDownToChatExperimentEnabled: r
				} = e;
				if (!n || !r) return null;
				const i = h._("Start Chatting", null, {
					hk: "3KfdZ4"
				});
				return s.a.createElement(c.q, {
					className: b.a.button,
					text: i,
					Icon: t ? l.a : void 0,
					onClick: () => {
						const {
							startChatting: t,
							subreddit: n
						} = e;
						t(n.id)
					},
					redditStyle: !0
				})
			}))
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(n.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const i = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("EconomicsSubredditPremiumSidebarCards").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(s.a)("spSpecialMemberships", i)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/config.ts"),
				d = n("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = n.n(d),
				l = n("./src/lib/lessComponent.tsx");
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
								n = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, n), this.setState({
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
						sentOncePerRender: n
					} = this.state, i = n ? a.a.createElement(m, {
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
						"data-before-content": r.fbt._("advertisement", null, {
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
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-CommunityCard").then(n.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-Leaderboard").then(n.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const i = Object(r.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				a = Object(s.a)("spBurnLinks", Object(r.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/constants/screenWidths.ts"),
				l = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/components/HeaderImage/index.m.less"),
				h = n.n(b);
			const g = d.a.wrapped(u.a, "Planet", h.a),
				f = d.a.div("SubredditIcon", h.a),
				x = d.a.div("PositionedImage", h.a),
				v = d.a.div("HeaderContent", h.a),
				y = d.a.div("HeaderContainer", h.a),
				_ = d.a.span("HeaderText", h.a),
				E = d.a.wrapped(i.a, "HeaderUrl", h.a),
				C = d.a.span("Container", h.a),
				O = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						n = Object(l.a)(e),
						r = Object(p.a)(e).banner.positionedImageAlignment,
						i = Object(p.a)(e).banner.positionedImage,
						o = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (r) {
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
					const u = !!i && !!o && "left" === r,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						O = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						k = `${4+O}px`;
					return s.a.createElement(C, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, s.a.createElement(E, {
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
					}, !e.isTopBannerVariant && s.a.createElement(v, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (n ? s.a.createElement(f, {
						style: {
							backgroundImage: `url(${n})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: k,
							width: k
						}
					}) : s.a.createElement(g, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: k,
							width: k
						}
					})), s.a.createElement(_, {
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
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/components/IdCard/index.m.less"),
				a = n.n(i);
			const o = s.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return s.a.createElement("div", {
					className: a.a.Banner,
					style: t && t.length ? {
						backgroundImage: `url(${t})`
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/config.ts"),
				i = n("./src/reddit/constants/listings.ts"),
				a = n("./src/reddit/constants/page.ts");
			const o = e => e && e.toLowerCase() === i.b.Popular,
				d = e => e && e.toLowerCase() === i.b.All,
				c = e => e && e === a.b,
				l = (e, t = 40, n = 68) => ({
					height: n,
					image: e,
					width: t
				}),
				u = ({
					listingName: e,
					subreddit: t,
					idCardWidget: n
				}) => {
					let a, u, m, p, b;
					const h = n && n.subscribersText || r.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						g = n && n.currentlyViewingText || r.fbt._("Online", null, {
							hk: "36JX70"
						});
					let f, x;
					return c(e) ? (a = `${s.a.assetPath}/img/id-cards/home-banner@2x.png`, m = l(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = i.c[i.b.Home], u = r.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = r.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(e) ? (a = `${s.a.assetPath}/img/id-cards/banner@2x.png`, u = r.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), m = l(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", b = i.c[i.b.All]) : o(e) ? (a = `${s.a.assetPath}/img/id-cards/banner@2x.png`, u = r.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), m = l(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", b = i.c[i.b.Popular]) : e && (u = n && n.description, m = l(""), p = t.displayText, b = t.url, x = n && n.subscribersCount, f = n && n.currentlyViewingCount), {
						snooBackground: m,
						description: u,
						titleText: p,
						url: b,
						subscribersCount: x,
						subscribersText: h,
						currentlyViewingText: g,
						currentlyViewingCount: f,
						...a ? {
							bannerBackgroundImage: a
						} : {}
					}
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, n) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/IdCard/index.m.less"),
				o = n.n(a);
			const d = ({
				snooBackground: e
			}) => s.a.createElement("div", {
				className: o.a.AdorableSnoo,
				style: {
					background: e.image,
					backgroundSize: `${e.width}px ${e.height}px`,
					height: e.height,
					width: e.width
				}
			});
			t.a = ({
				titleText: e,
				snooBackground: t
			}) => s.a.createElement("div", {
				className: Object(i.a)(o.a.Title, o.a.TitleShifted)
			}, s.a.createElement(d, {
				snooBackground: t
			}), s.a.createElement("div", {
				className: o.a.TitleTextShiftedContainer
			}, s.a.createElement("span", {
				className: o.a.TitleText
			}, e)))
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "i", (function() {
				return S
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./node_modules/lodash/isNil.js"),
				d = n.n(o),
				c = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...r
							}
						} = this;
						l.a.publish(c.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					d()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					d()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? s.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && s.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(i.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				g = n("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const n = Object(h.a)(e, t),
					r = Object(g.I)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var x = Object(i.b)(() => Object(a.a)(f, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => s.a.createElement(p, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const v = (e, t) => {
				const n = Object(h.a)(e, t),
					r = Object(g.I)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var y = Object(i.b)(() => Object(a.a)(v, e => e))(e => s.a.createElement(p, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var _ = Object(i.b)(() => Object(a.c)({
					subreddit: g.T
				}))(e => s.a.createElement(p, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				E = n("./src/reddit/hooks/usePostContext.ts");
			var C = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(E.a)(), i = Object(r.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					created: t.created,
					numComments: t.numComments,
					distinguishType: t.distinguishType,
					domain: t.source && t.source.displayText,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					sourceUrl: t.source && t.source.url,
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return s.a.createElement(p, {
					className: e.className,
					type: "post",
					data: i
				})
			};
			var O = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: i
				} = Object(E.a)(), a = Object(r.useMemo)(() => ({
					author: t.author,
					isModerator: i,
					post: {
						id: t.id
					},
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {}
				}), [t, n, i]);
				return s.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: a
				})
			};
			var k = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(E.a)(), i = Object(r.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					distinguishType: t.distinguishType,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					numComments: t.numComments,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return s.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: i
				})
			};
			var w = Object(i.b)(() => Object(a.c)({
				subreddit: g.T
			}))(e => s.a.createElement(p, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var j = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(g.L)(e, {
					identifier: t
				})
			}))(e => s.a.createElement(p, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var S = Object(i.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(g.T)(e, {
					subredditId: t
				}) : null
			}))(e => s.a.createElement(p, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				g = Object(i.b)(() => Object(a.c)({
					isNightmodeOn: m.V
				}));
			t.a = g(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(o.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					r = {
						overflow: "hidden"
					};
				return r.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (r.margin = "0 auto"), e.isListing || (r.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (r.maxHeight = e.maxHeight || void 0), s.a.createElement("iframe", {
					className: Object(d.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: n,
					style: r,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				unblurButtonContainer: "c1UAj_LbgdGBuJFlKbnrQ",
				unblurButton: "_2Ws3wFSVPzJhnW46FsoxLv"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/elementClassNames.ts"),
				h = n("./src/reddit/controls/OutboundLink/index.tsx"),
				g = n("./src/reddit/models/Media/index.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/constants/tracking.ts"),
				y = n("./src/reddit/components/Media/blurredContent.ts"),
				_ = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				E = n.n(_);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => e > 2 * g.e,
				k = e => {
					const t = Object(c.a)(E.a.image, b.g, e.className, {
							[E.a.mShowCentered]: e.showCentered,
							[E.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${g.j}px`), e.isListing || e.isTall && O(e.height) || (n.maxHeight = `${g.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), i.a.createElement("img", {
						alt: e.altText || r.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				w = e => {
					const t = {};
					return (!e.showFull && Object(g.I)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${g.j}px`, e.shouldBlur && (t.maxWidth = Object(g.I)(e.height, e.width) ? `${g.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(c.a)(E.a.container, e.className),
						style: t
					}, e.children)
				},
				j = Object(a.b)(() => Object(d.a)(f.C, x.bb, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(f.b)(e, n) : null, (e, t, n) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n
				})));
			t.a = j(e => e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
				href: e.outboundUrl,
				target: "_blank",
				rel: u.a,
				onMouseDown: t => {
					e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(h.c)(t.currentTarget, e.postId, e.basePixelMetadata)
				}
			}, I(e)) : e.isListing && e.postPermalink ? i.a.createElement(o.a, {
				target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
				to: Object(m.a)(e.postPermalink)
			}, I(e)) : I(e));
			const S = (e, t) => i.a.createElement(k, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[v.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				I = ({
					onClick: e,
					...t
				}) => {
					const n = Object(g.I)(t.height, t.width),
						s = O(t.height) && n;
					return i.a.createElement(w, C({}, t, {
						className: `${n?`${v.a} `:""}${t.className||""}`
					}), t.isListing ? i.a.createElement("div", {
						className: t.contentImageClassName
					}, S(n, t)) : i.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: s ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.b
					}, S(n, t)), t.isListing && !t.showFull && t.height > g.j && Object(g.I)(t.height, t.width) && i.a.createElement("div", {
						className: E.a.seeMore
					}, r.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && i.a.createElement(p.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && i.a.createElement("div", {
						className: E.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: E.a.unblurButton
					}, Object(y.a)(!!t.isNSFW, !!t.isSpoiler))))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/forceHttps/index.ts"),
				o = n("./src/reddit/models/Media/index.ts"),
				d = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = n.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < o.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					r = e.blurSrc ? s.a.createElement("img", {
						className: c.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					d = Object(o.B)(e.height, e.width, e.forceAspectRatio);
				return s.a.createElement("div", {
					className: Object(i.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, r, !e.isGalleryTileLayout && s.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), s.a.createElement("div", {
					className: Object(i.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends s.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return s.a.Children.only(this.props.children) || s.a.createElement("div", null)
					}
					return s.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const h = 100,
				g = h / 2 / 1e3;
			var f = n("./src/lib/forceHttps/index.ts");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class v extends a.a.Component {
				constructor(e) {
					super(e), this.toggle = e => {
						if (e) {
							const e = this.play();
							e && e.catch && e.catch(() => {})
						} else this.pause()
					}, this.ref = null
				}
				play() {
					if (this.ref && this.ref.play) return this.ref.play()
				}
				pause() {
					if (this.ref && this.ref.pause) return this.ref.pause()
				}
				componentDidMount() {
					this.initEventHandlers(), this.toggle(!this.props.shouldPause && (this.props.autoplay || this.props.isNotCardView))
				}
				componentWillUnmount() {
					this.destroyEventHandlers()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.shouldPause !== e.shouldPause && this.toggle(!e.shouldPause && (e.autoplay || e.isNotCardView))
				}
				destroyEventHandlers() {
					this.ref && this.cancelBufferingDetector && this.cancelBufferingDetector()
				}
				initEventHandlers() {
					this.ref && this.props.onBufferingChange && (this.cancelBufferingDetector = function(e, t) {
						let n = !1,
							r = !1;
						const s = () => n = !0,
							i = () => r = !0;
						e.addEventListener("loadeddata", s), e.addEventListener("play", i), e.addEventListener("playing", i);
						let a = !1,
							o = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, r) return r = !1, void(o = d);
							if (e.paused || e.seeking || !n) return void(o = d);
							const s = a;
							4 === e.readyState ? a = !1 : !a && d >= o && d < o + g ? a = !0 : a && d >= o && d > o + g && (a = !1), o = d, s !== a && t(a)
						}, h);
						return () => {
							clearInterval(c), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", s)
						}
					}(this.ref, this.props.onBufferingChange))
				}
				render() {
					const {
						autoplay: e,
						isListing: t,
						isNotCardView: n,
						onBufferingChange: r,
						shouldLoad: s,
						shouldPause: i,
						showCentered: o,
						showFull: d,
						source: c,
						...l
					} = this.props;
					return a.a.createElement("video", x({}, l, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), a.a.createElement("source", {
						src: Object(f.a)(this.props.source || "")
					}))
				}
			}
			var y = v,
				_ = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				E = n.n(_);
			const C = Object(d.c)({
					autoplayPref: p.b,
					consumed: b.a,
					loadTimes: b.f,
					metadata: b.h,
					started: b.k
				}),
				O = Object(o.b)(C, (e, {
					postId: t
				}) => ({
					onBufferingChanged: n => {
						e(n ? l.r(t) : l.E(t))
					},
					onLoadStarted: n => e(l.q(t, n)),
					onMetadataReceived: n => e(l.D({
						metadata: n,
						postId: t
					})),
					onPaused: () => e(l.z({
						postId: t
					})),
					onPlayable: n => e(l.A(t, n)),
					onPlaying: () => e(l.C(t)),
					onWatched: () => e(l.s(t)),
					onViewableImpression: () => e(l.x(t)),
					onFullyViewableImpression: () => e(l.u(t)),
					onPlayedWithSound: () => e(l.B(!1, t)),
					onWatchedPercent: n => e(l.N(n, t))
				}));
			class k extends a.a.Component {
				constructor() {
					super(...arguments), this.percentTriggered = 0, this._checkForConsumption = s()(e => {
						if (this.props.consumed) return;
						const {
							target: t
						} = e;
						t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && this.props.onWatched()
					}, 200), this.onTimeUpdate = e => {
						e.persist(), this._checkForConsumption(e)
					}, this.onVideoPlayable = e => {
						this.props.metadata || this.sendTransformedMetadata(e), this.props.started || this.props.onPlayable(e.timeStamp)
					}, this.loadStarted = e => {
						this.props.onLoadStarted(e.timeStamp)
					}, this.sendTransformedMetadata = e => {
						this.props.onMetadataReceived({
							id: this.props.postId,
							length: 1e3 * e.target.duration,
							originalHeight: e.target.videoHeight,
							originalWidth: e.target.videoWidth
						})
					}, this.onPaused = e => {
						this.props.onPaused()
					}, this.onPlaying = e => {
						this.props.loadTimes || this.onVideoPlayable(e), this.props.metadata || this.sendTransformedMetadata(e), this.props.onPlaying()
					}, this.renderVideoPlayer = () => {
						const {
							showCentered: e,
							isListing: t
						} = this.props, n = {};
						return e && (n.margin = "0 auto"), t || (n.maxHeight = `${m.e}px`), a.a.createElement(y, {
							autoplay: this.props.autoplayPref,
							className: Object(c.a)(u.a, E.a.styledVideo),
							height: this.props.height,
							isListing: this.props.isListing,
							isNotCardView: this.props.isNotCardView,
							key: this.props.postId,
							loop: !0,
							onBufferingChange: this.props.onBufferingChanged,
							onLoadStart: this.loadStarted,
							onLoadedData: this.onVideoPlayable,
							onLoadedMetadata: this.sendTransformedMetadata,
							onPause: this.props.onPaused,
							onPlaying: this.onPlaying,
							onTimeUpdate: this.onTimeUpdate,
							shouldLoad: this.props.shouldLoad,
							shouldPause: this.props.shouldPause,
							showCentered: this.props.showCentered,
							showFull: this.props.showFull,
							source: this.props.source,
							style: n,
							width: this.props.width
						})
					}
				}
				render() {
					return this.props.isListing ? this.renderVideoPlayer() : a.a.createElement("div", {
						className: Object(c.a)(E.a.container, this.props.className, {
							[E.a.centered]: this.props.showCentered
						})
					}, a.a.createElement("a", {
						href: this.props.originalSource,
						target: "_blank"
					}, this.renderVideoPlayer()))
				}
			}
			t.a = O(k)
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = (e, t) => e && t ? r.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? r.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? r.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, n) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				o = n("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				d = n.n(o);
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
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, n) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S",
				container: "_2B49Ad8MgHu8TYDSLNtfM3",
				expandButton: "_3xPQmoZqoeq-xOuehYr_2f"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-motion/lib/react-motion.js"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				c = n.n(d),
				l = n("./node_modules/fbt/lib/FbtPublic.js"),
				u = n("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/components/UserIcon/index.tsx"),
				b = n("./src/reddit/controls/InternalLink/index.tsx"),
				h = n("./src/reddit/helpers/trackers/powerups.ts"),
				g = n("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				f = n.n(g);
			var x = function(e) {
				var t, n;
				const s = Object(m.a)(),
					{
						className: a,
						supporter: o
					} = e,
					{
						score: d,
						supporterInfo: c
					} = o,
					g = (null == c ? void 0 : c.displayName) || l.fbt._({
						"*": "Anonymous Heroes",
						_1: "Anonymous Hero"
					}, [l.fbt._plural(d)], {
						hk: "8kyEI"
					}).toString(),
					x = null === (t = null == c ? void 0 : c.icon) || void 0 === t ? void 0 : t.url,
					v = !!(null === (n = null == c ? void 0 : c.profile) || void 0 === n ? void 0 : n.isNsfw),
					y = Object(u.a)(d),
					_ = i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: f.a.userIconContainer
					}, i.a.createElement(p.a, {
						userName: g,
						iconUrl: x,
						className: f.a.userIcon,
						isNSFW: v
					})), i.a.createElement("h4", {
						className: f.a.name
					}, g));
				return i.a.createElement("div", {
					className: Object(r.a)(a, f.a.container)
				}, c ? i.a.createElement(b.a, {
					className: f.a.user,
					to: `/user/${g}/`,
					onClick: () => {
						c && s(Object(h.q)(c.id, c.displayName))
					}
				}, _) : i.a.createElement("div", {
					className: f.a.user
				}, _), i.a.createElement("div", {
					className: f.a.counter
				}, i.a.createElement(y, {
					className: f.a.powerupIcon
				}), d))
			};
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = 100, _ = 302, E = 40;

			function C(e) {
				return `${e.lastSupportedAt}__${e.score}`
			}
			const O = e => ({
				key: C(e),
				data: {
					supporter: e
				}
			});

			function k(e, t) {
				const n = t || y;
				return e.slice(0, n).map(O)
			}
			const w = () => ({
					width: _,
					height: Object(a.spring)(0)
				}),
				j = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: k(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: n,
						isShortSupportersEnabled: s
					} = this.props, d = s && this.state.items.length < t.length;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(r.a)(c.a.container, e)
					}, i.a.createElement(a.TransitionMotion, {
						willLeave: w,
						willEnter: j,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(a.spring)(_),
								height: Object(a.spring)(E),
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
					}, i.a.createElement(x, {
						supporter: e.data.supporter
					}))))))), d && i.a.createElement(o.q, {
						priority: o.b.Secondary,
						className: c.a.expandButton,
						onClick: n,
						isFullWidth: !0
					}, v._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: k(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = i.a.memo(S)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				s = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				i = n("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const a = 2,
				o = 5;

			function d(e) {
				return e >= o ? i.a : e >= a ? s.a : r.a
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.m.less": function(e, t, n) {
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
				button: "_3H6aN2LsU-HPJq_wZmyeHm",
				premiumDescription: "_3ZUMj-Yl_XJgexvK3K0N",
				premiumIconWrapper: "_2Jfqs4IPBuRljRHV2X8nwq",
				premiumIcon: "_3Rp23Miges4ZwfnHm13T9Z"
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/gold/powerups.ts"),
				d = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = n("./src/reddit/constants/modals.ts"),
				b = n("./src/reddit/contexts/ApiContext.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/trackers/powerups.ts"),
				f = n("./src/reddit/hooks/useTracking.ts"),
				x = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				v = n("./src/reddit/constants/experiments.ts"),
				y = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const _ = Object(y.a)(v.zb);
			var E = n("./src/reddit/selectors/gold/powerups.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				k = n("./node_modules/reselect/es/index.js"),
				w = n("./src/reddit/components/PowerupsSidebar/index.m.less"),
				j = n.n(w),
				S = n("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				I = n("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				N = n.n(I);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js"), T = e => {
				const {
					className: t,
					powerups: n
				} = e, {
					tier: r,
					count: s,
					tiersInfo: a
				} = n, o = (a[r] || a[r - 1]).powerupsCost;
				if (!o) return null;
				const d = Math.min(o, s) / o;
				return i.a.createElement("div", {
					className: t
				}, i.a.createElement("div", {
					className: N.a.titleRow
				}, i.a.createElement("span", null, P._("Powerups", null, {
					hk: "DrcXp"
				})), i.a.createElement("span", null, s < o ? `${s}/${o}` : s)), i.a.createElement(S.a, {
					progress: d
				}))
			};
			var L = n("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx");
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js"), F = Object(k.c)({
				currentUser: O.i,
				powerups: E.j,
				subreddit: C.T,
				topSupporters: E.m,
				userPowerupsData: E.u,
				subredditHasUnlockedPowerups: (e, t) => !!Object(E.k)(e, {
					subredditId: t.subredditId
				}),
				isShortSupportersEnabled: _
			}), M = Object(u.c)(e => {
				const {
					className: t,
					currentUser: n,
					powerups: s,
					subreddit: u,
					topSupporters: b,
					userPowerupsData: v,
					subredditId: y,
					isShortSupportersEnabled: _,
					subredditHasUnlockedPowerups: E
				} = e, C = Object(a.d)(), O = Object(f.a)(), k = () => {
					O(_ ? Object(g.k)() : Object(g.g)()), C(n ? Object(c.h)(p.a.ECON_POWERUPS_MARKETING) : Object(d.h)())
				};
				if (!s || 1 === s.tiersInfo.length || !u) return null;
				const w = !!(null == v ? void 0 : v.freeCount),
					S = _ ? 8 : 50,
					I = E ? B._("Powerups are unlocked in", null, {
						hk: "fquP8"
					}) : B._("Powerup to unlock perks for", null, {
						hk: "3kTNGL"
					});
				return i.a.createElement(l.a, null, i.a.createElement(m.a, {
					className: t,
					title: B._("Powerups", null, {
						hk: "DrcXp"
					})
				}, i.a.createElement("div", {
					className: j.a.container
				}, _ && i.a.createElement("div", {
					className: j.a.titleGroup
				}, i.a.createElement("div", {
					className: j.a.powerupsIcon
				}, i.a.createElement("img", {
					className: j.a.powerupsIconImage,
					src: `${r.a.assetPath}/img/powerups/powerup.png`
				})), i.a.createElement("h2", {
					className: j.a.title
				}, I, " ", u.displayText), i.a.createElement(h.q, {
					priority: h.b.Primary,
					className: j.a.button,
					onClick: k,
					isFullWidth: !0
				}, w && !E ? B._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : B._("Become a Hero", null, {
					hk: "3IZNw3"
				}))), !_ && i.a.createElement("div", {
					className: j.a.oldTitleGroup
				}, i.a.createElement("h2", {
					className: j.a.title
				}, B._("Powerup and unlock perks for {subreddit name}", [B._param("subreddit name", u.displayText)], {
					hk: "2gDqtV"
				})), i.a.createElement("button", {
					className: j.a.perksButton,
					onClick: k
				}, B._("Show Perks", null, {
					hk: "3TgZRL"
				}))), i.a.createElement("div", {
					className: j.a.group
				}, i.a.createElement("h3", {
					className: j.a.subTitle
				}, B._("Community heroes", null, {
					hk: "1hGdba"
				})), i.a.createElement(T, {
					className: j.a.progress,
					powerups: s
				}), !!(null == b ? void 0 : b.length) && i.a.createElement(L.a, {
					supporters: b,
					className: j.a.heroes,
					maxSupporters: S,
					isShortSupportersEnabled: _,
					onShowFullSupportersList: () => {
						O(Object(g.m)()), C(Object(c.h)(p.a.ECON_SUPPORTERS_LIST, {
							subredditId: y
						}))
					}
				})), !_ && i.a.createElement("div", {
					className: j.a.oldGroup
				}, i.a.createElement(h.q, {
					priority: h.b.Primary,
					className: j.a.button,
					onClick: () => {
						O(Object(g.g)()), C(Object(o.c)())
					},
					isFullWidth: !0
				}, w ? B._("Apply Your Powerup", null, {
					hk: "10PunM"
				}) : B._("Become a Hero", null, {
					hk: "3IZNw3"
				})), w && i.a.createElement("div", {
					className: j.a.premiumDescription
				}, i.a.createElement("div", {
					className: j.a.premiumIconWrapper
				}, i.a.createElement(x.a, {
					className: j.a.premiumIcon
				})), i.a.createElement("span", null, B._("Premium gives you one monthly Powerup", null, {
					hk: "tdfip"
				})))))))
			});
			t.a = Object(b.b)(Object(a.b)(F)(M))
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				b = d.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: {
						...e.style,
						"--RawHTMLDisplay-tr-even": Object(r.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(r.g)(Object(l.a)(e).line, .8)
					}
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(o.a)(b))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				g = m.a.span("InnerSpan", u.a),
				f = m.a.span("TooltipTarget", u.a),
				x = m.a.span("SpoilerWrapper", u.a),
				v = m.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => i.a.createElement(x, p({}, n, {
					className: Object(a.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				y = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [o.a.Click, o.a.Keydown]);
			class _ extends i.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return i.a.createElement(v, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(g, null, i.a.createElement(f, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(y, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: r.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = _
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "w", (function() {
				return B
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/reddit/components/RichTextJson/elements.m.less"),
				o = n.n(a),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Governance/VaultActionLink/async.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = [d.a.div("H1", o.a), d.a.div("H2", o.a), d.a.div("H3", o.a), d.a.div("H4", o.a), d.a.div("H5", o.a), d.a.div("H6", o.a)],
				m = d.a.hr("Hr", o.a),
				p = d.a.code("M", o.a),
				b = d.a.pre("Pre", o.a),
				h = d.a.blockquote("Blockquote", o.a),
				g = d.a.p("P", o.a),
				f = d.a.li("Li", o.a),
				x = d.a.ul("Ul", o.a),
				v = d.a.ol("Ol", o.a),
				y = d.a.strong("B", o.a),
				_ = d.a.em("I", o.a),
				E = d.a.span("U", o.a),
				C = e => s.a.createElement("del", e),
				O = d.a.sub("Sub", o.a),
				k = d.a.sup("Sup", o.a),
				w = d.a.table("Table", o.a),
				j = d.a.tr("Tr", o.a),
				S = d.a.td("Tdl", o.a),
				I = d.a.td("Tdc", o.a),
				N = d.a.td("Tdr", o.a),
				P = d.a.th("Thl", o.a),
				T = d.a.th("Thc", o.a),
				L = (d.a.th("Thr", o.a), d.a.wrapped(e => s.a.createElement(i.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "A", o.a)),
				B = d.a.wrapped(c.a, "A", o.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return C
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "a", (function() {
				return w
			}));
			var r = n("./node_modules/lodash/findLastIndex.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/blurredContent.ts"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/media.tsx"),
				g = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = n("./src/reddit/components/RichTextJson/index.m.less"),
				x = n.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = n("./src/lib/lessComponent.tsx").a.div("Container", x.a),
				_ = Object(d.a)(({
					flairStyleTemplate: e,
					theme: t,
					...n
				}) => a.a.createElement(y, v({}, n, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...n
						}))
					}
				}))),
				E = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				C = e => s()(e, E),
				O = e => e.findIndex(E),
				k = e => {
					const {
						altText: t,
						className: n,
						content: r,
						isListing: s,
						isNSFW: i,
						isSpoiler: d,
						onClickRevealBlurred: c,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: f,
						useExplicitTextColor: v,
						shouldBlur: E
					} = e, k = r.document, w = [], j = e.mediaMetadata || null, S = O(k), I = C(k);
					if (E && !s) return a.a.createElement(y, {
						className: Object(o.a)(u.j, n)
					}, a.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: c
					}, Object(l.a)(!!i, !!d))));
					if (-1 !== S)
						for (let a = S; a <= I; a++) {
							const e = k[a];
							switch (e.e) {
								case b.k:
									w.push(g.c(e, f, a));
									break;
								case b.l:
									w.push(g.d(a));
									break;
								case b.b:
									w.push(g.a(e, j, f, a));
									break;
								case b.c:
									w.push(g.b(e, a));
									break;
								case b.p:
									w.push(g.f(e, j, f, a));
									break;
								case b.z:
									w.push(g.h(e, j, f, a));
									break;
								case b.u:
									w.push(g.g(e, j, f, a));
									break;
								case b.h:
									w.push(Object(h.a)(e, a));
									break;
								case b.m:
								case b.a:
								case b.D:
									w.push(...Object(h.b)(e, a, j, p, m, t))
							}
						}
					return v ? a.a.createElement(y, {
						className: Object(o.a)(u.j, n)
					}, w) : a.a.createElement(_, {
						className: Object(o.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, w)
				};
			class w extends a.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					c.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), c.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return k(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/elements.tsx"),
				g = n("./src/reddit/components/RichTextJson/media.m.less"),
				f = n.n(g),
				x = n("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = /\/(\w+)\/asset\/(\w+)\//,
				_ = x.a.wrapped(h.a, "A", f.a),
				E = x.a.wrapped(l.a, "ImageBox", f.a),
				C = x.a.wrapped(e => i.a.createElement("p", e), "Caption", f.a),
				O = x.a.div("Placeholder", f.a),
				k = x.a.wrapped(({
					className: e,
					e: t,
					...n
				}) => {
					const s = t === b.D ? r.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : r.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return i.a.createElement(O, v({
						className: e,
						style: {
							"--placeholder-content-text": `'${s}'`
						}
					}, n))
				}, "Placeholder", f.a),
				w = ({
					c: e,
					x: t,
					y: n
				}, r) => i.a.createElement("div", {
					className: f.a.MediaWrapper
				}, i.a.createElement(u.a, {
					height: n,
					isListing: !1,
					key: r,
					showCentered: !0,
					showFull: !0,
					width: t
				}, i.a.createElement(c.a, {
					isListing: !1,
					source: e,
					height: n,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				j = (e, t, n) => {
					const r = e.c;
					let s = "";
					return n && (n.e === b.s ? s = n.s.u : n.e === b.r ? s = n.s.gif : n.e === b.t && (s = (e => {
						const t = y.exec(e);
						return t ? `${o.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), s ? i.a.createElement(_, {
						href: s,
						key: t,
						title: r
					}, r || s) : null
				},
				S = (e, t, n, r, s, o) => {
					const c = b.E(n, e.id);
					if (r) return [j(e, t, c)];
					const l = [];
					return c ? c.e === b.s ? l.push((({
						id: e,
						s: t
					}, n, r, s) => i.a.createElement("div", {
						className: Object(a.a)(f.a.MediaWrapper, {
							[f.a.mHasCaption]: r
						})
					}, i.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: n,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, i.a.createElement(E, {
						altText: s,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(c, t, !!e.c, o)) : c.e === b.r ? l.push((({
						id: e,
						ext: t,
						s: n
					}, r, s) => {
						if (Object(p.f)(e)) {
							const o = t || Object(p.e)(e);
							return i.a.createElement("div", {
								className: Object(a.a)(f.a.MediaWrapper, {
									[f.a.mHasCaption]: s
								})
							}, i.a.createElement(_, {
								href: o,
								key: r,
								target: "_blank"
							}, n.mp4 ? i.a.createElement("video", {
								className: f.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, i.a.createElement("source", {
								src: n.mp4
							})) : {
								originalSource: o
							}))
						}
						return i.a.createElement("div", {
							className: Object(a.a)(f.a.MediaWrapper, {
								[f.a.mHasCaption]: s
							})
						}, i.a.createElement(u.a, {
							height: n.y,
							isListing: !1,
							key: r,
							showCentered: !0,
							showFull: !0,
							width: n.x
						}, i.a.createElement(m.a, {
							height: n.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: n.mp4,
							width: n.x,
							postId: e,
							source: n.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(c, t, !!e.c)) : c.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: n,
						y: r,
						isGif: s
					}, o, c, l) => i.a.createElement("div", {
						className: Object(a.a)(f.a.MediaWrapper, {
							[f.a.mHasCaption]: c
						})
					}, i.a.createElement(u.a, {
						height: r,
						isListing: !1,
						isVideo: !0,
						key: o,
						showCentered: !0,
						showFull: !0,
						width: n
					}, i.a.createElement(d.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: s,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: s
					}))))(c, t, !!e.c, s)) : l.push(((e, t) => i.a.createElement(k, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => i.a.createElement(C, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return I
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "e", (function() {
				return D
			}));
			var r = n("./src/lib/unicodeUtils/index.ts"),
				s = n("./node_modules/lodash/reduce.js"),
				i = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/v4.js"),
				l = n.n(c),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var g = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = n.n(f);
			const v = 1e3,
				y = 1e3;
			var _;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(_ || (_ = {}));
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = _.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = _.Inside, setTimeout(() => {
							this.mouseLocation === _.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, v)
					}, this.onMouseOut = () => {
						this.mouseLocation = _.Outside, setTimeout(() => {
							this.mouseLocation !== _.Inside && this.setState({
								tooltipOpen: !1
							})
						}, y)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = b.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.subreddit(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, r, s;
					t.e === p.s ? (n = t.s.x, r = t.s.y, s = t.s.u) : t.e === p.r && (n = t.s.x, r = t.s.y, s = t.s.gif);
					const i = this.state.tooltipOpen ? l()() : void 0;
					return s ? o.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, o.a.createElement("img", {
						id: i,
						src: s,
						width: n,
						height: r,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && o.a.createElement(g, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: i,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var C = Object(u.c)(E),
				O = n("./src/reddit/components/RichTextJson/media.tsx"),
				k = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				w = n("./src/reddit/components/SubredditMention/index.tsx"),
				j = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				S = n("./src/reddit/helpers/richTextJson/index.ts");
			const I = (e, t, n) => {
					const r = e.c || [],
						s = e.l,
						i = [],
						a = r.length;
					for (let o = 0; o < a; o++) {
						const e = r[o];
						i.push(e.e === p.w ? e.t : D(e, t, o))
					}
					const c = d.x[s - 1];
					return o.a.createElement(c, {
						key: n
					}, i)
				},
				N = e => o.a.createElement(d.e, {
					key: e
				}),
				P = (e, t, n, r) => {
					const s = e.c;
					if (!s) return;
					const i = s.length,
						a = [];
					for (let o = 0; o < i; o++) a.push(B(s[o], t, n, o));
					return o.a.createElement(d.c, {
						key: r
					}, a)
				},
				T = (e, t) => {
					const n = e.c;
					return o.a.createElement(d.k, {
						key: t
					}, o.a.createElement(d.h, null, n.reduce((e, t, n, r) => e += t.t + (n < r.length ? "\n" : ""), "")))
				},
				L = (e, t, {
					renderingObjectInfo: n
				}, r) => {
					const s = e.c,
						i = [],
						a = s.length;
					for (let l = 0; l < a; l++) {
						const e = s[l].c;
						e && e.length && i.push(o.a.createElement(d.g, {
							key: l
						}, e.map((e, r) => B(e, t, {
							renderingObjectInfo: n
						}, r))))
					}
					const c = e.o ? d.i : d.v;
					return o.a.createElement(c, {
						key: r
					}, i)
				},
				B = (e, t, n, r) => {
					switch (e.e) {
						case p.b:
							return P(e, t, n, r);
						case p.c:
							return T(e, r);
						case p.k:
							return I(e, n, r);
						case p.l:
							return N(r);
						case p.p:
							return L(e, t, n, r);
						case p.u:
							return M(e, t, n, r);
						case p.z:
							return F(e, t, n, r)
					}
				},
				F = (e, t, n, r) => {
					const s = e.c,
						i = e.h,
						a = s.length,
						c = i.length,
						l = [],
						u = [],
						m = [];
					for (let d = 0; d < c; d++) {
						const e = i[d],
							{
								H: r,
								D: s
							} = U(e.a),
							{
								c: a = []
							} = e;
						l.push(o.a.createElement(r, {
							key: d
						}, R(a, t, n))), m[d] = s
					}
					for (let p = 0; p < a; p++) {
						const e = s[p],
							r = e.length,
							i = [];
						for (let s = 0; s < r; s++) {
							const r = m[s],
								{
									c: a = []
								} = e[s];
							i.push(o.a.createElement(r, {
								key: s
							}, R(a, t, n)))
						}
						u.push(o.a.createElement(d.t, {
							key: p
						}, i))
					}
					return o.a.createElement(d.n, {
						key: r
					}, o.a.createElement("thead", null, o.a.createElement(d.t, null, l)), o.a.createElement("tbody", null, u))
				},
				M = (e, t, n, r) => {
					if (!e.c || !e.c.length) return (e => o.a.createElement(d.j, {
						key: e
					}, o.a.createElement("br", null)))(r);
					const s = e.c[0];
					return s.e !== p.m && s.e !== p.a || !Object(S.f)(s.id) ? o.a.createElement(d.j, {
						key: r
					}, R(e.c, t, n)) : Object(O.b)(s, r, t)
				},
				R = (e, t, n) => {
					const r = [],
						s = e.length;
					for (let i = 0; i < s; i++) {
						const s = e[i];
						if (s.e === p.A) r.push(A(s, i));
						else if (s.e === p.x) r.push(o.a.createElement(k.a, {
							key: i
						}, R(s.c, t, n)));
						else if (s.e === p.n) r.push(o.a.createElement("br", {
							key: i
						}));
						else if (s.e === p.m || s.e === p.a) {
							if (s.id.startsWith("emote|")) {
								const e = p.E(t, s.id);
								e && r.push(o.a.createElement(C, {
									key: i,
									node: s,
									media: e
								}))
							}
						} else r.push(D(s, n, i))
					}
					return r
				},
				D = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const r = A({
								t: e.t,
								f: e.f
							}, 0);
							return Object(j.b)(e.u) ? o.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, r) : o.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a
							}, r);
						case p.y:
							return o.a.createElement(w.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return o.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return o.a.createElement(d.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				A = (e, t) => {
					const {
						f: n,
						t: s
					} = e, i = [];
					if (!n) return W(0, s, t);
					const a = Object(r.a)(s);
					let o = 0,
						d = 0;
					const c = n.length;
					for (; o < c; o++) {
						const [e, t, r] = n[o], c = t + r, l = a[t], u = a[c] - l;
						l > d && i.push(W(0, s.substr(d, l - d), `between${o}`)), i.push(W(e, s.substr(l, u), o)), d = l + u
					}
					return d < s.length && i.push(W(0, s.substr(d), `remaining${o}`)), i
				},
				H = {
					[p.j.monospace]: d.h,
					[p.j.bold]: d.b,
					[p.j.italic]: d.f,
					[p.j.underline]: d.u,
					[p.j.strikethrough]: d.d,
					[p.j.subscript]: d.l,
					[p.j.superscript]: d.m
				},
				W = (e, t, n) => {
					let r = t;
					return r = i()(H, (t, r, s) => e & parseInt(s, 10) ? o.a.createElement(r, {
						key: n
					}, t) : t, r)
				},
				U = e => {
					switch (e) {
						case p.f:
							return {
								H: d.r, D: d.q
							};
						case p.d:
							return {
								H: d.r, D: d.o
							};
						case p.e:
						default:
							return {
								H: d.r, D: d.p
							}
					}
				}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, n) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/polished/dist/polished.es.js"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/contexts/Post/index.tsx"),
				f = n("./src/reddit/controls/InternalLink/index.tsx"),
				x = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				v = n("./src/reddit/helpers/name/index.ts"),
				y = n("./src/reddit/models/Flair/index.ts"),
				_ = n("./src/reddit/models/Theme/index.ts"),
				E = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = n("./src/reddit/components/MiniCardPost/index.m.less"),
				O = n.n(C),
				k = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				w = n.n(k);
			const j = e => e.type === y.f.Spoiler,
				S = Object(h.t)();
			t.a = S(Object(g.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: g,
					shouldOpenPost: y,
					showSubredditMeta: C = !0,
					showSubredditName: k,
					subredditOrProfile: S
				} = e, I = h && h.preview && h.preview.url || void 0, N = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", T = y && P || g && Object(o.a)("/search", {
					q: g.rawQuery,
					source: N
				}) || P, L = g ? g.subredditInfo && g.subredditInfo.icon : S && S.icon.url, B = g ? g.subredditInfo && g.subredditInfo.displayText : S && (S.displayText || S.name), F = h ? h.flair.filter(j) : [], M = h ? h.score : 0, R = h ? h.numComments : 0, D = h && h.isSponsored, A = Object(E.a)(e).body, H = `linear-gradient(\n      ${Object(s.g)(A,.2)},\n      ${Object(s.g)(A,.3)},\n      ${Object(s.g)(A,.4)},\n      ${Object(s.g)(A,.6)},\n      ${Object(s.g)(A,.8)},\n      ${A}\n    )`, W = a.a.createElement("div", {
					id: i,
					className: Object(d.a)(w.a.trendingPost, {
						[w.a["m-background"]]: !!I
					})
				}, a.a.createElement(f.a, {
					to: T
				}, a.a.createElement("div", {
					className: Object(d.a)(w.a.backgroundWrapper, O.a.backgroundWrapper, t),
					style: {
						background: Object(_.g)(Object(E.a)(e).body, I || Object(E.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": H
					}
				}, D && a.a.createElement("div", {
					className: w.a.promoted
				}, r.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(d.a)(w.a.innerContainer, O.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? w.a.title : w.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(d.a)(w.a.description, n)
				}, F.length > 0 && a.a.createElement(m.a, {
					className: w.a.flair,
					titleFlair: F,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : a.a.createElement("div", {
					className: w.a.spacer
				}), C && L && B && a.a.createElement(x.a, {
					className: w.a.relatedSubredditMetaData,
					iconClassName: w.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: r.fbt._("{subredditName} and more", [r.fbt._param("subredditName", B)], {
						hk: "2YTyJf"
					})
				}), !C && h && a.a.createElement("div", {
					className: w.a.metaLine
				}, k && B && a.a.createElement("span", {
					className: w.a.meta
				}, Object(v.c)(B)), a.a.createElement("span", {
					className: w.a.meta
				}, r.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [r.fbt._plural(M, "number", Object(u.b)(M))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: w.a.meta
				}, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(R, "number", Object(u.b)(R))], {
					hk: "311aXY"
				})))))));
				return D ? a.a.createElement(p.a, {
					post: h
				}, W) : W
			}))))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n.n(r),
				i = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/lodash/random.js"),
				o = n.n(a),
				d = n("./node_modules/react/index.js"),
				c = n.n(d),
				l = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/config.ts"),
				p = n("./src/reddit/components/BannerAd/index.tsx"),
				b = n("./src/reddit/components/FakeBannerAd/index.tsx"),
				h = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = n("./src/reddit/helpers/adCount/index.ts"),
				v = n("./src/reddit/helpers/trackers/ads.ts"),
				y = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/selectors/platform.ts"),
				E = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				C = n.n(E),
				O = n("./src/lib/constants/index.ts"),
				k = n("./src/lib/lessComponent.tsx");
			const w = Object(i.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("reddit-components-SidebarNativeAd")]).then(n.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				j = Object(u.c)({
					post: (e, t) => {
						const {
							placement: n,
							placementIndex: r
						} = t, s = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(x.a)(n, s, r)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch,
					isSubredditOrCommentsPage: e => Object(_.p)(e) === O.Eb.SUBREDDIT || Object(_.p)(e) === O.Eb.COMMENTS
				}),
				S = Object(l.b)(j),
				I = k.a.wrapped(p.a, "BannerAd", C.a),
				N = k.a.wrapped(f.a, "ThemedWidget", C.a),
				P = k.a.div("SidebarAdPlaceholder", C.a),
				T = e => !(window.aax && window.aax.getAbpStatus && window.aax.getAbpStatus()) && e,
				L = (e, t, n) => {
					let r = "";
					return t && (r += "overlay-"), r += `sidebar-${e}`, null != n && (r += `-${n}`), r
				},
				B = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(y.F)(e.media) && e.media.content)),
				F = e => !!e && e.isBlank,
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
				R = Object(g.c)(class extends c.a.Component {
					shouldComponentUpdate(e, t) {
						const {
							className: n,
							redditStyle: r
						} = this.props;
						return n !== e.className || r !== e.redditStyle
					}
					trackViewability(e, t, n) {
						Math.random() <= m.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(v.d)(e, t, n))
					}
					render() {
						const e = o()(0, M.length - 1),
							{
								img: t,
								href: n
							} = M[e],
							{
								className: r,
								placement: s,
								redditStyle: i,
								removeSidebarSpacer: a
							} = this.props,
							d = a ? c.a.Fragment : h.a;
						return c.a.createElement(d, null, c.a.createElement(N, {
							className: r,
							contentOnly: !0,
							redditStyle: i
						}, c.a.createElement(b.a, {
							img: t,
							href: n,
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
						post: n,
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
						waitForProgrammatic: g,
						isSubredditOrCommentsPage: f,
						removeSidebarSpacer: x
					} = this.props, v = r.fbt._("advertisement", null, {
						hk: "35HaIb"
					}), y = x ? c.a.Fragment : h.a;
					return p || t || !B(n) && g ? c.a.createElement(y, null, c.a.createElement(N, {
						className: e,
						contentOnly: !0,
						redditStyle: m
					}, c.a.createElement(P, {
						"data-before-content": v
					}))) : b ? c.a.createElement(R, {
						className: e,
						redditStyle: m,
						placement: d,
						removeSidebarSpacer: x
					}) : B(n) ? c.a.createElement(y, null, c.a.createElement(w, {
						post: n,
						refreshKey: a,
						listingName: o,
						placement: d,
						placementIndex: i
					})) : c.a.createElement(y, null, c.a.createElement(N, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: m
					}, F(n) && c.a.createElement(w, {
						post: n,
						refreshKey: a,
						listingName: o,
						placement: d,
						placementIndex: i
					}), c.a.createElement(I, {
						id: L(d, s, i),
						isRefreshableAd: T(f),
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
			t.a = S(D)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/selectors/brandSafety.ts"),
				d = n("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.t)();
			t.a = m(Object(i.b)((e, {
				listingName: t,
				pageLayer: n
			}) => {
				const r = Object(o.b)(e, {
						listingName: t,
						pageLayer: n
					}),
					s = Object(c.A)(e) || Object(d.a)(e),
					i = Object(o.e)(e);
				return {
					canShowAd: r && !s,
					forcePlaceholder: !Object(o.c)(e),
					isAdsDisabled: s,
					viewIsUnsafe: i
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: n,
				pageLayer: r,
				...i
			}) => !t && e && r ? s.a.createElement(l.a, u({
				forceHouseAd: n
			}, i)) : null))
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", s.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				x = n("./src/reddit/icons/svgs/Upload/index.tsx"),
				v = n("./src/reddit/models/ApiRequestState/index.ts"),
				y = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				_ = n("./src/reddit/components/SubredditIcon/index.m.less"),
				E = n.n(_);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: r,
						...s
					} = e, a = Object(h.a)(), o = [n, E.a.inTopBar, E.a.iconContainer];
					return r ? o.push(E.a.emptyEditableIconInTopBar) : o.push(E.a.editableIcon, E.a.emptyEditableIcon), i.a.createElement("span", C({}, s, {
						className: Object(d.a)(...o)
					}), r ? a ? i.a.createElement(g.a, {
						name: "upload",
						className: E.a.emptyUploadButton
					}) : i.a.createElement(x.a, {
						className: E.a.emptyUploadButton
					}) : a ? i.a.createElement(g.a, {
						name: "add",
						className: E.a.emptyPlusButton
					}) : i.a.createElement(f.a, {
						className: E.a.emptyPlusButton
					}), e.children)
				},
				k = e => {
					const {
						iconColor: t,
						className: n,
						alt: r,
						role: s,
						onClick: a,
						inTopBar: o,
						src: c
					} = e;
					return i.a.createElement("span", {
						className: E.a.iconContainer
					}, i.a.createElement("img", {
						alt: r,
						onClick: a,
						role: s,
						src: c,
						className: Object(d.a)(n, {
							[E.a.editableIcon]: !o
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				w = Object(o.c)({
					isLoading: y.b
				});
			class j extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: E.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(v.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? i.a.createElement("span", {
						className: E.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? r.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : r.fbt._("Add icon", null, {
						hk: "1bbdMV"
					})) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(k, C({
						alt: r.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, i.a.createElement(O, C({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(O, C({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [E.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(E.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
							className: Object(d.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? i.a.createElement("div", {
						className: E.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(a.b)(w, (e, t) => ({
				onFileSelected: (n, r) => {
					e(Object(c.a)(t.subreddit, n, r))
				}
			}))(Object(l.c)(j))
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = i.a.wrapped(a.b, "SubredditIcon", c.a),
				m = i.a.wrapped(e => s.a.createElement(o.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "S", c.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => s.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, s.a.createElement(l.a, {
						href: `/r/${e}/`
					}, s.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, s.a.createElement(l.b, null)), `r/${e}`))
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = n("./src/reddit/selectors/subredditMention.ts");
			class x extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(g.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return s.a.createElement(o.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const v = Object(b.c)(x),
				y = Object(a.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				_ = Object(i.b)(y),
				E = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: n,
					userVariant: r,
					rtJsonElementProps: i
				}) => {
					if (!t || !e) return s.a.createElement(v, {
						subredditName: n,
						rtJsonElementProps: i
					});
					switch (r) {
						case h.fd.SmIcon:
							return s.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: i
							});
						case h.fd.SmIconHc:
							return s.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return s.a.createElement(v, {
								subredditName: n,
								rtJsonElementProps: i
							})
					}
				};
			t.b = _(E)
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/featureFlags/component.tsx"),
				l = n("./src/reddit/selectors/widgets.ts"),
				u = n("./src/reddit/actions/subreddit.ts"),
				m = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				h = n("./src/reddit/components/SubredditNav/index.m.less"),
				g = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = (e, t, n) => Object(p.a)(e, {
					[g.a.mActive]: t
				}, {
					[g.a.topBannerVariant]: n
				}),
				v = ({
					children: e,
					isActive: t,
					isTopBannerVariant: n,
					...r
				}) => s.a.createElement("div", f({
					className: x(g.a.subNavTitle, t, n)
				}, r), s.a.createElement("span", null, e), s.a.createElement(b.b, {
					className: g.a.navDropdownIcon
				})),
				y = ({
					className: e,
					isActive: t,
					to: n,
					isTopBannerVariant: r,
					...i
				}) => {
					const a = x(g.a.navLink, t, r);
					return n ? s.a.createElement(m.a, f({
						className: a,
						to: n
					}, i)) : s.a.createElement("a", f({
						className: a
					}, i))
				},
				_ = ({
					className: e,
					isActive: t,
					...n
				}) => s.a.createElement(m.a, f({
					className: Object(p.a)(x(g.a.navLink, t), e)
				}, n)),
				E = ({
					className: e,
					isActive: t,
					...n
				}) => s.a.createElement("a", f({
					className: x(g.a.subNavLink, t)
				}, n)),
				C = ({
					className: e,
					...t
				}) => s.a.createElement("div", f({
					className: Object(p.a)(g.a.subNavContainer, e)
				}, t)),
				O = ({
					className: e,
					isOpen: t,
					...n
				}) => s.a.createElement("div", f({
					className: Object(p.a)(g.a.subNavList, e, {
						[g.a.mIsOpen]: t
					})
				}, n)),
				{
					fbt: k
				} = n("./node_modules/fbt/lib/FbtPublic.js");
			const w = Object(a.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var j = Object(d.t)()(Object(i.b)(w, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: n
					} = e;
					return n ? s.a.createElement(_, {
						className: g.a.metaNavLink,
						to: n.url,
						isActive: e.isActive,
						onClick: n => {
							Object(d.E)(t) && n.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, k._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				S = n("./src/lib/linkMatchers/index.ts");
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
					return s.a.createElement(C, {
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
			var N = I;
			const P = e => {
				const t = e.url && Object(S.h)(S.f, e.url);
				return t ? t.url : e.url
			};
			var T = e => e.menuItem.url ? s.a.createElement(y, {
					href: P(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : s.a.createElement(N, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => s.a.createElement(E, {
					key: `${e.text}-${P(e)}`,
					role: "listitem",
					href: P(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				L = n("./src/reddit/actions/economics/predictions/index.ts"),
				B = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				F = n("./src/reddit/helpers/trackers/predictions.ts"),
				M = n("./src/reddit/hooks/usePageLayer.ts"),
				R = n("./src/reddit/hooks/useTracking.ts"),
				D = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				A = n("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function W({
				subredditId: e
			}) {
				const t = Object(i.d)(),
					n = Object(M.a)(),
					a = Object(R.a)(),
					o = Object(B.L)(n),
					[d, c] = Object(r.useState)(!1),
					l = Object(i.e)(t => Object(A.T)(t, {
						subredditId: e
					})),
					u = Object(i.e)(t => Object(A.N)(t, {
						subredditId: e
					})),
					m = Object(i.e)(t => Object(D.c)(t, {
						subredditId: e
					})),
					p = Object(i.e)(t => Object(D.b)(t, {
						subredditId: e
					}));
				return Object(r.useEffect)(() => {
					o && a(Object(F.w)())
				}, [o, a]), Object(r.useEffect)(() => {
					(async () => {
						u && !d && (t(Object(L.g)(l.name)), c(!0))
					})()
				}, [u, d, t, l.name]), u && m ? s.a.createElement(_, {
					className: g.a.predictionsFilter,
					isActive: o,
					onClick: () => a(Object(F.g)()),
					to: `${l.url}predictions/`
				}, H._("Predictions", null, {
					hk: "Cv5GC"
				}), p && s.a.createElement("span", {
					className: g.a.liveIcon
				}, H._("Live", null, {
					hk: "1o89m4"
				}))) : null
			}
			var U = n("./src/lib/constants/index.ts");
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const q = Object(d.t)(),
				z = [U.Eb.SUBREDDIT, U.Eb.COMMENTS, U.Eb.COLLECTION_COMMENTS],
				G = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && z.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.L)(t.pageLayer)
				});
			var J = q(Object(i.b)(G, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: n,
						isPostsRoute: r,
						isPredictionsPage: i,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: o
					} = e, d = r && !n && !i;
					return s.a.createElement(y, {
						to: t,
						isActive: d,
						isTopBannerVariant: a,
						onClick: e => {
							n && (e.preventDefault(), o())
						}
					}, V._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				Y = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				K = n("./src/higherOrderComponents/makeAsync.tsx");
			var Z = Object(K.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("HarbergerTaxBannerPurchaseCTA").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				X = n("./src/reddit/constants/postLayout.ts"),
				Q = n("./src/reddit/constants/screenWidths.ts"),
				$ = n("./src/reddit/models/Theme/index.ts"),
				ee = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const te = Object(Y.a)(({
				className: e,
				children: t,
				isTopBannerVariant: n,
				...r
			}) => {
				const i = Object(ee.a)(r);
				return s.a.createElement("div", {
					className: Object(p.a)(g.a.outerContainer, e),
					style: {
						position: i.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object($.g)(i.navBar.backgroundColor, i.navBar.backgroundImage, "tiled")
					}
				}, t)
			});
			var ne = e => s.a.createElement(te, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, s.a.createElement("div", {
					className: g.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === X.g.Large ? `${e.maxWidth||Q.a}px` : "100%"
					}
				}, s.a.createElement("div", null, e.children), s.a.createElement(Z, null))),
				re = n("./src/reddit/constants/wiki.ts"),
				se = n("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ae = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: n,
					pageLayer: r
				} = e, i = !!r && !!r.meta && r.meta.name === U.Eb.SUBREDDIT_WIKI, a = `wiki/${re.i}`, o = t.endsWith("/") ? t + a : `${t}/${a}`;
				return s.a.createElement(y, {
					isActive: i,
					isTopBannerVariant: n,
					to: o,
					onClick: () => e.sendEvent(Object(se.g)())
				}, ie._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const oe = Object(c.a)("spPolls", j),
				de = Object(d.t)(),
				ce = Object(a.c)({
					layout: d.O,
					widget: l.f
				}),
				le = Object(i.b)(ce);
			t.a = de(le(Object(o.c)(e => s.a.createElement(ne, {
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
			}), s.a.createElement(W, {
				subredditId: e.subredditId
			})), e.widget && s.a.createElement(s.a.Fragment, null, e.widget.showWiki && s.a.createElement(ae, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, n) => s.a.createElement(T, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: n,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/isEqual.js"),
				i = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = n("./src/reddit/components/IdCard/async.tsx"),
				f = n("./src/lib/isFakeSubreddit/index.ts"),
				x = n("./src/reddit/components/IdCard/helpers.ts"),
				v = e => !Object(f.a)(e) || Object(x.c)(e) || Object(x.d)(e) || Object(x.e)(e),
				y = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				_ = n("./src/reddit/components/PowerupsSidebar/index.tsx"),
				E = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				C = n("./src/reddit/components/SidebarContainer/index.tsx"),
				O = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				k = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				w = n("./src/lib/makeListingKey/index.ts"),
				j = n("./src/reddit/actions/subreddit.ts"),
				S = n("./src/lib/classNames/index.ts"),
				I = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				N = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/reddit/helpers/name/index.ts"),
				T = n("./src/reddit/helpers/overlay/index.ts"),
				L = n("./src/reddit/selectors/experiments/topPosts.ts"),
				B = n("./src/reddit/selectors/posts.ts"),
				F = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const M = .99;
			class R extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= M && t(n)
					}
				}
				render() {
					return o.a.createElement(F.a, {
						threshold: M,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var D = R,
				A = n("./src/lib/isUrl/index.ts"),
				H = n("./src/lib/prettyPrintNumber/index.ts"),
				W = n("./src/reddit/components/FlairWrapper/index.tsx"),
				U = n("./src/reddit/components/Thumbnail/index.tsx"),
				V = n("./src/reddit/models/Flair/index.ts"),
				q = n("./src/reddit/models/Subreddit/index.ts"),
				z = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				G = n.n(z);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = e => e.type === V.f.Nsfw || e.type === V.f.Spoiler, K = Object(c.c)({
				post: B.D,
				subredditOrProfile: B.P
			});
			class Z extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: n
						} = this.props;
						e(t), n && n(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: n
						} = this.props;
						e.stopPropagation(), n && n(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: n,
						showSubredditName: r,
						subredditOrProfile: s
					} = this.props, i = {
						post: t
					}, a = Object(A.a)(Object(U.b)(i)), d = t.flair.filter(Y);
					return o.a.createElement("div", {
						className: Object(S.a)(G.a.container, e, {
							[G.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: G.a.mainLine
					}, a && o.a.createElement("div", {
						className: G.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(U.a, i)), o.a.createElement("div", {
						className: Object(S.a)(G.a.title, !a && G.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(W.a, {
						className: G.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: G.a.metaLine
					}, r && !!s && o.a.createElement("span", {
						className: G.a.meta
					}, Object(q.g)(s) ? Object(P.d)(s.displayText || s.name) : Object(P.c)(s.displayText || s.name)), o.a.createElement("span", {
						className: G.a.meta
					}, J._({
						"*": "{score} points",
						_1: "1 point"
					}, [J._plural(t.score, "score", Object(H.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: G.a.meta
					}, J._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [J._plural(t.numComments, "numComments", Object(H.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var X = Object(d.b)(K, e => ({
					openLightbox: t => e(Object(T.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Z),
				Q = n("./src/reddit/components/SidebarPostList/index.m.less"),
				$ = n.n(Q);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = 10, ne = 2, re = Object(c.a)(B.J, e => e.filter(e => !e.isSponsored)), se = Object(c.c)({
				posts: (e, t) => re(e, {
					...t
				})
			});
			class ie extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: n
						} = this.props, [r] = n;
						r && (t(r), e && e(r.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || te, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((n, r) => (e = Math.ceil(r.posts.length / t), {
							chunkIdx: n.chunkIdx < e - 1 ? n.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: n,
							onPostVisible: r,
							redditStyle: s,
							smallPostClassName: i
						} = this.props;
						return o.a.createElement(D, {
							key: e.id,
							onPostVisible: r,
							postId: e.id
						}, o.a.createElement(X, {
							className: Object(S.a)($.a.smallPost, i),
							containerOnClick: n,
							postId: e.id,
							redditStyle: s,
							showSubredditName: Object(f.a)(Object(P.g)(t)),
							thumbnailOnClick: n
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: n,
						moreButtonText: r,
						onPostVisible: s,
						posts: i,
						redditStyle: a,
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === i.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(L.a)(c),
						p = Object(L.b)(c),
						b = m || p,
						h = i.slice(l * u, (l + 1) * u),
						[g, ...x] = h,
						v = b ? h.slice(0, ne) : x.slice(0, ne),
						y = b ? h.slice(ne) : x.slice(ne);
					return o.a.createElement("div", {
						className: Object(S.a)($.a.container, t, {
							[$.a.redditStyle]: a
						})
					}, !b && o.a.createElement(D, {
						onPostVisible: s,
						postId: g.id
					}, o.a.createElement(I.a, {
						postId: g.id,
						backgroundWrapperClassName: $.a.largePostBackgroundWrapper,
						descriptionClassName: $.a.largePostDescription,
						innerContainerClassName: $.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(f.a)(Object(P.g)(n)),
						trendingPost: g
					})), v.map(this.renderSmallPost), e, y.map(this.renderSmallPost), d && o.a.createElement(N.o, {
						className: $.a.SeeMore,
						onClick: this.showMorePosts
					}, r || ee._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var ae = Object(d.b)(se, e => ({
					openPost: t => e(Object(T.a)(t.permalink))
				}))(ie),
				oe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				de = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ce = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				le = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = n("./src/reddit/selectors/discoveryUnit.ts"),
				me = n("./src/reddit/selectors/subreddit.ts"),
				pe = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				be = n.n(pe);
			const he = 10,
				ge = Object(c.a)((e, t) => t.subredditName, e => Object(w.a)(e, l.P.TOP, {
					t: l.Wb.WEEK
				})),
				fe = Object(c.c)({
					discoveryUnit: e => Object(ue.c)(e, {
						unitName: le.j
					}),
					listingKey: ge,
					posts: (e, t) => {
						const n = ge(e, t);
						return Object(B.J)(e, {
							listingKey: n
						})
					},
					subreddit: me.A
				});
			class xe extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(ce.h)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(ce.x)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(ce.C)(t, e, void 0, n))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: n,
						loadMorePosts: s,
						posts: i,
						subredditName: a,
						topPostsVariant: d
					} = this.props;
					if (0 === i.length) return null;
					const c = a,
						l = i.length > he;
					return o.a.createElement(de.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: r.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(ae, {
						listingKey: n,
						listingName: c,
						onShowMoreClick: s,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: be.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var ve = Object(d.b)(fe, (e, {
					subredditName: t
				}) => ({
					loadMorePosts: () => e(Object(j.r)({
						sort: l.P.TOP,
						subredditName: t,
						t: l.Wb.WEEK
					}))
				}))(Object(oe.c)(xe)),
				ye = n("./src/config.ts"),
				_e = n("./src/lib/localStorageAvailable/index.ts"),
				Ee = n("./src/reddit/actions/modal.ts"),
				Ce = n("./src/higherOrderComponents/asModal/index.tsx"),
				Oe = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ke = n("./src/reddit/controls/TextButton/index.tsx"),
				we = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: je
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class Se extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(Oe.d, null, o.a.createElement(Oe.h, null, o.a.createElement(we.a, null, o.a.createElement(Oe.p, null, je._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), o.a.createElement(ke.a, {
						onClick: e.toggleModal
					}, o.a.createElement(Oe.b, null)))), o.a.createElement(Oe.k, null, o.a.createElement(Oe.o, null, je._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), o.a.createElement(Oe.f, null, o.a.createElement(Oe.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, je._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(Oe.q, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, je._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var Ie = Object(Ce.a)(Se),
				Ne = n("./src/reddit/components/IdCard/Banner.tsx"),
				Pe = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Te = n("./src/reddit/constants/blade.ts"),
				Le = n("./src/reddit/controls/InternalLink/index.tsx"),
				Be = n("./src/reddit/helpers/localStorage/index.ts"),
				Fe = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				Me = n("./src/reddit/icons/fonts/index.tsx"),
				Re = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				De = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Ae = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				He = n("./src/reddit/selectors/activeModalId.ts"),
				We = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				Ue = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Ve = n("./src/reddit/selectors/structuredStyles.ts"),
				qe = n("./src/reddit/components/IdCard/index.m.less"),
				ze = n.n(qe),
				Ge = n("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				Je = n.n(Ge);
			const Ye = "mod_onboarding_modal",
				Ke = "mod_onboarding_widget",
				Ze = Object(c.a)(He.a, (e, t) => Object(Ue.a)(Ae.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(Ve.k)(e, {
					subredditId: t.subredditId
				}), We.a, (e, t, n, r) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					isInIcons2020: r,
					modHasEditedBanner: !n || !!(n.bannerBackgroundImage || n.bannerHeight || n.bannerPositionedImage || n.bannerBackgroundColor),
					modHasEditedColors: !n || !!(n.primaryColor || n.highlightColor || n.backgroundColor || n.backgroundImage),
					modHasEditedIcon: !n || (!!n.communityIcon || !!n.bannerShowCommunityIcon)
				}));
			class Xe extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(Be.pb)(Ke, !0, this.props.subredditId), this.props.sendEvent(Object(Fe.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(Fe.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(Fe.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(Fe.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(Fe.d)("styling_generic_link"))
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						hasModeratorPermissions: e,
						modHasEditedBanner: t,
						modHasEditedColors: n,
						modHasEditedIcon: r,
						subredditId: s
					} = this.props, i = e && !(t && n && r) && (!Object(_e.a)() || !Object(Be.w)(Ke, s));
					i !== this.state.visible && (this.setState({
						visible: i
					}), i && this.props.sendEvent(Object(Fe.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						isInIcons2020: t,
						modHasEditedBanner: n,
						modHasEditedColors: s,
						modHasEditedIcon: i,
						subredditName: a,
						toggleCloseMenuModal: d
					} = this.props;
					return this.state.visible ? o.a.createElement(de.a, {
						className: Object(S.a)(Je.a.container, this.props.className)
					}, o.a.createElement(Ne.a, {
						bannerBackgroundImage: `${ye.a.assetPath}/img/id-cards/mod-onboarding@2x.png`
					}), t ? o.a.createElement(Me.a, {
						name: "close",
						className: Je.a.closeIcon,
						onClick: d
					}) : o.a.createElement(De.a, {
						className: Je.a.closeIcon,
						onClick: d
					}), Object(Pe.a)({
						titleText: r.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(x.b)(`url('${ye.a.assetPath}/img/id-cards/snoo-artist@2x.png')`)
					}), o.a.createElement("div", {
						className: Object(S.a)(ze.a.Description, Je.a.description)
					}, r.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [r.fbt._param("=Customize Appearance Overview", o.a.createElement("a", {
						href: Te.e.exportImport,
						className: Je.a.modHelpLink,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), o.a.createElement(Le.a, {
						to: `/r/${a}?styling=true&route=${Te.c.NameAndIcon}`,
						className: Je.a.link,
						onClick: this.customizeIcon
					}, i ? o.a.createElement(Re.a, {
						className: Je.a.checked
					}) : o.a.createElement(Re.a, {
						className: Je.a.unchecked
					}), r.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), o.a.createElement(Le.a, {
						to: `/r/${a}?styling=true&route=${Te.c.Banner}`,
						className: Je.a.link,
						onClick: this.customizeBannerImage
					}, n ? o.a.createElement(Re.a, {
						className: Je.a.checked
					}) : o.a.createElement(Re.a, {
						className: Je.a.unchecked
					}), r.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), o.a.createElement(Le.a, {
						to: `/r/${a}?styling=true&route=${Te.c.Global}`,
						className: Je.a.link,
						onClick: this.customizeThemeColors
					}, s ? o.a.createElement(Re.a, {
						className: Je.a.checked
					}) : o.a.createElement(Re.a, {
						className: Je.a.unchecked
					}), r.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), o.a.createElement(N.n, {
						to: `/r/${a}?styling=true`,
						className: Je.a.button,
						onClick: this.customizeAppearance
					}, r.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), o.a.createElement("div", {
						className: Je.a.subtext
					}, r.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === Ye && o.a.createElement(Ie, {
						withOverlay: !0,
						toggleModal: d,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var Qe = Object(d.b)(Ze, (e, {
					subredditId: t,
					subredditName: n
				}) => ({
					toggleCloseMenuModal: () => e(Object(Ee.i)(Ye))
				}))(Object(oe.c)(Xe)),
				$e = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				et = n("./src/reddit/constants/tracking.ts"),
				tt = n("./src/reddit/selectors/seo/linksModule.ts"),
				nt = n("./src/reddit/selectors/telemetry.ts"),
				rt = n("./src/telemetry/models/Subreddit.ts");
			const st = e => t => ({
					...nt.defaults(t),
					action: et.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				it = e => t => n => ({
					...nt.defaults(n),
					action: et.c.CLICK,
					noun: Object(rt.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				at = Object(c.c)({
					communities: tt.c
				});
			var ot = Object(d.b)(at)(e => {
					const t = Object(oe.b)();
					return e.communities && e.communities.length ? o.a.createElement(O.a, null, o.a.createElement($e.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: st,
						getSubscribeEventFactoryHandler: it,
						sendEvent: t,
						title: r.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				dt = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				ct = n("./src/reddit/featureFlags/index.ts"),
				lt = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				ut = n("./src/reddit/models/Widgets/index.ts"),
				mt = n("./src/reddit/selectors/communityFlairs.ts"),
				pt = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				bt = n("./src/reddit/selectors/listings.ts"),
				ht = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				gt = n.n(ht);
			const ft = 250,
				xt = 270,
				vt = u.a.wrapped(C.a, "SidebarContainer", gt.a),
				yt = Object(c.c)({
					apiError: bt.c,
					apiPending: bt.d,
					communityFlairModels: (e, {
						subredditId: t
					}) => Object(mt.b)(e, t),
					communityFlairSortedKeys: (e, {
						subredditId: t
					}) => Object(mt.c)(e, t),
					isPredictionsLeaderboardsEnabled: pt.h,
					showGovernance: ct.d.spPoints,
					showLeaderboard: ct.d.spLeaderboard,
					showPredictionsLeaderboard: (e, {
						subredditId: t
					}) => Object(me.M)(e, {
						subredditId: t
					}) && !Object(me.N)(e, {
						subredditId: t
					}),
					widgets: me.s
				}),
				_t = Object(d.b)(yt);
			class Et extends a.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const n = this.getRelatedCommunitiesWidgetData();
						return n ? {
							id: "related-communities-widget",
							kind: "community-list",
							shortName: r.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: ut.d.Cloud,
							shortName: r.fbt._("Filter by flair", null, {
								hk: "1DI34"
							}),
							templates: this.props.communityFlairModels
						}
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e) {
					const {
						communityFlairSortedKeys: t
					} = this.props, n = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !i()(this.props.widgets, e.widgets) || n
				}
				render() {
					const {
						className: e,
						isPredictionsLeaderboardsEnabled: t,
						listingName: n,
						showGovernance: r,
						showLeaderboard: s,
						showPredictionsLeaderboard: i,
						subredditId: a,
						subredditName: d,
						topPostsVariant: c
					} = this.props;
					let u = 0;
					const f = Object(L.a)(c),
						x = Object(L.b)(c),
						C = Object(L.c)(c),
						w = f || x;
					let j, S;
					!!this.getPostFlairWidget() ? j = this.props.widgets : (j = this.getCommunityWidgets(), S = this.makeFlairFilterWidget());
					const I = this.makeRelatedCommunitiesWidget(f, x),
						N = !f,
						P = x,
						T = o.a.createElement(E.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: n,
							placementIndex: u++,
							position: lt.a.FIRST,
							sizes: l.h
						});
					return o.a.createElement(vt, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, v(n) && o.a.createElement(g.a, {
						listingName: n
					}), o.a.createElement(p.a, {
						cardClassName: gt.a.card,
						subredditId: a
					}), o.a.createElement(_.a, {
						subredditId: a
					}), t && i && o.a.createElement(m.a, {
						subredditId: a
					}), w && o.a.createElement(O.a, null, o.a.createElement(ve, {
						subredditName: d,
						topPostsVariant: c
					}, o.a.createElement("div", {
						className: gt.a.inFeedAd
					}, T))), w && I && o.a.createElement(O.a, null, o.a.createElement(dt.a, {
						subredditName: d,
						truncateThreshold: xt,
						widget: I
					})), P && j.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(O.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(dt.a, {
							subredditName: d,
							truncateThreshold: ft,
							widget: e
						}))
					}), o.a.createElement(Qe, {
						subredditId: a,
						subredditName: d
					}), r && o.a.createElement(b.a, {
						className: gt.a.card,
						subredditId: a
					}), S && o.a.createElement(O.a, null, o.a.createElement(dt.a, {
						subredditName: d,
						widget: S
					})), s && o.a.createElement(h.a, {
						className: gt.a.card,
						subredditId: a,
						uniqueId: a
					}), o.a.createElement(y.g, {
						subredditId: a
					}), !w && T, o.a.createElement(ot, {
						subredditId: a
					}), N && !P && j.map((e, t) => {
						const n = "community-list" === e.kind;
						return o.a.createElement(O.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(dt.a, {
							subredditName: d,
							truncateThreshold: C && n ? xt : C ? ft : void 0,
							widget: e
						}))
					}), o.a.createElement(k.a, {
						adComponent: o.a.createElement(E.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: n,
							placementIndex: u++,
							position: lt.a.BOTTOM,
							sizes: l.n
						})
					}))
				}
			}
			t.a = _t(Et)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				o = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(o);
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
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
			})), n.d(t, "a", (function() {
				return N
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(a.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				_ = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				E = n("./src/reddit/models/Flair/index.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				k = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				w = n.n(k);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => i.a.createElement(b.a, {
					className: Object(c.a)(w.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: w.a.container
				}, e.isLoading ? i.a.createElement(f.a, {
					className: w.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: w.a.errorMsg
				}, e.errorMsg || r.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(N, j({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(g.q, {
					className: w.a.bottomButton,
					kind: g.a.Button,
					priority: g.b.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				I = Object(d.c)({
					hideNSFWPref: C.B,
					nightmode: C.V
				}),
				N = Object(a.b)(I)(e => {
					const t = Object(x.a)();
					return i.a.createElement("div", {
						className: Object(c.a)(w.a.communityItemContainer, {
							[w.a.withBottomFlair]: e.isNSFW
						})
					}, i.a.createElement(_.a, {
						className: w.a.communityItemExpandCenter,
						widthRight: h.t
					}, i.a.createElement("div", {
						className: w.a.iconContainer
					}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
						className: w.a.subredditIcon,
						src: e.iconUrl || e.communityIcon
					}) : t ? i.a.createElement(v.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(c.a)(w.a.defaultCommunityIcon, {
							[w.a.mNightmode]: e.nightmode
						})
					}) : i.a.createElement(y.a, {
						className: w.a.planetIcon,
						"data-redditstyle": !0
					})), i.a.createElement("div", {
						className: w.a.communityDescriptionContainer
					}, i.a.createElement(o.a, {
						className: w.a.communityName,
						onClick: e.onCommunityNameClick,
						title: Object(O.b)(e.name, e.type),
						to: Object(O.a)(e.name, e.type)
					}, Object(O.b)(e.name, e.type)), i.a.createElement("div", {
						className: w.a.communityInfoContainer
					}, !!e.subscribers && i.a.createElement("p", {
						className: w.a.subscriberCount
					}, r.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [r.fbt._plural(e.subscribers, "number")], {
						hk: "6i1wh"
					})), e.isNSFW && i.a.createElement(l.b, {
						className: w.a.nsfwFlair,
						flair: {
							type: E.f.Nsfw,
							text: "nsfw"
						}
					}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(f.a, {
						className: Object(c.a)(w.a.communityCta, w.a.smallLoadingIcon),
						sizePx: 12
					}) : i.a.createElement(g.q, {
						className: Object(c.a)(w.a.communityCta, {
							[w.a.showOnHover]: e.showTertiaryButtonOnHover
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
						className: w.a.communityDescription
					}, e.description))
				})
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === r.a.PROFILE ? Object(s.d)(e) : Object(s.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, n) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, n) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less": function(e, t, n) {
			e.exports = {
				link: "_2e42jHFUxTCKhK9ZV7rkYM",
				unchecked: "KghweVAiFiX0RI_syl89Q",
				checked: "g4y6sLtk5FcL7BGU4ySVF",
				checkedFadeIn: "_3iW8CR-_Svhfa-LJLVcw2F",
				subtext: "_1STduBQ65V-3ECZ3WRoEKV",
				section: "_23svPjrTufAABoINCKRN_7",
				container: "_2YGvHlE11080fRAzC4onab",
				button: "_2F46jVXxeuK0SKM9TO-8pY",
				closeIcon: "_3mATOvmc_Q9pFcfcBXjFol",
				description: "_3js_prVH0h73q85Oa9P7lN"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/fastdom/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				x = n("./src/reddit/helpers/flair.ts"),
				v = n("./src/reddit/helpers/trackers/postFlair.ts"),
				y = n("./src/reddit/models/Widgets/index.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				C = n.n(E);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = 129,
				w = Object(h.t)({
					filterName: e => Object(h.T)(e)[b.g],
					url: e => Object(h.Y)(e)
				}),
				j = Object(o.c)({
					subredditId: (e, t) => Object(_.F)(e, t.subredditName)
				}),
				S = Object(a.b)(j),
				I = l.a.div("WidgetContent", C.a),
				N = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: n,
					...r
				}) => i.a.createElement("li", {
					className: Object(d.a)(C.a.StyledFlair, e === y.d.Cloud && C.a.cloudDisplay, {
						[C.a.flairFilter]: t,
						[C.a["m-selected"]]: r.isSelected
					}),
					onMouseDown: n
				}, i.a.createElement(u.b, O({}, r, {
					className: C.a.Flair,
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
						Object(f.d)(f.a.SearchResults), this.props.sendEvent(Object(v.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > k && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return i.a.createElement(g.o, {
						className: C.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? r.fbt._("See more", null, {
						hk: "2fWFes"
					}) : r.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return i.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => i.a.createElement(N, {
						key: e.templateId,
						display: n.display,
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
					} = this.state, n = t ? k : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return i.a.createElement("div", {
						className: C.a.flairFilterContainer,
						style: {
							maxHeight: n
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return i.a.createElement("ul", null, i.a.createElement(N, {
						key: e.templateId,
						display: n.display,
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
						hasOverflow: n
					} = this.state, r = t.order, s = this.getFlairsFromIds(r), a = e && this.getSelectedFlair(s) || void 0, o = t.order.length > r.length || n && !a;
					return i.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(I, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(s), o && this.renderButton()))
				}
			}
			t.a = w(S(Object(m.c)(P)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				u = n("./src/reddit/components/RichTextJson/index.tsx"),
				m = n("./src/reddit/helpers/dom/index.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				g = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				f = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				v = n.n(x);
			const y = c.a.div("RuleShortName", v.a),
				_ = c.a.div("RuleIndex", v.a),
				E = c.a.div("RuleTitle", v.a),
				C = c.a.div("RuleDescription", v.a),
				O = c.a.wrapped(l.a, "RawHTMLDisplay", v.a),
				k = {};
			class w extends i.a.Component {
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
					return e.display === f.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: r
					} = this, s = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !r(e) && !!s;
					return i.a.createElement(y, {
						className: Object(d.a)({
							[v.a.pointerCursor]: a
						}),
						onClick: r(e) || !s ? void 0 : n
					}, i.a.createElement(g.a, null, i.a.createElement(_, null, `${e.humanIndex}.`), i.a.createElement(E, null, `${e.rule.shortName}`), i.a.createElement("div", null, !r(e) && s && (e.isInIcons2020 ? i.a.createElement(p.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}) : t.isVisible ? i.a.createElement(h.a, {
						className: v.a.Chevron
					}) : i.a.createElement(b.a, {
						className: v.a.Chevron
					})))), t.isVisible && i.a.createElement(C, null, e.rule.descriptionRichText ? i.a.createElement(u.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: k
					}) : e.rule.descriptionHtml ? i.a.createElement(O, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const j = e => {
				const t = Object(o.a)();
				return e.rules.length > 0 ? i.a.createElement(a.a, {
					className: e.className,
					styles: e.styles,
					title: r.fbt._("{subredditName} Rules", [r.fbt._param("subredditName", `r/${e.subredditName}`)], {
						hk: "2AwRLk"
					}),
					redditStyle: e.redditStyle
				}, e.rules.map((function(n, r) {
					return i.a.createElement(w, {
						key: `rule${n.shortName}${n.createdUtc}`,
						rule: n,
						display: e.display,
						humanIndex: r + 1,
						isInIcons2020: t
					})
				}))) : null
			};
			t.b = e => i.a.createElement(j, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Fe
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/linkMatchers/index.ts"),
				b = n("./src/reddit/models/Image/index.tsx"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/Widgets/Button/index.m.less"),
				y = n.n(v);
			const _ = (e, t, n) => {
					let r = {},
						s = {};
					r = e.kind === g.f.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, n) => {
						let {
							color: r,
							fillColor: s,
							textColor: i
						} = e;
						return t && (r = i = n, s = "transparent"), {
							"--widget-button-background-color": `${s||"transparent"}`,
							"--widget-button-border": `1px solid ${r}`,
							"--widget-button-color": `${i||r}`
						}
					})(e, t, n);
					const i = e.hoverState || e;
					if (i.kind === g.f.Image) s = {
						"--widget-button-hover-background-image": `url('${i.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: r,
							textColor: a
						} = i;
						t && (e = a = n, r = "transparent"), s = {
							"--widget-button-hover-background-color": `${r||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${a||e}`
						}
					}
					return {
						...r,
						...s
					}
				},
				E = e => e.kind === g.f.Image ? y.a.imageButton : y.a.textButton,
				C = e => {
					const t = Object(g.n)(e),
						n = Object(p.h)(p.f, t);
					return n ? n.url : e.url
				},
				O = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: n
					} = e, r = Object(h.a)(e).button;
					return s.a.createElement(c.l, {
						className: E(t),
						style: _(t, n, r)
					}, t.kind === g.f.Text && s.a.createElement("span", {
						className: t.hoverState ? y.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && s.a.createElement("span", {
						className: y.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				k = e => s.a.createElement(l.b, {
					href: C(e.button),
					isSponsored: !1,
					source: null
				}, s.a.createElement(O, e)),
				w = m.a.wrapped(o.a, "RawHTMLDisplay", y.a);
			var j = Object(i.b)(() => Object(a.c)({
					forceRedditStyle: f.l,
					isNightmodeOn: x.V
				}))(e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && s.a.createElement(w, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== b.c)).map(t => s.a.createElement(k, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				S = n("./node_modules/fbt/lib/FbtPublic.js"),
				I = n("./src/lib/humanizeDate/index.ts"),
				N = n("./src/reddit/controls/TextButton/index.tsx"),
				P = n("./src/reddit/components/Widgets/Calendar/index.m.less"),
				T = n.n(P);
			const L = 100,
				B = {
					isExpanded: !1
				},
				F = m.a.wrapped(o.a, "RawHTMLDisplay", T.a),
				M = m.a.div("EventContainer", T.a),
				R = m.a.div("EventTitle", T.a),
				D = m.a.div("EventDate", T.a),
				A = m.a.div("EventLocation", T.a),
				H = m.a.div("EventDescription", T.a),
				W = m.a.wrapped(N.a, "ToggleDescription", T.a);
			class U extends s.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = B
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > L ? s.a.createElement(H, null, t.isExpanded ? e.text : e.text.slice(0, L), s.a.createElement(W, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? S.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : S.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : s.a.createElement(H, null, e.text)
				}
			}
			var V = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, n) => s.a.createElement(M, {
					key: `${n}-${t.title}`
				}, s.a.createElement(R, null, t.titleHtml ? s.a.createElement(F, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && s.a.createElement(D, null, Object(I.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && s.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						n = t.getHours(),
						r = t.getMinutes();
					return r < 10 ? `${n}:0${r}` : `${n}:${r}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && s.a.createElement(A, null, t.locationHtml ? s.a.createElement(F, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && s.a.createElement(U, {
					text: t.description
				})))),
				q = n("./src/reddit/components/TrackingHelper/index.tsx"),
				z = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var G = Object(q.c)(e => s.a.createElement(z.b, {
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
				Y = Object(i.b)(J),
				K = (e, t, n) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${n}</body>`;
			class Z extends s.a.Component {
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
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = K(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
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
			var X = Y(Z),
				Q = n("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				$ = n.n(Q);
			var ee = m.a.div("ImageFrame", $.a),
				te = n("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = n.n(te);
			var re = m.a.img("StyledImage", ne.a);
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
						state: n
					} = this;
					e.subredditName === t.subredditName && e.widget.data[n.imageIndex] && e.widget.data[n.imageIndex] === t.widget.data[n.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const n = e.widget.data[t.imageIndex],
						r = s.a.createElement(ee, null, s.a.createElement(re, {
							alt: S.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: n.url
						}));
					return n.linkUrl ? s.a.createElement(l.b, {
						href: n.linkUrl,
						isSponsored: !1,
						source: null
					}, r) : r
				}
			}
			var ie = se,
				ae = n("./src/config.ts"),
				oe = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				de = n("./src/lib/opener/index.ts"),
				ce = n("./src/reddit/components/Flair/index.tsx"),
				le = n("./src/reddit/controls/InternalLink/index.tsx"),
				ue = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				me = n("./src/reddit/models/Flair/index.ts"),
				pe = n("./src/reddit/selectors/subreddit.ts"),
				be = n("./src/reddit/components/Widgets/Moderator/index.m.less"),
				he = n.n(be);
			const ge = m.a.a("ExternalLink", he.a),
				fe = m.a.div("ModeratorListItem", he.a),
				xe = m.a.div("Username", he.a),
				ve = m.a.wrapped(ce.b, "FlairComponent", he.a),
				ye = e => e.authorFlairType === me.f.Richtext ? {
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
				_e = e => s.a.createElement(xe, null, `u/${e}`),
				Ee = m.a.wrapped(le.a, "InternalLink", he.a),
				Ce = m.a.div("LinkContainer", he.a),
				Oe = Object(a.c)({
					userIsBanned: pe.eb
				});
			var ke = Object(i.b)(Oe)(e => {
					const {
						subredditName: t,
						widget: n,
						userIsBanned: r
					} = e;
					return s.a.createElement(d.a, {
						styles: n.styles,
						title: S.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (n.mods && n.mods.length || r) && s.a.createElement(c.q, {
						kind: c.a.InternalLink,
						priority: c.b.Secondary,
						className: he.a.MessageModsButton,
						rel: de.b,
						target: de.c.BLANK,
						to: `${ae.a.redditUrl}/message/compose?to=/r/${t}`
					}, s.a.createElement(ue.a, {
						className: he.a.MessageModsButtonIcon
					}), S.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), n.mods && n.mods.length && !r ? s.a.createElement(s.a.Fragment, null, n.mods.map(e => s.a.createElement(fe, {
						key: e.name
					}, (e => s.a.createElement(oe.a, {
						to: `/user/${e.name}/`
					}, _e(e.name)))(e), s.a.createElement(ve, {
						flair: ye(e),
						forceSmallEmojis: !0
					}))), s.a.createElement(Ce, null, s.a.createElement(Ee, {
						to: `/r/${t}/about/moderators/`
					}, S.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : r ? s.a.createElement("div", {
						className: he.a.HelpCenterMessage
					}, S.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", s.a.createElement(ge, {
						href: `${ae.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: de.b,
						target: de.c.BLANK
					}, S.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : s.a.createElement("div", {
						className: he.a.UnModeratedSubreddit
					}, S.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", s.a.createElement(ge, {
						href: `${ae.a.redditUrl}/r/redditrequest`,
						rel: de.b,
						target: de.c.BLANK
					}, S.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", S.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				we = n("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				je = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Se = n("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Ie = n.n(Se);
			const Ne = m.a.div("WidgetContent", Ie.a),
				Pe = m.a.wrapped(o.a, "RawHTMLDisplay", Ie.a);
			var Te = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, s.a.createElement(Ne, null, s.a.createElement(Pe, {
					html: e.widget.textHtml || ""
				}))),
				Le = n("./src/reddit/components/Widgets/Base/index.tsx");
			var Be = e => s.a.createElement(Le.b, null, "This widget hasn't been implemented yet!");

			function Fe(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return ke;
						case "textarea":
							return Te;
						case "button":
							return j;
						case "subreddit-rules":
							return je.b;
						case "community-list":
							return G;
						case "calendar":
							return V;
						case "image":
							return ie;
						case "custom":
							return X;
						case "post-flair":
							return we.a;
						default:
							return Be
					}
				}(e.widget);
				return s.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/postFlair.ts"),
				o = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(r.b)(() => Object(s.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.S,
				hideNSFWPref: b.B,
				isActive: p.j,
				moderatorPermissions: u.j,
				modModeEnabled: c.Q,
				showEditFlair: m.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: n,
					selectedTemplateId: r
				}) => e(Object(a.h)({
					post: t,
					previewFlair: n,
					selectedTemplateId: r
				})),
				handleVote: n => {
					const r = n === d.a.upvoted ? Object(i.V)(t) : Object(i.r)(t);
					e(r)
				},
				onIgnoreReports: () => e(Object(i.S)(t)),
				onOpenReportsDropdown: t => e(Object(o.h)({
					tooltipId: t
				}))
			}), (e, t, n) => ({
				...n,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: r
				}) => t.dispatchFlairChanged({
					post: n.post,
					previewFlair: e,
					selectedTemplateId: r
				})
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return h
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "g", (function() {
				return w
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/graphql/operations/AddPredictionDrafts.json"),
				i = n("./src/graphql/operations/CreatePredictionTournament.json"),
				a = n("./src/graphql/operations/EndPredictionTournament.json"),
				o = n("./src/graphql/operations/GetPredictionChipPackages.json"),
				d = n("./src/graphql/operations/GetPredictionCoinPackages.json"),
				c = n("./src/graphql/operations/GetPredictionToken.json"),
				l = n("./src/graphql/operations/GetTournaments.json"),
				u = n("./src/graphql/operations/ResolvePrediction.json"),
				m = n("./src/graphql/operations/SubredditTopPredictors.json"),
				p = n("./src/graphql/operations/UpdatePredictionTournament.json"),
				b = n("./src/graphql/operations/VotePrediction.json");
			const h = (e, t, n) => Object(r.a)(e, {
					...d,
					variables: {
						subredditName: t,
						includeFreePackage: n
					}
				}),
				g = (e, {
					postId: t,
					optionId: n,
					coinPackageId: s,
					price: i
				}) => Object(r.a)(e, {
					...b,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: s,
							price: i
						}
					}
				}),
				f = (e, {
					postId: t,
					optionId: n
				}) => Object(r.a)(e, {
					...u,
					variables: {
						input: {
							postId: t,
							optionId: n
						}
					}
				});
			var x;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(x || (x = {}));
			const v = (e, {
					subredditId: t,
					period: n,
					top: s,
					includeCurrentRank: i,
					tournamentId: a
				}) => Object(r.a)(e, {
					...m,
					variables: {
						subredditId: t,
						period: n,
						top: s,
						includeCurrentRank: i,
						tournamentId: a
					}
				}),
				y = (e, t) => Object(r.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				_ = (e, t) => Object(r.a)(e, {
					...l,
					variables: t
				}),
				E = (e, t) => Object(r.a)(e, {
					...s,
					variables: {
						input: t
					}
				}),
				C = (e, t) => Object(r.a)(e, {
					...p,
					variables: {
						input: t
					}
				}),
				O = (e, t) => Object(r.a)(e, {
					...a,
					variables: {
						input: t
					}
				}),
				k = (e, t) => Object(r.a)(e, {
					...o,
					variables: t
				}),
				w = (e, t) => Object(r.a)(e, {
					...c,
					variables: t
				})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const r = Object(a.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(i.b)(r)(e => {
					const {
						featureEnabled: r,
						...i
					} = e, a = i;
					return r ? s.a.createElement(t, a) : void 0 !== n ? s.a.createElement(n, a) : null
				})
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/isFakeSubreddit/index.ts"),
				s = n("./src/reddit/constants/postLayout.ts");
			const i = Math.floor(100 * Math.random());
			var a;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(a || (a = {}));
			t.b = (e, t, n, a, o) => {
				const d = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: n,
					layout: s.b[t.prefs.layout]
				};
				return a && !Object(r.a)(a.name) && (d.subreddit = a.name, d.subreddit_screen = !0), d.wls = 6, d.whitelist_status = "all_ads", d.percentage = d.random_number = i, o && (d.position = o), d
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(r.a)(e).banner.iconImage ? String(Object(r.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/RichTextJson/index.ts");
			const s = "giphy|",
				i = "|downsized";

			function a(e, t) {
				return s + e + (t ? i : "")
			}

			function o(e) {
				return e && 0 === e.indexOf(s)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(o)
			}

			function c(e) {
				let t = e.substring(s.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...l(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, r.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === r.o).map(e => e.u)
			}
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			}));
			const r = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				s = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				i = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				}),
				a = e => t => ({
					source: "mod_edu_widget",
					action: "click",
					noun: e
				}),
				o = e => e => ({
					source: "mod_edu",
					action: "view",
					noun: "widget"
				})
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, n) {
			"use strict";
			n.d(t, "p", (function() {
				return a
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "k", (function() {
				return d
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "b", (function() {
				return C
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => ({
					...s.defaults(e),
					correlationId: Object(r.d)(r.a.PowerupsFlow, !1),
					profile: s.profile(e),
					subreddit: s.subreddit(e),
					powerups: {
						...s.subredditPowerups(e),
						freeCount: t,
						paidCount: n
					}
				}),
				a = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...i(t),
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				o = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...i(e),
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				d = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersup_become_hero",
					...i(e),
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersups_see_all_heroes",
					...i(e),
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				l = e => (t, n) => r => ({
					source: e,
					action: "click",
					noun: "powerup_supporter",
					...i(r),
					profile: {
						id: t,
						name: n,
						type: "default"
					}
				}),
				u = l("postlist_supporters_cta"),
				m = l("comm_heroes_modal"),
				p = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				b = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				h = () => e => ({
					source: "powerups",
					action: "click",
					noun: "premium",
					...i(e)
				}),
				g = (e, t) => n => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...i(n, e, t)
				}),
				f = (e, t) => n => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...i(n, e, t)
				}),
				x = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...i(n, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				v = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...i(e),
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				y = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...i(e),
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				_ = e => t => ({
					source: "powerups",
					action: "click",
					noun: "add_custom_emojis",
					...i(t),
					powerups: {
						...s.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				E = e => t => ({
					source: "powerups",
					action: "save",
					noun: "custom_emojis",
					...i(t),
					powerups: {
						...s.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				C = (e = 1) => t => ({
					source: "powerups",
					action: "delete",
					noun: "custom_emojis",
					...i(t),
					powerups: {
						...s.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				})
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "o", (function() {
				return s
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "q", (function() {
				return a
			})), n.d(t, "k", (function() {
				return o
			})), n.d(t, "s", (function() {
				return d
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "r", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "u", (function() {
				return h
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "w", (function() {
				return f
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "v", (function() {
				return v
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "g", (function() {
				return w
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "select",
					noun: "poll_option"
				}),
				i = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "select",
					noun: "prediction_option"
				}),
				a = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_info_modal"
				}),
				o = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "close",
					noun: "predict_info_modal"
				}),
				d = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_option_modal"
				}),
				c = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => s => ({
					...Object(r.defaults)(s),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(s, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				l = ({
					pollId: e,
					selectedNumberTokens: t
				}) => n => ({
					...Object(r.defaults)(n),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(n, e, !1, void 0, void 0, t)
				}),
				u = ({
					pollId: e,
					selectedNumberCoins: t,
					selectedNumberTokens: n
				}) => s => ({
					...Object(r.defaults)(s),
					source: "poll",
					action: "close",
					noun: "prediction_modal",
					poll: Object(r.poll)(s, e, !1, t, n)
				}),
				m = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "click",
					noun: "add_coins"
				}),
				p = e => t => ({
					...Object(r.defaults)(t),
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
					...Object(r.defaults)(t),
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
				}) => n => ({
					...Object(r.defaults)(n),
					source: "poll",
					action: "view",
					noun: "token_claim_modal",
					poll: Object(r.poll)(n, t, !1, void 0, void 0, e)
				}),
				g = ({
					pageType: e
				}) => t => ({
					...Object(r.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				f = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				x = () => e => ({
					...Object(r.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				v = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				y = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				_ = () => e => ({
					...Object(r.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				E = () => e => ({
					...Object(r.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				C = () => e => ({
					...Object(r.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "next"
				}),
				O = () => e => ({
					...Object(r.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "add_more"
				}),
				k = () => e => ({
					...Object(r.defaults)(e),
					source: "prediction",
					action: "click",
					noun: "start_tournament"
				}),
				w = () => e => ({
					...Object(r.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return O
			}));
			var r, s, i = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/helpers/isComment.ts"),
				d = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(r || (r = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(s || (s = {}));
			const p = e => ({
					...u.defaults(e),
					source: s.LINK,
					action: i.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				b = e => ({
					...u.defaults(e),
					source: s,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: r.SUBREDDIT_HOVERCARD,
						type: c.f.Listing,
						title: r.SUBREDDIT_HOVERCARD
					}
				}),
				h = (e, {
					renderingObjectInfo: t,
					pageLayer: n
				}) => {
					if (t && (Object(o.b)(t) || Object(d.b)(t))) return Object(o.b)(t) ? m.SourceElement.Comment : Object(a.w)(n) ? m.SourceElement.PostDetail : Object(a.E)(n) ? m.SourceElement.ListingPostDetail : void 0
				},
				g = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: r
					} = t;
					if (!n || !Object(d.b)(n) && !Object(o.b)(n)) return {
						outbound: void 0
					};
					const s = Object(d.b)(n) ? "postId" : "commentId",
						i = {
							url: `/r/${r}/`,
							sourceElement: h(0, t),
							subredditName: r,
							[s]: n.id
						},
						a = Object(l.A)(e, {
							subredditName: r
						});
					return a ? {
						outbound: {
							...i,
							url: a.url,
							subredditId: a.id
						}
					} : {
						outbound: {
							...i
						}
					}
				},
				f = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(d.b)(n) && !Object(o.b)(n)) return {};
					const r = Object(d.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.post(e, n.id),
						subreddit: u.subredditById(e, r),
						...g(e, t)
					}
				},
				x = e => t => ({
					...p(t),
					...f(t, e)
				}),
				v = e => t => ({
					...b(t),
					source: "global",
					action: i.c.VIEW,
					noun: r.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				y = (e, t) => n => ({
					...b(n),
					source: s.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: r.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				_ = (e, t) => n => ({
					...b(n),
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				E = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				C = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				O = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "r", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "o", (function() {
				return k
			}));
			var r = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
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
				g = d("save_wiki_page_settings"),
				f = d("copy_url"),
				x = d("add_wiki_subreddit_contributor"),
				v = d("remove_wiki_subreddit_contributor"),
				y = d("ban_wiki_contributor"),
				_ = d("unban_wiki_contributor"),
				E = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				C = {
					[r.a.Inherit]: "subreddit_wiki_perms",
					[r.a.Contributors]: "only_wiki_contributors",
					[r.a.Mods]: "only_mods"
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
				k = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: s.actionInfo(t, {
						settingValue: C[e]
					})
				})
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = r.Z
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, n) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/Envelope/index.m.less"),
				d = n.n(o);
			t.a = e => {
				const t = Object(i.a)();
				return s.a.createElement("i", {
					className: `${Object(a.b)(t?"message":"envelope",e.isFilled)} ${d.a.Envelope} ${e.className}`
				})
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/Upload/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 17",
				version: "1.1"
			}, s.a.createElement("path", {
				d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
				id: "a"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = n.n(o);
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
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var r;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, n) {
			"use strict";
			var r, s;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(r || (r = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/constants/postLayout.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.e[Object(i.O)(e, {})] === s.d.Card,
				d = e => Object(a.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: r.L
				}) === r.ab.Treatment
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = e => r.nb.Enabled === Object(s.c)(e, {
				experimentEligibilitySelector: i.J,
				experimentName: r.mb
			})
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/predictions/index.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			Object(r.a)({
				features: {
					predictions: s.a
				}
			});
			const a = e => {
					const t = (e => {
						var t, n;
						return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const n = Object(i.cb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							r = t.formData.polls,
							s = r.options.map(e => ({
								text: e.text
							})),
							a = {};
						return n.document ? a.richText = JSON.stringify({
							document: n.document
						}) : n.markdown && (a.markdown = n.markdown), {
							title: n.title,
							isLiveChat: n.isChatPost,
							isNsfw: n.isNSFW,
							isSpoiler: n.isSpoiler,
							votingEndsAt: r.endDate.toISOString(),
							body: a,
							options: s
						}
					}) : []
				},
				o = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			const o = e => s.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: o,
						experimentName: r.ad
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === r.fd.SmIcon || t === r.fd.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const n = Object(a.X)(e, {
						subredditName: t
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit~SubredditWiki.cce0b8de14b19be08b24.js.map