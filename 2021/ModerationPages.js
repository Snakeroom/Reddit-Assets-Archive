// https://www.redditstatic.com/desktop2x/ModerationPages.7876470bb429870a16ff.js
// Retrieved at 5/12/2021, 5:50:32 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationPages"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/chat/controls/Svg/index.m.less"),
				d = s.n(i);
			t.a = r.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: s,
						active: n,
						hover: r
					} = e;
				return a.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[d.a.disable]: s,
						[d.a.active]: n,
						[d.a.hover]: !!r
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", d.a)
		},
		"./src/graphql/operations/AllModerators.json": function(e) {
			e.exports = JSON.parse('{"id":"e29846f6d98c"}')
		},
		"./src/graphql/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"1e0a4bfe5ac9"}')
		},
		"./src/graphql/operations/DeleteScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"dea861ad7f0d"}')
		},
		"./src/graphql/operations/FetchModerationLogActions.json": function(e) {
			e.exports = JSON.parse('{"id":"f20f90e251f3"}')
		},
		"./src/graphql/operations/FetchSubredditTrafficStats.json": function(e) {
			e.exports = JSON.parse('{"id":"d2b39ab0293a"}')
		},
		"./src/graphql/operations/GeoPlaceAutocomplete.json": function(e) {
			e.exports = JSON.parse('{"id":"8a89fd7c7db1"}')
		},
		"./src/graphql/operations/SetSubredditGeoPlace.json": function(e) {
			e.exports = JSON.parse('{"id":"ece6b91ed02d"}')
		},
		"./src/graphql/operations/SubmitScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"6f9e584d390a"}')
		},
		"./src/graphql/operations/SubredditFlairedRedditorByName.json": function(e) {
			e.exports = JSON.parse('{"id":"68ffe6747ab8"}')
		},
		"./src/graphql/operations/SubredditFlairedRedditors.json": function(e) {
			e.exports = JSON.parse('{"id":"2967fe5e7d03"}')
		},
		"./src/graphql/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/graphql/operations/SubredditWiki.json": function(e) {
			e.exports = JSON.parse('{"id":"5834be60ee7a"}')
		},
		"./src/graphql/operations/SubredditWikiBannedContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"9b728f1ed735"}')
		},
		"./src/graphql/operations/SubredditWikiContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"6ff60c2af7f1"}')
		},
		"./src/graphql/operations/SubredditWikiPageSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"03acb455993d"}')
		},
		"./src/graphql/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"f5276d63e133"}')
		},
		"./src/graphql/operations/WikiComparisonDiff.json": function(e) {
			e.exports = JSON.parse('{"id":"37afdc03bbf6"}')
		},
		"./src/graphql/operations/WikiRevisions.json": function(e) {
			e.exports = JSON.parse('{"id":"83e11ebf7cbf"}')
		},
		"./src/higherOrderComponents/withImageUploads.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/imageUploads.ts"),
				r = s("./src/reddit/models/Image/index.tsx"),
				i = s("./src/reddit/selectors/imageUploads.ts");
			const d = Object(a.c)({
				_imageUploads: i.b
			});

			function l(e, t) {
				return Object(n.b)(d, e => ({
					uploadImage: s => e(t(s)),
					cancelUpload: t => e(Object(o.h)(t))
				}), (function(e, t, s) {
					return {
						...s,
						...t,
						getImageUploadsIfModified: function(t) {
							return function(e, t) {
								const s = [];
								let n = !1;
								for (const a of t)
									if (Object(r.i)(a) || e[a.id])
										if (e[a.id]) {
											const t = e[a.id];
											s.push(t), n = n || t !== a
										} else n = !0;
								else s.push(a);
								return n ? s : null
							}(e._imageUploads, t)
						}
					}
				}))(e)
			}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			let n;
			const a = new Map,
				o = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), n = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!o.get(t)) {
						o.set(t, s);
						const n = a.get(t);
						if (n) {
							n(e, s && !!o.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const r = (e, t) => {
					try {
						a.set(e, t), n && n.observe(e)
					} catch (s) {
						0
					}
				},
				i = e => {
					try {
						a.delete(e), n && n.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "i", (function() {
				return k
			}));
			var n = s("./node_modules/linkify-it/index.js"),
				a = s.n(n),
				o = s("./node_modules/tlds/index.js"),
				r = s.n(o),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./node_modules/lodash/values.js"),
				l = s.n(d);
			const c = e => l()(i.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = a()().tlds(r.a).set({
					fuzzyIP: !0
				}),
				h = a()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				b = m(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				g = m(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				f = a()().tlds(r.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				x = a()().tlds(r.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				E = p.normalize;
			p.normalize = e => {
				E.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const v = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const s = c(e.text);
						return !s || s && t
					})
				},
				C = e => {
					return [...g.match(e) || [], ...h.match(e) || []].map(e => !c(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				k = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const s = t[0];
						return s.lastIndex === e.length ? s : ((e, t) => {
							const s = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(s)) return t.lastIndex += s.length, t.url += s, t
						})(e, s)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const o = Object(a.e)(e),
					r = encodeURIComponent(`${t}${o}`);
				return `${n.a.accountManagerOrigin}${s||"/login"}?dest=${r}`
			}
		},
		"./src/lib/stripQueryParams/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(n);
			t.a = e => {
				const t = a.a.parse(e);
				return t.search = void 0, t.query = null, a.a.format(t)
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/bulkActions/constants.ts");
			const o = Object(n.a)(a.c),
				r = Object(n.a)(a.b),
				i = Object(n.a)(a.a)
		},
		"./src/reddit/actions/grantUserFlair/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return R
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/graphql/operations/SubredditFlairedRedditorByName.json"),
				r = s("./src/graphql/operations/SubredditFlairedRedditors.json"),
				i = s("./src/lib/makeGqlRequest/index.ts");
			var d = s("./src/reddit/endpoints/flair/index.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts");
			var m = e => {
				const {
					subreddit: t,
					redditorInfoByName: s
				} = e.data, {
					id: n,
					flairedRedditorByName: a
				} = t, o = {};
				let r = null;
				if (!s) return {
					subredditId: n,
					searchResult: r,
					flairedUsers: o
				};
				const {
					name: i
				} = s;
				if (r = i, a) {
					const {
						flair: e,
						redditor: t
					} = a, {
						name: s
					} = t;
					e && (o[s] = Object(u.a)(e)[0])
				}
				return {
					subredditId: n,
					searchResult: r,
					flairedUsers: o
				}
			};
			var p = e => {
					const {
						subreddit: t
					} = e.data, {
						id: s,
						flairedRedditors: n
					} = t, {
						pageInfo: a,
						edges: o
					} = n, r = [], i = {};
					return o.forEach(e => {
						const {
							node: t
						} = e, {
							flair: s,
							redditor: {
								name: n
							}
						} = t;
						if (r.push(n), s) {
							const e = Object(u.a)(s)[0];
							i[n] = e
						}
					}), {
						subredditId: s,
						flairedUsers: i,
						userOrder: r,
						pageInfo: a
					}
				},
				h = s("./src/reddit/models/SubredditModeration/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/models/User/index.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/actions/grantUserFlair/constants.ts");
			const E = Object(a.a)(x.i),
				v = Object(a.a)(x.g),
				C = Object(a.a)(x.f),
				_ = (e, t) => async (s, a, {
					gqlContext: o
				}) => {
					const d = t && t.after || "",
						c = t && t.before || "",
						u = Object(f.F)(a(), e),
						m = Object(h.d)(u, d, c);
					if (!!a().pages.modHub.flairedUsers.userOrder[m]) return;
					s(E());
					const g = await ((e, t, s) => Object(i.a)(e, {
						...r,
						variables: {
							subredditName: t,
							...s
						}
					}))(o(), e, t);
					if (g.ok) {
						const e = {
							...p(g.body),
							key: m
						};
						s(v(e))
					} else {
						const e = g.error;
						s(C(e)), s(Object(l.f)({
							kind: b.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							})
						}))
					}
				}, k = Object(a.a)(x.l), y = Object(a.a)(x.k), O = Object(a.a)(x.j), S = (e, t) => async (s, a, {
					gqlContext: r
				}) => {
					const d = Object(f.T)(a(), {
						subredditId: e
					}).name;
					s(k());
					const c = await ((e, t, s) => Object(i.a)(e, {
						...o,
						variables: {
							subredditName: t,
							name: s
						}
					}))(r(), d, t);
					if (c.ok) {
						const e = m(c.body);
						s(y(e))
					} else s(O(c.error)), s(Object(l.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						})
					}))
				}, w = Object(a.a)(x.e), j = Object(a.a)(x.c), I = Object(a.a)(x.d), N = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const r = a(),
						i = Object(f.T)(r, {
							subredditId: t
						}).name;
					s(w());
					const c = await Object(d.a)(o(), e, i);
					if (c.ok) {
						s(j({
							userName: e,
							subredditId: t
						}));
						const a = Object(l.e)(n.fbt._("User flair cleared", null, {
							hk: "4yyH00"
						}), b.b.SuccessMod);
						s(Object(l.f)(a))
					} else {
						s(I());
						const a = Object(l.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "uG2KO"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "3oiY99"
						}), N(e, t));
						s(Object(l.f)(a))
					}
					return c.ok || c.error
				}, T = Object(a.a)(x.h), P = Object(a.a)(x.b), M = Object(a.a)(x.a), R = (e, t, s) => async (a, o, {
					apiContext: r
				}) => {
					const i = o(),
						u = i.pages.modHub.flairedUsers.search.result === e && !i.pages.modHub.flairedUsers.models[e],
						m = {
							userName: e,
							subredditId: t,
							applied: s
						},
						p = s && s.templateId,
						h = Object(f.T)(i, {
							subredditId: t
						}),
						x = s && Object(c.g)(s),
						E = s ? s.cssClass : void 0,
						v = await Object(d.g)(r(), e, h.name, p, x, E);
					if (v.ok) {
						if (u) {
							let e;
							Object.keys(i.pages.modHub.flairedUsers.userOrder).forEach(t => {
								!1 === i.pages.modHub.flairedUsers.pageInfo[t].hasNextPage && i.pages.modHub.flairedUsers.userOrder[t].length < 50 && (e = t)
							});
							const t = {
								...m,
								key: e
							};
							a(M(t))
						}
						e === (i.user.account && Object(g.e)(i.user.account)) ? a(T(m)) : u || a(P(m))
					} else {
						const e = Object(l.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4hXQvr"
						}), b.b.Error);
						a(Object(l.f)(e))
					}
					return v.ok || v.error
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return F
			})), s.d(t, "d", (function() {
				return B
			})), s.d(t, "f", (function() {
				return q
			})), s.d(t, "a", (function() {
				return G
			})), s.d(t, "b", (function() {
				return z
			})), s.d(t, "c", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/bulkActions/index.ts"),
				i = s("./src/reddit/actions/removalReasons/index.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/endpoints/modQueue/index.ts"),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				u = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/models/ModQueue/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/modQueue.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/telemetry/index.ts"),
				E = s("./src/lib/initializeClient/installReducer.ts"),
				v = s("./src/reddit/reducers/pages/modHub/index.ts"),
				C = s("./src/reddit/actions/modQueue/constants.ts");
			Object(E.a)({
				pages: {
					modHub: v.a
				}
			});
			const _ = Object(o.a)(C.j),
				k = Object(o.a)(C.i),
				y = Object(o.a)(C.h),
				O = Object(o.a)(C.g),
				S = Object(o.a)(C.f),
				w = Object(o.a)(C.e),
				j = Object(o.a)(C.n),
				I = Object(o.a)(C.m),
				N = Object(o.a)(C.l),
				T = Object(o.a)(C.q),
				P = Object(o.a)(C.p),
				M = Object(o.a)(C.o),
				R = Object(o.a)(C.w),
				A = Object(o.a)(C.v),
				L = Object(o.a)(C.u),
				F = (e, t, s) => async (o, r, {
					apiContext: i
				}) => {
					let c, u, m;
					switch (t) {
						case a.mb.Edited:
							c = O, u = w, m = S;
							break;
						case a.mb.Modqueue:
							c = _, u = y, m = k;
							break;
						case a.mb.Reports:
							c = j, u = N, m = I;
							break;
						case a.mb.Spam:
							c = T, u = M, m = P;
							break;
						case a.mb.Unmoderated:
							c = R, u = L, m = A;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					o(c());
					const b = await Object(l.b)(i(), t, s);
					if (b.ok) {
						o(m({
							listingKey: e,
							page: `${s.page||p.b}`,
							response: b.body
						}))
					} else o(u(b.error)), o(Object(d.f)({
						kind: h.b.Error,
						text: n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, D = Object(o.a)(C.k), U = Object(o.a)(C.b), B = e => async (t, s, {
					apiContext: a
				}) => {
					const o = s(),
						r = o.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						i = o.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						c = o.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: u
						} = o.platform.currentPage.urlParams,
						m = u;
					if (e && i || c || !r) return;
					const p = await Object(l.b)(a(), m, {
						moderated_after: r
					});
					p.ok ? (t(D(p.body)), p.body.moderatedAfter ? t(B()) : t(U())) : t(Object(d.f)({
						kind: h.b.Error,
						text: n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, W = Object(o.a)(C.t), H = Object(o.a)(C.s), V = Object(o.a)(C.r), q = (e, t, s) => async (a, o, {
					apiContext: E
				}) => {
					a(Object(r.c)());
					const v = o(),
						C = Object(b.g)(v),
						_ = v.user.account && v.user.account.displayText;
					Object(c.d)(c.a.ModQueue);
					const k = Object(c.c)(c.a.ModQueue);
					Object(x.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...f.defaults(v),
						actionInfo: f.actionInfo(v, {
							count: C.length,
							paneName: v.platform.currentPage ? v.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: f.screen(v),
						correlationId: k
					});
					for (let t = 0; t < C.length; t++) {
						const s = C[t];
						let n = e;
						[p.a.Approve, p.a.Remove, p.a.Spam].includes(e) && (Object(m.a)(s) ? n += "_link" : n += "_comment"), Object(x.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: n,
							...f.defaults(v),
							actionInfo: f.actionInfo(v, {
								count: C.length,
								paneName: v.platform.currentPage ? v.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: f.comment(v, s),
							post: f.post(v, s),
							profile: f.profileByPostOrCommentId(v, s),
							screen: f.screen(v),
							subreddit: f.subredditByPostOrCommentId(v, s),
							correlationId: k
						})
					}
					Object(c.b)(c.a.ModQueue);
					const y = {
						ids: C
					};
					t && (y.text = Object(u.g)(t) || "", y.flairTemplateId = ""), s && (y.cssClass = s, y.flairTemplateId = s);
					const O = await Object(l.a)(E(), e, y);
					if (O.ok) {
						a(Object(r.b)({
							...O.body,
							operation: e,
							ids: C,
							username: _,
							options: {
								flair: t
							}
						}));
						const s = function(e, t) {
							switch (e) {
								case p.a.Approve:
									return n.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [n.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case p.a.Flair:
									return n.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [n.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case p.a.IgnoreReports:
									return n.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [n.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case p.a.Lock:
									return n.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [n.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case p.a.MarkNSFW:
									return n.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [n.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case p.a.RemovalReason:
									return n.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [n.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case p.a.Remove:
									return n.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [n.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case p.a.Spam:
									return n.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [n.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case p.a.Spoiler:
									return n.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [n.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case p.a.UnignoreReports:
									return n.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [n.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case p.a.Unlock:
									return n.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [n.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case p.a.UnmarkNSFW:
									return n.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [n.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case p.a.Unspoiler:
								case p.a.Unspoiler:
									return n.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [n.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, C.length);
						if (e !== p.a.Approve && e !== p.a.Flair) {
							let t, o;
							const c = v.platform.currentPage && v.platform.currentPage.queryParams && v.platform.currentPage.queryParams.subreddit,
								u = c && Object(g.F)(v, c);
							e === p.a.Remove && u && C.length > 1 && (t = n.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), o = Object(i.fetchReasonsAndOpenModal)(u, C));
							const m = Object(d.e)(s, h.b.Undo, n.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, {
								apiContext: s
							}) => {
								e(W());
								const a = t(),
									o = Object.keys(a.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									i = a.pages.modHub.modQueue.bulkAction.undoLastAction[o],
									c = a.user.account && a.user.account.displayText;
								e(Object(r.c)());
								const u = await Object(l.a)(s(), o, {
									ids: i
								});
								u.ok ? e(H({
									...u.body,
									operation: o,
									ids: i,
									username: c
								})) : (e(V(u.error)), e(Object(d.f)({
									kind: h.b.Error,
									text: n.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, o);
							a(Object(d.f)(m))
						} else {
							const e = Object(d.e)(s, h.b.SuccessMod);
							a(Object(d.f)(e))
						}
					} else {
						a(Object(r.a)(O.error));
						const e = Object(d.e)(n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), h.b.Error);
						a(Object(d.f)(e))
					}
				}, G = Object(o.a)(C.a), z = Object(o.a)(C.c), K = Object(o.a)(C.d)
		},
		"./src/reddit/actions/pages/moderationPages/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "moderationPageRequested", (function() {
				return ge
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/lib/assertNever.ts"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				i = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/scheduledPosts/index.ts"),
				l = s("./src/reddit/helpers/canAccessModerationPage/index.ts"),
				c = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				u = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				m = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				p = s("./src/reddit/helpers/trackers/screenview.ts"),
				h = s("./src/reddit/actions/contentControls/index.ts"),
				b = s("./src/reddit/actions/emoji.ts"),
				g = s("./src/reddit/actions/eventPosts/index.ts"),
				f = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				x = s("./src/reddit/actions/grantUserFlair/index.ts"),
				E = s("./src/lib/makeActionCreator/index.ts"),
				v = s("./src/reddit/endpoints/subredditModeration/moderationLog.ts"),
				C = s("./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts"),
				_ = s("./src/reddit/models/SubredditModeration/ModerationLog/index.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/actions/moderationLog/constants.ts");
			const O = Object(E.a)(y.b),
				S = (e, t) => async (s, n, {
					gqlContext: a
				}) => {
					const o = await Object(v.a)(a(), e, t);
					if (o.body) {
						const t = o.body.data.subreddit.moderation;
						if (t && t.actions) {
							const a = n(),
								o = Object(C.b)(t.actions),
								r = Object(k.F)(a, e),
								{
									hasNextPage: i,
									hasPreviousPage: d,
									endCursor: l,
									startCursor: c
								} = t.actions.pageInfo,
								u = Object(_.a)(r, l, c),
								m = [];
							o.forEach(e => {
								m.push(e.id)
							}), s(O({
								hasNextPage: i,
								hasPreviousPage: d,
								endCursor: l,
								key: u,
								startCursor: c,
								normalizedModerationLog: o,
								actionIds: m,
								subredditId: r
							}))
						}
					}
				};
			var w = s("./src/reddit/actions/modQueue/index.ts"),
				j = s("./src/reddit/actions/pages/chatSettings.ts"),
				I = s("./src/reddit/actions/pages/subreddit.ts"),
				N = s("./src/reddit/actions/pages/subredditWiki/index.ts"),
				T = s("./src/reddit/actions/platform.ts"),
				P = s("./src/reddit/actions/profile/index.ts"),
				M = s("./src/reddit/actions/removalReasons/index.ts"),
				R = s("./src/reddit/actions/streaming/modSettings.ts"),
				A = s("./src/reddit/actions/subreddit.ts"),
				L = s("./src/reddit/actions/subreddit/questions.ts"),
				F = s("./src/reddit/actions/subredditModeration/index.ts"),
				D = s("./src/reddit/actions/subredditModeration/approvedSubmitters.ts"),
				U = s("./src/reddit/actions/subredditModeration/ban.ts"),
				B = s("./src/reddit/actions/subredditModeration/mute.ts"),
				W = s("./src/reddit/actions/subredditSettings.ts"),
				H = s("./src/reddit/actions/tags/index.ts"),
				V = s("./node_modules/fbt/lib/FbtPublic.js"),
				q = s("./src/reddit/actions/toaster.ts"),
				G = s("./src/reddit/actions/trafficStats/constants.ts"),
				z = s("./src/graphql/operations/FetchSubredditTrafficStats.json"),
				K = s("./src/lib/makeGqlRequest/index.ts");
			var X = s("./node_modules/lodash/forEach.js"),
				Q = s.n(X),
				J = s("./src/reddit/helpers/graphql/helpers.ts"),
				Y = s("./src/reddit/models/TrafficStats/index.ts");
			const Z = e => ({
					desktop: new Array(e).fill(0),
					oldReddit: new Array(e).fill(0),
					mWeb: new Array(e).fill(0),
					apps: new Array(e).fill(0),
					total: new Array(e).fill(0)
				}),
				$ = (e, t) => {
					return Object(J.d)(e.startsAt) > Object(J.d)(t.startsAt) ? 1 : -1
				},
				ee = (e, t, s) => {
					const n = {
							pageViews: Z(t),
							uniqueUsers: Z(t)
						},
						a = Object(J.d)(e[0].startsAt);
					return e.map(e => {
						const o = Object(J.d)(e.startsAt),
							r = new Date(o),
							i = t === Y.c ? r.getMonth() : Math.round((o - a) / s) % t,
							d = Y.d[e.client];
						n.pageViews[d][i] += e.pageViews, n.uniqueUsers[d][i] += e.uniqueUsers
					}), n
				};
			var te = s("./src/reddit/models/Toast/index.ts");
			const se = Object(E.a)(G.b),
				ne = Object(E.a)(G.c),
				ae = Object(E.a)(G.a),
				oe = e => async (t, s, {
					gqlContext: n
				}) => {
					const a = Object(k.T)(s(), {
						subredditId: e
					}).name;
					t(ne({
						subredditId: e
					}));
					const r = await ((e, t) => Object(K.a)(e, {
						...z,
						variables: t
					}))(n(), {
						subredditName: a
					});
					if (r.ok) {
						const s = r.body.data.subreddit.moderation;
						if (s && s.trafficStats) {
							const n = (e => {
								const t = Q()(e, (e, t) => e.sort($)),
									s = t.subscriptionData,
									n = s.map(e => e.subscribers),
									a = s.map(e => e.unsubscribers),
									r = ee(t.hourStats, Y.b, o.L),
									i = ee(t.dayStats, Y.a, o.x),
									d = ee(t.monthStats, Y.c, o.kb);
								return {
									pageViews: {
										byHour: r.pageViews,
										byDay: i.pageViews,
										byMonth: d.pageViews
									},
									uniqueUsers: {
										byHour: r.uniqueUsers,
										byDay: i.uniqueUsers,
										byMonth: d.uniqueUsers
									},
									subscribers: n,
									unsubscribers: a
								}
							})(s.trafficStats);
							t(se({
								subredditId: e,
								trafficStats: n
							}))
						}
					} else t(ae({
						subredditId: e
					})), t(q.f({
						id: "error-block-trafficStats",
						kind: te.b.Error,
						text: V.fbt._("Try again later", null, {
							hk: "41Goel"
						})
					}))
				};
			var re = s("./src/reddit/models/ModQueue/index.ts"),
				ie = s("./src/reddit/models/ScheduledPost/index.ts"),
				de = s("./src/reddit/reducers/pages/modHub/index.ts"),
				le = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ce = s("./src/reddit/selectors/modQueue.ts"),
				ue = s("./src/reddit/selectors/platform.ts"),
				me = s("./src/reddit/selectors/postCreations.ts"),
				pe = s("./src/reddit/selectors/profile.ts"),
				he = s("./src/reddit/selectors/streamingModSettings.ts"),
				be = s("./src/reddit/selectors/user.ts");
			Object(r.a)({
				pages: {
					modHub: de.a
				}
			});
			const ge = e => async (t, s, r) => {
				const {
					params: E
				} = e, {
					pageName: v,
					profileName: C,
					subredditName: _
				} = E;
				if (v === o.Wb.Wiki) {
					if (await t(Object(N.handleWikiRedirects)(e))) return
				}
				if (v === o.Wb.SubredditContent) return void t(Object(n.c)(ie.r));
				const y = e.queryParams,
					O = y.page || re.b,
					V = s();
				if (_) {
					const e = Object(i.a)(_, o.R.HOT),
						s = V.listings.postOrder.ids[e],
						n = V.listings.postOrder.api.error[e],
						a = V.listings.postOrder.api.pending[e];
					if (n) return;
					a || s && !n || await t(Object(I.subredditDataRequested)(e, _, {}))
				} else C && await t(Object(P.e)(C));
				if (!Object(be.J)(s()) && v !== o.Wb.Moderators && v !== o.Wb.SubredditRules) return void Object(u.a)(t, s());
				if (Object(p.i)(s(), !0, _, C), !v) return;
				let q, G, z, K, X, Q, J, Y, Z, $ = !1;
				switch (v) {
					case o.Wb.Awards:
						q = f.i;
						break;
					case o.Wb.Muted:
						q = B.b;
						break;
					case o.Wb.Contributors:
						q = D.b;
						break;
					case o.Wb.Banned:
						q = U.c;
						break;
					case o.Wb.Moderators:
						z = !0;
						break;
					case o.Wb.Removal:
						q = M.removalReasonsRequested;
						break;
					case o.Wb.ContentControls:
						q = h.a, Q = !0;
						break;
					case o.Wb.ChatSettings:
						$ = !0;
						break;
					case o.Wb.CommunitySettings:
						q = W.h, J = !0;
						break;
					case o.Wb.Flair:
						q = x.b, X = !0;
						break;
					case o.Wb.UserFlair:
					case o.Wb.PostFlair:
						q = void 0;
						break;
					case o.Wb.Emojis:
						q = b.l;
						break;
					case o.Wb.Badges:
					case o.Wb.Emotes:
					case o.Wb.SubredditRules:
						q = void 0;
						break;
					case o.Wb.Traffic:
						q = oe;
						break;
					case o.Wb.Modlog:
						q = S, K = !0;
						break;
					case o.Wb.Streaming:
						q = R.g;
						break;
					case o.Wb.Modqueue:
					case o.Wb.Reports:
					case o.Wb.Spam:
					case o.Wb.Edited:
					case o.Wb.Unmoderated:
						G = v;
						break;
					case o.Wb.Wiki:
					case o.Wb.WikiContributors:
					case o.Wb.WikiBanned:
						await t(Object(N.subredditWikDataRequested)(E, y, !0));
						break;
					case o.Wb.ScheduledPostContent:
						Y = !0, q = d.i;
						break;
					case o.Wb.EventPostContent:
						Z = !0;
						break;
					case o.Wb.Predictions:
						break;
					default:
						return Object(a.a)(v)
				}
				const ee = s(),
					te = !!_ && Object(me.hb)(ee),
					se = Object(be.G)(ee),
					ne = _ ? Object(k.W)(ee, {
						subredditName: _.toLowerCase()
					}) : Object(pe.q)(ee, {
						profileName: C.toLowerCase()
					}),
					ae = _ && Object(k.F)(ee, _),
					de = C && Object(pe.m)(ee, C),
					ge = ae || de;
				ae && !Object(he.b)(V, ae) && await t(Object(R.g)(ae));
				const fe = !!ae && Object(he.c)(ee, ae),
					xe = Object(le.k)(ee, {
						subredditId: ge
					});
				if (Object(l.a)(v, xe, te, se, fe)) {
					if (G && _) {
						const e = Object(c.a)({
								onlyOfType: y.only,
								subreddit: _
							}),
							n = !!Object(ce.d)(V, {
								pageName: G,
								page: `${O}`,
								subredditName: _,
								queryParams: y
							}),
							a = V.pages.modHub.modQueue[G].api.error;
						if (Object(ce.c)(V, {
								pageName: G
							}) || n && !a) return;
						if (!Object(ue.n)(V)) {
							const n = Object(w.e)(e, G, {
								...y,
								subreddit: _
							});
							await n(t, s, r)
						}
					} else if (z && ae) {
						if (await Object(F.g)(ae, y)(t, s, r), V.moderatingSubreddits[ae]) {
							await Object(F.e)(ae, y)(t, s, r), V.pages.modHub.moderators.invitedModerators.userOrder[ae] || await Object(F.f)(ae)(t, s, r)
						}
					} else Q && _ ? await q(_)(t, s, r) : $ && ae ? await Object(j.e)(ae)(t, s, r) : J && ae ? await Promise.all([q(_, ae)(t, s, r), Object(H.k)(ae, m.a.communitySettings)(t, s, r), Object(L.b)(ae)(t, s, r)]) : K || X ? await q(_, y)(t, s, r) : Y && ae ? await Object(d.i)({
						subredditId: ae
					})(t, s, r) : Z && _ ? await Object(g.eventPostsRequested)(_)(t, s, r) : q && await q(ge, y)(t, s, r);
					_ && ae && !V.subreddits.rules[ae] && await A.o(_)(t, s, r), t(T.l({
						title: ne
					}))
				}
			}
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				a = s("./src/reddit/helpers/routeKey/index.ts"),
				o = s("./src/reddit/helpers/trackers/screenview.ts"),
				r = s("./src/telemetry/index.ts"),
				i = s("./src/telemetry/models/Timer.ts");
			const d = () => async (e, t) => {
				const s = t(),
					{
						currentPage: d
					} = s.platform;
				if (!d) return;
				const l = d.routeMatch,
					c = Object(n.a)(s),
					u = Object(a.b)(l, s, c);
				u && r.c.has(u) && Object(o.k)(l, s, i.TimerType.InApp, r.c.end(u))
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "subredditWikiDataPending", (function() {
				return qe
			})), s.d(t, "subredditWikiDataLoaded", (function() {
				return Ge
			})), s.d(t, "subredditWikiDataFailed", (function() {
				return ze
			})), s.d(t, "fetchSubredditWikiData", (function() {
				return Xe
			})), s.d(t, "handleWikiRedirects", (function() {
				return Qe
			})), s.d(t, "subredditWikDataRequested", (function() {
				return Je
			})), s.d(t, "subredditWikiPageRequested", (function() {
				return Ye
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/isEmpty.js"),
				o = s.n(a),
				r = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/lib/makeListingKey/index.ts"),
				c = s("./src/config.ts"),
				u = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/helpers/path/index.ts");
			var p = s("./src/reddit/actions/ads/index.ts"),
				h = s("./src/reddit/actions/pages/subreddit.ts"),
				b = s("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				x = s("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				E = s("./src/lib/makeGqlRequest/index.ts"),
				v = s("./src/graphql/operations/WikiComparisonDiff.json"),
				C = s("./src/reddit/helpers/wiki/wikiRevision.ts");
			var _ = s("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				k = s("./src/reddit/selectors/subredditWiki.ts");
			const y = Object(d.a)("WIKI_DIFF_PENDING"),
				O = Object(d.a)("WIKI_DIFF_LOADED"),
				S = Object(d.a)("WIKI_DIFF_FAILED"),
				w = e => async (t, s, n) => {
					const a = s(),
						o = Object(_.a)(e),
						r = Object(k.i)(a, {
							key: o
						});
					if (r && (r.pending || !r.error)) return !0;
					const d = {
						key: o
					};
					t(y(d));
					const l = await ((e, t) => Object(E.a)(e, {
						...v,
						variables: {
							...t,
							comparisonRevisionId: Object(C.b)(t.comparisonRevisionId),
							revisionId: Object(C.b)(t.revisionId)
						}
					}))(n.gqlContext(), e);
					let c = null,
						u = "";
					if (l.ok) {
						const e = l.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							s = t && t.page && t.page.revisionComparisonDiffHtml;
						s ? u = s : c = {
							type: i.E.NOT_FOUND_ERROR
						}
					} else c = l.error || {
						type: i.E.UNKNOWN_ERROR
					};
					return t(c ? S({
						...d,
						error: c
					}) : O({
						...d,
						htmlDiff: u
					})), !c
				};
			var j = s("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				I = s("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				N = s("./src/reddit/constants/parameters.ts"),
				T = s("./src/reddit/constants/wiki.ts"),
				P = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				M = s("./src/reddit/helpers/brandSafety/index.ts"),
				R = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				A = s("./src/reddit/models/Toast/index.ts"),
				L = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				F = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				U = s("./src/lib/initializeClient/installReducer.ts"),
				B = s("./node_modules/redux/es/redux.js");
			const W = {};
			var H = (e = W, t) => {
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: s,
							htmlDiff: n
						} = t.payload;
						return {
							...e,
							[s]: {
								htmlDiff: n
							}
						}
					}
					case "WIKI_DIFF_PENDING": {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								pending: !0
							}
						}
					}
					case "WIKI_DIFF_FAILED": {
						const {
							key: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								pending: !1,
								error: n
							}
						}
					}
					default:
						return e
				}
			};
			const V = {};
			var q = (e = V, t) => {
					switch (t.type) {
						case b.b:
							const s = t.payload,
								{
									subredditWiki: n,
									options: a
								} = s,
								o = n && n.directory;
							if (!o) return e;
							const {
								subredditName: r
							} = a;
							return {
								...e, [r.toLowerCase()]: o
							};
						default:
							return e
					}
				},
				G = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const z = {};
			var K = (e = z, t) => {
					switch (t.type) {
						case b.b: {
							const {
								subredditWiki: s,
								pageKey: n
							} = t.payload, {
								page: a
							} = s;
							return n && a ? {
								...e,
								[n]: a
							} : e
						}
						case G.a: {
							const {
								pageKey: s,
								page: n
							} = t.payload;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				X = s("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const Q = {};
			var J = (e = Q, t) => {
					switch (t.type) {
						case X.c: {
							const {
								settings: s,
								pageKey: n
							} = t.payload;
							return s ? {
								...e,
								[n]: s
							} : e
						}
						case X.d: {
							const {
								isVisible: s,
								editPermissions: n,
								pageKey: a
							} = t.payload, o = e[a];
							return o ? {
								...e,
								[a]: {
									...o,
									isVisible: s,
									editPermissions: n
								}
							} : e
						}
						case X.b: {
							const {
								editorsInfo: s,
								afterToken: n,
								pageKey: a
							} = t.payload, o = e[a];
							if (!o) return e;
							const r = [...o.editorsInfo, ...s];
							return {
								...e,
								[a]: {
									...o,
									editorsInfo: r,
									afterToken: n
								}
							}
						}
						case X.a: {
							const {
								username: s,
								pageKey: n
							} = t.payload, a = e[n];
							if (!a) return e;
							const o = a.editorsInfo.filter(e => e.username !== s);
							return {
								...e,
								[n]: {
									...a,
									editorsInfo: o
								}
							}
						}
						default:
							return e
					}
				},
				Y = s("./src/lib/omitKey/index.ts");
			const Z = {};
			var $ = (e = Z, t) => {
				switch (t.type) {
					case G.b: {
						const {
							key: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					case G.d:
					case G.c: {
						const {
							key: s
						} = t.payload;
						return Object(Y.a)(e, s)
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
					switch (t.type) {
						case G.d:
						case G.b:
						case G.c: {
							const {
								key: s
							} = t.payload, n = t.type === G.d;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				se = Object(B.c)({
					error: $,
					pending: te
				}),
				ne = s("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const ae = {};
			var oe = (e = ae, t) => {
				switch (t.type) {
					case G.c: {
						const {
							key: s,
							options: n,
							pageInfo: a,
							revisionsIds: o
						} = t.payload, r = e[s], i = n.after && r ? [...r.ids, ...o] : o;
						return {
							...e,
							[s]: {
								ids: i,
								pageInfo: a
							}
						}
					}
					case G.a: {
						const {
							page: {
								revision: s
							},
							pageRevisionsListingKey: n,
							recentRevisionsListingKey: a
						} = t.payload, o = e[n];
						return o && s ? {
							...Object(Y.a)(e, a),
							[n]: {
								...o,
								ids: [s.id, ...o.ids]
							}
						} : e
					}
					case ne.a: {
						const {
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: n
						} = t.payload, a = {
							...e
						};
						return delete a[s], delete a[n], a
					}
					default:
						return e
				}
			};
			const re = {};
			var ie = (e = re, t) => {
					switch (t.type) {
						case b.b: {
							const {
								subredditWiki: {
									page: s
								}
							} = t.payload, n = s && s.revision;
							return n && !e[n.id] ? {
								...e,
								[n.id]: n
							} : e
						}
						case G.c: {
							const {
								revisions: s
							} = t.payload;
							return {
								...e,
								...s
							}
						}
						case G.a: {
							const {
								page: s
							} = t.payload, n = s.revision;
							return n ? {
								...e,
								[n.id]: n
							} : e
						}
						case G.e: {
							const {
								revisionId: s,
								isHidden: n
							} = t.payload, a = e[s];
							return a ? {
								...e,
								[s]: {
									...a,
									isHidden: n
								}
							} : e
						}
						default:
							return e
					}
				},
				de = Object(B.c)({
					api: se,
					listings: oe,
					models: ie
				}),
				le = s("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const ce = {};
			var ue = (e = ce, t) => {
				switch (t.type) {
					case le.c:
					case le.a: {
						const {
							subredditName: s,
							afterToken: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			const me = {};
			var pe = (e = me, t) => {
				switch (t.type) {
					case le.b: {
						const {
							subredditName: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					case le.d:
					case le.c: {
						const {
							subredditName: s
						} = t.payload;
						return Object(Y.a)(e, s)
					}
					default:
						return e
				}
			};
			const he = {};
			var be = (e = he, t) => {
					switch (t.type) {
						case le.d:
						case le.c:
						case le.b: {
							const {
								subredditName: s
							} = t.payload, n = t.type === le.d;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				ge = Object(B.c)({
					error: pe,
					pending: be
				});
			const fe = {};
			var xe = (e = fe, t) => {
					switch (t.type) {
						case le.c:
						case le.a: {
							const {
								subredditName: s,
								bannedContributors: n
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									...n
								}
							}
						}
						case le.e: {
							const {
								subredditName: s,
								bannedContributor: n
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									...n
								}
							}
						}
						case le.f: {
							const {
								subredditName: s,
								userId: n
							} = t.payload, a = Object(Y.a)(e[s], n);
							return {
								...e,
								[s]: a
							}
						}
						default:
							return e
					}
				},
				Ee = s("./node_modules/lodash/uniq.js"),
				ve = s.n(Ee);
			const Ce = {};
			var _e = (e = Ce, t) => {
					switch (t.type) {
						case le.c:
						case le.a: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[s]: ve()([...e[s] || [], ...n])
							}
						}
						case le.e: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[s]: ve()([...n, ...e[s] || []])
							}
						}
						case le.f: {
							const {
								subredditName: s,
								userId: n
							} = t.payload;
							return {
								...e,
								[s]: (e[s] || []).filter(e => e !== n)
							}
						}
						default:
							return e
					}
				},
				ke = Object(B.c)({
					afterToken: ue,
					api: ge,
					models: xe,
					userOrder: _e
				});
			const ye = {};
			var Oe = (e = ye, t) => {
					switch (t.type) {
						case le.g: {
							const {
								subredditName: s,
								bannedContributor: n
							} = t.payload;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				Se = Object(B.c)({
					listing: ke,
					search: Oe
				}),
				we = s("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const je = {};
			var Ie = (e = je, t) => {
				switch (t.type) {
					case we.c:
					case we.a: {
						const {
							subredditName: s,
							afterToken: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			const Ne = {};
			var Te = (e = Ne, t) => {
				switch (t.type) {
					case we.b: {
						const {
							subredditName: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					case we.d:
					case we.c: {
						const {
							subredditName: s
						} = t.payload;
						return Object(Y.a)(e, s)
					}
					default:
						return e
				}
			};
			const Pe = {};
			var Me = (e = Pe, t) => {
					switch (t.type) {
						case we.d:
						case we.c:
						case we.b: {
							const {
								subredditName: s
							} = t.payload, n = t.type === we.d;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				Re = Object(B.c)({
					error: Te,
					pending: Me
				});
			const Ae = {};
			var Le = (e = Ae, t) => {
				switch (t.type) {
					case we.c:
					case we.a: {
						const {
							subredditName: s,
							contributors: n
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...n
							}
						}
					}
					case we.e: {
						const {
							subredditName: s,
							contributor: n
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...n
							}
						}
					}
					case we.f: {
						const {
							subredditName: s,
							userId: n
						} = t.payload, a = Object(Y.a)(e[s], n);
						return {
							...e,
							newState: a
						}
					}
					default:
						return e
				}
			};
			const Fe = {};
			var De = (e = Fe, t) => {
					switch (t.type) {
						case we.c:
						case we.a: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[s]: ve()([...e[s] || [], ...n])
							}
						}
						case we.e: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[s]: [...n, ...e[s] || []]
							}
						}
						case we.f: {
							const {
								subredditName: s,
								userId: n
							} = t.payload;
							return {
								...e,
								[s]: (e[s] || []).filter(e => e !== n)
							}
						}
						default:
							return e
					}
				},
				Ue = Object(B.c)({
					afterToken: Ie,
					api: Re,
					models: Le,
					userOrder: De
				});
			const Be = {};
			var We = (e = Be, t) => {
					switch (t.type) {
						case we.g: {
							const {
								subredditName: s,
								contributor: n
							} = t.payload;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				He = Object(B.c)({
					listing: Ue,
					search: We
				}),
				Ve = Object(B.c)({
					diff: H,
					directory: q,
					pages: K,
					pageSettings: J,
					revisions: de,
					wikiBannedContributors: Se,
					wikiContributors: He
				});
			Object(U.a)({
				pages: {
					subredditWiki: Ve
				}
			});
			const qe = Object(d.a)(b.c),
				Ge = Object(d.a)(b.b),
				ze = Object(d.a)(b.a),
				Ke = (e, t) => !!Object(k.b)(e, {
					subredditName: t
				}),
				Xe = e => async (t, s, a) => {
					const {
						canShowFailToast: r,
						wikiPageName: d
					} = e, l = d === T.j, c = {
						...e,
						includePageData: e.includePageData && !l
					}, u = d ? Object(R.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(qe({
						options: c,
						pageKey: u
					}));
					const m = await Object(P.a)(a.gqlContext(), c),
						p = m.body,
						h = m.ok ? p.data && p.data.subreddit && p.data.subreddit.wiki : null;
					return m.ok && h ? t(Ge({
						options: c,
						pageKey: u,
						subredditWiki: h
					})) : (t(ze({
						options: c,
						pageKey: u,
						error: m.error || {
							type: i.E.NOT_FOUND_ERROR
						}
					})), r && t(Object(g.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: A.b.Error,
						text: n.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Xe(e)
					}))), !(!m.ok || !o()(p.data.subreddit)) || !(!m.ok || !h)
				}, Qe = e => async (t, s) => {
					const {
						params: n,
						url: a
					} = e, {
						wikiPageName: o
					} = n, i = Object(F.a)(a, n);
					let d = !1;
					return T.l.includes(o || "") ? (await (async (e, t) => {
						const s = `${c.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = s
					})(e.url), d = !0) : a !== i && (await t(Object(r.c)(i)), d = !0), d
				}, Je = (e, t, s = !1) => async (a, o, r) => {
					const {
						subredditName: d = T.e,
						wikiPageName: c,
						wikiSubRoute: u
					} = e, m = t[N.A], p = t[N.B], b = m ? Object(C.a)(m) : void 0, E = p ? Object(C.a)(p) : void 0, v = c === T.j, _ = u === T.m.Revisions;
					let y = !1,
						O = !1;
					if (s) {
						const {
							pageName: t
						} = e;
						y = t === i.Wb.WikiContributors, O = t === i.Wb.WikiBanned
					}
					const S = o(),
						P = (v || s) && !Ke(S, d),
						M = !!c && !((e, t, s, n) => {
							return s === T.j ? Ke(e, t) : !!Object(k.c)(e, {
								subredditName: t,
								wikiPageName: s,
								revisionId: n
							})
						})(S, d, c, b),
						R = [];
					R.push(a(((e, t = !1) => async (s, n) => {
						const a = n(),
							o = {
								sort: i.R.HOT
							},
							r = Object(l.a)(e, o.sort),
							d = a.listings.postOrder.api.error[r],
							c = a.listings.postOrder.api.pending[r],
							u = !!a.listings.postOrder.ids[r];
						return !!(c || u && !d) || (await s(Object(h.subredditDataRequested)(r, e, o, t)), !n().listings.postOrder.api.error[r])
					})(d))), (P || M) && R.push(a(Xe({
						includeDirectory: P,
						includePageData: M,
						revisionId: b,
						subredditName: d,
						wikiPageName: c
					}))), u === T.m.Settings && c && R.push(a(Object(j.c)(d, c))), c && b && E && R.push(a(w({
						comparisonRevisionId: E,
						revisionId: b,
						subredditName: d,
						wikiPageName: c
					}))), _ && R.push(a(Object(I.c)({
						isRecent: !c,
						wikiPageName: c,
						subredditName: d
					}))), y && R.push(a(Object(x.e)(d))), O && R.push(a(Object(f.e)(d))), (await Promise.all(R)).every(Boolean) || a(Object(g.f)({
						kind: A.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UWos1"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Je(e, t, s)
					}))
				}, Ye = e => async (t, s) => {
					if (await t(Qe(e))) return;
					const {
						params: n,
						queryParams: a
					} = e, o = n.subredditName || T.e;
					t(u.l({
						title: n.wikiPageName ? `${n.wikiPageName} - ${o}` : `wiki - ${o}`
					})), await t(Je(n, a));
					const r = Object(D.A)(s(), {
							subredditName: o
						}),
						i = s();
					r && (i.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(L.a.SUBREDDIT))
					}), t(Object(p.d)({
						isViewSafe: Object(M.a)([], [r])
					})))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Y
			})), s.d(t, "removalReasonsLoaded", (function() {
				return Z
			})), s.d(t, "removalReasonsFailed", (function() {
				return $
			})), s.d(t, "removalReasonsRequested", (function() {
				return ee
			})), s.d(t, "removalReasonAddedPending", (function() {
				return te
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return se
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return ne
			})), s.d(t, "addRemovalReason", (function() {
				return ae
			})), s.d(t, "editRemovalReasonPending", (function() {
				return oe
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return re
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ie
			})), s.d(t, "editRemovalReason", (function() {
				return de
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return ce
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), s.d(t, "deleteRemovalReason", (function() {
				return me
			})), s.d(t, "removedItemsSelected", (function() {
				return pe
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return be
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return ge
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return fe
			})), s.d(t, "removalReasonMessagePending", (function() {
				return xe
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Ee
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ve
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return Ce
			})), s.d(t, "submitRemovalReason", (function() {
				return _e
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return ke
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./node_modules/redux/es/redux.js");
			const r = "REMOVALREASONS__ADD_PENDING",
				i = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				c = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				m = "REMOVALREASONS__DELETE_PENDING",
				p = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var b = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case r:
					case i:
					case l:
					case c:
					case m:
					case p:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case u:
					case h:
						return t.payload;
					default:
						return e
				}
			};
			var g = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case r:
						case l:
						case m:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case i:
						case d:
						case c:
						case u:
						case p:
						case h:
							return !1;
						default:
							return e
					}
				},
				f = Object(o.c)({
					error: b,
					pending: g
				});
			const x = {};
			var E = (e = x, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							response: s
						} = t.payload, {
							data: n
						} = s;
						return {
							...e,
							...n
						}
					}
					case i:
					case c: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case p: {
						const {
							reasonId: s
						} = t.payload, {
							[s]: n,
							...a
						} = e;
						return a
					}
					default:
						return e
				}
			};
			const v = {};
			var C = (e = v, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							order: a
						} = n;
						return {
							...e,
							[s]: a
						}
					}
					case i: {
						const {
							subredditId: s,
							reason: n
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], n.id]
						}
					}
					case p: {
						const {
							subredditId: s,
							reasonId: n
						} = t.payload, a = [...e[s]].filter(e => e !== n);
						return {
							...e,
							[s]: a
						}
					}
					default:
						return e
				}
			};
			var _ = (e = null, t) => {
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				k = Object(o.c)({
					api: f,
					models: E,
					reasonOrder: C,
					removedItemIds: _
				}),
				y = s("./src/lib/constants/index.ts"),
				O = s("./src/lib/makeActionCreator/index.ts"),
				S = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/reddit/actions/bulkActions/index.ts"),
				I = s("./src/reddit/actions/comment/index.ts"),
				N = s("./src/reddit/actions/comment/authoring.ts"),
				T = s("./src/reddit/actions/comment/moderation.ts"),
				P = s("./src/reddit/actions/modal.ts"),
				M = s("./src/reddit/actions/post.ts"),
				R = s("./src/reddit/actions/toaster.ts"),
				A = s("./src/reddit/constants/modals.ts"),
				L = s("./src/lib/makeApiRequest/index.ts"),
				F = s("./src/lib/omitHeaders/index.ts"),
				D = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const B = (e, t) => Object(L.a)(Object(F.a)(e, [D.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: y.eb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				W = (e, t, s) => Object(L.a)(Object(F.a)(e, [D.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: y.eb.POST,
					type: "json",
					data: t
				});
			var H = s("./src/reddit/helpers/isPost.ts"),
				V = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = s("./src/reddit/helpers/routeKey/index.ts"),
				G = s("./src/reddit/models/ModQueue/index.ts"),
				z = s("./src/reddit/models/PostDraft/index.ts"),
				K = s("./src/reddit/models/RemovalReason/index.ts"),
				X = s("./src/reddit/models/Toast/index.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				J = s("./src/reddit/selectors/platform.ts");
			Object(a.a)({
				features: {
					removalReasons: k
				}
			});
			const Y = Object(O.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(O.a)("REMOVALREASONS__LOAD_SUCCESS"),
				$ = Object(O.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, s, {
					apiContext: n
				}) => {
					const a = s().subreddits.models[e].name;
					t(Y());
					const o = await ((e, t) => Object(L.a)(Object(F.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: y.eb.GET
					}))(n(), a);
					o.ok ? t(Z({
						subredditId: e,
						response: o.body
					})) : t($(o.error))
				}, te = Object(O.a)(r), se = Object(O.a)(i), ne = Object(O.a)(d), ae = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const r = a().subreddits.models[e].name;
					s(te());
					const i = await ((e, t, s) => Object(L.a)(Object(F.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: y.eb.POST,
						data: s
					}))(o(), r, t);
					if (i.ok) {
						const {
							id: a
						} = i.body, o = {
							...t,
							id: a
						};
						s(se({
							subredditId: e,
							reason: o
						})), s(Object(R.f)({
							kind: X.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(ne(i.error))
				}, oe = Object(O.a)(l), re = Object(O.a)(c), ie = Object(O.a)(u), de = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const r = a().subreddits.models[e].name;
					s(oe());
					const i = await ((e, t, s) => Object(L.a)(Object(F.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: y.eb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(o(), r, t);
					i.ok ? (s(re({
						subredditId: e,
						reason: t
					})), s(Object(R.f)({
						kind: X.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ie(i.error))
				}, le = Object(O.a)(m), ce = Object(O.a)(p), ue = Object(O.a)(h), me = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const r = a().subreddits.models[e].name;
					s(le());
					const i = await ((e, t, s) => Object(L.a)(Object(F.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: y.eb.DELETE
					}))(o(), r, t);
					i.ok ? (s(ce({
						subredditId: e,
						reasonId: t
					})), s(Object(R.f)({
						kind: X.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(ue(i.error))
				}, pe = Object(O.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, n, {
					apiContext: a
				}) => {
					const o = n();
					o.features.removalReasons.reasonOrder[e] && o.features.removalReasons.reasonOrder[e].length > 0 || s(ee(e)), s(pe({
						subredditId: e,
						itemIds: t
					})), s(Object(P.i)(A.a.ADD_REMOVAL_REASON))
				}, be = Object(O.a)("REMOVALREASONS__SUBMIT_PENDING"), ge = Object(O.a)("REMOVALREASONS__SUBMIT_SUCCESS"), fe = Object(O.a)("REMOVALREASONS__SUBMIT_FAILED"), xe = Object(O.a)("REMOVALREASONS__MESSAGE_PENDING"), Ee = Object(O.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ve = Object(O.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Ce = Object(O.a)("REMOVALREASONS__MESSAGE_FAILED"), _e = (e, t, s, n, a) => async (o, r, {
					apiContext: i
				}) => {
					const d = r(),
						l = d.user.account && d.user.account.displayText,
						c = e[0],
						u = Object(H.a)(c) ? K.e.Post : K.e.Comment,
						m = u === K.e.Post ? d.posts.models[c] : d.features.comments.models[c],
						p = u === K.e.Post ? M.P : I.i;
					if (!m || !l) return !1;
					o(be()), o(p({
						[c]: {
							modNote: a,
							modRemovalReason: t && t.title,
							modReasonBy: l
						}
					}));
					const h = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						b = await B(i(), h);
					if (b.ok) {
						if (o(ge()), t) {
							o(xe());
							const a = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								r = await W(i(), Object(K.h)(a, u), u);
							if (r.ok) {
								if (n === K.f.Public) {
									if (o(ve()), r.body) {
										const e = Object(V.a)(r.body, l),
											t = {
												comment: e,
												parentId: c
											},
											s = Object(J.f)(d),
											n = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let a = s && n && Object(q.a)(n, d, d.posts.models[e.postId]);
										if (a || (a = Object(S.a)(e.postId, null, {
												sort: y.s,
												hasSortParam: !0
											})), u === K.e.Post) {
											const s = Object(w.a)(z.c.replyToPost, c);
											o(Object(N.o)({
												...t,
												headCommentId: Object(Q.w)(d, {
													commentsPageKey: a
												}),
												commentsPageKey: a,
												draftKey: s
											}));
											const n = d.postStickiedComments.data[c];
											o(Object(T.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: a
											})), n && n !== e.id && o(Object(I.i)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (u === K.e.Comment) {
											const e = Object(w.a)(z.c.replyToComment, m.id),
												s = Object(Q.j)(d, {
													commentId: c,
													commentsPageKey: a
												});
											o(Object(N.m)({
												...t,
												parentCommentId: c,
												commentsPageKey: a,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else o(Ee());
								return !0
							}
							return o(Ce(r.error)), !1
						}
					} else o(fe(b.error)), o(p({
						[c]: {
							modNote: m.modNote,
							modRemovalReason: m.modRemovalReason,
							modReasonBy: m.modReasonBy
						}
					}));
					return !1
				}, ke = (e, t, s, a, o) => async (r, i, {
					apiContext: d
				}) => {
					const l = i(),
						c = l.user.account && l.user.account.displayText;
					if (!c) return;
					r(be());
					const u = Object(R.f)({
							kind: X.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						m = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						p = await B(d(), m);
					if (p.ok) {
						const n = {
							ids: e,
							operation: G.a.RemovalReason,
							username: c,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (r(Object(j.b)(n)), t) {
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: a
								},
								o = await W(d(), Object(K.h)(n, K.e.Bulk), K.e.Bulk);
							o.ok ? (r(Ee()), r(u)) : r(Ce(o.error))
						} else r(u)
					} else r(fe(p.error))
				}
		},
		"./src/reddit/actions/scheduledPosts/delete.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/scheduledPosts/constants.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				r = s("./src/graphql/operations/DeleteScheduledPost.json"),
				i = s("./src/lib/makeGqlRequest/index.ts");
			var d = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				l = s("./src/reddit/models/ScheduledPost/index.ts"),
				c = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/scheduledPosts/index.ts"),
				m = s("./src/telemetry/index.ts");
			const p = Object(n.a)(a.i),
				h = (e, t) => async (s, n, {
					gqlContext: h
				}) => {
					const b = Object(u.a)(n(), {
						subredditId: e,
						scheduledPostId: t
					});
					b && Object(l.p)(b) && Object(m.a)(Object(d.s)()(n(), b)), b ? (await ((e, t) => Object(i.a)(e, {
						...r,
						variables: t
					}))(h(), {
						input: {
							id: b.id
						}
					})).ok ? (s(Object(o.f)(Object(o.e)(a.q(), c.b.SuccessCommunity))), s(p({
						subredditId: e,
						scheduledPostId: t
					}))) : s(Object(o.f)(Object(o.e)(a.p(), c.b.Error))) : s(Object(o.f)(Object(o.e)(a.u(), c.b.Error)))
				}
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return E
			})), s.d(t, "a", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/telemetry/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/scheduledPosts/index.ts"),
				d = s("./src/reddit/actions/scheduledPosts/constants.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/scheduledPosts/update.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				m = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				p = s("./src/reddit/models/ScheduledPost/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/routes/postCreation/index.ts"),
				g = s("./src/reddit/selectors/scheduledPosts/index.ts");
			const f = Object(r.a)(d.n),
				x = Object(r.a)(d.b),
				E = (e, t) => async (s, n, o) => {
					const r = Object(g.a)(n(), {
						scheduledPostId: t,
						subredditId: e
					});
					r && (await s(Object(a.b)(Object(b.c)(r.subreddit.name, r.collectionId))), s((Object(p.p)(r) ? x : f)(r)))
				}, v = (e, t) => {
					Object(p.p)(t) ? e(Object(i.d)({
						scheduledPost: t
					})) : e(Object(i.h)({
						scheduledPost: t
					}))
				}, C = (e, t, s) => async (a, r, {
					gqlContext: b
				}) => {
					a(Object(i.g)());
					const f = Object(g.a)(r(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (f && Object(p.p)(f) && Object(o.a)(Object(m.u)()(r(), f)), !f) return void a(Object(i.f)({
						message: n.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(s).length) return void v(a, f);
					const x = await Object(c.a)(b(), {
							...s,
							id: t
						}),
						E = x.body;
					if (!(x.ok && E && E.data && E.data.updateScheduledPost && E.data.updateScheduledPost.ok && E.data.updateScheduledPost.scheduledPost)) return a(Object(i.f)({
						message: x.error && x.error.fields && x.error.fields.length && x.error.fields[0].msg || n.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void a(Object(l.f)(Object(l.e)(d.t(), h.b.Error, d.s(), C(e, t, s))));
					a(Object(l.f)(Object(l.e)(d.w(), h.b.SuccessCommunity))), v(a, Object(u.d)(E.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return g
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "i", (function() {
				return w
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return N
			}));
			var n = s("./src/lib/assertNever.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/scheduledPosts/constants.ts"),
				r = s("./src/reddit/actions/scheduledPosts/edit.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/scheduledPosts/index.ts"),
				l = s("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				c = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				u = s("./src/reddit/models/ScheduledPost/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/reddit/selectors/scheduledPosts/index.ts"),
				h = s("./src/telemetry/index.ts");
			const b = Object(a.a)(o.g),
				g = Object(a.a)(o.k),
				f = Object(a.a)(o.j),
				x = Object(a.a)(o.o),
				E = Object(a.a)(o.d),
				v = Object(a.a)(o.f),
				C = Object(a.a)(o.m),
				_ = Object(a.a)(o.a),
				k = Object(a.a)(o.c),
				y = Object(a.a)(o.e),
				O = Object(a.a)(o.h),
				S = (e, t) => {
					e(y()), e(Object(i.f)(Object(i.e)(o.r(), m.b.Error, o.s(), w(t))))
				},
				w = ({
					subredditId: e,
					includeStandalone: t = {
						standaloneFirst: 25
					},
					includeRecurring: s = {
						recurringFirst: 1e4
					},
					...n
				}) => async (a, o, {
					gqlContext: r
				}) => {
					if (Object(p.h)(o(), {
							subredditId: e
						})) return;
					a(b());
					const i = {
							subredditId: e,
							includeRecurring: s,
							includeStandalone: t,
							...n
						},
						c = await Object(d.b)(r(), i);
					Object(d.f)(c, i) ? I(a, Object(l.e)(c.body.data), i) : S(a, i)
				}, j = e => async (t, s, {
					gqlContext: n
				}) => {
					const a = s();
					if (!Object(p.h)(a, {
							subredditId: e
						})) return t(w({
						subredditId: e
					}));
					if (!Object(p.g)(a, {
							subredditId: e,
							type: u.f.standalonePosts
						})) return;
					const o = Object(p.c)(a, {
						subredditId: e,
						type: u.f.standalonePosts
					});
					if (!o) return;
					t(b());
					const r = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: 25,
								standaloneAfter: o
							}
						},
						i = await Object(d.b)(n(), r);
					i.ok ? I(t, Object(l.e)(i.body.data), r) : t(y())
				}, I = (e, t, s) => {
					Object(l.b)(t) ? e(v(t)) : Object(l.a)(t) ? e(_(t)) : Object(l.c)(t) ? e(C(t)) : S(e, s)
				}, N = (e, t) => async (s, a, o) => {
					const i = {},
						d = a();
					switch (e) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isContestMode":
						case "isPostAsMetaMod":
						case "isSpoiler":
							i[e] = !t[e];
							break;
						case "isSticky":
							const s = !!t.sticky && "NONE" !== t.sticky;
							i.sticky = s ? "NONE" : "SECOND";
							break;
						default:
							return Object(n.a)(e)
					}
					Object(h.a)(Object(c.t)(e, i[e], Object(u.p)(t))(d)), s(Object(r.a)(t.subreddit.id, t.id, i))
				}
		},
		"./src/reddit/actions/subredditModeration/approvedSubmitters.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "d", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/get.js"),
				o = s.n(a),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				u = s("./src/reddit/constants/headers.ts");
			const m = (e, t, s) => Object(l.a)(Object(c.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/v1/${t}/contributors`,
				method: d.eb.GET,
				data: s
			});
			var p = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				h = s("./src/reddit/models/SubredditModeration/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/actions/subredditModeration/constants.ts");
			const f = Object(r.a)(g.g),
				x = Object(r.a)(g.f),
				E = Object(r.a)(g.e),
				v = (e, t = {}) => async (s, n, {
					apiContext: a
				}) => {
					const o = n(),
						r = t.after || "",
						i = Object(h.d)(e, r),
						d = o.pages.modHub.approvedSubmitters.fetchedTokens[i];
					if (o.pages.modHub.approvedSubmitters.api.pending[i] || d) return;
					s(f({
						subredditId: e,
						fetchedToken: r
					}));
					const l = o.subreddits.models[e].name,
						c = await m(a(), l, t);
					c.ok ? s(x({
						...c.body,
						fetchedToken: r
					})) : s(E({
						subredditId: e,
						fetchedToken: r
					}))
				}, C = Object(r.a)(g.j), _ = Object(r.a)(g.i), k = Object(r.a)(g.h), y = (e, t) => async (s, n, {
					apiContext: a
				}) => {
					const o = n().subreddits.models[e].name,
						r = {
							username: Object(p.a)(t)
						};
					s(C());
					const i = await m(a(), o, r);
					i.ok ? s(_(i.body)) : s(k(i.error))
				}, O = Object(r.a)(g.d), S = Object(r.a)(g.k), w = (e, t) => async (s, a, {
					apiContext: r
				}) => {
					const h = a(),
						g = h.subreddits.models[e].url,
						f = h.subreddits.models[e].name;
					t = Object(p.a)(t);
					const x = await ((e, t, s) => Object(l.a)(Object(c.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: d.eb.POST,
						data: {
							api_type: "json",
							name: s,
							type: "contributor"
						}
					}))(r(), g, t);
					if (x.ok) {
						const e = {
							username: t
						};
						s(Object(i.f)({
							kind: b.b.SuccessMod,
							text: n.fbt._("Successfully added an approved submitter", null, {
								hk: "4gruK7"
							})
						}));
						const a = await m(r(), f, e);
						a.ok && s(O(a.body))
					} else {
						const e = o()(x, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(i.f)({
							kind: b.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, j = (e, t) => async (s, a, {
					apiContext: r
				}) => {
					const m = a().subreddits.models[e].url,
						p = await ((e, t, s) => Object(l.a)(Object(c.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: d.eb.POST,
							data: {
								api_type: "json",
								id: s,
								type: "contributor"
							}
						}))(r(), m, t);
					if (p.ok) s(S({
						subredditId: e,
						userId: t
					}));
					else {
						const e = o()(p, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(i.f)({
							kind: b.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}
		},
		"./src/reddit/actions/subredditModeration/mute.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "a", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./node_modules/lodash/get.js"),
				r = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/reddit/constants/headers.ts");
			const u = (e, t, s) => Object(d.a)(Object(l.a)(e, [c.a]), {
				endpoint: `${e.apiUrl}/api/v1/${t}/muted`,
				method: i.eb.GET,
				data: s
			});
			var m = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				p = s("./src/reddit/models/SubredditModeration/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				g = s("./src/reddit/actions/subredditModeration/constants.ts");
			const f = Object(a.a)(g.N),
				x = Object(a.a)(g.L),
				E = Object(a.a)(g.K),
				v = (e, t = {}) => async (s, n, {
					apiContext: a
				}) => {
					const o = n(),
						r = t.after || "",
						i = Object(p.d)(e, r),
						d = o.pages.modHub.muted.fetchedTokens[i];
					if (o.pages.modHub.muted.api.pending[i] || d) return;
					s(f({
						subredditId: e,
						fetchedToken: r
					}));
					const l = o.subreddits.models[e].name,
						c = await u(a(), l, t);
					c.ok ? s(x({
						...c.body,
						fetchedToken: r
					})) : s(E({
						subredditId: e,
						fetchedToken: r
					}))
				}, C = Object(a.a)(g.Q), _ = Object(a.a)(g.P), k = Object(a.a)(g.O), y = (e, t) => async (s, n, {
					apiContext: a
				}) => {
					const o = n().subreddits.models[e].name,
						r = {
							username: Object(m.a)(t)
						};
					s(C());
					const i = await u(a(), o, r);
					i.ok ? s(_(i.body)) : s(k(i.error))
				}, O = Object(a.a)(g.M), S = Object(a.a)(g.R), w = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const u = a().subreddits.models[e].url,
						m = await ((e, t, s) => Object(d.a)(Object(l.a)(e, [c.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: i.eb.POST,
							data: {
								api_type: "json",
								id: s,
								type: "muted"
							}
						}))(o(), u, t);
					if (m.ok) s(S({
						subredditId: e,
						userId: t
					}));
					else {
						const e = r()(m, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(b.f)({
							kind: h.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, j = (e, t, s) => async (a, o, {
					apiContext: p
				}) => {
					const g = o(),
						f = g.subreddits.models[e].url,
						x = g.subreddits.models[e].name;
					t = Object(m.a)(t);
					const E = await ((e, t, s, n) => Object(d.a)(Object(l.a)(e, [c.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: i.eb.POST,
						data: {
							api_type: "json",
							name: s,
							note: n,
							type: "muted"
						}
					}))(p(), f, t, s);
					if (E.ok) {
						const e = {
							username: t
						};
						a(Object(b.f)({
							kind: h.b.SuccessMod,
							text: n.fbt._("Successfully muted a user", null, {
								hk: "2ypyuL"
							})
						}));
						const s = await u(p(), x, e);
						s.ok && a(O(s.body))
					} else {
						const e = r()(E, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(b.f)({
							kind: h.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			}));
			const n = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				a = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				o = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				r = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				i = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				l = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return E
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "a", (function() {
				return k
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/graphql/operations/SubredditWikiBannedContributors.json"),
				u = s("./src/reddit/constants/headers.ts");
			const m = (e, t) => Object(d.a)(e, {
				...c,
				variables: t
			});
			var p = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: s,
						pageInfo: n
					} = t, a = [], o = {};
					return s.forEach(e => {
						const {
							date: t,
							redditor: s,
							editWikiBanInfo: n
						} = e.node;
						s.id && s.name && s.icon && (o[s.id] = {
							id: s.id,
							username: s.name,
							iconUrl: s.icon.url,
							date: t,
							daysRemaining: n.daysRemaining,
							note: n.note
						}, a.push(s.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						bannedContributors: o,
						userOrder: a
					}
				},
				h = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const g = Object(o.a)(b.d),
				f = Object(o.a)(b.c),
				x = Object(o.a)(b.b),
				E = e => async (t, s, n) => {
					t(g({
						subredditName: e
					}));
					const o = {
							subredditName: e
						},
						r = await m(n.gqlContext(), o);
					if (r.ok) {
						const s = r.body,
							n = s.data.subreddit && s.data.subreddit.wiki;
						if (n) {
							const s = p(n);
							t(f({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const s = r.error || {
							type: a.E.UNKNOWN_ERROR
						};
						t(x({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return r.ok
				}, v = Object(o.a)(b.a), C = (e, t) => async (s, a, o) => {
					const i = {
							subredditName: e,
							after: t
						},
						d = await m(o.gqlContext(), i);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki);
							s(v({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else s(Object(r.f)({
						kind: h.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e, t)
					}));
					return d.ok
				}, _ = Object(o.a)(b.e), k = (e, t) => async (s, o, d) => {
					const c = await ((e, t, s) => Object(i.a)(Object(l.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: a.eb.POST,
						data: {
							api_type: "json",
							name: s.username,
							type: "wikibanned",
							duration: s.duration,
							ban_reason: s.banReason,
							note: s.note
						}
					}))(d.apiContext(), e, t);
					if (c.ok) {
						s(Object(r.f)({
							kind: h.b.SuccessMod,
							text: n.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const a = {
								subredditName: e,
								username: t.username
							},
							o = (await m(d.gqlContext(), a)).body;
						if (o.data.subreddit.wiki) {
							const t = p(o.data.subreddit.wiki);
							s(_({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (c.error) {
						let e;
						c.error.type === a.E.USER_DOESNT_EXIST && (e = n.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), s(Object(r.f)({
							kind: h.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return c.ok
				}, y = Object(o.a)(b.f), O = (e, t) => async (s, o, d) => {
					const c = await ((e, t, s) => Object(i.a)(Object(l.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: a.eb.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return c.ok ? (s(Object(r.f)({
						kind: h.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), s(y({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(r.f)({
						kind: h.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t)
					})), c.ok
				}, S = Object(o.a)(b.g), w = (e, t) => async (s, a, o) => {
					const i = {
							subredditName: e,
							username: t
						},
						d = await m(o.gqlContext(), i);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki),
								a = Object.keys(n.bannedContributors)[0];
							s(S({
								subredditName: e.toLowerCase(),
								bannedContributor: n.bannedContributors[a]
							}))
						}
					} else s(Object(r.f)({
						kind: h.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			}));
			const n = "WIKI_CONTRIBUTORS_PENDING",
				a = "WIKI_CONTRIBUTORS_LOADED",
				o = "WIKI_CONTRIBUTORS_FAILED",
				r = "MORE_WIKI_CONTRIBUTORS_LOADED",
				i = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				l = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return E
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "a", (function() {
				return k
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/graphql/operations/SubredditWikiContributors.json"),
				u = s("./src/reddit/constants/headers.ts");
			const m = (e, t) => Object(d.a)(e, {
				...c,
				variables: t
			});
			var p = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: s,
						pageInfo: n
					} = t, a = [], o = {};
					return s.forEach(e => {
						const {
							date: t,
							redditor: s
						} = e.node;
						s.id && s.name && s.icon && (o[s.id] = {
							id: s.id,
							username: s.name,
							iconUrl: s.icon.url,
							date: t
						}, a.push(s.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						contributors: o,
						userOrder: a
					}
				},
				h = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const g = Object(o.a)(b.d),
				f = Object(o.a)(b.c),
				x = Object(o.a)(b.b),
				E = e => async (t, s, n) => {
					t(g({
						subredditName: e
					}));
					const o = {
							subredditName: e
						},
						r = await m(n.gqlContext(), o);
					if (r.ok) {
						const s = r.body,
							n = s.data.subreddit && s.data.subreddit.wiki;
						if (n) {
							const s = p(n);
							t(f({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const s = r.error || {
							type: a.E.UNKNOWN_ERROR
						};
						t(x({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return r.ok
				}, v = Object(o.a)(b.a), C = (e, t) => async (s, a, o) => {
					const i = {
							subredditName: e,
							after: t
						},
						d = await m(o.gqlContext(), i);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki);
							s(v({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else s(Object(r.f)({
						kind: h.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e, t)
					}));
					return d.ok
				}, _ = Object(o.a)(b.e), k = (e, t) => async (s, o, d) => {
					const c = await ((e, t, s) => Object(i.a)(Object(l.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: a.eb.POST,
						data: {
							api_type: "json",
							name: s,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (c.ok) {
						s(Object(r.f)({
							kind: h.b.SuccessMod,
							text: n.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const a = {
								subredditName: e,
								username: t
							},
							i = (await m(d.gqlContext(), a)).body;
						if (i.data.subreddit.wiki) {
							const t = p(i.data.subreddit.wiki),
								n = Object.keys(t.contributors)[0];
							!!o().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][n] || s(_({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (c.error) {
						let e;
						const t = c.error.type;
						t === a.E.USER_DOESNT_EXIST ? e = n.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === a.E.BANNED_FROM_SUBREDDIT && (e = n.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), s(Object(r.f)({
							kind: h.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return c.ok
				}, y = Object(o.a)(b.f), O = (e, t) => async (s, o, d) => {
					const c = await ((e, t, s) => Object(i.a)(Object(l.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: a.eb.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return c.ok ? (s(Object(r.f)({
						kind: h.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), s(y({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(r.f)({
						kind: h.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t)
					})), c.ok
				}, S = Object(o.a)(b.g), w = (e, t) => async (s, a, o) => {
					const i = {
							subredditName: e,
							username: t
						},
						d = await m(o.gqlContext(), i);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki),
								a = Object.keys(n.contributors)[0];
							s(S({
								subredditName: e.toLowerCase(),
								contributor: n.contributors[a]
							}))
						}
					} else s(Object(r.f)({
						kind: h.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				a = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				o = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				r = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return _
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "d", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/subredditSettings.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				l = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				u = s("./src/reddit/constants/headers.ts"),
				m = s("./src/graphql/operations/SubredditWikiPageSettings.json"),
				p = s("./src/reddit/models/SubredditWikiPage/index.ts");
			const h = (e, t) => Object(l.a)(e, {
					...m,
					variables: t
				}),
				b = {
					[p.a.Inherit]: "0",
					[p.a.Contributors]: "1",
					[p.a.Mods]: "2"
				};
			var g = e => {
					const {
						editPermissions: t,
						editorsInfo: s,
						isVisible: n
					} = e, {
						edges: a,
						pageInfo: o
					} = s, r = [];
					return a.forEach(e => {
						e.node.name && e.node.icon && r.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: r,
						isVisible: n,
						afterToken: o.hasNextPage ? o.endCursor : null
					}
				},
				f = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const C = Object(o.a)(v.c),
				_ = (e, t) => async (s, n, a) => {
					const o = {
							subredditName: e,
							wikiPageName: t
						},
						i = await h(a.gqlContext(), o),
						d = Object(E.F)(n(), e);
					if (Object(E.V)(n(), d) || await s(Object(r.h)(e, d)), i.ok) {
						const e = i.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = g(t.page.settings);
							s(C({
								pageKey: Object(f.a)(o),
								settings: e
							}))
						}
					}
					return i.ok
				}, k = Object(o.a)(v.b), y = (e, t, s) => async (a, o, r) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: s
						},
						l = await h(r.gqlContext(), d);
					if (l.ok) {
						const s = l.body,
							n = s.data.subreddit && s.data.subreddit.wiki;
						if (n && n.page) {
							const s = g(n.page.settings),
								{
									editorsInfo: o,
									afterToken: r
								} = s;
							a(k({
								editorsInfo: o,
								afterToken: r,
								pageKey: Object(f.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else a(Object(i.f)({
						kind: x.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t, s)
					}));
					return l.ok
				}, O = Object(o.a)(v.d), S = ({
					editPermissions: e,
					isVisible: t,
					wikiPageName: s,
					subredditName: n
				}) => async (o, r, i) => {
					const l = await (e => Object(d.a)(Object(c.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
						method: a.eb.POST,
						data: {
							permlevel: b[e.editPermissions],
							listed: e.isVisible ? "on" : void 0
						}
					}))({
						context: i.apiContext(),
						editPermissions: e,
						isVisible: t,
						wikiPageName: s,
						subredditName: n
					});
					return l.ok && o(O({
						editPermissions: e,
						isVisible: t,
						pageKey: Object(f.a)({
							wikiPageName: s,
							subredditName: n
						})
					})), l.ok
				}, w = ({
					subredditName: e,
					username: t,
					wikiPageName: s
				}) => async (o, r, l) => {
					const m = await (e => Object(d.a)(Object(c.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
						method: a.eb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: l.apiContext(),
						wikiPageName: s,
						subredditName: e,
						username: t
					});
					if (m.ok) o(Object(i.f)({
						kind: x.b.SuccessCommunity,
						text: "User successfully added"
					})), await o(_(e, s));
					else if (m.error) {
						const e = m.error.type;
						let t = n.fbt._("Something went wrong", null, {
							hk: "8AkV3"
						});
						e === a.E.NOT_FOUND_ERROR && (t = n.fbt._("That user does not exist", null, {
							hk: "XDM7X"
						})), o(Object(i.f)({
							kind: x.b.Error,
							text: t
						}))
					}
					return m.ok
				}, j = Object(o.a)(v.a), I = ({
					subredditName: e,
					username: t,
					wikiPageName: s
				}) => async (n, o, r) => {
					const l = await (e => Object(d.a)(Object(c.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
						method: a.eb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: r.apiContext(),
						wikiPageName: s,
						subredditName: e,
						username: t
					});
					return l.ok && (n(Object(i.f)({
						kind: x.b.SuccessCommunity,
						text: "User has been successfully removed"
					})), n(j({
						username: t,
						pageKey: Object(f.a)({
							wikiPageName: s,
							subredditName: e
						})
					}))), l.ok
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			}));
			const n = "WIKI_REVISIONS_PENDING",
				a = "WIKI_REVISIONS_LOADED",
				o = "WIKI_REVISIONS_FAILED",
				r = "WIKI_PAGE_REVERT_SUCCESS",
				i = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "b", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/graphql/operations/WikiRevisions.json");
			var c = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/wiki/wikiRevision.ts");
			var h = (e, t) => Object(c.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: a.eb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var b = (e, t) => Object(c.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: a.eb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var g = e => {
					const t = e.subreddit && e.subreddit.wiki || {},
						s = t.pageRevisions && t.pageRevisions.revisions || t.recentRevisions;
					if (!s) throw new Error("Invalid response");
					return (e => {
						const t = {},
							s = [];
						return e.edges.forEach(e => {
							const n = e.node;
							t[n.id] = n, s.push(n.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: s
						}
					})(s)
				},
				f = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				x = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/selectors/subredditWiki.ts"),
				C = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const _ = Object(o.a)(C.d),
				k = Object(o.a)(C.c),
				y = Object(o.a)(C.b),
				O = e => async (t, s, o) => {
					const {
						canLoadMore: i = !1,
						canShowFailToast: c = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: p
					} = e, h = s(), b = Object(f.a)(e), x = Object(v.p)(h, {
						listingKey: b
					});
					if (!i && !!x) return !0;
					const C = x && x.pageInfo.endCursor || void 0;
					if (!(!x || x.pageInfo.hasNextPage)) return !0;
					const S = {
							after: C,
							isRecent: u,
							subredditName: m,
							wikiPageName: p
						},
						w = {
							key: b,
							options: S
						};
					t(_(w));
					const j = await ((e, t) => Object(d.a)(e, {
						...l,
						variables: t
					}))(o.gqlContext(), S);
					if (j.ok) {
						const e = j.body;
						if (e.data.subreddit) {
							const s = g(e.data);
							t(k({
								...w,
								...s
							}))
						}
					} else {
						const s = j.error || {
							type: a.E.UNKNOWN_ERROR
						};
						t(y({
							...w,
							error: s
						})), c && t(Object(r.f)({
							kind: E.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: O(e)
						}))
					}
					return j.ok
				}, S = Object(o.a)(C.a), w = e => async (t, s, a) => {
					const {
						subredditName: o,
						wikiPageName: d
					} = e, l = Object(x.a)({
						...e,
						revisionId: void 0
					}), c = Object(f.a)({
						...e,
						isRecent: !1
					}), u = Object(f.a)({
						...e,
						isRecent: !0
					}), m = Object(v.p)(s(), {
						listingKey: c
					}), p = m && m.ids[0];
					if ((await b(a.apiContext(), e)).ok) {
						const e = (await Object(i.a)(a.gqlContext(), {
								includePageData: !0,
								subredditName: o,
								wikiPageName: d
							})).body,
							s = e.data.subreddit && e.data.subreddit.wiki,
							m = s && s.page;
						if (!m || !m.revision) return;
						if (m.revision.id === p) return void t(Object(r.f)({
							kind: E.b.SuccessCommunityGreen,
							text: n.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(S({
							page: m,
							pageKey: l,
							pageRevisionsListingKey: c,
							recentRevisionsListingKey: u,
							subredditName: o,
							wikiPageName: d
						}))
					} else t(Object(r.f)({
						kind: E.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: w(e)
					}))
				}, j = Object(o.a)(C.e), I = e => async (t, s, a) => {
					const o = await h(a.apiContext(), e);
					if (o.ok) {
						const s = o.body.status;
						t(j({
							revisionId: e.revisionId,
							isHidden: s
						}))
					} else t(Object(r.f)({
						kind: E.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: w(e)
					}))
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				a = s.n(n);
			const o = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", a.a);
			t.a = o
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/reddit/components/CallToActionButton/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: a
				} = e, {
					source: d,
					callToAction: c,
					caption: u
				} = t;
				if (!d || !d.url) return null;
				let m = d.displayText;
				return d.displayText.length >= 40 && (m = d.displayText.slice(0, 40 - "...".length) + "..."), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: l.a.leftSideContent
				}, u && !a && o.a.createElement("span", {
					className: l.a.caption,
					title: u
				}, u), o.a.createElement(i.a, {
					href: d.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d,
					className: l.a.displayUrl
				}, m)), c && o.a.createElement(r.a, {
					className: l.a.callToAction,
					href: d.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d
				}, c))
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_2MgVqpGJKTGicaQowt_R9h",
				primaryButton: "_2MgVqpGJKTGicaQowt_R9h"
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/controls/TextButton/index.tsx"),
				m = s("./src/reddit/helpers/isValidUsername/index.tsx"),
				p = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				h = s("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.m.less"),
				b = s.n(h);
			const g = i.a.wrapped(c.i, "PrimaryButton", b.a);
			class f extends o.a.Component {
				constructor(e) {
					super(e), this.onInputChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						e.onAddSubmitter(e.subredditId, t.username), e.sendEventWithName("add")(), e.toggleModal()
					}, this.state = {
						username: ""
					}
				}
				componentDidMount() {
					this.setState({
						username: this.props.username || ""
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(d.d, null, o.a.createElement(d.h, null, o.a.createElement(p.a, null, o.a.createElement(d.p, null, n.fbt._("Add approved user", null, {
						hk: "rVlIL"
					})), o.a.createElement(u.a, {
						onClick: e.toggleModal
					}, o.a.createElement(d.b, null)))), o.a.createElement(d.k, null, o.a.createElement(l.d, {
						placeholder: n.fbt._("Enter username", null, {
							hk: "4DdFFr"
						}),
						onChange: this.onInputChange,
						value: this.state.username,
						autoFocus: !0
					})), o.a.createElement(d.f, null, o.a.createElement(d.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(g, {
						onClick: this.onSubmit,
						"data-redditstyle": !0,
						disabled: !Object(m.a)(t.username)
					}, n.fbt._("Add user", null, {
						hk: "23A7cj"
					}))))
				}
			}
			t.a = Object(r.a)(f)
		},
		"./src/reddit/components/ApprovedSubmitterList/index.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "_1XoRj9AWrCZUnxJt2JB2QS",
				pencilIcon: "_1XoRj9AWrCZUnxJt2JB2QS"
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/subredditModeration/approvedSubmitters.ts"),
				h = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				g = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				x = s("./src/reddit/components/Scroller/Simple.tsx"),
				E = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				v = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				C = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				k = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				y = s("./src/reddit/models/SubredditModeration/index.ts"),
				O = s("./src/reddit/selectors/activeModalId.ts"),
				S = s("./src/lib/objectSelector/index.ts"),
				w = s("./src/reddit/components/InboxTooltip/Component.tsx");
			const j = Object(S.a)((e, {
				subredditId: t
			}) => {
				const s = e.pages.modHub.approvedSubmitters.userOrder[t];
				return s ? s.map(s => e.pages.modHub.approvedSubmitters.models[t][s]) : w.a
			});
			var I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx"),
				T = s("./src/reddit/components/ApprovedSubmitterList/index.m.less"),
				P = s.n(T);
			const M = 24,
				R = c.a.wrapped(k.a, "PencilIcon", P.a),
				A = Object(I.t)({
					username: e => Object(I.T)(e).user
				}),
				L = Object(d.c)({
					approvedSubmitters: j,
					approvedSubmittersListPending: (e, {
						subredditId: t
					}) => {
						const s = Object(y.d)(t);
						return !!e.pages.modHub.approvedSubmitters.api.pending[s]
					},
					isAddUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(O.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--RemoveUserConfirmation" === Object(O.a)(e),
					loadMoreToken: (e, {
						subredditId: t
					}) => e.pages.modHub.approvedSubmitters.loadMore[t],
					searchPending: e => !!e.pages.modHub.approvedSubmitters.search.api.pending,
					searchResult: e => e.pages.modHub.approvedSubmitters.search.result
				}),
				F = Object(i.b)(L, (e, {
					subredditId: t
				}) => ({
					addSubmitter: (t, s) => e(Object(p.a)(t, s)),
					loadMore: s => e(Object(p.b)(t, {
						after: s
					})),
					removeSubmitter: (t, s) => e(Object(p.d)(t, s)),
					searchForSubmitter: (t, s) => e(Object(p.c)(t, s)),
					toggleRemoveUserModal: () => e(Object(m.i)("ModerationPage--Modal--RemoveUserConfirmation")),
					toggleAddUserModal: () => e(Object(m.i)("ModerationPage--Modal--AddUser"))
				}));
			class D extends r.a.Component {
				constructor(e) {
					super(e), this.handleRemoveToggled = (e, t) => {
						this.setState({
							userId: e,
							username: t
						}), this.props.toggleRemoveUserModal()
					}, this.handleRemoveConfirmed = () => {
						this.state.userId && this.props.removeSubmitter(this.props.subredditId, this.state.userId)
					}, this.onSearch = e => {
						this.props.searchForSubmitter(this.props.subredditId, e), this.props.sendEventWithName("search_done")(), this.setState({
							searchTerm: e
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: null
					}), this.onLoadMore = () => {
						this.props.loadMoreToken && this.props.loadMore(this.props.loadMoreToken)
					}, this.approveSubmitter = () => {
						this.props.sendEventWithName("open_add_dialog")(), this.props.toggleAddUserModal()
					}, this.renderUser = e => r.a.createElement(C.b, {
						timeAgo: Object(u.d)(e.approvedAtUTC),
						pageName: l.Wb.Contributors,
						primaryButton: r.a.createElement("a", {
							href: `${n.a.redditUrl}/message/compose/?to=${e.username}`,
							rel: "noopener noreferrer",
							target: "_blank"
						}, r.a.createElement(_.o, null, a.fbt._("Send message", null, {
							hk: "2bul7M"
						}))),
						secondaryButton: r.a.createElement(_.o, {
							onClick: () => this.handleRemoveToggled(e.id, e.username)
						}, a.fbt._("Remove", null, {
							hk: "40fFvl"
						})),
						subredditId: this.props.subredditId,
						userIcon: e.accountIcon,
						username: e.username
					}), this.renderAddUserModal = () => r.a.createElement(N.a, {
						ignoreDefaultFocus: !0,
						onAddSubmitter: this.props.addSubmitter,
						sendEventWithName: this.props.sendEventWithName,
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleAddUserModal,
						username: this.props.username,
						withOverlay: !0
					}), this.state = y.a
				}
				componentDidMount() {
					this.props.username && this.approveSubmitter()
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.approvedSubmitters.length ? e.approvedSubmitters[e.approvedSubmitters.length - 1].id : void 0;
					return e.approvedSubmitters.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(f.c, null, r.a.createElement(_.i, {
						onClick: this.approveSubmitter
					}, a.fbt._("Approve user", null, {
						hk: "2v6FxN"
					}))), r.a.createElement(f.a, null, r.a.createElement(f.b, null, a.fbt._("Approved users", null, {
						hk: "1alMeD"
					}), r.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009164452`
					})), r.a.createElement(v.b, {
						activeSearchQuery: this.state.searchTerm,
						onSearch: this.onSearch
					}), t.searchTerm ? r.a.createElement(E.a, {
						cancelSearch: this.cancelSearch,
						noResultsFound: !e.searchResult,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm
					}, e.searchResult && this.renderUser(e.searchResult)) : r.a.createElement(x.b, {
						loadMoreToken: s,
						onLoadMore: this.onLoadMore
					}, e.approvedSubmitters.map((e, t) => ({
						estHeight: M,
						id: e.id,
						render: () => this.renderUser(e)
					})))), e.isAddUserModalOpen && this.renderAddUserModal(), e.isConfirmModalOpen && t.userId && t.username && r.a.createElement(h.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "42TALr"
						}),
						modalText: a.fbt._("Are you sure you want to remove {username} as an approved user?", [a.fbt._param("username", t.username)], {
							hk: "4ELjHt"
						}),
						onConfirm: this.handleRemoveConfirmed,
						toggleModal: e.toggleRemoveUserModal,
						trackClick: e.sendEventWithName("remove"),
						withOverlay: !0
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(f.c, null, r.a.createElement(_.i, {
						onClick: this.approveSubmitter
					}, a.fbt._("Approve user", null, {
						hk: "1qX1LT"
					}))), r.a.createElement(f.a, null, r.a.createElement(f.b, null, a.fbt._("Approved users", null, {
						hk: "pxkv2"
					}), r.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009164452`
					})), e.approvedSubmittersListPending ? r.a.createElement(C.a, null) : r.a.createElement(b.c, {
						text: a.fbt._("No approved users in {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
							hk: "1VEG1v"
						})
					}, r.a.createElement(R, null))), e.isAddUserModalOpen && this.renderAddUserModal())
				}
			}
			t.a = A(F(D))
		},
		"./src/reddit/components/BannedUserList/ExpandedComponent.m.less": function(e, t, s) {
			e.exports = {
				UnthreadedComment: "lOLiM3i26F_WjvQ8LeLft",
				unthreadedComment: "lOLiM3i26F_WjvQ8LeLft",
				BanReason: "SrZ1u3sJDzvdTgFW_XYZl",
				banReason: "SrZ1u3sJDzvdTgFW_XYZl",
				ExpandedComponentContainer: "_3q58C3lscUB_CbjoSfgVW2",
				expandedComponentContainer: "_3q58C3lscUB_CbjoSfgVW2",
				ModNote: "_3hA381rnksvJreaBfQTIC3",
				modNote: "_3hA381rnksvJreaBfQTIC3",
				ModNoteContainer: "_35E0y1j_QASeOMGpNM97k7",
				modNoteContainer: "_35E0y1j_QASeOMGpNM97k7",
				SectionTitle: "_3QIBdlHwReGVNodLBY3cSt",
				sectionTitle: "_3QIBdlHwReGVNodLBY3cSt",
				ContextContainer: "_1pqL5T1jpl-iWaJcvRftmU",
				contextContainer: "_1pqL5T1jpl-iWaJcvRftmU"
			}
		},
		"./src/reddit/components/BannedUserList/index.m.less": function(e, t, s) {
			e.exports = {
				BanIcon: "_1c2rKv1iuQylye8ejI6-1v",
				banIcon: "_1c2rKv1iuQylye8ejI6-1v"
			}
		},
		"./src/reddit/components/BannedUserList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Q
			}));
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./node_modules/lodash/find.js"),
				u = s.n(c);
			const m = [{
				ms: l.hc,
				unit: "years"
			}, {
				ms: l.kb,
				unit: "months"
			}, {
				ms: l.x,
				unit: "days"
			}, {
				ms: l.L,
				unit: "hours"
			}, {
				ms: l.fb,
				unit: "minutes"
			}, {
				ms: l.Kb,
				unit: "seconds"
			}, {
				ms: 1,
				unit: "milliseconds"
			}];
			var p = s("./src/lib/lessComponent.tsx"),
				h = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				g = s("./src/reddit/actions/subredditModeration/ban.ts"),
				f = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				x = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				E = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				v = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				C = s("./src/reddit/components/Scroller/Simple.tsx"),
				_ = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				k = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				y = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				S = s("./src/reddit/icons/svgs/Ban/index.tsx"),
				w = s("./src/reddit/models/SubredditModeration/index.ts"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				I = s("./src/reddit/selectors/bannedUser.ts"),
				N = s("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				T = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				P = s("./src/reddit/components/CompactPost/index.tsx"),
				M = s("./src/reddit/contexts/PageLayer/index.tsx"),
				R = s("./src/reddit/components/BannedUserList/ExpandedComponent.m.less"),
				A = s.n(R);
			const L = Object(M.t)({
					currentProfileName: M.h,
					isCommentsPage: M.w,
					isCommentPermalink: M.v,
					isProfilePostListing: M.I,
					pageLayer: e => e
				}),
				F = p.a.wrapped(T.c, "UnthreadedComment", A.a),
				D = p.a.div("BanReason", A.a),
				U = p.a.div("ExpandedComponentContainer", A.a),
				B = p.a.div("ModNote", A.a),
				W = p.a.div("ModNoteContainer", A.a),
				H = p.a.div("SectionTitle", A.a),
				V = p.a.div("ContextContainer", A.a),
				q = e => () => {};
			var G = L(e => {
					const {
						currentProfileName: t,
						isCommentPermalink: s,
						isCommentsPage: n,
						isProfilePostListing: a,
						pageLayer: o,
						user: i
					} = e;
					return r.a.createElement(U, null, i.modNote && r.a.createElement(W, null, r.a.createElement(H, null, "Mod note:"), r.a.createElement(B, null, i.modNote)), r.a.createElement("div", null, r.a.createElement(H, null, "Banned For:"), r.a.createElement(D, null, i.reason), (i.postId || i.commentId) && r.a.createElement(V, null, i.postId && r.a.createElement(P.default, {
						currentProfileName: t,
						isCommentsPage: n,
						isCommentPermalink: s,
						isProfilePostListing: a,
						pageLayer: o,
						last: !0,
						postId: i.postId,
						hideModTools: !0,
						inSubredditOrProfile: !0
					}), i.commentId && r.a.createElement(F, {
						commentId: i.commentId,
						highlight: !1,
						trackClick: q
					}))))
				}),
				z = s("./src/reddit/components/BannedUserList/index.m.less"),
				K = s.n(z);
			const X = 48,
				Q = e => {
					if (null == e) return a.fbt._("Permanent", null, {
						hk: "3pNDzS"
					}); {
						const t = function(e) {
							const t = u()(m, t => e >= t.ms);
							return t ? {
								amount: Math.floor(e / t.ms),
								unit: t.unit
							} : {
								amount: 0,
								unit: "justNow"
							}
						}(864e5 * e);
						return a.fbt._({
							"*": "{number} days left",
							_1: "1 day left"
						}, [a.fbt._plural(t.amount, "number")], {
							hk: "3VM32a"
						})
					}
				},
				J = e => {
					return `${Object(h.d)(e.bannedAtUTC)} (${Q(e.duration)})`
				},
				Y = p.a.wrapped(S.a, "BanIcon", K.a),
				Z = Object(d.c)({
					bannedUsers: I.h,
					bannedUsersList: I.d,
					bannedUsersListPending: I.c,
					loadMoreToken: I.e,
					isBanUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(j.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--BanUserConfirmation" === Object(j.a)(e),
					searchPending: I.f,
					searchResult: I.g
				}),
				$ = Object(i.b)(Z, (e, {
					subredditId: t
				}) => ({
					loadMore: s => e(Object(g.c)(t, {
						after: s
					})),
					onUnbanUser: s => () => e(Object(g.e)(t, s)),
					searchForBannedUser: s => e(Object(g.d)(t, s)),
					toggleBanUserModal: () => e(Object(b.i)("ModerationPage--Modal--AddUser"))
				}));
			class ee extends r.a.Component {
				constructor(e) {
					super(e), this.handleBanUserToggled = e => {
						if (e) {
							const {
								id: t,
								username: s
							} = e;
							this.setState({
								userId: t,
								username: s
							})
						} else this.setState({
							...w.a,
							searchTerm: this.state.searchTerm
						});
						this.props.isBanUserModalOpen || this.props.sendEventWithName(e ? "edit_user" : "ban_dialog_banpage")(), this.props.toggleBanUserModal()
					}, this.addBannedUser = () => this.handleBanUserToggled(null), this.onSearch = e => {
						this.props.searchForBannedUser(e), this.props.sendEventWithName("search_done")(), this.setState({
							searchTerm: e
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: null
					}), this.onLoadMore = () => {
						this.props.loadMoreToken && this.props.loadMore(this.props.loadMoreToken)
					}, this.renderBannedUser = e => {
						const t = this.props.bannedUsers[e] || this.props.searchResult;
						return t ? r.a.createElement(y.b, {
							description: t.reason,
							expandedComponent: r.a.createElement(G, {
								user: t
							}),
							pageName: l.Wb.Banned,
							primaryButton: r.a.createElement(O.o, {
								onClick: () => this.handleBanUserToggled(t),
								"data-redditstyle": !0
							}, a.fbt._("Edit", null, {
								hk: "1nftDt"
							})),
							subredditId: this.props.subredditId,
							timeAgo: J(t),
							userIcon: t.accountIcon,
							username: t.username
						}) : r.a.createElement("div", null)
					}, this.renderAddBannedUserModal = () => r.a.createElement(N.a, {
						ignoreDefaultFocus: !0,
						onUnbanUser: this.state.userId ? this.props.onUnbanUser(this.state.userId) : void 0,
						subredditId: this.props.subredditId,
						toggleModal: () => this.handleBanUserToggled(null),
						trackAddEvent: this.props.sendEventWithName("add_banpage"),
						trackEventWithName: this.props.sendEventWithName,
						user: this.state.userId ? this.state.searchTerm ? this.props.searchResult || null : this.props.bannedUsers[this.state.userId] : null,
						withOverlay: !0
					}), this.state = w.a
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.bannedUsersList.length ? e.bannedUsersList[e.bannedUsersList.length - 1].id : void 0;
					return e.bannedUsersList.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, null, r.a.createElement(O.i, {
						onClick: this.addBannedUser,
						"data-redditstyle": !0
					}, a.fbt._("Ban user", null, {
						hk: "2q7TuL"
					}))), r.a.createElement(v.a, null, r.a.createElement(v.b, null, a.fbt._("Banned users", null, {
						hk: "3hvISm"
					}), r.a.createElement(E.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), r.a.createElement(k.b, {
						onSearch: this.onSearch,
						activeSearchQuery: this.state.searchTerm
					}), t.searchTerm ? r.a.createElement(_.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && this.renderBannedUser(e.searchResult.id)) : r.a.createElement(C.b, {
						loadMoreToken: s,
						onLoadMore: this.onLoadMore
					}, e.bannedUsersList.map(e => ({
						estHeight: X,
						id: e.id,
						render: () => this.renderBannedUser(e.id)
					})))), e.isBanUserModalOpen && this.renderAddBannedUserModal(), e.isConfirmModalOpen && t.userId && t.username && r.a.createElement(f.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "Lczwm"
						}),
						modalText: a.fbt._("Are you sure you want to ban {username}?", [a.fbt._param("username", t.username)], {
							hk: "4f7Mkp"
						}),
						onConfirm: () => {},
						toggleModal: e.toggleBanUserModal,
						trackClick: e.sendEventWithName("remove")
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, null, r.a.createElement(O.i, {
						onClick: this.addBannedUser,
						"data-redditstyle": !0
					}, " ", a.fbt._("Ban user", null, {
						hk: "2q7TuL"
					}))), r.a.createElement(v.a, null, r.a.createElement(v.b, null, a.fbt._("Banned users", null, {
						hk: "3hvISm"
					}), r.a.createElement(E.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), e.bannedUsersListPending ? r.a.createElement(y.a, null) : r.a.createElement(x.c, {
						text: a.fbt._("No banned users in {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
							hk: "1nOcbC"
						})
					}, r.a.createElement(Y, null))), e.isBanUserModalOpen && this.renderAddBannedUserModal())
				}
			}
			t.a = $(ee)
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => a.a.createElement(r.a, l({
				className: Object(o.a)(e, d.a.CallToActionButton, {
					[d.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, s) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = s.n(i);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(r.b, {
				className: Object(o.a)(e.className, d.a.container, e.text.length >= e.maxChars ? d.a.mOverflow : null)
			}, l._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [l._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/PostLeftRail/index.tsx"),
				l = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				m = s("./src/reddit/models/Vote/index.ts"),
				p = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = s.n(p),
				b = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				g = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(c.t)(),
				E = Object(r.c)({
					isFakeSubreddit: c.x
				}),
				v = Object(o.b)(E),
				C = e => {
					const t = {
						interactive: !1,
						voteState: m.a.notVoted
					};
					return a.a.createElement("div", {
						className: Object(i.a)(e.className, g.a.emptyVerticalVotes)
					}, a.a.createElement(l.d, f({
						key: "u"
					}, t)), e.children, a.a.createElement(l.c, f({
						key: "d"
					}, t)))
				},
				_ = () => a.a.createElement(C, null, a.a.createElement("div", {
					className: g.a.emptyScore,
					key: "s"
				}));
			t.b = x(v(e => a.a.createElement("div", {
				className: Object(i.a)(e.className, h.a.classicPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, a.a.createElement(d.b, null, a.a.createElement(_, null)), a.a.createElement("div", {
				className: g.a.mainBody
			}, a.a.createElement("div", {
				className: g.a.thumbnailContainer
			}, a.a.createElement("div", {
				className: Object(i.a)(g.a.thumbnail, Object(u.b)(e))
			})), a.a.createElement("div", {
				className: g.a.content
			}, a.a.createElement("div", {
				key: "a"
			}, a.a.createElement("div", {
				key: "aa",
				className: Object(i.a)(g.a.title, Object(u.b)(e))
			}), a.a.createElement("div", {
				key: "ab",
				className: Object(i.a)(g.a.meta, Object(u.b)(e))
			})), a.a.createElement("div", {
				key: "f",
				className: g.a.flatlist
			}, a.a.createElement("div", {
				key: "fa",
				className: Object(i.a)(g.a.flatlistExpando, Object(u.b)(e))
			}), a.a.createElement("div", {
				key: "fb",
				className: g.a.flatlistSeparator
			}), a.a.createElement("div", {
				key: "fc",
				className: Object(i.a)(g.a.flatListItemOne, Object(u.b)(e))
			}), a.a.createElement("div", {
				key: "fd",
				className: Object(i.a)(g.a.flatListItemTwo, Object(u.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return V
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return z
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/ads/index.ts"),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				l = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				c = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				p = s("./src/reddit/components/ExpandoButton/index.tsx"),
				h = s("./src/reddit/components/Flatlist/index.tsx"),
				b = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/ModModeReports/index.tsx"),
				f = s("./src/reddit/components/ModModeReports/helpers.ts"),
				x = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				E = s("./src/reddit/components/PostContainer/index.tsx"),
				v = s("./src/reddit/components/PostMedia/index.tsx"),
				C = s("./src/reddit/components/PostMeta/index.tsx"),
				_ = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				k = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				O = s("./src/reddit/components/PostTopMeta/index.tsx"),
				S = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				w = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				j = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				N = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				T = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				P = s("./src/reddit/contexts/Post/index.tsx"),
				M = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				R = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				A = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				L = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				F = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				D = s.n(F),
				U = s("./src/reddit/components/ClassicPost/index.m.less"),
				B = s.n(U);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class H extends a.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: n,
						inSubredditOrProfile: i,
						eventFactory: v,
						first: N,
						flairStyleTemplate: T,
						formatTitle: P,
						hostPostId: F,
						isActionBarAnimationEnabled: U,
						isCheckboxSelected: H,
						isCurrentUserProfilePost: q,
						isFrontpage: G,
						isGalleryTileLayoutDefault: z,
						isLoggedIn: K,
						isOverlay: X,
						imageGalleryCurrentItem: Q,
						moderatorPermissions: J,
						modModeEnabled: Y,
						onClickPost: Z,
						onIgnoreReports: $,
						onOpenReportsDropdown: ee,
						poll: te,
						post: se,
						postId: ne,
						redditStyle: ae,
						scrollerItemRef: oe,
						showBulkActionCheckbox: re,
						showEditFlair: ie,
						showMedia: de,
						subredditOrProfile: le,
						toggleCheckbox: ce,
						userIsOp: ue,
						shouldShowGalleryTileOption: me
					} = this.props, pe = ae ? void 0 : T, he = this.props.crosspost || void 0, be = Object(A.a)(J), ge = Object(M.a)(J), fe = Object(R.a)(J), xe = Y && A.a, Ee = !!se.media && se.media.type === j.o.RTJSON, ve = ue && Ee, Ce = i && !de, _e = !!se.media && Object(j.G)(se.media), ke = {
						flairStyleTemplate: pe,
						post: se,
						inSubredditOrProfile: i,
						isCurrentUserProfilePost: q,
						isOverlay: X,
						shouldShowSubscribeButton: !(G && K),
						subredditOrProfile: le
					}, ye = Object(o.t)(se, Q), {
						source: Oe
					} = ye, Se = a.a.createElement(E.a, {
						className: Object(r.a)(D.a.classicPostStyles, B.a.postContainer, Object(L.a)(this.props), N ? B.a.mFirst : void 0, e),
						isOverlay: X,
						style: {
							...Object(L.d)(this.props),
							...Object(L.b)(this.props.flairStyleTemplate)
						},
						post: se,
						onClick: Z,
						eventFactory: v
					}, a.a.createElement(k.a, {
						model: se,
						handleVote: s,
						showBulkActionCheckbox: re,
						isCheckboxSelected: H,
						toggleCheckbox: ce,
						flairStyleTemplate: pe,
						redditStyle: ae,
						subreddit: le,
						isActionBarAnimationEnabled: U,
						postId: ne
					}), a.a.createElement(x.a, {
						"data-click-id": "background",
						flairStyleTemplate: pe
					}, a.a.createElement(m.a, {
						className: B.a.eventMeta,
						post: se
					}), a.a.createElement("div", {
						className: B.a.mainBody
					}, a.a.createElement("div", {
						className: Ce ? B.a.expandoContainer : B.a.thumbnailContainer
					}, !Ce && a.a.createElement(I.a, {
						className: B.a.classicThumbnail,
						crosspost: he && se,
						isMeta: se.isMeta,
						post: he || se,
						redditStyle: ae,
						templatePlaceholderImage: pe && pe.postPlaceholderImage,
						removeLink: _e
					}), a.a.createElement(p.a, {
						crosspost: he,
						className: B.a.rightExpando,
						isExpanded: !!n,
						post: se,
						useMediaIcons: !1
					})), a.a.createElement("div", {
						className: B.a.content,
						"data-click-id": "body"
					}, a.a.createElement(y.c, {
						className: te ? B.a.titleWithPoll : void 0,
						format: P,
						poll: te,
						post: se,
						redditStyle: ae,
						size: y.b.Medium,
						titleColor: pe && pe.postTitleColor,
						isOverlay: X
					}, se.source && !he && a.a.createElement(w.a, {
						href: se.source.url,
						isSponsored: se.isSponsored,
						postId: se.id,
						source: se.source
					}, Object(d.a)(se))), a.a.createElement(C.a, W({
						key: "PostMeta"
					}, ke)), Y && be && Object(f.c)(se) && a.a.createElement(g.a, {
						onIgnoreReports: $,
						reportable: se
					}), se.isSponsored && Oe && Oe.url && a.a.createElement(l.a, {
						className: B.a.adLinkWrapper
					}, a.a.createElement(c.a, {
						post: se,
						adLinkContent: ye
					})), a.a.createElement("div", {
						className: B.a.flatlistContainer
					}, a.a.createElement(p.a, {
						className: B.a.leftExpando,
						crosspost: he,
						isExpanded: !!n,
						post: se,
						useMediaIcons: !1
					}), a.a.createElement(u.a, {
						className: B.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: pe,
						model: se,
						onVoteClick: s
					}), a.a.createElement(h.a, {
						className: B.a.flatlistSeparator
					}), a.a.createElement(h.c, {
						className: B.a.flatlist,
						currentUser: t,
						hasModFlairPerms: ge,
						hasModPostPerms: be,
						hasModFullPerms: fe,
						hostPostId: F,
						isActionBarAnimationEnabled: U,
						isOverlay: !!X,
						modModeEnabled: Y,
						onIgnoreReports: $,
						onOpenReportsDropdown: ee,
						post: se,
						showEditPost: ve,
						showEditFlair: ie,
						tooltipType: X ? O.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(_.h)({
							editPost: !xe,
							save: !xe,
							hide: !xe,
							report: !xe
						})
					})), a.a.createElement(b.d, null))), V(se, oe, n, me, z)));
					return a.a.createElement(S.b, null, Se)
				}
			}
			const V = (e, t, s, n, o) => s ? e.crosspostRootId ? a.a.createElement("div", {
					className: B.a.crosspostMediaWrapper
				}, q(e, t, n, o)) : q(e, t, n, o) : null,
				q = (e, t, s, n) => a.a.createElement(v.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				}),
				G = Object(i.a)(H),
				z = Object(P.b)(Object(T.a)(G));
			t.default = Object(N.a)(G)
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				thumbnailContainer: "_3cwq18vPueuAxRSrd1foNB",
				mainBody: "_1jxw1P65tWXN5u8kVHlX-n",
				content: "_2KR7fLQx_7rIv8QaoeXKZw",
				emptyScore: "_6w7aNMh3t6UMe07Q6oWFE",
				emptyVerticalVotes: "_1Xs9oeessHWcuF0VTVxRnl",
				thumbnail: "_2XOZ5bYpLdswvBAYUNa-ly",
				title: "n3AVRrP7HOfc0gAtGFpfv",
				meta: "_1BoNlCqTsaeLXkuZbADxyl",
				flatlist: "_1IgQuZI8L6A0NcShWmf08y",
				flatlistExpando: "_2AMaFX8Gwojg29X4_nOnaL",
				flatlistSeparator: "oljBm1Q059l3l84VHO9VM",
				flatListItemOne: "_2xeK0Acj_38O5kqiHgp7VC",
				flatListItemTwo: "_3WphuhFsMSKk2tQyD3fZeI"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.m.less": function(e, t, s) {
			e.exports = {
				VoteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				voteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				ContentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				contentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				CommentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				commentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				CommentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				commentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				CommentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				commentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				ParentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				parentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				Component: "_29-oldqrqqPwwjRRH0aLqU",
				component: "_29-oldqrqqPwwjRRH0aLqU"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return N
			})), s.d(t, "b", (function() {
				return M
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/actions/comment/moderation.ts"),
				c = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				u = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				m = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				p = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				h = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/index.tsx"),
				g = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				f = s("./src/reddit/components/RichTextJson/index.tsx"),
				x = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/selectors/comments.ts"),
				C = s("./src/reddit/selectors/commentSelector.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				y = s.n(k),
				O = s("./src/lib/lessComponent.tsx");
			const S = O.a.div("VoteSpacer", y.a),
				w = O.a.div("ContentWrapper", y.a),
				j = O.a.div("CommentContentWrapper", y.a),
				I = O.a.div("CommentBody", y.a),
				N = O.a.div("ParentPostTitle", y.a),
				T = O.a.div("CommentParentWrapper", y.a),
				P = Object(r.c)({
					comment: (e, t) => Object(C.a)(e, t),
					flair: v.e,
					subreddit: _.I
				}),
				M = Object(o.b)(P, (e, {
					commentId: t,
					trackClick: s
				}) => ({
					onIgnoreReports: () => e(Object(l.g)(t)),
					onVoteClick: n => {
						const [a, o] = n === E.a.upvoted ? [Object(d.q)(t), "upvote_comment"] : [Object(d.j)(t), "downvote_comment"];
						s(o)(), e(a)
					}
				})),
				R = Object(i.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = M(O.a.wrapped(e => {
				const {
					className: t,
					comment: s,
					flair: n,
					hasReports: o,
					isCheckboxSelected: r = !1,
					onIgnoreReports: i,
					onVoteClick: d,
					showModTools: l,
					subreddit: E,
					showBulkActionCheckbox: v,
					toggleCheckbox: C
				} = e;
				return a.a.createElement(u.a, {
					className: t,
					clickTrackingId: s.id,
					permalink: s.permalink
				}, a.a.createElement(g.a, {
					model: s,
					handleVote: d,
					showBulkActionCheckbox: v,
					isCheckboxSelected: r,
					toggleCheckbox: C,
					subreddit: E
				}), a.a.createElement(S, null, a.a.createElement(w, null, a.a.createElement(T, null, s.postTitle && a.a.createElement(N, null, s.postTitle), s.postAuthor && a.a.createElement(h.a, {
					comment: s
				})), a.a.createElement(j, null, a.a.createElement(m.a, {
					comment: s
				}, a.a.createElement(I, null, a.a.createElement(f.a, {
					content: Object(x.a)(s),
					rtJsonElementProps: R(e)
				})), a.a.createElement(p.a, {
					comment: s,
					flair: n,
					subredditName: E ? E.displayText : null
				}), o && a.a.createElement(b.a, {
					onIgnoreReports: i,
					reportable: s
				}), l && !s.isDeleted && a.a.createElement(c.a, {
					comment: s
				}))))))
			}, "Component", y.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				d = s("./src/reddit/helpers/overlay/index.ts");
			const l = Object(o.b)(null, e => ({
				openLightbox: t => e(Object(d.a)(t))
			}));
			class c extends a.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: s,
						...n
					} = this.props, o = n => e(() => n.metaKey || n.ctrlKey || 1 === n.button ? window.open(Object(r.a)(t, {
						context: 3
					})) : s(Object(r.a)(t, {
						context: 3
					})))(n);
					return a.a.createElement("div", {
						className: n.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && o(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && o(e)
						}
					}, n.children)
				}
			}
			t.a = l(Object(i.c)(c))
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				DashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u",
				dashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				i = s.n(r);
			const d = o.a.div("DashWrapper", i.a);
			t.a = e => null === e.comment.parentId ? a.a.createElement(d, null, e.children) : a.a.createElement(d, null, a.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				subredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				TopMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				topMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				Inline: "meK3ndVOmnvQt6wVaAg5W",
				inline: "meK3ndVOmnvQt6wVaAg5W",
				PostedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				postedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				TextContainer: "iV3Hb5JWIQSpA3WhioY-N",
				textContainer: "iV3Hb5JWIQSpA3WhioY-N"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				i = s("./src/reddit/layout/row/Inline/index.tsx"),
				d = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				l = s.n(d),
				c = s("./src/lib/lessComponent.tsx");
			const u = c.a.wrapped(i.a, "Inline", l.a),
				m = c.a.wrapped(i.a, "PostedInfo", l.a),
				p = c.a.wrapped(i.a, "SubredditWrapper", l.a),
				h = c.a.div("TextContainer", l.a),
				b = c.a.wrapped(r.a, "TopMeta", l.a);
			t.a = e => o.a.createElement(u, {
				className: e.className
			}, e.subredditName && o.a.createElement(p, null, e.subredditName && o.a.createElement(h, null, e.subredditName)), o.a.createElement(m, null, o.a.createElement(h, null, `${n.fbt._("Commented by",null,{hk:"4Dveap"})}`), o.a.createElement(b, {
				collapsedBecauseCrowdControl: e.comment.collapsedBecauseCrowdControl,
				collapsed: !1,
				comment: e.comment,
				flair: e.flair,
				renderedInOverlay: !1
			})))
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				AuthorLink: "_2jljMb6FK7HnIb15zmm1of",
				authorLink: "_2jljMb6FK7HnIb15zmm1of",
				SubredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				subredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				TextContainer: "_2in6k_0-sFgKVz16hifq03",
				textContainer: "_2in6k_0-sFgKVz16hifq03",
				SubredditIcon: "uCjYZbKNai0INWGwHjoUh",
				subredditIcon: "uCjYZbKNai0INWGwHjoUh",
				Inline: "_2VWXAfRlnHG_4nydI7J4l3",
				inline: "_2VWXAfRlnHG_4nydI7J4l3"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/AuthorLink/index.tsx"),
				r = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				c = s.n(l),
				u = s("./src/lib/lessComponent.tsx");
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = u.a.wrapped(o.a, "AuthorLink", c.a), h = u.a.wrapped(d.a, "Inline", c.a), b = u.a.wrapped(d.a, "SubredditWrapper", c.a), g = u.a.div("TextContainer", c.a), f = u.a.wrapped(i.b, "SubredditIcon", c.a);
			t.a = e => a.a.createElement(h, null, e.subredditOrProfile && a.a.createElement(b, null, e.subredditOrProfile && a.a.createElement(f, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && a.a.createElement(g, null, e.subredditOrProfile.displayText)), m._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && a.a.createElement(r.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, a.a.createElement(p, {
				author: e.comment.postAuthor,
				isUnstyled: !0
			}, `u/${e.comment.postAuthor}`)))
		},
		"./src/reddit/components/CommunityAwardList/AwardRow/index.m.less": function(e, t, s) {
			e.exports = {
				row: "_1SJYzo3UAyKEOF7dfuB9mj",
				awardName: "KMxVBNnYo_dcBwZGB9Y7a",
				unfilledAward: "_3s20dmDQOAFnj9VBvMb_K9",
				awardDetail: "_2NA5kHSdCz8PTAq-oiC2lE",
				awardExpiresDetail: "_23IvuOow0OJsmKnkmU_FEX",
				headerRow: "_1NbiD8qa7KncC2IlK9RoSb",
				awardIconImage: "_3sB_KQUJdYFc6cPgCjizd4",
				deleteIcon: "_1Aox5T2z7StzW_M0WfnDTe",
				rightAlign: "_3MpqTEDv3tS3-u-1uNAt6Y",
				createButton: "_3pXwHsShRJ0s12b9e-_gCX",
				emptyIcon: "yy-p6aZDVdPVBPBYMhbEy",
				emptyDetails: "LUZArpcpRdOTEPUDrjKVR",
				awardLoadingContainer: "_2WNYZIJMYIXJIS_IJIIiTe"
			}
		},
		"./src/reddit/components/CommunityAwardList/AwardSettings/index.m.less": function(e, t, s) {
			e.exports = {
				awardToggleContainer: "_2E_k43b0N9nhGQKfSvT_c_",
				emptyToggleContainer: "_1lQVQi-D8yElpWeJLbrix0",
				emptyToggleContainerLabel: "_2Porr9EjtYqQt8OhMaCU3h",
				optionalAwardInfo: "ZViyY3IDk7c6MplUKuCKa",
				awardToggleItem: "XwXRf6eWep27jKV1kkNDN",
				awardToggleLabelItem: "_2d9jt8apy5IwNRPdrC_RtG",
				awardIconWrapper: "_3DGDvlViP1uosxrUobijCu",
				awardIcon: "_10ar4v6qlEgLvqEhxk_wyP",
				awardInfoWrapper: "_2LxUe9vOie60H44Rkl5YYd",
				awardToggleItemDisabled: "_1touzuLFgoSGqEcDiLDD00",
				awardTitle: "_1fG-NkjOvo6khgB4qJmizu",
				awardDescription: "_2VABiA5W4pgqWyCK_oV4Hg"
			}
		},
		"./src/reddit/components/CommunityAwardList/index.m.less": function(e, t, s) {
			e.exports = {
				contentContainer: "_27C02100EX-RnLoDyL_PYT",
				gildIcon: "_3f4YbBVVbX4YXols-8AmgC",
				infoIcon: "_1HPeb_FxEOzicQ4BuIVonK",
				pageInfo: "_2bEhfADeSjJE-8zKoxjbGy",
				awardToDelete: "dzAx082Iu3F9M7xS-PL80",
				awardToDeleteIcon: "_11ikfBu3qqa0paYAJLQINO"
			}
		},
		"./src/reddit/components/CommunityAwardList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/constants/gold.ts"),
				m = s("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				p = s("./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts"),
				h = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/trackers/communityAwards.ts"),
				g = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/makeAsync.tsx")),
				f = s("./src/lib/loadWithRetries/index.ts");
			var x = Object(g.a)({
					getComponent: () => Object(f.a)(() => Promise.all([s.e("AwardCreationModal").then(s.bind(null, "./src/reddit/components/AwardCreationModal/index.tsx"))])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				E = s("./src/reddit/models/Gold/Award.ts"),
				v = s("./src/reddit/components/ConfirmModal/index.tsx"),
				C = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				_ = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				y = s("./src/reddit/icons/svgs/Gild/index.tsx"),
				O = s("./src/reddit/icons/svgs/Info/index.tsx"),
				S = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./node_modules/lodash/times.js"),
				j = s.n(w),
				I = s("./src/lib/classNames/index.ts"),
				N = s("./src/reddit/controls/Button/index.tsx"),
				T = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				P = s("./src/reddit/helpers/awards/isEligibleForTemporaryAwards.ts"),
				M = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				R = s("./src/reddit/components/CommunityAwardList/AwardRow/index.m.less"),
				A = s.n(R);
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = () => o.a.createElement("div", {
				className: A.a.row
			}, o.a.createElement("div", {
				className: A.a.awardName
			}, o.a.createElement("div", {
				className: A.a.emptyDetails
			})), o.a.createElement("div", {
				className: A.a.awardDetail
			}, o.a.createElement("div", {
				className: A.a.emptyIcon
			})), o.a.createElement("div", {
				className: A.a.awardDetail
			}, o.a.createElement("div", {
				className: A.a.emptyDetails
			})), o.a.createElement("div", {
				className: A.a.awardDetail
			}, o.a.createElement("div", {
				className: A.a.emptyDetails
			}))), D = e => o.a.createElement("div", {
				className: Object(I.a)(e.className, A.a.awardLoadingContainer)
			}, j()(10, e => o.a.createElement(F, {
				key: e
			}))), U = ({
				subredditId: e
			}) => o.a.createElement("div", {
				className: A.a.headerRow
			}, o.a.createElement("div", {
				className: A.a.awardName
			}, L._("Name", null, {
				hk: "2rgEdc"
			})), o.a.createElement("div", {
				className: A.a.awardDetail
			}, L._("Icon", null, {
				hk: "zWzOj"
			})), o.a.createElement("div", {
				className: A.a.awardDetail
			}, L._("Coins", null, {
				hk: "2uhz31"
			})), o.a.createElement("div", {
				className: A.a.awardDetail
			}, L._("Type", null, {
				hk: "1rYgKO"
			})), Object(P.a)(e) && o.a.createElement("div", {
				className: A.a.awardDetail
			}, L._("Starts", null, {
				hk: "HW61W"
			})), Object(P.a)(e) && o.a.createElement("div", {
				className: A.a.awardDetail
			}, L._("Expires", null, {
				hk: "3hS2VX"
			}))), B = ({
				date: e
			}) => o.a.createElement("div", {
				className: A.a.awardExpiresDetail
			}, e && e.toLocaleString()), W = e => o.a.createElement("div", {
				className: A.a.row
			}, o.a.createElement("div", {
				className: Object(I.a)(A.a.awardName, A.a.unfilledAward)
			}, L._({
				"*": "Create up to {quantity} more {coin-price} Coin Awards",
				_1: "Create up to {quantity} more {coin-price} Coin Award"
			}, [L._param("quantity", e.quantity), L._param("coin-price", e.coinPrice), L._plural(e.quantity)], {
				hk: "4nSQI7"
			})), o.a.createElement(M.a, {
				className: A.a.rightAlign
			}, o.a.createElement(N.i, {
				className: A.a.createButton,
				onClick: e.onCreate
			}, L._("Create", null, {
				hk: "3aEi77"
			})))), H = e => o.a.createElement("div", {
				className: A.a.row
			}, o.a.createElement("div", {
				className: Object(I.a)(A.a.awardName, A.a.unfilledAward)
			}, L._("Create a Moderator-Only Award", null, {
				hk: "3aMmTo"
			})), o.a.createElement(M.a, {
				className: A.a.rightAlign
			}, o.a.createElement(N.i, {
				className: A.a.createButton,
				onClick: e.onCreate
			}, L._("Create", null, {
				hk: "3aEi77"
			})))), V = e => o.a.createElement("div", {
				className: A.a.row
			}, o.a.createElement("div", {
				className: Object(I.a)(A.a.awardName, A.a.unfilledAward)
			}, L._("Create an Award", null, {
				hk: "1zGxjw"
			})), o.a.createElement(M.a, {
				className: A.a.rightAlign
			}, o.a.createElement(N.i, {
				className: A.a.createButton,
				onClick: e.onCreate
			}, L._("Create", null, {
				hk: "3aEi77"
			}))));
			class q extends o.a.Component {
				constructor() {
					super(...arguments), this.onDelete = e => {
						e.preventDefault(), this.props.onDelete(this.props.award.id)
					}
				}
				render() {
					const {
						award: e,
						canDelete: t,
						iconUrl: s,
						subredditId: n
					} = this.props, a = Object(P.a)(n), r = e.startsAt ? new Date(e.startsAt) : void 0, i = e.endsAt ? new Date(e.endsAt) : void 0;
					return o.a.createElement("div", {
						className: A.a.row
					}, o.a.createElement("div", {
						className: A.a.awardName
					}, e.name), o.a.createElement("div", {
						className: A.a.awardDetail
					}, o.a.createElement("img", {
						className: A.a.awardIconImage,
						src: s,
						title: e.name
					})), o.a.createElement("div", {
						className: A.a.awardDetail
					}, e.coinPrice || 0), o.a.createElement("div", {
						className: A.a.awardDetail
					}, e.awardType === E.f.Moderator ? L._("Mod only", null, {
						hk: "UxkP0"
					}) : L._("All", null, {
						hk: "2J55F0"
					})), a && [o.a.createElement(B, {
						key: "startDate",
						date: r
					}), o.a.createElement(B, {
						key: "endDate",
						date: i
					})], o.a.createElement(M.a, {
						className: A.a.rightAlign
					}, t && o.a.createElement("a", {
						href: ".",
						onClick: this.onDelete
					}, o.a.createElement(T.b, {
						className: A.a.deleteIcon
					}))))
				}
			}
			var G = q,
				z = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				K = s("./src/reddit/hooks/useTracking.ts"),
				X = s("./src/reddit/selectors/communityAwards.ts"),
				Q = s("./src/reddit/selectors/gold/awardIcon.ts"),
				J = s("./src/reddit/components/CommunityAwardList/AwardSettings/index.m.less"),
				Y = s.n(J);
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), $ = ({
				award: e,
				iconUrl: t
			}) => o.a.createElement("div", {
				className: Y.a.awardToggleLabelItem
			}, o.a.createElement("div", {
				className: Y.a.awardIconWrapper
			}, o.a.createElement("img", {
				className: Y.a.awardIcon,
				src: t
			})), o.a.createElement("div", {
				className: Y.a.awardInfoWrapper
			}, o.a.createElement("div", {
				className: Y.a.awardTitle
			}, e.name), o.a.createElement("div", {
				className: Y.a.awardDescription
			}, e.description)));
			var ee = ({
					subredditOrProfile: e,
					subredditOrProfileId: t,
					moderatorPermissions: s
				}) => {
					const n = Object(r.d)(),
						a = Object(K.a)(),
						i = Object(r.e)(e => Object(X.f)(e, {
							subredditOrProfileId: t
						})),
						l = Object(r.e)(e => Object(X.d)(e, {
							subredditOrProfileId: t
						})),
						c = Object(r.e)(e => Object(Q.b)(e, {
							awards: i,
							minSize: 64
						}));
					if (!i.length) return o.a.createElement("div", {
						className: Y.a.emptyToggleContainer
					}, o.a.createElement("div", {
						className: Y.a.emptyToggleContainerLabel
					}, l ? Z._("Pending", null, {
						hk: "1heuFt"
					}) : Z._("No Awards currently available for configuration. Please try again later.", null, {
						hk: "3BsFsT"
					})));
					const u = s && s.all;
					return o.a.createElement("div", {
						className: Y.a.awardToggleContainer
					}, o.a.createElement("div", {
						className: Y.a.optionalAwardInfo
					}, Z._("Toggle whether these awards are available in your community. If disabled, they cannot be given on any posts or comments.", null, {
						hk: "4e1OPL"
					})), o.a.createElement("div", null, i.map(s => o.a.createElement(z.o, {
						key: s.id,
						on: s.isEnabled,
						forceOn: s.isEnabled,
						className: Object(I.a)(Y.a.awardToggleItem, {
							[Y.a.awardToggleItemDisabled]: !s.isEnabled
						}),
						label: o.a.createElement($, {
							award: s,
							iconUrl: c[s.id]
						}),
						onClick: () => (s => {
							const o = s.isEnabled ? d.g : d.h,
								r = s.isEnabled ? b.h : b.i;
							a(r(s, t)), u && n(o(e, s))
						})(s),
						disabled: !u
					}))))
				},
				te = s("./src/reddit/components/CommunityAwardList/index.m.less"),
				se = s.n(te);
			const ne = Object(i.c)({
					awardIcons: (e, {
						subredditOrProfileId: t
					}) => {
						const s = Object(X.e)(e, {
							subredditOrProfileId: t
						});
						return Object(Q.b)(e, {
							awards: s,
							minSize: 32
						})
					},
					awards: X.e,
					awardsPending: X.d,
					communityAwardsDisabled: X.b,
					isAddAwardModalOpen: e => Object(S.a)(e) === u.a,
					isConfirmModalOpen: e => Object(S.a)(e) === u.b
				}),
				ae = Object(r.b)(ne, (e, {
					subredditOrProfileId: t
				}) => ({
					deleteAward: s => e(Object(d.j)(t, s)),
					toggleAddAwardModal: () => e(Object(l.i)(u.a)),
					toggleConfirmModal: () => e(Object(l.i)(u.b)),
					toggleTooltip: t => e(Object(c.h)({
						tooltipId: t
					}))
				})),
				oe = {
					awardId: null,
					selectedCoinPrice: void 0,
					selectedModOnly: void 0
				};
			class re extends o.a.Component {
				constructor(e) {
					super(e), this.openAddAwardModal = (e, t) => {
						Object(h.d)(h.a.AwardCreationFlow), this.props.sendEvent(Object(b.e)()), this.setState({
							selectedCoinPrice: e,
							selectedModOnly: t
						}, this.props.toggleAddAwardModal)
					}, this.openDeleteAwardModal = e => {
						Object(h.d)(h.a.AwardDeletionFlow), this.props.toggleConfirmModal(), this.setState({
							awardId: e
						})
					}, this.confirmDeleteAward = () => {
						const {
							awardId: e
						} = this.state, {
							awards: t
						} = this.props;
						if (this.props.toggleConfirmModal(), e) {
							const s = t.filter(t => t.id === e)[0];
							s && this.props.sendEvent(Object(b.g)(s)), this.props.deleteAward(e), Object(h.b)(h.a.AwardDeletionFlow)
						}
					}, this.renderAwardSlotRow = e => {
						const {
							awardIcons: t,
							awards: s,
							moderatorPermissions: n,
							subredditOrProfileId: a
						} = this.props, r = !(!n || !n.all);
						if (!e.filled && s.length < u.d) return o.a.createElement(W, {
							coinPrice: e.price,
							key: e.price,
							onCreate: () => this.openAddAwardModal(e.price),
							quantity: e.quantity
						});
						if (!e.filled) return null;
						const {
							award: i
						} = e, d = t[i.id];
						return o.a.createElement(G, {
							key: i.id,
							award: i,
							canDelete: r,
							onDelete: this.openDeleteAwardModal,
							iconUrl: d,
							subredditId: a
						})
					}, this.renderAwardToDelete = () => {
						const {
							awards: e
						} = this.props, {
							awardId: t
						} = this.state;
						if (!t) return null;
						const s = e.filter(e => e.id === t)[0];
						return s ? o.a.createElement("div", {
							className: se.a.awardToDelete
						}, o.a.createElement("span", null, n.fbt._("Remove:", null, {
							hk: "1Y4r4o"
						})), o.a.createElement("img", {
							src: s.icon.url,
							className: se.a.awardToDeleteIcon
						}), o.a.createElement("span", null, s.name)) : null
					}, this.renderInfo = () => o.a.createElement("div", {
						className: se.a.pageInfo
					}, o.a.createElement(O.a, {
						className: se.a.infoIcon
					}), o.a.createElement("p", null, n.fbt._("Community Awards are unique to each community, and members can give them to each other. Moderators can design and name the Awards however they want.", null, {
						hk: "1mzX5Y"
					})), o.a.createElement("p", null, n.fbt._("A portion of Coins from Community Award purchases will be deposited to the community’s Coin balance. Moderators can use Coins from that balance to reward members with Mod Awards. The Coin balance is shown only to moderators in the community’s sidebar", null, {
						hk: "2TVMDb"
					}))), this.state = oe
				}
				renderAwardsList() {
					const {
						awards: e,
						awardsPending: t,
						moderatorPermissions: s,
						subredditOrProfileId: n
					} = this.props;
					if (t) return o.a.createElement(D, null);
					const a = Object(p.a)(n),
						r = s && s.all,
						i = this.getAwardSlots().filter(e => r && !a || e.filled),
						d = e.filter(e => e.awardType === E.f.Moderator),
						l = e.length < u.d && d.length < u.e && r && !a;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(U, {
						subredditId: n
					}), a && o.a.createElement(V, {
						onCreate: () => this.openAddAwardModal()
					}), i.map(this.renderAwardSlotRow), l && o.a.createElement(H, {
						onCreate: () => this.openAddAwardModal(void 0, !0)
					}), this.renderInfo())
				}
				getAwardSlots() {
					const {
						awards: e
					} = this.props, t = Object(E.j)(e), s = e => e.filled && e.award.awardType === E.f.Moderator;
					return t.sort((e, t) => s(e) && !s(t) ? 1 : s(t) && !s(e) ? -1 : e.price !== t.price ? e.price - t.price : e.filled && !t.filled ? -1 : (t.filled && e.filled, 1))
				}
				render() {
					const {
						communityAwardsDisabled: e,
						isAddAwardModalOpen: t,
						isConfirmModalOpen: s,
						moderatorPermissions: a,
						subredditOrProfile: r,
						subredditOrProfileId: i,
						toggleAddAwardModal: d,
						toggleConfirmModal: l
					} = this.props, {
						awardId: c,
						selectedCoinPrice: u,
						selectedModOnly: p
					} = this.state, b = r.isNSFW || e;
					return o.a.createElement(o.a.Fragment, null, Object(m.a)(r) && o.a.createElement(_.a, {
						className: se.a.contentContainer
					}, o.a.createElement(_.b, null, n.fbt._("Community Awards", null, {
						hk: "lraSi"
					})), b ? this.renderBlacklistedView() : this.renderAwardsList()), o.a.createElement(_.a, {
						className: se.a.contentContainer
					}, o.a.createElement(_.b, null, n.fbt._("Enable/Disable Awards", null, {
						hk: "1IRmfG"
					})), o.a.createElement(ee, {
						subredditOrProfile: r,
						subredditOrProfileId: i,
						moderatorPermissions: a
					})), t && o.a.createElement(x, {
						defaultCoinPrice: u,
						defaultModOnly: p,
						subredditId: i,
						toggleModal: () => {
							d(), Object(h.b)(h.a.AwardCreationFlow)
						}
					}), s && c && o.a.createElement(v.a, {
						acceptText: n.fbt._("Delete", null, {
							hk: "4bgtZx"
						}),
						cancelText: n.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						headerText: n.fbt._("Delete Award", null, {
							hk: "7q2D7"
						}),
						message: n.fbt._("Deleting an Award will remove the option for members of your community to give the Award. Existing Awards will remain on the posts and comments that have received them.", null, {
							hk: "3tX5sQ"
						}),
						onAccept: this.confirmDeleteAward,
						onCancel: l,
						onClose: l,
						onOverlayClick: l,
						withOverlay: !0
					}, this.renderAwardToDelete()))
				}
				renderBlacklistedView() {
					return o.a.createElement(C.c, {
						text: n.fbt._("Community Awards have been disabled for this community.", null, {
							hk: "2g21s6"
						})
					}, o.a.createElement(y.a, {
						className: se.a.gildIcon
					}))
				}
			}
			t.a = ae(Object(k.c)(re))
		},
		"./src/reddit/components/CommunitySettings/Notifications/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-CommunitySettings-Notifications",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-CommunitySettings-Notifications").then(s.bind(null, "./src/reddit/components/CommunitySettings/Notifications/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommunitySettings/Notifications/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/CommunitySettings/components.m.less": function(e, t, s) {
			e.exports = {
				InputField: "_3V4RO9mtZyZCWAu4P0ST4A",
				inputField: "_3V4RO9mtZyZCWAu4P0ST4A",
				FormContainer: "_37sNfY6fNJVPqyQXOHlg3K",
				formContainer: "_37sNfY6fNJVPqyQXOHlg3K"
			}
		},
		"./src/reddit/components/CommunitySettings/components.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/FormFields/index.tsx"),
				o = s("./src/reddit/components/CommunitySettings/components.m.less"),
				r = s.n(o);
			const i = n.a.wrapped(a.b, "InputField", r.a),
				d = n.a.div("FormContainer", r.a)
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "f", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "k", (function() {
				return d
			})), s.d(t, "l", (function() {
				return l
			})), s.d(t, "n", (function() {
				return c
			})), s.d(t, "m", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "o", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = 500,
				a = 100,
				o = 5e3,
				r = 0,
				i = 1440,
				d = 36600,
				l = 1e9,
				c = {
					Disabled: "disabled",
					"Mods only": "modonly",
					Anyone: "anyone"
				},
				u = ["Wiki is disabled for all users except mods", "Only mods, approved wiki contributors, or those on a page's edit list may edit", "Anyone who can submit to the community may edit"],
				m = {
					Any: "any",
					"Links only": "link",
					"Text posts only": "self"
				},
				p = ["Any post type is allowed", "Only links to external sites are allowed", "Only text posts are allowed"],
				h = {
					Low: "low",
					"High (default)": "high",
					All: "all"
				},
				b = {
					"Low (default)": "low",
					High: "high",
					All: "all"
				},
				g = {
					"none (recommended)": null,
					best: "confidence",
					old: "old",
					top: "top",
					"q&a": "qa",
					"live (beta)": "live",
					controversial: "controversial",
					new: "new"
				},
				f = (e, t) => Object.keys(e).find(s => e[s] === t)
		},
		"./src/reddit/components/CommunitySettings/index.m.less": function(e, t, s) {
			e.exports = {
				communityTopicsHelpLink: "_2Tzl9XrmQzUn94gYHRUYMI",
				welcomeMessageHelpLink: "_3-XV8EhlxRlIzoFKUI6gmQ",
				fullWidthTextContainer: "_2SnK_8NMPSqmFfF-es2GGa",
				subtextContainer: "_2sWG233wmE9wNycTEyRHRN",
				sectionSubtext: "_2gZA-d4bPf-v-QStyl39CP",
				subtextLink: "_3m7YXm3a55mNltI6wwKkal",
				numCommunityTopicsSelected: "Ty_datAAaSbn2GX5-1O58",
				welcomeMessageEnabled: "_21a0DjKnRl3i1ItjJ8cSyf",
				geoForm: "_1QCMnCbDgm4T-QmBwOFkQ7",
				geoText: "lhgqy5yEx-4vqJhuaRIW_",
				geoInput: "_20j3hiEorqFwMLxftPVQG1",
				contentTag: "_26M_DkGPAeiqHaMshbczhg",
				contentTagColumn: "_2lbeaHzGFIYy6MK6YfLqrd",
				ratingAudience: "_3HR2r8RW7cFhNSKPiAT6VO",
				ratingDescription: "_3Wy4OBl1ksNXzpoeV4dvli",
				ratingReason: "_254fRg3JX4apEtqVAAXfbm",
				promptText: "RqDOw50ARYjx_TliwJR0l",
				surveyButton: "_7aZGYzh7hj5VihV4LcNzP",
				previewButton: "_2OmdANJm2jP7a_6G2-JCqg",
				warning: "_3QMvrP_WL3Jp-P0vsV4NUS"
			}
		},
		"./src/reddit/components/CommunitySettings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/isEqual.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/pages/shared.ts"),
				u = s("./src/reddit/actions/subredditSettings.ts"),
				m = s("./src/reddit/actions/subredditWelcomeMessage.ts"),
				p = s("./src/reddit/actions/tags/index.ts"),
				h = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/trackers/communitySettings.ts"),
				x = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				E = s("./src/reddit/models/Tags/index.ts"),
				v = s("./src/reddit/selectors/chatPost.ts"),
				C = s("./src/reddit/selectors/experiments/subredditWelcomeMessage.ts"),
				_ = s("./src/reddit/selectors/streamingModSettings.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/subredditSettings.ts"),
				O = s("./src/reddit/selectors/tags.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				w = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/config.ts")),
				j = s("./node_modules/fbt/lib/FbtPublic.js"),
				I = s("./src/reddit/components/CommunityTopics/index.tsx"),
				N = s("./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx"),
				T = s("./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx"),
				P = s("./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx"),
				M = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				R = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				A = s("./src/reddit/controls/Link/index.tsx"),
				L = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				F = s("./src/reddit/controls/RadioInput/index.tsx"),
				D = s("./src/reddit/models/Flair/index.ts"),
				U = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				B = s("./src/reddit/pages/SubredditCreation/index.tsx"),
				W = s("./src/reddit/components/CommunitySettings/components.ts"),
				H = s("./src/reddit/components/CommunitySettings/helpers.ts"),
				V = s("./src/lib/classNames/index.ts"),
				q = s("./src/reddit/actions/toaster.ts"),
				G = s("./src/reddit/components/GeoForm/GeoForm.tsx"),
				z = s("./src/reddit/components/ModHub/ModHubNav/NavItem.tsx"),
				K = s("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				X = s("./src/reddit/helpers/localStorage/index.ts"),
				Q = s("./src/reddit/hooks/useGqlContext.ts"),
				J = s("./src/reddit/models/Toast/index.ts"),
				Y = s("./src/reddit/components/CommunitySettings/index.m.less"),
				Z = s.n(Y);

			function $(e) {
				var t;
				const {
					initialPlace: s,
					subredditId: n,
					update: a
				} = e, d = Object(Q.a)(), l = Object(i.d)(), [c, u] = Object(o.useState)(s), [m, p] = Object(o.useState)(!1), [h, b] = Object(o.useState)(!0);
				return Object(o.useEffect)(() => {
					b(Object(X.A)("location")), Object(X.vb)("location")
				}, []), r.a.createElement(r.a.Fragment, null, r.a.createElement(M.a, null, j.fbt._("Community Location", null, {
					hk: "3aowzb"
				})), r.a.createElement(R.k, {
					label: r.a.createElement(r.a.Fragment, null, j.fbt._("Get discovered by local redditors", null, {
						hk: "1qjcaD"
					}), !h && r.a.createElement(z.a, null)),
					textContainerClassName: Object(V.a)(Z.a.fullWidthTextContainer, Z.a.geoText),
					subtext: j.fbt._("Add a location to your community and get discovered by redditors near you.", null, {
						hk: "SZnsE"
					})
				}, r.a.createElement(G.a, {
					initialValue: null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : "",
					initialPlace: c,
					onPlace: e => a(e, "place"),
					onSubmit: async function({
						place: e,
						sessionId: t
					}) {
						if ((null == e ? void 0 : e.id) === (null == c ? void 0 : c.id)) return;
						p(!0);
						const s = await Object(K.a)(d(), {
							subredditId: n,
							placeId: e.id,
							source: e.source,
							sessionId: t
						});
						if (p(!1), !s.ok) return l(Object(q.f)({
							kind: J.b.Error,
							text: j.fbt._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						u(e), l(Object(q.f)({
							kind: J.b.SuccessCommunity,
							text: j.fbt._("Successfully updated community location", null, {
								hk: "3aGk2e"
							}),
							duration: 5e3
						}))
					},
					disabled: m,
					className: Z.a.geoForm,
					inputClassName: Z.a.geoInput
				})))
			}
			const ee = {
				[U.e.Post]: {
					short: () => j.fbt._("Post only (default)", null, {
						hk: "2XJHW4"
					}),
					long: () => j.fbt._("Only approved users can post. Anyone can comment.", null, {
						hk: "3frgit"
					})
				},
				[U.e.Comment]: {
					short: () => j.fbt._("Comment only", null, {
						hk: "2OhQB5"
					}),
					long: () => j.fbt._("Only approved users can comment. Anyone can post.", null, {
						hk: "2F24kr"
					})
				},
				[U.e.PostAndComment]: {
					short: () => j.fbt._("Post & Comment", null, {
						hk: "1lWCl2"
					}),
					long: () => j.fbt._("Only approved users can post and comment.", null, {
						hk: "4GkEs6"
					})
				}
			};

			function te(e) {
				const {
					isEmployee: t,
					restrictions: s,
					settings: n,
					subredditId: a,
					subredditName: o,
					testWelcomeMessage: i,
					update: d,
					geoPlace: c,
					onShowWelcomeMessagePreview: u,
					onFocusWelcomeMessageInput: m
				} = e, {
					disableContributorRequests: p,
					over18: b,
					publicDescription: g,
					restrictCommenting: E,
					restrictPosting: v,
					subredditType: C,
					title: _,
					welcomeMessageEnabled: k,
					welcomeMessageText: y
				} = n, O = [], S = [];
				for (const r of Object.keys(ee)) S.push(ee[r].short()), O.push(ee[r].long());
				return r.a.createElement(h.a, null, r.a.createElement(W.a, null, r.a.createElement(h.b, null, j.fbt._("Community settings", null, {
					hk: "3mvH70"
				})), r.a.createElement(M.a, null, j.fbt._("Community Profile", null, {
					hk: "91aEK"
				})), r.a.createElement(R.e, {
					label: j.fbt._("Community name", null, {
						hk: "260EEx"
					}),
					maxChars: H.d,
					onChange: e => d(e.currentTarget.value, "title"),
					textContainerClassName: Z.a.fullWidthTextContainer,
					value: _ || ""
				}), r.a.createElement(R.k, {
					label: j.fbt._("Community topics", null, {
						hk: "49aoGo"
					}),
					textContainerClassName: Z.a.fullWidthTextContainer,
					subtext: r.a.createElement("span", {
						className: Z.a.subtextContainer
					}, j.fbt._("This will help Reddit recommend your community to relevant users and other discovery experiences.", null, {
						hk: "3WYTu5"
					}), " ", r.a.createElement(L.a, {
						className: Z.a.communityTopicsHelpLink,
						isSponsored: !1,
						source: null,
						href: "https://mods.reddithelp.com/hc/en-us/articles/360024518712",
						rel: "noopener noreferrer",
						target: "_blank"
					}, j.fbt._("Learn more.", null, {
						hk: "1y3kXY"
					})), " ", " ", r.a.createElement("span", {
						className: Z.a.numCommunityTopicsSelected
					}, r.a.createElement(N.a, {
						subredditId: a
					}))),
					direction: "column"
				}, r.a.createElement(T.b, {
					subredditId: a,
					onPrimarySelect: e.onPrimarySelect
				}), (!!e.selectedPrimaryTag || e.hasSecondaryTags) && r.a.createElement(I.b, {
					context: x.a.communitySettings,
					subredditId: a
				}), r.a.createElement(P.a, {
					context: x.a.communitySettings,
					subredditId: a
				})), r.a.createElement(R.g, {
					label: j.fbt._("Community description", null, {
						hk: "1XBKXj"
					}),
					onChange: e => d(e.currentTarget.value, "publicDescription", !1),
					maxChars: H.c,
					rows: 2,
					subtext: j.fbt._("This is how new members come to understand your community.", null, {
						hk: "llaA4"
					}),
					value: g || ""
				}), r.a.createElement(R.o, {
					className: k ? Z.a.welcomeMessageEnabled : void 0,
					on: k,
					onClick: () => d(!k, "welcomeMessageEnabled"),
					label: j.fbt._("Send welcome message to new members", null, {
						hk: "4euZSE"
					}),
					subtext: r.a.createElement("span", null, j.fbt._("Create a custom message that new members will see as a prompt after joining and/or as a direct message to their inbox. Keep your message under 500 characters if you’d like it to display as a prompt right after joining. This field supports markdown.", null, {
						hk: "Qne1T"
					}), " ", r.a.createElement(L.a, {
						className: Z.a.welcomeMessageHelpLink,
						isSponsored: !1,
						source: null,
						href: "https://mods.reddithelp.com/hc/en-us/articles/360002551551-Welcoming-new-members",
						rel: "noopener noreferrer",
						target: "_blank"
					}, j.fbt._("Learn more.", null, {
						hk: "NkFhF"
					})))
				}), k && r.a.createElement(r.a.Fragment, null, r.a.createElement(R.g, {
					actionLink: r.a.createElement(r.a.Fragment, null, y && y.length <= 500 && r.a.createElement(A.a, {
						className: Z.a.previewButton,
						onClick: u
					}, j.fbt._("Save and show me a preview", null, {
						hk: "1HXlZ"
					})), r.a.createElement(A.a, {
						className: Z.a.previewButton,
						onClick: () => i(o, y)
					}, j.fbt._("Send me a test message", null, {
						hk: "4iE1go"
					}))),
					hideCountdown: (y || "").length > 500,
					label: null,
					onChange: e => {
						d(e.currentTarget.value, "welcomeMessageText")
					},
					onFocus: m,
					placeholder: j.fbt._("Welcome to our community! We’re here to discuss our passion for all things related to grated cheese. (Heads up—we’re a text-only community, so sorry no image posts.) Get started by introducing yourself in our post for newbies, then check out our rules to learn more and dive in.", null, {
						hk: "AnOYs"
					}),
					maxChars: H.e,
					rows: 5,
					value: y || "",
					warning: (y || "").length > 500 ? r.a.createElement("div", {
						className: Z.a.warning
					}, j.fbt._({
						"*": "{characters} Characters",
						_1: "1 Character"
					}, [j.fbt._plural((y || "").length, "characters")], {
						hk: "21H5Ye"
					}), " ", j.fbt._("- Messages over 500 characters will only be sent as a direct message", null, {
						hk: "3QcgDF"
					})) : void 0
				})), r.a.createElement($, {
					subredditId: a,
					update: d,
					initialPlace: c
				}), r.a.createElement(M.a, null, j.fbt._("community type", null, {
					hk: "3T2OkK"
				})), r.a.createElement(R.k, {
					label: j.fbt._("Type of Community", null, {
						hk: "2PReGw"
					}),
					direction: "column"
				}, r.a.createElement(F.a, {
					value: C,
					name: "type",
					onChange: e => d(e, "subredditType")
				}, Object(B.radioOptions)(t, s))), r.a.createElement(R.o, {
					on: b,
					onClick: () => d(!b, "over18"),
					label: r.a.createElement("span", null, j.fbt._("18+ year old community", null, {
						hk: "3VzYZp"
					}), r.a.createElement(R.l, {
						flair: D.f.Nsfw
					})),
					subtext: j.fbt._("When your community is marked as an 18+ community, users must be flagged as 18+ in their user settings", null, {
						hk: "2h28m0"
					})
				}), "restricted" === C && r.a.createElement(r.a.Fragment, null, r.a.createElement(M.a, null, j.fbt._("Restricted Community Settings", null, {
					hk: "1HiDiC"
				})), r.a.createElement(R.d, {
					label: j.fbt._("Approved users have the ability to", null, {
						hk: "2pduhW"
					}),
					items: S,
					selected: (() => {
						let e = U.e.Post;
						return E && v ? e = U.e.PostAndComment : E && (e = U.e.Comment), ee[e].short()
					})(),
					onClick: e => {
						e === ee[U.e.PostAndComment].short() ? (d(!0, U.f.Comment), d(!0, U.f.Post)) : e === ee[U.e.Comment].short() ? (d(!1, U.f.Post), d(!0, U.f.Comment)) : e === ee[U.e.Post].short() && (d(!0, U.f.Post), d(!1, U.f.Comment))
					},
					id: "restrictionOptions",
					descriptions: O
				}), r.a.createElement(R.o, {
					on: !p,
					onClick: () => d(!p, "disableContributorRequests"),
					label: j.fbt._("Accepting new requests to post", null, {
						hk: "bTpYB"
					})
				})), "private" === C && r.a.createElement(r.a.Fragment, null, r.a.createElement(M.a, null, j.fbt._("Private Community Settings", null, {
					hk: "2JjNXE"
				})), r.a.createElement(R.o, {
					on: !p,
					onClick: () => d(!p, "disableContributorRequests"),
					label: j.fbt._("Accepting requests to join", null, {
						hk: "1l1acS"
					})
				})), r.a.createElement(M.a, null, j.fbt._("Advanced Settings", null, {
					hk: "1e5Esr"
				})), r.a.createElement(R.f, {
					label: j.fbt._("Settings for old site", null, {
						hk: "4wmYj3"
					}),
					subtext: j.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "gYPuP"
					}),
					link: `${w.a.oldRedditUrl}/r/${o}/about/edit`,
					onClick: () => e.sendEvent(Object(f.b)(l.Xb.Posts)),
					openInNewTab: !0,
					last: !0
				})))
			}
			var se = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ne = s("./src/reddit/components/ModHub/StyledComponents/index.m.less"),
				ae = s.n(ne),
				oe = s("./src/reddit/components/ContentSurvey/RatingCard.tsx"),
				re = s("./src/reddit/components/ContentSurvey/SurveyModal.tsx"),
				ie = s("./src/reddit/helpers/trackers/contentTag.ts"),
				de = s("./src/reddit/hooks/useTracking.ts");
			const {
				fbt: le
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function ce(e) {
				const {
					subreddit: t
				} = e, s = Object(i.e)(e => e.subreddits.survey[t.id]), n = Object(de.a)();
				Object(o.useEffect)(() => n(Object(ie.k)()), [n]);
				const [a, d] = Object(o.useState)(!1);

				function l() {
					n(Object(ie.o)()), d(!0)
				}
				const c = !(null == s ? void 0 : s.response) && (null == s ? void 0 : s.isEligible),
					u = (null == s ? void 0 : s.response) && (null == s ? void 0 : s.isEligible);
				return r.a.createElement("div", {
					className: Object(V.a)(ae.a.ContentContainer, Z.a.contentTag)
				}, r.a.createElement("h2", null, le._("Content Tag", null, {
					hk: "1AhgrD"
				})), r.a.createElement("p", null, le._("Your content tag is based on a moderator survey about community posts and discussions. {=Learn More}", [le._param("=Learn More", r.a.createElement("a", {
					href: "https://www.reddithelp.com/hc/en-us/articles/360048185132",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => n(Object(ie.d)())
				}, le._("Learn More", null, {
					hk: "2gJ4PL"
				})))], {
					hk: "2xoqeD"
				})), r.a.createElement("div", {
					className: Z.a.contentTagColumn
				}, r.a.createElement(oe.a, {
					subredditId: t.id,
					ratingResponse: null == s ? void 0 : s.response
				}, (null == s ? void 0 : s.response) ? r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: Z.a.ratingAudience
				}, le._("Tagged as {ratingName} due to:", [le._param("ratingName", s.response.rating.name)], {
					hk: "3VVnt5"
				})), r.a.createElement("ul", null, s.response.ratingReasons.map(e => r.a.createElement("li", {
					key: e.id,
					className: Z.a.ratingReason
				}, e.contentRatingReasonText)))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: Z.a.ratingAudience
				}, le._("Set up your tag", null, {
					hk: "2Fb5bg"
				})), r.a.createElement("p", {
					className: Z.a.ratingDescription
				}, le._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "VvmPr"
				})))), c && r.a.createElement(g.q, {
					redditStyle: !0,
					className: Z.a.surveyButton,
					onClick: l
				}, le._("Start Survey", null, {
					hk: "myDPK"
				})), u && r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: Z.a.promptText
				}, le._("Does this content tag look wrong to you?", null, {
					hk: "72VuM"
				})), r.a.createElement(g.q, {
					priority: g.b.Secondary,
					redditStyle: !0,
					className: Z.a.surveyButton,
					onClick: l
				}, le._("Take the Survey", null, {
					hk: "W30wE"
				})), r.a.createElement(se.a, {
					to: "/r/modsupport/submit"
				}, r.a.createElement(g.q, {
					priority: g.b.Tertiary,
					redditStyle: !0,
					className: Z.a.surveyButton,
					onClick: () => n(Object(ie.f)())
				}, "Message r/modsupport")))), a && s && r.a.createElement(re.a, {
					withOverlay: !0,
					subredditId: t.id,
					survey: s,
					onClose: () => d(!1)
				}))
			}
			var ue = s("./src/reddit/components/CommunitySettings/Notifications/Loader.ts");
			var me = e => {
				const {
					settings: t,
					subredditName: s,
					update: n,
					isChatPostsCreationEnabled: a
				} = e, {
					allowChatPostCreation: o,
					allowGalleries: i,
					allowImages: d,
					allowPolls: c,
					allowPostCrossposts: u,
					collapseDeletedComments: m,
					commentScoreHideMins: p,
					contentOptions: b,
					spamComments: g,
					spamLinks: x,
					spamSelfposts: E,
					spoilersEnabled: v,
					suggestedCommentSort: C
				} = t;
				return r.a.createElement(h.a, null, r.a.createElement(W.a, null, r.a.createElement(h.b, null, j.fbt._("Post and Comment settings", null, {
					hk: "14OI7p"
				})), r.a.createElement(M.a, null, j.fbt._("Posts", null, {
					hk: "2i2G4r"
				})), r.a.createElement(R.d, {
					label: j.fbt._("Post type options", null, {
						hk: "M9AdT"
					}),
					items: Object.keys(H.h),
					selected: Object(H.o)(H.h, b),
					onClick: e => n(H.h[e], "contentOptions"),
					id: "contentOptions",
					descriptions: H.g
				}), r.a.createElement(R.o, {
					on: u,
					onClick: () => n(!u, "allowPostCrossposts"),
					label: j.fbt._("Allow crossposting of posts.", null, {
						hk: "19EiBT"
					})
				}), a && r.a.createElement(R.o, {
					on: o,
					onClick: () => n(!o, "allowChatPostCreation"),
					label: j.fbt._("Allow chat posts creation by users.", null, {
						hk: "4zwoUf"
					})
				}), r.a.createElement(R.o, {
					on: v,
					onClick: () => n(!v, "spoilersEnabled"),
					label: r.a.createElement("span", null, j.fbt._("Enable spoiler tag", null, {
						hk: "2CtBpB"
					}), r.a.createElement(R.l, {
						flair: D.f.Spoiler
					})),
					subtext: j.fbt._("Media on posts with the spoiler tag are blurred", null, {
						hk: "4rVOs6"
					})
				}), r.a.createElement(R.o, {
					on: d,
					onClick: () => {
						n(!d, "allowImages"), n(!d, "allowGalleries")
					},
					label: j.fbt._("Allow image uploads and links to image hosting sites", null, {
						hk: "20ETVO"
					})
				}), d && r.a.createElement(R.o, {
					on: i,
					onClick: () => n(!i, "allowGalleries"),
					label: j.fbt._("Allow multiple images per post", null, {
						hk: "Pcjq5"
					})
				}), r.a.createElement(R.o, {
					on: c,
					onClick: () => n(!c, "allowPolls"),
					label: j.fbt._("Allow polls", null, {
						hk: "15LXRO"
					})
				}), r.a.createElement(R.k, {
					label: j.fbt._("Spam filter strength", null, {
						hk: "4C4qar"
					}),
					subtext: j.fbt._("'HIGH' is the standard filter, 'LOW' disables most filtering, 'ALL' will filter every post initially and they will need to be approved manually to be visible", null, {
						hk: "mdxeP"
					})
				}), r.a.createElement(R.d, {
					label: j.fbt._("Posts", null, {
						hk: "1SdpTj"
					}),
					items: Object.keys(H.j),
					id: "spamSelfposts",
					selected: Object(H.o)(H.j, E),
					onClick: e => n(H.j[e], "spamSelfposts"),
					indent: !0
				}), r.a.createElement(R.d, {
					label: j.fbt._("Links", null, {
						hk: "Ia7TU"
					}),
					items: Object.keys(H.j),
					id: "spamLinks",
					selected: Object(H.o)(H.j, x),
					onClick: e => n(H.j[e], "spamLinks"),
					indent: !0
				}), r.a.createElement(R.d, {
					label: j.fbt._("Comments", null, {
						hk: "1X5Fv2"
					}),
					items: Object.keys(H.b),
					selected: Object(H.o)(H.b, g),
					onClick: e => n(H.b[e], "spamComments"),
					indent: !0,
					id: "spamComments"
				}), r.a.createElement(M.a, null, j.fbt._("Comments", null, {
					hk: "4sAqsA"
				})), r.a.createElement(R.d, {
					label: j.fbt._("Suggested sort", null, {
						hk: "4Af3Lr"
					}),
					subtext: j.fbt._("All comment feeds in community will default to this sort setting", null, {
						hk: "4grj1W"
					}),
					items: Object.keys(H.i),
					selected: Object(H.o)(H.i, C),
					onClick: e => n(H.i[e], "suggestedCommentSort"),
					id: "suggestedCommentSort"
				}), r.a.createElement(R.o, {
					on: m,
					onClick: () => n(!m, "collapseDeletedComments"),
					label: j.fbt._("Collapse deleted and removed comments", null, {
						hk: "Iw8kU"
					})
				}), r.a.createElement(R.k, {
					label: j.fbt._("Minutes to hide comment scores", null, {
						hk: "1DJhj0"
					}),
					direction: "column"
				}, r.a.createElement(W.b, {
					onChange: e => n(e.currentTarget.value, "commentScoreHideMins"),
					isInvalid: !(p >= H.f && p <= H.a),
					min: H.f,
					max: H.a,
					type: "number",
					value: p
				})), r.a.createElement(M.a, null, j.fbt._("Advanced Settings", null, {
					hk: "53xlS"
				})), r.a.createElement(R.f, {
					label: j.fbt._("Settings for old site", null, {
						hk: "2jzUi8"
					}),
					subtext: j.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "4DHBV2"
					}),
					link: `${w.a.oldRedditUrl}/r/${s}/about/edit`,
					onClick: () => e.sendEvent(Object(f.b)(l.Xb.Posts)),
					openInNewTab: !0,
					last: !0
				})))
			};

			function pe(e) {
				const {
					isChatPostsCreationEnabled: t,
					isBroadcastingEnabled: s,
					settings: n,
					subredditName: a,
					update: o
				} = e, {
					allowDiscovery: i,
					contentVisible: d,
					crowdControlMode: c,
					crowdControlLevel: u,
					crowdControlChatLevel: m,
					excludeBannedModqueue: p,
					toxicityThresholdChatLevel: b
				} = n, g = {
					0: {
						text: "Off",
						color: "#787C7E",
						subText: "Use Crowd Control to automatically collapse comments from users you’re not sure about."
					},
					1: {
						text: "Lenient",
						color: "#46D160",
						subText: "Comments from users who have negative karma in your community are automatically collapsed."
					},
					2: {
						text: "Moderate",
						color: "#FFB000",
						subText: "Comments from new users and users with negative karma in your community are automatically collapsed."
					},
					3: {
						text: "Strict",
						color: "#EA0027",
						subText: "Comments from users who haven’t joined your community, new users, and users with negative karma in your community are automatically collapsed."
					}
				};
				return r.a.createElement(h.a, null, r.a.createElement(W.a, null, r.a.createElement(h.b, null, j.fbt._("Safety & privacy settings", null, {
					hk: "34ghQV"
				})), r.a.createElement(M.a, null, j.fbt._("Safety", null, {
					hk: "2QSter"
				})), r.a.createElement(R.o, {
					on: p,
					onClick: () => o(!p, "excludeBannedModqueue"),
					label: j.fbt._("Exclude posts by site-wide banned users", null, {
						hk: "Kmfy0"
					}),
					subtext: j.fbt._("Posts are excluded from modqueue/unmoderated", null, {
						hk: "2P2pfc"
					})
				}), r.a.createElement(R.o, {
					on: c,
					onClick: () => o(!c, "crowdControlMode"),
					label: j.fbt._("Turn on crowd control mode", null, {
						hk: "2qY8D5"
					}),
					subtext: j.fbt._("When crowd control is enabled, comments from users who aren't yet fully trusted in your community (including new users) will display as collapsed by default", null, {
						hk: "13Z3pC"
					})
				}), r.a.createElement(R.i, {
					ticks: g,
					min: 0,
					max: Object.keys(g).length - 1,
					step: 1,
					value: u,
					onChange: e => o(e.target.value, "crowdControlLevel"),
					label: j.fbt._("Adjust Crowd Control", null, {
						hk: "4oJUSP"
					}),
					subtext: j.fbt._("{subText}", [j.fbt._param("subText", g[u].subText)], {
						hk: "3ZFhAV"
					})
				}), (t || s) && r.a.createElement(r.a.Fragment, null, r.a.createElement(R.i, {
					ticks: g,
					min: 0,
					max: Object.keys(g).length - 1,
					step: 1,
					value: m,
					onChange: e => o(e.target.value, "crowdControlChatLevel"),
					label: j.fbt._("Adjust Crowd Control for Chat Posts", null, {
						hk: "vTy7k"
					}),
					subtext: j.fbt._("{subText}", [j.fbt._param("subText", g[m].subText)], {
						hk: "12hf9Y"
					})
				}), r.a.createElement(R.o, {
					on: !!Number(b),
					onClick: () => {
						o(Number(b) ? "0" : "1", "toxicityThresholdChatLevel")
					},
					label: j.fbt._("Collapse Toxic Messages in Chat Post", null, {
						hk: "1Pk3G5"
					}),
					subtext: j.fbt._("Comments that our model scores as toxic will be automatically collapsed.", null, {
						hk: "Rohtu"
					})
				})), r.a.createElement(M.a, null, j.fbt._("Discover", null, {
					hk: "1I53SY"
				})), r.a.createElement(R.m, {
					className: Z.a.sectionSubtext
				}, j.fbt._("Show your community to the general Reddit population or just to people who have similar interests, by adjusting how people can find it. Not sure what’s best for you? {=Learn More.}", [j.fbt._param("=Learn More.", r.a.createElement("a", {
					className: Z.a.subtextLink,
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://mods.reddithelp.com/hc/en-us/sections/360000685771-General-Common-Questions"
				}, j.fbt._("Learn More.", null, {
					hk: "3oTITT"
				})))], {
					hk: "4nomNH"
				})), r.a.createElement(R.o, {
					on: d,
					onClick: () => o(!d, "contentVisible"),
					label: j.fbt._("Show up in high-traffic feeds", null, {
						hk: "3l7KBc"
					}),
					subtext: j.fbt._("Allow your community to be in r/all, r/popular, and trending lists where it can be seen by the general Reddit population.", null, {
						hk: "iH0lY"
					})
				}), r.a.createElement(R.o, {
					on: i,
					onClick: () => o(!i, "allowDiscovery"),
					label: j.fbt._("Get recommended to individual redditors", null, {
						hk: "4wmaiH"
					}),
					subtext: j.fbt._("Let Reddit recommend your community to people who have similar interests.", null, {
						hk: "487MMM"
					})
				}), r.a.createElement(M.a, null, j.fbt._("Advanced Settings", null, {
					hk: "3TL9Or"
				})), r.a.createElement(R.f, {
					link: `${w.a.oldRedditUrl}/r/${a}/about/edit`,
					onClick: () => e.sendEvent(Object(f.b)(l.Xb.Safety)),
					openInNewTab: !0,
					last: !0,
					label: j.fbt._("Settings for old site", null, {
						hk: "1WHvCJ"
					}),
					subtext: j.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "2wPmwa"
					})
				})))
			}

			function he(e) {
				const {
					settings: t,
					subredditName: s,
					update: n
				} = e, {
					wikiEditAge: a,
					wikiEditKarma: o,
					wikimode: i
				} = t;
				return r.a.createElement(h.a, null, r.a.createElement(W.a, null, r.a.createElement(h.b, null, j.fbt._("Wiki settings", null, {
					hk: "1gmluS"
				})), r.a.createElement(M.a, null, j.fbt._("Community wiki pages", null, {
					hk: "1LwxaS"
				})), r.a.createElement(R.d, {
					label: j.fbt._("Wikis can be edited by", null, {
						hk: "3brAqG"
					}),
					items: Object.keys(H.n),
					selected: Object(H.o)(H.n, i),
					onClick: e => n(H.n[e], "wikimode"),
					id: "wikimode",
					descriptions: H.m
				}), r.a.createElement(R.k, {
					label: j.fbt._("Karma required to edit and create wiki pages", null, {
						hk: "3OgR7v"
					}),
					direction: "column"
				}, r.a.createElement(W.b, {
					onChange: e => n(e.currentTarget.value, "wikiEditKarma"),
					isInvalid: !(o >= H.f && o <= H.l),
					min: H.f,
					max: H.l,
					type: "number",
					value: o
				})), r.a.createElement(R.k, {
					label: j.fbt._("Age of Reddit account required to edit and create wiki pages", null, {
						hk: "3UE6cD"
					}),
					direction: "column"
				}, r.a.createElement(W.b, {
					onChange: e => n(e.currentTarget.value, "wikiEditAge"),
					isInvalid: !(a >= H.f && a <= H.k),
					min: H.f,
					max: H.k,
					type: "number",
					value: a
				})), r.a.createElement(M.a, null, j.fbt._("Advanced Settings", null, {
					hk: "4drMhK"
				})), r.a.createElement(R.f, {
					label: j.fbt._("Settings for old site", null, {
						hk: "2YU3sQ"
					}),
					subtext: j.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "1ihkVe"
					}),
					link: `${w.a.oldRedditUrl}/r/${s}/about/edit`,
					onClick: () => e.sendEvent(Object(f.b)(l.Xb.Wikis)),
					openInNewTab: !0,
					last: !0
				})))
			}
			const {
				fbt: be
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ge = {
				isModeratedSrContentFoundationPnEnabled: !1,
				isModeratedSrEngagementPnEnabled: !1,
				isModeratedSrMilestonePnEnabled: !1
			}, fe = Object(d.c)({
				allowChatPostCreation: (e, t) => Object(v.b)(e, t.subredditId),
				isBroadcastingEnabled: (e, t) => Object(_.c)(e, t.subredditId),
				isChatPostsCreationEnabled: (e, t) => Object(v.c)(e, t.subredditId),
				isEmployee: S.G,
				notificationSettings: y.b,
				restrictions: k.p,
				settings: (e, t) => Object(k.V)(e, t.subredditId),
				subreddit: k.T,
				selectedPrimaryTag: O.A,
				hasSecondaryTags: O.p,
				geoPlace: (e, t) => e.tags.models.geoPlaces[t.subredditId],
				isWelcomeMessageExperimentEnabledSelector: C.a
			}), xe = Object(i.b)(fe, (e, {
				subredditId: t
			}) => ({
				onViewPageEvent: () => e(Object(c.a)()),
				testWelcomeMessage: (t, s) => e(Object(u.i)(t, s)),
				save: (t, s, n) => e(Object(u.j)(n, t, s)),
				saveCommunityTopics: t => e(Object(p.i)(t, x.a.communitySettings)),
				onPrimarySelect: s => e(Object(p.j)({
					primaryTagId: s,
					subredditId: t
				})),
				savePrimaryTopic: s => {
					s && e(Object(p.s)(t, {
						tagId: s.id,
						state: E.d.TAGGED
					}, !1))
				},
				openPreviewWelcomeMessageModal: () => e(Object(m.c)(t)),
				updateSubredditWelcomeMessage: (t, s, n) => e(Object(m.e)(t, s, n))
			}));
			class Ee extends r.a.Component {
				constructor(e) {
					super(e), this.saveSettings = () => {
						const {
							welcomeMessageEnabled: e,
							welcomeMessageText: t,
							...s
						} = this.state.changed;
						void 0 !== e || t ? (this.fireSaveWelcomeMessageEvents(), this.props.save(s, this.state.changedNotificationsSettings, this.props.subredditId), this.props.updateSubredditWelcomeMessage(this.props.subredditId, e, t)) : this.props.save(this.state.changed, this.state.changedNotificationsSettings, this.props.subredditId), this.props.saveCommunityTopics(this.props.subredditId), this.props.savePrimaryTopic(this.props.selectedPrimaryTag);
						for (const n in this.state.changed) {
							!("welcomeMessageEnabled" === n || "welcomeMessageText" === n) && this.props.sendEvent(Object(f.c)(n, this.state.changed[n], this.props.settings[n]))
						}
						this.setState({
							settings: this.state.settings,
							changed: {},
							changedNotificationsSettings: {}
						})
					}, this.update = (e, t, s = !0) => {
						s && !("welcomeMessageText" === t) && this.props.sendEvent(Object(f.e)(t, e, this.state.settings[t])), this.setState(s => ({
							changed: {
								...s.changed,
								[t]: e
							},
							settings: {
								...s.settings,
								[t]: e
							}
						}))
					}, this.updateNotificationSettings = (e, t) => {
						this.setState(s => ({
							changedNotificationsSettings: {
								...s.changedNotificationsSettings,
								[t]: e
							},
							notificationSettings: {
								...s.notificationSettings,
								[t]: e
							}
						}))
					}, this.fireSaveWelcomeMessageEvents = () => {
						const {
							welcomeMessageEnabled: e,
							welcomeMessageText: t
						} = this.state.changed;
						void 0 !== e && this.props.sendEvent(Object(f.f)("save", "welcome_message", e, this.props.settings.welcomeMessageEnabled)), t && this.props.sendEvent(Object(f.f)("save", "welcome_message", t, this.props.settings.welcomeMessageText))
					}, this.onShowWelcomeMessagePreview = async () => {
						const {
							welcomeMessageEnabled: e,
							welcomeMessageText: t
						} = this.state.changed;
						(void 0 !== e || t) && (await this.props.updateSubredditWelcomeMessage(this.props.subredditId, e, t), this.fireSaveWelcomeMessageEvents()), this.props.openPreviewWelcomeMessageModal(), this.props.sendEvent(Object(f.d)())
					}, this.onFocusWelcomeMessageInput = () => this.props.sendEvent(Object(f.f)("click", "welcome_message_edit")), this.renderSubpage = () => {
						const e = {
							...this.props,
							notificationSettings: this.state.notificationSettings,
							settings: this.state.settings,
							update: this.update,
							updateNotificationSettings: this.updateNotificationSettings,
							onShowWelcomeMessagePreview: this.onShowWelcomeMessagePreview,
							onFocusWelcomeMessageInput: this.onFocusWelcomeMessageInput
						};
						if (!this.state.settings) return null;
						switch (this.props.subpageName) {
							case l.Xb.Safety:
								return r.a.createElement(pe, e);
							case l.Xb.Notifications:
								return r.a.createElement(ue.a, e);
							case l.Xb.Posts:
								return r.a.createElement(me, e);
							case l.Xb.Wikis:
								return r.a.createElement(he, e);
							case l.Xb.ContentTag:
								return r.a.createElement(ce, {
									subreddit: e.subreddit
								});
							default:
								return r.a.createElement(te, e)
						}
					}, this.state = {
						settings: e.settings,
						changed: {},
						changedNotificationsSettings: {},
						notificationSettings: e.notificationSettings || ge
					}
				}
				componentDidMount() {
					this.props.onViewPageEvent()
				}
				componentDidUpdate(e) {
					!this.props.settings || a()(e.settings, this.props.settings) || a()(this.state.settings, this.props.settings) || this.setState({
						settings: this.props.settings
					})
				}
				render() {
					return r.a.createElement(r.a.Fragment, null, this.props.subpageName !== l.Xb.ContentTag && r.a.createElement(h.c, null, r.a.createElement(g.i, {
						onClick: this.saveSettings,
						"data-redditstyle": !0
					}, be._("Save changes", null, {
						hk: "8mSp0"
					}))), this.renderSubpage())
				}
			}
			t.a = xe(Object(b.c)(Ee))
		},
		"./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/models/Tags/index.ts"),
				d = s("./src/reddit/selectors/tags.ts");
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), c = Object(r.c)({
				selectedOptions: (e, {
					subredditId: t
				}) => Object(d.v)(e, {
					subredditId: t
				})
			});
			t.a = Object(o.b)(c)(e => a.a.createElement(a.a.Fragment, null, e.selectedOptions.length, "/", i.a))
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less": function(e, t, s) {
			e.exports = {
				menuItemsWrapper: "_1OISxDncG3tn4CibwqeC4e",
				tooltip: "UNHdPZIwwyCehEV-NfEY7"
			}
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return T
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/tags/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/ContentTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				h = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				b = s("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				g = s.n(b);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class x extends o.a.Component {
				componentDidMount() {
					this.props.sendEvent(h.e), this.props.onViewTooltip()
				}
				render() {
					const {
						translatedTitle: e,
						translatedDesc: t,
						translatedButtonText: s
					} = this.props;
					return o.a.createElement("div", {
						className: g.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, o.a.createElement("span", {
						className: g.a.topRow
					}, o.a.createElement("h3", {
						className: g.a.title
					}, e)), o.a.createElement("p", {
						className: g.a.tooltipBody
					}, t), o.a.createElement(m.i, {
						className: g.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, s || f._("Got it", null, {
						hk: "4CoCjQ"
					})))
				}
			}
			var E = Object(r.b)(void 0, e => ({
				onDismissTooltip: () => {
					e(Object(l.i)()), Object(p.ob)()
				},
				onViewTooltip: () => {
					Object(p.Gb)()
				}
			}))(Object(u.c)(x));
			const v = "editable-primary-topic-idcard";
			var C = s("./src/reddit/controls/DropdownSelector/index.tsx"),
				_ = s("./src/reddit/models/Tags/index.ts"),
				k = s("./src/reddit/selectors/tags.ts"),
				y = s("./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less"),
				O = s.n(y);
			const S = ({
					hasPrimaryTag: e,
					hasSecondaryTags: t
				}) => {
					if (e) return null;
					let s = n.fbt._("Add Community Topics", null, {
							hk: "2wd4kg"
						}),
						a = n.fbt._("Tell us what topics are relevant to your community so we can surface it to the right users", null, {
							hk: "24NCiQ"
						});
					return t && (s = n.fbt._("Add a Primary Topic", null, {
						hk: "41x5Gv"
					}), a = n.fbt._("Oops we don’t have a primary topic yet. Add one so we can surface your community to the right users", null, {
						hk: "XayPA"
					})), o.a.createElement(c.a, {
						className: O.a.tooltip,
						tooltipId: v,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, o.a.createElement(E, {
						translatedTitle: s,
						translatedDesc: a
					}))
				},
				w = {
					availablePrimaryTags: k.t
				},
				j = Object(i.c)({
					...w,
					selectedPrimaryTag: (e, {
						subredditId: t
					}) => t && Object(k.A)(e, {
						subredditId: t
					}) || null,
					hasSecondaryTags: (e, {
						subredditId: t
					}) => Object.keys(Object(k.s)(e, {
						itemId: t
					})).length > 0,
					isSaving: k.G
				}),
				I = Object(i.c)({
					...w,
					selectedPrimaryTag: k.y,
					hasSecondaryTags: () => !1,
					isSaving: e => Object(k.G)(e)
				});
			class N extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					const e = this.props.onShowTooltip;
					this.setState({
						tooltipDismissed: Object(p.s)()
					}, () => {
						this.isTooltipEnabled() && e && e()
					})
				}
				isTooltipEnabled() {
					const {
						shouldShowTooltip: e = !1,
						selectedPrimaryTag: t
					} = this.props;
					return !this.state.tooltipDismissed && !t && e
				}
				render() {
					const {
						availablePrimaryTags: e,
						className: t,
						hasSecondaryTags: s,
						isSaving: a,
						onPrimaryTopicSelected: r,
						selectedPrimaryTag: i
					} = this.props, d = i && i.text;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(C.b, {
						id: this.isTooltipEnabled() ? v : void 0,
						className: t,
						isTopicsStyle: !0,
						displayText: d || n.fbt._("Add a Primary Topic", null, {
							hk: "1HgVte"
						}),
						options: e.map(e => ({
							displayText: e.text,
							value: e.id,
							isSelected: !!i && i.id === e.id
						})),
						onSelect: r,
						menuItemsClassName: O.a.menuItemsWrapper,
						showSelectedCheckmark: !0,
						isSaving: a
					}), this.isTooltipEnabled() && o.a.createElement(S, {
						hasPrimaryTag: !!i,
						hasSecondaryTags: s
					}))
				}
			}
			const T = Object(r.b)(I, e => ({
					onPrimaryTopicSelected: t => {
						e(Object(d.d)({
							primaryTagId: t.value
						}))
					}
				}))(N),
				P = Object(r.b)(j, (e, {
					subredditId: t,
					onPrimarySelect: s
				}) => ({
					onPrimaryTopicSelected: n => {
						n.isSelected || !s ? n.isSelected || e(Object(d.s)(t, {
							tagId: n.value,
							state: _.d.TAGGED
						})) : s(n.value)
					},
					onShowTooltip: () => {
						e(Object(l.f)({
							tooltipId: v
						}))
					}
				}));
			t.b = P(N)
		},
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less": function(e, t, s) {
			e.exports = {
				suggestedTopicsContainer: "_3qCTJNZ-iSCZa0wyVfs6my",
				relatedText: "_389N9jvZJu60U3E7vIF00n",
				closeIcon: "M40GQ3RaivlkCl8WQ-pXo",
				plusIcon: "_2OYvdU1reofcbKMJ0wvC_x",
				suggestedTopic: "_1RmiLhJpOUx_hgduPf3F5O",
				closeIconContainer: "sHLJV3zATRod0k1f_m71I",
				suggestedTopicText: "_1-rmQV4Wee08Dt-h2GyW-o"
			}
		},
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/tags/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/icons/svgs/Close/index.tsx"),
				m = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				p = s("./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less"),
				h = s.n(p);
			var b = e => o.a.createElement("span", {
					className: h.a.suggestedTopic,
					onClick: () => e.onSuggestedTopicSelected(e.suggestedTopic)
				}, o.a.createElement(m.a, {
					className: h.a.plusIcon
				}), o.a.createElement("span", {
					className: h.a.suggestedTopicText
				}, e.suggestedTopic.displayText), o.a.createElement("span", {
					className: h.a.closeIconContainer,
					onClick: t => {
						t.preventDefault(), t.stopPropagation(), e.onSuggestedTopicDismissed(e.suggestedTopic)
					}
				}, o.a.createElement(u.a, {
					className: h.a.closeIcon
				}))),
				g = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				f = s("./src/reddit/models/Tags/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/selectors/tags.ts");
			const v = Object(i.c)({
					suggestedOptions: (e, {
						subredditId: t
					}) => {
						const s = Object(E.B)(e, {
								itemId: t
							}),
							n = Object(E.v)(e, {
								subredditId: t
							}),
							a = Object(E.z)(e, {
								subredditId: t
							});
						return s.filter(e => !!e.id && a !== e.id && !n.find(t => !!t.id && t.id === e.id))
					}
				}),
				C = Object(r.b)(v, (e, {
					subredditId: t,
					onOptionSelected: s,
					context: a
				}) => ({
					onSuggestedOptionDismissed: s => {
						e(Object(l.r)(t, [], [{
							subredditId: t,
							tagId: s.id,
							isRelevant: !1
						}], a, !0))
					},
					onSuggestedOptionSelected: o => {
						e((e, r) => {
							const i = r();
							Object(E.v)(i, {
								subredditId: t
							}).length >= f.a ? e(Object(c.f)({
								...Object(c.e)(n.fbt._("You can only add up to {max number of topics} community topics", [n.fbt._param("max number of topics", f.a.toString())], {
									hk: "1OySAh"
								}), x.b.Error),
								duration: c.a
							})) : (e(Object(l.n)({
								subredditId: t,
								option: o
							})), Object(g.c)(r(), t, o, {
								context: a
							}), s && s(o))
						})
					}
				}));
			t.a = C(e => e.suggestedOptions.length ? o.a.createElement("div", {
				className: Object(d.a)(h.a.suggestedTopicsContainer, e.className)
			}, e.children || o.a.createElement("span", {
				className: h.a.relatedText
			}, n.fbt._("Related:", null, {
				hk: "1qt7CO"
			})), e.suggestedOptions.map(t => o.a.createElement(b, {
				key: t.id,
				suggestedTopic: t,
				onSuggestedTopicSelected: e.onSuggestedOptionSelected,
				onSuggestedTopicDismissed: e.onSuggestedOptionDismissed
			}))) : null)
		},
		"./src/reddit/components/CommunityTopics/index.m.less": function(e, t, s) {
			e.exports = {
				communityTopicsContainer: "wsNyCIZw7veQPURlfXwXb"
			}
		},
		"./src/reddit/components/CommunityTopics/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/tags/index.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/components/MultiOptionSelect/index.tsx"),
				u = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				m = s("./src/reddit/models/Tags/index.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/selectors/tags.ts"),
				b = s("./src/reddit/components/CommunityTopics/index.m.less"),
				g = s.n(b);
			const f = Object(i.c)({
				availableSubredditTags: (e, {
					subredditId: t
				}) => Object(h.d)(e, {
					subredditId: t
				}),
				subredditTags: (e, {
					subredditId: t
				}) => Object(h.s)(e, {
					itemId: t
				}),
				availableGlobalOptions: (e, {
					subredditId: t
				}) => Object(h.a)(e, {
					thingId: t
				}),
				selectedOptions: (e, {
					subredditId: t
				}) => Object(h.v)(e, {
					subredditId: t
				}),
				isLoading: e => Object(h.E)(e),
				currentInput: (e, {
					subredditId: t
				}) => Object(h.l)(e, {
					subredditId: t
				})
			});
			class x extends o.a.Component {
				constructor() {
					super(...arguments), this.onOptionsChanged = e => {
						const t = e.filter(e => e.selected),
							s = e.filter(e => !e.selected);
						this.onOptionsSelected(t), s.forEach(e => this.onOptionDeselected(e))
					}, this.onFocus = () => {
						this.props.onSearchBarFocused(), this.props.onFocus && this.props.onFocus()
					}
				}
				onOptionsSelected(e) {
					const t = m.a - this.props.selectedOptions.length,
						s = e.filter(e => !!e.displayText.trim()),
						n = s.slice(0, t);
					n.forEach(e => {
						if (!e.id) {
							const t = Object(h.c)(e.displayText, this.props.availableSubredditTags);
							t && (e = Object(m.f)(t, !0))
						}
						this.props.optionSelected({
							...e,
							displayText: e.displayText.trim()
						})
					}), n.length !== s.length && this.props.onMaxTopicsHit()
				}
				onOptionDeselected(e) {
					this.props.optionDeselected(e)
				}
				render() {
					return o.a.createElement("div", {
						className: g.a.communityTopicsContainer
					}, o.a.createElement(c.a, {
						readOnlyMode: this.props.readOnlyMode,
						addText: n.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						allowFreeTextEntry: !0,
						availableOptions: this.props.availableGlobalOptions,
						childClassNames: this.props.childClassNames,
						dropdownHeaderText: n.fbt._("Suggested topics", null, {
							hk: "1RASWg"
						}),
						input: this.props.currentInput,
						isError: this.props.selectedOptions.length > m.a,
						isLoading: this.props.isLoading,
						maxOptionLength: m.b,
						maxOptionsToDisplay: this.props.maxTopicsToDisplay,
						onSearchBarFocus: this.onFocus,
						onSearchBarBlur: this.props.onBlur,
						onInputChanged: e => {
							this.props.onInputChanged(e)
						},
						onOptionsChanged: this.onOptionsChanged,
						selectedOptions: this.props.selectedOptions,
						selectedOptionComponent: this.props.selectedOptionComponent,
						splitOnCommaPress: !0
					}, this.props.children))
				}
			}
			t.b = Object(r.b)(f, (e, {
				subredditId: t,
				context: s
			}) => ({
				optionSelected: n => {
					e(Object(d.n)({
						subredditId: t,
						option: n
					})), e((e, a) => {
						u.e(a(), t, n, {
							context: s
						})
					})
				},
				optionDeselected: n => {
					e(Object(d.m)({
						subredditId: t,
						option: n
					})), e((e, a) => {
						u.d(a(), t, n, {
							context: s
						})
					})
				},
				onInputChanged: s => e(Object(d.l)({
					subredditId: t,
					input: s
				})),
				onSearchBarFocused: () => e((e, n) => {
					u.b(n(), t, {
						context: s
					})
				}),
				onMaxTopicsHit: () => e((e, t) => {
					e(Object(l.f)({
						...Object(l.e)(n.fbt._({
							"*": "You can only add up to max {number} community topics",
							_1: "You can only add up to max 1 community topic"
						}, [n.fbt._plural(m.a, "number")], {
							hk: "s07I1"
						}), p.b.Error),
						duration: l.a
					}))
				})
			}))(x)
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, s) {
			e.exports = {
				hideAboveSmallTablet: "FX_aWE8xMirpzniJDh7I9",
				responsiveExpandoButton: "_3gazhzxd2iBGYb2k67_HTw",
				mHideAboveSmallTablets: "_2zV_ARVPrYN10xmbbb_4Lu",
				responsiveMeta: "_1xomvNxK4aHGoGa-YDw1Mc",
				verticalVotes: "WAapGmF_gr09J509Af-gC",
				commentsLink: "Nz0lkWnnj2V_4iBKE0WL7",
				hideBelowSmallTablet: "z_7pbLL4hZp6ikYkq0prE",
				horizontalVotes: "_37nbKm3ee5NGx6e-LXErLD",
				postTopMeta: "_1ghZRP5m5xDLh0up1rFt0e",
				mHideBelowSmallTablets: "_3x_hdVQw5uJh6xeAGoZock",
				adLinkWrapper: "_4Dt8djtbHlJ5uCZDX_SeV",
				content: "_1B7SUGHK0QDoHimxX2a9D0",
				leftRail: "_2r9FABr2qYEUDyZoenhn6N",
				bulkActionCheckbox: "_44ehKZ_pl1NGGaaTYouZR",
				subredditIcon: "_1kWbgdOrvSeXIZZRIw4uBS",
				topLine: "_2ZjElFi3ORaU3VPrwmdoCp",
				postBadges: "_126a2ACB41algqMEwA34TF",
				flatList: "_3jwri54NGT-SRatPIZYiMo",
				expandedContentWrapper: "_12wy0ZFFaS3a49145uXWXt",
				crosspostMediaWrapper: "_2fCIreZsKBNS3esgsKKksM",
				compactWrapper: "YA9IzN0YR-G5_oD5EUydl",
				compactPostRow: "WnMeTcero48dKo501T-19",
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				chain: "_1el-fLKTUXg-19pIbGUHgk",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderSubredditIcon", (function() {
				return Ne
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				p = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/User/index.ts"),
				f = s("./src/reddit/models/Vote/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				E = s("./src/reddit/actions/postFlair.ts"),
				v = s("./src/reddit/actions/tooltip.ts"),
				C = s("./src/reddit/selectors/activeModalId.ts"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/postFlair.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				S = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				w = s("./src/reddit/components/AwardBadges/index.tsx"),
				j = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				I = s("./src/reddit/components/CommentsLink/index.tsx"),
				N = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				T = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				P = s("./src/reddit/components/ExpandoButton/index.tsx"),
				M = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				A = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				F = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				D = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				U = s("./src/reddit/components/ModModeReports/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				W = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				H = s("./src/reddit/components/PopupPortal/index.tsx"),
				V = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				q = s("./src/reddit/components/PostBadges/index.tsx"),
				G = s("./src/reddit/components/PostContainer/index.tsx"),
				z = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				K = s("./src/reddit/components/PostLeftRail/index.tsx"),
				X = s("./src/reddit/components/PostMedia/index.tsx"),
				Q = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				J = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Y = s("./src/reddit/components/PostTitle/index.tsx"),
				Z = s("./src/reddit/components/PostTopMeta/index.tsx"),
				$ = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				ee = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				te = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				se = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ne = s("./src/reddit/components/VerticalVotes/index.tsx"),
				ae = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				oe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				re = s("./src/reddit/contexts/Post/index.tsx"),
				ie = s("./src/reddit/controls/Checkbox/index.tsx"),
				de = s("./src/reddit/controls/MetaData/index.tsx"),
				le = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				ce = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ue = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				me = s("./src/reddit/helpers/postEvent.ts"),
				pe = s("./src/reddit/hooks/useIsOverlay.ts"),
				he = s("./src/reddit/hooks/useTheme.ts"),
				be = s("./src/reddit/hooks/useUserContext.ts"),
				ge = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				fe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				xe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Ee = s.n(xe),
				ve = s("./src/reddit/components/CompactPost/index.m.less"),
				Ce = s.n(ve);

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ke = ({
					isCompact: e,
					...t
				}) => a.a.createElement(P.a, _e({
					className: Object(l.a)(Ce.a.responsiveExpandoButton, {
						[Ce.a.mHideAboveSmallTablets]: !!e,
						[Ce.a.mHideBelowSmallTablets]: !e
					})
				}, t)),
				ye = () => Object(i.c)({
					activeModalId: C.a,
					crosspost: y.d,
					flairStyleTemplate: oe.S,
					isActive: y.j,
					isExpanded: y.l,
					layout: oe.O,
					moderatorPermissions: _.j,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					showEditFlair: k.a
				}),
				Oe = (e, {
					postId: t
				}) => ({
					dispatchFlairChanged: ({
						post: t,
						previewFlair: s,
						selectedTemplateId: n
					}) => e(Object(E.h)({
						post: t,
						previewFlair: s,
						selectedTemplateId: n
					})),
					handleVote: s => {
						const n = s === f.a.upvoted ? Object(x.bb)(t) : Object(x.u)(t);
						e(n)
					},
					onIgnoreReports: () => e(Object(x.X)(t)),
					onOpenReportsDropdown: t => e(Object(v.h)({
						tooltipId: t
					}))
				});
			class Se extends a.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: n,
						currentUser: o,
						eventFactory: r,
						flairStyleTemplate: i,
						handleVote: c,
						imageGalleryCurrentItem: f,
						isCheckboxSelected: x = !1,
						isCommentsPage: E,
						isCommentPermalink: v,
						isExpanded: C,
						isGalleryTileLayoutDefault: _,
						isOverlay: k,
						isProfilePostListing: y,
						inSubredditOrProfile: P = !1,
						layout: X,
						moderatorPermissions: te,
						modModeEnabled: se,
						onClickPost: oe,
						onFlairChanged: re,
						onIgnoreReports: de,
						poll: pe,
						post: he,
						subredditOrProfile: be,
						userIsOp: xe,
						hideModTools: ve,
						scrollerItemRef: _e,
						showBulkActionCheckbox: ke,
						showEditFlair: ye,
						toggleCheckbox: Oe,
						tooltipType: Se,
						sendEvent: je,
						shouldShowGalleryTileOption: Ne
					} = this.props, Pe = !!he.media && he.media.type === b.o.RTJSON, Me = xe && Pe, Re = Object(z.b)(he.id, k), Ae = Object(ue.a)(te), Le = Object(le.a)(te), Fe = Object(ce.a)(te), De = `-mod-actions-menu-${he.id}`, Ue = `voting-arrows-${he.id}`, Be = !!o && Object(g.e)(o) === he.author, We = Object(B.c)(he), He = Object(R.a)("View--Reports", he.id, Se), Ve = Object(B.a)(he), qe = !(k || E || v), Ge = he.media && he.media.type === b.o.LIVEVIDEO, {
						moderationPrompt: ze
					} = he, Ke = e => je(Object(h.g)(he.id, e)), Xe = Object(d.t)(he, f), {
						source: Qe
					} = Xe, Je = a.a.createElement(G.a, {
						className: Object(l.a)(Ee.a.compactPostStyles, Ce.a.postContainer, Object(p.a)(this.props), t),
						isOverlay: k,
						style: {
							...Object(p.d)(this.props),
							...Object(p.b)(this.props.flairStyleTemplate)
						},
						post: he,
						onClick: oe,
						eventFactory: r
					}, a.a.createElement("div", {
						className: Ce.a.compactWrapper
					}, a.a.createElement("div", {
						className: Ce.a.leftRailWrapper
					}, a.a.createElement("div", {
						className: Ce.a.leftRail,
						style: {
							borderColor: Object(K.c)({
								isRemoved: !!he.bannedBy,
								isReported: Object(m.a)(he),
								isSponsored: he.isSponsored,
								theme: this.props.theme
							})
						}
					}, ke && a.a.createElement(ie.a, {
						className: Ce.a.bulkActionCheckbox,
						isCheckboxSelected: x,
						toggleCheckbox: Oe
					}), a.a.createElement(ne.a, {
						className: Ce.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: he,
						onVoteClick: c
					}), a.a.createElement(N.a, {
						className: Ce.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: he,
						onVoteClick: c,
						upvoteTooltipId: Ue
					}), ze && a.a.createElement(H.b, {
						rightOf: Ue
					}, "survey" === ze ? a.a.createElement(D.a, {
						post: he,
						subredditName: be.name,
						isOverlay: !!k
					}) : a.a.createElement(F.a, {
						post: he,
						subredditName: be.name,
						isOverlay: !!k
					})))), a.a.createElement(V.a, {
						className: Object(l.a)(Ce.a.content, {
							[Ce.a.isEvent]: Object(me.a)(he)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, a.a.createElement(T.a, {
						isCompactMode: !0,
						post: he
					}), a.a.createElement("div", {
						className: Ce.a.compactPostRow
					}, !ve && Ie(he, n, C, !1), !P && !he.isSponsored && a.a.createElement(A.h, {
						type: he.belongsTo.type,
						id: he.belongsTo.id
					}), a.a.createElement("div", {
						className: Ce.a.topLine,
						"data-click-id": "body"
					}, a.a.createElement(Y.c, {
						post: he,
						poll: pe,
						size: Y.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Te(he, be), a.a.createElement(Z.d, {
						className: Ce.a.postTopMeta,
						flairStyleTemplate: i,
						post: he,
						showSub: !!be && !P && !he.isSponsored,
						subredditOrProfile: be
					}), a.a.createElement(q.a, {
						className: Ce.a.postBadges,
						displayText: be ? be.displayText : null,
						inSubredditOrProfile: P,
						post: he
					}), a.a.createElement(w.a, {
						thing: he,
						tooltipType: k ? Z.c.Lightbox : void 0
					})), qe && !Ge && a.a.createElement("div", null, a.a.createElement(j.a, {
						className: Ce.a.liveDiscussionIcon,
						isMod: Ae,
						postId: he.postId
					})), a.a.createElement("div", {
						className: Ce.a.flatList
					}, a.a.createElement(I.a, {
						className: Ce.a.commentsLink,
						hasModPostPerms: Ae,
						isCommentsPage: E,
						isCommentPermalink: v,
						isOverlay: k,
						postId: he.id,
						modModeEnabled: se,
						numComments: he.numComments,
						type: u.g.Compact
					}), a.a.createElement(W.a, {
						className: Ce.a.modToolsFlatlist,
						isOverlay: !1,
						layout: X,
						modModeEnabled: se,
						post: he,
						sendEvent: je,
						showIconsOnly: !0
					}), Ae && a.a.createElement(L.a, {
						dropdownId: De,
						onClick: () => Ke("post_mod_action_menu")
					}, a.a.createElement(M.b, null), a.a.createElement(Q.a, {
						canEditFlair: Le && ye,
						hasModPostPerms: Ae,
						hasModFullPerms: Fe,
						isOverlay: !1,
						isPostAuthor: Be,
						modModeEnabled: se,
						post: he,
						tooltipId: De
					})), Ae && We && !se && a.a.createElement(ee.c, {
						text: `${Ve}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(He), Ke("post_report_menu")
						},
						id: He
					}, a.a.createElement(ae.a, {
						model: he,
						onIgnoreReports: () => {
							de(), Ke(he.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: He
					}), he.ignoreReports ? a.a.createElement(ge.a, null) : a.a.createElement(fe.a, null)), a.a.createElement(J.g, {
						currentProfileName: s,
						isCommentsPage: E,
						isOverlay: !1,
						isProfilePostListing: y,
						layout: X,
						permalink: he.permalink,
						sendEvent: je,
						showEditPost: Me,
						showEditFlair: ye,
						dropdownId: `${he.id}-overflow-menu`,
						useFlatlistBreakpoints: Object(J.h)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ve && Ie(he, n, C, !0))), he.isSponsored && Qe && Qe.url && a.a.createElement(O.a, {
						className: Ce.a.adLinkWrapper
					}, a.a.createElement(S.a, {
						post: he,
						adLinkContent: Xe,
						isCompact: !0
					})), se && Ae && We && a.a.createElement("div", {
						className: Ce.a.compactPostRow
					}, a.a.createElement(U.a, {
						onIgnoreReports: de,
						reportable: he
					})), a.a.createElement(A.d, null))), C && a.a.createElement(we, {
						post: he,
						scrollerItemRef: _e,
						flairStyleTemplate: i,
						shouldShowGalleryTileOption: Ne,
						isGalleryTileLayoutDefault: _
					}), e === Re && a.a.createElement(z.a, {
						flairs: he.flair,
						subredditId: he.belongsTo.id,
						modalId: Re,
						onFlairChanged: re
					}));
					return a.a.createElement($.b, null, Je)
				}
			}
			const we = e => a.a.createElement(V.a, {
					className: Object(l.a)(e.className, Ce.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? a.a.createElement("div", {
					className: Ce.a.crosspostMediaWrapper
				}, je(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : je(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				je = (e, t, s, n) => a.a.createElement(X.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				}),
				Ie = (e, t, s, n) => a.a.createElement(ke, {
					crosspost: t,
					isCompact: n,
					isExpanded: s,
					post: e,
					useMediaIcons: !0
				}),
				Ne = e => a.a.createElement(r.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, a.a.createElement(se.b, {
					className: Ce.a.subredditIcon,
					subredditOrProfile: e
				})),
				Te = (e, t) => a.a.createElement("div", {
					className: Ce.a.responsiveMeta
				}, a.a.createElement(de.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), a.a.createElement(de.c, null), Object(de.d)(e.numComments), a.a.createElement(de.c, null), t && a.a.createElement("a", {
					href: t.url
				}, a.a.createElement(de.a, null, t.displayText)), e.isSponsored && [a.a.createElement(te.a, {
					key: "label"
				}), a.a.createElement(de.c, {
					key: "separator"
				})], !e.isSponsored && a.a.createElement(de.a, null, " Posted by "), a.a.createElement(Z.b, {
					post: e
				}));
			t.default = Object(re.b)(a.a.memo((function(e) {
				const t = Object(be.a)(),
					s = Object(n.useMemo)(() => ye(), []),
					r = Object(o.e)(n => s(n, {
						...e,
						...t
					})),
					i = Object(o.d)(),
					d = Oe(i, {
						...e,
						...t
					});
				return a.a.createElement(Se, _e({}, e, t, r, d, {
					onFlairChanged: ({
						previewFlair: t,
						selectedTemplateId: s
					}) => d.dispatchFlairChanged({
						post: e.post,
						previewFlair: t,
						selectedTemplateId: s
					}),
					sendEvent: Object(c.b)(),
					isOverlay: Object(pe.a)(),
					theme: Object(he.a)()
				}))
			})))
		},
		"./src/reddit/components/ConfirmModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3DhQ2s_h1XCiwltypHmlbp",
				close: "_2oxgXPm-tiPAEPsJoUw-ZD",
				headerText: "_2sDCzF6zlpNJ5cbVDRCPOS",
				text: "_3eWjwYvkDvPzyq4FlubrF9",
				buttonWrapper: "_6ZHRZ8Epefe887d7LL-q6",
				primaryButton: "Ch-0dFLxLOtcc6xCyQvsk",
				secondaryButton: "bgwHoiDoSwFVZKRTLRQMF"
			}
		},
		"./src/reddit/components/ConfirmModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				r = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/components/ConfirmModal/index.m.less"),
				d = s.n(i),
				l = s("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(o.a)(e => a.a.createElement("div", {
				className: d.a.container
			}, a.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: d.a.close
			}, a.a.createElement(l.b, null)), a.a.createElement(l.h, null, a.a.createElement("h2", {
				className: d.a.headerText
			}, e.headerText)), a.a.createElement(l.k, null, e.message && a.a.createElement("p", {
				className: d.a.text
			}, e.message), e.children && a.a.createElement("div", {
				className: d.a.text
			}, e.children), a.a.createElement("div", {
				className: d.a.buttonWrapper
			}, e.cancelText && a.a.createElement(r.l, {
				className: d.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), a.a.createElement(r.i, {
				className: d.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/config.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/loginHref/index.ts"),
				u = s("./src/reddit/actions/contentGate.ts"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				b = s("./src/reddit/components/Footer/index.m.less"),
				g = s.n(b);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = l.a.div("FooterContainer", g.a), E = l.a.div("UserAgreement", g.a), v = l.a.a("UserAgreementLink", g.a), C = l.a.a("PrivacyLink", g.a);
			var _ = () => o.a.createElement(x, null, o.a.createElement(E, null, f._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [f._param("=User Agreement", o.a.createElement(v, {
					href: `${n.a.redditUrl}/help/useragreement`
				}, f._("User Agreement", null, {
					hk: "2srkM2"
				}))), f._param("=Privacy Policy", o.a.createElement(C, {
					href: `${n.a.redditUrl}/help/privacypolicy`
				}, f._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), f._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				k = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				y = s("./src/reddit/components/RichTextJson/index.tsx"),
				O = s("./node_modules/lodash/flatMap.js"),
				S = s.n(O),
				w = s("./src/lib/linkMatchers/index.ts"),
				j = s("./src/lib/linkMatchers/customLinks.ts"),
				I = s("./src/reddit/controls/OutboundLink/index.tsx");
			const N = /\[(.+?)\]\((.+?)\)/g,
				T = e => {
					const t = e.split(N);
					if (1 === t.length) return [e];
					const s = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, a, o] = t.slice(n, n + 3);
						s.push(e), s.push([o, a])
					}
					return s
				};
			var P = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = S()(t, T)), e.parseRegularLinks && (t = S()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = w.f.add(j.g.subreddit.prefix, j.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const a of t) s.push(e.slice(n ? n.lastIndex : 0, a.index)), n = a, s.push([a.url, a.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, a] = t;
							return o.a.createElement(I.b, {
								className: e.linkClassName,
								href: n,
								isSponsored: !1,
								key: s,
								source: null
							}, a)
						}
						return o.a.createElement("span", {
							key: s
						}, t)
					}), " ")
				}),
				M = s("./src/reddit/contexts/PageLayer/index.tsx"),
				R = s("./src/reddit/controls/Button/index.tsx"),
				A = s("./src/chat/controls/Svg/index.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var F = e => o.a.createElement(A.a, L({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				D = s("./src/reddit/models/ContentGate.ts"),
				U = s("./src/lib/constants/index.ts"),
				B = s("./src/reddit/selectors/platform.ts"),
				W = s("./src/reddit/selectors/user.ts");
			var H = s("./src/reddit/selectors/meta.ts"),
				V = s("./src/reddit/components/ContentGate/index.m.less"),
				q = s.n(V);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = l.a.wrapped(F, "PrivateKey", q.a), K = l.a.div("ButtonsContainer", q.a), X = l.a.div("Container", q.a), Q = l.a.div("Description", q.a), J = l.a.div("PrivateSubredditDetails", q.a), Y = l.a.div("PrivateSubredditDescription", q.a), Z = l.a.h3("PrivateSubredditName", q.a), $ = l.a.a("Link", q.a), ee = l.a.wrapped(R.k, "LinkRouterButton", q.a), te = l.a.wrapped(R.j, "LinkButton", q.a), se = l.a.wrapped(R.n, "SecondaryLinkRouterButton", q.a), ne = l.a.wrapped(R.m, "SecondaryLinkButton", q.a), ae = l.a.wrapped(ee, "GoHomeLinkButton", q.a), oe = l.a.img("Image", q.a), re = l.a.img("ImagePlaceholder", q.a), ie = l.a.wrapped(ee, "LeftLinkRouterButton", q.a), de = l.a.wrapped(te, "LeftLinkButton", q.a), le = l.a.wrapped(ne, "SecondaryLeftLinkButton", q.a), ce = l.a.wrapped(se, "SecondaryLeftLinkRouterButton", q.a), ue = l.a.h3("Title", q.a), me = l.a.div("PageBody", q.a), pe = l.a.div("QuarantineMessageWrapper", q.a), he = Object(d.c)({
				isLoggedIn: W.I,
				origin: H.j,
				user: W.i,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(W.J)(e)) return !1;
					const t = Object(B.d)(e);
					if (!t) return !1;
					const s = Object(W.e)(e, t);
					if (!s) return !1;
					if (!s.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = s;
					if (!n) return !1;
					const a = 30 * U.x;
					return n > Date.now() - a
				})(e)
			}), be = Object(M.t)(), ge = Object(r.b)(he, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.A(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), fe = e => {
				const {
					banMessage: t,
					contentGateType: s,
					continueToQuarantinedSubreddit: a,
					isLoggedIn: r,
					isContributorRequestsDisabled: i,
					isPrivateSubredditContributorRequestPending: d,
					location: l,
					origin: m,
					pageLayer: b,
					quarantineRequiresEmail: g,
					quarantineMessage: f,
					quarantineMessageHtml: x,
					quarantineMessageRTJson: E,
					setNSFWPreference: v,
					subredditDescription: C,
					subredditName: _,
					user: O
				} = e, S = async () => {
					r ? await v() : await Object(u.k)(), window.location.reload()
				};
				switch (s) {
					case D.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ue, null, G._("r/{community name} is a Reddit Premium community", [G._param("community name", _)], {
							hk: "2lyDwB"
						})), o.a.createElement(Q, null, G._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(K, null, O ? o.a.createElement(le, {
							href: `${n.a.redditUrl}/premium`
						}, G._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(de, {
							href: Object(c.a)(l, m)
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), O ? o.a.createElement(ee, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(ne, {
							href: Object(c.a)(l, m)
						}, G._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case D.a.Nsfw:
					case D.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ue, null, s === D.a.Nsfw ? G._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : G._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(Q, null, G._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(K, null, o.a.createElement(ie, {
							to: "/"
						}, G._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(ne, {
							onClick: S
						}, G._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case D.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(z, null), o.a.createElement(ue, null, "r/", _, " ", G._("is a private community", null, {
							hk: "7zZmq"
						})), C && C.length && o.a.createElement(J, null, o.a.createElement(Z, null, "r/", _), o.a.createElement(Y, null, o.a.createElement("div", null, C))), o.a.createElement(Q, null, G._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", _, " ", G._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), G._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(K, null, O ? o.a.createElement(o.a.Fragment, null, !i && o.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: q.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), o.a.createElement(le, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${_}`
						}, G._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(le, {
							href: Object(c.a)(l, m)
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(ee, {
							to: "/"
						}, G._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case D.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ue, null, G._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(Q, null, G._("This community is {=quarantined}", [G._param("=quarantined", o.a.createElement($, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, G._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(pe, null, E ? o.a.createElement(y.a, {
							content: E,
							rtJsonElementProps: {
								pageLayer: b
							}
						}) : x ? o.a.createElement(k.a, {
							html: x
						}) : f || G._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), G._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(K, null, ((e, t, s) => {
							return !(e && e.hasVerifiedEmail) && s ? o.a.createElement(K, null, o.a.createElement(ce, {
								to: "/"
							}, G._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(te, {
								href: `${n.a.redditUrl}/prefs/update`
							}, G._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(K, null, o.a.createElement(ie, {
								to: "/"
							}, G._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(ne, {
								onClick: t
							}, G._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(O, a, g)));
					case D.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ue, null, G._("r/{community name} has been banned from Reddit", [G._param("community name", _)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(Q, null, e ? o.a.createElement(P, {
							linkClassName: q.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : G._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(K, null, o.a.createElement(ee, {
							to: "/"
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(K, null, o.a.createElement(ee, {
							to: "/"
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(re, null), o.a.createElement(ue, null, G._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(Q, null, G._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(K, null, O && o.a.createElement(h.a, {
							eventSource: "content_gate"
						}), o.a.createElement(ae, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.ProfileDoesNotExist:
					case D.a.ProfileDeleted:
					case D.a.ProfileSuspended:
					case D.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case D.a.ProfileBlockedForLegalReason:
									return G._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case D.a.ProfileDeleted:
									return G._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case D.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, G._("This account has been {=suspended} .", [G._param("=suspended", o.a.createElement($, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, G._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case D.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ue, null, G._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(Q, null, G._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(K, null, o.a.createElement(ae, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, G._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(K, null, o.a.createElement(ae, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(oe, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(K, null, o.a.createElement(ee, {
							to: "/"
						}, G._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = be(ge(Object(i.i)(e => o.a.createElement(X, null, o.a.createElement("div", null, o.a.createElement(me, null, fe(e))), o.a.createElement(_, null)))))
		},
		"./src/reddit/components/ContentSurvey/RatingCard.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/components/ContentSurvey/index.m.less"),
				i = s.n(r),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/hooks/useTheme.ts"),
				u = s("./src/reddit/icons/svgs/Info/index.tsx"),
				m = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = s("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function g(e) {
				var t, s;
				const {
					ratingResponse: n,
					subredditId: r,
					children: g
				} = e, f = null !== (t = Object(o.e)(e => Object(h.T)(e, {
					subredditId: r
				}))) && void 0 !== t ? t : {}, x = Object(c.a)();
				return a.a.createElement("div", {
					className: i.a.ratingCard
				}, "PENDING" === (null == n ? void 0 : n.status) && a.a.createElement("div", {
					className: Object(d.a)(i.a.card, i.a.pending)
				}, a.a.createElement(u.a, {
					className: i.a.infoIcon
				}), b._("Content tag is pending until reviewed", null, {
					hk: "Umha7"
				})), a.a.createElement("div", {
					className: i.a.card
				}, a.a.createElement("div", {
					className: i.a.banner,
					style: {
						background: Object(m.g)(Object(p.a)({
							theme: x
						}).banner.backgroundColor, Object(p.a)({
							theme: x
						}).banner.backgroundImage, Object(p.a)({
							theme: x
						}).banner.backgroundImagePosition)
					}
				}, a.a.createElement(l.b, {
					className: i.a.communityIcon,
					iconUrl: null === (s = f.icon) || void 0 === s ? void 0 : s.url
				})), a.a.createElement("h3", {
					className: i.a.communityName
				}, n ? a.a.createElement("span", null, f.displayText, a.a.createElement("img", {
					className: i.a.ratingImg,
					src: n.rating.icon.png
				})) : f.displayText), g))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e(0), s.e(1)]).then(s.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				r = Object(a.a)(o);
			t.a = r
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, s) {
			e.exports = {
				feedBanner: "_3oY2sjcQ7EgBYd7agqleJv",
				notepadSnoo: "B0cLCCVs794x74kjJidDO",
				bannerCopy: "_2NfcId0Mtt4-NP4AbrAck5",
				copy: "BcSr5zM39F4cQJ9MQqkRn",
				meta: "r9AkMaLWOPKfC5Swx9XQf",
				chevron: "yFbNzMMxa-u2DgUP3Gz5h",
				header: "wKkshJ3Og8gaDgJmSULiK",
				introCopy: "m3rT-KnA6An7scRNg10UW",
				checkbox: "Y5aDAUsXXQaMbdCe1-qdG",
				result: "_29ewfEVekvKEl_P2hqf4tI",
				heading: "_3yKTUBG4MrGHv9n644t4Ua",
				card: "_18VT-IpGoX6SDdyHHLI_eo",
				pending: "hg80uiMz2ssH44RLsmlhG",
				infoIcon: "_3HgNBpJCFAy2mohcd9VxmZ",
				banner: "_23eBsXSECZlQ3Eh-zXhEbC",
				communityIcon: "_2Z8cRxGvjX2hQUlQK_VEOE",
				communityName: "_1sHP__xe_7iTbSpLKp7FeC",
				ratingImg: "UZWqo3i6ydUcE18iJqx3P",
				ratingAudience: "_1Y5aAemcMRF3uwSgYpqbsT",
				ratingDescription: "_1e5wHYsIyWJlZSjZCHhBKg",
				reasonsHeader: "_1npcgCYHbRcUsU6KOI7ony",
				reason: "_3rlzPcuZsxLsVx6ib3oBjk"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ContributorRequestButton").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/getSrCreationEntrypointCopy.ts"),
				h = s("./src/reddit/helpers/overlay/index.ts"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				g = s("./src/reddit/selectors/experiments/srCreationEntrypoints.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				E = s.n(x),
				v = s("./src/lib/lessComponent.tsx");
			const C = "create-community-button",
				_ = v.a.wrapped(l.c, "StyledTooltip", E.a),
				k = Object(i.c)({
					isInSrCreationEntrypointBehaviorExperiment: g.c,
					isInSrCreationEntrypointCopyExperiment: g.d,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(f.gb)(e),
					userIsSuspended: f.O
				});
			t.a = Object(r.b)(k, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: s => {
					s(Object(b.b)(t)), e(Object(h.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: C
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(c.c)(({
				className: e,
				eventSource: t,
				isInSrCreationEntrypointBehaviorExperiment: s,
				isInSrCreationEntrypointCopyExperiment: a,
				onShowTooltip: r,
				onHideTooltip: i,
				openCommunityCreation: d,
				sendEvent: l,
				userDoesNotHaveEnoughExpToCreateCommunity: c,
				userIsSuspended: h
			}) => o.a.createElement(m.q, {
				className: e,
				disabled: h || c,
				onClick: () => s === u.od.Tabs ? window.open("/subreddits/create", "_blank") : d(l),
				onMouseEnter: r,
				onMouseLeave: i,
				priority: m.b.Secondary,
				id: C,
				isFullWidth: !0
			}, Object(p.a)(a, n.fbt._("Create Community", null, {
				hk: "28v7Qq"
			})), c ? o.a.createElement(_, {
				caretOnTop: !0,
				tooltipId: C,
				text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : h ? o.a.createElement(_, {
				caretOnTop: !0,
				tooltipId: C,
				text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/EmailInvitePaintedDoor/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "EmailInvitePaintedDoor",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("EmailInvitePaintedDoor").then(s.bind(null, "./src/reddit/components/EmailInvitePaintedDoor/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/EmailInvitePaintedDoor/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				l = s("./src/reddit/components/PostFollow/index.tsx"),
				c = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const h = i.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: s
			}) => {
				if (!Object(u.a)(s)) return null;
				const n = s && s.eventInfo,
					i = Object(c.a)(s),
					m = n && Object(r.c)(n.eventStart, n.eventEnd);
				return a.a.createElement("div", {
					className: Object(o.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, a.a.createElement(h, {
					className: p.a.eventMetaWrapper
				}, a.a.createElement(d.a, {
					post: s
				}), !i && m && a.a.createElement(l.a, {
					className: p.a.eventFollowButton,
					post: s,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/eventTools/index.ts"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts");

			function d(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var l = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				u = s("./src/reddit/icons/fonts/Live/index.tsx"),
				m = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				p = s.n(m),
				h = s("./src/lib/lessComponent.tsx");
			const b = h.a.span("PostEventFutureText", p.a),
				g = h.a.span("PostEventPastText", p.a),
				f = h.a.span("PostEventNowText", p.a),
				x = h.a.span("Container", p.a),
				E = h.a.wrapped(c.a, "CalendarIcon", p.a),
				v = h.a.wrapped(u.a, "LiveIcon", p.a),
				C = h.a.div("LoadingState", p.a);
			class _ extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: c,
						eventStart: u
					} = s, m = Object(o.e)(u, n);
					let p, h;
					if (this.state.mounted || m === o.a.Live) p = function(e, t, s) {
						const n = Object(o.e)(e, t),
							a = new Date(e * i.Kb);
						let l;
						return n === o.a.Live || s ? r.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (n === o.a.Future ? l = Object(o.d)(e) ? r.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(o.b)(e) >= 5 ? d(a) : a.toLocaleDateString(void 0, {
							weekday: "long"
						}) : n === o.a.Past && (l = Object(o.d)(e) ? r.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : d(a)), `${l} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(a)}`)
					}(u, n, c);
					else {
						const e = Object(l.a)({
							isLoading: !0
						});
						p = a.a.createElement(C, {
							className: e
						})
					}
					if (c) h = a.a.createElement(f, null, a.a.createElement(v, null), p);
					else if (m === o.a.Future) h = a.a.createElement(b, null, a.a.createElement(E, null), p);
					else {
						if (m !== o.a.Past) return null;
						h = a.a.createElement(g, null, a.a.createElement(E, null), p)
					}
					return a.a.createElement(x, {
						className: e
					}, h)
				}
			}
			t.a = _
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				p = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				g = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				f = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx"),
				E = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				v = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				C = s("./src/reddit/icons/fonts/Link/index.tsx"),
				_ = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				k = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				y = s("./src/reddit/icons/fonts/Text/index.tsx"),
				O = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				S = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/components/ExpandoButton/index.m.less"),
				I = s.n(j);
			const N = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(c.v)({
						postId: t.post.id
					}))
				})),
				T = (e, t = !1, s, n) => {
					const a = Object(d.a)(I.a.icon, I.a.hideOnHover);
					if (t) return o.a.createElement(b.a, {
						className: a
					});
					if (s.pollData) return n ? o.a.createElement(h.a, {
						name: "poll_post",
						isFilled: !0
					}) : o.a.createElement(S.a, {
						className: a
					});
					switch (e) {
						case w.o.GIFVIDEO:
							return o.a.createElement(v.a, {
								className: a
							});
						case w.o.IMAGE:
							return o.a.createElement(k.a, {
								className: a
							});
						case w.o.TEXT:
						case w.o.RTJSON:
							return o.a.createElement(y.a, {
								className: a
							});
						case w.o.VIDEO:
							return o.a.createElement(E.a, {
								className: a
							});
						case w.o.GALLERY:
							return n ? o.a.createElement(h.a, {
								name: "media_gallery",
								isFilled: !0
							}) : o.a.createElement(O.a, {
								className: a
							});
						case w.o.EMBED:
						default:
							return o.a.createElement(C.a, {
								className: a
							})
					}
				};
			t.a = N(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: a,
					isExpanded: r,
					post: c,
					toggle: h,
					useMediaIcons: b
				} = e, E = Object(p.a)(), v = s || c, C = a && !!s;
				return v.media && !(("rtjson" === v.media.type || "text" === v.media.type) && !Object(m.a)(v)) || !!c.pollData ? o.a.createElement("button", {
					"aria-expanded": r,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, I.a.outer),
					"data-click-id": r ? "expando_close" : "expando_open",
					onClick: h
				}, r ? o.a.createElement(g.a, {
					className: I.a.icon,
					isFilled: !0
				}) : b ? o.a.createElement(o.a.Fragment, null, T(v.media && v.media.type, C, c, E), o.a.createElement(f.a, {
					className: Object(d.a)(I.a.icon, I.a.showOnHover)
				})) : o.a.createElement(f.a, {
					className: I.a.icon,
					isFilled: E
				})) : v.source && v.source.url ? o.a.createElement(u.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, I.a.outer),
					"data-click-id": "expando_open",
					href: v.source.url,
					isSponsored: c.isSponsored,
					postId: c.id,
					source: c.source,
					target: "_blank"
				}, o.a.createElement(_.a, {
					className: Object(d.a)(I.a.icon, I.a.outboundLinkIcon),
					isFilled: E
				})) : o.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, I.a.outer),
					"data-click-id": "expando_open",
					to: Object(l.a)(v.permalink),
					rel: "nofollow"
				}, o.a.createElement(x.a, {
					className: I.a.icon,
					isFilled: E
				}))
			})
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/GeoForm/GeoForm.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/uuid/v4.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx");
			var l, c = s("./node_modules/fbt/lib/FbtPublic.js"),
				u = s("./node_modules/p-debounce/index.js"),
				m = s.n(u),
				p = s("./src/reddit/constants/keycodes.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				b = s("./src/lib/sentry/index.ts"),
				g = s("./src/graphql/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(l || (l = {}));
			const f = (e, t) => async s => {
				let n;
				try {
					n = await async function(e, t) {
						return Object(h.a)(e, {
							...g,
							variables: t
						})
					}(e(), {
						query: s,
						sessionId: t
					})
				} catch (a) {
					return b.c.captureException(a), []
				}
				return n.body.data.geoPlaceAutocomplete || []
			};
			var x = s("./src/reddit/hooks/useGqlContext.ts"),
				E = s("./src/reddit/hooks/useOnClickOutside.ts"),
				v = s("./src/reddit/icons/svgs/Location/index.tsx"),
				C = s("./src/reddit/components/GeoForm/index.m.less"),
				_ = s.n(C);

			function k(e) {
				const {
					value: t,
					setValue: s,
					setPlace: o,
					disabled: r,
					onFocus: d,
					sessionId: l,
					className: u
				} = e, h = Object(x.a)(), [b, g] = Object(n.useState)(!1), E = function(e, t, s) {
					const [a, o] = Object(n.useState)([]), r = Object(n.useMemo)(() => m()(s, 300), [s]);
					return Object(n.useEffect)(() => {
						e && t && r(e).then(e => {
							o(e)
						}).catch(() => o([]))
					}, [e]), a
				}(t, b, f(h, l)), {
					highlightValue: C,
					selectedIndex: k,
					onKeyDown: O,
					isClosed: S,
					setClosed: w
				} = function(e, t, s) {
					const [a, o] = Object(n.useState)(-1), [r, i] = Object(n.useState)(!!e.length), [d, l] = Object(n.useState)(void 0);
					return {
						highlightValue: d,
						selectedIndex: a,
						onKeyDown: n => {
							if (n.key === p.b.ArrowDown) {
								const t = Math.min(a + 1, e.length - 1);
								o(t), l(e[t])
							} else if (n.key === p.b.ArrowUp) {
								const t = Math.max(a - 1, -1);
								o(t), l(e[t])
							} else n.key === p.b.Enter && a > -1 ? (o(-1), t(e[a].name), s(e[a]), i(!0), n.preventDefault()) : n.key === p.b.Escape ? (o(-1), i(!0)) : l(void 0)
						},
						isClosed: r,
						setClosed: i
					}
				}(E, s, o), j = `location-input-${l}`;
				return a.a.createElement("div", {
					className: _.a.autocompleteInput
				}, a.a.createElement("label", {
					className: _.a.geoLabel,
					htmlFor: j
				}, a.a.createElement(v.a, {
					className: _.a.locationIcon
				})), a.a.createElement("input", {
					className: Object(i.a)(_.a.geoInput, u),
					name: j,
					disabled: r,
					onKeyDown: O,
					value: C && C.name || t,
					placeholder: c.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						s(e.currentTarget.value), o(void 0), w(!1)
					},
					onFocus: () => {
						g(!0), d()
					},
					onBlur: () => g(!1)
				}), E.length && !S ? a.a.createElement(y, {
					id: l,
					items: E.map(e => e.name),
					selectedIndex: k,
					selectValue: e => {
						s(E[e].name), o(E[e]), w(!0)
					},
					onClickOutside: () => w(!0)
				}) : null)
			}

			function y(e) {
				const {
					id: t,
					items: s,
					selectedIndex: n,
					selectValue: o,
					onClickOutside: r
				} = e;
				return Object(E.a)(`autocomplete-dropdown-${t}`, r), a.a.createElement("ul", {
					className: _.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, s.map((e, t) => a.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => o(t),
					className: Object(i.a)({
						[_.a.highlight]: t === n
					})
				}, e)))
			}
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = () => {};

			function w(e) {
				const {
					className: t,
					initialValue: s,
					initialPlace: o,
					disabled: l = !1,
					onFocus: c = S,
					onPlace: u = S,
					onValue: m = S,
					inputClassName: p
				} = e, h = function() {
					const [e, t] = Object(n.useState)(!1);
					return Object(n.useEffect)(() => t(!0), []), e
				}(), [b] = Object(n.useState)(() => r()()), [g, f] = Object(n.useState)(s || ""), [x, E] = Object(n.useState)(o);
				return h ? a.a.createElement("form", {
					className: Object(i.a)(_.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == o ? void 0 : o.id) !== (null == x ? void 0 : x.id) && e.onSubmit({
							name: g,
							place: x,
							sessionId: b
						})
					}
				}, a.a.createElement(k, {
					className: p,
					value: g,
					sessionId: b,
					setValue: e => {
						f(e), m(e)
					},
					setPlace: e => {
						E(e), u(e)
					},
					disabled: l,
					onFocus: c
				}), x && x.id !== (null == o ? void 0 : o.id) && a.a.createElement(d.l, {
					className: _.a.submitButton,
					type: "submit",
					disabled: l
				}, O._("Submit", null, {
					hk: "3kKxBt"
				}))) : null
			}
		},
		"./src/reddit/components/GeoForm/index.m.less": function(e, t, s) {
			e.exports = {
				geoForm: "dnC9V9HtkUxsmza-vEXgC",
				geoLabel: "_3T9bJ1ttSXUxb9rxZI9jMC",
				locationIcon: "_2Jm0p-hd1-KYZJI9iP3n6",
				geoInput: "_2O28-fZaU1kYnMmsiMKw3y",
				autocompleteInput: "oP84ZJjEgYLr154hrXHd8",
				autocompleteDropdown: "_1pwsnPyclgUCyjdfT0xWmx",
				highlight: "_1kfPE4TrjHsTFgvmrF1s33"
			}
		},
		"./src/reddit/components/GrantUserFlair/index.m.less": function(e, t, s) {
			e.exports = {
				titleRow: "_1knBg4PWacEaLvDRHAvsTp",
				flairDetails: "_2bPY-7msbc_UjCac-In6Li",
				flairEditColumn: "_2ebZb7SML8ZCy-QsS6tUc0",
				column: "_3vuuCvX3U56Wb64Bz3AX9W",
				iconsColumn: "Q9C1YLEYQHPi_NuLIcsS3",
				removeIcon: "_2IP600IxdVV8-hzfus_xst",
				removeButton: "Yd-aY1XSmw6atYPPJHm9n",
				row: "_3W5UQ4TDClfiDY4zEBYSqT",
				flairEditHelperText: "_2JpPK1gCbDBJBbMRrx-fe6",
				errorIndicator: "_1gmumWT2YihpY16NJJw_ac",
				hasError: "Uu_my_fNiUJaUT-wFhyeq",
				flairContainer: "_1c46XAzSY3wg6lATaRh11v",
				userLink: "_14IDyvxQsRUGTR9unevdzm",
				textInput: "_3OzKI46CUHBipWh2v7Cfq",
				dropdownTriangle: "_3L2zEwdN8hdor-MjnuTTXx",
				dropdownTarget: "_2q91kdzeOjUsLeozfWfPZI",
				dropdownContainer: "_2SgxV6WihN0lLBZ06jChDN",
				dropdownRow: "Hsh_7uWgjhtYFcA5QqiI6",
				userIcon: "uHVmBRWHNpGMMkIFBthWs",
				modIcon: "_31YDoZrj2KLLxWJhYimRfb",
				infoTooltip: "i75byXeh_ZzdbD0HGxb4",
				tooltipText: "_3FXJw0xh37YZHaJP_j3Npe",
				tooltipIconContainer: "_1dZeti3tpsM8YrfluheTX5",
				tooltipIconRow: "_2B9YDCXdUsKx20YPQ_0guj",
				tooltipIconText: "_2_doCenMWfLXsGEvDSq1NB",
				cssInputError: "_3ySNKx0QJZRCNOFB6345zX",
				bottomBarRow: "Tf16TWgXZcNKzLmD4PDPq",
				topBar: "e-h9YD6UZh8FOUPTG6drY",
				disabledBanner: "_3rrCSsx0QD7pFwGJquTq-6",
				warningIcon: "_3MSU8YNfdz6icABES0GIkK",
				emptyList: "y4YDfdWBHO7s3GVuYjBDF",
				flairIcon: "_3RYWcdo8Ov1AjwCGeCUsfs",
				mainText: "_8uYoAAuUrGW1iwcBP-2eS",
				fadeIn: "_3YR0vW4lNgbJJ7RgssVmf-"
			}
		},
		"./src/reddit/components/GrantUserFlair/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/find.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/addQueryParams/index.ts"),
				m = s("./src/lib/omitKey/index.ts"),
				p = s("./src/lib/stripQueryParams/index.ts"),
				h = s("./src/reddit/actions/grantUserFlair/index.ts"),
				b = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				g = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				x = s("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				E = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				v = s("./src/lib/classNames/index.ts"),
				C = s("./src/reddit/components/SaveIndicator/index.m.less"),
				_ = s.n(C),
				k = s("./src/reddit/icons/svgs/CheckmarkFitted/index.tsx"),
				y = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				O = s("./src/reddit/icons/svgs/Replay/index.tsx"),
				S = s("./src/reddit/models/ApiRequestState/index.ts");
			const w = {
				[S.a.Pending]: () => a.fbt._("Saving", null, {
					hk: "3r9uZO"
				}),
				[S.a.Complete]: () => a.fbt._("Saved", null, {
					hk: "e9tAk"
				}),
				[S.a.Failed]: () => a.fbt._("Save error", null, {
					hk: "3NFi3S"
				})
			};
			var j = e => d.a.createElement(d.a.Fragment, null, e.status === S.a.Pending && d.a.createElement(O.a, {
					className: Object(v.a)(_.a.icon, _.a.pendingIcon)
				}), e.status === S.a.Complete && d.a.createElement(k.a, {
					className: Object(v.a)(_.a.icon, _.a.savedIcon)
				}), e.status === S.a.Failed && d.a.createElement(y.a, {
					className: Object(v.a)(_.a.icon, _.a.saveErrorIcon)
				}), d.a.createElement("span", {
					className: _.a.caption
				}, w[e.status]())),
				I = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				N = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				T = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				M = s("./src/reddit/constants/colors.ts"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/helpers/flair.ts"),
				L = s("./src/reddit/selectors/telemetry.ts");
			const F = e => ({
					subreddit: L.subreddit(e),
					profile: L.profile(e),
					userSubreddit: L.userSubreddit(e)
				}),
				D = e => t => ({
					source: "grant_user_flair",
					action: "click",
					noun: e,
					...F(t)
				}),
				U = () => D("search_username"),
				B = () => D("page_forward"),
				W = () => D("page_back"),
				H = () => D("remove_granted_user_flair"),
				V = (e, t) => s => ({
					source: "grant_user_flair",
					action: "autosave",
					noun: e,
					actionInfo: {
						...L.actionInfo(s),
						settingValue: t
					},
					...F(s)
				}),
				q = () => V("flair_text"),
				G = e => V("flair_template", e || "none"),
				z = e => V("css_class", e);
			var K = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				X = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				Q = s("./src/reddit/icons/svgs/User/index.tsx"),
				J = s("./src/reddit/models/SubredditModeration/index.ts");
			const Y = [];
			var Z = s("./src/reddit/selectors/meta.ts"),
				$ = s("./src/reddit/selectors/userFlair.ts"),
				ee = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				te = s("./src/reddit/components/GrantUserFlair/index.m.less"),
				se = s.n(te);
			var ne = () => d.a.createElement("div", {
					className: se.a.emptyList
				}, d.a.createElement(ee.a, {
					className: se.a.flairIcon
				}), d.a.createElement("div", {
					className: se.a.mainText
				}, a.fbt._("You do not have any users with user flair", null, {
					hk: "4D1S5Z"
				})), d.a.createElement("div", null, a.fbt._("Search for a user to assign a user flair", null, {
					hk: "2YaDOy"
				}))),
				ae = s("./node_modules/lodash/filter.js"),
				oe = s.n(ae),
				re = s("./node_modules/lodash/isEqual.js"),
				ie = s.n(re),
				de = s("./node_modules/lodash/omit.js"),
				le = s.n(de),
				ce = s("./src/reddit/constants/flair.ts"),
				ue = s("./src/reddit/helpers/validateFlairCssClass.ts");
			const me = 200;
			var pe;
			! function(e) {
				e[e.Save = 0] = "Save", e[e.Delete = 1] = "Delete"
			}(pe || (pe = {}));
			const he = e => null === e.flair,
				be = e => !(!e.apiError && !e.clientValidationError),
				ge = (e, t = !1) => {
					const s = Date.now();
					return oe()(e, e => {
						if (!e || e.clientValidationError) return !1;
						if (e.apiError && !t) return !1;
						if (he(e)) return !0;
						return s - e.changedAt > 2e3 || t
					})
				},
				fe = (e, t, s) => {
					const n = Object.keys(e).filter(n => {
						const a = e[n],
							o = t[n] || null;
						return !(!!o || n === s || !be(a)) || !!ie()(o, a.flair)
					});
					return n.length ? le()(e, n) : e
				},
				xe = (e, t) => {
					const s = t || ce.a;
					return (e ? Object(A.m)(e, s) || Object(ue.a)(e.cssClass || "") : "") || void 0
				};
			var Ee = s("./node_modules/lodash/noop.js"),
				ve = s.n(Ee),
				Ce = s("./src/reddit/components/Flair/index.tsx"),
				_e = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				ke = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				ye = s("./src/reddit/controls/InternalLink/index.tsx"),
				Oe = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				Se = s("./src/reddit/models/Flair/index.ts"),
				we = s("./src/higherOrderComponents/asTooltip.tsx"),
				je = s("./src/reddit/actions/tooltip.ts"),
				Ie = s("./src/reddit/constants/keycodes.ts"),
				Ne = s("./src/reddit/controls/Dropdown/index.tsx"),
				Te = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				Pe = s("./src/reddit/selectors/tooltip.ts");
			const Me = e => `UserFlairPicker--${e}`,
				Re = Object(we.a)(Ne.a),
				Ae = ({
					flair: e
				}) => d.a.createElement(d.a.Fragment, null, d.a.createElement(Ce.b, {
					flair: Object(A.c)(e),
					forceSmallEmojis: !0
				}), e.textEditable && d.a.createElement(Q.a, {
					className: se.a.userIcon
				}), e.modOnly && d.a.createElement(K.a, {
					className: se.a.modIcon
				})),
				Le = Object(c.c)({
					isDropdownOpen: (e, t) => Object(Pe.b)(Me(t.userName))(e)
				});
			class Fe extends d.a.Component {
				constructor(e) {
					super(e), this.onSetFocus = e => {
						this.setState({
							focusedIndex: e
						})
					}, this.findNextFocusableItem = () => {
						if (void 0 === this.state.focusedIndex) return -1; {
							const e = this.state.focusedIndex + 1;
							if (e <= this.props.templateIds.length - 1) return e
						}
					}, this.onMouseEnter = e => {
						const t = document.getElementById(`focus-${e}`);
						t && (t.focus(), this.onSetFocus(e))
					}, this.findPreviousFocusableItem = () => {
						if (void 0 !== this.state.focusedIndex && -1 !== this.state.focusedIndex) return this.state.focusedIndex - 1
					}, this.onKeyDown = e => {
						if (e.keyCode === Ie.a.ArrowDown)
							if (e.preventDefault(), this.props.isDropdownOpen) {
								const e = this.findNextFocusableItem();
								if (void 0 !== e) {
									const t = document.getElementById(`focus-${e}`);
									t && (t.focus(), t.scrollIntoView({
										block: "nearest"
									})), this.onSetFocus(e)
								}
							} else this.props.onToggleDropdown();
						if (e.keyCode === Ie.a.ArrowUp) {
							e.preventDefault();
							const t = this.findPreviousFocusableItem();
							if (void 0 !== t) {
								const e = document.getElementById(`focus-${t}`);
								e && (e.focus(), e.scrollIntoView({
									block: "nearest"
								})), this.onSetFocus(t)
							}
						}
						if (e.keyCode === Ie.a.Tab && this.props.isDropdownOpen && e.preventDefault(), e.keyCode === Ie.a.Enter) {
							if (e.preventDefault(), e.stopPropagation(), this.props.isDropdownOpen && void 0 !== this.state.focusedIndex) {
								const e = this.props.templateIds[this.state.focusedIndex];
								this.props.onSelectFlairTemplate(e)
							}
							this.props.onToggleDropdown()
						}
					}, this.state = {}
				}
				render() {
					const {
						props: e
					} = this;
					return d.a.createElement("button", {
						className: se.a.dropdownTarget,
						id: Me(e.userName),
						onClick: e.onToggleDropdown,
						onKeyDown: this.onKeyDown
					}, e.selectedTemplateId && e.userFlairTemplates[e.selectedTemplateId] ? d.a.createElement(Ae, {
						flair: e.userFlairTemplates[e.selectedTemplateId]
					}) : a.fbt._("none", null, {
						hk: "ng6B"
					}), d.a.createElement(Te.a, {
						className: se.a.dropdownTriangle
					}), d.a.createElement(Re, {
						className: se.a.dropdownContainer,
						isOpen: e.isDropdownOpen,
						tooltipId: Me(e.userName)
					}, d.a.createElement("button", {
						className: se.a.dropdownRow,
						id: "focus--1",
						onClick: () => e.onSelectFlairTemplate(void 0),
						onMouseEnter: () => this.onMouseEnter(-1),
						tabIndex: -1
					}, a.fbt._("none", null, {
						hk: "ng6B"
					})), e.templateIds.map((t, s) => {
						const n = e.userFlairTemplates[t];
						return d.a.createElement("button", {
							className: se.a.dropdownRow,
							id: `focus-${s}`,
							key: t,
							onClick: () => e.onSelectFlairTemplate(t),
							onMouseEnter: () => this.onMouseEnter(s),
							tabIndex: -1
						}, d.a.createElement(Ae, {
							flair: n
						}))
					})))
				}
			}
			var De = Object(l.b)(Le, (e, t) => ({
				onToggleDropdown: () => e(Object(je.h)({
					tooltipId: Me(t.userName)
				}))
			}))(Fe);
			const Ue = e => `emoji-picker-${e}`,
				Be = Object(A.b)();
			class We extends d.a.PureComponent {
				constructor() {
					super(...arguments), this.onSelectFlairTemplate = e => {
						const t = e && this.props.userFlairTemplates[e],
							s = t ? Object(A.c)(t) : Be;
						this.props.onChange(this.props.username, s)
					}, this.onFlairContentChanged = e => {
						this.props.onChange(this.props.username, e)
					}, this.onChangeCssClass = e => {
						const t = e.target.value,
							s = this.props.flair || Be;
						this.props.onChange(this.props.username, {
							...s,
							cssClass: t
						})
					}, this.removeFlair = () => {
						this.props.onChange(this.props.username, null)
					}
				}
				render() {
					const {
						props: e
					} = this, {
						hasError: t
					} = e, s = e.flair || Be, n = Object(_e.a)(), a = s.templateId, o = a && e.userFlairTemplates[a] || ce.a, r = !!o && o.modOnly, i = !Object(ue.a)(s.cssClass || "");
					return d.a.createElement("div", {
						className: Object(v.a)(se.a.row, t ? se.a.hasError : null)
					}, d.a.createElement("div", {
						className: se.a.errorIndicator
					}, d.a.createElement(y.a, null)), d.a.createElement(ye.a, {
						className: se.a.userLink,
						to: `/user/${e.username}`
					}, d.a.createElement(ke.a, {
						user: e.username,
						tooltipId: `grantuserflair--userhovercard--${e.username}`,
						subredditId: e.subredditId,
						sendHoverCardEvent: ve.a
					}, e.username, d.a.createElement("div", {
						className: se.a.flairContainer
					}, d.a.createElement(Ce.b, {
						flair: s
					})))), d.a.createElement("div", {
						className: se.a.flairDetails
					}, d.a.createElement("div", {
						className: se.a.column
					}, d.a.createElement(De, {
						onSelectFlairTemplate: this.onSelectFlairTemplate,
						selectedTemplateId: a,
						templateIds: e.templateIds,
						userFlairTemplates: e.userFlairTemplates,
						userName: this.props.username
					})), d.a.createElement("div", {
						className: se.a.flairEditColumn
					}, d.a.createElement(n, {
						allowBlank: !e.isChanged,
						emojiPickerId: Ue(e.username),
						flair: s,
						flairTemplateType: Se.d.UserFlair,
						flairTemplate: o,
						helperTextClass: se.a.flairEditHelperText,
						isCompact: !0,
						isFlairModOnly: r,
						onChange: this.onFlairContentChanged,
						subredditId: e.subredditId
					})), d.a.createElement("div", {
						className: se.a.column
					}, d.a.createElement("input", {
						className: Object(v.a)(se.a.textInput, {
							[se.a.cssInputError]: !i
						}),
						value: s.cssClass || "",
						onChange: this.onChangeCssClass,
						disabled: !!o.id
					})), d.a.createElement("button", {
						className: se.a.removeButton,
						onClick: this.removeFlair
					}, d.a.createElement(Oe.a, {
						className: se.a.removeIcon
					}))))
				}
			}
			var He = We;
			const Ve = {},
				qe = Object(R.t)({
					currentPageUrl: R.e
				}),
				Ge = Object(c.c)({
					flairedUserOrder: (e, t) => {
						const s = Object(J.d)(t.subredditId, t.after, t.before);
						return e.pages.modHub.flairedUsers.userOrder[s] || Y
					},
					flairedUsers: (e, t) => e.pages.modHub.flairedUsers.models[t.subredditId],
					isFlairedUsersListPending: e => e.pages.modHub.flairedUsers.api.pending,
					isSearchPending: e => e.pages.modHub.flairedUsers.search.api.pending,
					isUserFlairEnabled: $.a,
					origin: Z.j,
					pageInfo: (e, t) => {
						const s = Object(J.d)(t.subredditId, t.after, t.before);
						return e.pages.modHub.flairedUsers.pageInfo[s]
					},
					searchResult: (e, t) => e.pages.modHub.flairedUsers.search.result,
					userFlairData: $.c
				}),
				ze = Object(l.b)(Ge, (e, {
					subredditId: t
				}) => ({
					deleteUserFlair: (t, s) => e(Object(h.a)(t, s)),
					saveFlairedUser: (s, n) => e(Object(h.c)(s, t, n)),
					searchFlairedUser: s => e(Object(h.d)(t, s))
				}));
			class Ke extends d.a.Component {
				constructor(e) {
					super(e), this.isUnmounted = !1, this.pendingRequestsMap = new Map, this.autoSaveIntervalId = 0, this.processChanges = (e = !1) => {
						this.autoSaveIntervalId || (this.autoSaveIntervalId = window.setInterval(this.processChanges, me));
						const {
							flairedUsers: t
						} = this.props, {
							unsavedChanges: s,
							searchTerm: n
						} = this.state, a = fe(s, t, n);
						ge(a, e).forEach(this.sendChangeToServer), a !== s && this.setState({
							unsavedChanges: a
						})
					}, this.sendChangeToServer = async e => {
						const t = e.username;
						if (this.pendingRequestsMap.get(t)) return;
						const s = this.props.flairedUsers[t] || null;
						this.sendTelemetryEvents(s, e.flair);
						const n = e.flair ? {
							type: pe.Save,
							promise: this.props.saveFlairedUser(t, e.flair)
						} : {
							type: pe.Delete,
							promise: this.props.deleteUserFlair(t, this.props.subredditId)
						};
						this.pendingRequestsMap.set(t, n);
						const a = await n.promise;
						this.pendingRequestsMap.delete(t), this.isUnmounted || this.setState(s => {
							const n = s.unsavedChanges[t];
							return e !== n ? null : {
								unsavedChanges: !0 === a ? Object(m.a)(s.unsavedChanges, t) : {
									...this.state.unsavedChanges,
									[t]: {
										...e,
										apiError: a
									}
								}
							}
						})
					}, this.onFlairChanged = (e, t) => {
						const {
							templates: s
						} = this.props.userFlairData, n = t && t.templateId ? s[t.templateId] : void 0;
						this.setState(s => {
							return {
								unsavedChanges: {
									...s.unsavedChanges,
									[e]: {
										flair: t,
										username: e,
										changedAt: Date.now(),
										clientValidationError: xe(t, n)
									}
								}
							}
						})
					}, this.onSearch = e => {
						this.props.searchFlairedUser(e), this.setState({
							searchTerm: e
						}), this.props.sendEvent(U())
					}, this.onCancelSearch = () => {
						this.setState({
							searchTerm: null
						})
					}, this.onClickNextPage = () => this.props.sendEvent(B()), this.onClickPrevPage = () => this.props.sendEvent(W()), this.renderUserRow = e => {
						const {
							state: t,
							props: s
						} = this, n = s.flairedUsers[e] || null, a = t.unsavedChanges[e], o = a && !he(a) ? a.flair : n;
						return d.a.createElement(He, {
							flair: o,
							hasError: !!a && be(a),
							isChanged: !!a,
							key: e,
							onChange: this.onFlairChanged,
							subredditId: s.subredditId,
							templateIds: s.userFlairData.templateIds,
							userFlairTemplates: s.userFlairData.templates,
							username: e
						})
					}, this.state = {
						searchTerm: null,
						unsavedChanges: Ve
					}
				}
				componentDidUpdate() {
					this.processChanges()
				}
				componentWillUnmount() {
					this.isUnmounted = !0, this.processChanges(!0), window.clearInterval(this.autoSaveIntervalId)
				}
				sendTelemetryEvents(e, t) {
					if (!t) return void this.props.sendEvent(H());
					let s = e || Object(A.b)();
					const n = s.templateId || void 0,
						a = t.templateId || void 0;
					if (a !== n) {
						this.props.sendEvent(G(a));
						const e = t.templateId && this.props.userFlairData.templates[t.templateId];
						s = e ? Object(A.c)(e) : s
					}
					Object(A.p)(t, s) || this.props.sendEvent(q()), t.cssClass !== s.cssClass && this.props.sendEvent(z(t.cssClass || ""))
				}
				getIndicatorStatus() {
					const {
						unsavedChanges: e
					} = this.state;
					if (e === Ve) return null;
					const t = !!r()(e, e => be(e));
					return !!r()(e, e => !be(e)) ? S.a.Pending : t ? S.a.Failed : S.a.Complete
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = this.getIndicatorStatus(), o = e.pageInfo && (e.pageInfo.hasNextPage || e.pageInfo.hasPreviousPage), r = !e.flairedUserOrder.length && !o;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(E.c, {
						className: se.a.topBar
					}, null !== s && d.a.createElement(j, {
						status: s
					})), d.a.createElement(E.a, null, d.a.createElement(E.b, null, a.fbt._("Grant user flair", null, {
						hk: "N1r42"
					}), d.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360028091332`
					})), !e.isUserFlairEnabled && d.a.createElement(b.a, {
						className: se.a.disabledBanner,
						color: M.b.quarantine,
						icon: d.a.createElement(X.a, {
							className: se.a.warningIcon
						}),
						title: a.fbt._("User flair has been disabled for this community", null, {
							hk: "3BBvFe"
						}),
						subtitle: a.fbt._("User flair will not be displayed in posts or comments", null, {
							hk: "3E4WaA"
						})
					}), d.a.createElement(N.b, {
						activeSearchQuery: t.searchTerm,
						onSearch: this.onSearch
					}, e.pageInfo && !t.searchTerm && d.a.createElement(x.a, {
						prevTo: Object(u.a)(Object(p.a)(`${e.origin}${e.currentPageUrl}`), {
							before: e.pageInfo.startCursor
						}),
						prevButtonEnabled: e.pageInfo.hasPreviousPage,
						prevButtonOnClick: this.onClickPrevPage,
						nextButtonEnabled: e.pageInfo.hasNextPage,
						nextButtonOnClick: this.onClickNextPage,
						nextTo: Object(u.a)(Object(p.a)(`${e.origin}${e.currentPageUrl}`), {
							after: e.pageInfo.endCursor
						})
					})), d.a.createElement("div", {
						className: se.a.titleRow
					}, a.fbt._("Username with preview", null, {
						hk: "1RFjbI"
					}), d.a.createElement("div", {
						className: se.a.flairDetails
					}, d.a.createElement("div", {
						className: se.a.column
					}, a.fbt._("Flair template", null, {
						hk: "18cQfH"
					}), d.a.createElement(f.a, {
						className: se.a.infoTooltip
					}, d.a.createElement("div", {
						className: se.a.tooltipText
					}, a.fbt._("Flair templates determine the flair's background colors, text colors, and permissions", null, {
						hk: "4y58Eg"
					})), d.a.createElement("div", {
						className: se.a.tooltipIconContainer
					}, d.a.createElement("div", {
						className: se.a.tooltipIconRow
					}, d.a.createElement(K.a, {
						className: se.a.modIcon
					}), d.a.createElement("span", {
						className: se.a.tooltipIconText
					}, a.fbt._("Available only to mods", null, {
						hk: "2s7Gci"
					}))), d.a.createElement("div", {
						className: se.a.tooltipIconRow
					}, d.a.createElement(Q.a, {
						className: se.a.userIcon
					}), d.a.createElement("span", {
						className: se.a.tooltipIconText
					}, a.fbt._("User editable", null, {
						hk: "3tIGRy"
					})))))), d.a.createElement("div", {
						className: se.a.flairEditColumn
					}, a.fbt._("Flair text", null, {
						hk: "2ab8Up"
					}), d.a.createElement(f.a, {
						text: a.fbt._("Changes the text and emojis within the user flair", null, {
							hk: "4dBW4C"
						})
					})), d.a.createElement("div", {
						className: se.a.column
					}, a.fbt._("Css class", null, {
						hk: "1TNNcJ"
					}), d.a.createElement(f.a, {
						text: a.fbt._("CSS classes determine styling for flair in old Reddit", null, {
							hk: "j4AU"
						})
					})))), t.searchTerm ? d.a.createElement(I.a, {
						cancelSearch: this.onCancelSearch,
						noResultsFound: !e.searchResult,
						searchTerm: t.searchTerm,
						searchPending: e.isSearchPending
					}, e.searchResult && this.renderUserRow(e.searchResult)) : e.isFlairedUsersListPending ? d.a.createElement(T.a, null) : r ? d.a.createElement(ne, null) : e.flairedUserOrder.map(this.renderUserRow), e.pageInfo && !t.searchTerm && d.a.createElement("div", {
						className: se.a.bottomBarRow
					}, d.a.createElement(x.a, {
						prevTo: Object(u.a)(Object(p.a)(`${e.origin}${e.currentPageUrl}`), {
							before: e.pageInfo.startCursor
						}),
						prevButtonEnabled: e.pageInfo.hasPreviousPage,
						prevButtonOnClick: this.onClickPrevPage,
						nextButtonEnabled: e.pageInfo.hasNextPage,
						nextButtonOnClick: this.onClickNextPage,
						nextTo: Object(u.a)(Object(p.a)(`${e.origin}${e.currentPageUrl}`), {
							after: e.pageInfo.endCursor
						})
					}))))
				}
			}
			t.a = qe(ze(Object(P.c)(Ke)))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				r = s("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(i.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return a.a.createElement(o.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, a.a.createElement(r.a, {
					className: e.className,
					hoverId: t,
					sendEvent: e.sendEvent,
					subredditId: e.subredditId,
					tooltipId: e.tooltipId,
					tooltipType: e.tooltipType,
					userName: e.user
				}))
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = s.n(r),
				d = s("./src/lib/lessComponent.tsx");
			const l = d.a.div("IconWrapper", i.a),
				c = d.a.div("TextWrapper", i.a);

			function u(e) {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: r,
					title: d
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(t, i.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, a.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? a.a.createElement(l, null, n) : a.a.createElement(l, null), a.a.createElement(c, null, a.a.createElement("div", {
					className: i.a.title
				}, d), r && a.a.createElement("div", {
					className: i.a.subtitle
				}, r)))
			}
		},
		"./src/reddit/components/InlineSubredditEditing/index.m.less": function(e, t, s) {
			e.exports = {
				tooltipContent: "RrvkJ7ntzKYyaCOxMJ1RM",
				title: "BE2vGjFTJ80XkdBpRRr0p",
				tooltipBody: "_2yezzi8dgIemh3F2q_kvcp",
				topRow: "_1JfvdiRxYTSKf1IIe7DUvM",
				gotIt: "_1MHKCZd72tAgyoZWvIYM-G"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/EmptyState/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_12gWQ2C_gotA8s5-CJIlq9",
				icon: "_3-Fcrds7R5ihAWPAttv3AL",
				title: "_1vL1j4mpTYI5NOR335bInG",
				subtitle: "_3FOOtAw2Q-T7szrSBAbo9i"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/TabBar/index.m.less": function(e, t, s) {
			e.exports = {
				tabBar: "_1ItRVjBpP4aLG0vg-nXbwO",
				tab: "_3A18ggmDWAI5_Fz0nDOs-z",
				selected: "_3U85C8qDDoOUoOINg-E_3S"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/index.m.less": function(e, t, s) {
			e.exports = {
				contentContainer: "_2O3bUryrh35-WVnz9Zoet5",
				content: "_1FTRfhuddBV5YzYiIzObiO",
				grid: "_3i8uEN2ZVREoZOqW0PBJKD",
				header: "_3TFv4L83k0sAQxxxDJCzh9",
				actionHeader: "_3XGx1tfvY30VXMwrnAYMfZ",
				cell: "_30GfT3S_RWhS9B1JiSCaIJ",
				imageCell: "_1mzA539xYQn08RGzbn-Rgl",
				image: "_2UKv8w6-nnOZn6-lOqv57x",
				imagePlaceholder: "_2-8LfoYIQ37smNisBTPrPA",
				title: "_2cEKePFj4PUyuqlM_8uInw",
				caption: "_33iTirQvYAUBeq5vAp6Nr6",
				timeCell: "_1EzbYLhrmLPhhpk2FFAmcj",
				actionCell: "_1JvlfJR1EFT7pnSONpgiXk",
				dropdownSelector: "_2K7txHCmQX-J_7K7zNiCM1",
				byModerator: "_3czV_FVsdvYbnimTT57vCK",
				line: "_22JqeR_rL-tI8mxRb7N8Mq",
				loadingTextLong: "_2AZFpVa_LwltM1gTwCGIDe",
				loadingTextShort: "_1LWRk2sNojXWsOI1Y85nf7"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return H
			})), s.d(t, "b", (function() {
				return V
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/governance/errorToast.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				c = s("./src/reddit/contexts/ApiContext.tsx"),
				u = s("./src/reddit/endpoints/economics/uploadedAssets.ts"),
				m = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				b = s("./src/reddit/components/ModHub/BadgesAndEmotes/EmptyState/index.m.less"),
				g = s.n(b);
			const f = {
				[u.a.Uploaded]: {
					title: () => n.fbt._("No more to review!", null, {
						hk: "2rF58X"
					}),
					subtitle: () => n.fbt._("There are no new submissions", null, {
						hk: "3h54Ot"
					})
				},
				[u.a.Approved]: {
					title: () => n.fbt._("Nothing approved yet", null, {
						hk: "157fUO"
					}),
					subtitle: () => n.fbt._("Submissions will be here once you approve them", null, {
						hk: "pLc2c"
					})
				},
				[u.a.Rejected]: {
					title: () => n.fbt._("Nothing rejected yet", null, {
						hk: "1XN9kw"
					}),
					subtitle: () => n.fbt._("Submissions will be here once you reject them", null, {
						hk: "2IYFHB"
					})
				}
			};

			function x(e) {
				const t = f[e.selectedStatus];
				return o.a.createElement("div", {
					className: g.a.container
				}, o.a.createElement(h.a, {
					className: g.a.icon
				}), o.a.createElement("h3", {
					className: g.a.title
				}, t.title()), o.a.createElement("p", {
					className: g.a.subtitle
				}, t.subtitle()))
			}
			var E = s("./src/reddit/components/AuthorLink/index.tsx"),
				v = s("./src/reddit/controls/DropdownSelector/index.tsx"),
				C = s("./src/reddit/components/ModHub/BadgesAndEmotes/index.m.less"),
				_ = s.n(C);
			const k = p.a.div("cell", _.a),
				y = () => [{
					displayText: n.fbt._("New", null, {
						hk: "2xTBYx"
					}),
					value: u.a.Uploaded
				}, {
					displayText: n.fbt._("Approved", null, {
						hk: "1xx5DL"
					}),
					value: u.a.Approved
				}, {
					displayText: n.fbt._("Rejected", null, {
						hk: "25TTJE"
					}),
					value: u.a.Rejected
				}],
				O = () => y().slice(1, 3),
				S = new Intl.DateTimeFormat(void 0, {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric"
				}).format;

			function w(e) {
				const {
					item: t,
					onItemAction: s
				} = e, a = y().find(e => e.value === t.status);
				let r = t.type === u.b.Badge ? t.extra.description : void 0;
				return r && r.endsWith(" u/" + t.uploader) && (r = r.slice(0, r.length - t.uploader.length - 3)), o.a.createElement(o.a.Fragment, null, o.a.createElement(k, {
					className: _.a.imageCell
				}, o.a.createElement("div", {
					className: _.a.image,
					style: {
						backgroundImage: `url(${t.url})`
					}
				})), o.a.createElement(k, {
					className: _.a.nameCell
				}, o.a.createElement("div", {
					className: _.a.title
				}, t.type === u.b.Emote ? `:${t.name}:` : t.name), o.a.createElement("div", {
					className: _.a.caption
				}, r, " ", o.a.createElement(E.a, {
					author: t.uploader,
					style: {
						color: t.type === u.b.Badge ? t.extra.color : void 0
					}
				}, "u/", t.uploader))), o.a.createElement(k, {
					className: _.a.timeCell
				}, S(t.createdAt)), o.a.createElement(k, {
					className: _.a.actionCell
				}, o.a.createElement(v.a, {
					className: _.a.dropdownSelector,
					displayText: a ? a.displayText : "",
					options: O(),
					onSelect: e => s(t, e.value),
					isCompactStyle: !0
				}), t.status !== u.a.Uploaded && !!t.moderator && !!t.modifiedAt && o.a.createElement("div", {
					className: _.a.byModerator
				}, n.fbt._("by u/ {moderator}, {time-modified}", [n.fbt._param("moderator", t.moderator), n.fbt._param("time-modified", S(t.modifiedAt))], {
					hk: "25I5ES"
				}))), o.a.createElement("div", {
					className: _.a.line
				}))
			}
			var j = s("./src/lib/classNames/index.ts");
			const I = p.a.div("cell", _.a),
				N = () => o.a.createElement(o.a.Fragment, null, o.a.createElement(I, {
					className: _.a.imageCell
				}, o.a.createElement("div", {
					className: Object(j.a)(_.a.image, _.a.imagePlaceholder)
				})), o.a.createElement(I, {
					className: _.a.nameCell
				}, o.a.createElement("div", {
					className: _.a.loadingTextLong
				})), o.a.createElement(I, null, o.a.createElement("div", {
					className: _.a.loadingTextShort
				})), o.a.createElement(I, {
					className: _.a.actionCell
				}, o.a.createElement("div", {
					className: _.a.loadingTextShort
				})), o.a.createElement("div", {
					className: _.a.line
				}));
			var T = () => o.a.createElement(o.a.Fragment, null, o.a.createElement(N, null), o.a.createElement(N, null), o.a.createElement(N, null), o.a.createElement(N, null));
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = p.a.div("header", _.a);

			function R(e) {
				const {
					onAssetAction: t,
					assets: s,
					selectedStatus: n
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: _.a.grid
				}, o.a.createElement(M, null, P._("Image", null, {
					hk: "3ImlXy"
				})), o.a.createElement(M, null, P._("Name and Description", null, {
					hk: "ZMWPH"
				})), o.a.createElement(M, null, P._("Submission Time", null, {
					hk: "3qPqQa"
				})), o.a.createElement(M, {
					className: _.a.actionHeader
				}, P._("Action", null, {
					hk: "27SYzP"
				})), !s && o.a.createElement(T, null), s && !!s.length && s.map(e => o.a.createElement(w, {
					item: e,
					key: e.name,
					onItemAction: t
				}))), s && !s.length && o.a.createElement(x, {
					selectedStatus: n
				}))
			}
			var A = s("./src/reddit/components/ModHub/BadgesAndEmotes/TabBar/index.m.less"),
				L = s.n(A);
			const F = e => o.a.createElement("button", {
					className: Object(j.a)(L.a.tab, {
						[L.a.selected]: e.selected
					}),
					onClick: e.onClick
				}, e.children),
				D = e => o.a.createElement("div", {
					className: L.a.tabBar
				}, [u.a.Uploaded, u.a.Approved, u.a.Rejected].map(t => o.a.createElement(F, {
					onClick: () => e.onTabSelected(t),
					selected: t === e.value,
					value: t,
					key: t
				}, (e => {
					switch (e) {
						case u.a.Uploaded:
							return n.fbt._("Uploaded", null, {
								hk: "1AgqhR"
							});
						case u.a.Approved:
							return n.fbt._("Approved", null, {
								hk: "37lIL9"
							});
						case u.a.Rejected:
							return n.fbt._("Rejected", null, {
								hk: "W16pI"
							});
						default:
							return n.fbt._("Uploaded", null, {
								hk: "1AgqhR"
							})
					}
				})(t))));

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class B extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						selectedStatus: u.a.Uploaded
					}, this.onTabChange = async e => {
						this.setState({
							assets: void 0,
							selectedStatus: e
						});
						const t = await Object(u.c)(this.props.apiContext(), this.props.subredditId, this.props.assetType, e);
						t.ok ? this.setState({
							assets: t.body.assets || []
						}) : this.props.onGovernanceError(t.error)
					}, this.onAssetAction = async (e, t) => {
						if (e.status === t) return;
						const s = this.props.assetType,
							n = await Object(u.d)(this.props.apiContext(), this.props.subredditId, s, e.id, {
								status: t
							});
						if (n.ok) {
							const n = this.state.assets;
							this.setState({
								assets: n && n.filter(t => t !== e)
							}), t === u.a.Approved ? this.props.onApproved(s) : t === u.a.Rejected && this.props.onRejected(s)
						} else this.props.onGovernanceError(n.error)
					}
				}
				componentDidMount() {
					this.onTabChange(this.state.selectedStatus)
				}
				render() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(l.a, {
						className: _.a.contentContainer
					}, o.a.createElement(l.b, null, this.props.assetType === u.b.Badge ? n.fbt._("User uploaded badges", null, {
						hk: "3qGdzT"
					}) : n.fbt._("User uploaded emotes", null, {
						hk: "1GJiVz"
					})), o.a.createElement("div", {
						className: _.a.content
					}, o.a.createElement(D, {
						onTabSelected: this.onTabChange,
						value: this.state.selectedStatus
					}), o.a.createElement(R, {
						selectedStatus: this.state.selectedStatus,
						assets: this.state.assets,
						onAssetAction: this.onAssetAction
					}))))
				}
			}
			const W = Object(c.b)(Object(r.b)(void 0, (e, t) => ({
					onGovernanceError: t => Object(i.a)(e, t),
					onApproved: t => e(Object(d.f)({
						kind: m.b.SuccessCommunity,
						text: t === u.b.Badge ? n.fbt._("Approved badge!", null, {
							hk: "3B3r07"
						}) : n.fbt._("Approved emote!", null, {
							hk: "tWzSE"
						})
					})),
					onRejected: t => e(Object(d.f)({
						kind: m.b.SuccessCommunity,
						text: t === u.b.Badge ? n.fbt._("Rejected badge", null, {
							hk: "1X6cSg"
						}) : n.fbt._("Rejected emote", null, {
							hk: "3RS2kT"
						})
					}))
				}))(B)),
				H = e => o.a.createElement(W, U({
					assetType: u.b.Badge
				}, e)),
				V = e => o.a.createElement(W, U({
					assetType: u.b.Emote
				}, e))
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/ModHub/Content/index.m.less"),
				d = s.n(i);
			t.a = e => r.a.createElement("div", {
				className: d.a.noPermissions
			}, r.a.createElement("img", {
				className: d.a.rememberTheHuman,
				src: `${n.a.assetPath}/img/content-gate-icons/remember-the-human.png`
			}), e.isModerator ? a.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
				hk: "4wUDIF"
			}) : a.fbt._("Sorry, this is a moderator-only page", null, {
				hk: "2BZEIA"
			}), r.a.createElement("div", {
				className: d.a.noPermissionsSmallText
			}, e.isModerator ? a.fbt._("You need to change your mod permissions to view this page", null, {
				hk: "RS9sd"
			}) : e.subredditDisplayText ? a.fbt._("You must be a moderator of {subredditName} to view this page", [a.fbt._param("subredditName", e.subredditDisplayText)], {
				hk: "8eU68"
			}) : a.fbt._("You must be a moderator to view this page", null, {
				hk: "2N7TXH"
			})))
		},
		"./src/reddit/components/ModHub/Content/WelcomeMessage.m.less": function(e, t, s) {
			e.exports = {
				ModerateIcon: "khXWcHNm7cUFKCGgNfNPy",
				moderateIcon: "khXWcHNm7cUFKCGgNfNPy",
				ModHubWelcomeMessage: "_1WUhYUiKwTt20VZZiLFRXQ",
				modHubWelcomeMessage: "_1WUhYUiKwTt20VZZiLFRXQ"
			}
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "CgYEK3BSwEitV3N5dS53Y",
				titleFontH2: "WtxSi4x3A6EHSYOlNO6dC",
				titleFontH3: "_1s8gRCw9ZEGeZdDLi4SjEs",
				titleFontH4: "iJgEN-DVO9xH1ING9PGia",
				titleFontH5: "_1Pk2HmstIcHsVCyXL0s7WR",
				titleFontH6: "_27G51xRMOXRk6p8hF2iFF4",
				metadataFont: "_3qFnOmsyfNVU4dOg-nT7AH",
				flairFont: "IHVtmv3d9vjFTy7sOv4nb",
				labelsFont: "_3veeqeCCuB-y_5Uz7aZwNo",
				actionFont: "_2GGs_1qJNsgRTBkJjB3JyV",
				smallButtonFont: "_1wMkSw4TKFwpURuJjoijc8",
				largeButtonFont: "_37n4mei_IKI2b0S9cUN6kj",
				strongTextFont: "_3iiIycx9Jvd-wtbZRRlyrS",
				tabFont: "_2uzD_ZiaRuda1gPntdeFV-",
				buttonFontXS: "X1zM6CuE0STTL567u2KEr",
				buttonFontXs: "X1zM6CuE0STTL567u2KEr",
				buttonFontS: "_35xxostuR-t_KnCQpTxb0F",
				buttonFontM: "_1siVd6fOXNWDs8SbSH_HQ5",
				buttonFontL: "_1mAbhFs88EE9k-jaJMzlbM",
				buttonFontXL: "FxQ8KBPxEROiwB1EG0sLr",
				buttonFontXl: "FxQ8KBPxEROiwB1EG0sLr",
				bodyFontH1: "_18F7ywSczMXfDxvUzIkKou",
				bodyFontH2: "_2gpSS7qXgM9-crN9KgQr_O",
				bodyFontH3: "-JM-6-h-SOMTCi9a5ZG0g",
				bodyFontH4: "_3ZVYgWzZxJjL_cahDG32l",
				bodyFontH5: "_15iJEJUM-il2Ud09a9yqhY",
				bodyFontH6: "_2kFIrTxjdWaprwQ9leev5x",
				bodyFont: "_38q9ZzND20FKMoX8BeB0u8",
				bodyFontSmall: "_1tFfFAHeLftmld2a2M4yIs",
				bodyFontMono: "_1N1SJCd40K_9LeW3MSWULf",
				rememberTheHuman: "_2S6IM2TPtTriI4r_2Op1Od",
				noPermissions: "_3jaCG74Q3u55JqGJy3u664",
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu"
			}
		},
		"./src/reddit/components/ModHub/Content/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/assertNever.ts"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/ApprovedSubmitterList/index.tsx"),
				l = s("./src/reddit/components/BannedUserList/index.tsx"),
				c = s("./src/reddit/components/CommunityAwardList/index.tsx"),
				u = s("./src/reddit/components/CommunitySettings/index.tsx"),
				m = s("./src/reddit/components/GrantUserFlair/index.tsx"),
				p = s("./src/reddit/components/ModerationLog/index.tsx"),
				h = s("./src/reddit/components/ModeratorsList/index.tsx"),
				b = s("./src/reddit/components/ModHub/BadgesAndEmotes/index.tsx"),
				g = s("./src/reddit/components/ModHub/Emojis/index.tsx"),
				f = s("./src/reddit/components/MutedUserList/index.tsx"),
				x = s("./src/reddit/components/RemovalReasons/index.tsx"),
				E = s("./src/reddit/components/Streaming/ModSettings/index.tsx"),
				v = s("./src/reddit/components/SubredditContent/EventPostContent/index.tsx"),
				C = s("./src/reddit/components/SubredditContent/PredictionsContent/async.ts"),
				_ = s("./src/reddit/components/SubredditContent/ScheduledPostContent/index.tsx"),
				k = s("./src/reddit/components/SubredditRules/index.tsx");
			const y = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-ContentControls",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ModHub-ContentControls").then(s.bind(null, "./src/reddit/components/ModHub/ContentControls/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/ContentControls/index.tsx"
					}
				}),
				O = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-ChatSettings",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ModHub-ChatSettings").then(s.bind(null, "./src/reddit/components/ModHub/ChatSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/ChatSettings/index.tsx"
					}
				}),
				S = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-TrafficStats",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ModHub-TrafficStats").then(s.bind(null, "./src/reddit/components/ModHub/TrafficStats/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/TrafficStats/index.tsx"
					}
				}),
				w = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-flairs-PostFlairManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement"), s.e("reddit-components-ModHub-flairs-PostFlairManagement")]).then(s.bind(null, "./src/reddit/components/ModHub/flairs/PostFlairManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/flairs/PostFlairManagement/index.tsx"
					}
				}),
				j = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-flairs-UserFlairManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement"), s.e("reddit-components-ModHub-flairs-UserFlairManagement")]).then(s.bind(null, "./src/reddit/components/ModHub/flairs/UserFlairManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/flairs/UserFlairManagement/index.tsx"
					}
				}),
				I = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-Wiki-ModHubWikiManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), s.e("reddit-components-Wiki-ModHubWikiManagement")]).then(s.bind(null, "./src/reddit/components/Wiki/ModHubWikiManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Wiki/ModHubWikiManagement/index.tsx"
					}
				}),
				N = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-Content-ModQueue",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), s.e("reddit-components-ModHub-Content-ModQueue")]).then(s.bind(null, "./src/reddit/components/ModHub/Content/ModQueue.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/Content/ModQueue.tsx"
					}
				}),
				T = e => {
					const {
						layout: t,
						pageName: s,
						postTypeFilter: n,
						subpageName: a,
						...T
					} = e, P = {
						...T,
						subredditId: e.subreddit.id
					};
					switch (s) {
						case i.Wb.Removal:
							return o.a.createElement(x.a, {
								subredditId: e.subreddit.id,
								sendEventWithName: e.sendEventWithName
							});
						case i.Wb.Contributors:
							return o.a.createElement(d.a, P);
						case i.Wb.Banned:
							return o.a.createElement(l.a, P);
						case i.Wb.Streaming:
							return o.a.createElement(E.a, {
								subredditName: e.subreddit.name,
								subredditId: e.subreddit.id
							});
						case i.Wb.Muted:
							return o.a.createElement(f.a, P);
						case i.Wb.Moderators:
							return o.a.createElement(h.a, P);
						case i.Wb.Modlog:
							return o.a.createElement(p.a, P);
						case i.Wb.ContentControls:
							return o.a.createElement(y, {
								subredditName: e.subreddit.name
							});
						case i.Wb.ChatSettings:
							return o.a.createElement(O, {
								subredditName: e.subreddit.name,
								subredditId: e.subreddit.id
							});
						case i.Wb.Flair:
							return o.a.createElement(m.a, {
								after: e.after,
								before: e.before,
								subredditId: e.subreddit.id
							});
						case i.Wb.PostFlair:
							return o.a.createElement(w, {
								subredditId: e.subreddit.id
							});
						case i.Wb.UserFlair:
							return o.a.createElement(j, {
								subredditId: e.subreddit.id
							});
						case i.Wb.Badges:
							return o.a.createElement(b.a, {
								subredditId: e.subreddit.id
							});
						case i.Wb.Emotes:
							return o.a.createElement(b.b, {
								subredditId: e.subreddit.id
							});
						case i.Wb.SubredditRules:
							return o.a.createElement(k.a, {
								subreddit: e.subreddit
							});
						case i.Wb.CommunitySettings:
							return o.a.createElement(u.a, {
								subredditId: e.subreddit.id,
								subpageName: e.subpageName,
								subredditName: e.subreddit.name
							});
						case i.Wb.Modqueue:
						case i.Wb.Reports:
						case i.Wb.Spam:
						case i.Wb.Edited:
						case i.Wb.Unmoderated:
							return o.a.createElement(N, {
								after: e.after,
								layout: t,
								page: e.page,
								pageName: s,
								postTypeFilter: n,
								sendEventWithName: e.sendEventWithName,
								subredditName: e.subreddit.name
							});
						case i.Wb.Awards:
							return o.a.createElement(c.a, {
								subredditOrProfile: e.subreddit,
								subredditOrProfileId: e.subreddit.id,
								moderatorPermissions: e.moderatorPermissions
							});
						case i.Wb.Emojis:
							return o.a.createElement(g.a, {
								subreddit: e.subreddit
							});
						case i.Wb.Wiki:
						case i.Wb.WikiContributors:
						case i.Wb.WikiBanned:
							return o.a.createElement(I, {
								subreddit: e.subreddit
							});
						case i.Wb.Traffic:
							return o.a.createElement(S, {
								subreddit: e.subreddit
							});
						case i.Wb.SubredditContent:
							return null;
						case i.Wb.ScheduledPostContent:
							return o.a.createElement(_.a, {
								subreddit: e.subreddit
							});
						case i.Wb.EventPostContent:
							return o.a.createElement(v.a, {
								subredditName: e.subreddit.name
							});
						case i.Wb.Predictions:
							return o.a.createElement(C.a, {
								subreddit: e.subreddit
							});
						default:
							return Object(r.a)(s)
					}
				};
			t.a = T
		},
		"./src/reddit/components/ModHub/Emojis/EmojiUploadModal/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_20ADRJAodM5zU1OpvNEeRz",
				checkboxText: "_21Bw38NODPHxkJ8zAXjoUZ",
				closeButton: "_3m2cog1fzR2zNYfyXI2GUB",
				emojiDisplay: "_1mMSj2QBZEQ97i-4y3-WOp",
				emojiNameDisplay: "_2lbIQVKPZ4LHDNpBLwSOps",
				imageDisplay: "_3BXziWyChS-zhQ5XC9lt4k",
				appearsIn: "_1DhToTbLLM2OC-Ze5nDwCq",
				imageTitle: "_2KrLezTGMfd18btz-KkYMi",
				modalBody: "_1PLlW-_ZV0vWQQ6LS1Z2lH",
				modalAddButton: "_1vUjBClk27uHOAYH__0rj9",
				modalCancelButton: "_23RRFTkR9NKrC22rmMDNfI",
				modFlairOnlyToggle: "_19ExxuLL5lOZW35TZFXIHf",
				modIcon: "_3ta-U9hY9R1H_BRwYv1zhl",
				modProTip: "_2yN7aUrL8peCADm-u303LV",
				modProTips: "_3WtRXJc1jCLpCEw7-mlEBU",
				proTip: "_8wjmRK1w6qEGzue3BNNOA",
				modProTipTitle: "_392GI--ZxhpUHn1eRTKzqA",
				tipList: "_3PPlagKiQrtoOsW4pcf3vc"
			}
		},
		"./src/reddit/components/ModHub/Emojis/EmojiUploader/index.m.less": function(e, t, s) {
			e.exports = {
				alertIcon: "_34rhMfrLYNSjUkhTK958Um",
				characterCountdown: "_15Hq3tMBKH4TWo9OJs8gny",
				clearIcon: "aCmT6tHKACP3PLk6IU6XT",
				duplicatesIcon: "Eq88P0Zb-rOoo4N5OL5uk",
				duplicateWarning: "DRp2YTik6Ln3yUKp7LBUv",
				editEmojiFooter: "_2ZoRiRDs45wlLK-ZnHzUh",
				editEmojiDisplay: "_2rDJJ0Uk_ySvUA9QNoKoKU",
				emojiDisplays: "_2FsakuX5ZR_IIPcwXQu0eD",
				errorText: "_3bRRwpzb2xfP5erPt9R6Cg",
				expandLeft: "_2byjR1IbLclRfoyvyjMDUz",
				iconSpacer: "_3tWeESqi0MQaqN5wKqkv68",
				imageDisplay: "_1MHWj3sdAGALX7r7UzFF0J",
				duplicateInput: "_280zGglckljUYhFjwaBt14",
				input: "_3xzW-TBy6RXHXBjCE9Yz7s",
				inputPlaceholder: "_1964bAdk8xBAb8-d_Mthtt",
				modalAddButton: "_2yQ10LXNPJ6antT2NgaTmI",
				modalCancelButton: "_31Qk2tb7PaP2XWWL2o4HM1",
				modProTip: "NSSpRN8n70A1TesDNcvxE",
				progressBar: "_3EbPa1JwqT9b_QgXnHzJsx",
				innerBarClassName: "_3CJpdsYAp2vfEOO_U7AaO8",
				progressText: "Wz5fdVLDZuS4d-ix-j4s9",
				replacingDescription: "_1oXr6AKswirSKypchDoX1n",
				replacingTitle: "oNyr5QxUcemiI3SFwjhvc",
				uploadingTitle: "_3ZEFRZKrLVT92hTIG7sRa9",
				textButton: "_3ZzQTZKV1t84-ND6HHwnsx",
				uploaderContainer: "OCFZ6HIQUbokDXiubxQEZ"
			}
		},
		"./src/reddit/components/ModHub/Emojis/index.m.less": function(e, t, s) {
			e.exports = {
				alertIcon: "_3x5p0Ujs6EWdeLO8-fVE7v",
				emojisDisabled: "_2H7y73ZptDGSake8tFEj0n",
				labelTitle: "_2R2K1Sz81kscliWYqOq1xU",
				labelDescription: "_1TqFvv__UfmckLHp5llo7q",
				leftForm: "_22aW9zYAhDGH2HdlJ-WWIM",
				modalBody: "_1_UK8ZmVC7e_nkeSs5CGnA",
				modalCloseButton: "_2-arZqA5i-aG-76OM9aj7k",
				modalEnableSection: "_2Wd3qBH4SU1NauwzVOQbVT",
				modalEmojiSizeSection: "_3PsrWxvZyoYyzlCO8-teTE",
				disabledSection: "nviCef6_SvGHUNBJ0PXCH",
				customSizesForm: "YV6F0NfRo0VVVRzgk8aWf",
				emojiSizeBlock: "_1W4FjSOnfJWdtKYBcNtUYO",
				emojiDimensions: "_1_bSuIYPhn5kOylTKydVsO",
				emojiDimensionInput: "e4AoJYmrnNFhWAXR_KBWX",
				sizeLimitText: "_3bUpAXL4dOTbZTUE9bJ_5s",
				sizeLimitTextWarning: "_2JlgfupPT3v8ScLuT7NYXC",
				modalFooter: "_2R2UP3vtcyZqyNdUy9Y0nX",
				modalSubmitButton: "w7T2GA8_RqtkSpD4h6YKH",
				modalCancelButton: "_2wvHObzKgyjObCvFZ0QOp0",
				rightForm: "_1eE1s4H4f1_A3ck0iF679O",
				row: "_2NQoOHp9q7uhb8h4XdVWK",
				displayWrapper: "jiCIuKa0E1BjfGfUV407r",
				emojiDisplay: "_32BxZer8uLzSVJMZqqo95_",
				emojiName: "_2hJHG1X01WKzuznOL4l6ge",
				appears: "ZVOiCMvsomJLwhS8k4VPP",
				permissions: "UxdnKubszq3iR9sJGFwiY",
				buttonWrapper: "PflXNgwgKckPGaFe9wW8V",
				editEmoji: "_3RR0-7gyjso1AHuVhVbb6u",
				editSnoomoji: "FCFv4UPC_NQjiTCEBoOCD",
				trashIcon: "_2l2KeCLkXUEz_czKdpFqSw",
				settingsButton: "_2dh14d_OrE4Etrg44_cb4t",
				toggleSwitch: "_17kocpcRdOCXJwPiOk68B-",
				topRow: "_2oevuimQpT3hztJ5Rpf_hy",
				appearsTitle: "_1Qzxm6lOFpTR3O3hzKloA9",
				imageTitle: "_1NOoO9mz09cpZjIRT9nHTh",
				nameTitle: "_1Ra9yqtrrSj9q0akrKs83v",
				permissionsTitle: "_1gNO8_Ywz6va1MbMV7-jDG",
				titleTooltip: "_279Uba_Gpg0WVLV8efIdK_"
			}
		},
		"./src/reddit/components/ModHub/Emojis/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/map.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/emoji.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				g = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				x = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				E = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/constants/colors.ts"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				k = s("./src/reddit/selectors/telemetry.ts");
			const y = e => ({
					subreddit: k.subreddit(e),
					profile: k.profile(e),
					userSubreddit: k.userSubreddit(e)
				}),
				O = (e, t) => s => ({
					source: "emoji",
					action: "toggle",
					noun: e,
					actionInfo: {
						settingValue: t ? "on" : "off"
					},
					...y(s)
				}),
				S = e => t => ({
					source: "emoji",
					action: "click",
					noun: e,
					...y(t)
				}),
				w = (e, t) => s => ({
					source: "emoji",
					action: "click",
					noun: e,
					actionInfo: k.actionInfo(s, {
						count: t
					}),
					...y(s)
				});
			var j = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				I = s("./src/reddit/selectors/activeModalId.ts"),
				N = s("./src/reddit/selectors/emojis.ts"),
				T = s("./src/reddit/components/ModHub/Emojis/index.m.less"),
				P = s.n(T),
				M = s("./src/reddit/controls/ImageDisplay/index.tsx"),
				R = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				A = s("./src/reddit/layout/row/Inline/index.tsx");
			const L = u.a.span("appears", P.a),
				F = u.a.span("buttonWrapper", P.a),
				D = u.a.span("displayWrapper", P.a),
				U = u.a.wrapped(M.a, "emojiDisplay", P.a),
				B = u.a.span("emojiName", P.a),
				W = u.a.span("permissions", P.a),
				H = u.a.wrapped(A.a, "row", P.a),
				V = u.a.wrapped(R.b, "trashIcon", P.a);
			var q = e => d.a.createElement(H, null, d.a.createElement(D, null, d.a.createElement(U, {
					backgroundImage: e.emoji.url
				})), d.a.createElement(B, null, e.emoji.name), d.a.createElement(L, null, ((e, t) => e && t ? a.fbt._("Post flair, user flair", null, {
					hk: "gLvKb"
				}) : e ? a.fbt._("Post flair", null, {
					hk: "dcIoz"
				}) : t ? a.fbt._("User flair", null, {
					hk: "4fQagx"
				}) : "")(e.emoji.postFlairAllowed, e.emoji.userFlairAllowed)), d.a.createElement(W, null, e.emoji.modFlairOnly && a.fbt._("Mod only", null, {
					hk: "NMZoE"
				})), d.a.createElement(F, null, d.a.createElement(_.o, {
					className: e.isSnoomoji ? P.a.editSnoomoji : P.a.editEmoji,
					onClick: () => e.onEdit(e.emoji, e.isSnoomoji)
				}, a.fbt._("Edit", null, {
					hk: "1nftDt"
				})), !e.isSnoomoji && d.a.createElement("button", {
					onClick: () => e.onRemove(e.emoji.name)
				}, d.a.createElement(V, null)))),
				G = s("./node_modules/lodash/clamp.js"),
				z = s.n(G),
				K = s("./src/higherOrderComponents/asModal/index.tsx"),
				X = s("./src/lib/classNames/index.ts"),
				Q = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				J = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				Y = s("./src/reddit/controls/TextButton/index.tsx"),
				Z = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				$ = s("./src/reddit/selectors/subreddit.ts"),
				ee = s("./src/reddit/controls/ToggleSwitch/index.tsx");
			const te = u.a.span("labelDescription", P.a),
				se = u.a.span("labelTitle", P.a),
				ne = u.a.div("leftForm", P.a),
				ae = u.a.div("rightForm", P.a),
				oe = u.a.wrapped(ee.a, "toggleSwitch", P.a);
			var re = e => d.a.createElement("div", {
				className: e.className
			}, d.a.createElement(ne, null, d.a.createElement(se, null, a.fbt._("{title}", [a.fbt._param("title", e.title)], {
				hk: "4bYhaP"
			})), d.a.createElement(te, null, a.fbt._("{description}", [a.fbt._param("description", e.description)], {
				hk: "1lFxbr"
			}))), d.a.createElement(ae, null, d.a.createElement(oe, {
				on: e.on,
				onToggle: e.onToggle
			})));
			const ie = 40,
				de = 16,
				le = {
					width: 32,
					height: 32
				},
				ce = e => {
					const t = parseInt(e, 10) || 0;
					return z()(t, 1, ie)
				},
				ue = u.a.wrapped(J.c, "emojiDimensionInput", P.a),
				me = u.a.span("emojiDimensions", P.a),
				pe = u.a.span("emojiSizeBlock", P.a),
				he = u.a.wrapped(re, "modalEnableSection", P.a),
				be = u.a.wrapped(Q.d, "modalBody", P.a),
				ge = u.a.wrapped(Q.a, "modalCancelButton", P.a),
				fe = u.a.wrapped(Y.a, "modalCloseButton", P.a),
				xe = u.a.wrapped(Q.f, "modalFooter", P.a),
				Ee = u.a.wrapped(_.i, "modalSubmitButton", P.a),
				ve = Object(c.c)({
					emojisCustomSize: (e, t) => Object($.x)(e, {
						subredditName: t.subreddit.name
					}).emojisCustomSize,
					isEmojisEnabled: (e, t) => Object($.x)(e, {
						subredditName: t.subreddit.name
					}).emojisEnabled
				}),
				Ce = Object(l.b)(ve, (e, {
					subreddit: t
				}) => ({
					setCustomSize: s => e(Object(m.n)(t.id, s)),
					toggleEnableEmojis: s => e(Object(m.k)(t.id, s))
				}));
			class _e extends d.a.Component {
				constructor(e) {
					super(e), this.handleEmojiSizesToggle = () => this.setState({
						customSizeEnabled: !this.state.customSizeEnabled
					}), this.handleEnableEmojisToggle = () => this.setState({
						emojisEnabled: !this.state.emojisEnabled
					}), this.handleWidthChange = e => {
						const t = ce(e.target.value);
						this.setState({
							width: t
						})
					}, this.handleHeightChange = e => {
						const t = ce(e.target.value);
						this.setState({
							height: t
						})
					}, this.enableHasBeenToggled = () => this.props.isEmojisEnabled !== this.state.emojisEnabled, this.sizeHasBeenToggled = () => !!this.props.emojisCustomSize !== this.state.customSizeEnabled, this.sizeHasBeenEdited = () => !(!this.props.emojisCustomSize || !this.state.customSizeEnabled) && (this.props.emojisCustomSize[0] !== this.state.width || this.props.emojisCustomSize[1] !== this.state.height), this.canSave = () => this.enableHasBeenToggled() || this.sizeHasBeenToggled() || this.sizeHasBeenEdited(), this.onSave = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.enableHasBeenToggled() && (e.toggleEnableEmojis(t.emojisEnabled), e.sendEvent(O("enable", t.emojisEnabled))), this.sizeHasBeenToggled() || this.sizeHasBeenEdited()) {
							const s = t.customSizeEnabled ? {
								width: Math.max(t.width, de),
								height: Math.max(t.height, de)
							} : void 0;
							e.setCustomSize(s), e.sendEvent(O("custom_sizing", t.customSizeEnabled))
						}
						e.toggleModal(), e.sendEvent(S("save_emoji_settings"))
					}, this.state = {
						customSizeEnabled: !!e.emojisCustomSize,
						emojisEnabled: e.isEmojisEnabled,
						height: e.emojisCustomSize ? e.emojisCustomSize[1] : le.height,
						width: e.emojisCustomSize ? e.emojisCustomSize[0] : le.width
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = t.customSizeEnabled && (t.width < de || t.height < de), n = s ? a.fbt._("Invalid number, must be between {minSize} to {maxSize}px", [a.fbt._param("minSize", de.toString()), a.fbt._param("maxSize", ie.toString())], {
						hk: "3bkWk5"
					}) : a.fbt._("Must be between {minSize} to {maxSize}px", [a.fbt._param("minSize", de.toString()), a.fbt._param("maxSize", ie.toString())], {
						hk: "1Gp9cj"
					});
					return d.a.createElement(be, null, d.a.createElement(Q.h, null, d.a.createElement(Z.a, null, d.a.createElement(Q.p, null, a.fbt._("Emoji settings", null, {
						hk: "1GjUM3"
					})), d.a.createElement(fe, {
						onClick: e.toggleModal
					}, d.a.createElement(Q.b, null)))), d.a.createElement(Q.k, null, d.a.createElement(he, {
						description: "Allow emojis to be used in post and user flair within your community",
						on: t.emojisEnabled,
						onToggle: this.handleEnableEmojisToggle,
						title: "Enable emojis in this community"
					}), d.a.createElement(re, {
						className: t.emojisEnabled ? P.a.modalEmojiSizeSection : Object(X.a)(P.a.modalEmojiSizeSection, P.a.disabledSection),
						description: "Enables emojis to be displayed at custom sizes for user flair in comments. Emojis will be displayed 16 x 16px everywhere else.",
						on: t.customSizeEnabled,
						onToggle: this.handleEmojiSizesToggle,
						title: "Custom sized emojis"
					}), d.a.createElement("span", {
						className: t.emojisEnabled && t.customSizeEnabled ? P.a.customSizesForm : Object(X.a)(P.a.customSizesForm, P.a.disabledSection)
					}, d.a.createElement(pe, null, d.a.createElement(me, null, a.fbt._("Width", null, {
						hk: "3jjMQm"
					})), d.a.createElement(ue, {
						disabled: !t.customSizeEnabled || !t.emojisEnabled,
						name: "width",
						onChange: this.handleWidthChange,
						value: t.width
					})), d.a.createElement(pe, null, d.a.createElement(me, null, a.fbt._("Height", null, {
						hk: "3nMJXk"
					})), d.a.createElement(ue, {
						disabled: !t.customSizeEnabled || !t.emojisEnabled,
						name: "height",
						onChange: this.handleHeightChange,
						value: t.height
					})), d.a.createElement("div", {
						className: s ? P.a.sizeLimitTextWarning : P.a.sizeLimitText
					}, n))), d.a.createElement(xe, null, d.a.createElement(ge, {
						onClick: e.toggleModal
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(Ee, {
						disabled: !this.canSave() || s,
						onClick: this.onSave
					}, a.fbt._("Save", null, {
						hk: "45QjJC"
					}))))
				}
			}
			var ke = Object(K.a)(Ce(_e)),
				ye = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/toaster.ts")),
				Oe = s("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				Se = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				we = s("./src/reddit/controls/CheckboxInput/index.tsx"),
				je = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Ie = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				Ne = s("./src/reddit/models/Image/index.tsx"),
				Te = s("./src/reddit/models/Toast/index.ts"),
				Pe = s("./src/reddit/components/ModHub/Emojis/EmojiUploadModal/index.m.less"),
				Me = s.n(Pe),
				Re = s("./src/higherOrderComponents/withImageUploads.tsx"),
				Ae = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Le = s("./src/reddit/models/Emoji/index.ts"),
				Fe = s("./src/reddit/components/ModHub/Emojis/EmojiUploader/index.m.less"),
				De = s.n(Fe),
				Ue = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				Be = s("./src/reddit/components/ProgressBar/index.tsx"),
				We = s("./src/reddit/controls/ErrorText/index.tsx");
			const He = 5,
				Ve = 95,
				qe = 600,
				Ge = 100;
			class ze extends d.a.Component {
				constructor() {
					super(...arguments), this.intervalToken = 0, this.state = {
						timeStarted: Date.now(),
						percent: He
					}, this.tick = () => {
						const e = function(e) {
							const t = e / qe,
								s = (Math.log(t / 10) + 3) / 2.1;
							return Math.max(Ve, Math.min(He, 100 * s))
						}(Date.now() - this.state.timeStarted);
						this.setState({
							percent: e
						}), e === Ve && this.intervalToken && window.clearInterval(this.intervalToken)
					}
				}
				componentDidMount() {
					this.intervalToken = window.setInterval(this.tick, Ge)
				}
				componentWillUnmount() {
					this.intervalToken && window.clearInterval(this.intervalToken)
				}
				render() {
					return d.a.createElement(Be.a, {
						className: De.a.progressBar,
						innerBarClassName: De.a.innerBarClassName,
						percent: this.state.percent
					})
				}
			}
			var Ke = ze;
			const Xe = u.a.wrapped(Ue.a, "characterCountdown", De.a),
				Qe = u.a.wrapped(Ae.a, "clearIcon", De.a),
				Je = u.a.wrapped(We.b, "errorText", De.a),
				Ye = u.a.wrapped(Z.a, "expandLeft", De.a),
				Ze = u.a.div("iconSpacer", De.a),
				$e = u.a.wrapped(M.a, "imageDisplay", De.a),
				et = u.a.div("inputPlaceholder", De.a),
				tt = u.a.wrapped(Z.a, "inputPlaceholder", De.a),
				st = u.a.wrapped(Y.a, "textButton", De.a);
			class nt extends d.a.Component {
				constructor() {
					super(...arguments), this.handleChangeEmojiName = e => {
						this.props.onChangeEmojiName && this.props.onChangeEmojiName(this.props.index, e.target.value)
					}, this.handleRemove = e => {
						this.props.onCancel(this.props.index)
					}, this.renderContent = () => {
						const {
							emojiName: e,
							errorText: t,
							fileName: s,
							handleRetry: n,
							imageData: o,
							isDuplicate: r
						} = this.props;
						switch (o.kind) {
							case Ne.b.NotUploaded:
							case Ne.b.Pending:
								return d.a.createElement("div", null, d.a.createElement(tt, null, o.kind === Ne.b.NotUploaded ? d.a.createElement(Ke, null) : d.a.createElement(Be.a, {
									className: De.a.progressBar,
									innerBarClassName: De.a.innerBarClassName,
									percent: 0
								}), d.a.createElement(st, {
									onClick: this.handleRemove
								}, a.fbt._("Cancel", null, {
									hk: "2TSLl5"
								}))), d.a.createElement(Se.b, null, a.fbt._("Uploading {fileName}", [a.fbt._param("fileName", s)], {
									hk: "NIxvK"
								})));
							case Ne.b.FailedToUpload:
							case Ne.b.Invalid:
								return d.a.createElement("div", null, d.a.createElement(tt, null, a.fbt._("Failed to upload", null, {
									hk: "2LBRW2"
								}), n ? d.a.createElement(st, {
									onClick: n
								}, a.fbt._("Retry", null, {
									hk: "3EwbaK"
								})) : d.a.createElement(st, {
									onClick: this.handleRemove
								}, a.fbt._("Remove", null, {
									hk: "alTFO"
								}))), t && d.a.createElement(Je, null, t));
							case Ne.b.Uploaded:
								return d.a.createElement(et, null, a.fbt._("Saved", null, {
									hk: "2xDFZZ"
								}));
							default:
								return d.a.createElement("div", null, d.a.createElement(J.c, {
									className: r ? De.a.duplicateInput : De.a.input,
									onChange: this.handleChangeEmojiName,
									placeholder: a.fbt._("Emoji name", null, {
										hk: "UpQdA"
									}),
									value: e
								}), d.a.createElement(Ye, null, d.a.createElement(Xe, {
									maxChars: Le.d,
									text: e
								}), d.a.createElement(st, {
									onClick: this.handleRemove
								}, a.fbt._("Remove", null, {
									hk: "4rJmk"
								}))), t && d.a.createElement(Je, null, t))
						}
					}
				}
				render() {
					const {
						emojiName: e,
						imageData: t,
						isSaving: s
					} = this.props;
					return s ? d.a.createElement(d.a.Fragment, null, d.a.createElement(et, null, d.a.createElement(Ke, null)), d.a.createElement(Se.b, null, a.fbt._("Saving {emojiName}", [a.fbt._param("emojiName", e)], {
						hk: "3lMST7"
					}))) : d.a.createElement(Ie.a, null, t.kind === Ne.b.FailedToUpload || t.kind === Ne.b.Invalid ? d.a.createElement(Ze, null, d.a.createElement(Qe, null)) : d.a.createElement($e, {
						backgroundImage: t.url
					}), this.renderContent())
				}
			}
			var at = nt,
				ot = s("./node_modules/lodash/countBy.js"),
				rt = s.n(ot),
				it = s("./node_modules/lodash/filter.js"),
				dt = s.n(it),
				lt = s("./node_modules/lodash/includes.js"),
				ct = s.n(lt),
				ut = s("./node_modules/lodash/transform.js"),
				mt = s.n(ut);
			const pt = /^[A-Za-z0-9_-]{1,24}$/,
				ht = ["reddit", "snoo", "spez"],
				bt = (e, t, s) => !pt.test(e) || !s && (e => {
					const t = e.toLowerCase();
					return ht.reduce((e, s) => e || -1 !== t.indexOf(s), !1)
				})(e) ? a.fbt._("Invalid emoji name", null, {
					hk: "2Oromm"
				}) : ct()(t, e) ? a.fbt._("This name is already taken", null, {
					hk: "4dwdJL"
				}) : "",
				gt = e => e.name ? e.name.replace(/\.[^.]*$/, "").replace(/[^A-Za-z0-9_-]/g, " ").trim().replace(/ +/g, "_").slice(0, 24) : "",
				ft = (e, t) => (t.kind !== Ne.b.TempUploaded || !e.emojiNameError && !e.isNameMissing) && (t.kind !== Ne.b.NotUploaded && t.kind !== Ne.b.Pending),
				xt = e => {
					let t = "";
					return e.file.size > Le.a ? t = "file-size-error" : (e.height > Le.b || e.width > Le.c) && (t = "image-size-error"), {
						emojiNameError: "",
						imageError: t,
						name: gt(e.file),
						fileName: e.file.name,
						isNameMissing: !1
					}
				},
				Et = (e, t) => t.reduce((t, s) => s.kind === e ? t + 1 : t, 0),
				vt = (e, t) => {
					const {
						emojiNameError: s,
						imageError: n,
						isNameMissing: o
					} = t;
					let r = "";
					e.kind === Ne.b.FailedToUpload && (r = e.error.fields && e.error.fields.length ? e.error.fields[0].msg : a.fbt._("Something went wrong", null, {
						hk: "2fCWXR"
					}));
					const i = r || !1,
						d = s || !!o && a.fbt._("Emoji name is required", null, {
							hk: "4sL3l7"
						});
					let l = "";
					return "file-size-error" === n ? l = a.fbt._("File size too large", null, {
						hk: "EksGU"
					}) : "image-size-error" === n && (l = a.fbt._("Image size too large", null, {
						hk: "1xjOmq"
					})), l || i || d || ""
				},
				Ct = e => {
					const t = dt()(e, e => !e.emojiNameError && !e.imageError),
						s = rt()(t, e => e.name);
					return mt()(s, (e, t, s) => {
						t > 1 && e.push(s)
					}, [])
				},
				_t = 500,
				kt = u.a.div("UploaderContainer", De.a),
				yt = u.a.wrapped(j.a, "alertIcon", De.a),
				Ot = u.a.wrapped(Ae.a, "duplicatesIcon", De.a),
				St = u.a.wrapped(Q.o, "duplicateWarning", De.a),
				wt = u.a.wrapped(_.i, "modalAddButton", De.a),
				jt = u.a.wrapped(Q.a, "modalCancelButton", De.a),
				It = u.a.div("uploaderContainer", De.a),
				Nt = u.a.wrapped(Q.o, "modProTip", De.a),
				Tt = u.a.div("progressText", De.a),
				Pt = u.a.wrapped(Q.o, "replacingDescription", De.a),
				Mt = u.a.div("replacingTitle", De.a),
				Rt = u.a.div("uploadingTitle", De.a),
				At = Object(c.c)({
					emojis: N.d,
					isSnoomojiSubreddit: $.l,
					reservedEmojiNames: N.e
				}),
				Lt = Object(l.b)(At, (e, {
					subredditId: t
				}) => ({
					emojisUploadedToast: () => e(ye.f({
						kind: Te.b.SuccessCommunityGreen,
						text: a.fbt._("New emojis added!", null, {
							hk: "1Q1mEq"
						})
					})),
					saveEmoji: (s, n, a) => e(Object(m.p)({
						imageData: s,
						subredditId: t,
						emojiName: n,
						settings: a
					}))
				}));
			class Ft extends d.a.Component {
				constructor(e) {
					super(e), this.timeoutToken = 0, this.loadIndex = 0, this.tempUploadNext = async () => {
						const e = this.getNextPendingImageToLoad();
						if (!e) return this.timeoutToken = 0, void(this.loadIndex = 0);
						const {
							subredditId: t
						} = this.props, s = this.state.emojiData[e.id], n = Object(Ne.m)(e);
						await this.props.uploadImage({
							imageData: n,
							subredditId: t,
							emojiName: s.name,
							settings: this.props.emojiSettings
						}), this.loadIndex += 1, this.loadIndex < this.state.localData.length ? this.timeoutToken = window.setTimeout(this.tempUploadNext, _t) : (this.loadIndex = 0, this.timeoutToken = 0)
					}, this.emojiIsADuplicate = (e, t) => e && t && t.some(t => t.id === e.id), this.saveNext = e => {
						const t = this.getNextTempUploadedImageToSave();
						if (!t) return this.timeoutToken = 0, void(this.loadIndex = 0);
						if (!this.emojiIsADuplicate(t, e)) {
							const e = this.state.emojiData[t.id],
								s = this.props.saveEmoji(t, e.name, this.props.emojiSettings);
							this.setState({
								emojisUploaded: this.state.emojisUploaded || s
							})
						}
						this.loadIndex += 1, this.loadIndex < this.state.localData.length ? this.timeoutToken = window.setTimeout(() => this.saveNext(e), _t) : (this.loadIndex = 0, this.timeoutToken = 0)
					}, this.onChangeEmojiName = (e, t) => {
						const {
							isSnoomojiSubreddit: s,
							reservedEmojiNames: n
						} = this.props;
						if (t.length > Le.d) return;
						const a = this.state.isReplacing ? this.state.replacingEmoji && this.state.replacingEmoji[e] : this.state.localData[e];
						if (!a) return;
						const o = this.state.emojiData,
							r = o[a.id],
							i = t ? bt(t, n, s) : "";
						o[a.id].emojiNameError = i, o[a.id].name = t;
						const d = Ct(o);
						this.setState({
							duplicateNames: d,
							emojiData: {
								...this.state.emojiData,
								[a.id]: {
									...r,
									emojiNameError: i,
									isNameMissing: !t,
									name: t
								}
							}
						})
					}, this.canSave = () => {
						let e = !1;
						for (const t of this.state.localData) {
							if (!ft(this.state.emojiData[t.id], t)) return !1;
							t.kind === Ne.b.TempUploaded && (e = !0)
						}
						return e
					}, this.getValidatedState = () => {
						const {
							isSnoomojiSubreddit: e,
							reservedEmojiNames: t
						} = this.props, s = {};
						for (const n of this.state.localData) {
							let a = this.state.emojiData[n.id];
							const o = bt(a.name, t, e);
							a.name && !o || (a = {
								...a,
								emojiNameError: o,
								isNameMissing: !a.name
							}), s[n.id] = a
						}
						return {
							emojiData: s
						}
					}, this.onApply = () => {
						const e = this.getValidatedState();
						this.setState(e, () => {
							if (this.canSave()) {
								const e = this.props.emojis[this.props.subredditId].emojis,
									t = [];
								for (const n of this.state.localData) {
									if (n.kind !== Ne.b.TempUploaded) continue;
									this.state.emojiData[n.id].name in e && t.push(n)
								}
								t.length ? (this.setState({
									replacingEmoji: t,
									isReplacing: !0
								}), this.saveNext(t)) : (this.setState({
									isSavingImage: !0
								}), this.props.setIsSaving(!0), this.saveNext());
								const s = Et(Ne.b.TempUploaded, this.state.localData) - t.length;
								s > 0 && (this.props.sendEvent(w("add", s)), this.sendSettingsEvent())
							}
						})
					}, this.sendSettingsEvent = () => {
						const {
							modFlairOnly: e,
							userFlairAllowed: t,
							postFlairAllowed: s
						} = this.props.emojiSettings;
						this.props.sendEvent(O("mods_only", e)), this.props.sendEvent(O("appear_user_flair", t)), this.props.sendEvent(O("appear_post_flair", s))
					}, this.handleSaveAndReplace = () => {
						this.setState({
							isReplacing: !1,
							isSavingImage: !0
						}), this.props.setIsSaving(!0);
						const {
							replacingEmoji: e
						} = this.state, t = e ? e.length : 0;
						this.saveNext(), t > 0 && (this.props.sendEvent(w("replace", t)), this.sendSettingsEvent())
					}, this.handleCancelReplace = () => {
						this.setState({
							isReplacing: !1,
							replacingEmoji: null
						}), this.props.stopEditing(), this.props.sendEvent(S("dont_replace"))
					}, this.findEmojiIndexById = e => this.state.localData.findIndex(t => t.id === e), this.removeEmoji = e => {
						const {
							isReplacing: t,
							localData: s,
							replacingEmoji: n
						} = this.state;
						let a, o = e;
						t && n && n[e] && (o = this.findEmojiIndexById(n[e].id), (a = n.slice(0)).splice(e, 1), this.setState({
							replacingEmoji: a
						}));
						const r = s[o],
							i = s.slice(0);
						i.splice(o, 1);
						const d = {
							...this.state.emojiData
						};
						delete d[r.id], this.setState({
							duplicateNames: Ct(d),
							emojiData: d,
							localData: i
						}), t && n ? 0 === a.length && this.props.returnToAddState() : 0 === i.length && this.props.returnToAddState()
					}, this.retryEmojiUpload = () => {
						this.props.returnToAddState()
					};
					const t = {},
						s = [];
					for (const n of e.images) {
						const e = xt(n);
						t[n.id] = e, e.imageError ? s.push(Object(Ne.l)(n, e.imageError)) : s.push(n)
					}
					this.state = {
						duplicateNames: Ct(t),
						emojiData: t,
						emojisUploaded: !1,
						isReplacing: !1,
						isSavingImage: !1,
						localData: s,
						replacingEmoji: null
					}
				}
				UNSAFE_componentWillMount() {
					this.loadIndex = 0, this.tempUploadNext()
				}
				getNextPendingImageToLoad() {
					let e, t = null;
					for (e = this.loadIndex; e < this.state.localData.length; e++) {
						const s = this.state.localData[e];
						if (s.kind === Ne.b.Pending) {
							t = s;
							break
						}
					}
					return this.loadIndex = e, t
				}
				getNextTempUploadedImageToSave() {
					let e, t = null;
					for (e = this.loadIndex; e < this.state.localData.length; e++) {
						const s = this.state.localData[e];
						if (s.kind === Ne.b.TempUploaded) {
							t = s;
							break
						}
					}
					return this.loadIndex = e, t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = e.getImageUploadsIfModified(this.state.localData);
					if (!t) return;
					let s = !1;
					const {
						isSavingImage: n
					} = this.state, a = {};
					for (const o of t) a[o.id] = this.state.emojiData[o.id], s = s || o.kind === Ne.b.TempUploaded;
					!n || s ? (this.props.setIsSaving(n), this.setState({
						emojiData: a,
						isSavingImage: n,
						localData: t
					})) : this.props.stopEditing()
				}
				componentWillUnmount() {
					for (const e of this.state.localData) this.props.cancelUpload(e);
					this.timeoutToken && window.clearTimeout(this.timeoutToken), this.state.emojisUploaded && this.props.emojisUploadedToast(), this.setState({
						emojisUploaded: !1,
						isReplacing: !1
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = t.isReplacing ? t.replacingEmoji || [] : t.localData;
					return d.a.createElement(kt, null, d.a.createElement(It, null, t.duplicateNames.length > 0 ? d.a.createElement(St, null, d.a.createElement(Ot, null), a.fbt._("Duplicate names", null, {
						hk: "4kkNr1"
					})) : !t.isReplacing && d.a.createElement(Nt, null, d.a.createElement(yt, null), a.fbt._("Names cannot be edited once added", null, {
						hk: "3f45r5"
					})), d.a.createElement(Q.k, null, t.isReplacing ? d.a.createElement(d.a.Fragment, null, d.a.createElement(Mt, null, a.fbt._("Replacing emojis", null, {
						hk: "4cKike"
					})), d.a.createElement(Pt, null, a.fbt._("These emoji names already exist in your community. Replacing these emojis will not change pre-existing permissions. Do you want to replace them?", null, {
						hk: "3iPBUU"
					}))) : d.a.createElement(Rt, null, a.fbt._("Uploading emojis", null, {
						hk: "7keSV"
					})), d.a.createElement("div", {
						className: t.isReplacing ? void 0 : De.a.emojiDisplays
					}, s.map((e, s) => {
						const n = this.state.emojiData[e.id],
							a = e.kind === Ne.b.FailedToUpload || e.kind === Ne.b.Invalid,
							o = t.replacingEmoji && !t.replacingEmoji.find(t => t.id === e.id);
						if (t.isSavingImage && (a || o)) return;
						const r = vt(e, n);
						return d.a.createElement(Se.a, {
							key: e.id
						}, d.a.createElement(at, {
							emojiName: n.name,
							errorText: r,
							fileName: n.fileName,
							imageData: e,
							index: s,
							isDuplicate: t.duplicateNames.includes(n.name),
							isSaving: t.isSavingImage,
							onCancel: this.removeEmoji,
							onChangeEmojiName: this.onChangeEmojiName
						}))
					})), !t.isReplacing && d.a.createElement(Tt, null, t.isSavingImage ? a.fbt._("{savedCount} out of {savedTotal} saved", [a.fbt._param("savedCount", Et(Ne.b.Uploaded, t.localData).toString()), a.fbt._param("savedTotal", t.localData.length.toString())], {
						hk: "3v1E9N"
					}) : a.fbt._("{uploadedCount} out of {uploadedTotal} uploaded", [a.fbt._param("uploadedCount", Et(Ne.b.TempUploaded, t.localData).toString()), a.fbt._param("uploadedTotal", t.localData.length.toString())], {
						hk: "41qbSa"
					})))), d.a.createElement(Q.f, null, d.a.createElement(jt, {
						disabled: t.isSavingImage,
						onClick: t.isReplacing ? this.handleCancelReplace : e.stopEditing
					}, t.isReplacing ? a.fbt._("Don't replace", null, {
						hk: "4d8hwM"
					}) : a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(wt, {
						disabled: t.isSavingImage || !this.canSave() || t.duplicateNames.length > 0,
						onClick: t.isReplacing ? this.handleSaveAndReplace : this.onApply
					}, t.isReplacing ? a.fbt._("Replace", null, {
						hk: "45noqB"
					}) : a.fbt._("Add", null, {
						hk: "2wi3d4"
					}))))
				}
			}
			var Dt = Object(Re.a)(Lt(Ft), m.q),
				Ut = s("./src/reddit/actions/imageUploads.ts"),
				Bt = s("./src/reddit/selectors/imageUploads.ts");
			const Wt = u.a.div("UploaderContainer", De.a),
				Ht = u.a.wrapped(Wt, "editEmojiDisplay", De.a),
				Vt = Object(c.c)({
					reduxImage: (e, {
						pendingImage: t
					}) => {
						const s = Object(Bt.b)(e),
							n = t && t.id;
						return n && s[n] || void 0
					}
				});
			class qt extends d.a.Component {
				constructor(e) {
					super(e), this.onCancelAndRetry = () => {
						this.props.reduxImage && this.props.cancelUpload(this.props.reduxImage), this.props.onRetryUpload()
					}
				}
				componentDidMount() {
					const e = Object(Ne.m)(this.props.pendingImage);
					this.props.uploadImage({
						imageData: e,
						subredditId: this.props.subredditId,
						emojiName: this.props.emoji.name,
						settings: this.props.emojiSettings
					})
				}
				componentDidUpdate(e) {
					this.props.reduxImage && this.props.reduxImage !== e.reduxImage && this.props.onImageChange(this.props.reduxImage)
				}
				componentWillUnmount() {
					this.props.reduxImage && this.props.cancelUpload(this.props.reduxImage)
				}
				render() {
					const {
						pendingImage: e,
						reduxImage: t,
						emoji: s
					} = this.props, n = xt(e), a = Object(Ne.l)(e, n.imageError), o = n.imageError ? a : t || e, r = vt(o, n);
					return !r && o.kind === Ne.b.TempUploaded || o.kind === Ne.b.Uploaded ? null : d.a.createElement(Ht, null, d.a.createElement(at, {
						emojiName: s.name,
						errorText: r,
						fileName: n.fileName,
						handleRetry: this.onCancelAndRetry,
						imageData: o,
						index: 0,
						isSaving: !1,
						onCancel: this.onCancelAndRetry
					}))
				}
			}
			var Gt = Object(l.b)(Vt, e => ({
				uploadImage: t => e(Object(m.q)(t)),
				cancelUpload: t => e(Object(Ut.h)(t))
			}))(qt);

			function zt() {
				return (zt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Kt = 32,
				Xt = 128,
				Qt = 64,
				Jt = 100,
				Yt = u.a.div("appearsIn", Me.a),
				Zt = u.a.wrapped(we.a, "checkbox", Me.a),
				$t = u.a.span("checkboxText", Me.a),
				es = u.a.wrapped(Y.a, "closeButton", Me.a),
				ts = u.a.div("imageTitle", Me.a),
				ss = u.a.wrapped(_.i, "modalAddButton", Me.a),
				ns = u.a.wrapped(Q.d, "modalBody", Me.a),
				as = u.a.wrapped(Q.a, "modalCancelButton", Me.a),
				os = u.a.wrapped(Q.k, "modalMain", Me.a),
				rs = u.a.wrapped(re, "modFlairOnlyToggle", Me.a),
				is = u.a.wrapped(je.a, "modIcon", Me.a),
				ds = u.a.li("modProTip", Me.a),
				ls = u.a.div("modProTips", Me.a),
				cs = u.a.div("modProTipTitle", Me.a),
				us = u.a.div("proTip", Me.a),
				ms = u.a.ul("tipList", Me.a),
				ps = e => !!e && (e.kind === Ne.b.Pending ? !!xt(e).imageError : e.kind === Ne.b.FailedToUpload);
			var hs;
			! function(e) {
				e[e.AddState = 0] = "AddState", e[e.SingleEmojiEditState = 1] = "SingleEmojiEditState", e[e.BulkUploadState = 2] = "BulkUploadState"
			}(hs || (hs = {}));
			const bs = u.a.wrapped(Ie.a, "emojiDisplay", Me.a),
				gs = u.a.div("emojiNameDisplay", Me.a),
				fs = u.a.wrapped(M.a, "imageDisplay", Me.a),
				xs = e => d.a.createElement(bs, null, d.a.createElement(fs, {
					backgroundImage: e.url
				}), d.a.createElement(gs, null, e.emojiName)),
				Es = Object(c.c)({
					emojisCustomSize: (e, t) => Object($.x)(e, {
						subredditName: t.subreddit.name
					}).emojisCustomSize
				}),
				vs = Object(l.b)(Es, (e, {
					emoji: t,
					isSnoomoji: s,
					subreddit: n
				}) => ({
					saveEmoji: (t, s, a) => e(m.p({
						imageData: a,
						subredditId: n.id,
						emojiName: t,
						settings: s
					})),
					saveEmojiSettings: a => {
						t && e(m.o(t.name, s, a, n.id))
					},
					saveEmojiSuccessToast: () => e(ye.f({
						kind: Te.b.SuccessCommunityGreen,
						text: a.fbt._("Emoji edits saved!", null, {
							hk: "3luBMA"
						})
					}))
				}));
			class Cs extends d.a.Component {
				constructor(e) {
					super(e), this.closeModal = () => {
						this.props.toggleModal()
					}, this.clearImageData = () => {
						this.setState({
							imageData: [],
							emojiDraftImage: void 0
						})
					}, this.onEditingImageChange = e => {
						this.setState({
							emojiDraftImage: e
						})
					}, this.handleMultiImageInput = async e => {
						let t;
						const s = this.state.emojiState === hs.SingleEmojiEditState;
						s && this.clearImageData(), t = Array.isArray(e) ? s ? e.slice(0, 1) : e.slice(0, Jt) : [e];
						const n = await Promise.all(t.map(Ne.f));
						s ? this.setState({
							imageData: n
						}) : this.setState({
							emojiState: hs.BulkUploadState,
							imageData: n
						})
					}, this.handleModExclusiveToggle = () => this.setState({
						settings: {
							...this.state.settings,
							modFlairOnly: !this.state.settings.modFlairOnly
						}
					}), this.handleTogglePostFlair = () => this.setState({
						settings: {
							...this.state.settings,
							postFlairAllowed: !this.state.settings.postFlairAllowed
						}
					}), this.handleToggleUserFlair = () => this.setState({
						settings: {
							...this.state.settings,
							userFlairAllowed: !this.state.settings.userFlairAllowed
						}
					}), this.returnToAdd = () => {
						this.setState({
							emojiState: hs.AddState
						}), this.clearImageData()
					}, this.sendToggleEvent = (e, t) => this.props.sendEvent(O(e, t)), this.modFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.modFlairOnly !== this.state.settings.modFlairOnly, this.userFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.userFlairAllowed !== this.state.settings.userFlairAllowed, this.postFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.postFlairAllowed !== this.state.settings.postFlairAllowed, this.settingsHaveBeenChanged = () => this.modFlairSettingHasChanged() || this.userFlairSettingHasChanged() || this.postFlairSettingHasChanged(), this.sendTelemetryEvents = () => {
						const {
							modFlairOnly: e,
							userFlairAllowed: t,
							postFlairAllowed: s
						} = this.state.settings;
						this.modFlairSettingHasChanged() && this.sendToggleEvent("mods_only", e), this.userFlairSettingHasChanged() && this.sendToggleEvent("appear_user_flair", t), this.postFlairSettingHasChanged() && this.sendToggleEvent("appear_post_flair", s)
					}, this.saveEmoji = async () => {
						const {
							props: e,
							state: t
						} = this, s = {
							modFlairOnly: t.settings.modFlairOnly,
							postFlairAllowed: t.settings.postFlairAllowed,
							userFlairAllowed: t.settings.userFlairAllowed
						};
						if (this.setIsSaving(!0), e.emoji) {
							if (e.isSnoomoji || e.emoji && !t.emojiDraftImage) e.saveEmojiSettings(s);
							else if (e.emoji && t.emojiDraftImage && t.emojiDraftImage.kind === Ne.b.TempUploaded) {
								await e.saveEmoji(e.emoji.name, s, t.emojiDraftImage) && e.saveEmojiSuccessToast()
							}
							this.sendTelemetryEvents()
						}
						this.closeModal(), this.setIsSaving(!1)
					}, this.setIsSaving = e => this.setState({
						isSaving: e
					}), this.state = {
						emojiState: e.emoji ? hs.SingleEmojiEditState : hs.AddState,
						imageData: [],
						isSaving: !1,
						settings: {
							modFlairOnly: !!e.emoji && e.emoji.modFlairOnly,
							postFlairAllowed: !e.emoji || e.emoji.postFlairAllowed,
							userFlairAllowed: !e.emoji || e.emoji.userFlairAllowed
						}
					}
				}
				render() {
					const {
						emoji: e,
						emojisCustomSize: t,
						isSnoomoji: s,
						sendEvent: n,
						subreddit: o
					} = this.props, {
						emojiDraftImage: r,
						emojiState: i,
						imageData: l,
						isSaving: c,
						settings: u
					} = this.state, m = {
						emojiSettings: u,
						stopEditing: this.closeModal,
						subredditId: o.id
					}, p = 2 * (t ? t[0] : Kt), h = 2 * (t ? t[1] : Kt), b = l.length > 0 ? l[0] : void 0, g = b && b.url, f = r && r.url, x = g || f, E = r && r.kind === Ne.b.TempUploaded, v = ps(b || r), C = i !== hs.SingleEmojiEditState || (!this.settingsHaveBeenChanged() && !E || v);
					return d.a.createElement(ns, null, d.a.createElement(Q.h, null, d.a.createElement(Z.a, null, d.a.createElement(Q.p, null, e ? a.fbt._("Edit emoji", null, {
						hk: "4awCz5"
					}) : a.fbt._("Add new emojis", null, {
						hk: "2DrJ62"
					})), d.a.createElement(es, {
						disabled: c,
						onClick: this.closeModal
					}, d.a.createElement(Q.b, null)))), (i === hs.AddState || i === hs.SingleEmojiEditState) && d.a.createElement(d.a.Fragment, null, i === hs.AddState && d.a.createElement(ls, null, d.a.createElement(cs, null, d.a.createElement(is, null), a.fbt._("Mod pro tips!", null, {
						hk: "30l9bq"
					})), d.a.createElement(ms, null, d.a.createElement(ds, null, a.fbt._("Emoji names will use the image file name and will be editable once uploaded", null, {
						hk: "2fvAIQ"
					})), d.a.createElement(ds, null, a.fbt._("You can upload up to {maxUpload} emojis at once", [a.fbt._param("maxUpload", Jt.toString())], {
						hk: "4aMYoX"
					})))), d.a.createElement(os, null, i === hs.SingleEmojiEditState && e && d.a.createElement(xs, {
						emojiName: e.name,
						url: x || e.url
					}), !s && d.a.createElement(d.a.Fragment, null, d.a.createElement(Se.i, null, d.a.createElement(ts, null, e ? a.fbt._("Image", null, {
						hk: "3fzI70"
					}) : a.fbt._("Images", null, {
						hk: "3SapUk"
					})), e && i === hs.SingleEmojiEditState && b && d.a.createElement(Gt, zt({}, m, {
						emoji: e,
						onRetryUpload: this.clearImageData,
						pendingImage: b,
						onImageChange: this.onEditingImageChange
					})), (!l.length || E) && !(e && v) && d.a.createElement(Oe.b, {
						label: a.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3y5WvP"
						}),
						onChange: this.handleMultiImageInput,
						multiple: !0
					}), d.a.createElement(Se.b, null, a.fbt._("Max upload dimensions {maxEmojiWidth} x {maxEmojiHeight}px", [a.fbt._param("maxEmojiWidth", Xt.toString()), a.fbt._param("maxEmojiHeight", Xt.toString())], {
						hk: "yal28"
					})), d.a.createElement(Se.b, null, a.fbt._("Max file size {MAX_FILE_SIZE}KB", [a.fbt._param("MAX_FILE_SIZE", Qt.toString())], {
						hk: "1t1L0f"
					}))), d.a.createElement(us, null, a.fbt._("Recommended upload dimensions: {recommendedWidth} x {recommendedHeight}px", [a.fbt._param("recommendedWidth", p.toString()), a.fbt._param("recommendedHeight", h.toString())], {
						hk: "35CqDV"
					}))), d.a.createElement(Yt, null, a.fbt._("Appears in:", null, {
						hk: "3SZP5W"
					})), d.a.createElement(Zt, {
						name: "postFlair",
						onChange: this.handleTogglePostFlair,
						value: u.postFlairAllowed
					}, d.a.createElement($t, null, a.fbt._("Post flair", null, {
						hk: "mAzeZ"
					}))), d.a.createElement(Zt, {
						name: "userFlair",
						onChange: this.handleToggleUserFlair,
						value: u.userFlairAllowed
					}, d.a.createElement($t, null, a.fbt._("User flair", null, {
						hk: "qVf7x"
					}))), d.a.createElement(rs, {
						description: "Only appears in post and user flair that are restricted for mod use.",
						on: u.modFlairOnly,
						onToggle: this.handleModExclusiveToggle,
						title: "Mod only"
					})), d.a.createElement(Q.f, null, d.a.createElement(as, {
						disabled: c,
						onClick: this.closeModal
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(ss, {
						disabled: C,
						onClick: this.saveEmoji
					}, e ? a.fbt._("Save", null, {
						hk: "1M9aqH"
					}) : a.fbt._("Add", null, {
						hk: "2wi3d4"
					})))), i === hs.BulkUploadState && d.a.createElement(Dt, zt({}, m, {
						images: l,
						returnToAddState: this.returnToAdd,
						sendEvent: n,
						setIsSaving: this.setIsSaving
					})))
				}
			}
			var _s = Object(K.a)(vs(Cs));
			const ks = u.a.wrapped(j.a, "alertIcon", P.a),
				ys = u.a.span("appearsTitle", P.a),
				Os = u.a.span("imageTitle", P.a),
				Ss = u.a.span("nameTitle", P.a),
				ws = u.a.span("permissionsTitle", P.a),
				js = u.a.wrapped(_.l, "settingsButton", P.a),
				Is = u.a.wrapped(f.a, "titleTooltip", P.a),
				Ns = u.a.wrapped(E.a, "topRow", P.a),
				Ts = Object(c.c)({
					emojis: N.d,
					isConfirmModalOpen: Object(I.b)("EmojiManager--DeleteEmojiConfirmation--Modal"),
					isEmojisEnabled: (e, t) => Object(N.b)(e, t.subreddit.name),
					isEmojiSettingsModalOpen: Object(I.b)("EmojiManager--Settings--Modal"),
					isUploadEmojisModalOpen: Object(I.b)("EmojiManager--UploadEmojis--Modal")
				}),
				Ps = Object(l.b)(Ts, (e, {
					subreddit: t
				}) => ({
					deleteEmoji: s => e(m.j(s, t.id)),
					toggleDeleteConfirmationModal: () => e(Object(p.i)("EmojiManager--DeleteEmojiConfirmation--Modal")),
					toggleSettingsModal: () => e(Object(p.i)("EmojiManager--Settings--Modal")),
					toggleUploadEmojisModal: () => e(Object(p.i)("EmojiManager--UploadEmojis--Modal"))
				}));
			class Ms extends d.a.Component {
				constructor(e) {
					super(e), this.onClickEditEmoji = (e, t) => {
						this.props.toggleUploadEmojisModal(), this.setState({
							emojiToEdit: e,
							isSnoomoji: t
						})
					}, this.onConfirmDelete = () => {
						this.props.deleteEmoji(this.state.emojiNameToDelete), this.setState({
							emojiNameToDelete: ""
						}), this.props.sendEvent(S("delete"))
					}, this.handleRemoveEmoji = e => {
						this.setState({
							emojiNameToDelete: e
						}), this.props.toggleDeleteConfirmationModal()
					}, this.state = {
						emojiNameToDelete: "",
						emojiToEdit: null,
						isSnoomoji: !1
					}
				}
				static getDerivedStateFromProps(e, t) {
					return t.emojiToEdit && !e.isUploadEmojisModalOpen ? {
						emojiToEdit: null,
						isSnoomoji: !1
					} : null
				}
				render() {
					const {
						emojis: e,
						isConfirmModalOpen: t,
						isEmojisEnabled: s,
						isEmojiSettingsModalOpen: o,
						isUploadEmojisModalOpen: i,
						sendEvent: l,
						subreddit: c,
						toggleDeleteConfirmationModal: u,
						toggleSettingsModal: m,
						toggleUploadEmojisModal: p
					} = this.props;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(x.c, null, d.a.createElement(js, {
						onClick: m
					}, a.fbt._("Emoji settings", null, {
						hk: "2k202A"
					})), d.a.createElement(_.i, {
						onClick: p
					}, a.fbt._("Add emoji", null, {
						hk: "DTe8a"
					}))), d.a.createElement(x.a, null, d.a.createElement(x.b, null, a.fbt._("Emoji management", null, {
						hk: "6xN5s"
					}), d.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360010560371`
					})), !s && d.a.createElement(b.a, {
						className: P.a.emojisDisabled,
						color: C.b.quarantine,
						icon: d.a.createElement(ks, null),
						subtitle: a.fbt._("Emojis in flairs will not be displayed, and existing emojis will appear as plain text.", null, {
							hk: "2WaMtH"
						}),
						title: a.fbt._("Emojis have been disabled for this community", null, {
							hk: "7LNIO"
						})
					}), d.a.createElement(Ns, null, d.a.createElement(Os, null, a.fbt._("Image", null, {
						hk: "1rlqjH"
					})), d.a.createElement(Ss, null, a.fbt._("Name", null, {
						hk: "1ugGFI"
					})), d.a.createElement(ys, null, a.fbt._("Appears in", null, {
						hk: "3K8vjU"
					}), d.a.createElement(Is, {
						text: a.fbt._("Set emoji to appear in post flair or user flair", null, {
							hk: "4cg4Se"
						})
					})), d.a.createElement(ws, null, a.fbt._("Settings", null, {
						hk: "2CRrAq"
					}), d.a.createElement(Is, {
						text: a.fbt._("Set emoji to only appear in mod-only flair", null, {
							hk: "2yS10f"
						})
					}))), e[c.id] && r()(e[c.id].emojis, e => d.a.createElement(q, {
						emoji: e,
						enabled: !0,
						isSnoomoji: !1,
						key: e.name,
						onEdit: this.onClickEditEmoji,
						onRemove: this.handleRemoveEmoji
					})), e[c.id] && r()(e[c.id].snoomojis, e => d.a.createElement(q, {
						emoji: e,
						enabled: !0,
						isSnoomoji: !0,
						key: e.name,
						onEdit: this.onClickEditEmoji,
						onRemove: this.handleRemoveEmoji
					})), t && d.a.createElement(h.a, {
						toggleModal: u,
						onConfirm: this.onConfirmDelete,
						actionText: a.fbt._("Delete", null, {
							hk: "332ZH4"
						}),
						headerText: a.fbt._("Delete emoji?", null, {
							hk: "3VBsS8"
						}),
						modalText: a.fbt._("Do you wish to delete this emoji?", null, {
							hk: "2sPCxc"
						}),
						trackClick: () => {},
						withOverlay: !0
					}), o && d.a.createElement(ke, {
						sendEvent: l,
						subreddit: c,
						toggleModal: m,
						withOverlay: !0
					}), i && d.a.createElement(_s, {
						emoji: this.state.emojiToEdit,
						isSnoomoji: this.state.isSnoomoji,
						sendEvent: l,
						subreddit: c,
						toggleModal: p,
						withOverlay: !0
					})))
				}
			}
			t.a = Ps(Object(v.c)(Ms))
		},
		"./src/reddit/components/ModHub/InfoLink/index.m.less": function(e, t, s) {
			e.exports = {
				linkContainer: "_3-yXs2bljbMxTPT6hDZU1I",
				infoIcon: "_2Eloqzd6Vfz9eGsjyzVfsf"
			}
		},
		"./src/reddit/components/ModHub/InfoLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/icons/fonts/Info/index.tsx"),
				l = s("./src/reddit/components/ModHub/InfoLink/index.m.less"),
				c = s.n(l);
			const u = Object(r.a)(i.b),
				m = ["center", "top"],
				p = ["center", "bottom"];
			class h extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					return o.a.createElement("a", {
						className: c.a.linkContainer,
						href: this.props.linkUrl,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef,
						target: "_blank",
						rel: "noopener noreferrer"
					}, o.a.createElement(d.a, {
						className: c.a.infoIcon
					}), o.a.createElement(u, {
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: m,
						text: n.fbt._("Learn more", null, {
							hk: "3zoGtq"
						}),
						tooltipPosition: p
					}))
				}
			}
			t.a = h
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				iconContainer: "_39qwCVfS_zadCI7gaPX3MI",
				textTooltip: "_1yEjLpHWBPakuE9kTnIp_w"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/icons/fonts/Info/index.tsx"),
				l = s("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				c = s.n(l);
			const u = Object(o.a)(i.a),
				m = ["center", "bottom"],
				p = ["center", "top"];
			class h extends a.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement("span", {
						className: c.a.iconContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, a.a.createElement(d.a, null), a.a.createElement(u, {
						className: Object(r.a)(e.className, c.a.textTooltip),
						children: e.children,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: m,
						text: e.text,
						tooltipPosition: p
					}))
				}
			}
			t.a = h
		},
		"./src/reddit/components/ModHub/ModHubNav/NavItem.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/InternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				l = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				c = s("./src/reddit/components/ModHub/ModHubNav/index.m.less"),
				u = s.n(c);
			const m = () => o.a.createElement("div", {
				className: u.a.newLinkIndicator
			}, n.fbt._("New", null, {
				hk: "BnhHE"
			}));
			t.b = e => e.path ? e.isExternal ? o.a.createElement("a", {
				className: u.a.navLinkStyles,
				href: e.path,
				onClick: e.onClick,
				target: "_blank",
				rel: "noopener noreferrer"
			}, e.label, o.a.createElement(d.a, {
				className: u.a.outboundLinkIcon
			})) : o.a.createElement(i.a, {
				className: Object(r.a)(u.a.navLinkStyles, {
					[u.a.activeLink]: !!e.isActive
				}),
				to: e.path,
				onClick: e.onClick
			}, e.label, e.isNew && o.a.createElement(m, null), e.isBeta && o.a.createElement("div", {
				className: u.a.newLinkIndicator
			}, n.fbt._("Beta", null, {
				hk: "z4XPh"
			})), e.isUpdated && o.a.createElement("div", {
				className: u.a.updatedLinkIndicator
			}, n.fbt._("Updated", null, {
				hk: "2xkGR3"
			})), e.showInboundArrow && o.a.createElement(l.a, {
				className: u.a.inboundLinkIcon
			})) : o.a.createElement("button", {
				className: u.a.navLinkStyles,
				onClick: e.onClick
			}, e.label, e.isNew && o.a.createElement(m, null), e.isBeta && o.a.createElement("div", {
				className: u.a.newLinkIndicator
			}, n.fbt._("Beta", null, {
				hk: "z4XPh"
			})), e.isUpdated && o.a.createElement("div", {
				className: u.a.updatedLinkIndicator
			}, n.fbt._("Updated", null, {
				hk: "2xkGR3"
			})))
		},
		"./src/reddit/components/ModHub/ModHubNav/WikiNavPanel/index.m.less": function(e, t, s) {
			e.exports = {
				wikiNavPanel: "KAUs91LhLIPR2bTL1aZRJ",
				contentTree: "_3_qIKXEwRmWcog7k9kGSno",
				footer: "_3FqEpSEBROhNwQ6pW6xmwJ",
				primaryButton: "_3fO0HSLh0kUxdhfv06hiTX",
				pageNavItem: "gCZ0Yr9nZYa9NaCdn8-eS",
				indentLine: "_2qFuXxmElNrzv3E9Qyb5xi",
				itemText: "_8bMrzJrL3U19A5yc6HTgj",
				mActive: "_1gyKwA8_GLuoQ1hu3Apd-w",
				mExists: "_3E5JJL5f6BXoTxqDq40IbB"
			}
		},
		"./src/reddit/components/ModHub/ModHubNav/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1rWejsW3eX4yw72E6Wfmyh",
				titleFontH2: "_10H_HMu7R7ett8pmawqwCS",
				titleFontH3: "_22nuZii7bWeL3c1xoXOl9",
				titleFontH4: "_2UjVJakiyf4d3yQ1sBrOzz",
				titleFontH5: "_22v1odcGzDJaLHik5W5qCz",
				titleFontH6: "_3BdZeq3g8CWhfeqBhIiW7f",
				metadataFont: "BQ88O08B4nIUNd4oLud39",
				flairFont: "_24GksXJ4va-4ZEamEGSlFB",
				labelsFont: "bd2r035T3aLLBkiMZaODQ",
				actionFont: "v0ITosHo9F3Rl2_llDtrc",
				smallButtonFont: "_3Sxxei5IvhyFBFPSQeJemM",
				largeButtonFont: "_-8HW12kqXpCzSoPxOQgrN",
				strongTextFont: "jPwoQR2t4sGD2BGLwCS0o",
				tabFont: "_2TpZx4pScQqA92z2QTYbIk",
				buttonFontXS: "_3hhxR89D6EPPCn0stnyDtx",
				buttonFontXs: "_3hhxR89D6EPPCn0stnyDtx",
				buttonFontS: "_2geB6McFSdWvuGRz3nyzjb",
				buttonFontM: "_1uuuzIbDmUCEWDPkR9T_dx",
				buttonFontL: "_1AhaF3ULgALw9k8OUmf0pY",
				buttonFontXL: "_2iQE9slD0Zw-wYQx5FCL1j",
				buttonFontXl: "_2iQE9slD0Zw-wYQx5FCL1j",
				bodyFontH1: "_3hxV-zVTwf7J5X6U1gL2PA",
				bodyFontH2: "_1lSzh7ct7vogYQk35ULeJl",
				bodyFontH3: "_2C3DyZAU4ai6HhZtVTe-Bu",
				bodyFontH4: "_2tzV3r0Sow-B7LA2KMLD45",
				bodyFontH5: "_1-ivrwr3LQQJ2_7q7woFBf",
				bodyFontH6: "pJbG4WvyXqhjYGMHv_062",
				bodyFont: "gPA4LKC5gx8g56loAEuW2",
				bodyFontSmall: "_2U2PATpiHbmfDjkovIbtF9",
				bodyFontMono: "_1tyVWTRiPy8hBs1o6HBJ_a",
				navContainer: "_2xA0SygQ9V-9Vkdad_4tnh",
				wikiNavContainer: "_3wKmughJWQCbpbTpgwf2R_",
				navSection: "_1hDKgrVgEqwg3ogyzK0xTx",
				sectionHeader: "_1C6NYhYvuXKUDoONxrMR0d",
				iconStyles: "_1lHK5OQSXGaQzgW07E3Fh4",
				inboundLinkIcon: "_1cE0_wpoZtV5YKzwxXgxQ6",
				outboundLinkIcon: "_2Fb1fof3pZ4qO7_ZowwnXG",
				navLinkStyles: "jFCRipwFbBNJ4rl18HMK5",
				activeLink: "_4Gq-jEYAhrOCtha4RZ1JZ",
				breadcrumb: "_2Pw-8XrjTaQdxaxIicJXly",
				breadcrumbButton: "_1ofO-HYNTNyx_FUAEbIMME",
				newLinkIndicator: "_26hxZhi3N_WA1WUC6pQRpa",
				updatedLinkIndicator: "_1oCiY0B1NLkEfFfIfSJIF_"
			}
		},
		"./src/reddit/components/ModHub/PaginationButtons/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2QinjfjfDTG6Df4_Tb_eRN",
				iconStyles: "_1MvzgnzkNefTZKkd4A5o1Y",
				arrowLeft: "_1Hul4w6ANujC9NsFF6_j4f"
			}
		},
		"./src/reddit/components/ModHub/PaginationButtons/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/InternalLink/index.tsx"),
				i = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				d = s("./src/reddit/components/ModHub/PaginationButtons/index.m.less"),
				l = s.n(d);
			t.a = e => a.a.createElement("div", {
				className: l.a.container
			}, e.prevButtonEnabled && a.a.createElement(r.a, {
				to: e.prevTo,
				onClick: e.prevButtonOnClick
			}, a.a.createElement(i.a, {
				className: Object(o.a)(l.a.iconStyles, l.a.arrowLeft)
			})), e.nextButtonEnabled && a.a.createElement(r.a, {
				to: e.nextTo,
				onClick: e.nextButtonOnClick
			}, a.a.createElement(i.a, {
				className: l.a.iconStyles
			})))
		},
		"./src/reddit/components/ModHub/StyledComponents/index.m.less": function(e, t, s) {
			e.exports = {
				ContentContainer: "_3mbqgd00Kdlh6nVVVhZYdS",
				contentContainer: "_3mbqgd00Kdlh6nVVVhZYdS",
				PageTitle: "_3rnK1gNGg1hiVaiRd9Hidl",
				pageTitle: "_3rnK1gNGg1hiVaiRd9Hidl",
				TopBar: "_2YY5qLRbI5q6_0JQVKiGt_",
				topBar: "_2YY5qLRbI5q6_0JQVKiGt_"
			}
		},
		"./src/reddit/components/ModHub/StyledComponents/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/ModHub/StyledComponents/index.m.less"),
				o = s.n(a);
			const r = n.a.div("ContentContainer", o.a),
				i = n.a.div("PageTitle", o.a),
				d = n.a.div("TopBar", o.a)
		},
		"./src/reddit/components/ModerationLog/FilterByDropdowns/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_3aaWXDPwVg-rhD0DvWeyIg",
				titleFontH2: "_3RrF8F_t0SfGrUYfrMwbPy",
				titleFontH3: "_36oA-I2A9k4cBPYs3kAlux",
				titleFontH4: "_1neT2k10waDvSZYxkd9bk8",
				titleFontH5: "_3oeJNjYGx_aLE6l4o6Jhcr",
				titleFontH6: "_2CsvILRAMCNlhcGlq7eAZF",
				metadataFont: "_2odnjtlqO4r8tdO5H9fwLW",
				flairFont: "k5rlVaQw1fQ4nW2C-cK8H",
				labelsFont: "_20rPk9VJ1JfA7IuzEuFf25",
				actionFont: "_1YoZx3mOGBx4yxG_aQD3dq",
				smallButtonFont: "_3eWaIQ1VVjPR_5vUm4bU74",
				largeButtonFont: "rBsu7j_nL4EsDsP9nsEx4",
				strongTextFont: "_1efJllSuh9p67WrocQmmWR",
				tabFont: "_3WOHej9q3BPonP3nmtGWrh",
				buttonFontXS: "_1MX_r3WunmJuovmTcVFbK2",
				buttonFontXs: "_1MX_r3WunmJuovmTcVFbK2",
				buttonFontS: "_2KcOk-_dCdoa6LYzk-AP_9",
				buttonFontM: "BRJSsisfnzhNDIzzkZ0iD",
				buttonFontL: "WtDuFUG7c1VkpSlmXgZux",
				buttonFontXL: "_1K99pLAcTgTp5K71-CnCYk",
				buttonFontXl: "_1K99pLAcTgTp5K71-CnCYk",
				bodyFontH1: "_1m_v2MMDlDugLUDKRkPnPP",
				bodyFontH2: "uhtqruCImDdb6YMrply29",
				bodyFontH3: "oI7G9eYumAFmPy69WN078",
				bodyFontH4: "_3NN_fRjCSJGnly_ejXsz8m",
				bodyFontH5: "_1lK4S52h6Glz4-OysTx6SF",
				bodyFontH6: "BarCcSBvd2WaM4vhBY1_R",
				bodyFont: "RIX67Ch_ZE4SYGnQlkPWs",
				bodyFontSmall: "_1_FK7Ynr3eStBK-2Nbutbg",
				bodyFontMono: "_1mpZy47SxXNRDTLTEdCUmV",
				dropdownRow: "_3p4amLmnNdNRS9NcI_TnQm",
				filter: "_1LUEYTVtU-JweRiTGrVNn6",
				container: "_1GH53do8Ql17wdDC_i_NDf",
				containerText: "KiwwtIazAS77Aa_w3AdBE",
				listContainer: "FyBjuKMom1xYgTT7w5Dg1",
				selector: "_3fe64brTItATv48WIPt-Af"
			}
		},
		"./src/reddit/components/ModerationLog/ModerationLogItem/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1o6EpuTR_pbdKk4biOJFOD",
				titleFontH2: "_2scGKAM0oQo5UQ0sAeTYcJ",
				titleFontH3: "nZ8gtQ7wSBH1Ei4U88QyH",
				titleFontH4: "cWWmG8ptxDy68exgcmkxK",
				titleFontH5: "_2ltEgDFK7lEC55mqYn2t1k",
				titleFontH6: "_1wRduyAnZyUXSUvy0rPJ7E",
				metadataFont: "_3iKB3xohr95CjhTE-YrXL4",
				flairFont: "_2tIFOrubLwHvQfSpZ7MBvr",
				labelsFont: "_1Qc6zGFV60DgXsfeg4iK1-",
				actionFont: "bD7YA5ocXtmwPNG0x7gqi",
				smallButtonFont: "wa3Y6CP3s2WY-9hiMRcK6",
				largeButtonFont: "_1Td1TQRNZA20xRbI-LLHsA",
				strongTextFont: "_2bBsKMYboYeah9nlKp4p8e",
				tabFont: "_3Bdl5CdTghtfz5X9Qkn7y0",
				buttonFontXS: "_2hkAgq5O_JUGmz41U0fhSZ",
				buttonFontXs: "_2hkAgq5O_JUGmz41U0fhSZ",
				buttonFontS: "zi9zhcyy9sg1XQb4uP15B",
				buttonFontM: "_2V_SS1DAOgvZNAM9mW40qn",
				buttonFontL: "_3yj5sHGC15tSX0YBraNh9S",
				buttonFontXL: "_2rPaWVGnRh6kEv7M1PJXWa",
				buttonFontXl: "_2rPaWVGnRh6kEv7M1PJXWa",
				bodyFontH1: "_2b6RUiVz7aEMUoaiEalXki",
				bodyFontH2: "_1gD38a1FX6kmxcFvUyP8bB",
				bodyFontH3: "_20D34o21pcOy-JSvp0fq42",
				bodyFontH4: "_368KGbv676rMnmb_kPY7-A",
				bodyFontH5: "_2o6Gp_6yxl-T5p9MHsV3hI",
				bodyFontH6: "_2jp4S3tPdfLXU3FVoOvCWi",
				bodyFont: "O3aukKYU-BhYFQQgCIAcN",
				bodyFontSmall: "_10AKt1uw6lDYoTkaQ2Egu-",
				bodyFontMono: "_3tQKpxkireZBsmkNyZ5-0J",
				row: "_3sZTiywtJTK5dskqy0h2G2",
				modNameCell: "_1hV1AUW4J0YvMuEK7-Ph1H",
				usernameLink: "_25VIbQ9CpcAT2Uys4A2mFb",
				actionLink: "_2yXBXFFI2XxJRqd89Zwd25",
				createdAtTooltip: "zMBbz2oHRB9_15CBkQ3P4",
				detailsContainer: "_3pusa5HaB8VO3ODi63vjLl",
				detailsContent: "piNOo-es-o0F7rcLiUu0N",
				detailsType: "_3P62Ird8EqkkVbqN0bv1tU",
				icon: "VzgXNIgPGoNVtsv9-uwYE",
				iconWrapper: "_3cDZ1nhaOv-edC1Ixznjgd",
				negativeTreatment: "XqM6DP9JAGpvwgodvCcuI",
				positiveTreatment: "Ob5o1Q3oVSaizQinm6DD",
				tooltip: "_33OjvBwqb5PPwalXFSmAoy"
			}
		},
		"./src/reddit/components/ModerationLog/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_2OYuAlGNOY6MlJjEC6nWEY",
				titleFontH2: "_2cz1b71RqIGBP0q1sEpoc1",
				titleFontH3: "pNuW5Xi4qPFjDgkhE2utU",
				titleFontH4: "HnjsgzUiJm7Rz4yf-QTnU",
				titleFontH5: "_32jYSRMv-UqDvlwAZ9yI4P",
				titleFontH6: "WyhSydN2c9D7w_ikI_LsS",
				metadataFont: "klmtj4Euuox2ljWXOzJqz",
				flairFont: "_1XFZbbYMt1bMVk_65YaTug",
				labelsFont: "_2lbFHk9fPHfy-Pj2cQ56ef",
				actionFont: "_250q84vRQ0qeydB79AJun",
				smallButtonFont: "_3QKadDpX2GixU1usvLUiww",
				largeButtonFont: "_24SnRKi2v2z3Q8DfWx8Cfd",
				strongTextFont: "_1bRU6ybRMZMA-zL-dR_BFc",
				tabFont: "_1y1SLpqv4ViOdLE8d7R03R",
				buttonFontXS: "_3WZjqmvG0dFKc8UjITKDDM",
				buttonFontXs: "_3WZjqmvG0dFKc8UjITKDDM",
				buttonFontS: "_2wD06G9nLrctZ6G6-fnvzn",
				buttonFontM: "f89wHQzBr1xXirRhM2r3L",
				buttonFontL: "_2B8vK6cxvYeJYneLcXU7pS",
				buttonFontXL: "_2wEcZ9dZ6skPqfnohnMjY8",
				buttonFontXl: "_2wEcZ9dZ6skPqfnohnMjY8",
				bodyFontH1: "_2qrAJcHH1W18XK6K_iZjmY",
				bodyFontH2: "_2yInLfhO3hB7n5aflEa_Y5",
				bodyFontH3: "_31VlGQEcOO_KNq8afFO4lZ",
				bodyFontH4: "_13MU9oPUeX9-FTZJw6fEdd",
				bodyFontH5: "_3h1ag_p5AVxzseMoTk9Oee",
				bodyFontH6: "_2GA-IlakdRmzOgQVFN2Q_F",
				bodyFont: "_3W9ZZjex4uhC0x4j0tXUE8",
				bodyFontSmall: "_2wYhe0C_P9ON8nur1uwzBd",
				bodyFontMono: "Ygu6NDZ2VS1jqJxKuuJ67",
				contentContainer: "PLQrC-Lzmu2AHBmciLxW5",
				table: "_27_l-nXesULxjvqLhpd6Ie",
				timeColHeader: "_1qWSBc-O0drE3JbIiVNEqE",
				modNameColHeader: "_2vKvLM8vE2iV6p5T0b5J42",
				actionNameColHeader: "_3pOXEjq1uyvW71Pp3gS7yv",
				icon: "_2iiHYO0HlG5gGeXyf7S3_q",
				iconContainer: "_3leJW5B-x65UTDfhDAblD_",
				title: "_2pFg2GOWUWlkKFlSaV-iFq",
				tooltip: "jkeAqS2MNV7nCHZkp4vi9",
				actionTooltip: "p12QqrsFSXUXQXCVTreZ5",
				actionTooltipDescription: "_2SZhKngNXxQ-MnrDr17Fm-",
				allIconsContainer: "_2zekEhqxlIqb4STkFCskIT",
				detailTooltip: "_20tDXbrpUnXW12ZXmRZdKa",
				bottomBarRow: "_28pYv3DHnyqXo6lJwzAOcG"
			}
		},
		"./src/reddit/components/ModerationLog/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/endpoints/subredditModeration/moderationLog.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts"),
				m = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./src/reddit/actions/moderationLog/constants.ts");
			const h = Object(l.a)(p.a);
			var b = s("./node_modules/react-router-redux/es/index.js"),
				g = s("./src/higherOrderComponents/asTooltip.tsx"),
				f = s("./src/reddit/actions/tooltip.ts"),
				x = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/constants/keycodes.ts"));
			const E = ["Anti-Evil Operations", "Reddit Legal"];
			var v;
			! function(e) {
				e.ACTION = "action", e.MODERATOR = "moderator"
			}(v || (v = {}));
			const C = {
					ALL_ACTIONS: () => a.fbt._("All actions", null, {
						hk: "3sHzD4"
					}),
					ACCEPT_MODERATOR_INVITE: () => a.fbt._("Accept moderator invite", null, {
						hk: "3WJot2"
					}),
					ADD_COMMUNITY_TOPICS: () => a.fbt._("Add community topics", null, {
						hk: "4xgglk"
					}),
					ADD_CONTRIBUTOR: () => a.fbt._("Add contributor", null, {
						hk: "444ZK"
					}),
					ADD_MODERATOR: () => a.fbt._("Add moderator", null, {
						hk: "4rRghF"
					}),
					ADJUST_POST_CROWD_CONTROL_LEVEL: () => a.fbt._("Adjust post crowd control level", null, {
						hk: "Eqwnv"
					}),
					APPROVE_COMMENT: () => a.fbt._("Approve comment", null, {
						hk: "1gvHWC"
					}),
					APPROVE_LINK: () => a.fbt._("Approve link", null, {
						hk: "2LqFt4"
					}),
					BAN_USER: () => a.fbt._("Ban user", null, {
						hk: "4DmPqi"
					}),
					COLLECTIONS: () => a.fbt._("Collections", null, {
						hk: "3a39Wa"
					}),
					COMMUNITY_STYLING: () => a.fbt._("Community styling", null, {
						hk: "386ps9"
					}),
					COMMUNITY_WIDGETS: () => a.fbt._("Community widgets", null, {
						hk: "4ml45n"
					}),
					CREATE_AWARD: () => a.fbt._("Create award", null, {
						hk: "bWa9w"
					}),
					CREATE_RULE: () => a.fbt._("Create rule", null, {
						hk: "28uE69"
					}),
					CREATE_SCHEDULED_POST: () => a.fbt._("Create scheduled post", null, {
						hk: "mVbI1"
					}),
					DELETE_AWARD: () => a.fbt._("Delete award", null, {
						hk: "3xYaZ7"
					}),
					DELETE_RULE: () => a.fbt._("Delete rule", null, {
						hk: "2lWdRL"
					}),
					DELETE_SCHEDULED_POST: () => a.fbt._("Delete scheduled post", null, {
						hk: "MhwRy"
					}),
					DELETE_OVERRIDDEN_CLASSIFICATION: () => a.fbt._("Delete overridden classification", null, {
						hk: "3hPfDT"
					}),
					DISABLE_AWARD: () => a.fbt._("Disable award", null, {
						hk: "2yFBt7"
					}),
					DISTINGUISH: () => a.fbt._("Distinguish", null, {
						hk: "3cWniK"
					}),
					EDIT_FLAIR: () => a.fbt._("Edit flair", null, {
						hk: "mD0CV"
					}),
					EDIT_POST_REQUIREMENTS: () => a.fbt._("Edit post requirements", null, {
						hk: "1SLqNE"
					}),
					EDIT_RULE: () => a.fbt._("Edit rule", null, {
						hk: "2T4TJx"
					}),
					EDIT_SCHEDULED_POST: () => a.fbt._("Edit scheduled post", null, {
						hk: "1XCmsI"
					}),
					EDIT_SETTINGS: () => a.fbt._("Edit settings", null, {
						hk: "3o8q46"
					}),
					ENABLE_AWARD: () => a.fbt._("Enable award", null, {
						hk: "3zYir4"
					}),
					HIDDEN_AWARD: () => a.fbt._("Hide award", null, {
						hk: "31lRN8"
					}),
					EVENTS: () => a.fbt._("Events", null, {
						hk: "4Bq9wt"
					}),
					IGNORE_REPORTS: () => a.fbt._("Ignore reports", null, {
						hk: "1defIy"
					}),
					INVITE_MODERATOR: () => a.fbt._("Invite moderator", null, {
						hk: "1DbgL5"
					}),
					INVITE_SUBSCRIBER: () => a.fbt._("Invite subscriber", null, {
						hk: "4yEMNb"
					}),
					LOCK: () => a.fbt._("Lock", null, {
						hk: "39hTi5"
					}),
					MARK_NSFW: () => a.fbt._("Mark nsfw", null, {
						hk: "3bo45o"
					}),
					MARK_ORIGINAL_CONTENT: () => a.fbt._("Mark original content", null, {
						hk: "SadHO"
					}),
					MOD_AWARD_GIVEN: () => a.fbt._("Mod award given by moderators", null, {
						hk: "35cQgR"
					}),
					MODMAIL_ENROLLMENT: () => a.fbt._("Modmail enrollment", null, {
						hk: "4ee1XK"
					}),
					MUTE_USER: () => a.fbt._("Mute user", null, {
						hk: "3kPYe4"
					}),
					OVERRIDE_CLASSIFICATION: () => a.fbt._("Override classification", null, {
						hk: "2VPY6n"
					}),
					REMOVE_COMMENT: () => a.fbt._("Remove comment", null, {
						hk: "vEI4S"
					}),
					REMOVE_COMMUNITY_TOPICS: () => a.fbt._("Remove community topics", null, {
						hk: "1tLjxQ"
					}),
					REMOVE_CONTRIBUTOR: () => a.fbt._("Remove contributor", null, {
						hk: "4FMLz6"
					}),
					REMOVE_LINK: () => a.fbt._("Remove link", null, {
						hk: "tmjch"
					}),
					REMOVE_MODERATOR: () => a.fbt._("Remove moderator", null, {
						hk: "1FHVTB"
					}),
					REMOVE_WIKI_CONTRIBUTOR: () => a.fbt._("Remove wiki contributor", null, {
						hk: "1PcCja"
					}),
					REORDER_MODERATORS: () => a.fbt._("Reorder moderators", null, {
						hk: "3Csxj8"
					}),
					REORDER_RULES: () => a.fbt._("Reorder rules", null, {
						hk: "306Bqx"
					}),
					SET_CONTEST_MODE: () => a.fbt._("Set contest mode", null, {
						hk: "1pERnU"
					}),
					SET_PERMISSIONS: () => a.fbt._("Set permissions", null, {
						hk: "3UzkKU"
					}),
					SET_SUGGESTEDSORT: () => a.fbt._("Set suggested sort", null, {
						hk: "208T6K"
					}),
					SHOW_COMMENT: () => a.fbt._("Show comment", null, {
						hk: "n5M3i"
					}),
					SNOOZE_REPORTS: () => a.fbt._("Snooze reports", null, {
						hk: "3gOkDV"
					}),
					SPAM_COMMENT: () => a.fbt._("Spam comment", null, {
						hk: "2ROyTD"
					}),
					SPAM_LINK: () => a.fbt._("Spam link", null, {
						hk: "2G5xg3"
					}),
					SPOILER: () => a.fbt._("Spoiler", null, {
						hk: "2nfv1a"
					}),
					STICKY: () => a.fbt._("Sticky", null, {
						hk: "1W6JrJ"
					}),
					SUBMIT_CONTENT_RATING_SURVEY: () => a.fbt._("Submit content rating survey", null, {
						hk: "1F1ead"
					}),
					SUBMIT_SCHEDULED_POST: () => a.fbt._("Submit scheduled post", null, {
						hk: "1i2VUH"
					}),
					UNBAN_USER: () => a.fbt._("Unban user", null, {
						hk: "4m2iNP"
					}),
					UNIGNORE_REPORTS: () => a.fbt._("Unignore reports", null, {
						hk: "1wfp99"
					}),
					UNINVITE_MODERATOR: () => a.fbt._("Uninvite moderator", null, {
						hk: "3E6UkD"
					}),
					UNLOCK: () => a.fbt._("Unlock", null, {
						hk: "2BHnOC"
					}),
					UNMUTE_USER: () => a.fbt._("Unmute user", null, {
						hk: "25tct2"
					}),
					UNSET_CONTEST_MODE: () => a.fbt._("Unset contest mode", null, {
						hk: "AxsDk"
					}),
					UNSNOOZE_REPORTS: () => a.fbt._("Unsnooze reports", null, {
						hk: "4nlwcg"
					}),
					UNSPOILER: () => a.fbt._("Unspoiler", null, {
						hk: "2gE1K1"
					}),
					UNSTICKY: () => a.fbt._("Unsticky", null, {
						hk: "U5tvd"
					}),
					WIKI_BANNED: () => a.fbt._("Wiki banned", null, {
						hk: "1nk4H7"
					}),
					WIKI_CONTRIBUTOR: () => a.fbt._("Wiki contributor", null, {
						hk: "1W6zn3"
					}),
					WIKI_PAGE_LISTED: () => a.fbt._("Wiki page listed", null, {
						hk: "4aghdO"
					}),
					WIKI_PERM_LEVEL: () => a.fbt._("Wiki perm level", null, {
						hk: "4waHE"
					}),
					WIKI_REVISE: () => a.fbt._("Wiki revise", null, {
						hk: "3FZuIJ"
					}),
					WIKI_UNBANNED: () => a.fbt._("Wiki unbanned", null, {
						hk: "1fAtKd"
					})
				},
				_ = {
					added_event_times: () => a.fbt._("added event times to post", null, {
						hk: "1TpgVq"
					}),
					added_flair_styling: () => a.fbt._("added flair styling", null, {
						hk: "zQ6Tv"
					}),
					added_styling: () => a.fbt._("modified community styling", null, {
						hk: "xSJ7B"
					}),
					added_to_collection: () => a.fbt._("added post to collection", null, {
						hk: "3V4fk0"
					}),
					added_widget: () => a.fbt._("added widget", null, {
						hk: "1eVJg6"
					}),
					allow_discovery: () => a.fbt._("toggle allow in search/onboarding/discovery", null, {
						hk: "3on6Qf"
					}),
					allow_top: () => a.fbt._("toggle allow in default/trending lists", null, {
						hk: "DikzW"
					}),
					collapse_deleted_comments: () => a.fbt._("toggle collapse deleted/removed comments", null, {
						hk: "22QPzD"
					}),
					comment_score_hide_mins: () => a.fbt._("comment score hide period", null, {
						hk: "21jsup"
					}),
					confirm_ham: () => a.fbt._("approved", null, {
						hk: "3xh84x"
					}),
					confirm_spam: () => a.fbt._("confirm spam", null, {
						hk: "2yAos0"
					}),
					created_collection: () => a.fbt._("created collection", null, {
						hk: "3vtmUM"
					}),
					css_on_cname: () => a.fbt._("toggle custom css from cname", null, {
						hk: "LTlcB"
					}),
					del_banner: () => a.fbt._("delete banner image", null, {
						hk: "2HRlu"
					}),
					del_header: () => a.fbt._("delete header image", null, {
						hk: "2k08m2"
					}),
					del_icon: () => a.fbt._("delete icon image", null, {
						hk: "43ObSQ"
					}),
					del_image: () => a.fbt._("delete image", null, {
						hk: "4ztzG0"
					}),
					deleted_collection: () => a.fbt._("deleted collection", null, {
						hk: "1T8FDF"
					}),
					description: () => a.fbt._("sidebar description", null, {
						hk: "3gBQBx"
					}),
					domain: () => a.fbt._("domain", null, {
						hk: "37Eg7w"
					}),
					edit_post_requirements: () => a.fbt._("edited post requirements", null, {
						hk: "CoMF6"
					}),
					edited_collection_description: () => a.fbt._("edited collection description", null, {
						hk: "ViGod"
					}),
					edited_collection_display_layout: () => a.fbt._("edited collection display layout", null, {
						hk: "xGExq"
					}),
					edited_collection_title: () => a.fbt._("edited collection title", null, {
						hk: "2x6aKQ"
					}),
					edited_event_body: () => a.fbt._("edited event post body", null, {
						hk: "2uwjvL"
					}),
					edited_event_times: () => a.fbt._("edited event post times", null, {
						hk: "3HNoa4"
					}),
					edited_event_title: () => a.fbt._("edited event post title", null, {
						hk: "4itZHA"
					}),
					edited_widget: () => a.fbt._("edited widget", null, {
						hk: "4eaNe6"
					}),
					enable_award: () => a.fbt._("enabled award", null, {
						hk: "3Ehki9"
					}),
					exclude_banned_modqueue: () => a.fbt._("toggle exclude banned users posts from modqueue", null, {
						hk: "j41F1"
					}),
					flair_clear_template: () => a.fbt._("clear flair template", null, {
						hk: "1IMRYi"
					}),
					flair_csv: () => a.fbt._("edit flair by csv", null, {
						hk: "480ZDT"
					}),
					flair_delete_template: () => a.fbt._("delete flair template", null, {
						hk: "bJ8f2"
					}),
					flair_add: () => a.fbt._("add flair", null, {
						hk: "281rsb"
					}),
					flair_delete: () => a.fbt._("delete flair", null, {
						hk: "2UkqAp"
					}),
					flair_edit: () => a.fbt._("edit flair", null, {
						hk: "3oxZYq"
					}),
					flair_enabled: () => a.fbt._("toggle flair enabled", null, {
						hk: "9WUzt"
					}),
					flair_position: () => a.fbt._("toggle user flair position", null, {
						hk: "4cwkk5"
					}),
					flair_self_enabled: () => a.fbt._("toggle user assigned flair enabled", null, {
						hk: "4q13ZR"
					}),
					flair_template: () => a.fbt._("add/edit flair templates", null, {
						hk: "NSSHD"
					}),
					free_form_reports: () => a.fbt._("toggle allow free form reports by users", null, {
						hk: "3MBfJn"
					}),
					header_title: () => a.fbt._("header title", null, {
						hk: "40Y0QO"
					}),
					ignore_reports: () => a.fbt._("ignore reports", null, {
						hk: "h7fov"
					}),
					lang: () => a.fbt._("language", null, {
						hk: "2xhrR8"
					}),
					link_flair_position: () => a.fbt._("toggle link flair position", null, {
						hk: "3j33wQ"
					}),
					link_flair_self_enabled: () => a.fbt._("toggle submitter assigned link flair enabled", null, {
						hk: "43EykN"
					}),
					link_type: () => a.fbt._("link type", null, {
						hk: "2FuNM"
					}),
					over_18: () => a.fbt._("toggle viewers must be over 18", null, {
						hk: "PRgas"
					}),
					permanent: () => a.fbt._("permanent ban", null, {
						hk: "3MeL5T"
					}),
					permission_moderator_invite: () => a.fbt._("set permissions on moderator invitation", null, {
						hk: "hA7I9"
					}),
					permission_moderator: () => a.fbt._("set permissions on moderator", null, {
						hk: "1yq3O2"
					}),
					public_description: () => a.fbt._("description", null, {
						hk: "JizZj"
					}),
					public_traffic: () => a.fbt._("toggle public traffic stats page", null, {
						hk: "qIXty"
					}),
					remove_self: () => a.fbt._("removed self", null, {
						hk: "I5wgr"
					}),
					remove: () => a.fbt._("remove", null, {
						hk: "mAXhe"
					}),
					removed_from_collection: () => a.fbt._("removed post from collection", null, {
						hk: "2dwuxr"
					}),
					removed_styling: () => a.fbt._("removed community styling", null, {
						hk: "1p7Io9"
					}),
					removed_widget: () => a.fbt._("removed widget", null, {
						hk: "43WUko"
					}),
					show_cname_sidebar: () => a.fbt._("toggle show sidebar from cname", null, {
						hk: "4nlv2A"
					}),
					show_media: () => a.fbt._("toggle show thumbnail images of content", null, {
						hk: "2XmVTJ"
					}),
					spam: () => a.fbt._("spam", null, {
						hk: "3usg93"
					}),
					stylesheet: () => a.fbt._("stylesheet", null, {
						hk: "1TOdUF"
					}),
					submit_link_label: () => a.fbt._("submit link button label", null, {
						hk: "4BdL19"
					}),
					submit_text_label: () => a.fbt._("submit text post button label", null, {
						hk: "4wc8qi"
					}),
					title: () => a.fbt._("title", null, {
						hk: "3tlhiX"
					}),
					type: () => a.fbt._("type", null, {
						hk: "14BQua"
					}),
					unspam: () => a.fbt._("unspam", null, {
						hk: "3SxHQ4"
					}),
					upload_image_banner: () => a.fbt._("upload image banner", null, {
						hk: "1ocFEe"
					}),
					upload_image_header: () => a.fbt._("upload image header", null, {
						hk: "3J6pke"
					}),
					upload_image_icon: () => a.fbt._("upload image icon", null, {
						hk: "4jr6Eg"
					}),
					upload_image: () => a.fbt._("upload image", null, {
						hk: "2KN9ig"
					}),
					copyright_removal: () => a.fbt._("copyright removal", null, {
						hk: "9vN6G"
					}),
					copyright_restoration: () => a.fbt._("copyright restoration", null, {
						hk: "35qFx5"
					})
				};
			var k, y;
			! function(e) {
				e.AWARD = "Award", e.COMMENT = "Comment", e.FLAIR = "Flair", e.MULTIPLE = "Multiple", e.POST = "Post", e.REDDITOR = "Redditor", e.SETTINGS = "Settings", e.WIKI = "Wiki", e.COLLECTION = "Collection", e.EVENT = "Event"
			}(k || (k = {})),
			function(e) {
				e.NONE = "none", e.POSITIVE = "positive", e.NEGATIVE = "negative"
			}(y || (y = {}));
			var O = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/lib/addQueryParams/index.ts"),
				w = s("./src/lib/stripQueryParams/index.ts");
			const j = e => {
				const t = e.action && "ALL_ACTIONS" !== e.action ? e.action : null,
					s = e.moderator || null,
					n = e.endCursor || null,
					a = e.startCursor || null;
				return Object(S.a)(Object(w.a)(e.currentPageUrl), {
					action: t,
					moderator: s,
					after: n,
					before: a
				})
			};
			var I = s("./src/reddit/selectors/telemetry.ts");
			const N = e => ({
					subreddit: I.subreddit(e),
					userSubreddit: I.userSubreddit(e)
				}),
				T = () => e => ({
					source: "mod_log",
					action: "click",
					noun: "mod_filter_dropdown",
					...N(e)
				}),
				P = () => e => ({
					source: "mod_filter_dropdown",
					action: "click",
					noun: "moderator",
					...N(e)
				}),
				M = () => e => ({
					source: "mod_log",
					action: "click",
					noun: "mod_action_dropdown",
					...N(e)
				}),
				R = e => t => ({
					source: "mod_action_dropdown",
					action: "click",
					noun: e.toLowerCase(),
					...N(t)
				});
			var A = s("./src/reddit/components/ModerationLog/FilterByDropdowns/index.m.less"),
				L = s.n(A);
			class F extends r.a.Component {
				constructor(e) {
					super(e), this.buildModLogUrlForAction = e => {
						const {
							currentPageUrl: t,
							moderator: s
						} = this.props;
						return j({
							currentPageUrl: t,
							moderator: s,
							action: e
						})
					}, this.onChangeFilterText = e => {
						const t = e.currentTarget.value,
							s = this.getFilteredActions(t);
						this.setState({
							currentInputText: t,
							filteredActions: s
						})
					}, this.onKeyDown = e => {
						if (e.which === x.a.Enter) {
							const {
								filteredActions: t
							} = this.state, s = t.length ? this.buildModLogUrlForAction(t[0]) : null;
							s && (this.props.onChangeUrl(s), e.preventDefault())
						}
					}, this.onActionClick = e => {
						this.props.sendEvent(R(e))
					}, this.state = {
						currentInputText: "",
						filteredActions: this.getFilteredActions("")
					}
				}
				getFilteredActions(e) {
					let t = Object.keys(C);
					if (e) {
						const s = e.toLowerCase();
						t = t.filter(e => C[e]().toString().toLowerCase().includes(s))
					}
					return t
				}
				render() {
					const {
						className: e
					} = this.props, {
						filteredActions: t
					} = this.state;
					return r.a.createElement("div", {
						role: "menu",
						className: e
					}, r.a.createElement("input", {
						"aria-label": a.fbt._("Filter", null, {
							hk: "UqHZD"
						}),
						className: L.a.filter,
						placeholder: a.fbt._("Filter", null, {
							hk: "3sxP3l"
						}),
						onChange: this.onChangeFilterText,
						onKeyDown: this.onKeyDown
					}), t.map(e => r.a.createElement(O.a, {
						className: L.a.dropdownRow,
						onClick: () => this.onActionClick(e),
						to: this.buildModLogUrlForAction(e)
					}, C[e]())))
				}
			}
			var D = F,
				U = s("./src/lib/objectSelector/index.ts"),
				B = s("./src/reddit/models/SubredditModeration/ModerationLog/index.ts");
			const W = Object(U.a)((e, {
					subredditId: t
				}) => {
					let s = [];
					const n = H(e),
						a = V(e);
					if (n && a) {
						const o = Object(B.a)(t, n, a),
							r = e.pages.modHub.moderationLog.actions.itemOrder[t] && e.pages.modHub.moderationLog.actions.itemOrder[t][o];
						r && (s = r.map(s => e.pages.modHub.moderationLog.actions.models[t][s]))
					}
					return s
				}),
				H = e => e.pages.modHub.moderationLog.endCursor,
				V = e => e.pages.modHub.moderationLog.startCursor,
				q = ({
					name: e,
					urlPath: t
				}) => r.a.createElement(O.a, {
					className: L.a.dropdownRow,
					to: t
				}, e),
				G = "a",
				z = "AutoModerator",
				K = Object(d.c)({
					allModerators: (e, {
						subredditId: t
					}) => ((e, t) => e.pages.modHub.moderationLog.moderators[t] || [])(e, t)
				});
			class X extends r.a.Component {
				constructor(e) {
					super(e), this.onChangeFilterText = e => {
						const t = e.currentTarget.value,
							s = this.getList(t);
						this.setState({
							currentInputText: t,
							filteredList: s
						})
					}, this.onKeyDown = e => {
						if (e.which === x.a.Enter) {
							const {
								filteredList: t
							} = this.state, s = t.length ? t[0].url : "";
							s && (this.props.onChangeUrl(s), e.preventDefault())
						}
					}, this.onDropdownClick = e => {
						e.target instanceof HTMLAnchorElement && this.props.sendEvent(P())
					}, this.state = {
						currentInputText: "",
						filteredList: this.getList("")
					}
				}
				getList(e) {
					const {
						action: t,
						currentPageUrl: s
					} = this.props, n = e => j({
						currentPageUrl: s,
						action: t,
						moderator: e
					}), o = [{
						url: n(""),
						displayText: `${a.fbt._("All Moderators",null,{hk:"3vmWA8"})}`
					}, {
						url: n(G),
						displayText: `${a.fbt._("Admins",null,{hk:"4mKRNI"})}`
					}, {
						url: n(z),
						displayText: `${a.fbt._("AutoModerator",null,{hk:"4wxc1W"})}`
					}, ...this.props.allModerators.map(e => ({
						url: n(e.name),
						displayText: e.name
					}))];
					if (e) {
						const t = e.toLowerCase();
						return o.filter(e => e.displayText.toLowerCase().includes(t))
					}
					return o
				}
				render() {
					const {
						className: e
					} = this.props, {
						filteredList: t
					} = this.state;
					return r.a.createElement("div", {
						role: "menu",
						className: e,
						onClick: this.onDropdownClick
					}, r.a.createElement("input", {
						"aria-label": a.fbt._("Filter", null, {
							hk: "1qnOD5"
						}),
						className: L.a.filter,
						placeholder: a.fbt._("Filter", null, {
							hk: "1sWvOA"
						}),
						onChange: this.onChangeFilterText,
						onKeyDown: this.onKeyDown
					}), t.map((e, t) => r.a.createElement(q, {
						key: t,
						name: e.displayText,
						urlPath: e.url
					})))
				}
			}
			var Q = Object(i.b)(K)(X),
				J = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Y = s("./src/reddit/controls/Dropdown/index.tsx"),
				Z = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				$ = s("./src/reddit/selectors/tooltip.ts");
			const ee = "mod-log-action-filter-dropdown",
				te = "mod-log-moderator-filter-dropdown",
				se = Object(g.a)(Y.a),
				ne = Object(d.c)({
					isActionFilterDropdownOpen: Object($.b)(ee),
					isModeratorFilterDropdownOpen: Object($.b)(te)
				});
			class ae extends r.a.Component {
				constructor() {
					super(...arguments), this.getContainerText = e => {
						const {
							action: t,
							moderator: s
						} = this.props;
						if (e === v.MODERATOR) {
							let e = s;
							return s === G && (e = a.fbt._("Admins", null, {
								hk: "1qJDMA"
							})), e || a.fbt._("All Moderators", null, {
								hk: "18DhaK"
							})
						}
						if (e === v.ACTION) {
							return t && C[t] && C[t]() || a.fbt._("Actions", null, {
								hk: "1s4OJD"
							})
						}
					}, this.openModFilterDropdown = () => {
						this.props.onOpenDropdown(te), this.props.sendEvent(T())
					}, this.openActionFilterDropdown = () => {
						this.props.onOpenDropdown(ee), this.props.sendEvent(M())
					}
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					const {
						action: e,
						currentPageUrl: t,
						isActionFilterDropdownOpen: s,
						isModeratorFilterDropdownOpen: n,
						moderator: o,
						subredditId: i
					} = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: L.a.container,
						onClickCapture: this.stopPropagation
					}, r.a.createElement("button", {
						"aria-expanded": n,
						"aria-label": a.fbt._("Start typing to filter moderators or use up and down to select.", null, {
							hk: "4ff0MW"
						}),
						className: L.a.selector,
						id: te,
						onClick: this.openModFilterDropdown,
						role: "navigation"
					}, r.a.createElement("span", {
						className: L.a.containerText
					}, this.getContainerText(v.MODERATOR)), r.a.createElement(Z.a, null)), r.a.createElement(se, {
						tooltipId: te,
						isOpen: n
					}, r.a.createElement(Q, {
						action: e,
						className: L.a.listContainer,
						currentPageUrl: t,
						moderator: o,
						onChangeUrl: this.props.pushUrl,
						sendEvent: this.props.sendEvent,
						subredditId: i
					}))), r.a.createElement("div", {
						className: L.a.container,
						onClickCapture: this.stopPropagation
					}, r.a.createElement("button", {
						"aria-expanded": s,
						"aria-label": a.fbt._("Start typing to filter the mod actions or use up and down to select.", null, {
							hk: "32A4KB"
						}),
						className: L.a.selector,
						id: ee,
						onClick: this.openActionFilterDropdown,
						role: "navigation"
					}, r.a.createElement("span", {
						className: L.a.containerText
					}, this.getContainerText(v.ACTION)), r.a.createElement(Z.a, null)), r.a.createElement(se, {
						tooltipId: ee,
						isOpen: s
					}, r.a.createElement(D, {
						action: e,
						className: L.a.listContainer,
						currentPageUrl: t,
						moderator: o,
						onChangeUrl: this.props.pushUrl,
						sendEvent: this.props.sendEvent
					}))))
				}
			}
			var oe = Object(i.b)(ne, e => ({
					onOpenDropdown: t => e(Object(f.h)({
						tooltipId: t
					})),
					pushUrl: t => e(Object(b.b)(t))
				}))(Object(J.c)(ae)),
				re = s("./node_modules/lodash/noop.js"),
				ie = s.n(re),
				de = s("./src/lib/timeAgo/index.ts"),
				le = s("./src/reddit/components/AuthorLink/index.tsx"),
				ce = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				ue = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				me = s("./src/reddit/models/User/index.ts"),
				pe = (s("./src/lib/assertNever.ts"), s("./src/lib/sentry/index.ts"));
			var he = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				be = s("./src/reddit/icons/svgs/Collection/index.tsx"),
				ge = s("./src/reddit/icons/svgs/Event/index.tsx"),
				fe = s("./src/reddit/icons/svgs/Gild/index.tsx"),
				xe = s("./src/reddit/icons/svgs/ModLogPosts/index.tsx"),
				Ee = s("./src/reddit/icons/svgs/Negative/index.tsx"),
				ve = s("./src/reddit/icons/svgs/Positive/index.tsx"),
				Ce = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				_e = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				ke = s("./src/reddit/icons/svgs/Tag/index.tsx"),
				ye = s("./src/reddit/icons/svgs/Wiki/index.tsx"),
				Oe = s("./src/reddit/models/Comment/index.ts"),
				Se = s("./src/reddit/models/FeedElement/index.ts"),
				we = s("./src/reddit/components/ModerationLog/ModerationLogItem/index.m.less"),
				je = s.n(we);
			const Ie = ({
					action: e,
					urlPath: t
				}) => {
					const s = (e => {
							switch (e) {
								case "ALL_ACTIONS":
									return;
								case "ADD_CONTRIBUTOR":
								case "ADD_MODERATOR":
									return {
										type: k.REDDITOR, treatment: y.POSITIVE
									};
								case "BAN_USER":
								case "MUTE_USER":
								case "REMOVE_CONTRIBUTOR":
								case "REMOVE_MODERATOR":
									return {
										type: k.REDDITOR, treatment: y.NEGATIVE
									};
								case "CREATE_AWARD":
								case "MOD_AWARD_GIVEN":
									return {
										type: k.AWARD, treatment: y.POSITIVE
									};
								case "DELETE_AWARD":
								case "DISABLE_AWARD":
								case "ENABLE_AWARD":
								case "HIDDEN_AWARD":
									return {
										type: k.AWARD, treatment: y.NEGATIVE
									};
								case "ACCEPT_MODERATOR_INVITE":
								case "INVITE_MODERATOR":
								case "INVITE_SUBSCRIBER":
								case "SET_PERMISSIONS":
								case "UNBAN_USER":
								case "UNINVITE_MODERATOR":
								case "UNMUTE_USER":
									return {
										type: k.REDDITOR, treatment: y.NONE
									};
								case "APPROVE_COMMENT":
								case "SHOW_COMMENT":
									return {
										type: k.COMMENT, treatment: y.POSITIVE
									};
								case "REMOVE_COMMENT":
								case "SPAM_COMMENT":
									return {
										type: k.COMMENT, treatment: y.NEGATIVE
									};
								case "EDIT_FLAIR":
									return {
										type: k.FLAIR, treatment: y.NONE
									};
								case "APPROVE_LINK":
									return {
										type: k.POST, treatment: y.POSITIVE
									};
								case "REMOVE_LINK":
								case "SPAM_LINK":
									return {
										type: k.POST, treatment: y.NEGATIVE
									};
								case "LOCK":
								case "MARK_NSFW":
								case "MARK_ORIGINAL_CONTENT":
								case "SET_CONTEST_MODE":
								case "SET_SUGGESTEDSORT":
								case "SPOILER":
								case "UNLOCK":
								case "UNSET_CONTEST_MODE":
								case "UNSPOILER":
									return {
										type: k.POST, treatment: y.NONE
									};
								case "DISTINGUISH":
								case "IGNORE_REPORTS":
								case "SNOOZE_REPORTS":
								case "STICKY":
								case "UNIGNORE_REPORTS":
								case "UNSNOOZE_REPORTS":
								case "UNSTICKY":
									return {
										type: k.MULTIPLE, treatment: y.NONE
									};
								case "ADD_COMMUNITY_TOPICS":
								case "ADJUST_POST_CROWD_CONTROL_LEVEL":
								case "REMOVE_COMMUNITY_TOPICS":
								case "COMMUNITY_STYLING":
								case "COMMUNITY_WIDGETS":
								case "CREATE_RULE":
								case "DELETE_RULE":
								case "EDIT_POST_REQUIREMENTS":
								case "EDIT_RULE":
								case "REORDER_RULES":
								case "REORDER_MODERATORS":
								case "EDIT_SETTINGS":
								case "MODMAIL_ENROLLMENT":
								case "SUBMIT_CONTENT_RATING_SURVEY":
								case "DELETE_OVERRIDDEN_CLASSIFICATION":
								case "OVERRIDE_CLASSIFICATION":
									return {
										type: k.SETTINGS, treatment: y.NONE
									};
								case "REMOVE_WIKI_CONTRIBUTOR":
								case "WIKI_BANNED":
									return {
										type: k.WIKI, treatment: y.NEGATIVE
									};
								case "WIKI_CONTRIBUTOR":
								case "WIKI_PAGE_LISTED":
								case "WIKI_PERM_LEVEL":
								case "WIKI_REVISE":
								case "WIKI_UNBANNED":
									return {
										type: k.WIKI, treatment: y.NONE
									};
								case "COLLECTIONS":
									return {
										type: k.COLLECTION, treatment: y.NONE
									};
								case "EVENTS":
									return {
										type: k.EVENT, treatment: y.NONE
									};
								case "CREATE_SCHEDULED_POST":
								case "EDIT_SCHEDULED_POST":
								case "DELETE_SCHEDULED_POST":
								case "SUBMIT_SCHEDULED_POST":
									return {
										type: k.POST, treatment: y.NONE
									};
								default:
									return void pe.c.captureMessage(`Unknown mod action "${e}"`)
							}
						})(e.action),
						n = e.target && e.target.__typename,
						a = n === Oe.d.Comment || Oe.d.DeletedComment;
					let o;
					switch (s && s.type) {
						case k.AWARD:
							o = r.a.createElement(fe.a, {
								className: je.a.icon
							});
							break;
						case k.COMMENT:
							o = r.a.createElement(he.a, null);
							break;
						case k.FLAIR:
							o = r.a.createElement(ke.a, {
								className: je.a.icon
							});
							break;
						case k.POST:
							o = r.a.createElement(xe.a, {
								className: je.a.icon
							});
							break;
						case k.REDDITOR:
							o = r.a.createElement(Ce.a, {
								className: je.a.icon
							});
							break;
						case k.SETTINGS:
							o = r.a.createElement(_e.a, {
								className: je.a.icon
							});
							break;
						case k.WIKI:
							o = r.a.createElement(ye.a, {
								className: je.a.icon
							});
							break;
						case k.COLLECTION:
							o = r.a.createElement(be.a, {
								className: je.a.icon
							});
							break;
						case k.EVENT:
							o = r.a.createElement(ge.a, {
								className: je.a.icon
							});
							break;
						case k.MULTIPLE:
							a && (o = r.a.createElement(he.a, null)), n === Se.a.SubredditPost && (o = r.a.createElement(xe.a, {
								className: je.a.icon
							}))
					}
					const i = C[e.action];
					return r.a.createElement(O.a, {
						className: je.a.actionLink,
						to: t
					}, r.a.createElement("span", {
						className: je.a.iconWrapper
					}, o, s && s.treatment === y.POSITIVE ? r.a.createElement(ve.a, {
						className: je.a.positiveTreatment
					}) : s && s.treatment === y.NEGATIVE ? r.a.createElement(Ee.a, {
						className: je.a.negativeTreatment
					}) : null), i && i())
				},
				Ne = ({
					action: e
				}) => {
					const t = e.target && e.target.__typename;
					let s, n, a, o = e.target;
					switch (t) {
						case Se.a.SubredditPost:
							s = (o = o).authorInfo && o.authorInfo.__typename === me.c.AvailableRedditor && o.authorInfo.name || null, n = o.title, a = o.permalink;
							break;
						case Se.a.DeletedSubredditPost:
							s = null, n = (o = o).title, a = o.permalink;
							break;
						case me.c.AvailableRedditor:
							s = (o = o) && o.name || null, n = null;
							break;
						case Oe.d.Comment:
							s = (o = o).authorInfo && o.authorInfo.__typename === me.c.AvailableRedditor && o.authorInfo.name || null, n = o.content && o.content.markdown, a = o.permalink;
							break;
						case Oe.d.DeletedComment:
							s = null, n = (o = o).postInfo && o.postInfo.title, a = o.postInfo && o.postInfo.permalink;
							break;
						default:
							s = null, n = null, a = void 0
					}
					let i = e.details;
					_[e.details] && (i = e.details && _[e.details]());
					let d = e.actionNotes || i;
					return e.actionNotes && i && (d = `${i}: ${e.actionNotes}`), r.a.createElement("div", {
						className: je.a.detailsContainer
					}, s && !E.includes(s) ? r.a.createElement(ce.a, {
						tooltipId: `userlink-${e.id}`,
						user: s,
						sendHoverCardEvent: ie.a
					}, r.a.createElement(le.a, {
						className: je.a.usernameLink,
						author: s
					}, `u/${s}`)) : s, n && a && r.a.createElement("a", {
						className: je.a.detailsContent,
						target: "_blank",
						rel: "noopener noreferrer",
						href: a
					}, n), d && r.a.createElement("span", {
						className: je.a.detailsType
					}, `(${d})`))
				},
				Te = "mod-log-timestamp-";
			class Pe extends r.a.Component {
				constructor() {
					super(...arguments), this.createTimestamp = e => {
						return new Date(e).toString()
					}, this.getTooltipId = e => `${Te}${e}`, this.getActionModeratorName = e => e && e.__typename === me.c.AvailableRedditor ? e.name : null
				}
				render() {
					const {
						action: e,
						currentPageUrl: t,
						moderator: s,
						onHideTooltip: n,
						onShowTooltip: a
					} = this.props, o = this.getTooltipId(e.id), i = this.getActionModeratorName(e.moderator);
					return r.a.createElement("tr", {
						className: je.a.row
					}, r.a.createElement("td", null, r.a.createElement("span", {
						id: o,
						onMouseEnter: () => a(o),
						onMouseLeave: n,
						className: je.a.tooltip
					}, Object(de.d)(e.createdAt / 1e3), r.a.createElement(ue.c, {
						className: je.a.createdAtTooltip,
						tooltipId: o,
						text: this.createTimestamp(e.createdAt)
					}))), r.a.createElement("td", {
						className: je.a.modNameCell
					}, i && !E.includes(i) ? r.a.createElement(ce.a, {
						tooltipId: `modlink-${e.id}`,
						user: i,
						sendHoverCardEvent: ie.a
					}, r.a.createElement(le.a, {
						author: i,
						className: je.a.usernameLink
					}, i)) : i), r.a.createElement("td", null, r.a.createElement(Ie, {
						action: e,
						urlPath: j({
							currentPageUrl: t,
							action: e.action,
							moderator: s
						})
					})), r.a.createElement("td", null, r.a.createElement(Ne, {
						action: e
					})))
				}
			}
			var Me = Object(i.b)(null, e => ({
					onHideTooltip: () => e(Object(f.i)()),
					onShowTooltip: t => e(Object(f.f)({
						tooltipId: t
					}))
				}))(Pe),
				Re = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				Ae = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				Le = s("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				Fe = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				De = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				Ue = s("./src/reddit/constants/parameters.ts"),
				Be = s("./src/reddit/contexts/PageLayer/index.tsx"),
				We = s("./src/reddit/components/ModerationLog/index.m.less"),
				He = s.n(We);
			const Ve = Object(Be.t)({
					currentPageUrl: Be.e,
					queryParams: Be.T
				}),
				qe = Object(d.c)({
					actionsList: W,
					endCursor: H,
					nextPage: (e, {
						subredditId: t
					}) => e.pages.modHub.moderationLog.hasNextPage[t],
					previousPage: (e, {
						subredditId: t
					}) => e.pages.modHub.moderationLog.hasPreviousPage[t],
					startCursor: V
				}),
				Ge = Object(i.b)(qe, (e, {
					subreddit: t
				}) => ({
					fetchAllModerators: () => e((e => async (t, s, {
						gqlContext: n
					}) => {
						const a = s(),
							o = Object(m.F)(a, e);
						if (a.pages.modHub.moderationLog.moderators[o]) return;
						const r = await Object(c.b)(n(), e);
						if (r.body) {
							const e = r.body.data.subreddit.moderators;
							if (e) {
								const s = Object(u.a)(e);
								t(h({
									normalizedModerators: s,
									subredditId: o
								}))
							}
						}
					})(t.name))
				}));
			class ze extends r.a.Component {
				componentDidMount() {
					"complete" === document.readyState ? this.props.fetchAllModerators() : window.addEventListener("load", this.props.fetchAllModerators)
				}
				render() {
					const {
						actionsList: e,
						currentPageUrl: t,
						endCursor: s,
						nextPage: o,
						previousPage: i,
						queryParams: d,
						startCursor: l,
						subredditId: c
					} = this.props, u = d[Ue.n] || null, m = d[Ue.m] || null, p = {
						currentPageUrl: t,
						action: u,
						moderator: m,
						startCursor: l
					}, h = {
						currentPageUrl: t,
						endCursor: s,
						action: u,
						moderator: m
					};
					return r.a.createElement(Fe.a, {
						className: He.a.contentContainer
					}, r.a.createElement(Fe.b, null, a.fbt._("Mod log", null, {
						hk: "UdwRO"
					}), r.a.createElement(Re.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360022402312`
					})), r.a.createElement(De.a, null, r.a.createElement("span", {
						className: He.a.title
					}, a.fbt._("Filter by", null, {
						hk: "3RkGvd"
					})), r.a.createElement(oe, {
						action: u,
						currentPageUrl: t,
						moderator: m,
						subredditId: c
					}), r.a.createElement(Le.a, {
						prevButtonEnabled: i,
						prevTo: j(p),
						nextButtonEnabled: o,
						nextTo: j(h)
					})), r.a.createElement("table", {
						className: He.a.table
					}, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", {
						className: He.a.timeColHeader
					}, a.fbt._("time", null, {
						hk: "1EnamY"
					})), r.a.createElement("th", {
						className: He.a.modNameColHeader
					}, a.fbt._("moderator", null, {
						hk: "22lRDF"
					})), r.a.createElement("th", {
						className: He.a.actionNameColHeader
					}, r.a.createElement("span", {
						className: He.a.tooltip
					}, a.fbt._("action", null, {
						hk: "243Ltb"
					}), r.a.createElement(Ae.a, {
						className: He.a.actionTooltip
					}, r.a.createElement("div", {
						className: He.a.actionTooltipDescription
					}, a.fbt._("Actions performed within your community", null, {
						hk: "3RTNED"
					})), r.a.createElement("div", {
						className: He.a.allIconsContainer
					}, r.a.createElement("div", {
						className: He.a.iconContainer
					}, r.a.createElement(xe.a, {
						className: He.a.icon
					}), a.fbt._("Post", null, {
						hk: "9rK7i"
					})), r.a.createElement("div", {
						className: He.a.iconContainer
					}, r.a.createElement(he.a, null), a.fbt._("Comment", null, {
						hk: "1N3Vo2"
					})), r.a.createElement("div", {
						className: He.a.iconContainer
					}, r.a.createElement(ke.a, {
						className: He.a.icon
					}), a.fbt._("Flair", null, {
						hk: "roX9r"
					})), r.a.createElement("div", {
						className: He.a.iconContainer
					}, r.a.createElement(ye.a, {
						className: He.a.icon
					}), a.fbt._("Wiki", null, {
						hk: "27Czfb"
					})), r.a.createElement("div", {
						className: He.a.iconContainer
					}, r.a.createElement(Ce.a, {
						className: He.a.icon
					}), a.fbt._("User management", null, {
						hk: "NIFnh"
					})), r.a.createElement("div", {
						className: He.a.iconContainer
					}, r.a.createElement(_e.a, {
						className: He.a.icon
					}), a.fbt._("Community settings", null, {
						hk: "139FAy"
					})), r.a.createElement("div", {
						className: He.a.iconContainer
					}, r.a.createElement(be.a, {
						className: He.a.icon
					}), a.fbt._("Collection", null, {
						hk: "3a6W4E"
					})), r.a.createElement("div", {
						className: He.a.iconContainer
					}, r.a.createElement(ge.a, {
						className: He.a.icon
					}), a.fbt._("Event", null, {
						hk: "2odtv8"
					})), r.a.createElement("div", {
						className: He.a.iconContainer
					}, r.a.createElement(fe.a, {
						className: He.a.icon
					}), a.fbt._("Award", null, {
						hk: "1wcAOA"
					})))))), r.a.createElement("th", null, r.a.createElement("span", {
						className: He.a.tooltip
					}, a.fbt._("details", null, {
						hk: "1hCsar"
					}), r.a.createElement(Ae.a, {
						text: a.fbt._("Displays the author, post or comment link, and any additional information", null, {
							hk: "1EN2HF"
						})
					}))))), r.a.createElement("tbody", null, e.map(e => r.a.createElement(Me, {
						key: e.id,
						action: e,
						currentPageUrl: t,
						moderator: m
					})))), r.a.createElement("div", {
						className: He.a.bottomBarRow
					}, r.a.createElement(Le.a, {
						prevButtonEnabled: i,
						prevTo: j(p),
						nextButtonEnabled: o,
						nextTo: j(h)
					})))
				}
			}
			t.a = Ve(Ge(ze))
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.m.less": function(e, t, s) {
			e.exports = {
				NoResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				noResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				NoResultsText: "_3V0T64xptTp5xLaY-1nsaz",
				noResultsText: "_3V0T64xptTp5xLaY-1nsaz"
			}
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/ModerationPagesEmptyList/index.m.less"),
				i = s.n(r);
			const d = o.a.div("NoResultsContainer", i.a),
				l = o.a.div("NoResultsText", i.a);

			function c(e) {
				const {
					childrenPosition: t = "top"
				} = e;
				return a.a.createElement(d, {
					className: e.className
				}, "top" === t && e.children, a.a.createElement(l, null, e.text), "bottom" === t && e.children)
			}
		},
		"./src/reddit/components/ModeratorsList/AddModeratorModal/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "TOhrvfHoucDPr36mCCzXd",
				titleFontH2: "_3brDTRw250hGX1o5_C0hbB",
				titleFontH3: "_1wry80KT9v8gZ-OR85HxZU",
				titleFontH4: "_3UyiSE-qM-508iK8v3J9VE",
				titleFontH5: "_1X7-zzcj5Xf8vTf2xtYjK5",
				titleFontH6: "_2o19XEin0G5ad6iDvABrhH",
				metadataFont: "_1IpedXmIlnKyWpICNENnHX",
				flairFont: "_17kIb-dmfAlFCaIsLz34ar",
				labelsFont: "_3IrRBgoth_MxadAqzwGE2p",
				actionFont: "_1F_YPbXlF7ItI0z0j2Kdvy",
				smallButtonFont: "Irj9r66tO2hdWqbJx-vWa",
				largeButtonFont: "_26FBjOBHlTgNO9o-fMxWOX",
				strongTextFont: "_2umiFjo_kHT370YVhqkBUV",
				tabFont: "_1DLO-Qu2r3PHt-swAklwVx",
				buttonFontXS: "_2v4AgLqNSVXbMZLYk9vcId",
				buttonFontXs: "_2v4AgLqNSVXbMZLYk9vcId",
				buttonFontS: "_2MZUL_NnTj8rQV3EzNYnUE",
				buttonFontM: "_3cvFNq2HJE_JQWxO1GFYqj",
				buttonFontL: "_3PGa9K2pADItl7cyT0ykh_",
				buttonFontXL: "_1ZxChwU_-XfEgc5UHBhcTo",
				buttonFontXl: "_1ZxChwU_-XfEgc5UHBhcTo",
				bodyFontH1: "czPuE4HoIQInpzrURaqrX",
				bodyFontH2: "_1RMqo3EKzteTfSdM5Q-OSg",
				bodyFontH3: "_1SHo5_8OixTqxTjJ466mw1",
				bodyFontH4: "_3_zdAqdo55tnx5RHhyuGVr",
				bodyFontH5: "_22jno3ihRm-Ef63KN0Wuxa",
				bodyFontH6: "_28OREyYTHZDHgLjcK4pt_d",
				bodyFont: "_38nKHi6IDujIOM7SuazWPd",
				bodyFontSmall: "_1lPuNthSPFYSROqTVgJlNG",
				bodyFontMono: "_3C9ynyJ6Z174Fb3-8O20xa",
				footer: "_1a_UtwKPW009WQq9JDInTY",
				checkbox: "hXaFasafnItuHCckiO50p",
				checkboxDescription: "_2HjmM9sJH5PNkLQde58pxS",
				checkboxContainer: "_15zz-Q8aRGCDeqROyYsa6f",
				divider: "_1QbYDWR424D6xhw9foYGiP",
				primaryButton: "h4QlBfFmd6UnAtiNaOhcR",
				SecondaryText: "jJBOgTxr1pZp_VDUmHpJ3",
				secondaryText: "jJBOgTxr1pZp_VDUmHpJ3",
				ModalBody: "_2UK71LqBvNes-Kto-uSxfU",
				modalBody: "_2UK71LqBvNes-Kto-uSxfU",
				automodMore: "_2IpMI7l5irmIV4rSq0_hXy"
			}
		},
		"./src/reddit/components/ModeratorsList/InvitePendingModal.m.less": function(e, t, s) {
			e.exports = {
				ModalText: "LuEOOX6cpsihxJHcF5aDv",
				modalText: "LuEOOX6cpsihxJHcF5aDv",
				ModalTextBold: "_3FiaV5-fR6fAX63py6Vyzz",
				modalTextBold: "_3FiaV5-fR6fAX63py6Vyzz",
				PrimaryButton: "_1s7NYS-cterYTwRKWqmaY6",
				primaryButton: "_1s7NYS-cterYTwRKWqmaY6",
				SecondaryButton: "_31o7G_2349tIzHKunBJEua",
				secondaryButton: "_31o7G_2349tIzHKunBJEua",
				Section: "K3DxSh_MxIy1lMkeHIPMc",
				section: "K3DxSh_MxIy1lMkeHIPMc",
				Image: "_2kAbqMQ0IHDV7bXgZ6Jsmf",
				image: "_2kAbqMQ0IHDV7bXgZ6Jsmf",
				ModalMain: "_3Nec6X3UqKJgLUGDaw4NCq",
				modalMain: "_3Nec6X3UqKJgLUGDaw4NCq"
			}
		},
		"./src/reddit/components/ModeratorsList/InvitedModeratorsList.m.less": function(e, t, s) {
			e.exports = {
				ListTitle: "_1LuVAChAgGbcgUPh_K7ebp",
				listTitle: "_1LuVAChAgGbcgUPh_K7ebp",
				ListContainer: "_1IFQy3zyz-Lgs7iYZtQaPI",
				listContainer: "_1IFQy3zyz-Lgs7iYZtQaPI"
			}
		},
		"./src/reddit/components/ModeratorsList/Moderator.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "_2Pdzq06b5akGcY4hZ05n_5",
				pencilIcon: "_2Pdzq06b5akGcY4hZ05n_5",
				TrashIcon: "_2TU9GRodUTR72kz4zcFzxJ",
				trashIcon: "_2TU9GRodUTR72kz4zcFzxJ",
				InteractiveDiv: "qaNZ40bbce8HBshNk04f0",
				interactiveDiv: "qaNZ40bbce8HBshNk04f0"
			}
		},
		"./src/reddit/components/ModeratorsList/ResignAsModeratorModal/index.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_3j2WCnh8ZjDRHIILJwKzkx",
				primaryButton: "_3j2WCnh8ZjDRHIILJwKzkx"
			}
		},
		"./src/reddit/components/ModeratorsList/index.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "_3s9PIWHO5f49Yj01FelAkk",
				listContainer: "_3s9PIWHO5f49Yj01FelAkk",
				SecondaryButton: "_3wQwmI4Vsj0qouIT5DTZo",
				secondaryButton: "_3wQwmI4Vsj0qouIT5DTZo",
				EditableTitle: "_1IBuDqoejky7tmj25quCUh",
				editableTitle: "_1IBuDqoejky7tmj25quCUh",
				UsersLoading: "_1oLmt3eyMItCQozx1nTk1E",
				usersLoading: "_1oLmt3eyMItCQozx1nTk1E"
			}
		},
		"./src/reddit/components/ModeratorsList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/stripQueryParams/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/subredditModeration/index.ts"),
				h = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				b = s("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				g = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				x = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				E = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				k = s("./src/reddit/models/SubredditModeration/index.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/meta.ts"),
				S = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/lib/objectSelector/index.ts");
			const j = [],
				I = Object(w.a)((e, {
					subredditId: t,
					before: s,
					after: n
				}) => {
					const a = Object(k.d)(t, n, s),
						o = e.pages.modHub.moderators.userOrder.data[t] && e.pages.modHub.moderators.userOrder.data[t][a];
					return o ? o.map(s => e.pages.modHub.moderators.models[t][s]) : []
				}),
				N = Object(w.a)((e, {
					subredditId: t
				}) => {
					const s = e.pages.modHub.moderators.invitedModerators.userOrder[t];
					return s ? s.map(s => e.pages.modHub.moderators.invitedModerators.models[t][s]) : j
				});
			var T = s("./src/reddit/selectors/user.ts"),
				P = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/asModal/index.tsx")),
				M = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				R = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				A = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				L = s("./src/reddit/controls/TextButton/index.tsx"),
				F = s("./src/reddit/helpers/isValidUsername/index.tsx"),
				D = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				U = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				B = s("./src/reddit/components/ModeratorsList/AddModeratorModal/index.m.less"),
				W = s.n(B);
			const H = e => {
					switch (e) {
						case U.c.access:
							return a.fbt._("Manage Users", null, {
								hk: "2cVPGG"
							});
						case U.c.config:
							return a.fbt._("Manage Settings", null, {
								hk: "10NyX"
							});
						case "chat_config":
						case U.c.chatConfig:
							return a.fbt._("Manage Chats", null, {
								hk: "3U1O8t"
							});
						case "chat_operator":
						case U.c.chatOperator:
							return a.fbt._("Monitor Chats", null, {
								hk: "3x751K"
							});
						case U.c.flair:
							return a.fbt._("Manage Flair", null, {
								hk: "IgS6W"
							});
						case U.c.mail:
							return a.fbt._("Manage Mod Mail", null, {
								hk: "1H5qJm"
							});
						case U.c.posts:
							return a.fbt._("Manage Posts & Comments", null, {
								hk: "1IVGI9"
							});
						case U.c.wiki:
							return a.fbt._("Manage Wiki Pages", null, {
								hk: "4gZJ2V"
							});
						case U.c.all:
						default:
							return a.fbt._("Everything", null, {
								hk: "24E26J"
							})
					}
				},
				V = e => {
					switch (e) {
						case U.c.access:
							return a.fbt._("Approve submitters and ban and mute users*.", null, {
								hk: "KndNL"
							});
						case U.c.config:
							return a.fbt._("Manage community settings, appearance, emojis, rules, and AutoMod*.", null, {
								hk: "4djZSI"
							});
						case "chat_config":
						case U.c.chatConfig:
							return a.fbt._("Create and manage chats, set up filters and rate limits, and block domains.", null, {
								hk: "3wcRBu"
							});
						case "chat_operator":
						case U.c.chatOperator:
							return a.fbt._("Remove messages, remove users, and lock chats.", null, {
								hk: "TFYA1"
							});
						case U.c.flair:
							return a.fbt._("Create and manage user and post flair.", null, {
								hk: "1oN7ft"
							});
						case U.c.mail:
							return a.fbt._("Read and respond to modmail and mute users*.", null, {
								hk: "2F8Yd"
							});
						case U.c.posts:
							return a.fbt._("Access queues, take action on content, and manage collections and events.", null, {
								hk: "vJ5lR"
							});
						case U.c.wiki:
							return a.fbt._("Create and manage wiki pages and AutoMod*.", null, {
								hk: "JarEL"
							});
						case U.c.all:
						default:
							return a.fbt._("Full access including the ability to manage moderator access and permissions.", null, {
								hk: "2r1vEj"
							})
					}
				},
				q = Object(i.b)(null, (e, {
					subredditId: t,
					after: s,
					before: n
				}) => ({
					addModerator: (s, n) => e(Object(p.b)(t, s, n)),
					editModerator: (s, n, a) => e(Object(p.d)(t, s, n, a)),
					removeModerator: a => e(Object(p.k)(t, a, s, n))
				})),
				G = c.a.span("SecondaryText", W.a),
				z = c.a.wrapped(M.d, "ModalBody", W.a);
			class K extends r.a.Component {
				constructor(e) {
					super(e), this.onUsernameChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.toggleSelect = (e, t) => {
						if (this.props.isEditingSelf) return;
						const s = {
							...this.state.permissions,
							[e]: !t
						};
						"all" === e ? Object.keys(s).forEach(e => s[e] = s.all) : s[e] || (s.all = !1), this.setState({
							permissions: s
						}), this.props.sendEventWithName("permission")()
					}, this.onSubmit = e => {
						e.preventDefault();
						const {
							props: t,
							state: s
						} = this;
						t.isEditingSelf ? t.toggleModal() : (t.isEditingPerms && t.user ? (t.editModerator(s.username, s.permissions, t.user.id), t.sendEventWithName("edit")()) : (t.addModerator(s.username, s.permissions), t.sendEventWithName("invite_moderator")()), t.toggleModal())
					}, this.onRemove = () => {
						this.props.user && (this.props.removeModerator(this.props.user.id), this.props.sendEventWithName("remove")()), this.props.toggleModal()
					}, this.state = {
						username: e.user ? e.user.username : "",
						permissions: e.user ? e.user.modPermissions : U.a
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = ["all", ...Object.keys(t.permissions).filter(e => "all" !== e)];
					return r.a.createElement(z, null, r.a.createElement(M.h, null, r.a.createElement(D.a, null, r.a.createElement(M.p, null, e.isEditingPerms ? a.fbt._("Edit", null, {
						hk: "1nftDt"
					}) : a.fbt._("Invite Moderators", null, {
						hk: "hkBh1"
					}), e.username && a.fbt._(": u/{username}", [a.fbt._param("username", e.username)], {
						hk: "2FWWEd"
					})), r.a.createElement(L.a, {
						onClick: e.toggleModal
					}, r.a.createElement(M.b, null)))), r.a.createElement("form", {
						onSubmit: this.onSubmit
					}, r.a.createElement(M.k, null, !e.isEditingPerms && r.a.createElement(M.g, null, r.a.createElement(R.d, {
						autoFocus: !0,
						placeholder: a.fbt._("Enter Username", null, {
							hk: "2fYsDe"
						}),
						onChange: this.onUsernameChange
					})), r.a.createElement(M.p, null, e.isEditingSelf ? r.a.createElement(r.a.Fragment, null, a.fbt._("Access", null, {
						hk: "2We3HN"
					}), r.a.createElement(G, null, a.fbt._("(can't edit)", null, {
						hk: "3LZvZi"
					}))) : a.fbt._("Give them access to...", null, {
						hk: "1DzYmU"
					})), t.permissions && s.map((s, n) => r.a.createElement("div", {
						className: W.a.checkboxContainer,
						key: s
					}, r.a.createElement(A.a, {
						autoFocus: !(!e.isEditingPerms || 0 !== n) || void 0,
						className: W.a.checkbox,
						disabled: e.isEditingSelf,
						isSelected: t.permissions[s],
						onClick: () => this.toggleSelect(s, t.permissions[s]),
						text: H(s)
					}), r.a.createElement("p", {
						className: W.a.checkboxDescription
					}, V(s)), "all" === s && r.a.createElement("hr", {
						className: W.a.divider
					}))), r.a.createElement("p", {
						className: W.a.automodMore
					}, a.fbt._("*Note: To manage AutoMod, mods must have access to Wiki Pages and Manage Settings. To mute users, mods must have access to Mod Mail and Manage Users.", null, {
						hk: "1AYX38"
					}))), r.a.createElement(M.f, {
						className: W.a.footer
					}, r.a.createElement(C.i, {
						className: W.a.primaryButton,
						"data-redditstyle": !0,
						disabled: !e.username && !Object(F.a)(t.username),
						type: "submit"
					}, e.isEditingPerms ? a.fbt._("Save", null, {
						hk: "3h5uV"
					}) : a.fbt._("Invite", null, {
						hk: "2F1syY"
					})), r.a.createElement(M.a, {
						autoFocus: !!e.isEditingSelf || void 0,
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), e.isEditingPerms && !e.isEditingSelf && r.a.createElement(M.r, {
						onClick: this.onRemove,
						"data-redditstyle": !0
					}, a.fbt._("Remove", null, {
						hk: "2aiywk"
					})))))
				}
			}
			var X = Object(P.a)(q(K)),
				Q = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				J = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Y = s("./src/reddit/selectors/telemetry.ts");
			const Z = e => ({
					screen: Y.screen(e),
					subreddit: Y.subreddit(e)
				}),
				$ = e => t => ({
					source: "remove_mod_invite",
					action: "click",
					noun: e,
					...Z(t)
				});
			var ee = s("./src/lib/constants/index.ts"),
				te = s("./src/lib/timeAgo/index.ts"),
				se = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				ne = s("./src/reddit/icons/svgs/Trash/index.tsx"),
				ae = s("./src/reddit/components/ModeratorsList/Moderator.m.less"),
				oe = s.n(ae);
			const re = e => {
					const t = [],
						s = Object.keys(e);
					return e.all ? H("all") : (s.forEach((function(s) {
						e[s] && t.push(H(s))
					})), 0 === t.length ? a.fbt._("No permissions", null, {
						hk: "3eH05z"
					}) : t.join(", "))
				},
				ie = c.a.wrapped(se.a, "PencilIcon", oe.a),
				de = c.a.wrapped(ne.a, "TrashIcon", oe.a),
				le = c.a.div("InteractiveDiv", oe.a),
				ce = e => r.a.createElement(le, {
					onClick: e.onClick
				}, e.moderatorType === k.c.Editable ? r.a.createElement(ie, null) : r.a.createElement(de, null));
			var ue = e => r.a.createElement(E.b, {
					additionalText: re(e.moderator.modPermissions),
					pageName: ee.Wb.Moderators,
					primaryButton: e.moderatorType && e.onClick && r.a.createElement(ce, {
						onClick: e.onClick,
						moderatorType: e.moderatorType
					}),
					timeAgo: Object(te.d)(e.moderator.moddedAtUTC),
					subredditId: e.subredditId,
					userIcon: e.moderator.accountIcon,
					username: e.moderator.username,
					moderatorType: e.moderatorType
				}),
				me = s("./src/reddit/components/ModeratorsList/InvitedModeratorsList.m.less"),
				pe = s.n(me);
			const he = c.a.div("ListTitle", pe.a),
				be = c.a.div("ListContainer", pe.a),
				ge = Object(d.c)({
					invitedModeratorsList: N,
					isConfirmModalOpen: Object(y.b)("ModerationPage--Modal--RemoveModeratorConfirmation")
				});
			class fe extends r.a.Component {
				constructor(e) {
					super(e), this.onToggleRemovalModal = e => {
						this.setState({
							selectedModerator: e
						}), this.props.toggleConfirmUserActionModal(), e && this.props.sendEventWithName("remove_mod_invite")()
					}, this.state = {
						selectedModerator: void 0
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (0 === e.invitedModeratorsList.length) return null;
					const s = () => this.props.sendEvent($("cancel"));
					return r.a.createElement("div", null, r.a.createElement(he, null, a.fbt._("Invited moderators", null, {
						hk: "2UdpbF"
					})), r.a.createElement(be, null, e.invitedModeratorsList.map(t => r.a.createElement(ue, {
						key: t.id,
						moderator: t,
						moderatorType: k.c.Invited,
						onClick: () => this.onToggleRemovalModal(t),
						subredditId: e.subredditId
					}))), e.isConfirmModalOpen && t.selectedModerator && r.a.createElement(Q.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "nUCi0"
						}),
						modalText: a.fbt._("Are you sure you want to rescind the moderator invite to {username}", [a.fbt._param("username", t.selectedModerator.username)], {
							hk: "4c5sRy"
						}),
						onConfirm: () => e.removeInvitedModerator(t.selectedModerator.id),
						toggleModal: this.onToggleRemovalModal,
						onCancel: s,
						onClose: s,
						trackClick: () => this.props.sendEvent($("remove"))
					}))
				}
			}
			var xe = Object(i.b)(ge, (e, {
					subredditId: t
				}) => ({
					removeInvitedModerator: s => e(Object(p.j)(t, s)),
					toggleConfirmUserActionModal: () => e(Object(m.i)("ModerationPage--Modal--RemoveModeratorConfirmation"))
				}))(Object(J.c)(fe)),
				Ee = s("./src/reddit/components/ModeratorsList/InvitePendingModal.m.less"),
				ve = s.n(Ee);
			const {
				fbt: Ce
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _e = Object(i.b)(null, (e, {
				subredditId: t
			}) => ({
				acceptInvite: () => e(Object(p.a)(t)),
				declineInvite: () => e(Object(p.c)(t))
			})), ke = c.a.wrapped(M.o, "ModalText", ve.a), ye = c.a.wrapped(ke, "ModalTextBold", ve.a), Oe = c.a.wrapped(C.i, "PrimaryButton", ve.a), Se = c.a.wrapped(C.l, "SecondaryButton", ve.a), we = c.a.div("Section", ve.a), je = c.a.img("Image", ve.a), Ie = c.a.wrapped(M.k, "ModalMain", ve.a);
			var Ne = Object(P.a)(_e(e => r.a.createElement(M.d, null, r.a.createElement(Ie, null, r.a.createElement(D.a, null, r.a.createElement("div", null), r.a.createElement(L.a, {
					onClick: e.toggleModal
				}, r.a.createElement(M.b, null))), r.a.createElement(we, null, r.a.createElement(je, {
					src: `${n.a.assetPath}/img/snoo-success@2x.png`
				})), r.a.createElement(ye, null, Ce._("Congrats!", null, {
					hk: "T4Ccw"
				})), r.a.createElement(ke, null, Ce._("You are invited to become a moderator!", null, {
					hk: "1jRLWz"
				}))), r.a.createElement(M.f, null, r.a.createElement(Se, {
					onClick: t => {
						e.toggleModal(), e.declineInvite(), e.sendEventWithName("declineinvite")()
					},
					"data-redditstyle": !0
				}, Ce._("Decline", null, {
					hk: "1iOsJe"
				})), r.a.createElement(Oe, {
					onClick: t => {
						e.toggleModal(), e.acceptInvite(), e.sendEventWithName("acceptinvite")()
					},
					"data-redditstyle": !0
				}, Ce._("Accept", null, {
					hk: "2fkYc4"
				})))))),
				Te = s("./src/reddit/components/ModeratorsList/ResignAsModeratorModal/index.m.less"),
				Pe = s.n(Te);
			const {
				fbt: Me
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Re = Object(i.b)(null, (e, {
				subredditId: t,
				userId: s,
				after: n,
				before: a
			}) => ({
				removeModerator: () => e(Object(p.k)(t, s, n, a))
			})), Ae = c.a.wrapped(C.i, "PrimaryButton", Pe.a);
			class Le extends r.a.Component {
				constructor() {
					super(...arguments), this.onRemove = () => {
						this.props.removeModerator(), this.props.sendEventWithName("resign")(), this.props.toggleModal()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(M.d, null, r.a.createElement(M.h, null, r.a.createElement(D.a, null, r.a.createElement(M.p, null, Me._("Leave as mod", null, {
						hk: "3ajWeG"
					})), r.a.createElement(L.a, {
						onClick: e.toggleModal
					}, r.a.createElement(M.b, null)))), r.a.createElement(M.k, null, r.a.createElement(M.o, null, Me._("Once you leave as a mod, you will lose mod permissions and will be unable to access any mod tools for this community. Are you sure you wish to leave as a mod of this community?", null, {
						hk: "4qm9md"
					}))), r.a.createElement(M.f, null, r.a.createElement(M.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, Me._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(Ae, {
						onClick: this.onRemove,
						"data-redditstyle": !0
					}, Me._("Leave", null, {
						hk: "2ZHZVX"
					}))))
				}
			}
			var Fe = Object(P.a)(Re(Le)),
				De = s("./src/reddit/components/ModeratorsList/index.m.less"),
				Ue = s.n(De);
			const Be = c.a.div("ListContainer", Ue.a),
				We = c.a.wrapped(C.l, "SecondaryButton", Ue.a),
				He = Object(v.t)({
					currentPageUrl: v.e
				}),
				Ve = Object(d.c)({
					currentUser: T.i,
					nextAfterToken: (e, {
						subredditId: t
					}) => e.pages.modHub.moderators.loadMoreModerators[t] && e.pages.modHub.moderators.loadMoreModerators[t].after,
					nextAfterEditableToken: (e, {
						subredditId: t
					}) => e.pages.modHub.moderators.loadMoreEditableModerators[t] && e.pages.modHub.moderators.loadMoreEditableModerators[t].after,
					nextBeforeToken: (e, {
						subredditId: t
					}) => e.pages.modHub.moderators.loadMoreModerators[t] && e.pages.modHub.moderators.loadMoreModerators[t].before,
					nextBeforeEditableToken: (e, {
						subredditId: t
					}) => e.pages.modHub.moderators.loadMoreEditableModerators[t] && e.pages.modHub.moderators.loadMoreEditableModerators[t].before,
					editableModerators: (e, {
						subredditId: t
					}) => e.pages.modHub.moderators.editableModerators[t] || null,
					editableModeratorsList: (e, {
						subredditId: t,
						beforeEditable: s,
						afterEditable: n
					}) => {
						const a = Object(k.d)(t, n, s),
							o = e.pages.modHub.moderators.editableUserOrder.data[t] && e.pages.modHub.moderators.editableUserOrder.data[t][a];
						return o ? o.map(s => e.pages.modHub.moderators.editableModerators[t][s]) : []
					},
					isInvitePending: (e, {
						subredditId: t
					}) => !!e.pages.modHub.moderators.invitePending[t],
					moderators: (e, {
						subredditId: t
					}) => e.pages.modHub.moderators.models[t] || null,
					moderatorsList: I,
					moderatorPermissions: S.k,
					isAddUserModalOpen: Object(y.b)("ModerationPage--Modal--AddModerator"),
					isEditableListPending: (e, t) => {
						const s = Object(k.d)(t.subredditId, t.afterEditable, t.beforeEditable);
						return !!e.pages.modHub.moderators.editableUserOrder.api.pending[s]
					},
					isInvitePendingModalOpen: Object(y.b)("ModerationPage--Modal--InvitePending"),
					isModeratorListPending: (e, t) => {
						const s = Object(k.d)(t.subredditId, t.after, t.before);
						return !!e.pages.modHub.moderators.userOrder.api.pending[s]
					},
					isResignAsModeratorModalOpen: Object(y.b)("ModerationPage--Modal--Resign"),
					origin: O.j,
					searchPending: e => !!e.pages.modHub.moderators.search.api.pending,
					searchResult: e => e.pages.modHub.moderators.search.result
				}),
				qe = Object(i.b)(Ve, (e, {
					subredditId: t
				}) => ({
					searchForModerator: s => e(Object(p.h)(t, s)),
					toggleAddModeratorModal: () => e(Object(m.i)("ModerationPage--Modal--AddModerator")),
					toggleInvitePendingModal: () => e(Object(m.i)("ModerationPage--Modal--InvitePending")),
					toggleResignAsModModal: () => e(Object(m.i)("ModerationPage--Modal--Resign"))
				})),
				Ge = c.a.div("EditableTitle", Ue.a),
				ze = c.a.wrapped(E.a, "UsersLoading", Ue.a);
			class Ke extends r.a.Component {
				constructor() {
					super(...arguments), this.state = k.a, this.toggleModal = (e, t) => () => {
						this.setState({
							userId: e,
							username: t
						}), this.props.isAddUserModalOpen || t || this.props.sendEventWithName("open_invite_dialog")(), this.props.toggleAddModeratorModal()
					}, this.onSearch = e => {
						this.props.searchForModerator(e), this.props.sendEventWithName("search_done")(), this.setState({
							searchTerm: e
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: null
					}), this.isButtonEnabled = (e, t) => !!(e && e.length > 0 && t), this.isModeratorsListPaginated = () => !(!this.props.nextBeforeToken && !this.props.nextAfterToken), this.renderEditableList = e => {
						const t = !(!e.nextBeforeEditableToken && !e.nextAfterEditableToken),
							s = e.isEditableListPending || e.isModeratorListPending;
						return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ge, null, a.fbt._("You can edit these moderators", null, {
							hk: "1KTZtm"
						})), t && r.a.createElement(x.a, null, r.a.createElement(b.a, {
							prevButtonEnabled: this.isButtonEnabled(e.editableModeratorsList, e.nextBeforeEditableToken),
							prevTo: Object(l.a)(Object(u.a)(`${e.origin}${e.currentPageUrl}`), {
								before: e.before,
								beforeEditable: e.nextBeforeEditableToken,
								after: e.after
							}),
							nextButtonEnabled: this.isButtonEnabled(e.editableModeratorsList, e.nextAfterEditableToken),
							nextTo: Object(l.a)(Object(u.a)(`${e.origin}${e.currentPageUrl}`), {
								after: e.after,
								afterEditable: e.nextAfterEditableToken,
								before: e.before
							})
						})), r.a.createElement(Be, null, e.editableModeratorsList && e.editableModeratorsList.length > 0 ? e.editableModeratorsList.map(e => r.a.createElement(ue, {
							key: e.id,
							moderator: e,
							moderatorType: k.c.Editable,
							onClick: this.toggleModal(e.id, e.username),
							subredditId: this.props.subredditId
						})) : s ? r.a.createElement(ze, null) : null))
					}
				}
				componentDidMount() {
					this.props.isInvitePending && !this.props.isInvitePendingModalOpen && this.props.toggleInvitePendingModal()
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = !!e.moderatorPermissions, o = Object(_.a)(e.moderatorPermissions);
					return r.a.createElement(r.a.Fragment, null, s && r.a.createElement(g.c, null, r.a.createElement(We, {
						onClick: e.toggleResignAsModModal
					}, a.fbt._("Leave as mod", null, {
						hk: "3TwqTg"
					})), o && r.a.createElement(C.i, {
						onClick: this.toggleModal(null, null)
					}, a.fbt._("Invite user as mod", null, {
						hk: "3lJRJW"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Moderators of {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
						hk: "3p7NwA"
					}), r.a.createElement(h.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009381491`
					})), r.a.createElement(x.b, {
						onSearch: this.onSearch,
						activeSearchQuery: t.searchTerm
					}, !t.searchTerm && this.isModeratorsListPaginated() && r.a.createElement(b.a, {
						prevButtonEnabled: this.isButtonEnabled(e.moderatorsList, e.nextBeforeToken),
						prevTo: Object(l.a)(Object(u.a)(`${e.origin}${e.currentPageUrl}`), {
							afterEditable: e.afterEditable,
							before: e.nextBeforeToken,
							beforeEditable: e.beforeEditable
						}),
						nextButtonEnabled: this.isButtonEnabled(e.moderatorsList, e.nextAfterToken),
						nextTo: Object(l.a)(Object(u.a)(`${e.origin}${e.currentPageUrl}`), {
							after: e.nextAfterToken,
							afterEditable: e.afterEditable,
							beforeEditable: e.beforeEditable
						})
					})), t.searchTerm ? r.a.createElement(f.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && r.a.createElement(ue, {
						moderator: e.searchResult,
						moderatorType: e.searchResult.isEditable ? k.c.Editable : void 0,
						onClick: e.searchResult.isEditable ? this.toggleModal(e.searchResult.id, e.searchResult.username) : void 0,
						subredditId: e.subredditId
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Be, null, e.moderatorsList && e.moderatorsList.length > 0 ? e.moderatorsList.map(e => r.a.createElement(ue, {
						key: e.id,
						moderator: e,
						subredditId: this.props.subredditId
					})) : e.isModeratorListPending ? r.a.createElement(ze, null) : null), o && r.a.createElement(r.a.Fragment, null, this.renderEditableList(e), r.a.createElement(xe, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId
					})))), e.isAddUserModalOpen && r.a.createElement(X, {
						ignoreDefaultFocus: !0,
						after: e.afterEditable,
						before: e.beforeEditable,
						subredditId: e.subredditId,
						sendEventWithName: e.sendEventWithName,
						toggleModal: this.toggleModal(null, null),
						isEditingPerms: !!t.username,
						isEditingSelf: !(!t.userId || !e.currentUser) && t.userId === e.currentUser.id,
						username: t.username,
						user: t.userId && e.editableModerators ? e.editableModerators[t.userId] : null,
						withOverlay: !0
					}), e.currentUser && e.isResignAsModeratorModalOpen && r.a.createElement(Fe, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId,
						toggleModal: e.toggleResignAsModModal,
						userId: e.currentUser.id,
						withOverlay: !0
					}), e.isInvitePendingModalOpen && r.a.createElement(Ne, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId,
						toggleModal: e.toggleInvitePendingModal,
						withOverlay: !0
					}))
				}
			}
			t.a = He(qe(Ke))
		},
		"./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less": function(e, t, s) {
			e.exports = {
				optionSearchBarContainer: "_3eVrzdp5khbz6W2NhQv7kl",
				optionSearchBarError: "_3va8RfTnDLBo2hfMm5URpu",
				optionSearchBarReadOnly: "_2siJVLOBn72IxBt8i_A1gZ",
				loadingIcon: "_3UsfWdV2CKiIs_EOeGhVxv",
				input: "_1OEtZmrYX2ct3ycV1AaUZS",
				hiddenInput: "_3WSlf55CAQYRdOxtxENgA7",
				optionsOverflowIndication: "_2qfFc8Ix-QpBqu8UNEXeH3"
			}
		},
		"./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				activeOption: "_2Kg5EXAuLcqhsBbdEr4SGZ",
				freeTextOption: "_2H29-4MOHAslt1eKYtcGaV",
				lastFixedOption: "_1ClyNNAK4vP9o_uoSwKe0Q",
				option: "_1xWVaijFIih7uj-n4FXzH2",
				availableOptionContainer: "T2jLhmuhOy8DeOHjz6WRG",
				addText: "_1OqThwyrfhl2eJ9YhWoy2I",
				optionsContainer: "_1ZmC1GBXYnksnMU9IrTAHd",
				relativeContainer: "_3SrGeaD5FxXfpWjhSAFBD-",
				dropdown: "_2dqCXnStO_Dc8Srt_lJqVj",
				dropdownHeaderText: "_2EaXrPilAtjz6VRh_xvOGU"
			}
		},
		"./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less": function(e, t, s) {
			e.exports = {
				selectedOptionComponentContainer: "_3nUaRUcJJfrvOWldA3i10S",
				closeIcon: "_1RvgsgnXdbtv2cwTTTbT7o",
				selectedOptionComponentContainerError: "_2Qpr0YORGp3CmDjJW9Txrf"
			}
		},
		"./src/reddit/components/MultiOptionSelect/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/some.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/constants/keycodes.ts"),
				l = s("./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less"),
				c = s.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.handleOptionSelected(this.props.index)
					}, this.handleMouseEnter = () => {
						this.props.handleOnMouseEnter(this.props.index)
					}
				}
				shouldComponentUpdate(e) {
					return e.className !== this.props.className || e.divRef !== this.props.divRef || e.displayText !== this.props.displayText
				}
				render() {
					const {
						addText: e,
						displayText: t,
						divRef: s,
						handleOnMouseEnter: n,
						handleOptionSelected: a,
						index: o,
						className: d,
						...l
					} = this.props;
					return r.a.createElement("div", u({
						className: Object(i.a)(c.a.availableOptionContainer, d)
					}, l, {
						onMouseEnter: this.handleMouseEnter,
						onClick: this.handleClick,
						ref: s
					}), e && r.a.createElement("span", {
						className: c.a.addText
					}, e, " "), t)
				}
			}
			class p extends r.a.Component {
				constructor(e) {
					super(e), this.handleOptionSelectedByIndex = e => {
						this.props.selectableOptions[e] && this.handleOptionSelected(this.props.selectableOptions[e])
					}, this.handleFreeTextOptionSelected = () => {
						this.handleOptionSelected({
							id: null,
							displayText: this.props.currentInput,
							selected: !0
						})
					}, this.clearSelectedIndex = () => {
						this.setSelectedIndex(-1)
					}, this.setOptionActiveByIndex = e => {
						"number" == typeof e && e > -1 && this.setSelectedIndex(e)
					}, this.setFreeTextOptionActive = () => {
						this.setSelectedIndex(this.getOptionsLength() - 1)
					}, this.state = {
						selectedIndex: -1
					}, this.scrollContainer = r.a.createRef(), this.optionsContainer = r.a.createRef(), this.activeOptionDOMRef = r.a.createRef()
				}
				focus() {
					this.optionsContainer.current && this.optionsContainer.current.focus()
				}
				matchesDOMElement(e) {
					return this.optionsContainer.current === e
				}
				handleOptionSelected(e) {
					this.handleOptionsSelected([e])
				}
				handleOptionsSelected(e) {
					this.props.onOptionsChanged(e.map(e => ({
						...e,
						selected: !0
					})))
				}
				setSelectedIndex(e) {
					this.setState({
						selectedIndex: e
					})
				}
				freeTextEntryActive() {
					return this.props.allowFreeTextEntry && this.props.currentInput
				}
				getOptionsLength() {
					return this.freeTextEntryActive() ? this.props.selectableOptions.length + 1 : this.props.selectableOptions.length
				}
				freeTextOptionSelected() {
					return this.freeTextEntryActive() && this.state.selectedIndex === this.getOptionsLength() - 1
				}
				validOptionSelected() {
					return this.state.selectedIndex > -1 && this.state.selectedIndex < this.getOptionsLength()
				}
				handlePaste(e) {
					if (e.clipboardData.types.includes("text/plain")) return e.preventDefault(), e.stopPropagation(), void this.handleOptionsSelected(e.clipboardData.getData("text/plain").split(d.b.Comma).filter(e => !!e).map(e => ({
						id: null,
						displayText: e.trim(),
						selected: !0
					})))
				}
				handleKeyPress(e) {
					const {
						splitOnCommaPress: t
					} = this.props;
					return e.which === d.a.ArrowUp ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex - 1 > -1 ? this.state.selectedIndex - 1 : this.getOptionsLength() - 1)) : e.which === d.a.ArrowDown ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex + 1 < this.getOptionsLength() ? this.state.selectedIndex + 1 : 0)) : e.which === d.a.Comma && t ? (e.preventDefault(), e.stopPropagation(), this.handleFreeTextOptionSelected()) : e.which === d.a.Enter ? (e.preventDefault(), e.stopPropagation(), !this.validOptionSelected() || this.freeTextOptionSelected() ? this.handleFreeTextOptionSelected() : this.handleOptionSelected(this.props.selectableOptions[this.state.selectedIndex])) : void 0
				}
				componentDidUpdate() {
					if (!this.activeOptionDOMRef.current || !this.scrollContainer.current) return;
					const e = this.activeOptionDOMRef.current.getBoundingClientRect(),
						t = this.scrollContainer.current.getBoundingClientRect();
					if (e.top < t.top || e.bottom > t.bottom) {
						if (0 === this.state.selectedIndex) return void(this.scrollContainer.current.scrollTop = 0);
						if (e.top < t.top) return void(this.scrollContainer.current.scrollTop = this.activeOptionDOMRef.current.offsetTop);
						this.scrollContainer.current.scrollTop += e.bottom - t.bottom
					}
				}
				shouldRenderDropdownHeaderText() {
					return !!this.props.dropdownHeaderText && (!this.freeTextEntryActive() || this.props.selectableOptions.length > 0)
				}
				render() {
					return r.a.createElement("div", {
						className: c.a.relativeContainer
					}, r.a.createElement("div", {
						className: Object(i.a)(c.a.dropdown, this.props.className),
						ref: this.scrollContainer
					}, r.a.createElement("div", {
						ref: this.optionsContainer,
						tabIndex: -1,
						className: c.a.optionsContainer,
						onMouseOut: this.clearSelectedIndex
					}, this.shouldRenderDropdownHeaderText() && r.a.createElement("h3", {
						className: c.a.dropdownHeaderText
					}, this.props.dropdownHeaderText), this.props.selectableOptions.map((e, t) => {
						const s = [this.state.selectedIndex === t ? c.a.activeOption : c.a.option];
						return this.freeTextEntryActive() && t === this.props.selectableOptions.length - 1 && s.push(c.a.lastFixedOption), r.a.createElement(m, {
							key: e.id,
							className: Object(i.a)(...s),
							index: t,
							handleOptionSelected: this.handleOptionSelectedByIndex,
							handleOnMouseEnter: this.setOptionActiveByIndex,
							divRef: t === this.state.selectedIndex ? this.activeOptionDOMRef : void 0,
							displayText: e.displayText
						})
					}), this.freeTextEntryActive() && r.a.createElement(m, {
						key: "options-list-dropdown-free-text-option",
						className: Object(i.a)(c.a.freeTextOption, this.state.selectedIndex === this.getOptionsLength() - 1 ? c.a.activeOption : c.a.option),
						handleOptionSelected: () => this.handleFreeTextOptionSelected(),
						handleOnMouseEnter: this.setFreeTextOptionActive,
						divRef: this.getOptionsLength() - 1 === this.state.selectedIndex ? this.activeOptionDOMRef : void 0,
						addText: this.props.addText,
						displayText: this.props.currentInput
					}))))
				}
			}
			var h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				b = s("./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less"),
				g = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = e => {
					const {
						className: t,
						innerRef: s,
						onClickHandler: n,
						option: a,
						maxLength: o,
						...d
					} = e, l = [g.a.selectedOptionComponentContainer, t];
					return o && o < a.displayText.length && l.push(g.a.selectedOptionComponentContainerError), r.a.createElement("div", f({
						className: Object(i.a)(...l),
						ref: s
					}, d, {
						onClick: n
					}), a.displayText, r.a.createElement(h.a, {
						className: g.a.closeIcon
					}))
				},
				E = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/helpers/readOnlyMode/index.ts"),
				C = s("./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less"),
				_ = s.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 10,
				O = e => e.stopPropagation();
			class S extends r.a.Component {
				constructor(e) {
					super(e), this.handleKeyPress = e => {
						e.which !== d.a.Delete && e.which !== d.a.Backspace || !this.lastSelectedOptionComponentRef.current || "" !== this.props.value || (this.lastSelectedOptionComponentRef.current.focus(), e.preventDefault(), e.stopPropagation())
					}, this.handleMouseEnterSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !0
						})
					}, this.handleMouseLeaveSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !1
						})
					}, this.onSearchBarFocus = e => {
						Object(v.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
							isFocused: !0
						}), this.props.onFocus && this.inputRef.current === e.target && this.props.onFocus())
					}, this.onSearchBarBlur = e => {
						if (this.containerRef.current && e.relatedTarget && this.containerRef.current.contains(e.relatedTarget)) return e.preventDefault(), void e.stopPropagation();
						this.props.onBlur && this.props.onBlur(e), this.setState({
							isFocused: !1
						})
					}, this.inputRef = r.a.createRef(), this.containerRef = r.a.createRef(), this.lastSelectedOptionComponentRef = r.a.createRef(), this.state = {
						isHoveringOverSelectedOption: !1,
						isFocused: !1
					}
				}
				focus() {
					Object(v.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
						isFocused: !0
					}))
				}
				reset() {
					this.inputRef.current && (this.inputRef.current.value = "")
				}
				deselectOption(e) {
					this.props.onOptionsChanged([{
						...e,
						selected: !1
					}]), this.setState({
						isHoveringOverSelectedOption: !1
					})
				}
				onSelectedOptionComponentKeyDown(e, t) {
					this.state.isHoveringOverSelectedOption || e.which !== d.a.Delete && e.which !== d.a.Backspace || (e.preventDefault(), e.stopPropagation(), this.deselectOption(t), this.focus())
				}
				render() {
					const e = {};
					Object(v.c)(this.props.readOnlyMode) || (e.tabIndex = 0);
					const t = this.props.selectedOptionComponent || x,
						s = "number" == typeof this.props.maxOptionsToDisplay && this.props.options.length > this.props.maxOptionsToDisplay;
					return r.a.createElement("div", k({
						"aria-invalid": this.props.isError,
						className: Object(i.a)(this.props.className, _.a.optionSearchBarContainer, {
							[_.a.optionSearchBarError]: this.props.isError,
							[_.a.optionSearchBarReadOnly]: Object(v.c)(this.props.readOnlyMode)
						}),
						ref: this.containerRef,
						onFocus: this.onSearchBarFocus,
						onBlur: this.onSearchBarBlur
					}, e), this.props.options.map((e, n) => {
						if (!(s && n >= (this.props.maxOptionsToDisplay || 0))) return r.a.createElement(t, {
							tabIndex: 0,
							onFocus: O,
							key: e.id || e.displayText,
							option: e,
							onKeyDown: t => this.onSelectedOptionComponentKeyDown(t, e),
							onClickHandler: () => {
								this.deselectOption(e), this.focus()
							},
							onMouseEnter: this.handleMouseEnterSelectedOptionComponent,
							onMouseLeave: this.handleMouseLeaveSelectedOptionComponent,
							maxLength: this.props.maxLength,
							innerRef: n === this.props.options.length - 1 ? this.lastSelectedOptionComponentRef : void 0
						})
					}), s && r.a.createElement("span", {
						className: _.a.optionsOverflowIndication
					}, `+${this.props.options.length-(this.props.maxOptionsToDisplay||0)}`), this.props.children, !Object(v.c)(this.props.readOnlyMode) && r.a.createElement("input", {
						className: Object(i.a)(_.a.input, {
							[_.a.hiddenInput]: Object(v.b)(this.props.readOnlyMode)
						}),
						ref: this.inputRef,
						type: "text",
						onKeyDown: this.handleKeyPress,
						value: this.props.value,
						onChange: this.props.onInputChanged,
						maxLength: this.props.maxLength
					}), this.props.isLoading && r.a.createElement(E.a, {
						className: _.a.loadingIcon,
						sizePx: y
					}), this.state.isFocused && r.a.createElement(p, {
						className: this.props.dropdownClassName,
						dropdownHeaderText: this.props.dropdownHeaderText,
						addText: this.props.addText,
						selectableOptions: this.props.selectableOptions,
						onOptionsChanged: this.props.onOptionsChanged,
						ref: this.props.dropdownRef,
						currentInput: this.props.value,
						allowFreeTextEntry: this.props.allowFreeTextEntry,
						splitOnCommaPress: this.props.splitOnCommaPress
					}))
				}
			}
			var w = s("./node_modules/reselect/es/index.js");
			const j = [],
				I = {};
			class N extends r.a.Component {
				constructor(e) {
					super(e), this._selectableOptionsSelector = Object(w.a)(e => e.availableOptions || j, e => e.input, (e, t) => e.filter(e => {
						const s = e.displayText.toLowerCase(),
							n = t.toLowerCase();
						return 0 === s.indexOf(n) || a()(s.split(/[\s\/]+/), e => 0 === e.indexOf(n))
					})), this.onSearchBarFocus = () => {
						Object(v.c)(this.props.readOnlyMode) || this.state.searchBarIsFocused || (this.setState({
							searchBarIsFocused: !0
						}), this.props.onSearchBarFocus && this.props.onSearchBarFocus())
					}, this.onSearchBarBlur = e => {
						if (!Object(v.c)(this.props.readOnlyMode)) return e.relatedTarget && this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.matchesDOMElement(e.relatedTarget) ? (e.stopPropagation(), e.preventDefault(), void setTimeout(() => {
							this.optionSearchBarRef.current && this.optionSearchBarRef.current.focus()
						}, 0)) : (this.setState({
							searchBarIsFocused: !1
						}), void(this.props.onSearchBarBlur && this.props.onSearchBarBlur(e)))
					}, this.setInput = e => {
						Object(v.b)(this.props.readOnlyMode) || this.props.input !== e && this.props.onInputChanged(e)
					}, this.onOptionChanged = e => {
						this.onOptionsChanged([e])
					}, this.onOptionsChanged = e => {
						this.props.onOptionsChanged(e), a()(e, e => !!e.selected) && this.setInput("")
					}, this.onInputChanged = e => {
						Object(v.b)(this.props.readOnlyMode) || this.setInput(e.currentTarget.value)
					}, this.onKeyDown = e => {
						Object(v.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handleKeyPress(e)
					}, this.onPaste = e => {
						Object(v.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handlePaste(e)
					}, this.state = {
						searchBarIsFocused: !1
					}, this.optionsListDropdownRef = r.a.createRef(), this.optionSearchBarRef = r.a.createRef()
				}
				getSelectableOptions() {
					return this._selectableOptionsSelector(this.props)
				}
				render() {
					const {
						childClassNames: e = I
					} = this.props;
					return r.a.createElement("div", {
						className: this.props.className,
						onKeyDown: this.onKeyDown,
						onPaste: this.onPaste
					}, r.a.createElement(S, {
						className: e.searchBarClassName,
						dropdownClassName: e.optionsListDropdownClassName,
						isError: this.props.isError,
						readOnlyMode: this.props.readOnlyMode || v.a.editable,
						isLoading: this.props.isLoading,
						ref: this.optionSearchBarRef,
						options: this.props.selectedOptions,
						onFocus: this.onSearchBarFocus,
						onBlur: this.onSearchBarBlur,
						onOptionsChanged: this.onOptionsChanged,
						onInputChanged: this.onInputChanged,
						maxLength: this.props.maxOptionLength,
						maxOptionsToDisplay: this.props.maxOptionsToDisplay,
						value: this.props.input,
						dropdownHeaderText: this.props.dropdownHeaderText,
						addText: this.props.addText,
						allowFreeTextEntry: this.props.allowFreeTextEntry,
						selectableOptions: this.getSelectableOptions(),
						dropdownRef: this.optionsListDropdownRef,
						selectedOptionComponent: this.props.selectedOptionComponent,
						splitOnCommaPress: this.props.splitOnCommaPress
					}, this.props.children))
				}
			}
			t.a = N
		},
		"./src/reddit/components/MutedUserList/ExpandedComponent.m.less": function(e, t, s) {
			e.exports = {
				BannedBy: "_2004IKQq9AjT3xoiDBg7m_",
				bannedBy: "_2004IKQq9AjT3xoiDBg7m_",
				EmptyState: "_1O-zxip2q_mFxBe_WVFPZC",
				emptyState: "_1O-zxip2q_mFxBe_WVFPZC",
				ExpandedContainer: "_1EEdKUOD4OiTBBQQkot-L9",
				expandedContainer: "_1EEdKUOD4OiTBBQQkot-L9"
			}
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_16-AoomiQ2Zxycd1wA0ZL-",
				primaryButton: "_16-AoomiQ2Zxycd1wA0ZL-",
				ModalText: "_3P1niYqJc2au-fmA-xIl7i",
				modalText: "_3P1niYqJc2au-fmA-xIl7i"
			}
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/subredditModeration/mute.ts"),
				c = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/TextButton/index.tsx"),
				b = s("./src/reddit/helpers/isValidUsername/index.tsx"),
				g = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				f = s("./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.m.less"),
				x = s.n(f);
			const E = 300,
				v = Object(r.b)(null, (e, {
					subredditId: t
				}) => ({
					onMuteUser: (s, n) => e(Object(l.a)(t, s, n))
				})),
				C = d.a.wrapped(p.i, "PrimaryButton", x.a),
				_ = d.a.wrapped(u.o, "ModalText", x.a);
			class k extends o.a.Component {
				constructor(e) {
					super(e), this.onUsernameChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.onReasonChange = e => {
						this.setState({
							reason: e.currentTarget.value
						})
					}, this.onSubmit = () => {
						const e = this.state.username;
						this.props.onMuteUser(e, this.state.reason), this.props.trackAddEvent(), this.props.toggleModal()
					}, this.state = {
						username: this.props.username || "",
						reason: ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(u.d, null, o.a.createElement(u.h, null, o.a.createElement(g.a, null, o.a.createElement(u.p, null, n.fbt._("Mute user", null, {
						hk: "326ljo"
					}), e.username && `: u/${e.username}`), o.a.createElement(h.a, {
						onClick: e.toggleModal
					}, o.a.createElement(u.b, null)))), o.a.createElement(u.k, null, !e.username && o.a.createElement(u.g, null, o.a.createElement(m.d, {
						autoFocus: !0,
						placeholder: n.fbt._("Username to mute", null, {
							hk: "3GB7UW"
						}),
						onChange: this.onUsernameChange,
						value: this.state.username,
						"data-redditstyle": !0
					})), o.a.createElement(u.g, null, o.a.createElement(_, null, n.fbt._("Note about why they are muted", null, {
						hk: "12YIn5"
					})), o.a.createElement(u.e, null, n.fbt._("Only visible to other moderators. Not visible to user", null, {
						hk: "4Ahum2"
					}))), o.a.createElement(u.s, {
						maxLength: E,
						onChange: this.onReasonChange,
						placeholder: n.fbt._("Reason they were muted", null, {
							hk: "3E29Hf"
						}),
						value: this.state.reason,
						"data-redditstyle": !0
					}), o.a.createElement(c.a, {
						maxChars: E,
						text: this.state.reason
					})), o.a.createElement(u.f, null, o.a.createElement(u.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(C, {
						onClick: this.onSubmit,
						"data-redditstyle": !0,
						disabled: !e.username && !Object(b.a)(t.username)
					}, n.fbt._("Mute user", null, {
						hk: "1z1Ss8"
					}))))
				}
			}
			t.default = Object(i.a)(v(k))
		},
		"./src/reddit/components/MutedUserList/index.m.less": function(e, t, s) {
			e.exports = {
				MuteIcon: "XHViv8EEjdjsATc3T66r9",
				muteIcon: "XHViv8EEjdjsATc3T66r9"
			}
		},
		"./src/reddit/components/MutedUserList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/subredditModeration/mute.ts"),
				h = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				g = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				x = s("./src/reddit/components/Scroller/Simple.tsx"),
				E = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				v = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				C = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				k = s("./src/reddit/icons/svgs/Mute/index.tsx"),
				y = s("./src/reddit/models/SubredditModeration/index.ts"),
				O = s("./src/reddit/selectors/activeModalId.ts"),
				S = s("./src/reddit/selectors/muted.ts"),
				w = s("./src/reddit/components/MutedUserList/ExpandedComponent.m.less"),
				j = s.n(w);
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = c.a.span("BannedBy", j.a), T = c.a.span("EmptyState", j.a), P = c.a.div("ExpandedContainer", j.a);
			var M = e => r.a.createElement(P, null, e.reason ? r.a.createElement(N, null, I._("Mod note {mutedByUsername}", [I._param("mutedByUsername", e.mutedBy)], {
					hk: "15D34v"
				})) : r.a.createElement(T, null, I._("No mod note.", null, {
					hk: "3rpIuv"
				})), e.reason),
				R = s("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				A = s("./src/reddit/components/MutedUserList/index.m.less"),
				L = s.n(A);
			const F = 24,
				D = c.a.wrapped(k.a, "MuteIcon", L.a),
				U = Object(d.c)({
					isAddUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(O.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--RemoveUserConfirmation" === Object(O.a)(e),
					loadMoreToken: S.c,
					mutedUsers: S.f,
					mutedUsersListPending: S.b,
					searchPending: S.d,
					searchResult: S.e
				}),
				B = Object(i.b)(U, (e, {
					subredditId: t
				}) => ({
					loadMore: s => e(Object(p.b)(t, {
						after: s
					})),
					searchForMutedUser: s => e(Object(p.c)(t, s)),
					toggleAddUserModal: () => e(Object(m.i)("ModerationPage--Modal--AddUser")),
					toggleUnmuteUserModal: () => e(Object(m.i)("ModerationPage--Modal--RemoveUserConfirmation")),
					unmuteUser: s => () => e(Object(p.d)(t, s))
				}));
			class W extends r.a.Component {
				constructor(e) {
					super(e), this.onSearch = e => {
						this.props.searchForMutedUser(e), this.props.sendEventWithName("search_done")(), this.setState({
							searchTerm: e
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: null
					}), this.unmuteToggled = (e, t) => () => {
						this.setState({
							userId: e,
							username: t
						}), this.props.sendEventWithName("edit_user")(), this.props.toggleUnmuteUserModal()
					}, this.onLoadMore = () => {
						this.props.loadMoreToken && this.props.loadMore(this.props.loadMoreToken)
					}, this.muteUser = () => {
						this.props.toggleAddUserModal(), this.props.sendEventWithName("mute_dialog_mutepage")()
					}, this.renderMutedUser = e => r.a.createElement(C.b, {
						description: e.reason,
						expandedComponent: r.a.createElement(M, {
							mutedBy: e.mutedBy,
							reason: e.reason
						}),
						pageName: l.Wb.Muted,
						primaryButton: r.a.createElement(_.o, {
							onClick: this.unmuteToggled(e.id, e.username)
						}, a.fbt._("Unmute", null, {
							hk: "334kKM"
						})),
						subredditId: this.props.subredditId,
						timeAgo: Object(u.d)(e.mutedAtUTC),
						userIcon: e.accountIcon,
						username: e.username
					}), this.renderMuteUserModal = () => r.a.createElement(R.a, {
						ignoreDefaultFocus: !0,
						trackAddEvent: this.props.sendEventWithName("add_mutepage"),
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleAddUserModal,
						withOverlay: !0
					}), this.state = y.a
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						mutedUsers: s
					} = e;
					let o;
					return s.length && (o = s[s.length - 1].id), e.mutedUsers.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(f.c, null, r.a.createElement(_.i, {
						onClick: this.muteUser
					}, a.fbt._("Mute user", null, {
						hk: "4AJ7nf"
					}))), r.a.createElement(f.a, null, r.a.createElement(f.b, null, a.fbt._("Muted users", null, {
						hk: "2kc6Jt"
					}), r.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), r.a.createElement(v.b, {
						onSearch: this.onSearch,
						activeSearchQuery: t.searchTerm
					}), t.searchTerm ? r.a.createElement(E.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && this.renderMutedUser(e.searchResult)) : r.a.createElement(x.b, {
						loadMoreToken: o,
						onLoadMore: this.onLoadMore
					}, e.mutedUsers.map((e, t) => ({
						estHeight: F,
						id: e.id,
						render: () => this.renderMutedUser(e)
					})))), e.isAddUserModalOpen && this.renderMuteUserModal(), e.isConfirmModalOpen && t.userId && t.username && r.a.createElement(h.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "2OeYUT"
						}),
						modalText: a.fbt._("Are you sure you want to unmute {username}?", [a.fbt._param("username", t.username)], {
							hk: "2Pq8hv"
						}),
						onConfirm: e.unmuteUser(t.userId),
						toggleModal: e.toggleUnmuteUserModal,
						trackClick: e.sendEventWithName("remove"),
						withOverlay: !0
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(f.c, null, r.a.createElement(_.i, {
						onClick: this.muteUser
					}, a.fbt._("Mute user", null, {
						hk: "4AJ7nf"
					}))), r.a.createElement(f.a, null, r.a.createElement(f.b, null, a.fbt._("Muted users", null, {
						hk: "2kc6Jt"
					}), r.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), e.mutedUsersListPending ? r.a.createElement(C.a, null) : r.a.createElement(b.c, {
						text: a.fbt._("No muted users in {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
							hk: "1o0lOP"
						})
					}, r.a.createElement(D, null)), e.isAddUserModalOpen && this.renderMuteUserModal()))
				}
			}
			t.a = B(W)
		},
		"./src/reddit/components/Paginator/index.m.less": function(e, t, s) {
			e.exports = {
				controlRow: "_2ixigr45sqDsYvVlMBgbMm",
				nextButtonContainer: "CloCv22o0KvzOk8LzB4VX",
				prevButtonContainer: "_2Tfdm_mlb1NvgbaCCkMtdV",
				nextButton: "_1VFGYMJpiKtL_S9_RYS-CD",
				prevButton: "eX92mTA_HDG9gpfIzIGhs"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				l = s.n(d);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: r,
					post: d,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return a.a.createElement("div", c({
					className: Object(o.a)(l.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: r
				}, p), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				d = s("./src/reddit/helpers/trackers/gallery.ts"),
				l = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = s("./src/reddit/hooks/useTracking.ts");
			var u = a.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(c.a)(),
						o = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(d.d(e.postId))
							})
						}, [s, e.postId]),
						r = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(l.a)(t, o, r), a.a.createElement("div", {
						role: "presentation"
					}, a.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				x = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				E = s("./src/reddit/components/PostContainer/index.m.less"),
				v = s.n(E);
			const C = Object(p.a)(() => Object(o.c)({
					basePixelMetadata: Object(f.a)((e, {
						post: t
					}) => Object(b.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(b.i)(e, {
						postId: t.id
					})
				})),
				_ = e => {
					const t = Object(x.d)(e.target, e.currentTarget),
						s = Object(x.b)(e.target, e.currentTarget, x.a.buttons);
					return "subreddit" !== t && s
				};
			class k extends a.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: o,
						makePostContainerId: l,
						post: c,
						onClick: m,
						onPostContentClick: p,
						sendEvent: b,
						style: f,
						ref: x
					} = this.props, E = a.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: x,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => m && m(s, c, t, o))(s), p && _(s) && p(s, c)), c.id && o) {
								const {
									source: e
								} = Object(r.t)(c, o);
								e && e.outboundUrl && b(Object(d.c)(c.id, e.outboundUrl))
							}
						},
						className: Object(g.a)(v.a.WrappedPost, n, `Post ${c.id}`, {
							promotedlink: c.isSponsored
						}),
						id: l ? l(c.id) : c.id,
						tabIndex: -1
					}, s), C = !!c.media && c.media.type === h.o.VIDEO;
					return c.isSponsored || C ? a.a.createElement(i.a, {
						post: c,
						trackDisplay: !0
					}, E) : c.media && Object(h.E)(c.media) ? a.a.createElement(u, {
						postId: c.id
					}, E) : E
				}
			}
			t.a = C(Object(x.c)(Object(m.c)(k)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(m);
			class h extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: a
						} = this.props, o = !!n;
						a(e ? Object(u.o)({
							postId: s,
							isFollowed: o
						}) : Object(u.g)({
							postId: s,
							isFollowed: o
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, a = this.state.isHovered, r = s.isFollowed;
					let i = r ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return r && a && (i = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(d.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const b = Object(r.b)(() => Object(i.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(l.y)(t.isSponsored ? t.postId : t.id))
			}))(Object(c.c)(h))
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, s) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "c", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/components/PostLeftRail/index.m.less"),
				l = s.n(d);
			const c = 40,
				u = e => e.isRemoved ? i.b.removed : e.isReported ? i.b.reported : "transparent",
				m = Object(r.a)(e => {
					const t = u(e),
						s = {
							width: `${c}px`,
							borderLeft: `4px solid ${t}`
						};
					return a.a.createElement("div", {
						className: Object(o.a)(l.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = m
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				r = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? a.a.createElement(o.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : a.a.createElement(r.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "i", (function() {
				return E
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "e", (function() {
				return _
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				o = s("./src/reddit/controls/Dropdown/Row.tsx"),
				r = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				i = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				d = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				l = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				c = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				u = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				m = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				p = s.n(m);
			const h = n.a.wrapped(r.a, "Icon", p.a),
				b = n.a.wrapped(i.a, "Icon", p.a),
				g = n.a.wrapped(d.a, "Icon", p.a),
				f = n.a.wrapped(l.a, "Icon", p.a),
				x = n.a.wrapped(c.a, "Icon", p.a),
				E = n.a.wrapped(u.a, "Icon", p.a),
				v = n.a.wrapped(a.b, "CheckboxMenuItem", p.a),
				C = n.a.wrapped(o.b, "DropdownRow", p.a),
				_ = n.a.div("ListContainer", p.a)
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(e, t, s) {
			e.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/ProgressBar/index.m.less"),
				i = s.n(r);
			t.a = ({
				className: e,
				innerBarClassName: t,
				percent: s
			}) => a.a.createElement("div", {
				className: Object(o.a)(i.a.outerBar, e)
			}, a.a.createElement("div", {
				className: Object(o.a)(i.a.innerBar, t),
				style: {
					width: `${s.toFixed(2)}%`
				}
			}))
		},
		"./src/reddit/components/RecurringPostList/ChangePageButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_1i9YssSDgp0wmEC43VdLTX",
				prevButton: "_2IBDYNRoTxtwgs13LWRpeM",
				arrowIcon: "QD6Re7us6VNRFNYSiD6to",
				disabled: "_3Lm3n-nPFfEcJoNjVwcm3r"
			}
		},
		"./src/reddit/components/RecurringPostList/EditModal/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-RecurringPostList-EditModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-RecurringPostList-EditModal").then(s.bind(null, "./src/reddit/components/RecurringPostList/EditModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/RecurringPostList/EditModal/index.tsx"
				}
			})
		},
		"./src/reddit/components/RecurringPostList/RecurringPost/ContentMeta/index.m.less": function(e, t, s) {
			e.exports = {
				contentRow: "Bt3uIal7yhwFSN9JorIng",
				contentRowMeta: "t6hD4d7F06TL2yv9vfp7h",
				title: "_3Evplg8YGmH6GDFsdQ0_nE",
				ownerName: "_215cUXwEuCE5hl0eYEIt_o",
				ownerNameContainer: "_2yAEv_Vw_ItUYbNbAjpSsL"
			}
		},
		"./src/reddit/components/RecurringPostList/RecurringPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_29n8ITXzfA7e5YAUZXR5Tv",
				failedStateIndicator: "_3wJPsvksvDytrEsrrZd1vI",
				metaRow: "NjfRmSRZrEkWYNAACYBql",
				replayIcon: "_17pwQtUdmIHAeybqNegNzP",
				metaRowText: "qlCreM7NlHbkzV-xkEGE7",
				recurrenceRules: "rX2aiRDwgPF22x70hQxqp",
				parametricMetaData: "_3mlGpRO1Z1gZJkATQcRNHO",
				pencilIcon: "z5A_DxaYn2G2TQSSQCpi2"
			}
		},
		"./src/reddit/components/RecurringPostList/RecurringPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return R
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/telemetry/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/scheduledPosts/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/components/AuthorLink/index.tsx"),
				m = s("./src/reddit/components/Thumbnail/index.tsx"),
				p = s("./src/reddit/components/RecurringPostList/Thumbnail/index.m.less"),
				h = s.n(p);
			var b = ({
					post: e
				}) => a.a.createElement("div", {
					className: h.a.thumbnailContainer
				}, a.a.createElement(m.a, {
					post: e,
					contentTypeClassName: h.a.placeholderIcon
				})),
				g = s("./src/reddit/components/ScheduledPost/index.tsx"),
				f = s("./src/reddit/models/ScheduledPost/index.ts"),
				x = s("./node_modules/reselect/es/index.js"),
				E = s("./src/reddit/components/RecurringPostList/RecurringPost/ContentMeta/index.m.less"),
				v = s.n(E);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = Object(x.c)({
				media: (e, {
					scheduledPost: t
				}) => ({
					...g.b,
					isNSFW: t.isNsfw,
					title: t.title
				})
			});
			var k = Object(o.b)(_)(e => {
					const {
						scheduledPost: t
					} = e, {
						isPostAsMetaMod: s,
						owner: n
					} = t, o = s ? c.k : Object(f.n)(n) ? n.name : void 0;
					return a.a.createElement("div", {
						className: Object(i.a)(v.a.contentRow, e.className)
					}, a.a.createElement(b, {
						post: e.media
					}), a.a.createElement("div", {
						className: v.a.contentRowMeta
					}, a.a.createElement("div", {
						className: v.a.title
					}, e.scheduledPost.title), a.a.createElement("div", {
						className: v.a.ownerNameContainer
					}, o && a.a.createElement("span", {
						className: v.a.ownerName
					}, C._("by {username}", [C._param("username", a.a.createElement(u.a, {
						author: o,
						isUnstyled: !0
					}, `u/${o}`))], {
						hk: "FAgpK"
					})), e.children)))
				}),
				y = s("./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx");
			var O = Object(y.a)(e => a.a.createElement(a.a.Fragment, null, e.renderOverflowMenu())),
				S = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				w = s("./src/reddit/helpers/scheduledPosts/index.ts"),
				j = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				I = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				N = s("./src/reddit/icons/svgs/Replay/index.tsx"),
				T = s("./src/reddit/components/RecurringPostList/RecurringPost/index.m.less"),
				P = s.n(T);
			const {
				fbt: M
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = "RECURRING_POSTS__EDIT", A = Object(o.b)(null, (e, t) => ({
				editRecurringPostRequested: () => {
					e(Object(l.c)({
						id: t.item.id,
						subredditId: t.item.subreddit.id
					})), e((e, t) => Object(r.a)(Object(j.e)()(t()))), e(Object(d.i)(R))
				},
				onOpenOverflow: () => {
					e((e, t) => Object(r.a)(Object(j.h)(!0)(t())))
				},
				onUpdateMetadata: s => e(Object(l.b)(s, t.item))
			}));
			class L extends a.a.PureComponent {
				render() {
					const {
						className: e,
						item: t,
						editRecurringPostRequested: s
					} = this.props, n = Object(w.e)(t), o = t.state === f.e.FAILED, {
						owner: r
					} = t, d = Object(f.n)(r) && r.prefixedName;
					return a.a.createElement("div", {
						className: Object(i.a)(e, P.a.container)
					}, o && a.a.createElement("div", {
						className: P.a.failedStateIndicator
					}, M._("Recurring post failed to submit. {Link: update recurring scheduled post} to reset", [M._param("Link: update recurring scheduled post", a.a.createElement(S.n, {
						onClick: s
					}, "Update schedule"))], {
						hk: "3Uitas"
					})), a.a.createElement("div", {
						className: P.a.metaRow
					}, a.a.createElement(N.a, {
						className: P.a.replayIcon
					}), a.a.createElement("div", {
						className: P.a.metaRowText
					}, a.a.createElement("div", {
						className: P.a.recurrenceRules,
						title: n
					}, n), a.a.createElement("div", null, M._("Scheduled by {=[post owner]}", [M._param("=[post owner]", a.a.createElement("span", {
						className: P.a.parametricMetaData
					}, M._("{post owner}", [M._param("post owner", d)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					}))), a.a.createElement("button", {
						onClick: s
					}, a.a.createElement(I.a, {
						className: P.a.pencilIcon
					}))), a.a.createElement(k, {
						scheduledPost: t
					}, a.a.createElement(O, {
						scheduledPost: t,
						onUpdateMetadata: this.props.onUpdateMetadata,
						onOpenOverflow: this.props.onOpenOverflow
					})))
				}
			}
			t.b = A(L)
		},
		"./src/reddit/components/RecurringPostList/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				placeholderIcon: "_2rWvDY38-Fa_14y347Il6W",
				thumbnailContainer: "_3cYCw7NYRAJwj6LvL8esBu"
			}
		},
		"./src/reddit/components/RecurringPostList/index.m.less": function(e, t, s) {
			e.exports = {
				titleContainer: "p9wLLlADU1pVQu4nx3HCF",
				postList: "_1qL48rnJIqcVj5nNuXkDSw",
				pageButtonPortal: "_3lBUQT-Vexm0jXk3WmIYJq",
				recurringPostsContainer: "_2UggIw0Xee7HvpOtrWrepd",
				lastRecurringPostItem: "dx2RjIkNec1E2-a1DyP07",
				emptyContainer: "_1Aurc-hBrd1zsfrQxHeZoq",
				icon: "_1BRYUIpfNcLUEr5L8DeJ8i",
				schedulePostLink: "_1mxUgytAdxfLqJuzRgGifT"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less": function(e, t, s) {
			e.exports = {
				DisplayContainer: "_3B7pbtNVM5jh1ozdZuJTfI",
				displayContainer: "_3B7pbtNVM5jh1ozdZuJTfI",
				DropdownLabel: "_3MKcNYjenRkpopz-m6f8hM",
				dropdownLabel: "_3MKcNYjenRkpopz-m6f8hM",
				ReasonTitle: "_1Ecdul4Q_dxU9eOJXmoQuK",
				reasonTitle: "_1Ecdul4Q_dxU9eOJXmoQuK",
				Dropdown: "_3z_HE15Esmqgf6bBaj3Epi",
				dropdown: "_3z_HE15Esmqgf6bBaj3Epi",
				DropdownTriangle: "_2BZTmZOOcbQzMo7VdN3KB-",
				dropdownTriangle: "_2BZTmZOOcbQzMo7VdN3KB-",
				DropdownRow: "_3AVzUedTbFNFyaVtzLzahr",
				dropdownRow: "_3AVzUedTbFNFyaVtzLzahr",
				DropdownContainer: "_33sg6HoBYll4rCDqRzRUdu",
				dropdownContainer: "_33sg6HoBYll4rCDqRzRUdu"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/index.tsx"),
				d = s("./src/reddit/controls/Dropdown/Row.tsx"),
				l = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				c = s("./src/reddit/layout/row/Inline/index.tsx"),
				u = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less"),
				m = s.n(u);
			const p = r.a.wrapped(c.a, "DisplayContainer", m.a),
				h = r.a.div("DropdownLabel", m.a),
				b = r.a.div("ReasonTitle", m.a),
				g = e => o.a.createElement(p, null, o.a.createElement(h, null, e.dropdownLabel), e.selectedReason && o.a.createElement(b, null, e.selectedReason)),
				f = r.a.wrapped(i.a, "Dropdown", m.a),
				x = r.a.wrapped(l.b, "DropdownTriangle", m.a),
				E = r.a.wrapped(d.b, "DropdownRow", m.a),
				v = r.a.button("DropdownContainer", m.a);
			t.a = e => o.a.createElement(v, {
				onClick: e.onToggleDropdown
			}, o.a.createElement(g, {
				dropdownLabel: e.isLoading ? n.fbt._("Loading...", null, {
					hk: "1bT6op"
				}) : n.fbt._("Reason for removal", null, {
					hk: "3C9ecg"
				}),
				selectedReason: e.selectedReason ? e.selectedReason.title : null
			}), o.a.createElement(x, null), e.isDropdownOpen && o.a.createElement(f, {
				isOverlay: !0
			}, o.a.createElement(E, {
				displayText: n.fbt._("None", null, {
					hk: "2443EZ"
				}),
				onClick: () => e.onSelectReason(null)
			}), e.subredditRemovalReasons.map((t, s) => o.a.createElement(E, {
				displayText: `${s+1}. ${t.title}`,
				key: t.title,
				onClick: () => e.onSelectReason(t)
			}))))
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less": function(e, t, s) {
			e.exports = {
				CharacterCountdown: "_3QAHANdA13oJnYRmkNk6sb",
				characterCountdown: "_3QAHANdA13oJnYRmkNk6sb",
				EmptyState: "_1Wu9eKXKrc5e52itaXM9ny",
				emptyState: "_1Wu9eKXKrc5e52itaXM9ny",
				ModNoteDescription: "_2yxydSiZfhd3wo7e1VeMg3",
				modNoteDescription: "_2yxydSiZfhd3wo7e1VeMg3",
				PrimaryButton: "_3ECRi_xQqKANiwqaFL6bmr",
				primaryButton: "_3ECRi_xQqKANiwqaFL6bmr",
				RadioOption: "_30JuaHooKBU-I9UQwxEwhL",
				radioOption: "_30JuaHooKBU-I9UQwxEwhL",
				BoldText: "_22_ggqyuhsjDD3F2auyNjc",
				boldText: "_22_ggqyuhsjDD3F2auyNjc",
				ModNoteInput: "_1hTAtA-9TFnHvYJWXuSFsv",
				modNoteInput: "_1hTAtA-9TFnHvYJWXuSFsv",
				MessageInput: "_1PK5NQ4vO_RKB4KvIDUONs",
				messageInput: "_1PK5NQ4vO_RKB4KvIDUONs",
				Info: "_3Bf1PCbZnJJBM391IWRv8D",
				info: "_3Bf1PCbZnJJBM391IWRv8D",
				SmallInfoText: "ozxLnphBA3LqIKZJwfCoD",
				smallInfoText: "ozxLnphBA3LqIKZJwfCoD",
				FormOptionsContainer: "_3fRFatQ34rHHRS3sO1Pacm",
				formOptionsContainer: "_3fRFatQ34rHHRS3sO1Pacm",
				ModalFooter: "_3dFILDoNznUDwdP1jfpTz-",
				modalFooter: "_3dFILDoNznUDwdP1jfpTz-",
				FooterRow: "_1vxr-V4SeBtsrkFSGJB0O8",
				footerRow: "_1vxr-V4SeBtsrkFSGJB0O8",
				ButtonRow: "_3zZmX0EjloIkzwt2-sRI2_",
				buttonRow: "_3zZmX0EjloIkzwt2-sRI2_"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "dispatcher", (function() {
				return I
			})), s.d(t, "selector", (function() {
				return N
			})), s.d(t, "connector", (function() {
				return T
			})), s.d(t, "CharacterCountdown", (function() {
				return P
			})), s.d(t, "EmptyState", (function() {
				return M
			})), s.d(t, "MessageInput", (function() {
				return U
			})), s.d(t, "FormOptionsContainer", (function() {
				return H
			})), s.d(t, "ModalFooter", (function() {
				return V
			})), s.d(t, "ButtonRow", (function() {
				return G
			})), s.d(t, "AddRemovalReasonModal", (function() {
				return z
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/removalReasons/index.ts"),
				c = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/index.tsx"),
				b = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = s("./src/reddit/controls/TextButton/index.tsx"),
				f = s("./src/reddit/icons/fonts/Info/index.tsx"),
				x = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				E = s("./src/reddit/models/RemovalReason/index.ts"),
				v = s("./src/reddit/selectors/removalReasons.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				y = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less"),
				O = s.n(y);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = e => {
				switch (e) {
					case E.f.Private:
						return "private_subreddit";
					case E.f.PrivateExposed:
						return "private_personal";
					default:
						return e
				}
			}, j = {
				isDropdownOpen: !1,
				message: "",
				modNote: "",
				removalType: E.f.Public,
				selectedReason: null
			}, I = e => ({
				submitBulkRemovalReason: (t, s, n, a, o) => e(Object(l.submitBulkRemovalReason)(t, s, n, a, o)),
				submitRemovalReason: (t, s, n, a, o) => e(Object(l.submitRemovalReason)(t, s, n, a, o))
			}), N = Object(r.c)({
				currentUserName: e => {
					const t = Object(_.i)(e);
					if (t) return t.displayText
				},
				isLoading: v.a,
				removalReasons: v.c,
				subredditName: (e, {
					subredditId: t
				}) => Object(C.T)(e, {
					subredditId: t
				}).name
			}), T = Object(o.b)(N, I), P = d.a.wrapped(c.a, "CharacterCountdown", O.a), M = d.a.div("EmptyState", O.a), R = d.a.wrapped(u.n, "ModNoteDescription", O.a), A = d.a.wrapped(m.i, "PrimaryButton", O.a), L = d.a.wrapped(b.a, "RadioOption", O.a), F = d.a.span("BoldText", O.a), D = d.a.wrapped(u.s, "ModNoteInput", O.a), U = d.a.wrapped(u.s, "MessageInput", O.a), B = d.a.wrapped(f.a, "Info", O.a), W = d.a.div("SmallInfoText", O.a), H = d.a.div("FormOptionsContainer", O.a), V = d.a.wrapped(u.f, "ModalFooter", O.a), q = d.a.div("FooterRow", O.a), G = d.a.wrapped(q, "ButtonRow", O.a);
			class z extends a.a.Component {
				constructor(e) {
					super(e), this.onSelectRemovalType = e => {
						this.setState({
							removalType: e
						}), this.props.trackClick(`type_${w(e)}`)()
					}, this.onMessageInputChange = e => {
						this.setState({
							message: e.currentTarget.value
						})
					}, this.onUpdateModNote = e => {
						this.setState({
							modNote: e.currentTarget.value
						})
					}, this.handleToggleDropdown = () => this.setState({
						isDropdownOpen: !this.state.isDropdownOpen
					}), this.closeDropdown = () => {
						this.state.isDropdownOpen && this.setState({
							isDropdownOpen: !1
						})
					}, this.onSelectReason = e => {
						this.setState({
							selectedReason: e
						}), this.props.trackClick("reason")(), e && this.setState({
							message: e.message
						}), this.closeDropdown()
					}, this.canSave = () => !(this.state.message.length > E.a || this.state.modNote.length > E.b) && (this.state.selectedReason ? this.state.message.trim().length > 0 : this.state.modNote.trim().length > 0), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.canSave()) {
							(t.removalContextType === E.e.Bulk ? e.submitBulkRemovalReason : e.submitRemovalReason)(e.itemIds, t.selectedReason, t.message.trim(), t.removalType, t.modNote.trim()), e.trackClick("sent")(), t.selectedReason && e.trackClick(`sent_${w(t.removalType)}`)(), t.modNote && e.trackClick("sent_modnote")(), e.toggleModal()
						}
					}, this.onCancel = () => {
						this.props.toggleModal(), this.props.trackClick("cancel")()
					}, this.renderRemovalTypeOptions = () => {
						const {
							props: e,
							state: t
						} = this, s = [];
						return t.removalContextType !== E.e.Bulk && s.push(a.a.createElement(L, {
							key: E.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: E.f.Public
						}, a.a.createElement("div", null, t.removalContextType === E.e.Post ? S._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : S._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						})))), s.push(a.a.createElement(L, {
							key: E.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: E.f.Private
						}, a.a.createElement("div", null, S._("Private: send a Modmail from {subredditName} to the user", [S._param("subredditName", a.a.createElement(F, null, `r/${e.subredditName}`))], {
							hk: "1wUxMe"
						})))), e.currentUserName && s.push(a.a.createElement(L, {
							key: E.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: E.f.PrivateExposed
						}, a.a.createElement("div", null, S._("Private: send a Modmail from {currentUserName} to the user", [S._param("currentUserName", a.a.createElement(F, null, `u/${e.currentUserName}`))], {
							hk: "wFSJr"
						})))), s
					}, this.state = {
						...j,
						removalContextType: Object(E.g)(e.itemIds)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return a.a.createElement(u.d, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && a.a.createElement(u.h, null, a.a.createElement(x.a, null, a.a.createElement(u.p, null, S._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && S._("({number of items} posts/comments)", [S._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), a.a.createElement(g.a, {
						onClick: this.onCancel
					}, a.a.createElement(u.b, null)))), a.a.createElement(u.k, null, e.isLoading || e.removalReasons.length > 0 ? a.a.createElement(k.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : a.a.createElement(M, null, S._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), a.a.createElement(p.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, a.a.createElement(m.o, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, S._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && a.a.createElement(H, null, a.a.createElement(u.g, null, a.a.createElement(h.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), a.a.createElement(U, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), a.a.createElement(P, {
						maxChars: E.a,
						text: t.message.trim()
					}), a.a.createElement(W, null, t.removalType !== E.f.Public && a.a.createElement(a.a.Fragment, null, a.a.createElement(B, null), S._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))))), a.a.createElement(V, null, a.a.createElement(q, null, a.a.createElement(R, null, S._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), a.a.createElement(q, null, a.a.createElement(D, {
						placeholder: S._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), a.a.createElement(q, null, a.a.createElement(P, {
						maxChars: E.b,
						text: t.modNote.trim()
					})), a.a.createElement(G, null, a.a.createElement(m.l, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, S._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(A, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, S._("Submit", null, {
						hk: "42zLFy"
					})))))
				}
			}
			t.default = Object(i.a)(T(z))
		},
		"./src/reddit/components/RemovalReasons/RemovalReasonEditorModal.m.less": function(e, t, s) {
			e.exports = {
				GenericGreetingText: "_1RYmGXZkbjV_9GAwCiqmLp",
				genericGreetingText: "_1RYmGXZkbjV_9GAwCiqmLp",
				DeleteReasonButton: "_3LU38GqHnVONELmzr-6CjS",
				deleteReasonButton: "_3LU38GqHnVONELmzr-6CjS",
				PrimaryButton: "_1Qw31YEY4D8vZqqnidfBid",
				primaryButton: "_1Qw31YEY4D8vZqqnidfBid",
				TextArea: "_2g19cC2dTjD8Ivp0iaxvPI",
				textArea: "_2g19cC2dTjD8Ivp0iaxvPI",
				ModalFooter: "a8KANZ6wvta1y_8QSZmeS",
				modalFooter: "a8KANZ6wvta1y_8QSZmeS",
				Input: "tWupUgopHVvjD9_bZZVy0",
				input: "tWupUgopHVvjD9_bZZVy0"
			}
		},
		"./src/reddit/components/RemovalReasons/RemovalReasonItem.m.less": function(e, t, s) {
			e.exports = {
				EditButton: "_3Z3niHttcaJCxThBE2-eNN",
				editButton: "_3Z3niHttcaJCxThBE2-eNN",
				Row: "_1ERpdeakuaRdyW5OEGvV_a",
				row: "_1ERpdeakuaRdyW5OEGvV_a",
				ReasonNumber: "_37ciCG1flXTYWdLXzWUVSP",
				reasonNumber: "_37ciCG1flXTYWdLXzWUVSP",
				ReasonText: "_3Vv7n3XK-P5uslyAy7Li0w",
				reasonText: "_3Vv7n3XK-P5uslyAy7Li0w"
			}
		},
		"./src/reddit/components/RemovalReasons/index.m.less": function(e, t, s) {
			e.exports = {
				Rules: "-z_XjylM-4VxXIVlUJupm",
				rules: "-z_XjylM-4VxXIVlUJupm"
			}
		},
		"./src/reddit/components/RemovalReasons/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/removalReasons/index.ts"),
				m = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				p = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				h = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				b = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				x = s("./src/reddit/models/RemovalReason/index.ts"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				v = s("./src/reddit/selectors/removalReasons.ts"),
				C = s("./src/higherOrderComponents/asModal/index.tsx"),
				_ = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				k = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				y = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				O = s("./src/reddit/controls/TextButton/index.tsx"),
				S = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				w = s("./src/reddit/components/RemovalReasons/RemovalReasonEditorModal.m.less"),
				j = s.n(w);
			const I = {
					message: "",
					title: ""
				},
				N = l.a.wrapped(k.e, "GenericGreetingText", j.a),
				T = l.a.wrapped(k.r, "DeleteReasonButton", j.a),
				P = l.a.wrapped(g.i, "PrimaryButton", j.a),
				M = l.a.wrapped(k.s, "TextArea", j.a),
				R = l.a.wrapped(k.f, "ModalFooter", j.a),
				A = l.a.wrapped(y.c, "Input", j.a);
			class L extends r.a.Component {
				constructor(e) {
					super(e), this.onTitleInputChange = e => {
						e.currentTarget.value.length <= x.d && this.setState({
							title: e.currentTarget.value
						})
					}, this.onMessageInputChange = e => {
						this.setState({
							message: e.currentTarget.value
						})
					}, this.onSave = () => {
						const e = {
							title: this.state.title.trim(),
							message: this.state.message.trim()
						};
						this.props.removalReason && (e.id = this.props.removalReason.id), this.props.onSubmit(e), this.props.sendEvent(), this.props.toggleModal()
					}, this.canSave = () => this.state.title.trim().length > 0 && this.state.title.trim().length <= x.d && this.state.message.trim().length > 0 && this.state.message.trim().length <= x.a, this.state = e.removalReason ? {
						title: e.removalReason.title,
						message: e.removalReason.message
					} : I
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(k.d, null, r.a.createElement(k.h, null, r.a.createElement(S.a, null, r.a.createElement(k.p, null, e.removalReason ? a.fbt._("Edit removal reason", null, {
						hk: "1P0jAw"
					}) : a.fbt._("Add new reason", null, {
						hk: "jDYo"
					})), r.a.createElement(O.a, {
						onClick: e.toggleModal
					}, r.a.createElement(k.b, null)))), r.a.createElement(k.k, null, r.a.createElement(k.g, null, r.a.createElement(A, {
						placeholder: a.fbt._("Removal reason title", null, {
							hk: "4hFurd"
						}),
						value: t.title,
						onChange: this.onTitleInputChange
					}), r.a.createElement(_.a, {
						text: t.title.trim(),
						maxChars: x.d
					})), r.a.createElement(k.n, null, a.fbt._("Reason message:", null, {
						hk: "yMtrM"
					})), r.a.createElement(N, null, a.fbt._("Hi u/username,", null, {
						hk: "NE4XP"
					})), r.a.createElement(M, {
						placeholder: a.fbt._("Write a message that will communicate to the user why their post was removed.", null, {
							hk: "4u5AVO"
						}),
						value: t.message,
						onChange: this.onMessageInputChange,
						"data-redditstyle": !0
					}), r.a.createElement(_.a, {
						text: t.message.trim(),
						maxChars: x.a
					})), r.a.createElement(R, null, r.a.createElement(P, {
						onClick: this.onSave,
						"data-redditstyle": !0,
						disabled: !this.canSave()
					}, e.removalReason ? a.fbt._("Save", null, {
						hk: "2U0EXj"
					}) : a.fbt._("Add new reason", null, {
						hk: "34P0ii"
					})), r.a.createElement(k.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), e.removalReason && r.a.createElement(T, {
						onClick: e.onDeleteReason
					}, a.fbt._("Delete", null, {
						hk: "n7R3f"
					}))))
				}
			}
			var F = Object(C.a)(L),
				D = s("./src/reddit/layout/row/Inline/index.tsx"),
				U = s("./src/reddit/components/RemovalReasons/RemovalReasonItem.m.less"),
				B = s.n(U);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = l.a.wrapped(g.o, "EditButton", B.a), V = l.a.wrapped(D.a, "Row", B.a), q = l.a.div("ReasonNumber", B.a), G = l.a.div("ReasonText", B.a);
			var z = e => r.a.createElement(V, null, r.a.createElement(q, null, e.index + 1), r.a.createElement(G, null, e.removalReason.title), r.a.createElement(H, {
					onClick: e.onEdit,
					"data-redditstyle": !0
				}, W._("Edit", null, {
					hk: "1nftDt"
				}))),
				K = s("./src/reddit/components/RemovalReasons/index.m.less"),
				X = s.n(K);
			const Q = {
					reasonToEdit: null
				},
				J = l.a.wrapped(f.a, "Rules", X.a),
				Y = Object(d.c)({
					isConfirmModalOpen: e => "RemovalReasons--Modal--DeleteConfirmation" === Object(E.a)(e),
					isRemovalReasonEditorModalOpen: e => "RemovalReasons--Editor--Modal" === Object(E.a)(e),
					removalReasons: v.c
				}),
				Z = Object(i.b)(Y, (e, {
					subredditId: t
				}) => ({
					addRemovalReason: s => e(Object(u.addRemovalReason)(t, s)),
					deleteRemovalReason: s => e(Object(u.deleteRemovalReason)(t, s)),
					editRemovalReason: s => e(Object(u.editRemovalReason)(t, s)),
					toggleConfirmationModal: () => e(Object(c.i)("RemovalReasons--Modal--DeleteConfirmation")),
					toggleReasonEditorModal: () => e(Object(c.i)("RemovalReasons--Editor--Modal"))
				}));
			class $ extends r.a.Component {
				constructor(e) {
					super(e), this.onAddReason = () => {
						this.setState({
							reasonToEdit: null
						}), this.props.toggleReasonEditorModal(), this.props.sendEventWithName("add_new")()
					}, this.onEditReason = e => () => {
						this.setState({
							reasonToEdit: e
						}), this.props.toggleReasonEditorModal(), e && this.props.sendEventWithName("edit")()
					}, this.renderReasonEditorModal = () => r.a.createElement(F, {
						onDeleteReason: () => {
							this.props.toggleReasonEditorModal(), this.props.toggleConfirmationModal()
						},
						onSubmit: this.state.reasonToEdit ? this.props.editRemovalReason : this.props.addRemovalReason,
						removalReason: this.state.reasonToEdit,
						sendEvent: this.state.reasonToEdit ? this.props.sendEventWithName("edit_save") : this.props.sendEventWithName("new_save"),
						subredditId: this.props.subredditId,
						toggleModal: this.onEditReason(null),
						withOverlay: !0
					}), this.state = Q
				}
				render() {
					const {
						deleteRemovalReason: e,
						isConfirmModalOpen: t,
						isRemovalReasonEditorModalOpen: s,
						removalReasons: o,
						sendEventWithName: i,
						toggleConfirmationModal: d
					} = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(b.c, null, r.a.createElement(g.i, {
						onClick: this.onAddReason,
						disabled: o.length >= x.c || s,
						"data-redditstyle": !0
					}, a.fbt._("Add removal reason", null, {
						hk: "2fHPVe"
					}))), r.a.createElement(b.a, null, r.a.createElement(b.b, null, a.fbt._("Removal reasons", null, {
						hk: "3IWxkH"
					}), r.a.createElement(h.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360010094892`
					})), o.length > 0 ? o.map((e, t) => r.a.createElement(z, {
						index: t,
						key: e.title,
						onEdit: this.onEditReason(e),
						removalReason: e
					})) : r.a.createElement(p.c, {
						text: a.fbt._("No removal reasons yet", null, {
							hk: "1j70G1"
						})
					}, r.a.createElement(J, null))), s && this.renderReasonEditorModal(), t && this.state.reasonToEdit && r.a.createElement(m.a, {
						actionText: a.fbt._("Delete", null, {
							hk: "3BvUe8"
						}),
						headerText: a.fbt._("Delete reason", null, {
							hk: "q2qun"
						}),
						modalText: a.fbt._("Are you sure you want to delete this reason?", null, {
							hk: "1FTfMR"
						}),
						onConfirm: () => {
							this.state.reasonToEdit && e(this.state.reasonToEdit.id)
						},
						toggleModal: () => {
							d(), this.setState({
								reasonToEdit: null
							})
						},
						trackClick: i("delete"),
						withOverlay: !0
					}))
				}
			}
			t.a = Z($)
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				d = s.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = r.a.wrapped(e => {
				const {
					children: t,
					className: s,
					renderBelow: n,
					text: r,
					tooltipContentClass: i,
					...c
				} = e;
				return a.a.createElement("div", l({}, c, {
					className: Object(o.a)(d.a.container, s)
				}), r ? a.a.createElement("div", {
					className: Object(o.a)(d.a.tooltip, i, n ? d.a.below : d.a.above)
				}, r) : null, t)
			}, "HoverTooltip", d.a)
		},
		"./src/reddit/components/SaveIndicator/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_13ubiSSjUBWaeyJM-itH7X",
				titleFontH2: "_2V4_0G0gJO4R1v-_sO5D_j",
				titleFontH3: "_32Uo9qgINsZX5CSOtFM0e2",
				titleFontH4: "_2AWEwOuuK5wBnQGyiB5sSq",
				titleFontH5: "_8460KZXLwbKYkuLfDNr_-",
				titleFontH6: "_7GhKEQrcNu3JuSHqj9pJc",
				metadataFont: "qilOmvvpr4iY8iiHxuV5Y",
				flairFont: "SovT7HaLHcqz1BM9MWXPA",
				labelsFont: "_3Ngpaj84VwPqy3s6Tr3GEJ",
				actionFont: "_3RLwRjy5tGM8nl4kID8Tfg",
				smallButtonFont: "nb_OfRzzHKNkGteZC-TyY",
				largeButtonFont: "_2fhzAdDCEdDseFevwE6mBQ",
				strongTextFont: "_2vvi6WI_4yX2H2H-b2aBCF",
				tabFont: "_3E-egg7Cy7bL6JzsZuFTcn",
				buttonFontXS: "_2ubuuRpTK-U-kDLRRU6pyd",
				buttonFontXs: "_2ubuuRpTK-U-kDLRRU6pyd",
				buttonFontS: "_2fsKOual6xDsvmfB9Z_Gab",
				buttonFontM: "_3pHwBKAuUlalHSG7AJTpEP",
				buttonFontL: "fC3WZNZt7dm3kVDpkLV2",
				buttonFontXL: "_1A7d3cQhRmAUn05diOyF_D",
				buttonFontXl: "_1A7d3cQhRmAUn05diOyF_D",
				bodyFontH1: "_2_nWm6krUlDJnEF9pk7xNK",
				bodyFontH2: "_3zzd4vTmfrG1aK91i6m2j9",
				bodyFontH3: "_3tFwmsoGmyp52EFCoZ0GCV",
				bodyFontH4: "MdKdTVjxUaPPkDvG_msXr",
				bodyFontH5: "_2dNFOZceckCrwGYG8Avi-k",
				bodyFontH6: "_3sSb6LvOgvwy7eawwX4Gtq",
				bodyFont: "_2fiuzofxgtB6yu9nAHLuqW",
				bodyFontSmall: "_2IcqO4djjAVsOalbW_Zpa9",
				bodyFontMono: "_2i_EmKzaFJfCskmkHdmmgJ",
				icon: "cO908rcinWKz894i8I5jJ",
				pendingIcon: "U2dgL2i9_EJN8R_MLFTjS",
				savedIcon: "_1iGcF7LdvT-OMRgF7xKWqm",
				saveErrorIcon: "kWS-87C-v-iTlGGxQOmxu",
				caption: "_1MAESVWNqu44JbWmHGJsuI"
			}
		},
		"./src/reddit/components/ScheduledPost/ControlRow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1xM2tjm8c7LuqnoEJG1Ws1",
				controlRow: "P7KCCrRfT4TO2wcnk_Kjv",
				controlRowItem: "_1AkGbjxtRpq3ZhKADdUTU3"
			}
		},
		"./src/reddit/components/ScheduledPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_297_pyPlxmqBF0tLkUhTME",
				icon: "_1n_ojuNDT8JeH9DxmHJZt9",
				author: "_1k9D_vEsQ8odWCNERbDOxX",
				modIcon: "_3ryKOTfQ_vqgap0EZsZHAl",
				stickyIcon: "qfjbZcX6-FZK2BGrOXezD"
			}
		},
		"./src/reddit/components/ScheduledPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/components/AuthorLink/index.tsx"),
				i = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				d = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				l = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				c = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				u = s("./src/reddit/models/ScheduledPost/index.ts"),
				m = s("./src/reddit/components/ScheduledPost/MetaLine/index.m.less"),
				p = s.n(m);
			class h extends a.a.PureComponent {
				render() {
					if (!Object(u.o)(this.props.subreddit)) return null;
					const {
						isModDistinguished: e,
						isPostAsMetaMod: t,
						subreddit: s,
						owner: n,
						isSticky: m
					} = this.props, h = t ? o.k : Object(u.n)(n) ? n.name : void 0;
					return a.a.createElement("span", {
						className: p.a.content
					}, a.a.createElement(i.a, {
						to: s.path
					}, s.prefixedName), h && a.a.createElement(a.a.Fragment, null, a.a.createElement(d.a, null), a.a.createElement(r.a, {
						className: p.a.author,
						author: h,
						isUnstyled: !0
					}, `u/${h}`)), e && a.a.createElement(c.a, {
						className: p.a.modIcon
					}), m && a.a.createElement(l.a, {
						className: p.a.stickyIcon
					}))
				}
			}
			t.a = h
		},
		"./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				d = s("./src/reddit/components/OverflowMenu/index.tsx"),
				l = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx");
			var c = e => a.a.createElement(d.b, {
					dropdownId: `SCHEDULED_POST_DROPDOWN${e.scheduledPostId}`,
					onClick: e.onOpenOverflow
				}, a.a.createElement(l.b, {
					isSelected: e.isSticky,
					onClick: e.onToggleIsSticky,
					text: i.fbt._("Sticky post", null, {
						hk: "UOShB"
					})
				}), a.a.createElement(l.b, {
					isSelected: e.isModDistinguished,
					onClick: e.onToggleIsModDistinguished,
					text: i.fbt._("Distinguish as Mod", null, {
						hk: "3opu7K"
					})
				}), a.a.createElement(l.b, {
					isSelected: e.isOriginalContent,
					onClick: e.onToggleIsOC,
					text: i.fbt._("Mark as OC", null, {
						hk: "32LGcQ"
					})
				}), a.a.createElement(l.b, {
					isSelected: e.isNsfw,
					onClick: e.onToggleIsNsfw,
					text: i.fbt._("Mark as NSFW", null, {
						hk: "2qBIcp"
					})
				}), a.a.createElement(l.b, {
					isSelected: e.isSpoiler,
					onClick: e.onToggleIsSpoiler,
					text: i.fbt._("Mark as Spoiler", null, {
						hk: "rOev9"
					})
				})),
				u = s("./src/reddit/selectors/scheduledPosts/index.ts");
			const m = Object(r.c)({
					isLoading: u.j
				}),
				p = Object(o.b)(m);

			function h(e) {
				class t extends a.a.Component {
					constructor(e) {
						super(e), this.isSaving = !1, this.onToggleMetadata = e => {
							this.setState({
								...this.state,
								[e]: !this.state[e]
							}), this.isSaving = !0, this.props.onUpdateMetadata(e)
						}, this.onToggleIsSticky = () => this.onToggleMetadata("isSticky"), this.onToggleIsModDistinguished = () => this.onToggleMetadata("isModDistinguished"), this.onToggleIsOriginalContent = () => this.onToggleMetadata("isOriginalContent"), this.onToggleIsNsfw = () => this.onToggleMetadata("isNsfw"), this.onToggleIsSpoiler = () => this.onToggleMetadata("isSpoiler"), this.renderOverflowMenu = () => a.a.createElement(c, {
							scheduledPostId: this.props.scheduledPost.id,
							onOpenOverflow: this.props.onOpenOverflow,
							onToggleIsSticky: this.onToggleIsSticky,
							onToggleIsModDistinguished: this.onToggleIsModDistinguished,
							onToggleIsOC: this.onToggleIsOriginalContent,
							onToggleIsNsfw: this.onToggleIsNsfw,
							onToggleIsSpoiler: this.onToggleIsSpoiler,
							isModDistinguished: this.state.isModDistinguished,
							isOriginalContent: this.state.isOriginalContent,
							isNsfw: this.state.isNsfw,
							isSticky: this.state.isSticky,
							isSpoiler: this.state.isSpoiler
						}), this.state = {
							isModDistinguished: e.scheduledPost.isModDistinguished,
							isNsfw: e.scheduledPost.isNsfw,
							isOriginalContent: e.scheduledPost.isOriginalContent,
							isSpoiler: e.scheduledPost.isSpoiler,
							isSticky: !!e.scheduledPost.sticky && "NONE" !== e.scheduledPost.sticky
						}
					}
					componentDidUpdate(e) {
						e.isLoading && !this.props.isLoading && this.isSaving && (this.isSaving = !1, this.setState({
							isModDistinguished: this.props.scheduledPost.isModDistinguished || !1,
							isNsfw: this.props.scheduledPost.isNsfw || !1,
							isOriginalContent: this.props.scheduledPost.isOriginalContent || !1,
							isSpoiler: this.props.scheduledPost.isSpoiler || !1,
							isSticky: !!this.props.scheduledPost.sticky && "NONE" !== this.props.scheduledPost.sticky
						}))
					}
					render() {
						const {
							isLoading: t,
							scheduledPost: s,
							onUpdateMetadata: n,
							onOpenOverflow: o,
							...r
						} = this.props, i = {
							...r,
							renderOverflowMenu: this.renderOverflowMenu
						};
						return a.a.createElement(e, i)
					}
				}
				return t.displayName = `WithOverflowMenu(${e.displayName||e.name})`, p(t)
			}
		},
		"./src/reddit/components/ScheduledPost/PostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3jA9JBnv4bqmmiAw3Akmug"
			}
		},
		"./src/reddit/components/ScheduledPost/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/ScheduledPost/PostTitle/index.m.less"),
				r = s.n(o);
			class i extends a.a.PureComponent {
				render() {
					return a.a.createElement("span", {
						className: r.a.title
					}, this.props.title)
				}
			}
			t.a = i
		},
		"./src/reddit/components/ScheduledPost/TopMetaLine/FailureMetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1YrhJ0z1RfTXg7jHYgApSr",
				error: "_2_f_ecVpbx4yoMzazJYkDP",
				retryButton: "_1KbjdUJVdbZQOJN8d6LTsX",
				parametricMetaData: "_2x3oXUTdLAKAob3BYLRkmH"
			}
		},
		"./src/reddit/components/ScheduledPost/TopMetaLine/TemporalMetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "qDE3oDok1392-t8IDOBfk",
				clock: "_2sfIhl6E6vfZCwxx54EUNB",
				parametricMetaData: "_3bAfM2inJTjD3ZXNzO5nE5"
			}
		},
		"./src/reddit/components/ScheduledPost/index.m.less": function(e, t, s) {
			e.exports = {
				body: "_320l2eVngsr4Ord9dXc2er",
				container: "_26zeT5d9JKXWbWzOT4ncpg",
				thumbnailContainer: "_2UwJRJuqEbkRCV8O6REq8h",
				mainBody: "_3pHV3zwe-Q9-xNEB0iM3WT",
				backgroundWrapper: "_2KWv8ukh9RMgpOturAiV9z",
				content: "hAQclO6xLNG3WDMgkywGo",
				flairList: "_1-tY_25z_pkhbFvUz2-AqS",
				Icon: "_3XIOnqmz8vxSaPmPEY11Wh",
				icon: "_3XIOnqmz8vxSaPmPEY11Wh"
			}
		},
		"./src/reddit/components/ScheduledPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return fe
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/scheduledPosts/index.ts"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/telemetry/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/scheduledPosts/index.ts"),
				m = s("./src/reddit/actions/scheduledPosts/delete.ts"),
				p = s("./src/reddit/actions/scheduledPosts/edit.ts"),
				h = s("./src/lib/makeActionCreator/index.ts"),
				b = s("./src/reddit/actions/scheduledPosts/constants.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/reddit/actions/urlRequested.ts"),
				x = s("./src/graphql/operations/SubmitScheduledPost.json"),
				E = s("./src/lib/makeGqlRequest/index.ts");
			var v = s("./src/reddit/models/Toast/index.ts");
			const C = Object(h.a)(b.l),
				_ = (e, t) => async (s, n, {
					gqlContext: a
				}) => {
					const o = Object(i.p)(n(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (!o) return void s(Object(g.f)(Object(g.e)(b.u(), v.b.Error)));
					const r = await ((e, t) => Object(E.a)(e, {
						...x,
						variables: t
					}))(a(), {
						input: {
							id: o.id
						}
					});
					if (!r.ok) return void s(Object(g.f)(Object(g.e)(b.v(), v.b.Error, b.s(), _(e, t))));
					const d = r.body.data.submitScheduledPost.post.permalink;
					s(Object(f.a)(d, !1)), s(Object(g.f)(Object(g.e)(b.x(), v.b.SuccessCommunity))), s(C({
						subredditId: e,
						scheduledPostId: t
					}))
				};
			var k = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				y = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = s("./src/reddit/components/FlairList/index.tsx"),
				S = s("./src/reddit/components/PostLeftRail/index.tsx"),
				w = s("./src/lib/classNames/index.ts"),
				j = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				I = s("./src/reddit/controls/Score/index.tsx"),
				N = s("./src/reddit/models/Vote/index.ts"),
				T = s("./src/reddit/components/VerticalVotes/index.m.less"),
				P = s.n(T);
			class M extends o.a.PureComponent {
				render() {
					return o.a.createElement("div", {
						className: P.a.votesContainer
					}, o.a.createElement("button", {
						className: P.a.disabledVoteIcon,
						"aria-label": n.fbt._("Upvote", null, {
							hk: "4aEt1X"
						}),
						"aria-pressed": !1,
						disabled: !0
					}, o.a.createElement(j.d, {
						compact: !1,
						voteState: N.a.notVoted,
						interactive: !1
					})), o.a.createElement(I.a, {
						disableInlineColor: !0,
						className: Object(w.a)(P.a.Score, P.a.disabledScore),
						score: 0,
						voteState: N.a.notVoted,
						isScoreHidden: !0
					}), o.a.createElement("button", {
						className: P.a.disabledVoteIcon,
						"aria-label": n.fbt._("downvote", null, {
							hk: "4xXpvV"
						}),
						"aria-pressed": !1,
						disabled: !0
					}, o.a.createElement(j.c, {
						compact: !1,
						voteState: N.a.notVoted,
						interactive: !1
					})))
				}
			}
			var R = M,
				A = s("./src/reddit/constants/thumbnails.ts"),
				L = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				F = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				D = s("./src/reddit/models/PostCreationForm/index.ts"),
				U = s("./src/reddit/models/ScheduledPost/index.ts"),
				B = s("./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx"),
				W = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				H = s("./src/reddit/icons/svgs/Post/index.tsx"),
				V = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				q = s("./src/reddit/components/ScheduledPost/ControlRow/index.m.less"),
				G = s.n(q);
			const z = e => {
				const {
					icon: t,
					onClick: s
				} = e;
				return o.a.createElement("span", {
					onClick: s,
					className: Object(w.a)(G.a.controlRowItem, e.className)
				}, o.a.createElement(t, {
					className: G.a.icon
				}), " ", e.text)
			};
			class K extends o.a.Component {
				render() {
					return o.a.createElement("span", {
						className: G.a.controlRow
					}, this.props.onSubmitPostNow && o.a.createElement(z, {
						icon: H.a,
						text: n.fbt._("Submit post now", null, {
							hk: "QkS4y"
						}),
						onClick: this.props.onSubmitPostNow
					}), o.a.createElement(z, {
						icon: W.a,
						text: n.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.props.onEditScheduledPost
					}), o.a.createElement(z, {
						icon: V.b,
						text: n.fbt._("Delete", null, {
							hk: "1uVY7w"
						}),
						onClick: this.props.onDeleteScheduledPost
					}), this.props.renderOverflowMenu())
				}
			}
			var X = Object(B.a)(K),
				Q = s("./src/reddit/components/ScheduledPost/MetaLine/index.tsx"),
				J = s("./src/reddit/components/ScheduledPost/PostTitle/index.tsx"),
				Y = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Z = s("./src/reddit/components/ScheduledPost/TopMetaLine/FailureMetaLine/index.m.less"),
				$ = s.n(Z);
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class te extends o.a.PureComponent {
				componentDidMount() {
					this.props.onViewFailedPost()
				}
				render() {
					const {
						scheduledPost: e
					} = this.props, {
						owner: t
					} = e, s = Object(U.n)(t) && t.prefixedName;
					return o.a.createElement("div", {
						className: $.a.container
					}, o.a.createElement("div", null, o.a.createElement(Y.a, {
						className: $.a.error
					}), ee._("Post failed to submit! Please {=retry}", [ee._param("=retry", o.a.createElement("button", {
						className: $.a.retryButton,
						onClick: this.props.onSubmitPostNow
					}, ee._("retry", null, {
						hk: "hER94"
					})))], {
						hk: "4yOnl8"
					})), o.a.createElement("div", null, ee._("Scheduled by {=[post owner]}", [ee._param("=[post owner]", o.a.createElement("span", {
						className: $.a.parametricMetaData
					}, ee._("{post owner}", [ee._param("post owner", s)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					})))
				}
			}
			var se = Object(r.b)(null, (e, {
					scheduledPost: t
				}) => ({
					onSubmitPostNow: () => {
						e(_(t.subreddit.id, t.id)), e((e, t) => Object(l.a)(Object(F.n)()(t())))
					},
					onViewFailedPost: () => e((e, s) => Object(l.a)(Object(F.w)()(s(), t)))
				}))(te),
				ne = s("./src/reddit/helpers/scheduledPosts/index.ts"),
				ae = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				oe = s("./src/reddit/components/ScheduledPost/TopMetaLine/TemporalMetaLine/index.m.less"),
				re = s.n(oe);
			const {
				fbt: ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), de = e => {
				return `${Object(ne.c)(e.publishAt)} ${Object(ne.d)(e.clientTimezone).displayText}`
			};
			class le extends o.a.PureComponent {
				render() {
					const {
						scheduledPost: e
					} = this.props, {
						owner: t
					} = e, s = Object(U.n)(t) && t.prefixedName;
					return o.a.createElement("div", {
						className: re.a.container
					}, o.a.createElement(ae.a, {
						className: re.a.clock
					}), o.a.createElement("div", null, o.a.createElement("div", null, ie._("This post is scheduled for {=[time]}", [ie._param("=[time]", o.a.createElement("span", {
						className: re.a.parametricMetaData
					}, ie._("{time}", [ie._param("time", de(e))], {
						hk: "JrMs3"
					})))], {
						hk: "4gFrnr"
					})), o.a.createElement("div", null, ie._("Scheduled by {=[post owner]}", [ie._param("=[post owner]", o.a.createElement("span", {
						className: re.a.parametricMetaData
					}, ie._("{post owner}", [ie._param("post owner", s)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					}))))
				}
			}
			var ce = le;
			class ue extends o.a.PureComponent {
				render() {
					const {
						scheduledPost: e
					} = this.props;
					switch (e.state) {
						case U.e.FAILED:
							return o.a.createElement(se, {
								scheduledPost: e
							});
						case U.e.PROCESSING:
						case U.e.CREATED:
						default:
							return o.a.createElement(ce, {
								scheduledPost: e
							})
					}
				}
			}
			var me = ue,
				pe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				he = s.n(pe),
				be = s("./src/reddit/components/ScheduledPost/index.m.less"),
				ge = s.n(be);
			const fe = {
					isNSFW: !1,
					media: {
						content: "",
						markdownContent: "",
						isRichtextPreview: !0,
						mediaMetadata: null,
						obfuscated: null,
						richtextContent: {
							document: []
						},
						rteMode: D.h.RICH_TEXT,
						type: "rtjson"
					},
					thumbnail: {
						url: A.a.DEFAULT,
						width: null,
						height: null
					},
					title: "",
					source: null,
					isSponsored: !1
				},
				xe = Object(d.c)({
					media: (e, {
						scheduledPostId: t,
						subredditId: s
					}) => {
						const n = Object(i.p)(e, {
							subredditId: s,
							scheduledPostId: t
						});
						return n ? {
							...fe,
							isNSFW: n.isNsfw,
							title: n.title
						} : null
					},
					flair: (e, {
						scheduledPostId: t,
						subredditId: s
					}) => {
						const n = Object(i.p)(e, {
							subredditId: s,
							scheduledPostId: t
						});
						return n ? Object(i.m)({
							scheduledPost: n
						}) : null
					},
					scheduledPost: (e, {
						scheduledPostId: t,
						subredditId: s
					}) => Object(i.p)(e, {
						subredditId: s,
						scheduledPostId: t
					})
				}),
				Ee = Object(r.b)(xe, (e, {
					scheduledPostId: t,
					subredditId: s
				}) => ({
					onSubmitPostNow: () => {
						e(_(s, t)), e((e, t) => Object(l.a)(Object(F.n)()(t())))
					},
					onEditScheduledPost: () => {
						e(Object(p.b)(s, t)), e((e, t) => Object(l.a)(Object(F.d)()(t())))
					},
					onDeleteScheduledPost: () => e(Object(m.a)(s, t)),
					onOpenOverflow: () => {
						e((e, t) => Object(l.a)(Object(F.h)(!1)(t())))
					},
					onUpdateMetadata: n => e((e, a) => {
						const o = Object(i.p)(a(), {
							subredditId: s,
							scheduledPostId: t
						});
						o && e(Object(u.b)(n, o))
					})
				}));
			class ve extends o.a.PureComponent {
				constructor(e) {
					super(e), this.onSubmitPostNow = () => this.setState({
						submitConfirmModalIsOpen: !0
					}), this.onCancelSubmitPostNow = () => this.setState({
						submitConfirmModalIsOpen: !1
					}), this.onConfirmSubmitPostNow = () => this.props.onSubmitPostNow(), this.onEditScheduledPost = () => {
						this.props.onEditScheduledPost()
					}, this.onDeleteScheduledPost = () => this.setState({
						deleteConfirmModalIsOpen: !0
					}), this.onCancelDeleteScheduledPost = () => this.setState({
						deleteConfirmModalIsOpen: !1
					}), this.onConfirmDeleteScheduledPost = () => this.props.onDeleteScheduledPost(), this.state = {
						deleteConfirmModalIsOpen: !1,
						submitConfirmModalIsOpen: !1
					}
				}
				render() {
					const {
						media: e,
						flair: t,
						scheduledPost: s
					} = this.props;
					return e && t && s ? o.a.createElement("div", {
						className: ge.a.container
					}, o.a.createElement(me, {
						scheduledPost: s
					}), o.a.createElement("div", {
						className: he.a.classicPostStyles
					}, o.a.createElement(S.b, null, o.a.createElement(R, null)), o.a.createElement("div", {
						style: Object(L.c)(void 0, this.props),
						className: ge.a.backgroundWrapper
					}, o.a.createElement("div", {
						className: ge.a.mainBody
					}, o.a.createElement("div", {
						className: ge.a.thumbnailContainer
					}, o.a.createElement(k.a, {
						post: e
					})), o.a.createElement("div", {
						className: ge.a.content
					}, o.a.createElement("div", null, o.a.createElement(J.a, {
						title: s.title
					}), o.a.createElement(O.a, {
						className: ge.a.flairList,
						flair: t
					})), o.a.createElement(Q.a, {
						isModDistinguished: s.isModDistinguished,
						isPostAsMetaMod: s.isPostAsMetaMod,
						isSticky: !!s.sticky && "NONE" !== s.sticky,
						subreddit: s.subreddit,
						owner: s.owner
					}), o.a.createElement(X, {
						onSubmitPostNow: s.state === U.e.FAILED ? void 0 : this.onSubmitPostNow,
						onEditScheduledPost: this.onEditScheduledPost,
						onDeleteScheduledPost: this.onDeleteScheduledPost,
						onUpdateMetadata: this.props.onUpdateMetadata,
						scheduledPost: s,
						onOpenOverflow: this.props.onOpenOverflow
					}))))), this.state.deleteConfirmModalIsOpen && o.a.createElement(y.a, {
						onClose: this.onCancelDeleteScheduledPost,
						onCancel: this.onCancelDeleteScheduledPost,
						onConfirm: this.onConfirmDeleteScheduledPost,
						actionText: n.fbt._("Delete", null, {
							hk: "1WN0R6"
						}),
						modalText: n.fbt._("Are you sure you want to delete this scheduled post? This action cannot be undone.", null, {
							hk: "1EdQC7"
						}),
						withOverlay: !0
					}), this.state.submitConfirmModalIsOpen && o.a.createElement(y.a, {
						onClose: this.onCancelSubmitPostNow,
						onCancel: this.onCancelSubmitPostNow,
						onConfirm: this.onConfirmSubmitPostNow,
						actionText: n.fbt._("Submit", null, {
							hk: "3kl12J"
						}),
						modalText: n.fbt._("Are you sure you want to submit this scheduled post now? This action cannot be undone.", null, {
							hk: "18O8dB"
						}),
						withOverlay: !0
					})) : null
				}
			}
			t.a = Object(c.a)(Ee(ve))
		},
		"./src/reddit/components/Scroller/Simple.m.less": function(e, t, s) {
			e.exports = {
				Hidden: "wwHbgRV0ZXGp5CHHlpo5u",
				hidden: "wwHbgRV0ZXGp5CHHlpo5u"
			}
		},
		"./src/reddit/components/Scroller/Simple.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return X
			}));
			var n = s("./node_modules/lodash/debounce.js"),
				a = s.n(n),
				o = s("./node_modules/lodash/isNil.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				l = s("./node_modules/react-dom/index.js"),
				c = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/request-idle-callback/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/fastdom/index.ts"),
				b = s("./node_modules/lodash/throttle.js"),
				g = s.n(b);
			const f = 500,
				x = 1e3,
				E = 40;
			var v;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(v || (v = {}));
			const C = () => ({
					[v.Max10]: 0,
					[v.Max20]: 0,
					[v.Max30]: 0,
					[v.Max40]: 0,
					[v.Max50]: 0,
					[v.Max60]: 0
				}),
				_ = [v.Max10, v.Max20, v.Max30, v.Max40, v.Max50, v.Max60],
				k = e => ({
					eventHandler: e
				});

			function y({
				fn: e,
				subscriber: t,
				timeout: s
			}) {
				const n = [];
				let a, o, r;
				const i = () => {
						if (n.length < E) return;
						const e = C(),
							s = Math.min(x, n.length),
							a = n.splice(0, s);
						n.splice(0, n.length);
						const o = a[s - 1] - a[0];
						for (let t = a.shift(); a.length > 0; t = a.shift()) {
							const s = a[0] - t,
								n = Math.min(60, Math.ceil(1e3 / s));
							e[n <= 10 ? v.Max10 : 60 === n ? v.Max60 : _[Math.ceil(n / 10) - 1]] += s
						}
						const r = C();
						for (const t in e) r[t] = e[t] / o;
						t(r)
					},
					d = () => {
						void 0 !== r && (window.clearTimeout(r), r = void 0)
					},
					l = () => {
						void 0 !== a && (cancelAnimationFrame(a), a = void 0), void 0 !== o && (window.clearInterval(o), o = void 0), d(), i()
					},
					c = () => {
						a = requestAnimationFrame(() => {
							n.push(performance.now()), c()
						})
					},
					u = g()(() => {
						d(), r = window.setTimeout(l, s)
					}, p.G);
				return {
					cleanup: l,
					eventHandler: t => {
						void 0 === o ? (c(), u(), o = window.setInterval(i, f)) : u(), e(t)
					}
				}
			}
			var O = s("./src/lib/scheduler/index.ts"),
				S = s("./src/lib/domUtils/index.ts"),
				w = s("./src/lib/LinkedListMap/index.ts");
			const j = (e, t) => e < 0 ? t + e : e % t;
			class I {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = j(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = j(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? j(this.head - this.size, this.maxSize) : this.head;
					for (let s = 0; s < this.size; s++) e(this.items[t], s, this.size), t = (t + 1) % this.maxSize
				}
				map(e) {
					const t = new Array(this.size);
					return this.forEach((s, n, a) => {
						t[n] = e(s, n, a)
					}), t
				}
				getEntries() {
					const e = new Array(this.size);
					return this.forEach((t, s) => {
						e[s] = t
					}), e
				}
				clear() {
					const e = this.size;
					for (let t = 0; t < e; t++) this.pop()
				}
			}
			var N = s("./src/reddit/components/Scroller/getDocumentTop.ts");
			class T {
				constructor({
					top: e,
					height: t,
					heightWithSuffix: s
				}) {
					this.height = t, this.heightWithSuffix = s, this.top = e, this.bottom = this.top + this.height
				}
				contains(e) {
					return !(e.top <= this.top || e.bottom >= this.bottom)
				}
				intersects(e) {
					return !(e.bottom <= this.top || e.top >= this.bottom)
				}
				intersectsBorder(e) {
					return e.top <= this.top && e.bottom >= this.top || e.bottom >= this.bottom && e.top <= this.bottom
				}
				containsTop(e) {
					return !(e.top < this.top || e.top > this.bottom)
				}
				isAbove(e) {
					return e.top > this.bottom
				}
				isBelow(e) {
					return e.bottom < this.top
				}
			}
			const P = ({
				buffer: e,
				container: t
			} = {}) => {
				const s = r()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(N.a)() : t.scrollTop;
					return new T({
						top: e,
						height: window.innerHeight
					})
				}
				return new T({
					top: 0,
					height: s
				})
			};
			var M = s("./src/reddit/components/ResizeSensor/index.tsx"),
				R = s("./src/reddit/constants/componentSizes.ts"),
				A = s("./src/reddit/constants/elementClassNames.ts"),
				L = s("./src/reddit/contexts/InsideOverlay.tsx"),
				F = s("./src/reddit/selectors/platform.ts"),
				D = s("./src/telemetry/helpers/sendEvent.ts"),
				U = s("./src/telemetry/helpers/sendTiming.ts"),
				B = s("./src/reddit/components/Scroller/Simple.m.less"),
				W = s.n(B);
			const H = R.g,
				V = 5 * p.G,
				q = 3,
				G = Object(m.c)({
					isOverlayOpen: F.h
				}),
				z = Object(c.b)(G),
				K = {};

			function X(e) {
				return e === document
			}

			function Q(e) {
				let t = 0;
				do {
					t += e.offsetTop || 0, e = e.offsetParent
				} while (e);
				return t
			}
			const J = 10,
				Y = .9,
				Z = .9,
				$ = 1.8,
				ee = 5,
				te = 1500,
				se = 2 * p.G,
				ne = 400,
				ae = 8,
				oe = 5 * p.G,
				re = 30,
				ie = "object" == typeof performance && "function" == typeof performance.now,
				de = () => ie ? performance.now() : Date.now();

			function le(e, t) {
				return w.a.fromArray(e.children.map((e, s) => {
					const n = t && t.get(e.id);
					return n ? (n.isFocusable = !!e.isFocusable, n.trackOnEnteredViewport = e.trackOnEnteredViewport, n.trackOnExitedViewport = e.trackOnExitedViewport, n) : {
						el: null,
						id: e.id,
						index: s,
						isFocusable: !!e.isFocusable,
						itemRef: void 0,
						focused: !1,
						loaded: !t && s < ee,
						rectangle: void 0,
						trackOnEnteredViewport: e.trackOnEnteredViewport,
						trackOnExitedViewport: e.trackOnExitedViewport
					}
				}), "id")
			}
			class ce extends d.a.Component {
				constructor(e) {
					super(e), this.lastRenderPosition = 0, this.lastScrollTime = -1, this.resetCanFocusTimer = -1, this.unmountItemsIdleId = null, this.scrollingQuickly = !1, this.visibleChildrenCount = 0, this.isRenderableChildrenStateChangePending = !1, this.parentOffsetTop = void 0, this.containerOffsetTop = void 0, this.distanceToTop = void 0, this.measurementsInvalid = !1, this.viewport = void 0, this.mountableViewport = void 0, this.needsToPauseViewportItems = !0, this.updateRenderableChildrenWhenIdleHandle = null, this.requestUpdateWhenIdleCallbackHandle = null, this.pendingScollHandlerRead = null, this.pendingResizeHandlerRead = null, this.renderableViewport = void 0, this.sendFPSData = e => {
						const t = {
							name: this.props.trackingName
						};
						D.b.enqueue(new O.a({
							args: [e, t],
							cb: (e, t) => Object(U.a)(p.l.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							s = [];
						let n = this.nextVisibleChildrenIndex;
						for (; e < t && n < this.props.children.length;) {
							const t = this.props.children[n];
							s.push(t), e += t.estHeight, n++
						}
						return this.visibleChildrenCount = s.length, s
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(ne / e), ae)
						} else this.renderableChildrenIndexIncrement = ae
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = oe, Object(u.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(u.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && de() - this.lastScrollTime < se, this.populateRenderableChildrenFromProps = (e = !1, t = this.renderableChildrenIndexIncrement, s) => {
						const n = s || this.props.children;
						if (this.state.renderableChildren.length < n.length || e)
							if (this.hasScrolledWithinThreshold()) h.a.read(() => {
								clearTimeout(this.updateRenderableChildrenHandle), this.updateRenderableChildrenHandle = setTimeout(() => {
									this.populateRenderableChildrenFromProps(e, this.renderableChildrenIndexIncrement, s ? n : void 0)
								}, se)
							});
							else {
								this.nextVisibleChildrenIndex + t <= n.length ? this.nextVisibleChildrenIndex += t : this.nextVisibleChildrenIndex = n.length;
								const e = n.slice(0, this.nextVisibleChildrenIndex);
								e.length && (this.lastVisibleElId = e[e.length - 1].id), h.a.write(() => {
									this.setState({
										renderableChildren: e
									})
								}), this.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + ne) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = (e = re) => {
						let t = 0,
							s = this.state.renderableChildren.length;
						for (; t < e && s < this.props.children.length;) t += this.props.children[s].estHeight, s++;
						const n = s - this.state.renderableChildren.length;
						return Math.max(this.renderableChildrenIndexIncrement, n)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(u.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = a()(() => {
						this.handleScroll()
					}, p.G), this.pauseAllElements = () => {
						const e = this.getItemsInViewportWithFilter(this.loadedChildRefFilter),
							t = [];
						e.forEach(e => {
							const {
								itemRef: s
							} = e;
							s && (e.focused = !1, t.push(s.pauseContent))
						}), h.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new w.a("id");
						return this.state.renderableChildren.forEach(s => {
							const n = this.childMap.get(s.id);
							n && e(n) && t.push(n)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, p.G))
					}, this.setContainerRef = e => {
						this.containerRef = e, this.props.innerRef && this.props.innerRef(e)
					}, this.getChildRectangle = e => {
						const {
							el: t
						} = e;
						if (!t) return;
						if (e.rectangle && !this.measurementsInvalid) return e.rectangle;
						if (void 0 === this.parentOffsetTop) {
							const e = t.offsetParent;
							this.parentOffsetTop = (null == e ? void 0 : e.offsetTop) || 0;
							const s = (null == e ? void 0 : e.getBoundingClientRect().top) || 0;
							this.distanceToTop = s + this.getScrollTop()
						}
						const s = t.offsetTop + this.parentOffsetTop,
							n = t.getBoundingClientRect().height,
							a = new T({
								top: s,
								height: n,
								heightWithSuffix: `${n}px`
							});
						return e.rectangle = a, a
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? Q(this.containerRef) : 0, this.handleContentContainerResize = a()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = h.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, p.G), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = h.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(S.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < Y,
								s = e < Z,
								n = e < $;
							if (this.scrollContainer && !this.loadMoreFired && this.props.onLoadMore) {
								let e = !1;
								if (void 0 !== this.props.loadMoreToken && void 0 !== this.viewport && this.nextVisibleChildrenIndex >= this.props.children.length) {
									const t = this.getTotalOffsetTop();
									e = !!this.containerRef && this.containerRef.offsetHeight + t - this.viewport.bottom <= this.viewport.height
								}
								if (e) {
									const {
										onLoadMore: e
									} = this.props;
									setTimeout(e), this.loadMoreFired = !0
								}
							}
							this.populateRenderableChildrenIfLastChildIsVisible();
							const a = new w.a("id");
							let o, r;
							const i = [];
							this.state.renderableChildren.forEach(e => {
								const d = this.childMap.get(e.id);
								let l;
								if (d && d.el) {
									if (!(l = this.getChildRectangle(d))) return;
									const {
										id: e
									} = d;
									this.elementIsHideable(l) ? void 0 === this.hiddenChildren[e] && (this.childrenToHide[e] = l.heightWithSuffix) : void 0 !== this.hiddenChildren[e] && (this.childrenToShow[e] = !0)
								}
								if (!d || !d.el || !d.rectangle) return void(this.measurementsInvalid && d && this.getChildRectangle(d));
								const {
									id: c,
									itemRef: u,
									trackOnEnteredViewport: m
								} = d, p = !!this.itemsInViewport.get(c);
								if (this.elementIsUnmountable(l)) u && p && d.loaded && d.isFocusable && i.push(u.pauseContent);
								else if (u && this.loadItemIfPossible(d, u, t, s, n, i), this.elementIsVisible(l)) {
									a.push(d), !p && m && D.b.enqueue(new O.a({
										cb: m,
										args: void 0
									}));
									const e = this.elementIsFocused(l);
									e && !r && (r = d.id), t && d.isFocusable && !o && e ? (o = d.id, d.focused || (d.focused = !0, u && i.push(u.focusContent))) : d.loaded && d.isFocusable && (d.focused || this.needsToPauseViewportItems) && (d.focused = !1, u && i.push(u.pauseContent))
								} else p && d.loaded && d.isFocusable && (d.focused = !1, u && i.push(u.stopContent))
							}), h.a.write(() => {
								i.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(({
								id: e,
								trackOnExitedViewport: t
							}) => {
								t && !a.has(e) && D.b.enqueue(new O.a({
									cb: t,
									args: [!1]
								}))
							}), this.itemsInViewport = a, this.canFocusItems = t, this.focusedChild = o, this.primaryChild = r, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, V), null !== this.unmountItemsIdleId && (Object(u.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
								getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
								primaryChild: this.primaryChild ? this.childMap.get(this.primaryChild) : void 0
							}), this.timeoutForUpdateIdleCallback = 4 * oe, this.schedulePopulateRenderableChildrenWhenIdle(), this.pendingScollHandlerRead = null
						}))
					}, this.unmountItemsWhileIdle = e => {
						if (!this.scrollContainer) return;
						const t = [];
						if (this.state.renderableChildren.forEach(e => {
								const s = this.childMap.get(e.id);
								if (!s || !s.el || !s.itemRef) return;
								const n = this.getChildRectangle(s);
								n && this.elementIsUnmountable(n) && s.loaded && t.push(s)
							}), !t.length) return;
						const s = Math.min(Math.ceil(e.timeRemaining() / q), t.length),
							n = [];
						for (let a = 0; a < s; a++) {
							const e = t[a];
							n.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(l.unstable_batchedUpdates)(() => {
							this.scrollContainer && n.forEach(e => e())
						}), s < t.length ? this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = a()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, p.G), this.hideChild = (e, t) => {
						const s = this.childMap.get(e);
						if (!s || !s.el) return;
						const n = s.el.firstChild;
						n && (t !== s.el.style.height && (s.el.style.height = t), n.classList.add(W.a.Hidden), this.hiddenChildren[e] = t, s.loaded && h.a.write(() => {
							s.itemRef && (s.loaded = !1, s.focused = !1, s.itemRef.unmountContent())
						}))
					}, this.showChild = e => {
						const t = this.childMap.get(e);
						if (!t || !t.el) return;
						const s = t.el.firstChild;
						s && (this.remeasureWhenShown[t.id] && (this.measurementsInvalid = !0, this.remeasureWhenShown[t.id] = void 0), t.el.style.height = "", s.classList.remove(W.a.Hidden), void 0 !== this.hiddenChildren[e] && (this.hiddenChildren[e] = void 0))
					}, this.getStylesForOuterWrapper = e => {
						if (void 0 !== this.hiddenChildren[e]) return {
							height: this.hiddenChildren[e]
						}
					}, this.remeasureChild = e => {
						this.measurementsInvalid = !0
					}, this.scrollToChild = (e, t) => {
						this.measurementsInvalid = !0, h.a.read(() => {
							const s = this.childMap.get(e);
							if (s && s.el && this.scrollContainer) {
								if (s.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const n = this.getScrollTop() + s.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(S.c)(this.scrollContainer, n), this.callOnScrollForItemsChanged())
								}, p.G)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: s = 0
							} = this.props, n = window.innerHeight - s, {
								top: a
							} = t.el.getBoundingClientRect();
							return a >= s + e && a < n
						}
						return !1
					}, this.childMap = le(e), this.containerRef = null, this.itemsInViewport = new w.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new I(J), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = oe;
					const t = this.getVisibleChildren();
					t.length && (this.lastVisibleElId = t[t.length - 1].id), this.nextVisibleChildrenIndex = t.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: t
					}, this.setRenderableChildrenIndexIncrement(), this.validateScrollPreservationProps(e), this.validateLoadMoreProps(e)
				}
				populateRenderableChildrenIfLastChildIsVisible() {
					if (this.isRenderableChildrenStateChangePending) return;
					this.state.renderableChildren.length < this.props.children.length && h.a.read(() => {
						if (!this.isRenderableChildrenStateChangePending && this.lastElementIsAboutToBeVisible()) {
							const e = this.getRenderableChildrenIndexIncrement();
							this.populateRenderableChildrenFromProps(!1, e)
						}
					})
				}
				setupScrollHandler() {
					this.fpsMeter = this.props.trackingName ? y({
						fn: this.handleScroll,
						subscriber: this.sendFPSData,
						timeout: V
					}) : k(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (h.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (h.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(S.c)(this.scrollContainer, 0), this.setupScrollHandler(), h.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = K[e];
							r()(t) || (K[e] = void 0, this.scrollContainer && Object(S.c)(this.scrollContainer, t))
						}
						this.callOnScrollForItemsChanged(), this.props.onLastVisibleChildRendered && this.props.onLastVisibleChildRendered()
					}), h.a.read(() => {
						this.containerOffsetTop = this.getTotalOffsetTop()
					}), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentDidUpdate(e) {
					if (this.isRenderableChildrenStateChangePending = !1, this.measurementsInvalid = !0, this.scrollTargetId && (this.scrollToChild(this.scrollTargetId, !1), this.scrollTargetId = void 0), this.didLayoutAloneChange(e, this.props)) {
						this.callExitedViewportForUnmount(), this.focusedChild = void 0, this.childrenToShow = {}, this.childrenToHide = {}, this.hiddenChildren = {}, this.childMap.forEach(e => {
							e.loaded = !1, e.focused = !1
						}), this.setRenderableChildrenIndexIncrement(), this.populateRenderableChildrenFromProps(!0), this.callOnScrollForItemsChanged();
						const e = this.getVisibleChildren();
						this.visibleChildrenCount = e.length, this.schedulePopulateRenderableChildrenWhenIdle()
					}
					this.populateRenderableChildrenIfLastChildIsVisible(), e.trackingName !== this.props.trackingName && (this.cleanupScrollHandler(), this.setupScrollHandler())
				}
				shouldComponentUpdate(e) {
					return e.isOverlayOpen === this.props.isOverlayOpen
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.validateScrollPreservationProps(e) && this.validateLoadMoreProps(e) && this.didLayoutAloneChange(this.props, e) && this.hasBeenScrolled() && this.handleScroll(), e.loadMoreToken !== this.props.loadMoreToken && (this.loadMoreFired = !1, this.loadMoreEl = null), e.isOverlayOpen !== this.props.isOverlayOpen && e.isOverlayOpen && !this.props.isOverlay && h.a.read(this.pauseAllElements), e.isOverlayOpen === this.props.isOverlayOpen || e.isOverlayOpen || this.props.isOverlay || this.resetScrollFramerateAndFocus(), this.childMap = le(e, this.childMap);
					const t = e.children.length < this.props.children.length,
						s = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || s, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						K[e] = this.lastRenderPosition
					}
					this.childMap = new w.a("id"), this.itemsInViewport = new w.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(u.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
				}
				didLayoutAloneChange(e, t) {
					return "string" == typeof e.layoutKey && "string" == typeof t.layoutKey && e.layoutKey !== t.layoutKey && "string" == typeof e.dataKey && "string" == typeof t.layoutKey && e.dataKey === t.dataKey
				}
				elementIsFocused(e) {
					if (!this.viewport) return !1;
					const t = this.distanceToTop ? this.distanceToTop : 0,
						s = this.parentOffsetTop ? this.parentOffsetTop : 0,
						n = e.bottom + t - s,
						a = e.top + t - s,
						o = Math.min(this.viewport.bottom, n) - Math.max(this.viewport.top, a),
						r = o / e.height,
						i = o / this.viewport.height;
					return r > .75 || i > .9
				}
				getFirstItemInViewport() {
					for (const {
							id: e
						} of this.props.children) {
						const t = this.childMap.get(e);
						if (t) {
							const e = this.getChildRectangle(t);
							if (e && this.elementIsVisible(e)) return t
						}
					}
				}
				elementIsUnmountable(e) {
					return !!this.mountableViewport && !this.mountableViewport.intersects(e)
				}
				elementIsHideable(e) {
					return !!this.renderableViewport && !this.renderableViewport.intersects(e)
				}
				getCacheKey() {
					return this.props.children.map(e => e.id).join("-")
				}
				getScrollTop() {
					return this.scrollContainer ? X(this.scrollContainer) ? Object(N.a)() : this.scrollContainer.scrollTop : 0
				}
				updateViewportInfo() {
					if (this.scrollContainer) {
						this.viewport = P({
							buffer: 0,
							container: this.scrollContainer
						});
						const {
							viewportTopPadding: e = 0
						} = this.props, t = window.innerHeight - e, s = 2 * t;
						this.mountableViewport = new T({
							top: this.viewport.top - s,
							height: this.viewport.height + 2 * s
						});
						const n = 4 * t;
						this.renderableViewport = new T({
							top: this.viewport.top - n,
							height: this.viewport.height + 2 * n
						})
					}
				}
				updateScrollMetrics() {
					this.updateViewportInfo();
					const e = de(),
						t = this.getScrollTop(),
						s = Math.abs(this.lastRenderPosition - t),
						n = e - this.lastScrollTime,
						a = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, a ? this.pixelsPerMSRing.push(s / n) : this.lastScrollTime = e
				}
				getAveragePixelsPerMilliSecond() {
					if (this.pixelsPerMSRing.size > 1) {
						let e = 0;
						return this.pixelsPerMSRing.forEach(t => e += t), e / this.pixelsPerMSRing.size
					}
					return 0
				}
				_wrapperRefFN(e, t) {
					const s = this.childMap.get(e);
					s && (s.el = t), this.lastVisibleElId === e && (this.lastVisibleEl = t)
				}
				getWrapperRefFN(e) {
					let t = this.wrapperRefFNs[e];
					return t || (t = t => {
						this._wrapperRefFN(e, t)
					}, this.wrapperRefFNs[e] = t), t
				}
				_childRefFn(e, t, s) {
					const n = this.childMap.get(e);
					n && (n.itemRef = t, n.loaded = !!t && (void 0 !== s ? s : n.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, s) => {
						this._childRefFn(e, t, s)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, s, n, a, o) {
					if (t.contentIsHeavyToMount() ? n : a) {
						const n = !e.isFocusable || s;
						!e.loaded && n && (e.loaded = !0, o.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(({
						id: e,
						trackOnExitedViewport: t
					}) => {
						t && D.b.enqueue(new O.a({
							cb: t,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = Q(this.containerRef);
					return this.getScrollTop() + e - t > 0
				}
				render() {
					const {
						contentContainerRef: e
					} = this.props;
					return d.a.createElement("div", {
						className: this.props.className,
						ref: this.setContainerRef
					}, this.state.renderableChildren.map((e, t) => d.a.createElement("div", {
						key: `scroller-${e.id}`,
						ref: this.getWrapperRefFN(e.id),
						style: this.getStylesForOuterWrapper(e.id)
					}, d.a.createElement("div", {
						className: this.hiddenChildren[e.id] ? W.a.Hidden : void 0
					}, e.render({
						className: A.k,
						height: e.estHeight,
						placeholderRecommended: !1,
						remeasure: this.remeasureChild,
						scrollToAndRemeasure: this.scrollToChild,
						setScrollerChildRef: this.getChildRefFn(e.id),
						shouldLoadInitially: t < ee,
						width: H
					})))), !!e && d.a.createElement(M.a, {
						containerRef: e,
						onResize: this.handleContentContainerResize
					}))
				}
				validateScrollPreservationProps(e) {
					return "string" != typeof e.layoutKey || void 0 !== e.dataKey
				}
				validateLoadMoreProps(e) {
					return void 0 === e.onLoadMore || "loadMoreToken" in e
				}
			}
			t.b = z(Object(L.b)(ce))
		},
		"./src/reddit/components/Scroller/getDocumentTop.ts": function(e, t, s) {
			"use strict";
			t.a = () => document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0
		},
		"./src/reddit/components/Settings/shared/SectionHeading.m.less": function(e, t, s) {
			e.exports = {
				Component: "BotIImuktRA9aFAPP0O4Z",
				component: "BotIImuktRA9aFAPP0O4Z"
			}
		},
		"./src/reddit/components/Settings/shared/SectionHeading.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/Settings/shared/SectionHeading.m.less"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx");
			t.a = o.a.h3("Component", a.a)
		},
		"./src/reddit/components/Settings/shared/Widgets.m.less": function(e, t, s) {
			e.exports = {
				Label: "asxizthf5kZpmoY27VBKd",
				label: "asxizthf5kZpmoY27VBKd",
				HoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				hoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				ControlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				controlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				TextContainer: "_3dLmvT0hpACHFxhncqzCOr",
				textContainer: "_3dLmvT0hpACHFxhncqzCOr",
				inModal: "_2O2JPVgOlh8J6OW_9ur4BQ",
				ActionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				actionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				Wrapper: "_2f63as5b5FASHMqGd5P1o0",
				wrapper: "_2f63as5b5FASHMqGd5P1o0",
				isCreateCommunity: "_38bDTwLcytTCF-174R0UXB",
				mColumn: "_1HH_g-CLQB1BPcqOhZcakt",
				mLast: "_3Lu6XJyVbSLDVKDx-wue2g",
				mIndent: "_2D65jEbgD16ae_sJ8BG4AD",
				mDisabled: "LvI7FSBTGgYo2skaf18Zv",
				Subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				isNightModeOn: "KUWYDFs7fIjkQNSOL_BR6",
				Wrapper__LineBreak: "wVinKyEoajEmwhqwINYGd",
				wrapperLineBreak: "wVinKyEoajEmwhqwINYGd",
				Link: "oFObIzV6ZJDQuG09BXh8u",
				link: "oFObIzV6ZJDQuG09BXh8u",
				SubtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				subtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				LinkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				linkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				LinkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				linkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				ArrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				arrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				StyledFlair: "_1F2irboi-xRChkhyndP6ct",
				styledFlair: "_1F2irboi-xRChkhyndP6ct",
				SpoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				spoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				NSFWFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				nsfwFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				DropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				dropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				DropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				dropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				Row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				DropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				dropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				DescriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				descriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				Circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				RangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				rangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				RangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				rangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				Ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				TickText: "_1hEYjTFCxEu2ILobPvatAp",
				tickText: "_1hEYjTFCxEu2ILobPvatAp",
				PreSubText: "_2_hv6QgJ151j9WmCyETVfC",
				preSubText: "_2_hv6QgJ151j9WmCyETVfC",
				MultiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				multiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				ActionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				actionLinkContainer: "e4RehzaESS5nfk-O6pYoK"
			}
		},
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return q
			})), s.d(t, "j", (function() {
				return Q
			})), s.d(t, "n", (function() {
				return Y
			})), s.d(t, "k", (function() {
				return te
			})), s.d(t, "l", (function() {
				return oe
			})), s.d(t, "o", (function() {
				return re
			})), s.d(t, "i", (function() {
				return pe
			})), s.d(t, "b", (function() {
				return he
			})), s.d(t, "f", (function() {
				return be
			})), s.d(t, "a", (function() {
				return ge
			})), s.d(t, "d", (function() {
				return ke
			})), s.d(t, "h", (function() {
				return ye
			})), s.d(t, "c", (function() {
				return Oe
			})), s.d(t, "e", (function() {
				return Se
			})), s.d(t, "g", (function() {
				return we
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-uid/dist/es2015/hooks.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				u = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = s("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/controls/FormFields/index.tsx"),
				f = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/Select/index.m.less"),
				v = s.n(E);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = f.a.span("Wrapper", v.a),
				k = f.a.select("Inner", v.a),
				y = f.a.wrapped(x.b, "Caret", v.a);

			function O({
				className: e,
				innerClassName: t,
				...s
			}) {
				const n = s.disabled ? {
					"data-disabled": s.disabled
				} : {};
				return a.a.createElement(_, {
					className: e
				}, a.a.createElement(k, C({
					className: t
				}, s)), a.a.createElement(y, C({
					isSubreddit: !0
				}, n)))
			}
			var S = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				w = s("./src/reddit/controls/Typography/index.tsx"),
				j = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				I = s("./src/reddit/icons/svgs/Circle/index.tsx"),
				N = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				T = s("./node_modules/lodash/range.js"),
				P = s.n(T),
				M = s("./src/reddit/controls/Button/index.tsx"),
				R = s("./src/reddit/layout/row/Inline/index.tsx"),
				A = s("./src/reddit/models/Flair/index.ts"),
				L = s("./src/reddit/selectors/tooltip.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/components/Settings/shared/Widgets.m.less"),
				U = s.n(D);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(c.a)(h.a),
				H = f.a.wrapped(I.a, "Circle", U.a),
				V = f.a.h3("Label", U.a),
				q = f.a.wrapped(w.c, "Subtext", U.a),
				G = f.a.wrapped(m.a, "HoverTooltip", U.a),
				z = f.a.div("ControlContainer", U.a),
				K = f.a.div("TextContainer", U.a),
				X = f.a.div("ActionContainer", U.a),
				Q = ({
					className: e,
					direction: t,
					isCreateCommunity: s,
					inModal: n,
					isNightModeOn: o,
					disabled: r,
					indent: i,
					last: l,
					...c
				}) => a.a.createElement("div", B({}, c, {
					className: Object(d.a)(U.a.Wrapper, e, {
						[U.a.mColumn]: "column" === t,
						[U.a.mDisabled]: !!r,
						[U.a.mIndent]: !!i,
						[U.a.mLast]: !!l,
						[U.a.isCreateCommunity]: !!s,
						[U.a.inModal]: !!n,
						[U.a.isNightModeOn]: !!o
					})
				})),
				J = f.a.a("Link", U.a),
				Y = f.a.wrapped(J, "SubtextLink", U.a),
				Z = f.a.wrapped(N.a, "LinkIcon", U.a),
				$ = f.a.button("LinkButton", U.a),
				ee = f.a.wrapped(j.a, "ArrowRight", U.a),
				te = e => a.a.createElement(Q, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, a.a.createElement(K, {
					className: e.textContainerClassName
				}, a.a.createElement(V, null, e.label, e.isRequired && a.a.createElement(H, null)), a.a.createElement(q, null, e.subtext)), a.a.createElement(X, null, e.children)),
				se = f.a.div("StyledFlair", U.a),
				ne = f.a.wrapped(se, "SpoilerFlair", U.a),
				ae = f.a.wrapped(se, "NSFWFlair", U.a),
				oe = e => {
					switch (e.flair) {
						case A.f.Nsfw:
							return a.a.createElement(ae, null, "NSFW");
						case A.f.Spoiler:
							return a.a.createElement(ne, null, "SPOILER");
						default:
							return null
					}
				},
				re = e => {
					const t = Object(r.a)();
					return a.a.createElement(Q, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, a.a.createElement(K, null, a.a.createElement(R.a, null, a.a.createElement("label", {
						htmlFor: t
					}, a.a.createElement(V, null, e.label))), a.a.createElement(q, null, e.subtext)), a.a.createElement(X, null, a.a.createElement(z, null, e.tooltip && a.a.createElement(G, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), a.a.createElement(S.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				ie = f.a.input("RangeSliderInput", U.a),
				de = f.a.div("RangeSlider", U.a),
				le = f.a.div("Ticks", U.a),
				ce = f.a.div("TickText", U.a),
				ue = f.a.div("PreSubText", U.a),
				me = Object(i.c)({
					isNightModeOn: F.V
				}),
				pe = Object(o.b)(me)(e => a.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction
				}, a.a.createElement(K, {
					style: {
						flex: 5
					}
				}, !e.inModal && a.a.createElement(R.a, null, a.a.createElement(V, null, e.label)), a.a.createElement(q, null, " ", a.a.createElement(ue, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), a.a.createElement(X, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, a.a.createElement(de, null, a.a.createElement(ie, {
					style: {
						background: "linear-gradient(to right, " + P()(1, e.max + 1).map((t, s) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
					},
					className: "range-slider-input",
					type: "range",
					min: e.min,
					max: e.max,
					step: e.step,
					value: e.value,
					onChange: e.onChange,
					onInput: e.onChange
				}), a.a.createElement(le, null, Object.keys(e.ticks).map((t, s) => a.a.createElement(ce, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				he = e => a.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(K, null, a.a.createElement(R.a, null, a.a.createElement(V, null, e.label)), a.a.createElement(q, null, e.subtext)), a.a.createElement(X, null, a.a.createElement(z, null, a.a.createElement(M.l, {
					onClick: e.onClick
				}, e.actionText)))),
				be = e => a.a.createElement(Q, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(K, null, a.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, a.a.createElement(Z, null)), a.a.createElement(q, null, e.subtext)), a.a.createElement(X, null, a.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, a.a.createElement(ee, null)))),
				ge = e => a.a.createElement(Q, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(K, null, a.a.createElement($, {
					onClick: e.onClick
				}, e.label), a.a.createElement(q, null, e.subtext)), a.a.createElement(X, null, a.a.createElement($, {
					onClick: e.onClick
				}, a.a.createElement(ee, null)))),
				fe = f.a.div("DropdownWrapper", U.a),
				xe = f.a.wrapped(b.b, "DropdownRow", U.a),
				Ee = f.a.span("Row", U.a),
				ve = f.a.wrapped(x.b, "DropdownTriangle", U.a),
				Ce = f.a.div("DescriptionsRow", U.a),
				_e = Object(i.c)({
					isOpen: (e, t) => Object(L.b)(t.id)(e)
				}),
				ke = Object(o.b)(_e, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => a.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(K, null, a.a.createElement(V, null, e.label), a.a.createElement(q, null, e.subtext)), a.a.createElement(X, null, (e => a.a.createElement(fe, {
					onClick: e.openDropdown
				}, a.a.createElement(Ee, {
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), a.a.createElement(ve, null), a.a.createElement(W, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, s) => a.a.createElement(xe, {
					displayText: e.displayItems ? e.displayItems[s] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: s
				}))), e.descriptions && a.a.createElement(Ce, null, e.descriptions[e.items.indexOf(e.selected)])))(e)))),
				ye = ({
					disabled: e,
					last: t,
					onChange: s,
					...o
				}) => {
					const r = Object(n.useCallback)(e => s(e.target.value), [s]),
						{
							items: i
						} = o;
					return a.a.createElement(Q, {
						disabled: e
					}, a.a.createElement(K, null, a.a.createElement(V, null, o.label), a.a.createElement(q, null, o.subtext)), a.a.createElement("div", {
						className: U.a.Wrapper__LineBreak
					}), a.a.createElement(Q, {
						last: t,
						indent: !0,
						disabled: e
					}, a.a.createElement(O, {
						className: "redditStyle",
						disabled: e || o.inputDisabled,
						onChange: r,
						value: o.selected
					}, Object.keys(i).map(e => a.a.createElement("option", {
						key: e,
						value: e
					}, i[e].displayName)))))
				},
				Oe = e => a.a.createElement(Q, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(K, null, a.a.createElement(V, null, e.label), a.a.createElement(q, null, e.subtext)), a.a.createElement(X, null, e.children)),
				Se = e => a.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, a.a.createElement(g.a, {
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && a.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				we = e => a.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, a.a.createElement(p.i, {
					disabled: !1,
					onChange: e.onChange,
					onFocus: e.onFocus,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					rows: e.rows || 4,
					style: {
						marginBottom: e.isCreateCommunity ? "4px" : 0,
						resize: e.isCreateCommunity ? "vertical" : "both"
					},
					value: e.value,
					onBlur: e.onBlur
				}), a.a.createElement("div", {
					className: U.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && a.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), e.warning && e.warning, !!e.actionLink && a.a.createElement("div", {
					className: U.a.ActionLinkContainer
				}, e.actionLink)))
		},
		"./src/reddit/components/Streaming/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_16pMBJPhtfeyyncMfo7aDr",
				topBar: "_1DEjdLJpmb7fufFzhwqQm0",
				contentContainer: "ZV-o_W-prpE7EI4zyZ1hr",
				formBody: "_3xfSWCFu_alfjEX12_hBAB"
			}
		},
		"./src/reddit/components/Streaming/ModSettings/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/streaming/modSettings.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx"),
				m = s("./src/reddit/components/BlockNavigation/index.tsx"),
				p = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				b = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				g = s("./src/reddit/contexts/ApiContext.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/FormFields/index.tsx"),
				E = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/selectors/activeModalId.ts"),
				_ = s("./src/reddit/selectors/platform.ts"),
				k = s("./src/reddit/selectors/streamingModSettings.ts"),
				y = s("./src/reddit/components/Streaming/ModSettings/index.m.less"),
				O = s.n(y);
			const S = "streaming-settings-discard-confirmation",
				w = e => Object(c.e)(e, v.b.Error),
				j = Object(i.c)({
					allowNavigationCallback: _.a,
					modSettings: k.e,
					isAddUserModalOpen: e => "ModerationPage--Streaming--AddUser" === Object(C.a)(e),
					isLivestreamingCurrentlyOn: k.d,
					isDiscardModalOpen: Object(C.b)(S),
					isModSettingsSaving: e => Object(k.a)(e)
				}),
				I = Object(r.b)(j, (e, t) => ({
					closeAllModals: () => e(Object(d.f)()),
					onSave: (t, s) => e(Object(l.f)(t, s)),
					onUserAdd: (t, s, n) => e(Object(l.d)(t, s, n)),
					onUserRemove: (t, s, n) => e(Object(l.e)(t, s, n)),
					showToast: t => e(Object(c.f)({
						...t,
						duration: c.a
					})),
					toggleAddUserModal: () => e(Object(d.i)("ModerationPage--Streaming--AddUser")),
					toggleDiscardChangesModal: () => e(Object(d.i)(S))
				})),
				N = e => parseInt(e, 10),
				T = {
					sunday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					monday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					tuesday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					wednesday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					thursday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					friday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					saturday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}]
				},
				P = {
					sunday: [],
					monday: [],
					tuesday: [],
					wednesday: [],
					thursday: [],
					friday: [],
					saturday: []
				};
			class M extends o.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = {
							...this.state.changedModSettings,
							...e
						};
						let s = !1;
						Object.keys(t).forEach(e => {
							t[e] !== this.props.modSettings[e] && (s = !0)
						}), this.setState({
							changedModSettings: t,
							hasUnsavedChanges: s
						})
					}, this.onSaveClick = async () => {
						this.props.onSave(this.state.changedModSettings, this.props.subredditId), this.setState({
							hasUnsavedChanges: !1
						})
					}, this.onUserAdd = async (e, t) => {
						this.isDuplicateUser(t) ? await this.props.showToast(w(n.fbt._("'{username}' has already been added", [n.fbt._param("username", t)], {
							hk: "25Zkkf"
						}))) : this.props.onUserAdd(this.props.subredditId, t, this.props.modSettings)
					}, this.isDuplicateUser = e => !!this.props.modSettings.whitelistedUsers.find(t => t.name === e), this.onDiscardUnsavedChangesConfirmed = () => {
						this.performPendingNavigationIfNeeded()
					}, this.onCloseModal = () => {
						this.props.closeAllModals(), this.resetPendingNavigation()
					}, this.resetPendingNavigation = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.performPendingNavigationIfNeeded = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onUserRemove = async e => {
						this.props.onUserRemove(this.props.subredditId, e, this.props.modSettings)
					}, this.onUserAddButtonClick = () => {
						this.props.toggleAddUserModal()
					}, this.getUpdatedSchedule = e => e ? P : T, this.renderAddUserModal = () => o.a.createElement(u.a, {
						ignoreDefaultFocus: !0,
						onAddSubmitter: this.onUserAdd,
						sendEventWithName: this.noopEventSend,
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleAddUserModal,
						username: "",
						withOverlay: !0
					}), this.noopEventSend = () => () => {}, this.state = {
						changedModSettings: {},
						livestreamingToggleStateOn: this.props.isLivestreamingCurrentlyOn,
						hasUnsavedChanges: !1
					}
				}
				render() {
					const e = {
							...this.props.modSettings,
							...this.state.changedModSettings
						},
						{
							maxLiveStreams: t,
							minKarma: s,
							minAccountAgeDays: a,
							durationLimitSeconds: r,
							broadcasterPrompt: i,
							isDiscoveryUnitShown: d,
							inSubMinKarma: l
						} = e;
					return o.a.createElement("div", {
						className: O.a.container
					}, o.a.createElement(h.c, {
						className: O.a.topBar
					}, o.a.createElement(f.i, {
						onClick: this.onSaveClick,
						disabled: this.props.isModSettingsSaving
					}, this.props.isModSettingsSaving ? o.a.createElement(E.a, {
						className: O.a.loadingIcon,
						sizePx: 14,
						center: !0
					}) : n.fbt._("Save changes", null, {
						hk: "1IXBxj"
					}))), o.a.createElement(h.a, {
						className: O.a.contentContainer
					}, o.a.createElement(h.b, null, n.fbt._("Broadcasting", null, {
						hk: "3WAsEz"
					})), o.a.createElement("div", {
						className: O.a.formBody
					}, o.a.createElement(b.o, {
						on: this.state.livestreamingToggleStateOn,
						label: n.fbt._("Allow RPAN Broadcasts", null, {
							hk: "2Jt8fz"
						}),
						subtext: n.fbt._("Allow live broadcasts to the Reddit Public Access Network (RPAN) in this community.", null, {
							hk: "2wjtPG"
						}),
						onClick: () => {
							const e = !this.state.livestreamingToggleStateOn;
							this.onChange({
								weeklySchedule: this.getUpdatedSchedule(this.state.livestreamingToggleStateOn)
							}), this.setState({
								livestreamingToggleStateOn: e,
								hasUnsavedChanges: e !== this.props.isLivestreamingCurrentlyOn
							})
						}
					}), o.a.createElement(b.o, {
						on: d,
						label: n.fbt._("Display RPAN Discovery Unit", null, {
							hk: "3mInib"
						}),
						subtext: n.fbt._("Allow discovery unit for Reddit Public Access Network (RPAN) to be displayed in this community.", null, {
							hk: "3MsZuO"
						}),
						onClick: () => {
							this.onChange({
								isDiscoveryUnitShown: !d
							})
						}
					}), o.a.createElement(b.k, {
						label: n.fbt._("Maximum live broadcasts", null, {
							hk: "bjAcp"
						}),
						direction: "row",
						subtext: n.fbt._("Set the number of broadcasts that can be live at the same time.", null, {
							hk: "fmNzG"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							maxLiveStreams: N(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						max: 1e3,
						value: t
					})), o.a.createElement(b.k, {
						label: n.fbt._("Required karma", null, {
							hk: "1UzH6K"
						}),
						direction: "row",
						subtext: n.fbt._("Set the amount of global Reddit comment karma someone needs to broadcast live.", null, {
							hk: "1Xa56V"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							minKarma: N(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						value: s
					})), o.a.createElement(b.k, {
						label: n.fbt._("Required community karma", null, {
							hk: "nSuPZ"
						}),
						direction: "row",
						subtext: n.fbt._("Set the amount of community comment karma someone needs to broadcast live.", null, {
							hk: "24qW8L"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							inSubMinKarma: N(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						value: l
					})), o.a.createElement(b.k, {
						label: n.fbt._("Required Account Age", null, {
							hk: "3OXG2v"
						}),
						direction: "row",
						subtext: n.fbt._("Set how old (in days) someone’s Reddit account needs to be to broadcast live.", null, {
							hk: "24iax6"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							minAccountAgeDays: N(e.currentTarget.value)
						}),
						min: 0,
						type: "number",
						value: a
					})), o.a.createElement(b.k, {
						label: n.fbt._("Time Limit", null, {
							hk: "2x8YNI"
						}),
						direction: "row",
						subtext: n.fbt._("Broadcasts will end after hitting this limit (in minutes), unless viewers award them more time.", null, {
							hk: "4wwLJ4"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							durationLimitSeconds: 60 * N(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						max: 1440,
						value: Math.round(r || 0) / 60,
						disabled: !0
					})), o.a.createElement(b.g, {
						label: n.fbt._("RPAN Description", null, {
							hk: "1WiS6G"
						}),
						direction: "row",
						subtext: n.fbt._("Write a quick description of your community to help broadcasters know what you're about", null, {
							hk: "1fcoqh"
						}),
						onChange: e => this.onChange({
							broadcasterPrompt: e.currentTarget.value
						}),
						maxChars: 250,
						rows: 2,
						value: i || ""
					}))), this.props.isAddUserModalOpen && this.renderAddUserModal(), o.a.createElement(m.a, {
						blockOnBeforeUnload: !0,
						dialogId: S,
						enabled: this.state.hasUnsavedChanges
					}), this.props.isDiscardModalOpen && o.a.createElement(p.a, {
						actionText: n.fbt._("Discard", null, {
							hk: "1SiwLl"
						}),
						headerText: n.fbt._("Discard changes before leaving?", null, {
							hk: "354NTe"
						}),
						modalText: n.fbt._("You have made some changes to broadcasting settings, do you wish to discard the changes?", null, {
							hk: "20tlQp"
						}),
						onConfirm: this.onDiscardUnsavedChangesConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}))
				}
			}
			t.a = Object(g.b)(I(M))
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less": function(e, t, s) {
			e.exports = {
				StyledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				styledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				BreadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				breadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				BreadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe",
				breadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe"
			}
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/helpers/trackers/blade.ts"),
				d = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				l = s("./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less"),
				c = s.n(l);
			const u = o.a.wrapped(d.a, "StyledChevron", c.a),
				m = o.a.div("BreadcrumbElement", c.a),
				p = o.a.div("BreadcrumbContainer", c.a);
			t.b = Object(r.c)(e => a.a.createElement(p, null, e.breadcrumbs.map(t => a.a.createElement(m, {
				key: t.title,
				onClick: () => {
					e.sendEvent(Object(i.a)()), e.onNavigate(t)
				}
			}, a.a.createElement(u, null), t.title))))
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, s) {
			e.exports = {
				ImageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				imageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				ImageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				imageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				ImageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				imageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				FileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				fileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				ContainerUploading: "rOyNUbZnjJvWxtyInd1T8",
				containerUploading: "rOyNUbZnjJvWxtyInd1T8",
				Label: "_2ZFG2IQMaso9iA14qjicA_",
				label: "_2ZFG2IQMaso9iA14qjicA_",
				isOver: "_1B5UKMPaEBX3HOKKEBfp7o",
				ImageInput: "_362HLUlCiz7UbtVPniNjjW",
				imageInput: "_362HLUlCiz7UbtVPniNjjW"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/FileDrop/index.tsx"),
				d = s("./src/reddit/controls/ImageInput/index.tsx"),
				l = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = s("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				u = s("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				m = s.n(u);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = r.a.wrapped(c.a, "ImageUploadIcon", m.a), b = r.a.div("ImageIconRow", m.a), g = r.a.div("ImageUploadText", m.a), f = r.a.wrapped(i.a, "FileDrop", m.a), x = r.a.div("ContainerUploading", m.a), E = e => a.a.createElement(x, {
				className: e.className
			}, a.a.createElement(b, null, a.a.createElement(l.a, {
				sizePx: 40,
				center: !0
			})), a.a.createElement(g, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), v = r.a.label("Label", m.a);
			t.b = e => a.a.createElement(f, {
				className: e.className,
				onDrop: e.onChange,
				render: t => a.a.createElement(v, {
					className: Object(o.a)({
						[m.a.isOver]: t
					}, e.labelClassName)
				}, a.a.createElement(b, null, e.icon || a.a.createElement(h, null)), a.a.createElement(g, null, e.label), a.a.createElement(d.a, {
					className: m.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return r
			})), s.d(t, "p", (function() {
				return i
			})), s.d(t, "n", (function() {
				return d
			})), s.d(t, "o", (function() {
				return l
			})), s.d(t, "m", (function() {
				return c
			})), s.d(t, "l", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "j", (function() {
				return C
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = s.n(a);
			const r = n.a.section("FormPage", o.a),
				i = n.a.h1("HomePageTitle", o.a),
				d = n.a.button("HomePageBreadcrumb", o.a),
				l = n.a.div("HomePageGroup", o.a),
				c = n.a.h1("FormPageTitle", o.a),
				u = n.a.div("FormPageSection", o.a),
				m = n.a.div("FormGroup", o.a),
				p = n.a.h2("FormGroupTitle", o.a),
				h = n.a.div("FormElement", o.a),
				b = n.a.div("FormGroupDescription", o.a),
				g = n.a.div("FormItem", o.a),
				f = n.a.h3("FormElementTitle", o.a),
				x = n.a.div("FormElementDescription", o.a),
				E = n.a.div("FormElementError", o.a),
				v = n.a.div("FormElementSubGroup", o.a),
				C = n.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, s) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "g", (function() {
				return E
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Input/ModalInput.tsx"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				r = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				d = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = s.n(l);
			const u = n.a.wrapped(a.a, "ModalInput", c.a),
				m = n.a.input("Input", c.a),
				p = n.a.wrapped(d.a, "RadioOn", c.a),
				h = n.a.wrapped(i.a, "RadioOff", c.a),
				b = n.a.wrapped(o.a, "Checkbox", c.a),
				g = n.a.wrapped(r.a, "CheckboxSelected", c.a),
				f = n.a.textarea("Textarea", c.a),
				x = n.a.label("StyledLabel", c.a),
				E = n.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less": function(e, t, s) {
			e.exports = {
				FormNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				formNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				disabled: "_2omjYUqCweNidaShU2H5EC",
				DragCard: "ygS6b189jD1GHwzotinJB",
				dragCard: "ygS6b189jD1GHwzotinJB",
				isOverAndCanDrop: "_3_GRCa3UIhqQ68fvB00PLZ",
				isDragging: "_2yg01oNjKP8Gcb4HPjf58k"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
				i = s.n(r);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
					disabled: e,
					...t
				}) => a.a.createElement("div", d({}, t, {
					className: Object(o.a)(i.a.FormNavElement, {
						[i.a.disabled]: e
					})
				}), t.children),
				c = ({
					canDrop: e,
					className: t,
					isDragging: s,
					isOver: n,
					disabled: r,
					...l
				}) => a.a.createElement("div", d({}, l, {
					className: Object(o.a)(i.a.DragCard, {
						[i.a.disabled]: r,
						[i.a.isDraffing]: s,
						[i.a.isOverAndCanDrop]: n && e
					}, t)
				}))
		},
		"./src/reddit/components/SubredditContent/EventPostContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/eventPosts/index.ts"),
				c = s("./src/reddit/components/ClassicPost/index.tsx"),
				u = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				m = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/components/SubredditContent/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/overlay/index.ts"),
				E = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				v = s("./src/reddit/icons/svgs/Calendar/index.tsx"),
				C = s("./src/reddit/routes/postCreation/index.ts"),
				_ = s("./src/reddit/selectors/eventPosts.ts"),
				k = s("./src/reddit/components/SubredditContent/index.m.less"),
				y = s.n(k);
			const O = Object(d.c)({
					eventPosts: _.f,
					isPending: _.d,
					hasData: _.b,
					endCursor: _.a
				}),
				S = Object(r.b)(O, (e, {
					subredditName: t
				}) => ({
					onClickPost: t => {
						e(Object(x.a)(t.permalink))
					},
					fetchMorePosts: () => {
						e(Object(l.eventPostsRequested)(t))
					}
				}));
			class w extends o.a.PureComponent {
				renderEmptyState() {
					const {
						subredditName: e
					} = this.props;
					return o.a.createElement(u.c, {
						className: y.a.emptyStateContainer,
						text: n.fbt._("No upcoming or live events in r/{subredditName}", [n.fbt._param("subredditName", e)], {
							hk: "3wRma7"
						}),
						childrenPosition: "bottom"
					}, o.a.createElement(v.a, {
						className: y.a.icon
					}), o.a.createElement(i.a, {
						className: y.a.schedulePostLink,
						to: Object(C.c)(e)
					}, n.fbt._("Create Event Post", null, {
						hk: "PXBmQ"
					})))
				}
				renderBody() {
					const {
						endCursor: e,
						eventPosts: t,
						fetchMorePosts: s,
						hasData: n,
						onClickPost: a
					} = this.props;
					return o.a.createElement("div", {
						className: y.a.contentContainer
					}, o.a.createElement("div", {
						className: y.a.standaloneContainer
					}, n ? o.a.createElement(p.b, {
						className: y.a.scroller,
						onLoadMore: s,
						loadMoreToken: e || void 0
					}, t.map((e, t) => ({
						id: e.id,
						estHeight: Object(E.c)(e, g.g.Classic),
						render: s => o.a.createElement(c.default, {
							key: `event-post-id-${e.id}`,
							postId: e.id,
							className: y.a.eventPostContainer,
							first: 0 === t,
							isOverlay: !1,
							onClickPost: () => a(e)
						})
					}))) : this.renderEmptyState()))
				}
				render() {
					const {
						isPending: e,
						hasData: t
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(m.c, null, o.a.createElement(i.a, {
						to: Object(C.c)(this.props.subredditName)
					}, o.a.createElement(f.i, null, n.fbt._("Schedule an event post", null, {
						hk: "nk1bA"
					})))), o.a.createElement(m.a, null, o.a.createElement(m.b, {
						className: y.a.pageTitle
					}, n.fbt._("Upcoming and live events", null, {
						hk: "MAeQO"
					}), o.a.createElement("span", {
						className: y.a.betaIndicator
					}, n.fbt._("Beta", null, {
						hk: "z4XPh"
					}))), !t && e ? Object(h.a)() : this.renderBody(), t && e && Object(h.a)(1)))
				}
			}
			t.a = S(Object(b.c)(w))
		},
		"./src/reddit/components/SubredditContent/PredictionsContent/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-SubredditContent-PredictionsContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-SubredditContent-PredictionsContent").then(s.bind(null, "./src/reddit/components/SubredditContent/PredictionsContent/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/SubredditContent/PredictionsContent/index.tsx"
				}
			})
		},
		"./src/reddit/components/SubredditContent/ScheduledPostContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/actions/scheduledPosts/index.ts"),
				l = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				c = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				h = s("./src/lib/CSSVariableProvider/index.tsx"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/components/Paginator/index.m.less"),
				f = s.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = e => {
				const {
					isNextButton: t,
					isActive: s,
					...n
				} = e;
				return o.a.createElement(b.g, x({
					disabled: !s
				}, n))
			};
			class C extends o.a.Component {
				constructor(e) {
					super(e), this.onHandlePrev = () => this.onHandlePageChange(!1), this.onHandleNext = () => this.onHandlePageChange(!0), this.state = {
						currentCursor: void 0
					}
				}
				getCurrentCursorIdx() {
					const {
						items: e
					} = this.props, {
						currentCursor: t
					} = this.state;
					return t ? e.findIndex(e => e.id === t) : -1
				}
				getRenderableItems() {
					const {
						items: e,
						itemsPerPage: t
					} = this.props, s = this.getCurrentCursorIdx() + 1;
					return e.slice(s, s + t)
				}
				hasPrevPage() {
					return !(this.getCurrentCursorIdx() <= 0)
				}
				hasNextPage() {
					const {
						items: e,
						itemsPerPage: t
					} = this.props;
					return !(this.getCurrentCursorIdx() + t > e.length - 2)
				}
				onHandlePageChange(e) {
					const {
						items: t,
						itemsPerPage: s
					} = this.props, n = this.getCurrentCursorIdx();
					if (e && !this.hasNextPage()) return;
					if (!e && !this.hasPrevPage()) return;
					const a = e ? Math.max(-1, Math.min(n + s, t.length - 2)) : Math.max(-1, n - s);
					this.setState({
						currentCursor: t[a] ? t[a].id : void 0
					})
				}
				renderControlRow() {
					const {
						usePortalForControlRow: e,
						controlRowPortal: t,
						pagerButton: s = v
					} = this.props, n = this.hasPrevPage(), a = this.hasNextPage();
					if (!n && !a) return null;
					const r = o.a.createElement("div", {
						className: f.a.controlRow
					}, o.a.createElement("span", {
						className: f.a.prevButtonContainer
					}, o.a.createElement(s, {
						className: f.a.prevButton,
						onClick: this.onHandlePrev,
						isNextButton: !1,
						isActive: n
					}, E._("Previous", null, {
						hk: "4hX0ue"
					}))), o.a.createElement("span", {
						className: f.a.nextButtonContainer
					}, o.a.createElement(s, {
						className: f.a.nextButton,
						onClick: this.onHandleNext,
						isNextButton: !0,
						isActive: a
					}, E._("Next", null, {
						hk: "2GFsYc"
					}))));
					return e && !t ? null : t ? Object(h.d)(r, t) : r
				}
				render() {
					const {
						className: e,
						lastItemClassName: t,
						itemComponent: s
					} = this.props, n = this.getRenderableItems();
					return o.a.createElement("div", {
						className: e
					}, n.map((e, a) => o.a.createElement(s, {
						className: t && a === n.length - 1 ? t : void 0,
						key: e.id,
						item: e
					})), this.renderControlRow())
				}
			}
			var _ = C,
				k = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				y = s("./src/reddit/components/RecurringPostList/ChangePageButton/index.m.less"),
				O = s.n(y);
			var S = e => o.a.createElement("button", {
					className: Object(m.a)(O.a.button, e.className, {
						[O.a.prevButton]: !e.isNextButton,
						[O.a.disabled]: !e.isActive
					}),
					onClick: e.onClick,
					disabled: !e.isActive
				}, o.a.createElement(k.a, {
					className: O.a.arrowIcon
				})),
				w = s("./src/reddit/components/RecurringPostList/EditModal/async.tsx"),
				j = s("./src/reddit/components/RecurringPostList/RecurringPost/index.tsx"),
				I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				N = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				T = s("./src/reddit/icons/svgs/Replay/index.tsx"),
				P = s("./src/reddit/routes/postCreation/index.ts"),
				M = s("./src/reddit/selectors/activeModalId.ts"),
				R = s("./src/reddit/selectors/scheduledPosts/index.ts"),
				A = s("./src/reddit/components/RecurringPostList/index.m.less"),
				L = s.n(A);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = 5, U = Object(u.c)({
				recurringPosts: (e, {
					subreddit: t
				}) => Object(R.l)(e, {
					subredditId: t.id
				}),
				editModalIsOpen: e => Object(M.a)(e) === j.a,
				editingRecurringPostId: R.d,
				editingRecurringPostSubredditId: R.e
			});
			class B extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.pageButtonPortalRef = o.a.createRef(), this.onEditModalSuccessfulSave = () => {
						this.props.editModalIsOpen && this.props.toggleModal()
					}, this.onClickLink = () => {
						this.props.sendEvent(Object(N.j)())
					}
				}
				renderEmptyState() {
					return o.a.createElement(l.c, {
						className: L.a.emptyContainer,
						text: F._("No recurring posts", null, {
							hk: "2G7szl"
						}),
						childrenPosition: "bottom"
					}, o.a.createElement(T.a, {
						className: L.a.icon
					}), o.a.createElement(i.a, {
						className: L.a.schedulePostLink,
						onClick: this.onClickLink,
						to: Object(P.c)(this.props.subreddit.name)
					}, F._("Schedule recurring post", null, {
						hk: "1TrUPC"
					})))
				}
				render() {
					const {
						className: e,
						recurringPosts: t,
						editModalIsOpen: s,
						subreddit: n,
						editingRecurringPostSubredditId: a,
						editingRecurringPostId: r
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(m.a)(e, L.a.postList)
					}, o.a.createElement("div", {
						className: L.a.titleContainer
					}, F._("Recurring posts", null, {
						hk: "30aHKv"
					}), o.a.createElement("div", {
						ref: this.pageButtonPortalRef,
						className: L.a.pageButtonPortal
					})), t.length ? o.a.createElement(_, {
						className: L.a.recurringPostsContainer,
						lastItemClassName: L.a.lastRecurringPostItem,
						itemsPerPage: D,
						items: t,
						itemComponent: j.b,
						pagerButton: S,
						usePortalForControlRow: !0,
						controlRowPortal: this.pageButtonPortalRef.current
					}) : this.renderEmptyState()), s && !!r && !!a && n.id === a && o.a.createElement(w.a, {
						scheduledPostId: r,
						subredditId: a,
						onSuccessfulSave: this.onEditModalSuccessfulSave,
						withOverlay: !0
					}))
				}
			}
			var W = Object(r.b)(U, (e, t) => ({
					toggleModal: () => e(Object(p.i)(j.a))
				}))(Object(I.c)(B)),
				H = s("./src/reddit/components/ScheduledPost/index.tsx"),
				V = s("./src/reddit/components/Scroller/Simple.tsx"),
				q = s("./src/reddit/components/SubredditContent/index.tsx"),
				G = s("./src/reddit/components/SubredditContent/index.m.less"),
				z = s.n(G),
				K = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				X = s("./src/reddit/models/ScheduledPost/index.ts");
			const Q = Object(u.c)({
					isLoading: R.i,
					hasData: (e, {
						subreddit: t
					}) => Object(R.h)(e, {
						subredditId: t.id
					}),
					standalonePosts: (e, {
						subreddit: t
					}) => Object(R.q)(e, {
						subredditId: t.id
					}),
					loadMoreToken: (e, {
						subreddit: t
					}) => Object(R.c)(e, {
						subredditId: t.id,
						type: X.f.standalonePosts
					})
				}),
				J = Object(r.b)(Q, (e, {
					subreddit: t
				}) => ({
					onLoadMoreStandaloneScheduledPosts: () => e(Object(d.a)(t.id))
				}));
			class Y extends o.a.PureComponent {
				render() {
					const {
						hasData: e,
						standalonePosts: t,
						onLoadMore: s,
						loadMoreToken: n,
						renderEmptyState: a,
						subreddit: r
					} = this.props;
					return o.a.createElement("div", {
						className: z.a.contentContainer
					}, o.a.createElement("div", {
						className: z.a.standaloneContainer
					}, e && t.length ? o.a.createElement(V.b, {
						className: z.a.scroller,
						onLoadMore: s,
						loadMoreToken: n || void 0
					}, t.map(e => ({
						id: e.id,
						estHeight: 112,
						render: t => o.a.createElement(H.a, {
							key: `scheduled-post-id-${e.id}`,
							scheduledPostId: e.id,
							subredditId: e.subreddit.id
						})
					}))) : a()), o.a.createElement(W, {
						className: z.a.sidebar,
						subreddit: r
					}))
				}
			}
			class Z extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.renderStandaloneEmptyState = () => {
						const {
							subreddit: e
						} = this.props;
						return o.a.createElement(l.c, {
							className: z.a.emptyStateContainer,
							text: n.fbt._("No scheduled posts in r/{subredditName}", [n.fbt._param("subredditName", e.name)], {
								hk: "mUwQ4"
							}),
							childrenPosition: "bottom"
						}, o.a.createElement(K.a, {
							className: z.a.icon
						}), o.a.createElement(i.a, {
							className: z.a.schedulePostLink,
							to: Object(P.c)(e.name)
						}, n.fbt._("Schedule post", null, {
							hk: "xI07X"
						})))
					}
				}
				renderBody() {
					const {
						hasData: e,
						loadMoreToken: t,
						onLoadMoreStandaloneScheduledPosts: s,
						standalonePosts: n,
						subreddit: a
					} = this.props;
					return o.a.createElement(Y, {
						renderEmptyState: this.renderStandaloneEmptyState,
						hasData: e,
						standalonePosts: n,
						onLoadMore: s,
						subreddit: a,
						loadMoreToken: t
					})
				}
				render() {
					const {
						isLoading: e,
						hasData: t,
						subreddit: s
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(c.c, null, o.a.createElement(i.a, {
						to: Object(P.c)(s.name)
					}, o.a.createElement(b.i, null, n.fbt._("Schedule Post", null, {
						hk: "2Ygkzg"
					})))), o.a.createElement(c.a, null, o.a.createElement(c.b, {
						className: z.a.pageTitle
					}, n.fbt._("Scheduled posts", null, {
						hk: "28Qjmj"
					})), !t && e ? Object(q.a)() : this.renderBody(), t && e && Object(q.a)(1)))
				}
			}
			t.a = J(Z)
		},
		"./src/reddit/components/SubredditContent/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1N366WahaKnCqUlSezl6CQ",
				titleFontH2: "_2ySCAslCokkxUasLc4m7l0",
				titleFontH3: "_3Na_u-vwpkuPZfuuvUROk-",
				titleFontH4: "_30jImFPUovcaQMWasU-Ohq",
				titleFontH5: "_1fkIEAH9a9eCt2B8XAaUbq",
				titleFontH6: "bHSjFLbSCNEywMorkTrqn",
				metadataFont: "_2Qe8DvvY_RxPEkj-mRpX65",
				flairFont: "_1TXuHKPD3YeZiCgMqyoBBe",
				labelsFont: "_1MiMOmZyBl0g5x8oLzodW8",
				actionFont: "_3USAKL0kbrc0ZhCvZS-J4j",
				smallButtonFont: "_2JaNUow_hy9X8yw0QFNOSg",
				largeButtonFont: "_2QdyaDMXRLLL3gChJ0NOE9",
				strongTextFont: "_3qauH8UCZvDtHIr65uebN5",
				tabFont: "_1bq9fxhlMVaxA2GQdVomf4",
				buttonFontXS: "_7W4YggPAccJm6b7j_5tM_",
				buttonFontXs: "_7W4YggPAccJm6b7j_5tM_",
				buttonFontS: "_2ZBn3QtRUE4GU3UTdoCOzY",
				buttonFontM: "_1FF_0_g8KF3VAe3NMA-Lu6",
				buttonFontL: "_12R7hgqLzyY_mHo7tL6VIy",
				buttonFontXL: "_1c2eC_5e586qF7hV3NBVj_",
				buttonFontXl: "_1c2eC_5e586qF7hV3NBVj_",
				bodyFontH1: "_2qU2oh77HnIxSqTey1ZezW",
				bodyFontH2: "_2XZkZ1zrfSvpi64O-KP4IB",
				bodyFontH3: "_1icF_z4wcZT687-ao6Mzr7",
				bodyFontH4: "ZRi07Zo9aba1n7XQY_Xio",
				bodyFontH5: "_1dhvcwu2KcypL8_En9Aa7I",
				bodyFontH6: "_1FGIk1pK7xZjRbWXhruioE",
				bodyFont: "_3xTpswgMylBeM6Y-XFNTUD",
				bodyFontSmall: "_3U8U5anYwaLfjJvSrrhIKo",
				bodyFontMono: "_1VL2XaMyhrq5PiMxCa8tkv",
				icon: "_1wICBaO2ARQK5N8CBXP8kI",
				schedulePostLink: "_3hO2emEyTZ-txWczRsI6lb",
				betaIndicator: "q9zqS5nIMgIr22a55zflg",
				pageTitle: "_2HS4U5X7Rt3fT__Kpgmp9M",
				contentContainer: "_2i38uCMOvjLO0N4T-QGmV1",
				scroller: "_2toQcR3aw1_hj1A49e4wi7",
				sidebar: "_3Pz5gIKK5q2FYttguHTNa3",
				emptyStateContainer: "_3uHuaRL_-Tec711luXRhl8",
				standaloneContainer: "Q7W5RJknO1UJ-qscCW0k6",
				eventPostContainer: "_1WvFOm4w7Qt8CpM_XKK9y8"
			}
		},
		"./src/reddit/components/SubredditContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/ClassicPost/Placeholder.tsx");

			function r(e = 3) {
				const t = [];
				for (let s = 0; s < e; s++) t.push(a.a.createElement(o.b, {
					isLoading: !0
				}));
				return a.a.createElement(a.a.Fragment, null, t)
			}
		},
		"./src/reddit/components/SubredditModerationSearch/index.m.less": function(e, t, s) {
			e.exports = {
				SearchIcon: "_2LL7WLn2-4Pv8zCUsmDPv9",
				searchIcon: "_2LL7WLn2-4Pv8zCUsmDPv9",
				NoResultsContainer: "_38zxhEjlOjKTVFYaSwtDTL",
				noResultsContainer: "_38zxhEjlOjKTVFYaSwtDTL",
				Container: "_3RNapyf_4ZQOEfoJhVRMEO",
				container: "_3RNapyf_4ZQOEfoJhVRMEO",
				SearchStatusBar: "_3yWFGY3HrViWVFFUCsTUjv",
				searchStatusBar: "_3yWFGY3HrViWVFFUCsTUjv",
				SearchStatus: "uTK2QKUebu8hg0gYZWTI7",
				searchStatus: "uTK2QKUebu8hg0gYZWTI7",
				Bold: "_2u65S50DJfsU-z8bR0G2DQ",
				bold: "_2u65S50DJfsU-z8bR0G2DQ"
			}
		},
		"./src/reddit/components/SubredditModerationSearch/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				c = s("./src/reddit/layout/row/Inline/index.tsx"),
				u = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				m = s("./src/reddit/icons/svgs/Search/index.tsx"),
				p = s("./src/reddit/components/SubredditModerationSearch/index.m.less"),
				h = s.n(p);
			const b = r.a.wrapped(m.a, "SearchIcon", h.a),
				g = r.a.wrapped(i.a, "NoResultsContainer", h.a),
				f = r.a.div("Container", h.a),
				x = r.a.wrapped(c.a, "SearchStatusBar", h.a),
				E = r.a.div("SearchStatus", h.a),
				v = r.a.span("Bold", h.a);

			function C(e) {
				if (e.searchPending) return null;
				const t = Object(l.a)(e.searchTerm);
				return e.noResultsFound ? o.a.createElement(g, null, o.a.createElement(b, null), o.a.createElement(i.b, null, n.fbt._("No results for {searchTerm}", [n.fbt._param("searchTerm", `u/${t}`)], {
					hk: "1nDAlG"
				})), o.a.createElement(d.o, {
					onClick: e.cancelSearch
				}, n.fbt._("See all", null, {
					hk: "3aLS8s"
				}))) : o.a.createElement(f, null, o.a.createElement(x, null, o.a.createElement(E, null, n.fbt._("1 search result for {=[searchTerm]}", [n.fbt._param("=[searchTerm]", o.a.createElement(v, {
					"data-redditstyle": !0
				}, n.fbt._("{searchTerm}", [n.fbt._param("searchTerm", `'${t}':`)], {
					hk: "1B9ZWG"
				})))], {
					hk: "iAcV5"
				})), o.a.createElement(u.a, null, o.a.createElement(d.o, {
					onClick: e.cancelSearch
				}, n.fbt._("See all", null, {
					hk: "3aLS8s"
				})))), e.children)
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.m.less": function(e, t, s) {
			e.exports = {
				topBarRow: "_3H6HwkSZ2zUC1pwaIMv-EY",
				searchIcon: "_1lo1uHsqx3-EkgYDL4xKEB",
				searchInput: "_1ox94KT4YX0mmZgLO51PG_",
				searchButton: "_3-3xbjG4pcuzlB7SzgBvzg"
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				d = s("./src/reddit/icons/svgs/Search/index.tsx"),
				l = s("./src/reddit/components/SubredditModerationTopBar/index.m.less"),
				c = s.n(l);
			const u = r.a.div("topBarRow", c.a);
			class m extends o.a.Component {
				constructor(e) {
					super(e), this.onSearchChange = e => {
						Object(i.a)(e.currentTarget.value).length < 21 && this.setState({
							searchInputText: e.currentTarget.value
						})
					}, this.onKeyPress = e => {
						"Enter" === e.key && this.onSearch()
					}, this.onSearch = () => {
						this.props.onSearch(this.state.searchInputText)
					}, this.state = {
						searchInputText: ""
					}
				}
				componentWillReceiveProps(e) {
					this.props.activeSearchQuery && null === e.activeSearchQuery && this.setState({
						searchInputText: ""
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement("div", {
						className: c.a.topBarRow
					}, o.a.createElement("input", {
						className: c.a.searchInput,
						onChange: this.onSearchChange,
						onKeyPress: this.onKeyPress,
						placeholder: n.fbt._("Search for a user", null, {
							hk: "1yTo6e"
						}),
						type: "text",
						value: t.searchInputText
					}), o.a.createElement("button", {
						className: c.a.searchButton,
						onClick: this.onSearch
					}, o.a.createElement(d.a, {
						className: c.a.searchIcon
					})), e.children)
				}
			}
		},
		"./src/reddit/components/SubredditModerationUserItem/index.m.less": function(e, t, s) {
			e.exports = {
				Row: "_2O5kmPXewMHlCcrRWrjEB_",
				row: "_2O5kmPXewMHlCcrRWrjEB_",
				Username: "_1sIhmckJjyRyuR_z7M5kbI",
				username: "_1sIhmckJjyRyuR_z7M5kbI",
				RightAlign: "_3f00u5KR-M4rdaonscLX8k",
				rightAlign: "_3f00u5KR-M4rdaonscLX8k",
				Description: "_3YjnH6nyw9xU3dQ5hTVmEg",
				description: "_3YjnH6nyw9xU3dQ5hTVmEg",
				AdditionalText: "_2FHMhpmaJ7uKirIBSL-nfq",
				additionalText: "_2FHMhpmaJ7uKirIBSL-nfq",
				ChevronDown: "_13LaWwDlCX3ERr0EUCo3Lx",
				chevronDown: "_13LaWwDlCX3ERr0EUCo3Lx",
				ChevronUp: "_2wUaFuEtiqP0eWtfI9dDoI",
				chevronUp: "_2wUaFuEtiqP0eWtfI9dDoI",
				ExpandoContainer: "_2AQcG05ynImXmYdd8D8PMU",
				expandoContainer: "_2AQcG05ynImXmYdd8D8PMU",
				Bullet: "_1VQtDRh-JtZQghS8jetaHR",
				bullet: "_1VQtDRh-JtZQghS8jetaHR",
				PlaceholderItem: "_3KdpSC_L0JbYqsU7OmeaGX",
				placeholderItem: "_3KdpSC_L0JbYqsU7OmeaGX",
				EmptyUserIcon: "iNRbW9Tpfe2qsnXftvupu",
				emptyUserIcon: "iNRbW9Tpfe2qsnXftvupu",
				EmptyDetails: "_16EL0HBUzdiC9vh2S9H5Ee",
				emptyDetails: "_16EL0HBUzdiC9vh2S9H5Ee",
				UsersLoadingContainer: "_1s6c6XYRhTyY6FWEkJHQg",
				usersLoadingContainer: "_1s6c6XYRhTyY6FWEkJHQg"
			}
		},
		"./src/reddit/components/SubredditModerationUserItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return R
			}));
			var n = s("./node_modules/lodash/times.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/helpers/trackers/moderationPages.ts"),
				c = s("./src/reddit/components/UserNameAndIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				p = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				h = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = s("./src/reddit/components/SubredditModerationUserItem/index.m.less"),
				f = s.n(g);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = (e, t) => {
				const s = `UserInfoTooltip--${e}`;
				return t ? `${s}--${t}` : s
			}, v = i.a.wrapped(h.a, "Row", f.a), C = i.a.div("Username", f.a), _ = i.a.wrapped(b.a, "RightAlign", f.a), k = i.a.div("Description", f.a), y = i.a.div("AdditionalText", f.a), O = i.a.wrapped(m.a, "ChevronDown", f.a), S = i.a.wrapped(p.a, "ChevronUp", f.a), w = i.a.div("ExpandoContainer", f.a), j = i.a.span("Bullet", f.a), I = i.a.div("PlaceholderItem", f.a), N = i.a.wrapped(I, "EmptyUserIcon", f.a), T = i.a.wrapped(I, "EmptyDetails", f.a), P = i.a.div("UsersLoadingContainer", f.a), M = () => r.a.createElement(v, null, r.a.createElement(N, null), r.a.createElement(T, null), r.a.createElement(T, null)), R = e => r.a.createElement(P, {
				className: e.className
			}, a()(e.rows || 10, e => r.a.createElement(M, {
				key: e
			})));
			class A extends r.a.Component {
				constructor(e) {
					super(e), this.onToggleExpandedComponent = () => {
						this.props.pageName && !this.state.isExpanded && this.props.sendEvent(l.a("more_detail", this.props.pageName)), this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.sendHoverCardEvent = () => {
						this.props.pageName && this.props.sendEvent(l.c(this.props.pageName))
					}, this.state = {
						isExpanded: !1
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(v, null, r.a.createElement(C, null, r.a.createElement(c.a, {
						username: e.username,
						userIcon: e.userIcon,
						tooltipId: E(e.username, e.moderatorType),
						subredditId: e.subredditId,
						sendHoverCardEvent: this.sendHoverCardEvent
					})), r.a.createElement(k, null, e.timeAgo, e.description && r.a.createElement(r.a.Fragment, null, r.a.createElement(j, null, "•"), e.description)), r.a.createElement(_, null, e.additionalText && r.a.createElement(y, null, e.additionalText), e.primaryButton, e.secondaryButton, e.tertiaryButton, e.expandedComponent && r.a.createElement(u.o, {
						onClick: this.onToggleExpandedComponent
					}, x._("More Details", null, {
						hk: "KnMc6"
					}), t.isExpanded ? r.a.createElement(S, null) : r.a.createElement(O, null)))), t.isExpanded && r.a.createElement(w, null, e.expandedComponent))
				}
			}
			t.b = Object(d.c)(A)
		},
		"./src/reddit/components/SubredditRules/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1fQ3jmS7djNiAnk2kVsPko",
				titleFontH2: "_39dtESYDu10VI6hZlt8jT_",
				titleFontH3: "_2_Ya84laiZ_AK4zBLZeXmE",
				titleFontH4: "_2k9S2SK_mdrMw9dXzIJka3",
				titleFontH5: "_3hrj37O_iGAZk7ssKstspL",
				titleFontH6: "_2KYRCY7gyTJjBx_Vr5pjqd",
				metadataFont: "_2hHNLn3quM7R0Znfoal7Wi",
				flairFont: "KkD9-eQEXAm_GdJAbixZ5",
				labelsFont: "_1xgXWixwTrYRf6JjxPm7ft",
				actionFont: "_1HQtdMEzh4gag8do4e9j7Z",
				smallButtonFont: "zWcRyj2-0oiXHbpM-5L1A",
				largeButtonFont: "_2PIOcp6QTxVygtl2u9ji_a",
				strongTextFont: "_2adE8ldKa4w_dETRAs-vdP",
				tabFont: "UtQUA6_scmmMeiLaweTg2",
				buttonFontXS: "_10ruUMhuBmxZqA1yF_MlA9",
				buttonFontXs: "_10ruUMhuBmxZqA1yF_MlA9",
				buttonFontS: "_1TFRBw_YwgrsDelv1Pi-SM",
				buttonFontM: "_2H_oQnXKALaCioWB1K9l-O",
				buttonFontL: "_2gy3VLIz6UYY1qlR5-fcVm",
				buttonFontXL: "_1drcPUSEFqtlwYnTDdJsro",
				buttonFontXl: "_1drcPUSEFqtlwYnTDdJsro",
				bodyFontH1: "_3lbK38dxFajKo78JrAEtIe",
				bodyFontH2: "_1CH0HVqZd3qMaT2gzU5mYn",
				bodyFontH3: "xk7ESbG2cmLPdln3D1fVi",
				bodyFontH4: "_29_oVfDyKoOggix5Gj6kah",
				bodyFontH5: "_1RoE8VrwOjvkyDDc-a8RZ_",
				bodyFontH6: "_3jwZ9V_jg7YZ4T-0cmGzxY",
				bodyFont: "_2iji_FM7kTNPRlaRGrPpq8",
				bodyFontSmall: "oJpqQ5hwA0NwwwlDu-EZH",
				bodyFontMono: "_2nUMbdZlQ1fQpJ_LaDNrbn",
				duplicateName: "_31Visb7b2S-tj09Ls_2Acy",
				emptyDetails: "_8PDfWWfcYPlmlmOr2Notr",
				emptyIcon: "_2tEWDkQudqJGiBAQsXSYXE",
				emptyRightIcon: "aF9GyLBXjDrRFO_7BTOYU",
				expandDetails: "_19etb4qzR1xpaHDy7AVdRr",
				header: "_2Xb_1g-T9iGzHDDy3_XpMD",
				DragCard: "_1KNUx1QX0DDrtynCc-GRE_",
				dragCard: "_1KNUx1QX0DDrtynCc-GRE_",
				dragIcon: "RR4AdUs4L9geua2bjCoqQ",
				icon: "PbUpiwMGWTjzrcYfCTdc0",
				iconButton: "_138C3cC0PAtIwsXoIAfGvJ",
				iconWrapper: "Ep3vJhfng2q2-wfiIgstP",
				loadingContainer: "ve35wYJQyEHavtRQYDY7V",
				metadata: "_1xQ_DrqnJXDZq1ptXHxYIB",
				middleMeta: "_2OWUxJA0Dhi0onvygJk3_i",
				middleMetaBlock: "n1lY8o9sGnqcqSfVzm5Vs",
				modalCloseButton: "zKQ8lyAF3pYyDoSlTpTjA",
				modalDescriptionBlock: "_26a81Mk5bsppGjI9AXbmWS",
				modalDescriptionField: "_1brIoxFWlohWpvu34OwZQP",
				modalFooter: "R-9ebJbU9igzPDfUi4Txg",
				modalRadioButton: "_1KFGHoJGHbU05yh6-sQIr5",
				modalRadioText: "_360Lh4DKj256s8RdElARFo",
				modalReasonField: "_1hdSGf--gQDRwsU96bzao1",
				modalRemoveButton: "_2yAePObDkhgZql3P1FHRu1",
				modalReportMeta: "_21sqmEi4OnC4uXlcUGDT_T",
				modalReportTitle: "_1y0X9006mE_5nlHfol1nc2",
				modalRule: "_1AlCnggMuPLxxDUbWWhG2q",
				modalRuleField: "QP-_TXfrh6G1-IRJif4Cy",
				modalRuleTitle: "_2I1A_fyvhaC7TYrYwA047Y",
				modalSubmitButton: "hHFW3BkgX7tSn5Nev-ooY",
				placeholderRow: "hv6YY1IfCww5loDzbkuMS",
				row: "_1LfPdWXylWmVTmLinhd4xl",
				rulesHeader: "_3MOq7UPqtI4o9EnAyCWkEQ",
				rulesIcon: "_29Fl8s_IvZwHxUPNV2ARiW",
				rulesInfo: "KTZ0Ir6xknUXuN4WMI7RN",
				ruleMetaText: "iVYauV_t6_ChREoxhNGsU",
				ruleMetaTitle: "ffGjaCMPoTUkhkVp6rHw5",
				emptyWrapper: "_2-xwKK1EqJlzI2dO7SIrbF",
				ruleNumber: "_3DEhjnxmn1BzXcJ_ml7kSQ",
				ruleText: "_1ZwBW5sLL75ZAZvQreMjn-",
				PrimaryButton: "_3GOmWOjCh6hPWZg1j-zPkr",
				primaryButton: "_3GOmWOjCh6hPWZg1j-zPkr"
			}
		},
		"./src/reddit/components/SubredditRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/config.ts"),
				o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
				i = s("./node_modules/lodash/times.js"),
				d = s.n(i),
				l = s("./node_modules/react/index.js"),
				c = s.n(l),
				u = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/actions/modal.ts"),
				b = s("./src/lib/makeActionCreator/index.ts"),
				g = s("./src/reddit/actions/subredditRules/constants.ts"),
				f = s("./src/reddit/actions/toaster.ts"),
				x = s("./src/reddit/endpoints/subreddit/rules.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts");
			const C = Object(b.a)(g.e),
				_ = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const r = Object(v.T)(a(), {
							subredditId: e
						}).name,
						i = `success-block-${t.rule}`,
						d = `error-block-${t.rule}`,
						l = await Object(x.a)(o(), r, t);
					if (l.ok) {
						const t = l.body;
						s(C({
							rules: t,
							subredditId: e
						})), s(f.f({
							id: i,
							kind: E.b.SuccessCommunityGreen,
							text: n.fbt._("Rule added", null, {
								hk: "4D4jbP"
							})
						}))
					} else s(f.f({
						id: d,
						kind: E.b.Error,
						text: l.json.errors ? l.json.errors[0][1] : n.fbt._("An error has occured. Please try again later", null, {
							hk: "2C9b4N"
						})
					}))
				}, k = Object(b.a)(g.f), y = Object(b.a)(g.g), O = Object(b.a)(g.d), S = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const r = Object(v.T)(a(), {
							subredditId: e
						}).name,
						i = Object(v.P)(a(), {
							subredditId: e
						}),
						d = `success-block-${e}`,
						l = `error-block-${e}`,
						c = await Object(x.e)(o(), r, t);
					if (c.ok) {
						const t = c.body;
						s(O({
							rules: t,
							subredditId: e
						})), s(f.f({
							id: d,
							kind: E.b.SuccessCommunityGreen,
							text: n.fbt._("Rule order updated", null, {
								hk: "3bmmvl"
							}),
							buttonText: n.fbt._("Undo", null, {
								hk: "1RYWKC"
							}),
							buttonAction: S(e, i)
						}))
					} else s(f.f({
						id: l,
						kind: E.b.Error,
						text: "explanation" in c ? c.explanation : c.json && "errors" in c.json ? c.json.errors[0][1] : n.fbt._("An error has occured. Please try again later", null, {
							hk: "1XJ2UQ"
						})
					}))
				};
			var w = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				j = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				I = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				N = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				T = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/controls/Button/index.tsx"),
				M = s("./src/reddit/controls/Sortable/index.tsx"),
				R = s("./src/reddit/selectors/telemetry.ts");
			const A = e => ({
					subreddit: R.subreddit(e),
					profile: R.profile(e),
					userSubreddit: R.userSubreddit(e)
				}),
				L = e => t => ({
					source: "rules",
					action: "click",
					noun: e,
					...A(t)
				}),
				F = (e, t) => s => ({
					source: "rules",
					action: "click",
					noun: e,
					actionInfo: R.actionInfo(s, {
						count: t
					}),
					...A(s)
				});
			var D = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				U = s("./src/reddit/layout/row/Inline/index.tsx"),
				B = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				W = s("./src/reddit/models/Rule/index.ts"),
				H = s("./src/reddit/selectors/activeModalId.ts"),
				V = s("./src/reddit/selectors/moderatorPermissions.ts"),
				q = s("./src/reddit/components/SubredditRules/index.m.less"),
				G = s.n(q),
				z = s("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				K = s("./src/reddit/icons/svgs/Grapple/index.tsx");
			const X = p.a.wrapped(z.a, "DragCard", G.a);
			var Q = e => c.a.createElement(X, {
					isDragging: e.isDragging,
					isOver: e.isOver,
					canDrop: e.canDrop
				}, c.a.createElement(U.a, {
					className: G.a.row
				}, c.a.createElement("span", {
					className: G.a.ruleNumber
				}, e.index + 1), c.a.createElement("span", {
					className: G.a.ruleText
				}, e.shortName), c.a.createElement("span", {
					className: G.a.iconWrapper
				}, c.a.createElement(K.a, {
					className: G.a.dragIcon,
					title: n.fbt._("Drag", null, {
						hk: "dBKmA"
					})
				})))),
				J = s("./src/higherOrderComponents/asModal/index.tsx"),
				Y = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				Z = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				$ = s("./src/reddit/controls/RadioInput/index.tsx"),
				ee = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				te = s("./src/reddit/controls/TextButton/index.tsx"),
				se = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const ne = {
					rule: "",
					kind: "all",
					reportReason: "",
					description: ""
				},
				ae = Object(u.b)(null, (e, t) => ({
					createRule: s => e(_(t.subredditId, s)),
					updateRule: (s, a) => e(((e, t, s) => async (a, o, {
						apiContext: r
					}) => {
						const i = Object(v.T)(o(), {
								subredditId: e
							}).name,
							d = `success-block-${t.rule}`,
							l = `error-block-${t.rule}`,
							c = await Object(x.f)(r(), i, t, s);
						if (c.ok) {
							const t = c.body;
							a(k({
								rules: t,
								subredditId: e,
								oldName: s
							})), a(f.f({
								id: d,
								kind: E.b.SuccessCommunityGreen,
								text: n.fbt._("Rule updated", null, {
									hk: "1ljetO"
								})
							}))
						} else a(f.f({
							id: l,
							kind: E.b.Error,
							text: c.json.errors ? c.json.errors[0][1] : n.fbt._("An error has occured. Please try again later", null, {
								hk: "2acjBM"
							})
						}))
					})(t.subredditId, s, a))
				}));
			class oe extends c.a.Component {
				constructor(e) {
					super(e), this.onRuleInputChange = e => {
						e.currentTarget.value.trim().length <= W.g && this.setState({
							rule: e.currentTarget.value
						})
					}, this.onReportReasonInputChange = e => {
						e.currentTarget.value.trim().length <= W.f && this.setState({
							reportReason: e.currentTarget.value
						})
					}, this.onDescriptionInputChange = e => {
						e.currentTarget.value.trim().length <= W.a && this.setState({
							description: e.currentTarget.value
						})
					}, this.onSave = () => {
						const {
							props: e,
							state: t
						} = this, s = {
							rule: t.rule.trim(),
							kind: t.kind,
							reason: t.reportReason.trim(),
							description: t.description.trim()
						};
						e.rule ? e.updateRule(s, e.rule.shortName) : e.createRule(s), e.toggleModal(), e.sendEvent()
					}, this.canSave = () => {
						const {
							props: e,
							state: t
						} = this, s = t.rule.trim(), n = t.reportReason.trim(), a = t.description.trim(), o = !e.ruleNames.includes(s) || e.ruleNames.includes(s) && e.rule && e.rule.shortName === s, r = !e.rule || (e.rule.shortName !== s || e.rule.violationReason !== t.reportReason || e.rule.kind !== t.kind || e.rule.description !== a);
						return o && r && s.length > 0 && s.length <= W.g && n.length <= W.f && a.length <= W.a && t.kind
					}, this.selectRuleKind = e => {
						this.setState({
							kind: e
						})
					}, this.isDuplicateRuleName = () => {
						const {
							props: e,
							state: t
						} = this, s = !e.rule || e.rule.shortName !== t.rule.trim(), n = e.ruleNames.includes(t.rule.trim());
						return 0 !== t.rule.trim().length && s && n
					}, this.state = e.rule ? {
						rule: e.rule.shortName,
						kind: e.rule.kind,
						reportReason: e.rule.violationReason || "",
						description: e.rule.description || ""
					} : ne
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return c.a.createElement(Z.d, null, c.a.createElement(Z.h, null, c.a.createElement(se.a, null, c.a.createElement(Z.p, null, e.rule ? n.fbt._("Edit rule", null, {
						hk: "2zflTO"
					}) : n.fbt._("Add rule", null, {
						hk: "1xqo5O"
					})), c.a.createElement(te.a, {
						className: G.a.modalCloseButton,
						onClick: e.toggleModal
					}, c.a.createElement(Z.b, null)))), c.a.createElement(Z.k, null, c.a.createElement(Z.g, null, c.a.createElement(Z.o, {
						className: G.a.modalRule
					}, n.fbt._("Rule", null, {
						hk: "1W7esG"
					})), c.a.createElement(Z.s, {
						className: G.a.modalRuleField,
						onChange: this.onRuleInputChange,
						placeholder: n.fbt._('Rule displayed (e.g. "No photos")', null, {
							hk: "GdEW"
						}),
						value: t.rule
					}), this.isDuplicateRuleName() && c.a.createElement("span", {
						className: G.a.duplicateName
					}, n.fbt._("You have another rule with this title. Please change.", null, {
						hk: "2EPSGv"
					})), c.a.createElement(Y.a, {
						maxChars: W.g,
						text: t.rule.trim()
					})), c.a.createElement(Z.g, null, c.a.createElement(Z.o, {
						className: G.a.modalRuleTitle
					}, n.fbt._("Applies to", null, {
						hk: "Pzu3b"
					})), c.a.createElement($.a, {
						name: "RULE_KIND_PICKER",
						onChange: this.selectRuleKind,
						value: t.kind
					}, c.a.createElement(ee.a, {
						className: G.a.modalRadioButton,
						key: W.b.all,
						value: W.b.all,
						selected: t.kind === W.b.all,
						showButton: !0,
						tabIndex: t.kind === W.b.all ? 0 : -1
					}, c.a.createElement(Z.o, {
						className: G.a.modalRadioText
					}, n.fbt._("Posts & comments", null, {
						hk: "tHmQq"
					}))), c.a.createElement(ee.a, {
						className: G.a.modalRadioButton,
						key: W.b.post,
						value: W.b.post,
						selected: t.kind === W.b.post,
						showButton: !0,
						tabIndex: t.kind === W.b.post ? 0 : -1
					}, c.a.createElement(Z.o, {
						className: G.a.modalRadioText
					}, n.fbt._("Posts only", null, {
						hk: "16dDBr"
					}))), c.a.createElement(ee.a, {
						className: G.a.modalRadioButton,
						key: W.b.comment,
						value: W.b.comment,
						selected: t.kind === W.b.comment,
						showButton: !0,
						tabIndex: t.kind === W.b.comment ? 0 : -1
					}, c.a.createElement(Z.o, {
						className: G.a.modalRadioText
					}, n.fbt._("Comments only", null, {
						hk: "2V8qUA"
					}))))), c.a.createElement(Z.g, null, c.a.createElement(Z.o, {
						className: G.a.modalReportTitle
					}, n.fbt._("Report reason", null, {
						hk: "3ShjE9"
					})), c.a.createElement(Z.l, {
						className: G.a.modalReportMeta
					}, n.fbt._("Defaults to rule name if left blank", null, {
						hk: "2xObiU"
					})), c.a.createElement(Z.s, {
						className: G.a.modalReasonField,
						onChange: this.onReportReasonInputChange,
						placeholder: t.rule.trim().length > 0 && 0 === t.reportReason.trim().length ? t.rule : n.fbt._('Reason rule is broken (e.g. "This is a photo")', null, {
							hk: "2Op1SL"
						}),
						value: t.reportReason
					}), c.a.createElement(Y.a, {
						maxChars: W.f,
						text: t.reportReason.trim()
					})), c.a.createElement("div", {
						className: G.a.modalDescriptionBlock
					}, c.a.createElement(Z.o, {
						className: G.a.modalRuleTitle
					}, n.fbt._("Full description", null, {
						hk: "4CTvQy"
					})), c.a.createElement(Z.s, {
						className: G.a.modalDescriptionField,
						onChange: this.onDescriptionInputChange,
						placeholder: n.fbt._("Enter the full description of the rule.", null, {
							hk: "3EyaJe"
						}),
						value: t.description
					}), c.a.createElement(Y.a, {
						maxChars: W.a,
						text: t.description.trim()
					}))), c.a.createElement(Z.f, {
						className: G.a.modalFooter
					}, c.a.createElement(P.i, {
						className: G.a.modalSubmitButton,
						onClick: this.onSave,
						disabled: !this.canSave()
					}, e.rule ? n.fbt._("Save", null, {
						hk: "ufsfP"
					}) : n.fbt._("Add new rule", null, {
						hk: "2dy0gV"
					})), c.a.createElement(Z.a, {
						onClick: e.toggleModal
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), e.rule && c.a.createElement(Z.r, {
						className: G.a.modalRemoveButton,
						onClick: e.onDelete
					}, n.fbt._("Delete", null, {
						hk: "4ysFr0"
					}))))
				}
			}
			var re = Object(J.a)(ae(oe)),
				ie = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				de = s("./src/reddit/components/RichTextJson/index.tsx"),
				le = s("./src/lib/constants/index.ts"),
				ce = s("./src/lib/humanizeUTCDate/index.tsx"),
				ue = s("./src/lib/timeAgo/index.ts");
			var me = e => {
					const t = (e => e - 8 * le.L / le.Kb)(e);
					return Object(ue.c)(t) >= 1 ? Object(ce.a)(t) : Object(ue.d)(t)
				},
				pe = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				he = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				be = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				ge = s("./src/reddit/models/RichTextJson/index.ts");
			const fe = {};
			class xe extends c.a.Component {
				constructor(e) {
					super(e), this.toggleExpandDetails = () => {
						this.setState(e => ({
							isExpanded: !e.isExpanded
						}))
					}, this.state = {
						isExpanded: !1
					}
				}
				render() {
					const {
						hasConfigPerms: e,
						index: t,
						onEdit: s,
						subredditRule: a
					} = this.props, o = a.descriptionRichText ? JSON.parse(a.descriptionRichText).document : void 0;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(U.a, {
						className: G.a.row
					}, c.a.createElement("span", {
						className: G.a.ruleNumber
					}, t + 1), c.a.createElement("span", {
						className: G.a.ruleText
					}, a.shortName), c.a.createElement("span", {
						className: G.a.iconWrapper
					}, e && c.a.createElement("button", {
						className: G.a.iconButton,
						onClick: s
					}, c.a.createElement(be.a, {
						className: G.a.icon,
						title: n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					})), c.a.createElement("button", {
						className: G.a.iconButton,
						onClick: this.toggleExpandDetails
					}, this.state.isExpanded ? c.a.createElement(pe.a, {
						className: G.a.icon,
						title: n.fbt._("Collapse", null, {
							hk: "eGqwd"
						})
					}) : c.a.createElement(he.a, {
						className: G.a.icon,
						title: n.fbt._("Expand", null, {
							hk: "4dMVPg"
						})
					})))), this.state.isExpanded && c.a.createElement(U.a, {
						className: G.a.expandDetails
					}, c.a.createElement("span", {
						className: G.a.metadata
					}, c.a.createElement("span", {
						className: G.a.ruleMetaTitle
					}, n.fbt._("Report reason", null, {
						hk: "2RH1DJ"
					})), c.a.createElement("span", {
						className: G.a.ruleMetaText
					}, a.violationReason && 0 !== a.violationReason.length ? a.violationReason : a.shortName)), c.a.createElement("span", {
						className: G.a.middleMeta
					}, c.a.createElement("div", {
						className: G.a.middleMetaBlock
					}, c.a.createElement("div", {
						className: G.a.ruleMetaTitle
					}, n.fbt._("Applies to", null, {
						hk: "19eYpy"
					})), c.a.createElement("div", {
						className: G.a.ruleMetaText
					}, a.kind === W.b.all ? n.fbt._("Posts & comments", null, {
						hk: "34PjHx"
					}) : a.kind === W.b.post ? n.fbt._("Posts only", null, {
						hk: "3MllWy"
					}) : n.fbt._("Comments only", null, {
						hk: "StCEa"
					}))), c.a.createElement("div", {
						className: G.a.middleMetaBlock
					}, c.a.createElement("div", {
						className: G.a.ruleMetaTitle
					}, n.fbt._("Created", null, {
						hk: "gSE9w"
					})), c.a.createElement("div", {
						className: G.a.ruleMetaText
					}, me(a.createdUtc)))), c.a.createElement("span", {
						className: G.a.metadata
					}, c.a.createElement("span", {
						className: G.a.ruleMetaTitle
					}, n.fbt._("Full description", null, {
						hk: "20Lgcg"
					})), c.a.createElement("span", {
						className: G.a.ruleMetaText
					}, o && !Object(ge.G)({
						document: o
					}) ? c.a.createElement(de.a, {
						className: G.a.ruleMetaText,
						content: {
							document: o
						},
						rtJsonElementProps: fe
					}) : a.descriptionHtml ? c.a.createElement(ie.a, {
						className: G.a.ruleMetaText,
						html: a.descriptionHtml
					}) : a.description))))
				}
			}
			var Ee = xe;
			const ve = p.a.wrapped(P.i, "PrimaryButton", G.a),
				Ce = () => c.a.createElement(U.a, {
					className: G.a.placeholderRow
				}, c.a.createElement("span", {
					className: G.a.emptyWrapper
				}, c.a.createElement("span", {
					className: G.a.emptyIcon
				})), c.a.createElement("span", {
					className: G.a.emptyDetails
				}), c.a.createElement("span", {
					className: G.a.iconWrapper
				}, c.a.createElement("span", {
					className: G.a.emptyRightIcon
				}), c.a.createElement("span", {
					className: G.a.emptyRightIcon
				}))),
				_e = () => c.a.createElement("div", {
					className: G.a.loadingContainer
				}, d()(15, e => c.a.createElement(Ce, {
					key: e
				}))),
				ke = Object(m.c)({
					hasModConfigPerms: (e, t) => Object(V.a)(B.c.config)(e, {
						subredditId: t.subreddit.id
					}),
					isConfirmModalOpen: e => "SubredditRule--Modal--DeleteConfirmation" === Object(H.a)(e),
					isRuleEditorOpen: e => "SubredditRule--Editor--Modal" === Object(H.a)(e),
					isSubredditRulesPending: e => Object(v.R)(e),
					ruleOrder: (e, t) => Object(v.P)(e, {
						subredditId: t.subreddit.id
					}),
					subredditRules: (e, t) => Object(v.S)(e, {
						subredditId: t.subreddit.id
					})
				}),
				ye = Object(u.b)(ke, (e, t) => ({
					removeRule: (s, a) => e(((e, t, s) => async (a, o, {
						apiContext: r
					}) => {
						const i = Object(v.T)(o(), {
								subredditId: e
							}).name,
							d = Object(v.S)(o(), {
								subredditId: e
							})[s],
							l = `success-block-${t}`,
							c = `error-block-${t}`,
							u = await Object(x.d)(r(), i, t);
						if (u.ok) {
							const t = u.body;
							a(y({
								rules: t,
								subredditId: e
							})), a(f.f({
								id: l,
								kind: E.b.SuccessCommunityGreen,
								text: n.fbt._("Rule deleted", null, {
									hk: "2Kwoph"
								}),
								buttonText: n.fbt._("Undo", null, {
									hk: "1RYWKC"
								}),
								buttonAction: _(e, {
									rule: d.shortName,
									kind: d.kind,
									reason: d.violationReason,
									description: d.description
								})
							}))
						} else a(f.f({
							id: c,
							kind: E.b.Error,
							text: u.json.errors ? u.json.errors[0][1] : n.fbt._("An error has occured. Please try again later", null, {
								hk: "37ELrZ"
							})
						}))
					})(t.subreddit.id, s, a)),
					reorderRules: s => {
						e(S(t.subreddit.id, s))
					},
					toggleConfirmationModal: () => e(Object(h.i)("SubredditRule--Modal--DeleteConfirmation")),
					toggleRuleEditorModal: () => e(Object(h.i)("SubredditRule--Editor--Modal"))
				}));
			class Oe extends c.a.Component {
				constructor(e) {
					super(e), this.deleteRule = () => {
						const e = this.state.ruleToEdit;
						e && this.props.removeRule(e.shortName, e.priority)
					}, this.onConfirmDeleteRule = () => {
						this.props.toggleConfirmationModal()
					}, this.onEditRule = e => {
						this.setState({
							ruleToEdit: e
						}), this.props.toggleRuleEditorModal()
					}, this.handleDrop = (e, t, s) => this.setState({
						ruleOrder: s,
						numRulesMoved: this.state.numRulesMoved + 1
					}), this.reorderRules = () => {
						this.props.reorderRules(this.state.ruleOrder), this.props.sendEvent(F("save_reorder", this.state.numRulesMoved)), this.stopReorder()
					}, this.startReorder = () => {
						this.setState({
							isReordering: !0,
							ruleOrder: this.props.ruleOrder
						})
					}, this.stopReorder = () => this.setState({
						isReordering: !1,
						numRulesMoved: 0
					}), this.toggleConfirmationModal = () => {
						this.props.toggleConfirmationModal(), this.setState({
							ruleToEdit: null
						})
					}, this.toggleEditorModal = () => {
						this.props.toggleRuleEditorModal(), this.setState({
							ruleToEdit: null
						})
					}, this.trackClick = e => this.props.sendEvent(L(e)), this.trackEdit = () => this.state.ruleToEdit ? this.trackClick("save_edit") : this.trackClick("save_new"), this.trackDelete = () => this.trackClick("delete"), this.state = {
						numRulesMoved: 0,
						ruleToEdit: null,
						ruleOrder: e.ruleOrder,
						isReordering: !1
					}
				}
				render() {
					const {
						hasModConfigPerms: e,
						isConfirmModalOpen: t,
						isRuleEditorOpen: s,
						isSubredditRulesPending: o,
						subreddit: i,
						subredditRules: d
					} = this.props;
					return c.a.createElement(c.a.Fragment, null, e && c.a.createElement(N.c, null, this.state.isReordering ? c.a.createElement(P.l, {
						onClick: this.stopReorder
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})) : c.a.createElement(P.o, {
						onClick: this.startReorder,
						disabled: d.length <= 1
					}, n.fbt._("Reorder rules", null, {
						hk: "1qh7V6"
					})), this.state.isReordering ? c.a.createElement(ve, {
						onClick: this.reorderRules,
						disabled: r()(d.map(e => e.shortName), this.state.ruleOrder)
					}, n.fbt._("Save", null, {
						hk: "3nstB"
					})) : c.a.createElement(ve, {
						onClick: this.toggleEditorModal,
						disabled: o || d.length >= W.e
					}, n.fbt._("Add rule", null, {
						hk: "6GEk0"
					}))), d.length ? c.a.createElement(N.a, null, c.a.createElement("div", {
						className: G.a.header
					}, c.a.createElement(N.b, {
						className: G.a.rulesHeader
					}, n.fbt._("Rules", null, {
						hk: "41SmPR"
					}), c.a.createElement(I.a, {
						linkUrl: `${a.a.redditModHelpUrl}/hc/en-us/articles/360023379211`
					})), !this.state.isReordering && c.a.createElement("div", {
						className: G.a.rulesInfo
					}, n.fbt._("These are rules that visitors must follow to participate. They can be used as reasons to report or ban posts, comments, and users. Communities can have a maximum of 15 rules.", null, {
						hk: "1C2Vjc"
					}))), this.state.isReordering ? c.a.createElement(M.a, {
						values: this.state.ruleOrder,
						render: (e, t, s, n, a) => c.a.createElement(Q, {
							isDragging: s,
							isOver: n,
							canDrop: a,
							index: t,
							shortName: e
						}),
						onDrop: this.handleDrop
					}) : d.map((t, s) => c.a.createElement(Ee, {
						hasConfigPerms: e,
						index: s,
						key: `${i.name}-${t.shortName}`,
						onEdit: () => this.onEditRule(t),
						subredditRule: t
					}))) : c.a.createElement(N.a, null, c.a.createElement("div", {
						className: G.a.header
					}, c.a.createElement(N.b, {
						className: G.a.rulesHeader
					}, n.fbt._("Rules", null, {
						hk: "41SmPR"
					}), c.a.createElement(I.a, {
						linkUrl: `${a.a.redditModHelpUrl}/hc/en-us/articles/360023379211`
					}))), o ? c.a.createElement(_e, null) : c.a.createElement(j.c, {
						text: n.fbt._("No rules yet", null, {
							hk: "pYLkV"
						})
					}, c.a.createElement(D.a, {
						className: G.a.rulesIcon
					}))), s && c.a.createElement(re, {
						onDelete: this.onConfirmDeleteRule,
						rule: this.state.ruleToEdit,
						ruleNames: d.map(e => e.shortName),
						sendEvent: this.trackEdit,
						subredditId: i.id,
						toggleModal: this.toggleEditorModal,
						withOverlay: !0
					}), t && this.state.ruleToEdit && c.a.createElement(w.a, {
						actionText: n.fbt._("Delete", null, {
							hk: "2ZdVqx"
						}),
						headerText: n.fbt._("Delete rule", null, {
							hk: "5q2Ri"
						}),
						modalText: n.fbt._("Are you sure you want to delete this rule?", null, {
							hk: "2diD6u"
						}),
						onConfirm: this.deleteRule,
						toggleModal: this.toggleConfirmationModal,
						trackClick: this.trackDelete,
						withOverlay: !0
					}))
				}
			}
			t.a = ye(Object(T.c)(Oe))
		},
		"./src/reddit/components/UserNameAndIcon/index.m.less": function(e, t, s) {
			e.exports = {
				UserIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				userIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				UserIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				userIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				UserLink: "_2Q3rLIRb_ij54AEsabVm9L",
				userLink: "_2Q3rLIRb_ij54AEsabVm9L"
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				d = s("./src/reddit/components/UserIcon/index.tsx"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				c = s("./src/reddit/components/UserNameAndIcon/index.m.less"),
				u = s.n(c);
			const m = r.a.span("UserIconContainer", u.a),
				p = r.a.wrapped(d.a, "UserIcon", u.a),
				h = r.a.wrapped(l.a, "UserLink", u.a);
			t.a = e => o.a.createElement(h, {
				className: e.className,
				to: `${n.a.redditUrl}/user/${e.username}`
			}, o.a.createElement(i.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, o.a.createElement(m, {
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}, o.a.createElement(p, {
				iconUrl: e.userIcon,
				isNSFW: !1,
				userName: e.username
			})), e.username))
		},
		"./src/reddit/components/Wiki/CreateNewWikiPageModal/index.m.less": function(e, t, s) {
			e.exports = {
				modalBody: "_1bgWTt9jbjzFmQBe0xzfBc",
				notice: "_19wd_7K0Gqdp6cf0Pno6jX",
				sectionTitle: "_2eB-lbdBJ7yGnpy9iCXf27",
				primaryButton: "_1Wp9oAwAZieyVMe4wA5SeL",
				dropdownContainer: "_2-waVlosIHdWwUa_OBavKm",
				dropdownTarget: "_1mcRpBQSnN5ALeKix2x4Py",
				targetText: "_3QRCCOc1SfjMkk4bZCW5lD",
				dropdown: "_1Uq_MgLQhUk4iL9iHGz3qL",
				dropdownRow: "_2UfNC6z3v6GQsT_TQn-eoZ",
				errorText: "_31tw_6Xr1vH0KRVUnoJEdv"
			}
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				r = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/contexts/Post/index.tsx"),
				u = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const f = {
					autoplayPref: g.b,
					activeModalId: u.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: m.d,
					isCurrentUserProfilePost: b.k,
					isExpanded: b.l,
					isLoggedIn: g.J,
					moderatorPermissions: p.j,
					modModeEnabled: l.Q,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: l.r,
					flairStyleTemplate: l.S
				},
				x = (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const n = s === i.a.upvoted ? Object(o.bb)(t) : Object(o.u)(t);
						e(n)
					},
					onIgnoreReports: () => e(Object(o.X)(t)),
					onOpenReportsDropdown: t => e(Object(r.h)({
						tooltipId: t
					}))
				}),
				E = Object(n.b)(() => Object(a.c)(f), x, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(c.b)(E(Object(d.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/LRUCache/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const c = Object(d.t)({
					searchQuery: d.W
				}),
				u = new i.a(250),
				m = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = `${e.id}-${t}`;
						let n = u.get(s);
						if (void 0 === n) {
							const o = new RegExp(`(\\b${t}\\b)`, "gi"),
								r = e.title.split(o);
							for (let e = 1; e < r.length; e += 2) r[e] = a.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, r[e]);
							n = a.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, a.a.Children.toArray(r)), u.set(s, n)
						}
						return n
					}
				},
				p = Object(o.b)(() => Object(r.c)(l.c), l.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: m(s.searchQuery || "")
				}));
			t.a = e => c(p(e))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "g", (function() {
				return u
			}));
			const n = "ModerationPage--Modal--AddAward",
				a = "ModerationPage--Modal--DeleteAwardConfirmation",
				o = 20,
				r = 4,
				i = 1e4,
				d = .2,
				l = .1,
				c = .1,
				u = 500
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, s) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/controls/CheckboxInput/index.m.less"),
				c = s.n(l);
			t.a = e => a.a.createElement(d.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(o.a)(e.className, c.a.checkboxInput, e.disabled ? c.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, a.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? a.a.createElement(i.a, {
				className: c.a.checkboxSelected
			}) : a.a.createElement(r.a, null), e.children)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(m),
				h = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class f extends r.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = a()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(i.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? r.a.createElement(d.a, g({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && r.a.createElement("span", {
						className: s
					}, e.children), r.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : r.a.createElement(u.a, g({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: a()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? r.a.createElement("div", null, e.children) : r.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && r.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && r.a.createElement(c.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && r.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(i.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return r.a.createElement(f, g({
					className: s
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, s) {
			e.exports = {
				dropdownMenu: "_1PLoXiZH4WKzHTfmYIt34X",
				selector: "apk_M-7ks6NcaiMN8cotM",
				selectorContent: "Ot99igbaJ5id3P1tw6wow",
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/controls/DropdownSelector/index.m.less"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/contexts/CoreStyleExperiments.ts"),
				l = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = s("./src/reddit/icons/fonts/index.tsx"),
				m = s("./src/reddit/icons/svgs/Dropdown/index.tsx");
			const p = e => {
				e.preventDefault()
			};
			class h extends a.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = a.a.createRef(), this.menuItems = a.a.createRef(), this.containerRef = a.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, s) => {
						const {
							onSelect: n
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), n(t), s && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
							isOpen: !1
						})
					}, this.onOptionClick = (e, t) => {
						this.onSelectOption(e, t)
					}, this.handleDropdownClick = e => {
						e.preventDefault(), this.props.onOpen && this.props.onOpen(), this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.handleDropdownBlur = e => {
						let t = !1;
						if (e.relatedTarget === this.dropdownButton.current) t = !0;
						else {
							if (!this.menuItems.current) return;
							const s = this.menuItems.current.getElementsByClassName(r.a.menuOption);
							for (let n = 0; n < s.length; n++) e.relatedTarget === s[n] && (t = !0)
						}
						this.setState({
							isOpen: t
						})
					}, this.handleDropdownKeyDown = e => {
						if (!this.state.isOpen && [40, 32, 13].includes(e.keyCode)) return e.preventDefault(), void this.setState({
							isOpen: !0
						}, this.focusOnFirstOption);
						40 === e.keyCode && (e.preventDefault(), this.focusOnFirstOption()), 27 === e.keyCode && this.state.isOpen && (e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), this.setState({
							isOpen: !1
						}))
					}, this.handleOptionKeyDown = (e, t) => {
						if (32 === e.keyCode || 13 === e.keyCode) this.onSelectOption(e, t, !0);
						else if (38 === e.keyCode || 40 === e.keyCode) {
							if (e.preventDefault(), !this.menuItems.current) return;
							const t = this.menuItems.current.getElementsByClassName(r.a.menuOption);
							for (let s = 0; s < t.length; s++) t[s] === e.target && (38 === e.keyCode && s > 0 && t[s - 1].focus(), 40 === e.keyCode && s < t.length - 1 && t[s + 1].focus())
						}
					}
				}
				componentDidMount() {
					document.body.addEventListener("click", this.handleDocumentClick, !1)
				}
				componentWillUnmount() {
					document.body.removeEventListener("click", this.handleDocumentClick, !1)
				}
				focusOnFirstOption() {
					if (!this.menuItems.current) return;
					const e = this.menuItems.current.getElementsByClassName(r.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: s
					} = this.props;
					return e.map((e, n) => a.a.createElement(l.b, {
						key: n + e.displayText,
						className: Object(i.a)(r.a.menuOption, {
							[r.a.topics]: s
						}),
						noIcon: !0,
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isTopicsStyle: s
					}, e.displayText))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: s,
						isCompactStyle: n,
						isTopicsStyle: o,
						menuItemsClassName: l,
						name: h,
						isSaving: b
					} = this.props, {
						isOpen: g
					} = this.state;
					return a.a.createElement(d.b.Consumer, null, ({
						[d.a.Icons]: f
					}) => a.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(i.a)(r.a.dropdownMenu, t, {
							[r.a.topics]: o
						})
					}, a.a.createElement("button", {
						onClick: this.handleDropdownClick,
						className: Object(i.a)(e, r.a.selector, {
							[r.a.compact]: n
						}, {
							[r.a.topics]: o
						}),
						name: h,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: this.handleDropdownBlur,
						onKeyDown: this.handleDropdownKeyDown
					}, a.a.createElement("span", {
						className: r.a.selectorContent,
						tabIndex: -1
					}, s), b ? a.a.createElement(c.a, {
						sizePx: 8,
						className: r.a.loadingIcon
					}) : f ? a.a.createElement(u.a, {
						name: "caret_down"
					}) : a.a.createElement(m.b, {
						className: r.a.caretDown
					})), a.a.createElement("div", {
						className: Object(i.a)(r.a.menuItems, l, {
							[r.a.topics]: o
						}),
						onMouseDown: p,
						ref: this.menuItems
					}, g && this.getDropdownMenuItems())))
				}
			}
			t.b = h
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/flow.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-dnd/lib/index.js"),
				d = s("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = s("./src/reddit/helpers/dragDropContext/index.ts");
			const c = d.NativeTypes.FILE,
				u = a()(Object(i.DropTarget)(c, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const s = t.getItem();
						s.files && e.onDrop(s.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), l.a);
			class m extends r.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(r.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(m)
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "d", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/ErrorText/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = s("./src/reddit/controls/FormFields/index.m.less"),
				u = s.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = r.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: s,
						inputRef: n,
						className: r,
						...i
					} = e, d = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(o.a)(u.a.inputWrapper, r, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, a.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, i)), e.label && a.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => {
					const {
						label: t,
						children: s,
						inputRef: n,
						isInvalid: r,
						className: i,
						redditStyle: d,
						...l
					} = e, c = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(o.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: r,
							[u.a.mIsRedditStyle]: d
						}),
						onClick: h
					}, a.a.createElement(p, m({
						innerRef: n
					}, l)), e.label && a.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => a.a.createElement("div", {
					className: Object(o.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(d.a, {
					className: u.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: x.ADD
						})
					}, this.updateValue = (e, t) => {
						const s = this.props.values.slice();
						s[t] = e.target.value, this.props.onChange(s)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							s = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: x.REMOVE,
							value: s,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: s,
						placeholder: n,
						errors: o = []
					} = this.props;
					return e.map((e, r) => a.a.createElement(b, {
						inputRef: e => this.setInputRef(e, r),
						isInvalid: !!o[r],
						disabled: t,
						type: "text",
						label: s,
						onChange: e => this.updateValue(e, r),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(r)
					}, a.a.createElement(l.b, {
						className: u.a.trash
					})), !!o[r] && a.a.createElement(i.b, {
						className: u.a.errorText
					}, o[r])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: s,
						maxLength: n,
						addValueText: r,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const d = !(!!n && s.length >= n) && !i;
					return a.a.createElement("div", {
						className: Object(o.a)(u.a.multiInputWrapper, e)
					}, t && d && a.a.createElement(f, {
						onClick: this.addValue,
						text: r
					}), this.renderFields(), !t && d && a.a.createElement(f, {
						onClick: this.addValue,
						text: r
					}))
				}
			}
		},
		"./src/reddit/controls/ImageDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				imageDisplay: "_1OSym2TYADlQNpSDWNxtjB"
			}
		},
		"./src/reddit/controls/ImageDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/ImageDisplay/index.m.less"),
				i = s.n(r);
			t.a = ({
				backgroundImage: e,
				children: t,
				className: s
			}) => a.a.createElement("div", {
				className: Object(o.a)(i.a.imageDisplay, s),
				style: {
					backgroundImage: `url('${e}')`
				},
				children: t
			})
		},
		"./src/reddit/controls/Select/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "DuuuuIp9EubfvJyrdxytL",
				wrapper: "DuuuuIp9EubfvJyrdxytL",
				Caret: "_8fOXBcWxu_c3tlrAKMR3R",
				caret: "_8fOXBcWxu_c3tlrAKMR3R",
				Inner: "_3-_epznhOfLDNH3-plYM6l",
				inner: "_3-_epznhOfLDNH3-plYM6l",
				active: "wFEhEmBm9HI3jG6QDUnaw",
				redditStyle: "_2PDExzXmSTOdxzNjRB1Pww"
			}
		},
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/helpers/dragDropContext/index.ts"),
				r = s("./node_modules/lodash/flow.js"),
				i = s.n(r),
				d = s("./node_modules/react-dnd/lib/index.js");
			class l extends a.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? i()(e.connectDropTarget, e.connectDragSource)(a.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var c = i()(Object(d.DragSource)("card", {
				beginDrag: e => ({
					id: e.id,
					index: e.index
				}),
				endDrag: (e, t) => {
					if (t && t.didDrop()) {
						const s = t.getDropResult();
						e.onDrop(e.id, s.id)
					}
				}
			}, (e, t) => ({
				connectDragSource: e.dragSource(),
				isDragging: t.isDragging()
			})), Object(d.DropTarget)("card", {
				drop: (e, t) => {
					if (!t || !t.didDrop()) return {
						id: e.id,
						index: e.index
					}
				},
				canDrop: (e, t) => {
					if (!t) return !1;
					const s = t.getItem();
					return e.id !== s.id
				}
			}, (e, t) => ({
				connectDropTarget: e.dropTarget(),
				isOver: t.isOver(),
				canDrop: t.canDrop()
			})))(l);
			class u extends a.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(s => {
							const n = s.values.slice(),
								a = n.indexOf(e),
								o = n.splice(a, 1)[0];
							let r = n.indexOf(t);
							return a <= r && (r += 1), n.splice(r, 0, o), this.props.onDrop(e, t, n), {
								values: n
							}
						})
					}, this.state = {
						values: e.values
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						values: e.values
					}))
				}
				render() {
					const {
						className: e,
						getReactKey: t,
						onClick: s,
						render: n
					} = this.props;
					return a.a.createElement("div", {
						className: e
					}, this.state.values.map((e, o) => a.a.createElement(c, {
						id: e,
						key: t && t(e, o),
						index: o,
						render: n,
						onDrop: this.onDrop,
						onClick: s
					})))
				}
			}
			t.a = Object(o.a)(u)
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/InternalLink/index.tsx"),
				o = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				r = s.n(o);
			t.a = n.a.wrapped(a.a, "unstyledInternalLink", r.a)
		},
		"./src/reddit/endpoints/economics/uploadedAssets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			}));
			var n, a, o = s("./src/config.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t, s, n) {
				const a = `assetType=${s}&assetStatus=${n}`;
				return Object(r.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/modtools/${t}/assets?${a}`
				})
			}

			function d(e, t, s) {
				const a = new FormData;
				return a.append("assetType", s.assetType), a.append("assetName", s.assetName), a.append("upfile", s.imageFile), s.assetType === n.Badge && (a.append("badgeColor", s.badgeColor || ""), a.append("badgeDescription", s.badgeDescription || "")), Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/modtools/${t}/assets`,
					method: "post",
					type: null,
					data: a
				})
			}

			function l(e, t, s, n, a) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/modtools/${t}/assets/${s}s/${n}`,
					method: "patch",
					data: a
				})
			}! function(e) {
				e.Badge = "badge", e.Emote = "emote"
			}(n || (n = {})),
			function(e) {
				e.Uploaded = "uploaded", e.Approved = "approved", e.Rejected = "rejected"
			}(a || (a = {}))
		},
		"./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/graphql/operations/SetSubredditGeoPlace.json");
			const o = e => ({
				input: {
					subredditId: e.subredditId,
					geoPlace: {
						id: e.placeId,
						source: e.source,
						sessionId: e.sessionId
					}
				}
			});
			t.a = async (e, t) => Object(n.a)(e, {
				...a,
				variables: o(t)
			})
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/graphql/operations/SubredditWiki.json");
			const o = (e, t) => Object(n.a)(e, {
				...a,
				variables: t
			})
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "a", (function() {
				return _
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/graphql/operations/CreateScheduledPost.json"),
				a = s("./src/graphql/operations/SubredditScheduledPosts.json"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./src/reddit/helpers/flair.ts"),
				i = s("./src/reddit/helpers/richTextJson/index.ts"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/models/PostCreationForm/index.ts"),
				c = s("./src/reddit/models/ScheduledPost/index.ts");
			const u = (e, t) => Object(o.a)(e, {
					...a,
					variables: {
						...t,
						includeRecurring: !(!t.includeRecurring || !t.includeRecurring.recurringFirst),
						includeStandalone: !(!t.includeStandalone || !t.includeStandalone.standaloneFirst),
						recurringAfter: t.includeRecurring ? t.includeRecurring.recurringAfter : void 0,
						recurringFirst: t.includeRecurring ? t.includeRecurring.recurringFirst : void 0,
						standaloneAfter: t.includeStandalone ? t.includeStandalone.standaloneAfter : void 0,
						standaloneFirst: t.includeStandalone ? t.includeStandalone.standaloneFirst : void 0
					}
				}),
				m = (e, t) => {
					if (!e.ok || !e.body) return !1;
					const s = e.body;
					return !!(s.data && s.data.subredditInfoById && s.data.subredditInfoById.scheduledPosts && s.data.subredditInfoById.scheduledPosts[t] && s.data.subredditInfoById.scheduledPosts[t].edges)
				},
				p = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => m(e, c.f.standalonePosts))(e)) && !(t.includeRecurring && !(e => m(e, c.f.recurringPosts))(e))),
				h = ({
					poll: e,
					schedule: t,
					submission: s,
					subredditId: n
				}) => ({
					collectionId: s.collectionId || "",
					discussionType: s.isChatPost ? d.b.Chat : d.b.Comment,
					isContestMode: s.isContestMode,
					isPostAsMetaMod: s.isPostAsMetaMod,
					isSpoiler: s.isSpoiler,
					isNsfw: s.isNSFW,
					poll: e && C(e),
					title: s.title,
					isOriginalContent: s.isOC,
					flair: s.flair ? {
						id: s.flair.templateId,
						text: Object(r.g)(s.flair)
					} : {},
					sticky: s.sticky,
					subredditId: n,
					suggestedCommentSort: s.suggestedSort,
					isSendReplies: s.sendReplies,
					...b(t),
					...E(s),
					assetIds: v(s)
				}),
				b = e => ({
					scheduling: {
						publishAt: e.submitDate,
						clientTimezone: e.timezoneName,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					}
				}),
				g = e => ({
					scheduling: Object.keys(e).length > 0 ? {
						clientTimezone: e.timezoneName || void 0,
						publishAt: e.submitDate || void 0,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					} : void 0
				}),
				f = ({
					poll: e,
					schedule: t,
					scheduledPostId: s,
					submission: n,
					subredditId: a
				}) => {
					const o = h({
						poll: e,
						schedule: t,
						submission: n,
						subredditId: a
					});
					return {
						id: s,
						...o,
						flair: Object.keys(o.flair || {}).length ? {
							...o.flair
						} : {
							id: "",
							text: ""
						}
					}
				},
				x = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				E = e => {
					switch (e.kind) {
						case l.o.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case l.o.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case l.o.LINK:
							return {
								content: {}, link: {
									url: x(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				v = e => {
					let t = [];
					if (e.document) {
						const s = e.document || [];
						t = Object(i.c)(s)
					}
					return t
				},
				C = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				_ = (e, t) => Object(o.a)(e, {
					...n,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/graphql/operations/UpdateScheduledPost.json"),
				a = s("./src/lib/makeGqlRequest/index.ts");
			const o = (e, t) => Object(a.a)(e, {
				...n,
				variables: {
					input: t
				}
			})
		},
		"./src/reddit/endpoints/subredditModeration/moderationLog.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/graphql/operations/AllModerators.json"),
				a = s("./src/graphql/operations/FetchModerationLogActions.json"),
				o = s("./src/lib/makeGqlRequest/index.ts");
			const r = (e, t, s) => Object(o.a)(e, {
					...a,
					variables: {
						subredditName: t,
						...s
					}
				}),
				i = (e, t) => Object(o.a)(e, {
					...n,
					variables: {
						subredditName: t
					}
				})
		},
		"./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/Subreddit/index.ts");
			const a = new Set(["goins", "gold_testing", "inthesoulstone", "lounge", "lssgoldnormal", "maymodsguide1", "maymodsguide2", "megalounge", "pan2", "pan3", "venkman_bookclub", "whatssnoo", "translation_piglatin", "translation_pirate", "translation_initials", "translation_german", "translation_british", "translation_french_fr", "translation_es_mx", "translation_br_pt", "german_translation", "lssgoldnormal_13"]),
				o = new Set([n.f.Private, n.f.User]),
				r = e => !(!e || !e.name) && (!!a.has(e.name.toLowerCase()) || !e.isNSFW && !e.isQuarantined && !o.has(e.type));
			t.a = r
		},
		"./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = new Set(["t5_22cerq"]),
				a = e => n.has(e);
			t.a = a
		},
		"./src/reddit/helpers/awards/isEligibleForTemporaryAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = new Set(["t5_q0gj4", "t5_z5gli", "t5_22cerq", "t5_3j0kj"]),
				a = e => n.has(e)
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const a = (e, t) => {
				const s = e.some(e => e.isNSFW),
					a = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !a
			}
		},
		"./src/reddit/helpers/canAccessModerationPage/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts");
			t.a = (e, t, s, a, o) => {
				switch (e) {
					case n.Wb.Awards:
						return !!t;
					case n.Wb.SubredditRules:
					case n.Wb.Moderators:
						return !0;
					case n.Wb.Modlog:
						return !!t;
					case n.Wb.Muted:
						return !!(t && t.access && t.mail);
					case n.Wb.Banned:
					case n.Wb.Contributors:
						return !(!t || !t.access);
					case n.Wb.Flair:
					case n.Wb.PostFlair:
					case n.Wb.UserFlair:
						return !(!t || !t.flair);
					case n.Wb.CommunitySettings:
						return !(!t || !t.config);
					case n.Wb.Modqueue:
					case n.Wb.Reports:
					case n.Wb.Edited:
					case n.Wb.Spam:
					case n.Wb.Unmoderated:
					case n.Wb.ContentControls:
					case n.Wb.Removal:
						return !(!t || !t.posts);
					case n.Wb.ChatSettings:
						return !!t;
					case n.Wb.Badges:
					case n.Wb.Emojis:
						return !!t;
					case n.Wb.Emotes:
						return !(!t || !t.config);
					case n.Wb.Streaming:
						return !!(t && t.all && o);
					case n.Wb.Wiki:
					case n.Wb.WikiBanned:
					case n.Wb.WikiContributors:
						return !(!t || !t.wiki);
					case n.Wb.Traffic:
						return a || !!t;
					case n.Wb.EventPostContent:
					case n.Wb.ScheduledPostContent:
						return !!s;
					case n.Wb.Predictions:
						return !(!t || !t.posts);
					default:
						return !1
				}
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-dnd/lib/index.js"),
				a = s("./node_modules/react-dnd-html5-backend/lib/index.js"),
				o = s.n(a);
			t.a = Object(n.DragDropContext)(o.a)
		},
		"./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/helpers.ts");
			const a = e => {
					const t = [];
					for (const {
							node: s
						} of e.edges) {
						const {
							action: e,
							actionNotes: a,
							createdAt: o,
							details: r,
							id: i,
							moderator: d,
							subredditName: l,
							target: c
						} = s, u = {
							action: e,
							actionNotes: a,
							createdAt: Object(n.d)(o),
							details: r,
							id: i,
							moderator: d,
							subredditName: l,
							target: c
						};
						t.push(u)
					}
					return t
				},
				o = e => {
					const t = [];
					for (const {
							node: s
						} of e.edges) {
						const {
							id: e,
							name: n
						} = s, a = {
							id: e,
							name: n
						};
						t.push(a)
					}
					return t
				}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return b
			}));
			const n = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: p(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: e.subredditInfoById.scheduledPosts.recurringPosts.edges.map(e => e.node.id)
				} : {},
				a = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: u(e.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.standalonePosts.pageInfo
						}
					},
					standalonePostsIds: e.subredditInfoById.scheduledPosts.standalonePosts.edges.map(e => e.node.id)
				} : {},
				o = e => ({
					...e,
					subredditInfoById: {
						id: e.subredditInfoById.id,
						scheduledPosts: {
							...n(e),
							...a(e)
						}
					}
				}),
				r = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				i = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				d = e => r(e) && i(e),
				l = e => !r(e) && i(e),
				c = e => r(e) && !i(e),
				u = e => e.map(e => m(e.node)),
				m = e => ({
					id: e.id,
					title: e.title,
					body: e.body,
					postKind: e.postKind,
					collectionId: e.collections.edges.length ? e.collections.edges[0].node.id : void 0,
					discussionType: e.discussionType,
					isContestMode: e.isContestMode,
					isPostAsMetaMod: e.isPostAsMetaMod,
					isSpoiler: e.isSpoiler,
					isNsfw: e.isNsfw,
					isOriginalContent: e.isOriginalContent,
					isSendReplies: e.isSendReplies,
					isSticky: !!e.sticky && "NONE" !== e.sticky,
					mediaAssets: e.mediaAssets,
					subreddit: {
						...e.subreddit
					},
					suggestedCommentSort: e.suggestedCommentSort,
					owner: {
						...e.owner
					},
					poll: e.poll,
					contentType: e.contentType,
					clientTimezone: e.clientTimezone,
					publishAt: e.publishAt.split(".")[0],
					state: e.state,
					flair: e.flair ? {
						...e.flair
					} : void 0,
					sticky: e.sticky,
					isModDistinguished: "MODERATOR" === e.distinguishedAs,
					url: e.url
				}),
				p = e => e.map(e => h(e.node)),
				h = e => ({
					...m(e),
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				b = e => (e => !!e.frequency && !!e.interval)(e) ? h(e) : m(e)
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/isValidUsername/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/helpers/normalizeUsername/index.tsx");
			t.a = e => {
				const t = Object(n.a)(e.trim());
				return t.length > 2 && t.length <= 20
			}
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return C
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/isUrl/index.ts"),
				i = s("./src/lib/logs/console.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/models/Media/index.ts");
			const c = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("reddit-components-BlankPost")]).then(s.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/BlankPost/index.tsx"
					}
				}),
				u = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ClassicPost/index.tsx"
					}
				}),
				m = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CompactPost/index.tsx"
					}
				}),
				p = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), s.e("Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/LargePost/index.tsx"
					}
				}),
				h = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), s.e("Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/MediumPost/index.tsx"
					}
				}),
				b = {
					[d.g.Large]: p,
					[d.g.Medium]: h,
					[d.g.Classic]: u,
					[d.g.Compact]: m
				},
				g = e => o.a.createElement(c, e),
				f = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com", "https://www.bestbuy.com", "https://www.goarmy.com", "https://www.samsung.com", "https://www.cyberpunk.net"],
				x = e => e.source && e.source.url && e.isSponsored && f.some(t => e.source.url.startsWith(t)),
				E = e => !e.media || e.media.type === l.o.EMBED && !(l.b.has(e.media.provider) || x(e)),
				v = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case d.g.Medium:
							return 188;
						case d.g.Classic:
							return 96;
						case d.g.Compact:
							return 32;
						default:
							return 200
					}
				};

			function C({
				isCrosspost: e,
				isFirstPost: t,
				layout: s,
				post: n
			}) {
				if (n.isBlank) return g;
				const a = !n.media && !!n.source && Object(r.a)(n.source.url),
					o = e && a;
				s === d.g.Large && E(n) && !o && (s = d.g.Medium);
				const l = b[s];
				return void 0 === l ? (Object(i.a)(void 0, `Could not find component for layout ${s}.`), g) : t && n.isSponsored && s === d.g.Large ? h : l
			}
		},
		"./src/reddit/helpers/readOnlyMode/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return a
				})), s.d(t, "c", (function() {
					return o
				})),
				function(e) {
					e.editable = "editable", e.focusableReadOnly = "focusablereadonly", e.readOnly = "readonly"
				}(n || (n = {}));
			const a = e => o(e) || e === n.focusableReadOnly,
				o = e => e === n.readOnly
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, s) {
			e.exports = {
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
				largeAndMediumPostStyles: "_3Qkp11fjcAw9I9wtLo8frE",
				baseClassicAndCompactPostStyles: "_2yN8L-c8UBoKxHn0-vg_dS",
				baseSubredditStyles: "_2zRMh6o0BucltCL6o64pa4",
				classicAndCompactActiveStyles: "_1Accc3h2AW0sB8E4CcEz2n",
				mIsActive: "_1LmKpEAguLZV4jQMgQSFVL",
				classicAndCompactPlaceholderStyles: "_3joKifdh6j3tG_vsgFS85R",
				mUseRedditTheme: "_1nQXomgzQ2rnBsRU2iZ00l",
				largeAndMediumActiveStyles: "_1qftyZQ2bhqP62lbPjoGAh",
				singleLineEllipsis: "_2RFRmGwuh0BemW7iUA3-VB"
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				r = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				c = s.n(l);
			const u = {},
				m = e => Object(i.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				h = e => Object(n.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : u,
				g = e => e.isActive ? c.a.mIsActive : void 0,
				f = e => {
					const t = Object(o.a)(Object(a.a)(e), r.a.actionIcon, r.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(a);
			const r = ({
					isLoading: e
				}) => Object(n.a)(o.a.loadingBackground, {
					[o.a["m-loading"]]: e
				}),
				i = e => Object(n.a)(o.a.loadingBar, r(e))
		},
		"./src/reddit/helpers/trackers/communitySettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "f", (function() {
				return f
			}));
			var n = s("./node_modules/lodash/snakeCase.js"),
				a = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = {
					contentOptions: "link_type",
					contentVisible: "allow_top",
					subredditType: "type",
					welcomeMessageText: "welcome_message"
				},
				d = {
					allowChatPostCreation: o.Xb.Posts,
					allowDiscovery: o.Xb.Safety,
					allowGalleries: o.Xb.Posts,
					allowImages: o.Xb.Posts,
					allowPolls: o.Xb.Posts,
					allowPostCrossposts: o.Xb.Posts,
					collapseDeletedComments: o.Xb.Posts,
					commentScoreHideMins: o.Xb.Posts,
					contentOptions: o.Xb.Posts,
					contentVisible: o.Xb.Safety,
					crowdControlChatLevel: o.Xb.Safety,
					crowdControlLevel: o.Xb.Safety,
					crowdControlMode: o.Xb.Safety,
					disableContributorRequests: o.Xb.Community,
					excludeBannedModqueue: o.Xb.Safety,
					over18: o.Xb.Community,
					publicDescription: o.Xb.Community,
					restrictCommenting: o.Xb.Community,
					restrictPosting: o.Xb.Community,
					spamComments: o.Xb.Posts,
					spamLinks: o.Xb.Posts,
					spamSelfposts: o.Xb.Posts,
					spoilersEnabled: o.Xb.Posts,
					subredditType: o.Xb.Community,
					suggestedCommentSort: o.Xb.Posts,
					toxicityThresholdChatLevel: o.Xb.Safety,
					welcomeMessageEnabled: o.Xb.Community,
					welcomeMessageText: o.Xb.Community,
					wikiEditAge: o.Xb.Wikis,
					wikiEditKarma: o.Xb.Wikis,
					wikimode: o.Xb.Wikis
				},
				l = {
					[o.Xb.Community]: "community_settings_details",
					[o.Xb.Notifications]: "community_settings_notifications",
					[o.Xb.Safety]: "community_settings_safety",
					[o.Xb.Posts]: "community_settings_content",
					[o.Xb.Wikis]: "community_settings_wiki",
					[o.Xb.ContentTag]: "content_tag"
				},
				c = e => i[e] || a()(e),
				u = e => {
					const t = d[e];
					return t && l[t] || "community_settings"
				},
				m = (e, t, s) => n => ({
					source: u(e),
					action: "click",
					noun: c(e),
					setting: {
						value: String(t),
						oldValue: String(s)
					},
					subreddit: r.subreddit(n),
					...r.defaults(n)
				}),
				p = (e, t, s) => n => ({
					source: u(e),
					action: "save",
					noun: c(e),
					setting: {
						value: String(t),
						oldValue: String(s)
					},
					subreddit: r.subreddit(n),
					...r.defaults(n)
				}),
				h = e => t => ({
					source: "community_settings",
					action: "click",
					noun: l[e],
					...r.defaults(t)
				}),
				b = e => t => ({
					source: l[e],
					action: "click",
					noun: "r2_community_settings",
					...r.defaults(t)
				}),
				g = () => e => ({
					...r.defaults(e),
					source: "mod_tools",
					action: "click",
					noun: "welcome_message_preview",
					subreddit: r.subreddit(e),
					actionInfo: r.actionInfo(e, {
						reason: "welcome_message"
					})
				}),
				f = (e, t, s, n) => a => ({
					...r.defaults(a),
					source: "mod_tools",
					action: e,
					noun: t,
					...void 0 !== s && void 0 !== n && {
						setting: {
							value: String(s),
							oldValue: String(n)
						}
					},
					subreddit: r.subreddit(a),
					actionInfo: r.actionInfo(a, {
						reason: "welcome_message"
					})
				})
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return n
			})), s.d(t, "g", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "l", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "j", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "i", (function() {
				return c
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "n", (function() {
				return m
			})), s.d(t, "m", (function() {
				return p
			})), s.d(t, "k", (function() {
				return h
			})), s.d(t, "o", (function() {
				return b
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			}));
			const n = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				a = () => () => ({
					source: "content_tag",
					action: "click",
					noun: "verify_topics_module"
				}),
				o = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				r = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				i = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "mature_themes_prompt",
					actionInfo: {
						pageType: "survey_mature_themes"
					}
				}),
				d = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: e,
					actionInfo: {
						pageType: e
					}
				}),
				l = e => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "survey_answer",
					actionInfo: {
						pageType: e
					}
				}),
				c = (e, t) => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "next",
					actionInfo: {
						reason: t.join(),
						pageType: e
					}
				}),
				u = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "back",
					actionInfo: {
						pageType: e
					}
				}),
				m = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_summary",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				p = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "submit_survey",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				h = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_review",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				b = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "take_survey",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				g = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				f = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/helpers/trackers/emailInvite.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					source: e,
					action: "click",
					noun: "invite_via_email",
					...a.defaults(t),
					subreddit: a.subreddit(t),
					actionInfo: a.actionInfo(t),
					correlationId: Object(n.d)(n.a.SubredditCreation, !1)
				}),
				r = () => e => ({
					source: "email_invite_painted_door",
					action: "view",
					noun: "modal",
					...a.defaults(e),
					subreddit: a.subreddit(e),
					actionInfo: a.actionInfo(e),
					correlationId: Object(n.c)(n.a.SubredditCreation)
				}),
				i = e => t => ({
					source: "email_invite_painted_door",
					action: "click",
					noun: e,
					...a.defaults(t),
					subreddit: a.subreddit(t),
					actionInfo: a.actionInfo(t),
					correlationId: Object(n.c)(n.a.SubredditCreation)
				})
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					profile: n.profile(e),
					userSubreddit: n.userSubreddit(e)
				}),
				o = e => t => ({
					source: "mod_hub_nav",
					action: "click",
					noun: e,
					...a(t)
				}),
				r = () => e => ({
					source: "breadcrumb",
					action: "click",
					noun: "subreddit",
					...a(e)
				}),
				i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "mod_hub_nav",
					...a(e)
				})
		},
		"./src/reddit/helpers/trackers/moderationPages.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: a.screen(e),
					profile: a.profile(e),
					subreddit: a.subreddit(e)
				}),
				r = e => {
					switch (e) {
						case n.Wb.Banned:
							return "banned";
						case n.Wb.Muted:
							return "muted";
						case n.Wb.Contributors:
							return "contributors";
						case n.Wb.Moderators:
							return "modmanagement";
						case n.Wb.Removal:
							return "set_removal_reasons";
						case n.Wb.CommunitySettings:
							return "edit";
						default:
							return e
					}
				},
				i = (e, t) => s => ({
					source: r(t),
					noun: e,
					action: "click",
					...o(s)
				}),
				d = e => t => ({
					source: r(e),
					noun: "hover_user_hovercard",
					action: "view",
					...o(t)
				})
		},
		"./src/reddit/helpers/validateFlairCssClass.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/reddit/constants/flair.ts");
			const o = new RegExp(`^[a-zA-Z0-9-]{1,${a.f}}$`);
			t.a = e => {
				if (!e) return;
				const t = e.split(" ").filter(Boolean);
				if (t.length > a.c) return n.fbt._("Too many class names", null, {
					hk: "musK5"
				});
				const s = t.find(e => !e.match(o));
				return s ? s.length > a.f ? n.fbt._("Class name should not be longer than 100 characters", null, {
					hk: "2nBmgP"
				}) : n.fbt._("Class name contains an invalid character", null, {
					hk: "4kdVCU"
				}) : void 0
			}
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/sortBy.js"),
				a = s.n(n),
				o = s("./src/reddit/constants/wiki.ts");
			const r = e => {
				return a()(e, e => `${e.path}/`.startsWith(`${o.i}/`) ? `\0${e.path}` : e.path).filter(e => !o.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					s = [];
				return r(e).forEach(e => {
					const n = {
							...e,
							children: []
						},
						a = n.parent ? t.get(n.parent) : null;
					a ? a.children.push(n) : s.push(n), t.set(n.path, n)
				}), s
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: s,
					subredditName: n,
					wikiPageName: a
				} = e;
				return `[${n}]--[${a}]--[rev1:${s}]--[rev2:${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeRevisionsListingKey.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				const t = e.isRecent ? "(recent)" : e.wikiPageName;
				return `[${e.subredditName}]--[${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeWikiPageKey.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				let t = `[${e.subredditName}]--[${e.wikiPageName}]`;
				return e.revisionId && (t += `--[rev:${e.revisionId}]`), t.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/validatePageName.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/wiki.ts");
			const a = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${n.c}}$`),
				o = /^[-\w]+$/;
			var r;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(r || (r = {}));
			const i = e => {
					if (!o.test(e.toLowerCase())) return r.InvalidPageName
				},
				d = (e, t) => {
					const s = e.toLowerCase(),
						o = s.split("/")[0],
						i = n.b.has(o),
						d = n.f.has(o) && s !== n.h && s !== n.k;
					if (i || d) return r.RestrictedPageName;
					if (!a.test(s)) return r.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === s)) return r.PageAlreadyExists
					}
					return s.length > n.d ? r.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				a = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				a = s("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(n.useContext)(a.a);
				return e
			}
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function o() {
				return Object(n.useContext)(a.a)
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				d = s.n(i);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(o.a)();
				return a.a.createElement("i", {
					className: `${Object(r.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", d.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				d = s.n(i);
			t.a = e => {
				const t = Object(o.a)();
				return a.a.createElement("i", {
					className: `${Object(r.b)(t?"message":"envelope",e.isFilled)} ${d.a.Envelope} ${e.className}`
				})
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(r),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const c = d.a.wrapped(e => {
				const t = Object(l.a)();
				return a.a.createElement("i", {
					className: `${Object(o.b)(t?"collapse":"expandoArrowCollapse",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "CollapseIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(r),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const c = d.a.wrapped(e => {
				const t = Object(l.a)();
				return a.a.createElement("i", {
					className: `${Object(o.b)(t?"expand":"expandoArrowExpand",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "ExpandIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				i = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: `${Object(o.b)("expandoMediaLightbox",e.isFilled)} ${e.className}`,
				onClick: e.onClick
			}), "LightboxIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				i = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: `${Object(o.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M17,4 C17.552,4 18,4.448 18,5 L18,8 L18,17 C18,17.552 17.552,18 17,18 L3,18 C2.448,18 2,17.552 2,17 L2,8 L2,5 C2,4.448 2.448,4 3,4 L5,4 L5,3 C5,2.448 5.448,2 6,2 C6.552,2 7,2.448 7,3 L7,4 L13,4 L13,3 C13,2.448 13.448,2 14,2 C14.552,2 15,2.448 15,3 L15,4 L17,4 Z M4,16 L16,16 L16,9 L4,9 L4,16 Z"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/CheckmarkFitted/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "3 4 14 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, s) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, a.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, a.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Collection/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, a.a.createElement("path", {
				d: "M14 0H2a2 2 0 0 0-2 2v.78A2.979 2.979 0 0 1 2 2h12c.77 0 1.468.301 2 .78V2a2 2 0 0 0-2-2zm0 3H2a2 2 0 0 0-2 2v.78A2.979 2.979 0 0 1 2 5h12c.77 0 1.468.301 2 .78V5a2 2 0 0 0-2-2zM2 6h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
			})))
		},
		"./src/reddit/icons/svgs/Event/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, a.a.createElement("path", {
				d: "M4 16h12V9H4v7zM17 4h-2V3a1 1 0 0 0-2 0v1H7V3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function o(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Gild/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("g", {
				stroke: "none",
				strokeWidth: "1",
				fillRule: "evenodd"
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "m15.1275768 8.9935-2.059 2.204.371 2.992c.022.181-.055.359-.203.466-.087.064-.19.096-.294.096-.072 0-.144-.016-.211-.047l-2.73200003-1.277-2.731 1.277c-.164.076-.359.059-.506-.049-.148-.107-.225-.285-.202-.466l.37-2.992-2.059-2.204c-.124-.133-.166-.323-.11-.496s.202-.302.381-.336l2.96-.573 1.46-2.639c.175-.318.69900003-.318.87500003 0l1.46 2.639 2.959.573c.179.034.325.163.381.336s.014.363-.11.496m2.911-2.985-6.586-4.786c-.869-.63-2.03700003-.63-2.90600003 0v.001l-6.586 4.785c-.869.631-1.23 1.742-.898 2.764l2.515 7.743c.332 1.021 1.278 1.708 2.352 1.708h8.14000003c1.075 0 2.02-.687 2.352-1.708l2.516-7.743c.332-1.022-.03-2.133-.899-2.764"
			}))))
		},
		"./src/reddit/icons/svgs/Grapple/index.m.less": function(e, t, s) {
			e.exports = {
				grapple: "_23XYJUJn_XitrV-LLkNyCQ",
				mIsDragging: "_1jCsYjqdUw4PYY-s3mGB47"
			}
		},
		"./src/reddit/icons/svgs/Grapple/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Grapple/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.grapple, {
					[i.a.mIsDragging]: e.isDragging
				}),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8,2 C8.553,2 9,2.447 9,3 L9,5 C9,5.553 8.553,6 8,6 L6,6 C5.447,6 5,5.553 5,5 L5,3 C5,2.447 5.447,2 6,2 L8,2 Z M14,2 C14.553,2 15,2.447 15,3 L15,5 C15,5.553 14.553,6 14,6 L12,6 C11.447,6 11,5.553 11,5 L11,3 C11,2.447 11.447,2 12,2 L14,2 Z M8,8 C8.553,8 9,8.447 9,9 L9,11 C9,11.553 8.553,12 8,12 L6,12 C5.447,12 5,11.553 5,11 L5,9 C5,8.447 5.447,8 6,8 L8,8 Z M14,8 C14.553,8 15,8.447 15,9 L15,11 C15,11.553 14.553,12 14,12 L12,12 C11.447,12 11,11.553 11,11 L11,9 C11,8.447 11.447,8 12,8 L14,8 Z M8,14 C8.553,14 9,14.447 9,15 L9,17 C9,17.553 8.553,18 8,18 L6,18 C5.447,18 5,17.553 5,17 L5,15 C5,14.447 5.447,14 6,14 L8,14 Z M14,14 C14.553,14 15,14.447 15,15 L15,17 C15,17.553 14.553,18 14,18 L12,18 C11.447,18 11,17.553 11,17 L11,15 C11,14.447 11.447,14 12,14 L14,14 Z"
			})))
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), a.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/List/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fillRule: "evenodd",
				d: "M17,9.4802 C17.553,9.4802 18,9.9272 18,10.4802 C18,11.0332 17.553,11.4802 17,11.4802 L8,11.4802 C7.447,11.4802 7,11.0332 7,10.4802 C7,9.9272 7.447,9.4802 8,9.4802 L17,9.4802 Z M17,15.4802 C17.553,15.4802 18,15.9272 18,16.4802 C18,17.0332 17.553,17.4802 17,17.4802 L8,17.4802 C7.447,17.4802 7,17.0332 7,16.4802 C7,15.9272 7.447,15.4802 8,15.4802 L17,15.4802 Z M8,5.4802 C7.447,5.4802 7,5.0332 7,4.4802 C7,3.9272 7.447,3.4802 8,3.4802 L13.161,3.4802 L17,3.4802 C17.553,3.4802 18,3.9272 18,4.4802 C18,5.0332 17.553,5.4802 17,5.4802 L13.161,5.4802 L8,5.4802 Z M4.8799,9.9099 C4.9199,9.9999 4.9499,10.0899 4.9699,10.1899 C4.9899,10.2799 4.9999,10.3799 4.9999,10.4799 C4.9999,10.8799 4.8399,11.2609 4.5599,11.5399 C4.4199,11.6809 4.2599,11.7899 4.0689,11.8699 C3.8899,11.9399 3.6999,11.9799 3.4999,11.9799 C3.0999,11.9799 2.7199,11.8199 2.4399,11.5399 C2.1599,11.2609 1.9999,10.8799 1.9999,10.4799 C1.9999,10.3799 2.0099,10.2799 2.0299,10.1899 C2.0499,10.0899 2.0799,9.9999 2.1089,9.9099 C2.1499,9.8199 2.1999,9.7299 2.2499,9.6499 C2.3099,9.5699 2.3699,9.4899 2.4399,9.4199 C2.9999,8.8599 4.0099,8.8599 4.5599,9.4199 C4.6299,9.4899 4.6899,9.5699 4.7499,9.6499 C4.7999,9.7299 4.8499,9.8199 4.8799,9.9099 Z M4.3301,15.2302 C4.4101,15.2902 4.4901,15.3502 4.5591,15.4192 C4.8401,15.7002 5.0001,16.0802 5.0001,16.4802 C5.0001,16.8792 4.8401,17.2502 4.5591,17.5402 C4.4201,17.6802 4.2501,17.7902 4.0691,17.8702 C3.8901,17.9402 3.7001,17.9802 3.5001,17.9802 C3.3001,17.9802 3.1091,17.9402 2.9301,17.8702 C2.7401,17.7902 2.5801,17.6802 2.4391,17.5402 C2.1491,17.2502 2.0001,16.8792 2.0001,16.4802 C2.0001,16.0892 2.1601,15.7002 2.4391,15.4192 C2.5101,15.3502 2.5901,15.2902 2.6701,15.2302 C2.7501,15.1802 2.8401,15.1292 2.9301,15.0892 C3.0191,15.0602 3.1091,15.0302 3.2101,15.0102 C3.3991,14.9702 3.6001,14.9702 3.7901,15.0102 C3.8901,15.0302 3.9791,15.0602 4.0691,15.0892 C4.1601,15.1292 4.2501,15.1802 4.3301,15.2302 Z M2.4395,3.4197 C2.9905,2.8597 4.0095,2.8597 4.5595,3.4197 C4.8395,3.6997 5.0005,4.0897 5.0005,4.4807 C5.0005,4.8797 4.8395,5.2497 4.5595,5.5397 C4.4195,5.6807 4.2595,5.7897 4.0695,5.8697 C3.8895,5.9407 3.7005,5.9807 3.5005,5.9807 C3.2995,5.9807 3.1095,5.9407 2.9195,5.8697 C2.7405,5.7897 2.5805,5.6807 2.4395,5.5397 C2.1495,5.2497 2.0005,4.8797 2.0005,4.4807 C2.0005,4.0897 2.1605,3.6997 2.4395,3.4197 Z"
			})))
		},
		"./src/reddit/icons/svgs/Location/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 13 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-4 -2)"
			}))
		},
		"./src/reddit/icons/svgs/ModLogPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, a.a.createElement("path", {
				d: "M15.5,7.75 L12.5,7.75 C12.224,7.75 12,7.526 12,7.25 C12,6.974 12.224,6.75 12.5,6.75 L15.5,6.75 C15.776,6.75 16,6.974 16,7.25 C16,7.526 15.776,7.75 15.5,7.75 Z M15.5,10.5 L12.5,10.5 C12.224,10.5 12,10.276 12,10 C12,9.724 12.224,9.5 12.5,9.5 L15.5,9.5 C15.776,9.5 16,9.724 16,10 C16,10.276 15.776,10.5 15.5,10.5 Z M15.5,13.25 L4.5,13.25 C4.224,13.25 4,13.026 4,12.75 C4,12.474 4.224,12.25 4.5,12.25 L15.5,12.25 C15.776,12.25 16,12.474 16,12.75 C16,13.026 15.776,13.25 15.5,13.25 Z M4.5,16 C4.224,16 4,15.776 4,15.5 C4,15.224 4.224,15 4.5,15 L15.5,15 C15.776,15 16,15.224 16,15.5 C16,15.776 15.776,16 15.5,16 L4.5,16 Z M4,4.5 C4,4.224 4.224,4 4.5,4 L9.813,4 C10.089,4 10.313,4.224 10.313,4.5 L10.313,10 C10.313,10.276 10.089,10.5 9.813,10.5 L4.5,10.5 C4.224,10.5 4,10.276 4,10 L4,4.5 Z M3,2 C2.447,2 2,2.447 2,3 L2,17 C2,17.553 2.447,18 3,18 L17,18 C17.553,18 18,17.553 18,17 L18,3 C18,2.447 17.553,2 17,2 L3,2 Z"
			})))
		},
		"./src/reddit/icons/svgs/ModQueues/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M6.0156,4.0156 L15.4926,4.0156 C15.6686,4.0156 15.8366,4.0456 15.9996,4.0886 L15.9996,2.9996 C15.9996,2.4476 15.5526,1.9996 14.9996,1.9996 L2.9996,1.9996 C2.4476,1.9996 1.9996,2.4476 1.9996,2.9996 L1.9996,14.9996 C1.9996,15.5526 2.4476,15.9996 2.9996,15.9996 L4.0886,15.9996 C4.0456,15.8366 4.0156,15.6686 4.0156,15.4926 L4.0156,6.0156 C4.0156,4.9116 4.9116,4.0156 6.0156,4.0156 M17,5 C17.553,5 18,5.447 18,6 L18,17 C18,17.553 17.553,18 17,18 L6,18 C5.447,18 5,17.553 5,17 L5,6 C5,5.447 5.447,5 6,5 L17,5 Z M15.5,12 L15.5,8.5 C15.5,8.276 15.352,8.081 15.138,8.02 L11.638,7.02 C11.548,6.994 11.452,6.994 11.362,7.02 L7.862,8.02 C7.648,8.081 7.5,8.276 7.5,8.5 L7.5,12 C7.5,14.845 11.205,15.936 11.362,15.98 C11.407,15.993 11.454,16 11.5,16 C11.546,16 11.593,15.993 11.638,15.98 C11.795,15.936 15.5,14.845 15.5,12 Z"
			}))
		},
		"./src/reddit/icons/svgs/Modmail/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = ({
				className: e
			}) => a.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M15,12 C15,13.103 14.103,14 13,14 L7,14 C5.897,14 5,13.103 5,12 L5,8 C5,7.886 5.016,7.776 5.033,7.668 L9.063,10.891 C9.339,11.111 9.669,11.222 10,11.222 C10.331,11.222 10.661,11.111 10.938,10.891 L14.967,7.668 C14.984,7.776 15,7.886 15,8 L15,12 Z M7,6 L13,6 C13.619,6 14.167,6.289 14.534,6.732 L10.313,10.109 C10.131,10.254 9.869,10.254 9.688,10.109 L5.466,6.732 C5.833,6.289 6.381,6 7,6 Z M17.274,3.038 L10.274,1.038 C10.095,0.987 9.905,0.987 9.726,1.038 L2.726,3.038 C2.296,3.161 2,3.554 2,4 L2,11 C2,16.688 9.41,18.871 9.726,18.962 C9.815,18.987 9.907,19 10,19 C10.093,19 10.185,18.987 10.274,18.962 C10.59,18.871 18,16.688 18,11 L18,4 C18,3.554 17.704,3.161 17.274,3.038 Z"
			}))
		},
		"./src/reddit/icons/svgs/Negative/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 10 10"
			}, a.a.createElement("path", {
				d: "M2,0 L8,0 C9.1045695,-2.02906125e-16 10,0.8954305 10,2 L10,8 C10,9.1045695 9.1045695,10 8,10 L2,10 C0.8954305,10 1.3527075e-16,9.1045695 0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M6.2103,5.78636 C6.3275,5.90356 6.3275,6.09356 6.2103,6.21076 C6.1519,6.26916 6.0751,6.29836 5.9983,6.29836 C5.9211,6.29836 5.8447,6.26916 5.7859,6.21076 L4.9983,5.42276 L4.2103,6.21076 C4.1519,6.26916 4.0751,6.29836 3.9983,6.29836 C3.9211,6.29836 3.8447,6.26916 3.7859,6.21076 C3.6687,6.09356 3.6687,5.90356 3.7859,5.78636 L4.5739,4.99836 L3.7859,4.21076 C3.6687,4.09356 3.6687,3.90356 3.7859,3.78636 C3.9031,3.66916 4.0931,3.66916 4.2103,3.78636 L4.9983,4.57436 L5.7859,3.78636 C5.9031,3.66916 6.0931,3.66916 6.2103,3.78636 C6.3275,3.90356 6.3275,4.09356 6.2103,4.21076 L5.4223,4.99836 L6.2103,5.78636 Z M7.4023,2.59436 C6.0767,1.26836 3.9195,1.26916 2.5939,2.59436 C1.2687,3.91996 1.2687,6.07716 2.5939,7.40276 C3.2567,8.06556 4.1275,8.39676 4.9983,8.39676 C5.8687,8.39676 6.7395,8.06556 7.4023,7.40276 C8.7279,6.07716 8.7279,3.91996 7.4023,2.59436 Z"
			}))
		},
		"./src/reddit/icons/svgs/Positive/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 10 10"
			}, a.a.createElement("path", {
				d: "M2,0 L8,0 C9.1045695,-2.02906125e-16 10,0.8954305 10,2 L10,8 C10,9.1045695 9.1045695,10 8,10 L2,10 C0.8954305,10 1.3527075e-16,9.1045695 0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M8.0828,3.27736 L7.5232,2.71736 C7.448,2.64216 7.3464,2.60016 7.2404,2.60016 C7.134,2.60016 7.0324,2.64216 6.9576,2.71736 L4.16,5.51456 L3.0428,4.39736 C2.8868,4.24096 2.6336,4.24096 2.4772,4.39736 L1.9172,4.95736 C1.7608,5.11376 1.7608,5.36696 1.9172,5.52296 L3.8772,7.48296 C3.9556,7.56096 4.0576,7.60016 4.16,7.60016 C4.2624,7.60016 4.3648,7.56096 4.4428,7.48296 L8.0828,3.84296 C8.2392,3.68656 8.2392,3.43376 8.0828,3.27736 Z"
			}))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), a.a.createElement("g", null, a.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Rules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 30 30",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M20.7094669,9.4275 L9.29053307,9.4275 C8.86319398,9.4275 8.51636806,9.0915 8.51636806,8.6775 C8.51636806,8.2635 8.86319398,7.9275 9.29053307,7.9275 L20.7094669,7.9275 C21.136806,7.9275 21.4836319,8.2635 21.4836319,8.6775 C21.4836319,9.0915 21.136806,9.4275 20.7094669,9.4275 M20.7094669,14.142 L9.29053307,14.142 C8.86319398,14.142 8.51636806,13.806 8.51636806,13.392 C8.51636806,12.978 8.86319398,12.642 9.29053307,12.642 L20.7094669,12.642 C21.136806,12.642 21.4836319,12.978 21.4836319,13.392 C21.4836319,13.806 21.136806,14.142 20.7094669,14.142 M20.7094669,18.858 L9.29053307,18.858 C8.86319398,18.858 8.51636806,18.522 8.51636806,18.108 C8.51636806,17.6925 8.86319398,17.358 9.29053307,17.358 L20.7094669,17.358 C21.136806,17.358 21.4836319,17.6925 21.4836319,18.108 C21.4836319,18.522 21.136806,18.858 20.7094669,18.858 M20.7094669,23.5725 L9.29053307,23.5725 C8.86319398,23.5725 8.51636806,23.2365 8.51636806,22.8225 C8.51636806,22.407 8.86319398,22.0725 9.29053307,22.0725 L20.7094669,22.0725 C21.136806,22.0725 21.4836319,22.407 21.4836319,22.8225 C21.4836319,23.2365 21.136806,23.5725 20.7094669,23.5725 M23.95167,4.5 L20.4570891,4.5 C19.9198186,3.6075 18.9335324,3 17.7893165,3 L12.2106835,3 C11.0664676,3 10.0801814,3.6075 9.54291086,4.5 L6.04833002,4.5 C5.19365185,4.5 4.5,5.172 4.5,6 L4.5,25.5 C4.5,26.328 5.19365185,27 6.04833002,27 L23.95167,27 C24.8063482,27 25.5,26.328 25.5,25.5 L25.5,6 C25.5,5.172 24.8063482,4.5 23.95167,4.5"
			})))
		},
		"./src/reddit/icons/svgs/Statistics/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = ({
				className: e
			}) => a.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M1,8 C1.552,8 2,8.448 2,9 L2,14 C2,14.552 1.552,15 1,15 C0.448,15 0,14.552 0,14 L0,9 C0,8.448 0.448,8 1,8 Z M5.6665,5 C6.2185,5 6.6665,5.448 6.6665,6 L6.6665,14 C6.6665,14.552 6.2185,15 5.6665,15 C5.1145,15 4.6665,14.552 4.6665,14 L4.6665,6 C4.6665,5.448 5.1145,5 5.6665,5 Z M10.3335,3 C10.8855,3 11.3335,3.448 11.3335,4 L11.3335,14 C11.3335,14.552 10.8855,15 10.3335,15 C9.7815,15 9.3335,14.552 9.3335,14 L9.3335,4 C9.3335,3.448 9.7815,3 10.3335,3 Z M15,0 C15.552,0 16,0.448 16,1 L16,14 C16,14.552 15.552,15 15,15 C14.448,15 14,14.552 14,14 L14,1 C14,0.448 14.448,0 15,0 Z"
			}))
		},
		"./src/reddit/icons/svgs/Trash/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, a.a.createElement("g", null, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("polygon", {
				points: "10,38.8 30,38.8 31.2,10.9 8.7,10.9"
			}), a.a.createElement("path", {
				d: "M27.5,3.8H25c0-1.4-1.1-2.5-2.5-2.5h-5c-1.4,0-2.5,1.1-2.5,2.5h-2.5c-2.8,0-5,2.2-5,5h25C32.5,6,30.3,3.8,27.5,3.8z"
			}))))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/icons/svgs/Wiki/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, a.a.createElement("path", {
				d: "M13.8711,6 L5.8711,6 C5.5951,6 5.3711,5.776 5.3711,5.5 C5.3711,5.224 5.5951,5 5.8711,5 L13.8711,5 C14.1471,5 14.3711,5.224 14.3711,5.5 C14.3711,5.776 14.1471,6 13.8711,6 M13.8711,9 L5.8711,9 C5.5951,9 5.3711,8.776 5.3711,8.5 C5.3711,8.224 5.5951,8 5.8711,8 L13.8711,8 C14.1471,8 14.3711,8.224 14.3711,8.5 C14.3711,8.776 14.1471,9 13.8711,9 M13.8711,12 L5.8711,12 C5.5951,12 5.3711,11.776 5.3711,11.5 C5.3711,11.224 5.5951,11 5.8711,11 L13.8711,11 C14.1471,11 14.3711,11.224 14.3711,11.5 C14.3711,11.776 14.1471,12 13.8711,12 M13.8711,15 L5.8711,15 C5.5951,15 5.3711,14.776 5.3711,14.5 C5.3711,14.224 5.5951,14 5.8711,14 L13.8711,14 C14.1471,14 14.3711,14.224 14.3711,14.5 C14.3711,14.776 14.1471,15 13.8711,15 M16.0001,2 L4.0001,2 C3.4471,2 3.0001,2.448 3.0001,3 L3.0001,17 C3.0001,17.552 3.4471,18 4.0001,18 L16.0001,18 C16.5531,18 17.0001,17.552 17.0001,17 L17.0001,3 C17.0001,2.448 16.5531,2 16.0001,2"
			})))
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				o = s.n(a);
			t.a = n.a.div("rightAligned", o.a)
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "h", (function() {
				return u
			}));
			var n = s("./src/reddit/helpers/isPost.ts");
			const a = 20,
				o = 50,
				r = 1e4,
				i = 100;
			var d, l;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(l || (l = {}));
			const c = e => 1 === e.length ? Object(n.a)(e[0]) ? l.Post : l.Comment : l.Bulk,
				u = (e, t) => {
					return {
						[t === l.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/models/SubredditModeration/ModerationLog/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t, s) => `${e}-${((e,t)=>t||e||"1")(s,t)}`
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, a;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(a || (a = {}))
		},
		"./src/reddit/models/TrafficStats/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			}));
			const n = 97,
				a = 57,
				o = 12;
			var r;
			! function(e) {
				e.TOTAL = "total", e.DESKTOP = "desktop", e.OLD_REDDIT = "oldReddit", e.IOS = "apps", e.ANDROID = "apps", e.MOBILE_WEB = "mWeb"
			}(r || (r = {}))
		},
		"./src/reddit/pages/ModHub/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_2WsiFpk8Yr5G2mp45qaGCa",
				titleFontH2: "_3oXE2EKQ3PsqyyApE-s3aj",
				titleFontH3: "_17o-6Y7vVLdL6oVMkFWo0m",
				titleFontH4: "uPBfC6MDaNJ-ozFZg2PFk",
				titleFontH5: "si3j-_p1olO8M1E2zoXjC",
				titleFontH6: "_14LzReKyHQwLHa-Rye3bAv",
				metadataFont: "_2NmVHGIdF8GNcMPPaHtwzz",
				flairFont: "D_gevKcOJSKbb6VlvHPj_",
				labelsFont: "_27eE-dU25b8hwKWg4bTqFz",
				actionFont: "_2dfa5IRwlqKVb61Lr36T98",
				smallButtonFont: "_20OTyO3PvAmgnQP4SoJgGt",
				largeButtonFont: "_2nrHVa4dyedAaDcfRLLE5z",
				strongTextFont: "_25hN89q-zD6Y-U11Y_e4aZ",
				tabFont: "_3Bpld0JoC9VmYlZZ5Dyms1",
				buttonFontXS: "_3XRjGQkKxJfyJwAacQAlPW",
				buttonFontXs: "_3XRjGQkKxJfyJwAacQAlPW",
				buttonFontS: "_1isM0DTxp9b21BN1s-ZwZ_",
				buttonFontM: "_3Cg0zFAdAjeMdbc54Phzt9",
				buttonFontL: "_3p-XJ-g7y_gk3t5Fpp2KCj",
				buttonFontXL: "Ed-VD4bfI-1NkJ9RikYYo",
				buttonFontXl: "Ed-VD4bfI-1NkJ9RikYYo",
				bodyFontH1: "bhfIpkByfOrflj2uqeOu3",
				bodyFontH2: "_3xwPD6mwo8KG7WQa3W8njG",
				bodyFontH3: "_1o3ciR8XDGZ_1S7FR7rmrb",
				bodyFontH4: "KyspXVcxKfpH-yrxxQ4EY",
				bodyFontH5: "_20z_x36tiklZi1W-Z3uqvJ",
				bodyFontH6: "_14VGsHSpx6uKHLlJqMng5B",
				bodyFont: "_3ejsRrJq-hN84OvmuolQYo",
				bodyFontSmall: "_1c--mrP_57nHX86Jy6YDjW",
				bodyFontMono: "_2jHXa8pmE696zxLXFfT4I0",
				contentWrapper: "_2Z3MiFrgj2rofHXrH1YVKn",
				isModerator: "_1haViLcso0RRPvkDGZgDLJ",
				BackgroundContainer: "_1XAvW8OS9HO-SVS7BDAIGe",
				backgroundContainer: "_1XAvW8OS9HO-SVS7BDAIGe",
				SubredditLink: "_3u_4BK4_gVwVyX1YIZjFft",
				subredditLink: "_3u_4BK4_gVwVyX1YIZjFft",
				Header: "_12UrKOfuM441n-zHotruas",
				header: "_12UrKOfuM441n-zHotruas",
				SubredditIcon: "_2N81CG8WsdJLudQQiSy8oZ",
				subredditIcon: "_2N81CG8WsdJLudQQiSy8oZ",
				Body: "_3hAOyl8ThaUgCBqiNvN_sN",
				body: "_3hAOyl8ThaUgCBqiNvN_sN"
			}
		},
		"./src/reddit/pages/ModHub/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/ContentGate/index.tsx"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/lib/assertNever.ts"),
				b = s("./src/lib/constants/index.ts");
			const g = e => {
				switch (e) {
					case b.Wb.Awards:
						return p.fbt._("Awards", null, {
							hk: "EiSXW"
						});
					case b.Wb.Banned:
						return p.fbt._("Banned", null, {
							hk: "35R8OD"
						});
					case b.Wb.Muted:
						return p.fbt._("Muted", null, {
							hk: "f2nJu"
						});
					case b.Wb.ContentControls:
						return p.fbt._("Content controls", null, {
							hk: "H1yxv"
						});
					case b.Wb.Contributors:
						return p.fbt._("Approved", null, {
							hk: "180AS9"
						});
					case b.Wb.Moderators:
						return p.fbt._("Moderators", null, {
							hk: "4qdV8t"
						});
					case b.Wb.SubredditRules:
						return p.fbt._("Rules", null, {
							hk: "2SNdd8"
						});
					case b.Wb.Removal:
						return p.fbt._("Removal reasons", null, {
							hk: "1smDUM"
						});
					case b.Wb.Modqueue:
						return p.fbt._("Mod queue", null, {
							hk: "yEBGb"
						});
					case b.Wb.Reports:
						return p.fbt._("Reports", null, {
							hk: "4Ctcb1"
						});
					case b.Wb.Spam:
						return p.fbt._("Spam", null, {
							hk: "1D73Vp"
						});
					case b.Wb.Unmoderated:
						return p.fbt._("Unmoderated", null, {
							hk: "3TOaeD"
						});
					case b.Wb.Edited:
						return p.fbt._("Edited", null, {
							hk: "OLtvW"
						});
					case b.Wb.ChatSettings:
						return p.fbt._("Chat settings", null, {
							hk: "3gycCw"
						});
					case b.Wb.Modlog:
						return p.fbt._("Mod log", null, {
							hk: "3uy7LL"
						});
					case b.Wb.Flair:
						return p.fbt._("Grant user flair", null, {
							hk: "2B8sTJ"
						});
					case b.Wb.CommunitySettings:
						return p.fbt._("Community settings", null, {
							hk: "XbHzi"
						});
					case b.Wb.Emojis:
						return p.fbt._("Emojis", null, {
							hk: "3mPnxe"
						});
					case b.Wb.UserFlair:
						return p.fbt._("User flair", null, {
							hk: "3kleCv"
						});
					case b.Wb.PostFlair:
						return p.fbt._("Post flair", null, {
							hk: "2Y1FKb"
						});
					case b.Wb.Badges:
						return p.fbt._("Badges", null, {
							hk: "3vM0lt"
						});
					case b.Wb.Emotes:
						return p.fbt._("Emotes", null, {
							hk: "2Ivxxq"
						});
					case b.Wb.Wiki:
					case b.Wb.WikiContributors:
					case b.Wb.WikiBanned:
						return p.fbt._("Wiki pages", null, {
							hk: "WdSXv"
						});
					case b.Wb.Traffic:
						return p.fbt._("Traffic stats", null, {
							hk: "3mcw71"
						});
					case b.Wb.ScheduledPostContent:
					case b.Wb.SubredditContent:
						return p.fbt._("Scheduled posts", null, {
							hk: "19KZjq"
						});
					case b.Wb.EventPostContent:
						return p.fbt._("Event posts", null, {
							hk: "3ejc42"
						});
					case b.Wb.Streaming:
						return p.fbt._("Broadcasting", null, {
							hk: "1Cz44z"
						});
					case b.Wb.Predictions:
						return p.fbt._("Predictions", null, {
							hk: "1yASCC"
						});
					default:
						return Object(h.a)(e)
				}
			};
			var f = s("./src/reddit/components/SubredditIcon/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/controls/InternalLink/index.tsx"),
				C = s("./src/reddit/helpers/canAccessModerationPage/index.ts"),
				_ = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				k = s("./src/reddit/helpers/trackers/moderationPages.ts"),
				y = s("./src/reddit/helpers/trackers/modHub.ts"),
				O = s("./src/reddit/models/ModQueue/index.ts"),
				S = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/postCreations.ts"),
				j = s("./src/reddit/selectors/profile.ts"),
				I = s("./src/reddit/selectors/streamingModSettings.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/ModHub/Content/index.tsx"),
				M = s("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				R = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				A = s("./src/reddit/components/ModHub/Content/WelcomeMessage.m.less"),
				L = s.n(A);
			const F = u.a.wrapped(R.a, "ModerateIcon", L.a),
				D = u.a.div("ModHubWelcomeMessage", L.a);
			var U = e => r.a.createElement(D, null, r.a.createElement(F, null), p.fbt._("Welcome to the mod tools for {subredditName}", [p.fbt._param("subredditName", e.subredditDisplayText)], {
					hk: "7Usff"
				})),
				B = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/config.ts")),
				W = s("./node_modules/react-router-redux/es/index.js"),
				H = s("./src/reddit/components/EmailInvitePaintedDoor/loader.tsx"),
				V = s("./src/reddit/featureFlags/index.ts"),
				q = s("./src/reddit/helpers/localStorage/index.ts"),
				G = s("./src/reddit/helpers/trackers/communitySettings.ts"),
				z = s("./src/reddit/helpers/trackers/emailInvite.ts"),
				K = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				X = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				Q = s("./src/reddit/icons/svgs/Help/index.tsx"),
				J = s("./src/reddit/icons/svgs/List/index.tsx"),
				Y = s("./src/reddit/icons/svgs/Modmail/index.tsx"),
				Z = s("./src/reddit/icons/svgs/ModQueues/index.tsx"),
				$ = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				ee = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				te = s("./src/reddit/icons/svgs/Statistics/index.tsx"),
				se = s("./src/reddit/icons/svgs/Tag/index.tsx"),
				ne = s("./src/reddit/icons/svgs/User/index.tsx"),
				ae = s("./src/reddit/routes/moderationPages/index.ts"),
				oe = s("./src/reddit/selectors/experiments/emailInvite.ts"),
				re = s("./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx"),
				ie = s("./src/reddit/components/ModHub/ModHubNav/index.m.less"),
				de = s.n(ie);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ce = e => r.a.createElement("div", le({
					className: Object(l.a)(de.a.breadcrumb, e.className)
				}, e), r.a.createElement("button", {
					className: de.a.breadcrumbButton
				}, r.a.createElement(re.a, null), p.fbt._("Back to mod tools", null, {
					hk: "4udiKO"
				}))),
				ue = s("./src/reddit/components/ModHub/ModHubNav/NavItem.tsx"),
				me = s("./src/reddit/actions/modal.ts"),
				pe = s("./src/higherOrderComponents/asModal/index.tsx"),
				he = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				be = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ge = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				fe = s("./src/reddit/constants/wiki.ts"),
				xe = s("./src/reddit/controls/Button/index.tsx"),
				Ee = s("./src/reddit/controls/TextButton/index.tsx"),
				ve = s("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				Ce = s("./src/reddit/helpers/wiki/validatePageName.ts"),
				_e = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				ke = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				ye = s("./src/reddit/controls/Dropdown/index.tsx"),
				Oe = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Se = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				we = s("./src/reddit/components/Wiki/CreateNewWikiPageModal/index.m.less"),
				je = s.n(we);
			class Ie extends r.a.Component {
				constructor(e) {
					super(e), this.onToggleDropdown = () => {
						this.setState({
							isDropdownOpen: !this.state.isDropdownOpen
						})
					}, this.onSelectParentPage = e => {
						this.props.onSelectParentPage(e), this.onToggleDropdown()
					}, this.state = {
						isDropdownOpen: !1
					}
				}
				render() {
					const {
						pageTree: e,
						parentPageName: t
					} = this.props, {
						isDropdownOpen: s
					} = this.state, n = p.fbt._("None", null, {
						hk: "3FT0YQ"
					});
					return r.a.createElement("div", {
						className: je.a.dropdownContainer
					}, r.a.createElement("button", {
						className: je.a.dropdownTarget,
						onClick: this.onToggleDropdown
					}, r.a.createElement("div", {
						className: je.a.targetText
					}, t || n), r.a.createElement(Se.b, null)), s && r.a.createElement(ye.a, {
						className: je.a.dropdown
					}, r.a.createElement(Oe.b, {
						className: je.a.dropdownRow,
						displayText: n,
						onClick: () => this.onSelectParentPage(void 0)
					}), e.map(e => e.depth >= fe.c ? null : fe.f.has(e.path.split("/")[0]) ? null : r.a.createElement(Oe.b, {
						className: je.a.dropdownRow,
						displayText: e.path,
						key: e.path,
						onClick: () => this.onSelectParentPage(e.path)
					}))))
				}
			}
			var Ne = Ie;
			const Te = e => {
				switch (e) {
					case Ce.a.InvalidPageName:
						return p.fbt._("Invalid page name", null, {
							hk: "1gQvCb"
						});
					case Ce.a.MaxLengthExceed:
						return p.fbt._("Name exceeds character limit", null, {
							hk: "RDoIC"
						});
					case Ce.a.PageAlreadyExists:
						return p.fbt._("That page already exists", null, {
							hk: "xEyyR"
						});
					case Ce.a.RestrictedPageName:
						return p.fbt._("Restricted page name", null, {
							hk: "Bjv5o"
						})
				}
			};
			class Pe extends r.a.Component {
				constructor(e) {
					super(e), this.onChangePageName = e => {
						this.setState({
							partialPageName: e.currentTarget.value
						})
					}, this.onSelectParentPage = e => {
						this.setState({
							parentPageName: e
						})
					}, this.getNewPagePath = () => {
						let e = "";
						return this.state.parentPageName && (e += `${this.state.parentPageName}/`), (e += `${this.state.partialPageName}`).toLowerCase()
					}, this.state = {
						partialPageName: "",
						parentPageName: void 0
					}
				}
				hasError() {
					const {
						pageTree: e
					} = this.props, {
						partialPageName: t
					} = this.state;
					return Object(Ce.c)(t) || Object(Ce.b)(this.getNewPagePath(), e)
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = this.hasError();
					return r.a.createElement(be.d, {
						className: je.a.modalBody
					}, r.a.createElement(be.h, null, r.a.createElement(ke.a, null, r.a.createElement(be.p, null, p.fbt._("Create a new wiki page", null, {
						hk: "V7Jnm"
					})), r.a.createElement(Ee.a, {
						onClick: e.toggleModal
					}, r.a.createElement(be.b, null)))), r.a.createElement("div", {
						className: je.a.notice
					}, r.a.createElement(_e.a, null), p.fbt._("Parent page and page URL cannot be edited once created", null, {
						hk: "20D6uz"
					})), r.a.createElement(be.k, null, r.a.createElement("div", {
						className: je.a.sectionTitle
					}, p.fbt._("Parent page", null, {
						hk: "1FeKiT"
					})), r.a.createElement(Ne, {
						onSelectParentPage: this.onSelectParentPage,
						pageTree: Object(ve.b)(e.pageTree || []),
						parentPageName: t.parentPageName
					}), r.a.createElement("div", {
						className: je.a.sectionTitle
					}, p.fbt._("Page URL", null, {
						hk: "WL8sn"
					})), r.a.createElement(ge.d, {
						placeholder: p.fbt._("ex: rules", null, {
							hk: "J0qH1"
						}),
						onChange: this.onChangePageName,
						value: t.partialPageName
					}), r.a.createElement(he.a, {
						text: this.getNewPagePath(),
						maxChars: fe.d
					}), r.a.createElement("div", {
						className: je.a.errorText
					}, t.partialPageName && s ? Te(s) : null)), r.a.createElement(be.f, null, r.a.createElement(be.a, {
						onClick: e.toggleModal
					}, p.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(xe.k, {
						disabled: !t.partialPageName || !!s,
						className: je.a.primaryButton,
						to: `${e.subredditUrl}about/wiki/create/${this.getNewPagePath()}`
					}, p.fbt._("Create", null, {
						hk: "2W0PL1"
					}))))
				}
			}
			var Me = Object(pe.a)(Pe),
				Re = s("./src/reddit/selectors/activeModalId.ts"),
				Ae = s("./src/reddit/selectors/subredditWiki.ts"),
				Le = s("./node_modules/lodash/times.js"),
				Fe = s.n(Le),
				De = s("./src/reddit/components/ModHub/ModHubNav/WikiNavPanel/index.m.less"),
				Ue = s.n(De);
			class Be extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.containerRef = r.a.createRef()
				}
				componentDidMount() {
					this.scrollToActiveItemIfNeeded()
				}
				scrollToActiveItemIfNeeded() {
					const e = this.containerRef.current,
						t = e && e.getElementsByClassName(Ue.a.mActive)[0];
					if (!e || !t) return;
					const s = e.getBoundingClientRect(),
						n = t.getBoundingClientRect();
					n.top >= s.top && n.bottom <= s.bottom || t.scrollIntoView()
				}
				render() {
					const {
						activePageName: e,
						baseUrl: t,
						directory: s
					} = this.props, n = Object(ve.b)(s && s.pageTree || []);
					return r.a.createElement("div", {
						ref: this.containerRef,
						className: Ue.a.contentTree
					}, n.map(s => {
						const n = s.path === e;
						return r.a.createElement(v.a, {
							key: s.path,
							className: Ue.a.pageNavLink,
							to: `${t}/${s.path}`
						}, r.a.createElement("div", {
							className: Object(l.a)(Ue.a.pageNavItem, {
								[Ue.a.mActive]: n,
								[Ue.a.mExists]: s.isPagePresent
							})
						}, Fe()(s.depth, () => r.a.createElement("div", {
							className: Ue.a.indentLine
						})), r.a.createElement("span", {
							className: Ue.a.itemText
						}, `/${s.name}`)))
					}))
				}
			}
			const We = Object(d.c)({
				directory: (e, t) => Object(Ae.b)(e, {
					subredditName: t.subreddit.name
				}),
				isCreateWikiPageModalOpen: e => "CreateWikiPageModal" === Object(Re.a)(e)
			});
			class He extends r.a.Component {
				constructor() {
					super(...arguments), this.onToggleCreateWikiModal = () => {
						this.props.toggleCreateWikiModal()
					}
				}
				render() {
					const {
						directory: e,
						isCreateWikiPageModalOpen: t,
						subreddit: s,
						toggleCreateWikiModal: n,
						pageLayer: a
					} = this.props;
					if (!a) return null;
					const {
						urlParams: o
					} = a, {
						wikiPageName: i,
						wikiSubRoute: d,
						pageName: l
					} = o;
					return r.a.createElement("div", {
						className: Ue.a.wikiNavPanel
					}, r.a.createElement(xe.i, {
						className: Ue.a.primaryButton,
						onClick: this.onToggleCreateWikiModal
					}, p.fbt._("Create new page", null, {
						hk: "35WDuL"
					})), r.a.createElement(Be, {
						activePageName: i,
						baseUrl: `${s.url}about/wiki`,
						directory: e
					}), r.a.createElement("div", {
						className: Ue.a.footer
					}, r.a.createElement(ue.b, {
						isActive: d === fe.m.Revisions && !i,
						label: p.fbt._("Recent wiki revisions", null, {
							hk: "278VnD"
						}),
						path: `${s.url}about/wiki/revisions`
					}), r.a.createElement(ue.b, {
						isActive: l === b.Wb.WikiContributors,
						label: p.fbt._("Add wiki contributors", null, {
							hk: "1XHd90"
						}),
						path: `${s.url}about/wikicontributors`
					}), r.a.createElement(ue.b, {
						isActive: l === b.Wb.WikiBanned,
						label: p.fbt._("Ban wiki contributors", null, {
							hk: "3IVNKp"
						}),
						path: `${s.url}about/wikibanned`
					}), r.a.createElement(ue.b, {
						label: p.fbt._("Wiki settings", null, {
							hk: "1Jctxf"
						}),
						path: `${s.url}about/edit?page=wikis`
					})), t && r.a.createElement(Me, {
						pageTree: e && e.pageTree,
						subredditUrl: s.url,
						toggleModal: n,
						withOverlay: !0
					}))
				}
			}
			var Ve = Object(E.t)()(Object(i.b)(We, e => ({
				toggleCreateWikiModal: () => e(Object(me.i)("CreateWikiPageModal"))
			}))(He));
			const qe = Object(d.c)({
				isBadgesAndEmotesEnabled: V.d.spCustomBadgesAndEmotes,
				isContentTagEnabled: (e, t) => !!e.subreddits.survey[t.subreddit.id],
				isUsingNewModMail: (e, {
					subreddit: t
				}) => Object(N.n)(e, {
					subredditId: t.id
				}),
				isEligibleForScheduledPosts: V.d.scheduledPosts,
				isEmailInviteExperimentEnabled: oe.a,
				isBroadcastingEnabled: (e, {
					subreddit: t
				}) => Object(I.c)(e, t.id),
				isTournamentsEnabled: (e, {
					subreddit: t
				}) => Object(N.N)(e, {
					subredditId: t.id
				})
			});
			class Ge extends r.a.Component {
				constructor(e, t) {
					super(e, t), this.trackClick = e => this.props.sendEvent(y.b(e)), this.trackCommunitySettingsNavItemClick = e => this.props.sendEvent(Object(G.a)(e)), this.onClickAwards = () => this.trackClick("awards"), this.onClickStreaming = () => this.trackClick("streaming"), this.onClickModQueue = () => this.trackClick("mod_queue"), this.onClickReports = () => this.trackClick("reports"), this.onClickSpam = () => this.trackClick("spam"), this.onClickEdited = () => this.trackClick("edited"), this.onClickUnmoderated = () => this.trackClick("unmoderated"), this.onClickBannedUsers = () => this.trackClick("ban_users"), this.onClickMutedUsers = () => this.trackClick("mute_users"), this.onClickApprovedSubmitters = () => this.trackClick("approved_submitters"), this.onClickEmojis = () => this.trackClick("emoji"), this.onClickModerators = () => this.trackClick("moderators"), this.onClickChatSettings = () => this.trackClick("chat_settings"), this.onClickCommunitySettings = () => this.trackClick("community_settings"), this.onClickCommunityAppearance = () => this.trackClick("community_appearance"), this.onClickModMail = () => {
						const e = this.props.isUsingNewModMail ? "mod_mail" : "old_modmail";
						this.trackClick(e)
					}, this.onClickRemovalReasons = () => this.trackClick("removal_reasons"), this.onClickRules = () => this.trackClick("rules"), this.onClickPostRequirements = () => this.trackClick("post_requirements"), this.onClickAutomodConfig = () => this.trackClick("automod_config"), this.onClickWikiPages = () => this.trackClick("wiki"), this.onClickTraffic = () => this.trackClick("traffic"), this.onClickModLog = () => this.trackClick("mod_log"), this.onClickModSupport = () => this.trackClick("r_mod_support"), this.onClickModHelp = () => this.trackClick("mod_help"), this.onClickContactReddit = () => this.trackClick("contact_reddit"), this.onClickModGuidelines = () => this.trackClick("mod_guidelines"), this.onClickModHelpCenter = () => this.trackClick("mod_help_center"), this.onClickPostFlair = () => this.trackClick("post_flair"), this.onClickUserFlair = () => this.trackClick("user_flair"), this.onClickGrantUserFlair = () => this.trackClick("grant_user_flair"), this.onClickBadges = () => this.trackClick("badges"), this.onClickEmotes = () => this.trackClick("emotes"), this.onClickScheduledPosts = () => this.props.sendEvent(Object(K.k)()), this.onClickEventPosts = () => this.props.sendEvent(Object(K.f)()), this.onClickPredictions = () => this.trackClick("predictions"), this.onGoToModHub = () => {
						const e = this.props.moderatorPermissions && this.props.moderatorPermissions.posts,
							t = `${this.props.subreddit.url}about/`,
							s = e ? `${t}modqueue` : t;
						this.props.pushUrl(s)
					}, this.onClickInviteViaEmail = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(z.a)("mod_hub_nav")), this.setState({
							showEmailInvitePaintedDoor: !0
						})
					}, this.onCloseInviteViaEmailModal = () => {
						this.setState({
							showEmailInvitePaintedDoor: !1
						})
					}, this.state = {
						locationSettingSeen: !0,
						showEmailInvitePaintedDoor: !1
					}
				}
				componentDidMount() {
					this.setState({
						locationSettingSeen: Object(q.A)("location")
					})
				}
				render() {
					const {
						props: e
					} = this, t = e.isEligibleForScheduledPosts && !e.isProfile || e.isTournamentsEnabled;
					switch (e.pageName) {
						case b.Wb.CommunitySettings: {
							const t = !e.subpageName || !Object.values(b.Xb).includes(e.subpageName);
							return e.isProfile ? null : r.a.createElement("div", {
								className: de.a.navContainer
							}, r.a.createElement(ce, {
								onClick: this.onGoToModHub
							}), r.a.createElement(ue.b, {
								label: p.fbt._("Community", null, {
									hk: "1EIoJe"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(b.Xb.Community),
								isNew: !0,
								path: `${e.subreddit.url}about/edit?page=community`,
								isActive: t || e.subpageName === b.Xb.Community
							}), r.a.createElement(ue.b, {
								label: p.fbt._("Safety and Privacy", null, {
									hk: "3E0TnI"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(b.Xb.Safety),
								path: `${e.subreddit.url}about/edit?page=safety`,
								isActive: e.subpageName === b.Xb.Safety
							}), r.a.createElement(ue.b, {
								label: p.fbt._("Posts and Comments", null, {
									hk: "2jt4ea"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(b.Xb.Posts),
								path: `${e.subreddit.url}about/edit?page=posts`,
								isActive: e.subpageName === b.Xb.Posts
							}), r.a.createElement(ue.b, {
								label: p.fbt._("Wikis", null, {
									hk: "2X1iz1"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(b.Xb.Wikis),
								path: `${e.subreddit.url}about/edit?page=wikis`,
								isActive: e.subpageName === b.Xb.Wikis
							}), e.isContentTagEnabled && r.a.createElement(ue.b, {
								label: p.fbt._("Content Tag", null, {
									hk: "VuxaQ"
								}),
								isNew: !0,
								onClick: () => this.trackCommunitySettingsNavItemClick(b.Xb.ContentTag),
								path: `${e.subreddit.url}about/edit?page=content_tag`,
								isActive: e.subpageName === b.Xb.ContentTag
							}), r.a.createElement(ue.b, {
								label: p.fbt._("Notifications", null, {
									hk: "SRNLx"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(b.Xb.Notifications),
								path: `${e.subreddit.url}about/edit?page=notifications`,
								isActive: e.subpageName === b.Xb.Notifications
							}))
						}
						case b.Wb.Wiki:
						case b.Wb.WikiContributors:
						case b.Wb.WikiBanned:
							return e.isProfile ? null : r.a.createElement("div", {
								className: Object(l.a)(de.a.navContainer, de.a.wikiNavContainer)
							}, r.a.createElement(ce, {
								onClick: this.onGoToModHub
							}), e.moderatorPermissions.wiki && r.a.createElement(Ve, {
								subreddit: e.subreddit
							}));
						default:
							return r.a.createElement("div", {
								className: de.a.navContainer
							}, e.moderatorPermissions.posts && !e.isProfile && r.a.createElement("div", {
								className: de.a.navSection
							}, r.a.createElement("div", {
								className: de.a.sectionHeader
							}, r.a.createElement(Z.a, {
								className: de.a.iconStyles
							}), p.fbt._("Queues", null, {
								hk: "2BbIZV"
							})), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Modqueue,
								label: g(b.Wb.Modqueue),
								onClick: this.onClickModQueue,
								path: `${e.subreddit.url}about/modqueue`
							}), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Reports,
								label: g(b.Wb.Reports),
								onClick: this.onClickReports,
								path: `${e.subreddit.url}about/reports`
							}), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Spam,
								label: g(b.Wb.Spam),
								onClick: this.onClickSpam,
								path: `${e.subreddit.url}about/spam`
							}), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Edited,
								label: g(b.Wb.Edited),
								onClick: this.onClickEdited,
								path: `${e.subreddit.url}about/edited`
							}), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Unmoderated,
								label: g(b.Wb.Unmoderated),
								onClick: this.onClickUnmoderated,
								path: `${e.subreddit.url}about/unmoderated`
							})), !e.isProfile && r.a.createElement("div", {
								className: de.a.navSection
							}, r.a.createElement("div", {
								className: de.a.sectionHeader
							}, r.a.createElement(ne.a, {
								className: de.a.iconStyles
							}), p.fbt._("User management", null, {
								hk: "3G4BgD"
							})), e.moderatorPermissions.access && r.a.createElement(r.a.Fragment, null, r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Banned,
								label: g(b.Wb.Banned),
								onClick: this.onClickBannedUsers,
								path: `${e.subreddit.url}about/banned`
							}), e.moderatorPermissions.mail && r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Muted,
								label: g(b.Wb.Muted),
								onClick: this.onClickMutedUsers,
								path: `${e.subreddit.url}about/muted`
							}), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Contributors,
								label: g(b.Wb.Contributors),
								onClick: this.onClickApprovedSubmitters,
								path: `${e.subreddit.url}about/contributors`
							})), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Moderators,
								label: g(b.Wb.Moderators),
								onClick: this.onClickModerators,
								path: `${e.subreddit.url}about/moderators`
							}), e.isEmailInviteExperimentEnabled && r.a.createElement(ue.b, {
								label: p.fbt._("Bulk Email Invite", null, {
									hk: "3GTIEm"
								}),
								isNew: !0,
								onClick: this.onClickInviteViaEmail
							}), this.state.showEmailInvitePaintedDoor && r.a.createElement(H.a, {
								onClose: this.onCloseInviteViaEmailModal,
								sendEvent: e.sendEvent
							})), (e.moderatorPermissions.flair || e.moderatorPermissions.config) && !e.isProfile && r.a.createElement("div", {
								className: de.a.navSection
							}, r.a.createElement("div", {
								className: de.a.sectionHeader
							}, r.a.createElement(se.a, {
								className: de.a.iconStyles
							}), e.isBadgesAndEmotesEnabled ? p.fbt._("Badges, flair & emojis", null, {
								hk: "1FuDnm"
							}) : p.fbt._("Flair & emojis", null, {
								hk: "42b2AJ"
							})), e.moderatorPermissions.flair && r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Flair,
								label: g(b.Wb.Flair),
								onClick: this.onClickGrantUserFlair,
								path: `${e.subreddit.url}about/flair`
							}), e.moderatorPermissions.config && r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Emojis,
								label: g(b.Wb.Emojis),
								onClick: this.onClickEmojis,
								path: `${e.subreddit.url}about/emojis`
							}), e.moderatorPermissions.flair && r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.UserFlair,
								label: g(b.Wb.UserFlair),
								onClick: this.onClickUserFlair,
								path: `${e.subreddit.url}about/userflair`
							}), e.moderatorPermissions.flair && e.moderatorPermissions.config && r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.PostFlair,
								label: g(b.Wb.PostFlair),
								onClick: this.onClickPostFlair,
								path: `${e.subreddit.url}about/postflair`
							}), e.isBadgesAndEmotesEnabled && r.a.createElement(r.a.Fragment, null, r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Badges,
								label: g(b.Wb.Badges),
								onClick: this.onClickBadges,
								path: `${e.subreddit.url}about/badges`
							}), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Emotes,
								label: g(b.Wb.Emotes),
								onClick: this.onClickEmotes,
								path: `${e.subreddit.url}about/emotes`
							}))), (e.moderatorPermissions.config || e.moderatorPermissions.posts) && !e.isProfile && r.a.createElement("div", {
								className: de.a.navSection
							}, r.a.createElement("div", {
								className: de.a.sectionHeader
							}, r.a.createElement($.a, {
								className: de.a.iconStyles
							}), p.fbt._("Rules and regulations", null, {
								hk: "QAksk"
							})), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.SubredditRules,
								label: g(b.Wb.SubredditRules),
								onClick: this.onClickRules,
								path: `${e.subreddit.url}about/rules`
							}), e.moderatorPermissions.posts && r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Removal,
								label: g(b.Wb.Removal),
								onClick: this.onClickRemovalReasons,
								path: `${e.subreddit.url}about/removal`
							}), e.moderatorPermissions.config && r.a.createElement(r.a.Fragment, null, r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.ContentControls,
								label: g(b.Wb.ContentControls),
								onClick: this.onClickPostRequirements,
								path: `${e.subreddit.url}about/settings`
							}), r.a.createElement(ue.b, {
								label: p.fbt._("Automod", null, {
									hk: "1IngsO"
								}),
								onClick: this.onClickAutomodConfig,
								path: `${e.subreddit.url}about/wiki/config/automoderator`
							}))), t && r.a.createElement("div", {
								className: de.a.navSection
							}, r.a.createElement("div", {
								className: de.a.sectionHeader
							}, r.a.createElement(J.a, {
								className: de.a.iconStyles
							}), p.fbt._("Content", null, {
								hk: "IAh5R"
							})), e.isEligibleForScheduledPosts && !e.isProfile && r.a.createElement(r.a.Fragment, null, r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.ScheduledPostContent,
								label: p.fbt._("Scheduled posts", null, {
									hk: "11S6dN"
								}),
								onClick: this.onClickScheduledPosts,
								path: Object(ae.e)(e.subreddit.displayText),
								isNew: !0
							}), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.EventPostContent,
								label: p.fbt._("Event posts", null, {
									hk: "3D98hc"
								}),
								onClick: this.onClickEventPosts,
								path: Object(ae.b)(e.subreddit.displayText),
								isBeta: !0
							})), e.isTournamentsEnabled && r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Predictions,
								label: p.fbt._("Predictions", null, {
									hk: "Serjr"
								}),
								onClick: this.onClickPredictions,
								path: Object(ae.d)(e.subreddit.displayText),
								isNew: !0
							})), (e.moderatorPermissions.config || e.moderatorPermissions.wiki) && r.a.createElement("div", {
								className: de.a.navSection
							}, r.a.createElement("div", {
								className: de.a.sectionHeader
							}, r.a.createElement(ee.a, {
								className: de.a.iconStyles
							}), p.fbt._("Other", null, {
								hk: "ST5RE"
							})), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Awards,
								label: p.fbt._("Awards", null, {
									hk: "48U4Du"
								}),
								onClick: this.onClickAwards,
								path: `${e.subreddit.url}about/awards`
							}), e.moderatorPermissions.config && !e.isProfile && e.isBroadcastingEnabled && r.a.createElement(ue.b, {
								label: g(b.Wb.Streaming),
								onClick: this.onClickStreaming,
								path: `${e.subreddit.url}about/broadcasting`,
								isNew: !0
							}), e.moderatorPermissions.wiki && !e.isProfile && r.a.createElement(ue.b, {
								label: p.fbt._("Wiki pages", null, {
									hk: "wShFl"
								}),
								onClick: this.onClickWikiPages,
								path: `${B.a.redditUrl}${e.subreddit.url}about/wiki/index`
							}), e.moderatorPermissions.config && !e.isProfile && r.a.createElement(ue.b, {
								label: p.fbt._("Community settings", null, {
									hk: "2xOUK6"
								}),
								onClick: this.onClickCommunitySettings,
								isNew: !this.state.locationSettingSeen,
								path: `${e.subreddit.url}about/edit?page=community`,
								showInboundArrow: !0
							}), e.moderatorPermissions.config && !e.isProfile && r.a.createElement(ue.b, {
								label: p.fbt._("Community appearance", null, {
									hk: "3AHttA"
								}),
								path: `${e.subreddit.url}?styling=true`,
								onClick: this.onClickCommunityAppearance,
								showInboundArrow: !0
							})), e.moderatorPermissions.mail && !e.isProfile && r.a.createElement("div", {
								className: de.a.navSection
							}, r.a.createElement("div", {
								className: de.a.sectionHeader
							}, r.a.createElement(Y.a, {
								className: de.a.iconStyles
							}), p.fbt._("Modmail", null, {
								hk: "Eh4Vu"
							})), r.a.createElement(ue.b, {
								isExternal: !0,
								label: p.fbt._("Modmail", null, {
									hk: "3Xkgqo"
								}),
								onClick: this.onClickModMail,
								path: e.isUsingNewModMail ? "https://mod.reddit.com" : `${B.a.redditUrl}/message/moderator/`
							})), e.moderatorPermissions.config && !e.isProfile && r.a.createElement("div", {
								className: de.a.navSection
							}, r.a.createElement("div", {
								className: de.a.sectionHeader
							}, r.a.createElement(X.a, {
								className: de.a.iconStyles
							}), p.fbt._("Chat", null, {
								hk: "4mJ2vR"
							})), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.ChatSettings,
								label: g(b.Wb.ChatSettings),
								onClick: this.onClickChatSettings,
								path: `${e.subreddit.url}about/chat`
							})), !e.isProfile && r.a.createElement("div", {
								className: de.a.navSection
							}, r.a.createElement("div", {
								className: de.a.sectionHeader
							}, r.a.createElement(te.a, {
								className: de.a.iconStyles
							}), p.fbt._("Community activity", null, {
								hk: "1vGSer"
							})), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Traffic,
								label: p.fbt._("Traffic stats", null, {
									hk: "vw5CU"
								}),
								onClick: this.onClickTraffic,
								path: `${e.subreddit.url}about/traffic`
							}), r.a.createElement(ue.b, {
								isActive: e.pageName === b.Wb.Modlog,
								label: g(b.Wb.Modlog),
								onClick: this.onClickModLog,
								path: `${e.subreddit.url}about/log`
							})), r.a.createElement("div", {
								className: de.a.navSection
							}, r.a.createElement("div", {
								className: de.a.sectionHeader
							}, r.a.createElement(Q.a, {
								className: de.a.iconStyles
							}), p.fbt._("Mod help center", null, {
								hk: "256YE"
							})), r.a.createElement(ue.b, {
								isExternal: !0,
								label: p.fbt._("Mod help center", null, {
									hk: "4dCwWU"
								}),
								onClick: this.onClickModHelpCenter,
								path: B.a.redditModHelpUrl
							}), r.a.createElement(ue.b, {
								isExternal: !0,
								label: p.fbt._("Moderator guidelines", null, {
									hk: "3marKI"
								}),
								onClick: this.onClickModGuidelines,
								path: "https://www.reddit.com/help/healthycommunities/"
							}), r.a.createElement(ue.b, {
								isExternal: !0,
								label: "r/ModSupport",
								onClick: this.onClickModSupport,
								path: "/r/ModSupport/"
							}), r.a.createElement(ue.b, {
								isExternal: !0,
								label: "r/ModHelp",
								onClick: this.onClickModHelp,
								path: "/r/modhelp/"
							}), r.a.createElement(ue.b, {
								isExternal: !0,
								label: p.fbt._("Contact Reddit", null, {
									hk: "2NRBBx"
								}),
								onClick: this.onClickContactReddit,
								path: "https://www.reddithelp.com/hc/en-us/requests/new"
							})))
					}
				}
			}
			var ze = Object(i.b)(qe, e => ({
					pushUrl: t => e(Object(W.b)(t))
				}))(Object(x.c)(Ge)),
				Ke = s("./src/reddit/pages/ModHub/index.m.less"),
				Xe = s.n(Ke);
			const Qe = u.a.div("BackgroundContainer", Xe.a),
				Je = u.a.wrapped(v.a, "SubredditLink", Xe.a),
				Ye = u.a.div("Header", Xe.a),
				Ze = u.a.wrapped(f.b, "SubredditIcon", Xe.a),
				$e = u.a.div("Body", Xe.a),
				et = Object(d.c)({
					contentGateInfo: (e, t) => Object(T.e)(e, t.match.params.subredditName)
				}),
				tt = Object(d.c)({
					queryParams: (e, {
						location: t
					}) => a()([...Object(c.a)(t.search)])
				}),
				st = Object(d.c)({
					moderatorPermissions: (e, t) => {
						var s;
						const {
							subredditName: n,
							profileName: a
						} = t.match.params, o = n ? Object(N.F)(e, n) : null === (s = Object(j.j)(e, {
							profileName: a
						})) || void 0 === s ? void 0 : s.id;
						if (o) return Object(S.k)(e, {
							subredditId: o
						})
					}
				}),
				nt = Object(d.c)({
					subreddit: (e, t) => t.match.params.subredditName ? Object(N.A)(e, {
						subredditName: t.match.params.subredditName
					}) : Object(j.j)(e, {
						profileName: t.match.params.profileName
					})
				}),
				at = Object(i.b)(() => Object(d.a)(et, T.G, E.O, st, T.cb, w.hb, nt, tt, (e, t) => t.match.params.pageName, e => e, ({
					contentGateInfo: e
				}, t, s, {
					moderatorPermissions: n
				}, a, o, {
					subreddit: r
				}, {
					queryParams: i
				}, d, l) => {
					const {
						after: c,
						afterEditable: u,
						before: m,
						beforeEditable: p,
						only: h,
						page: b
					} = i;
					return {
						contentGateInfo: e,
						isBroadcastingEnabled: !!r && Object(I.c)(l, r.id),
						isEmployee: t,
						layout: s,
						moderatorPermissions: n,
						isScheduledPostsEnabled: o,
						subreddit: r,
						renderNSFWContentGate: !!r && r.isNSFW && !a,
						page: `${b||O.b}`,
						pageName: d,
						postTypeFilter: h,
						after: c || "",
						afterEditable: u,
						before: m,
						beforeEditable: p
					}
				})),
				ot = Object(E.t)();
			class rt extends r.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => {
						this.props.sendEvent(t => ({
							source: Object(k.b)(this.props.pageName),
							action: "click",
							noun: e
						}))
					}, this.onClickSubredditLink = () => {
						this.props.sendEvent(y.c())
					}
				}
				componentDidUpdate(e) {
					(this.props.pageName && this.props.pageName !== e.pageName || this.props.page && this.props.page !== e.page) && (document.documentElement.scrollTop = document.body.scrollTop = 0)
				}
				render() {
					const {
						props: e
					} = this;
					if (!e.subreddit) {
						const t = Object(_.a)(e.contentGateInfo, e.renderNSFWContentGate, e.match.params.subredditName);
						return t ? r.a.createElement(m.default, t) : null
					}
					const t = !!e.moderatorPermissions;
					return r.a.createElement(Qe, null, r.a.createElement(Ye, null, r.a.createElement(Ze, {
						subredditOrProfile: e.subreddit
					}), r.a.createElement(Je, {
						to: e.subreddit.url,
						onClick: this.onClickSubredditLink
					}, e.subreddit.displayText), e.pageName && `/ ${g(e.pageName)}`), r.a.createElement($e, null, e.moderatorPermissions && r.a.createElement(ze, {
						moderatorPermissions: e.moderatorPermissions,
						pageName: e.pageName,
						subpageName: e.page,
						subreddit: e.subreddit,
						isProfile: !!e.match.params.profileName
					}), r.a.createElement("div", {
						className: Object(l.a)(Xe.a.contentWrapper, t && Xe.a.isModerator)
					}, e.pageName && Object(C.a)(e.pageName, e.moderatorPermissions, e.isScheduledPostsEnabled, e.isEmployee, e.isBroadcastingEnabled) ? r.a.createElement(P.a, {
						after: e.after,
						afterEditable: e.afterEditable,
						before: e.before,
						beforeEditable: e.beforeEditable,
						layout: e.layout,
						moderatorPermissions: e.moderatorPermissions,
						page: e.page,
						pageName: e.pageName,
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: this.sendEventWithName,
						subpageName: e.page,
						subreddit: e.subreddit
					}) : e.moderatorPermissions ? r.a.createElement(U, {
						subredditDisplayText: e.subreddit.displayText
					}) : r.a.createElement(M.a, {
						isModerator: t,
						subredditDisplayText: e.subreddit.displayText
					}))))
				}
			}
			t.default = ot(at(Object(x.c)(rt)))
		},
		"./src/reddit/pages/SubredditCreation/Layout/index.m.less": function(e, t, s) {
			e.exports = {
				Sidebar: "_21QIcELhFLJ4T6uOUKqej7",
				sidebar: "_21QIcELhFLJ4T6uOUKqej7",
				isOverlay: "_3JejK3woZKuE7psWYzZMk-",
				Content: "_2wEvMk0HNO1vMRXR89R4YE",
				content: "_2wEvMk0HNO1vMRXR89R4YE",
				Container: "_3rOOumzhn2kQeSbQA1BtJI",
				container: "_3rOOumzhn2kQeSbQA1BtJI",
				OuterContainer: "_1t_20Pp0ozZf5JHADFW277",
				outerContainer: "_1t_20Pp0ozZf5JHADFW277"
			}
		},
		"./src/reddit/pages/SubredditCreation/index.m.less": function(e, t, s) {
			e.exports = {
				sublabel: "_3iEQMbJzyCJP7q0YQLg6j4",
				subtitle: "_1NkQ5U2m0s_6vOfhCgiIgT",
				radioDescription: "_2VfO_j9K0NqNwA6JyAl8Dk",
				buttonContainer: "rktXqe6ilbY86M7UI5N0",
				isOverlay: "_2-RGOjReVDKqocc0lhfKCD",
				field: "lzEa7-AzGmC9abTt7-RJG",
				isCreatePending: "_3rxpxb7pMWAbGQ6_JA_my7",
				subredditCreation: "_3eSVsnKJOqAQo-ixxTeJcl",
				container: "_2oaybRT7snUp8XlyHlRiSP",
				title: "_19pYcIVThkZW5KMHTi8qsc",
				nsfw: "_hnZsl3c6qOjy4qOD9r0R",
				createButton: "rJOmFCS_DMZSRltlKtpyt",
				pendingText: "oXus6jwjzhkeznWdE45YL",
				metaFieldDescription: "fd5WCBCH7kTLTlNepW054",
				numCommunityTopicsSelected: "_1QES7ND3zudXR2epk08OVa",
				subtextContainer: "_1V23LtWm6tqb0xlD1Xkh-W",
				radioContainer: "_3qUROz4qvkxCG-oEJTkW3x",
				radioContent: "luCqkz2vQaP-L_NeDD98b",
				textButton: "_1HeLiu_c_KBBmvtR1puoSk",
				fullWidthTextContainer: "_2jvToia6nJCdTHqp_Tw_fp",
				Info: "cP738yi9DxlBmCQTtFLop",
				info: "cP738yi9DxlBmCQTtFLop",
				RadioOption: "_2uqw2bfrk5pQeRVMtPVRUR",
				radioOption: "_2uqw2bfrk5pQeRVMtPVRUR",
				StyledTooltip: "_3mMji3dmYN3jsQ2Ri0owBm",
				styledTooltip: "_3mMji3dmYN3jsQ2Ri0owBm",
				Public: "_3fiOvK-VXqZ9cZO0d912xA",
				public: "_3fiOvK-VXqZ9cZO0d912xA",
				RadioIcon: "_1vr9rsoGcISz-S6s7p_6s-",
				radioIcon: "_1vr9rsoGcISz-S6s7p_6s-",
				Restricted: "_3RYKKCLydFkeZVJov0xebO",
				restricted: "_3RYKKCLydFkeZVJov0xebO",
				Private: "_19fLjAFVy42ZR2vocDvgUW",
				private: "_19fLjAFVy42ZR2vocDvgUW",
				Employee: "ExNY0v88NVrkWCfrt55XJ",
				employee: "ExNY0v88NVrkWCfrt55XJ",
				CloseButton: "_1I-ULJ_Pqw5ZwVbFuh5I6W",
				closeButton: "_1I-ULJ_Pqw5ZwVbFuh5I6W",
				ErrorText: "_2ay6MX8oi5mY0chgCSBVHO",
				errorText: "_2ay6MX8oi5mY0chgCSBVHO"
			}
		},
		"./src/reddit/pages/SubredditCreation/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "radioOptions", (function() {
				return Oe
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/formatApiError/index.ts"),
				u = s("./src/reddit/actions/subredditCreation.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/actions/tags/index.ts"),
				h = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx"),
				g = s("./src/reddit/components/MultiOptionSelect/index.tsx"),
				f = s("./src/reddit/models/Tags/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/selectors/tags.ts"),
				v = s("./src/reddit/components/CommunityTopics/index.m.less"),
				C = s.n(v);
			const _ = Object(d.c)({
				availableGlobalOptions: E.f,
				selectedOptions: E.k,
				isLoading: E.E,
				currentInput: E.g,
				selectedPrimaryTag: E.y,
				hasSecondaryTags: E.q
			});
			class k extends o.a.Component {
				constructor() {
					super(...arguments), this.onOptionsChanged = e => {
						const t = e.filter(e => e.selected),
							s = e.filter(e => !e.selected);
						this.onOptionsSelected(t), s.forEach(e => this.onOptionDeselected(e))
					}
				}
				onOptionsSelected(e) {
					const t = f.a - this.props.selectedOptions.length,
						s = e.filter(e => !!e.displayText.trim()),
						n = s.slice(0, t);
					n.forEach(e => {
						this.props.optionSelected({
							...e,
							displayText: e.displayText.trim()
						})
					}), n.length !== s.length && this.props.onMaxTopicsHit()
				}
				onOptionDeselected(e) {
					this.props.optionDeselected({
						...e,
						displayText: e.displayText.trim()
					})
				}
				render() {
					return o.a.createElement("div", {
						className: C.a.communityTopicsContainer
					}, o.a.createElement(b.a, null), (!!this.props.selectedPrimaryTag || this.props.hasSecondaryTags) && o.a.createElement(g.a, {
						addText: n.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						allowFreeTextEntry: !0,
						availableOptions: this.props.availableGlobalOptions,
						dropdownHeaderText: n.fbt._("Suggested topics", null, {
							hk: "1qNrZC"
						}),
						input: this.props.currentInput,
						isError: this.props.selectedOptions.length > f.a,
						isLoading: this.props.isLoading,
						maxOptionLength: f.b,
						onSearchBarFocus: this.props.onSearchBarFocused,
						onInputChanged: e => {
							this.props.onInputChanged(e)
						},
						onOptionsChanged: this.onOptionsChanged,
						selectedOptions: this.props.selectedOptions,
						splitOnCommaPress: !0
					}))
				}
			}
			var y = Object(r.b)(_, e => ({
					optionSelected: t => {
						e(Object(p.c)({
							option: t
						}))
					},
					optionDeselected: t => {
						e(Object(p.b)({
							option: t
						}))
					},
					onInputChanged: t => e(Object(p.a)({
						input: t
					})),
					onSearchBarFocused: () => e((e, t) => {}),
					onMaxTopicsHit: () => e((e, t) => {
						e(Object(h.f)({
							...Object(h.e)(n.fbt._("You can only add up to {max number of topics} community topics", [n.fbt._param("max number of topics", f.a.toString())], {
								hk: "1OySAh"
							}), x.b.Error),
							duration: h.a
						}))
					})
				}))(k),
				O = s("./src/reddit/components/EmailInvitePaintedDoor/loader.tsx"),
				S = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				w = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				I = s("./src/reddit/constants/history.ts"),
				N = s("./src/reddit/contexts/InsideOverlay.tsx"),
				T = s("./src/reddit/controls/Button/index.tsx"),
				P = s("./src/reddit/controls/CheckboxInput/index.tsx"),
				M = s("./src/reddit/controls/ErrorText/index.tsx"),
				R = s("./src/reddit/controls/RadioInput/index.tsx"),
				A = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				L = s("./src/reddit/controls/TextButton/index.tsx"),
				F = s("./src/reddit/helpers/trackers/emailInvite.ts"),
				D = s("./src/reddit/helpers/trackers/screenview.ts"),
				U = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				B = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				W = s("./src/reddit/icons/svgs/Close/index.tsx"),
				H = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				V = s("./src/reddit/icons/svgs/Info/index.tsx"),
				q = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				G = s("./src/reddit/icons/svgs/User/index.tsx"),
				z = s("./src/reddit/models/Subreddit/index.ts"),
				K = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				X = s("./src/config.ts"),
				Q = s("./src/reddit/pages/SubredditCreation/Layout/index.m.less"),
				J = s.n(Q);
			var Y = e => o.a.createElement("div", {
					className: J.a.OuterContainer
				}, o.a.createElement("div", {
					className: Object(l.a)(e.className, J.a.Container, {
						[J.a.isOverlay]: e.isOverlay
					})
				}, o.a.createElement("div", {
					className: Object(l.a)(J.a.Sidebar, {
						[J.a.isOverlay]: e.isOverlay
					}),
					style: {
						backgroundImage: `url(${X.a.assetPath}/img/${e.isOverlay?"community-creation":"partner-connection"}.png)`
					}
				}), o.a.createElement("div", {
					className: Object(l.a)(J.a.Content, {
						[J.a.isOverlay]: e.isOverlay
					})
				}, e.children))),
				Z = s("./src/reddit/constants/experiments.ts"),
				$ = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ee = s("./src/reddit/selectors/experiments/utils.ts"),
				te = s("./src/reddit/selectors/user.ts");
			const se = Object(d.a)(e => Object($.c)(e, {
					experimentName: Z.z,
					experimentEligibilitySelector: ne
				}), ee.a),
				ne = e => Object(te.I)(e) || Object(te.J)(e),
				ae = Object(d.a)(se, e => e === Z.F.Optional),
				oe = Object(d.a)(se, e => e === Z.F.Remove);
			var re = s("./src/reddit/selectors/experiments/emailInvite.ts"),
				ie = s("./src/reddit/selectors/subreddit.ts"),
				de = s("./src/reddit/pages/SubredditCreation/index.m.less"),
				le = s.n(de),
				ce = s("./src/lib/lessComponent.tsx");
			const ue = 21,
				me = 500,
				pe = "create-title-info",
				he = ce.a.wrapped(V.a, "Info", le.a),
				be = ce.a.wrapped(A.a, "RadioOption", le.a),
				ge = ce.a.wrapped(S.c, "Tooltip", le.a),
				fe = ce.a.wrapped(G.a, "Public", le.a),
				xe = ce.a.wrapped(H.a, "Restricted", le.a),
				Ee = ce.a.wrapped(q.a, "Private", le.a),
				ve = ce.a.wrapped(B.a, "Employee", le.a),
				Ce = ce.a.wrapped(W.a, "CloseButton", le.a),
				_e = ce.a.wrapped(M.b, "ErrorText", le.a),
				ke = Object(d.c)({
					error: ie.h,
					isCreatePending: ie.k,
					isEmailInviteExperimentEnabled: re.a,
					isEmployee: te.G,
					isTopicOptional: ae,
					isTopicRemoved: oe,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(te.gb)(e),
					userIsSuspended: te.O,
					allTags: E.e,
					existingTags: E.h,
					newTags: E.i,
					selectedCommunityTopicsOptions: E.k,
					selectedPrimaryTagId: E.j
				}),
				ye = Object(r.b)(ke, e => ({
					createCommunity: t => e(Object(u.f)(t)),
					clearErrors: () => e(Object(u.e)()),
					onCloseLocation: t => e(Object(i.b)(t)),
					onShowTooltip: () => e(Object(m.f)({
						tooltipId: pe
					})),
					onHideTooltip: () => e(Object(m.i)())
				})),
				Oe = (e, t) => [o.a.createElement(be, {
					key: "public",
					showButton: !0,
					value: "public"
				}, o.a.createElement("div", {
					className: le.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(fe, null)), o.a.createElement("div", {
					className: le.a.radioContainer
				}, o.a.createElement("div", {
					className: le.a.sublabel
				}, n.fbt._("Public", null, {
					hk: "DK992"
				})), o.a.createElement("div", {
					className: Object(l.a)(le.a.metafieldDescription, le.a.radioDescription)
				}, n.fbt._("Anyone can view, post, and comment to this community", null, {
					hk: "1PfFUA"
				}))))), o.a.createElement(be, {
					key: "restricted",
					showButton: !0,
					value: "restricted"
				}, o.a.createElement("div", {
					className: le.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(xe, null)), o.a.createElement("div", {
					className: le.a.radioContainer
				}, o.a.createElement("div", {
					className: le.a.sublabel
				}, n.fbt._("Restricted", null, {
					hk: "1iBTDq"
				})), o.a.createElement("div", {
					className: Object(l.a)(le.a.metafieldDescription, le.a.radioDescription)
				}, Object(K.g)(t))))), o.a.createElement(be, {
					key: "private",
					showButton: !0,
					value: "private"
				}, o.a.createElement("div", {
					className: le.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(Ee, null)), o.a.createElement("div", {
					className: le.a.radioContainer
				}, o.a.createElement("div", {
					className: le.a.sublabel
				}, n.fbt._("Private", null, {
					hk: "3q5SYn"
				})), o.a.createElement("div", {
					className: Object(l.a)(le.a.metafieldDescription, le.a.radioDescription)
				}, n.fbt._("Only approved users can view and submit to this community", null, {
					hk: "3z8OI6"
				}))))), o.a.createElement(be, {
					key: "employees_only",
					showButton: !0,
					value: "employees_only",
					hidden: !e
				}, o.a.createElement("div", {
					className: le.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(ve, null)), o.a.createElement("div", {
					className: le.a.radioContainer
				}, o.a.createElement("div", {
					className: le.a.sublabel
				}, n.fbt._("Employees only", null, {
					hk: "1arrQC"
				})), o.a.createElement("div", {
					className: Object(l.a)(le.a.metafieldDescription, le.a.radioDescription)
				}, n.fbt._("Only Reddit employees can view and submit to this community", null, {
					hk: "3ty23C"
				})))))];
			class Se extends o.a.Component {
				constructor(e) {
					super(e), this.onNameChange = e => {
						this.setState({
							name: e.target.value
						})
					}, this.onDescriptionChange = e => {
						this.setState({
							description: e.target.value
						})
					}, this.update = (e, t) => this.setState({
						[t]: e
					}), this.onTypeChange = e => {
						this.setState({
							type: e
						})
					}, this.onInviteViaEmailClick = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(F.a)("community_creation")), this.setState({
							showEmailInviteModal: !0
						})
					}, this.onCloseInviteViaEmailModal = () => {
						this.setState({
							showEmailInviteModal: !1
						})
					}, this.onCreateCommunityClick = () => {
						this.props.isCreatePending || (clearTimeout(this.timeout), this.props.createCommunity({
							name: this.state.name,
							publicDescription: this.state.description,
							type: this.state.type,
							over18: this.state.over18,
							restrictCommenting: this.state.restrictCommenting,
							restrictPosting: this.state.restrictPosting,
							allTags: this.props.allTags,
							newTags: this.props.newTags,
							existingTags: this.props.existingTags,
							primaryTagId: this.props.selectedPrimaryTagId || void 0
						}), this.timeout = window.setTimeout(() => {
							this.props.isCreatePending && this.setState({
								waitingForSuccessfulCommunity: !0
							})
						}, 2e3))
					}, this.errorHelper = e => {
						if (!e) return {};
						const t = e.fields && e.fields.length && e.fields[0] && e.fields[0].field,
							s = e.type;
						if ("name" === t) {
							if ("NO_TEXT" === s) return {
								name: n.fbt._("A community name is required", null, {
									hk: "QIlYS"
								})
							};
							if ("BAD_SR_NAME" === s) return {
								name: n.fbt._("Make sure your community name follows all of the formatting rules", null, {
									hk: "1yzUHm"
								})
							};
							if ("SUBREDDIT_EXISTS" === s) return {
								name: n.fbt._("This community name is already taken", null, {
									hk: "3xeE7r"
								})
							};
							if ("SUBREDDIT_UNAVAILABLE" === s) return {
								name: n.fbt._("This community name is unavailable", null, {
									hk: "15j6BB"
								})
							}
						} else {
							if ("public_description" === t) return {
								publicDescription: n.fbt._("A community description is required", null, {
									hk: "32uyXy"
								})
							};
							if ("topics" === t && "TOPICS_MISSING" === s) return {
								topics: n.fbt._("A primary topic is required", null, {
									hk: "2W8L8A"
								})
							}
						}
						return {
							generic: Object(c.a)(e)
						}
					}, this.state = {
						name: "",
						description: "",
						type: z.f.Public,
						over18: !1,
						waitingForSuccessfulCommunity: !1,
						restrictCommenting: !1,
						restrictPosting: !0,
						showEmailInviteModal: !1
					}
				}
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(D.w)()), this.props.clearErrors()
				}
				componentWillUnmount() {
					clearTimeout(this.timeout)
				}
				render() {
					const {
						error: e,
						location: t,
						isCreatePending: s,
						isEmailInviteExperimentEnabled: a,
						isEmployee: r,
						isOverlay: i,
						isTopicOptional: d,
						isTopicRemoved: c,
						onCloseLocation: u,
						onHideTooltip: m,
						onShowTooltip: p,
						sendEvent: h,
						userDoesNotHaveEnoughExpToCreateCommunity: b,
						userIsSuspended: g
					} = this.props, x = this.errorHelper(e), {
						over18: E,
						showEmailInviteModal: v,
						waitingForSuccessfulCommunity: C
					} = this.state;
					return o.a.createElement(Y, {
						className: Object(l.a)(le.a.subredditCreation, {
							[le.a.isOverlay]: i
						}),
						isOverlay: i
					}, o.a.createElement("div", {
						className: le.a.container
					}, o.a.createElement("h1", {
						className: le.a.title
					}, n.fbt._("Create a community", null, {
						hk: "SlFa7"
					}), i && o.a.createElement(Ce, {
						onClick: () => {
							h(Object(U.a)()), u(t.state[I.a.CloseLocation])
						}
					})), b ? o.a.createElement("h2", {
						className: le.a.sublabel
					}, n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "44qhJp"
					})) : g ? o.a.createElement("h2", {
						className: le.a.sublabel
					}, n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "3trJMZ"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(w.e, {
						hideCountdown: !0,
						isCreateCommunity: !0,
						isRequired: !0,
						label: n.fbt._("Name", null, {
							hk: "3OIzgl"
						}),
						textContainerClassName: le.a.fullWidthTextContainer,
						onChange: this.onNameChange,
						maxChars: ue,
						value: this.state.name,
						subtext: o.a.createElement("span", {
							className: le.a.subtextContainer
						}, n.fbt._("Community names including capitalization cannot be changed.", null, {
							hk: "VjrZg"
						}), o.a.createElement("span", {
							id: pe,
							onMouseEnter: p,
							onMouseLeave: m,
							className: le.a.info
						}, o.a.createElement(he, null), o.a.createElement(ge, {
							caretOnTop: !0,
							tooltipId: pe,
							text: n.fbt._('Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").', null, {
								hk: "3RsycS"
							})
						})))
					}), x.name && o.a.createElement(_e, null, x.name), !c && o.a.createElement(o.a.Fragment, null, o.a.createElement(w.k, {
						isRequired: !d,
						label: n.fbt._("Topics", null, {
							hk: "2iixv1"
						}),
						textContainerClassName: le.a.fullWidthTextContainer,
						subtext: o.a.createElement("span", {
							className: le.a.subtextContainer
						}, n.fbt._("This will help relevant users find your community.", null, {
							hk: "3LM2Jb"
						}), o.a.createElement("span", null, `${this.props.selectedCommunityTopicsOptions.length}/${f.a}`)),
						direction: "column"
					}, o.a.createElement(y, null)), x.topics && o.a.createElement(_e, null, x.topics)), o.a.createElement(w.g, {
						hideCountdown: !0,
						isCreateCommunity: !0,
						isRequired: !0,
						label: n.fbt._("Description", null, {
							hk: "4gli9v"
						}),
						onChange: this.onDescriptionChange,
						maxChars: me,
						rows: 2,
						subtext: n.fbt._("This is how new members come to understand your community.", null, {
							hk: "35Gh2u"
						}),
						textContainerClassName: le.a.fullWidthTextContainer,
						value: this.state.description
					}), x.publicDescription && o.a.createElement(_e, null, x.publicDescription), o.a.createElement(w.k, {
						label: n.fbt._("Community type", null, {
							hk: "152EhZ"
						}),
						direction: "column",
						isCreateCommunity: !0,
						textContainerClassName: le.a.fullWidthTextContainer
					}, o.a.createElement(R.a, {
						value: this.state.type,
						name: "type",
						onChange: this.onTypeChange
					}, Oe(r, "post"))), o.a.createElement("div", {
						className: Object(l.a)(le.a.field, {
							[le.a.isCreatePending]: s
						})
					}, o.a.createElement("div", {
						className: le.a.subtitle
					}, n.fbt._("Adult content", null, {
						hk: "20arB"
					})), o.a.createElement(P.a, {
						name: "over18",
						value: E,
						onChange: () => this.update(!this.state.over18, "over18"),
						disabled: s
					}, o.a.createElement("div", {
						className: le.a.nsfw
					}, "NSFW"), o.a.createElement("div", {
						className: le.a.sublabel
					}, n.fbt._("18+ year old community", null, {
						hk: "1XxZMV"
					})))), a && o.a.createElement("div", {
						className: Object(l.a)(le.a.field, {
							[le.a.isCreatePending]: s
						})
					}, o.a.createElement(L.a, {
						className: le.a.textButton,
						onClick: this.onInviteViaEmailClick
					}, n.fbt._("Invite members via email", null, {
						hk: "2uViIf"
					}))), x.generic && o.a.createElement(_e, null, x.generic), C && o.a.createElement("div", {
						className: le.a.pendingText
					}, n.fbt._("Your community is being created...", null, {
						hk: "3dSTrq"
					})), o.a.createElement("div", {
						className: Object(l.a)(le.a.buttonContainer, {
							[le.a.isOverlay]: i
						})
					}, i && o.a.createElement(T.q, {
						disabled: s,
						className: le.a.createButton,
						onClick: () => {
							u(t.state[I.a.CloseLocation]), h(Object(U.a)())
						},
						priority: T.b.Secondary
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(T.q, {
						disabled: s,
						className: le.a.createButton,
						onClick: this.onCreateCommunityClick
					}, n.fbt._("Create Community", null, {
						hk: "QE8Y3"
					}))))), v && o.a.createElement(O.a, {
						onClose: this.onCloseInviteViaEmailModal,
						sendEvent: h
					}))
				}
			}
			t.default = Object(j.c)(ye(Object(N.b)(Se)))
		},
		"./src/reddit/selectors/experiments/emailInvite.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.Kb
				});
				return !(!t || Object(n.Fd)(t))
			}
		},
		"./src/reddit/selectors/streamingModSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			}));
			const n = {
					startTime: "",
					endTime: ""
				},
				a = {
					isLiveStreamingEnabled: !1,
					maxLiveStreams: void 0,
					minKarma: void 0,
					minAccountAgeDays: void 0,
					durationLimitSeconds: void 0,
					schedule: {
						sunday: n,
						monday: n,
						tuesday: n,
						wednesday: n,
						thursday: n,
						friday: n,
						saturday: n
					},
					whitelistedUsers: [],
					broadcasterPrompt: "",
					isDiscoveryUnitShown: !1,
					inSubMinKarma: void 0
				},
				o = (e, t) => {
					const s = e.streaming.modSettings[t.subredditId];
					return s ? {
						isLiveStreamingEnabled: s.isLiveStreamingEnabled,
						maxLiveStreams: s.maxLiveStreams,
						minKarma: s.minKarma,
						minAccountAgeDays: s.minAccountAgeDays,
						durationLimitSeconds: s.durationLimitSeconds,
						schedule: {
							sunday: l(s.weeklySchedule.sunday),
							monday: l(s.weeklySchedule.monday),
							tuesday: l(s.weeklySchedule.tuesday),
							wednesday: l(s.weeklySchedule.wednesday),
							thursday: l(s.weeklySchedule.thursday),
							friday: l(s.weeklySchedule.friday),
							saturday: l(s.weeklySchedule.saturday)
						},
						whitelistedUsers: s.whitelistedRedditors,
						broadcasterPrompt: s.broadcasterPrompt,
						isDiscoveryUnitShown: s.isDiscoveryUnitShown,
						inSubMinKarma: s.inSubMinKarma
					} : a
				},
				r = (e, t) => !!e.streaming.modSettings[t],
				i = e => !!e.streaming.api.pending,
				d = (e, t) => !!e.streaming.modSettings[t] && e.streaming.modSettings[t].isLiveStreamingEnabled,
				l = e => ({
					...n,
					...e[0]
				}),
				c = (e, t) => {
					const s = e.streaming.modSettings[t.subredditId];
					if (!s) return !1;
					const n = new Date;
					return u(n, s.weeklySchedule)
				},
				u = (e, t) => {
					const s = m(e);
					return p(s, t).some(t => h(e, t))
				},
				m = e => {
					return ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][e.getUTCDay()]
				},
				p = (e, t) => t[e],
				h = (e, t) => {
					const s = e.getUTCHours(),
						n = e.getUTCMinutes(),
						{
							startTime: a,
							endTime: o
						} = t,
						[r, i] = a.split(":").map(Number),
						[d, l] = o.split(":").map(Number);
					let c = 60 * r + i,
						u = 60 * d + l;
					const m = 60 * s + n;
					return 1439 === u && u++, 1439 === c && c++, m >= c && m < u
				}
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "p", (function() {
				return l
			})), s.d(t, "q", (function() {
				return c
			})), s.d(t, "o", (function() {
				return u
			})), s.d(t, "n", (function() {
				return m
			})), s.d(t, "i", (function() {
				return p
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "m", (function() {
				return g
			})), s.d(t, "k", (function() {
				return f
			})), s.d(t, "l", (function() {
				return x
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "g", (function() {
				return _
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const o = [],
				r = (e, t) => {
					var s;
					const {
						subredditName: n
					} = t;
					if (null === (s = e.pages) || void 0 === s ? void 0 : s.subredditWiki) return e.pages.subredditWiki.directory[n.toLowerCase()]
				},
				i = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.subreddits.api.wiki.pending[s.toLowerCase()]
				},
				d = (e, t) => {
					var s;
					const n = Object(a.a)(t);
					if (null === (s = e.pages) || void 0 === s ? void 0 : s.subredditWiki) return e.pages.subredditWiki.pages[n]
				},
				l = (e, {
					listingKey: t
				}) => e.pages.subredditWiki.revisions.listings[t],
				c = (e, {
					listingKey: t
				}) => !!e.pages.subredditWiki.revisions.api.pending[t],
				u = (e, {
					listingKey: t
				}) => !!e.pages.subredditWiki.revisions.api.error[t],
				m = (e, t) => {
					return (e => e.pages.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				p = (e, {
					key: t
				}) => e.pages.subredditWiki.diff[t],
				h = (e, t) => {
					const s = Object(a.a)(t);
					return e.pages.subredditWiki.pageSettings[s]
				},
				b = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[s.toLowerCase()]
				},
				g = Object(n.a)((e, {
					subredditName: t
				}) => {
					const s = t.toLowerCase(),
						n = e.pages.subredditWiki.wikiContributors.listing,
						a = n.userOrder[s],
						r = n.models[s];
					return a ? a.map(e => r[e]) : o
				}),
				f = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[s.toLowerCase()]
				},
				x = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[s.toLowerCase()]
				},
				E = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[s.toLowerCase()]
				},
				v = Object(n.a)((e, {
					subredditName: t
				}) => {
					const s = t.toLowerCase(),
						n = e.pages.subredditWiki.wikiBannedContributors.listing,
						a = n.userOrder[s],
						r = n.models[s];
					return a ? a.map(e => r[e]) : o
				}),
				C = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[s.toLowerCase()]
				},
				_ = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[s.toLowerCase()]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationPages.7876470bb429870a16ff.js.map