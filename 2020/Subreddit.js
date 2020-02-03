// https://www.redditstatic.com/desktop2x/Subreddit.53ea1476a38343f5cc9a.js
// Retrieved at 2/3/2020, 5:50:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "CollectionCommentsPage~CommentsPage~Explore~Frontpage~Multireddit~ProfileComments~ProfileOverview~Pr~a9aa95f5", "ModListing~ModQueuePages~Multireddit~ProfilePosts~SearchResults~Topic", "ModListing~Multireddit~ProfilePosts", "Explore~Multireddit", "SubredditLeaderboard~Topic", "CategoriesNavigation"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/bignumber.js/bignumber.js");

			function r(e, t) {
				const s = new n.BigNumber(e),
					r = new n.BigNumber(t),
					o = new n.BigNumber(s.dividedBy(r)),
					a = new n.BigNumber("100").multipliedBy(o);
				return new n.BigNumber(a).toNumber()
			}
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const n = e => e;

			function r(e, t, s) {
				const [r, o] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: a = n
				} = t || {};
				let {
					start: i = 0,
					end: c = r
				} = t || {};
				if ((i = i < 0 ? 0 : i) >= (c = c > r ? r : c)) return;
				let d = o(i),
					l = a(d, i),
					m = i;
				for (let n = i + 1; n < c; n++) {
					const e = o(n),
						t = a(e, n);
					if (t !== l) {
						if (!1 === s(d, l, m, n)) return;
						l = t, m = n, d = e
					}
				}
				s(d, l, m, c)
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/i18n/utils.ts");
			const r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				o = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				a = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, s) => {
					const a = t ? e.getUTCMonth() : e.getMonth(),
						i = s ? o : r;
					return Object(n.c)(i[a])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function d(e, t, s, n) {
				const r = new Date(1e3 * e),
					o = i(r, s, n),
					d = t ? a(r, s) + ", " : "";
				return "".concat(o, " ").concat(d).concat(c(r, s))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/app/strings/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/config.ts"),
				l = s("./src/reddit/endpoints/governance/requester.ts");
			var m = s("./src/reddit/endpoints/governance/poll.ts");
			var u = s("./src/reddit/endpoints/governance/wallet.ts"),
				p = s("./src/reddit/models/Poll/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/selectors/gov.ts"),
				x = s("./src/reddit/actions/governance/constants.ts"),
				y = s("./src/reddit/actions/governance/errorToast.ts");
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "h", (function() {
				return P
			})), s.d(t, "i", (function() {
				return B
			})), s.d(t, "f", (function() {
				return D
			})), s.d(t, "g", (function() {
				return F
			})), s.d(t, "j", (function() {
				return R
			})), s.d(t, "c", (function() {
				return A
			}));
			const f = Object(r.a)(x.b),
				v = Object(r.a)(x.c),
				O = Object(r.a)(x.d),
				C = Object(r.a)(x.e),
				E = Object(r.a)(x.f),
				j = (Object(r.a)(x.g), Object(r.a)(x.h), Object(r.a)(x.i)),
				w = Object(r.a)(x.j),
				S = Object(r.a)(x.k),
				_ = Object(r.a)(x.l),
				N = Object(r.a)(x.r),
				P = Object(r.a)(x.s),
				k = Object(r.a)(x.t),
				I = Object(r.a)(x.u),
				T = Object(r.a)(x.v),
				L = Object(r.a)(x.w),
				M = Object(r.a)(x.x),
				B = Object(r.a)(x.y),
				D = (e, t) => async (s, n, r) => {
					let o, {
							apiContext: a,
							gqlContext: c
						} = r,
						d = n().polls.models[e];
					if (s(S({
							pollId: e
						})), (o = d.type === p.a.GA ? await Object(m.c)(c(), e, t) : await Object(m.b)(a(), d.subredditId, e, t)).ok) {
						if (d.type === p.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							s(E({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else s(_(o.body));
						const r = n();
						if ((d = r.polls.models[e]) && Object(p.d)(d)) {
							const {
								postId: e
							} = d, t = r.posts.models[e];
							t && t.voteState === h.a.notVoted && s(Object(i.N)(e))
						}
					} else s(w({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(y.a)(s, o.error || o.errors[0].messsage)
				}, F = (e, t) => async (s, r, i) => {
					let {
						apiContext: m
					} = i;
					s(k());
					const u = r().transfers.communityPoints.contentId || void 0,
						p = await
					function(e, t) {
						return Object(l.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(d.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(m(), Object.assign({}, e, {
						contentId: u
					}));
					if (p.ok) {
						const i = r().user.language;
						s(I(Object.assign({}, p.body, {
							subredditId: e.subredditId
						}))), s(Object(c.e)({
							kind: b.b.SuccessCommunity,
							text: Object(n.a)(i, "gov.transferSuccess", {
								amount: Object(o.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(g.o)(r(), {
									subredditId: e.subredditId
								})
							})
						})), t && s(Object(a.f)())
					} else s(N({
						error: p.error
					})), Object(y.a)(s, p.error)
				}, R = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					t(L());
					const o = await Object(u.a)(r(), e);
					o.ok ? t(M(o.body)) : t(T({
						error: o.error
					}))
				}, A = (e, t) => async (s, r, o) => {
					let {
						apiContext: a
					} = o;
					s(O());
					const i = await
					function(e, t, s) {
						return Object(l.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(d.a.metaUrl, "/wallets/").concat(s, "/me")
						})
					}(a(), e, t);
					if (i.ok) {
						s(M({
							[t]: i.body
						}));
						const o = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						s(Object(c.e)({
							kind: b.b.SuccessCommunity,
							text: Object(n.a)(r().user.language, o, {
								tokenName: Object(g.o)(r(), {
									subredditId: t
								})
							})
						}))
					} else Object(y.a)(s, i.error)
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return f
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/structuredStyles/index.ts"),
				o = s("./src/reddit/actions/subreddit/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/reddit/constants/blade.ts"),
				c = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				m = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/structuredStyles.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts");
			const h = Object(n.a)(o.p),
				g = Object(n.a)(o.q),
				x = Object(n.a)(o.o),
				y = (e, t, s) => async (n, r, o) => {
					const a = Object(p.B)(r(), {
						subredditName: e
					});
					if (a) return f(a, t, s)(n, r, o)
				}, f = (e, t, s) => async (n, o, p) => {
					const y = await Object(l.e)(t);
					n(h());
					const f = o();
					try {
						await Object(r.g)("communityIcon", y, e.id)(n, o, p)
					} catch (O) {
						return Object(b.a)(Object(c.c)(f, "something went wrong with the uploading the image")), n(Object(a.e)({
							kind: m.b.Error,
							text: Object(d.c)("Error uploading image, please try again later")
						})), void n(x())
					}
					const v = Object(u.d)(o(), {
						name: "communityIcon"
					});
					if (!v) return Object(b.a)(Object(c.c)(f, "image is null")), n(Object(a.e)({
						kind: m.b.Error,
						text: Object(d.c)("Error uploading image, please try again later")
					})), void n(x());
					await Object(r.k)(e.id, {
						communityIcon: v
					}, i.b.idCard, s)(n, o, p), n(Object(a.e)({
						kind: m.b.SuccessCommunity,
						text: Object(d.c)("Successfully updated Community Icon!")
					})), n(g())
				}
		},
		"./src/reddit/components/AdHocMultiredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/MultiredditSidebar/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/selectors/multireddit.ts"),
				l = s("./src/reddit/selectors/user.ts");
			const m = Object(c.t)(),
				u = Object(a.c)({
					language: l.P,
					multireddit: d.a,
					subredditCategory: c.l
				}),
				p = Object(o.b)(u);
			t.a = m(p(e => r.a.createElement(i.b, e)))
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/doubleclickForPublishers/index.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/components/BannerAd/index.m.less"),
				x = s.n(g),
				y = s("./src/lib/lessComponent.tsx");
			const f = y.a.div("Container", x.a),
				v = y.a.div("LoadingHitbox", x.a),
				O = e => setTimeout(() => {
					throw e
				}, 0);
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					O(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: s,
						sizes: n = []
					} = this.props;
					try {
						return this.frame && d.a(this.frame, {
							id: e,
							slot: t,
							properties: s,
							sizes: n
						})
					} catch (r) {
						O(r)
					}
				}
				destroySlot() {
					try {
						this.frame && d.b(this.frame)
					} catch (e) {
						O(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(h.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						O(e)
					}
					this.loader && l.a(this.loader, e => {
						this.frame && d.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.isWithinLoadingDistance = !0, this.refresh(this.props), this.loader && l.b(this.loader)
					})
				}
				componentWillUnmount() {
					this.loader && l.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && d.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: s
					} = this.props;
					return t ? r.a.createElement(f, {
						"data-slot": t
					}, r.a.createElement(v, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), r.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : r.a.createElement("div", {
						className: s
					})
				}
			}
			C.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(o.b)(() => Object(a.c)({
				properties: Object(m.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const n = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(u.b)(t.placement, e.user, Object(i.a)("".concat(n).concat(s.url), s.queryParams), Object(p.B)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? d.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(b.b)(C))
		},
		"./src/reddit/components/CategoriesNavigation/Categories/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "pIlxiRadWdcEAlZpZ3w57",
				titleFontH2: "_3vnIPkjF9gBa5GN2XFL1-n",
				titleFontH3: "MvcJW2tVfXEu3OFs8dyUn",
				titleFontH4: "_1EMItyJFgJK_DvcDtXBW5N",
				titleFontH5: "_1mVw3TrTmgMkNGKgvDGV4m",
				titleFontH6: "_1g_9si81i_Ia2WHfpJJysD",
				metadataFont: "hvzV6yOQzOK0U0lb9LIvc",
				flairFont: "_2d5LK8qj16SfFMeiO51ZxA",
				labelsFont: "_25hPBsDfNcLK2OHu5-NUuT",
				actionFont: "bd1M804sJobTLMn9jONGB",
				smallButtonFont: "_1DsZf85_3IARf2X_-StG2S",
				largeButtonFont: "_1aPJzuSXNyPQv9HMxGsdTF",
				tabFont: "_2Or84wUVDTQzfcwoGc7hDN",
				strongTextFont: "_1sReYAe6Edj9tsiVaUjiK6",
				extraSmallFont: "_3TrsJrdDIIsK6TUgXjQlLn",
				bodyFontH1: "_2Je67ruqe_x3kX9CxIJw5j",
				bodyFontH2: "_1uZDFpBkclKxCYaLJCdi8V",
				bodyFontH3: "_1Ohj1SaXQOG-zW_vtbBdJl",
				bodyFontH4: "_3nI5qwD_dLjCpstcuSuzAO",
				bodyFontH5: "_1V79Mo61gXvVAUMIbL8xII",
				bodyFontH6: "_21ljVz_9cQigv7inOMChAh",
				bodyFont: "_1FceGC28wdOKKUG8PA4aSj",
				bodyFontSmall: "G7nA9YAsdHSxeatvbcFfb",
				bodyFontMono: "_3tx_deDztLnD8a7aX8ujTQ",
				container: "_1Fvwm_nUnZInOU-lABGsba",
				item: "_2-ZGfZ8pVitk1Yqnsi6T4O",
				link: "_3F10i35Gntc-o4JIMuVHZP",
				linkActive: "_3yylOQ1SS6TbgJKQ-8Ux7T",
				arrowIcon: "_3mQpw_UbTbG4OYN4uquCwf",
				arrow: "uBD5FR-aGquNrZX3qcvqv",
				arrowLeft: "EJw8EFAUIlMSU6YEHQEpX",
				arrowRight: "_2smW023ohact6kPgSOwT5F"
			}
		},
		"./src/reddit/components/CategoriesNavigation/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3v16LgmyO8Zf2vXkCMxaap",
				showDeprecated: "Ke2rT4kBXk4aoi0TgRmOU",
				showFPR: "_2dq2JfGI0L_UOOpy9csUuG",
				showFpr: "_2dq2JfGI0L_UOOpy9csUuG",
				showM2MTopBanner: "_1hNmV-PmgC6xhngpX4Ww6c",
				showSuspended: "_3kGgzwkJvWmHQjDRfE3Zla",
				blue: "_1k8_u_fQLJ8M1TTkQFfbQR",
				innerContainer: "_3QBsJXq9YmMU-WcnI2nbsH",
				categoriesContainer: "_2GfQ0hFW3IubWuHuFqgPhn"
			}
		},
		"./src/reddit/components/CategoriesNavigation/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/isBrowserDeprecated/index.ts"),
				d = s("./src/reddit/components/AlertBanner/heights.ts"),
				l = s("./src/reddit/actions/monthsToMinutes/initHomeFeed.ts"),
				m = s("./src/reddit/components/CategoriesPlacement/EventCategory/index.tsx"),
				u = s("./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.tsx"),
				p = s("./src/reddit/components/HeaderSubredditSelector/Compact/Tooltip.tsx"),
				b = s("./src/reddit/components/OverflowMenu/index.tsx"),
				h = s("./src/reddit/components/ResizeSensor/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/categories.tsx"),
				y = s("./src/reddit/constants/listings.ts"),
				f = s("./src/reddit/constants/topic.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/Row.tsx"),
				C = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/helpers/name/index.ts"),
				j = s("./src/reddit/helpers/trackers/navigation.ts"),
				w = s("./src/reddit/i18n/components.tsx"),
				S = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				_ = s("./src/reddit/selectors/monthsToMinutes.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/CategoriesPlacement/Categories/index.m.less"),
				k = s.n(P);
			const I = 16,
				T = "A",
				L = I + 20,
				M = "home-category-tooltip",
				B = ["right", "bottom"],
				D = ["right", "top"],
				F = Object(a.c)({
					isEligibleCountry: S.d,
					isHomeLinkEnabled: _.m,
					isM2MEnabled: _.w,
					isNightmode: N.R
				}),
				R = Object(o.b)(F, e => ({
					visitPopulatedHome: () => e(Object(l.b)({}))
				}));
			class A extends r.a.Component {
				constructor(e) {
					super(e), this.handleResize = () => {
						if (!this.categoriesRef || !this.visibleCategoriesRef) return;
						const e = this.categoriesRef.offsetWidth - L;
						let t = 0,
							s = 0;
						const n = Array.from(this.visibleCategoriesRef.children).filter(e => e.tagName === T);
						let r = n[0];
						for (; t < e && r;) {
							(t += r.offsetWidth + I) < e && (r = n[++s])
						}
						this.setState(e => e.visibleCategoriesCount === s ? null : {
							visibleCategoriesCount: s
						})
					}, this.sendCategoryClickEvent = e => {
						this.props.sendEvent(Object(j.b)(Object(E.f)(e)))
					}, this.sendPopularClickEvent = () => {
						this.props.sendEvent(Object(j.b)(y.b.Popular))
					}, this.sendGeopopularClickEvent = () => {
						this.props.sendEvent(Object(j.b)(x.c))
					}, this.sendEventClickEvent = () => {
						this.eventCategory && this.props.sendEvent(Object(j.b)(this.eventCategory.name))
					}, this.sendOverflowClickEvent = () => {
						this.props.sendEvent(Object(j.b)("overflow"))
					}, this.setCategoriesRef = e => {
						this.categoriesRef = e, this.handleResize()
					}, this.setVisibleCategoriesRef = e => {
						this.visibleCategoriesRef = e, this.handleResize()
					}, this.onHomeClick = e => {
						e.preventDefault(), this.props.isHomeLinkEnabled && (this.props.visitPopulatedHome(), this.props.sendEvent(Object(j.b)(y.b.Home)))
					}, this.showTooltip = () => {
						this.setState(e => e.isTooltipOpen ? null : {
							isTooltipOpen: !0
						})
					}, this.hideTooltip = () => {
						this.setState(e => e.isTooltipOpen ? {
							isTooltipOpen: !1
						} : null)
					}, this.renderVisibleCategory = (e, t) => {
						const {
							visibleCategoriesCount: s
						} = this.state, n = Object(E.f)(e.name), o = n === Object(E.f)(this.props.category || "");
						return r.a.createElement(C.a, {
							className: Object(i.a)(k.a.Link, {
								[k.a.active]: o
							}),
							onMouseDown: () => this.sendCategoryClickEvent(n),
							rel: "nofollow",
							tabIndex: t < s ? 0 : -1,
							to: Object(f.b)(n)
						}, n)
					}, this.renderHiddenCategory = e => {
						const t = Object(E.f)(e.name),
							s = t === Object(E.f)(this.props.category || "");
						return r.a.createElement(O.b, {
							className: Object(i.a)(k.a.Row, {
								[k.a.active]: s
							}),
							displayText: t,
							href: Object(f.b)(t),
							isSelected: s,
							key: t,
							onClick: () => this.sendCategoryClickEvent(t),
							rel: "nofollow"
						})
					}, this.state = {
						isTooltipOpen: !1,
						visibleCategoriesCount: e.categories.length
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize), setTimeout(() => {
						this.handleResize()
					}, 2e3)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						categories: e,
						categoriesPlacementVariant: t,
						category: s,
						className: n,
						isEligibleCountry: o,
						isHomeLinkEnabled: a,
						isM2MEnabled: c,
						isNightmode: d
					} = this.props, {
						isTooltipOpen: l,
						visibleCategoriesCount: g
					} = this.state;
					let f = e;
					if (this.eventCategory = Object(S.b)(), this.eventCategory) {
						const e = Object(E.f)(this.eventCategory.name);
						f = f.filter(t => e !== Object(E.f)(t.name))
					}
					if (0 === f.length) return null;
					const v = f.slice(g),
						O = s === y.b.Home,
						j = s === y.b.Popular,
						_ = s === x.c,
						N = s === x.b,
						P = Object(S.c)(t) && !d ? k.a.blue : void 0;
					return r.a.createElement("div", {
						className: Object(i.a)(k.a.Container, P, n)
					}, c && r.a.createElement("span", {
						id: M,
						onMouseEnter: this.showTooltip,
						onMouseLeave: this.hideTooltip,
						onMouseMove: this.showTooltip
					}, r.a.createElement(C.a, {
						className: Object(i.a)(k.a.Link, {
							[k.a.active]: O,
							[k.a.disabled]: !a
						}),
						disabled: !a,
						onMouseDown: this.onHomeClick,
						to: y.c[y.b.Home]
					}, r.a.createElement(w.c, null, "Home"), !a && r.a.createElement(p.a, {
						className: k.a.HomeDisabledTooltip,
						isOpen: l,
						tooltipId: M
					}))), r.a.createElement("span", {
						className: k.a.Item
					}, r.a.createElement(C.a, {
						className: Object(i.a)(k.a.Link, {
							[k.a.active]: j
						}),
						onMouseDown: this.sendPopularClickEvent,
						to: y.c[y.b.Popular]
					}, r.a.createElement(w.c, null, "Popular"))), this.eventCategory && r.a.createElement("span", {
						className: k.a.Item
					}, r.a.createElement(m.a, {
						className: Object(i.a)(k.a.Link, {
							[k.a.active]: N
						}),
						eventCategory: this.eventCategory,
						onMouseDown: this.sendEventClickEvent
					})), o && r.a.createElement("span", {
						className: k.a.Item
					}, r.a.createElement(u.a, {
						changeButtonClassName: k.a.ChangeButton,
						className: Object(i.a)(k.a.Link, {
							[k.a.active]: _
						}),
						onMouseDown: this.sendGeopopularClickEvent
					})), r.a.createElement("div", {
						className: k.a.Categories,
						ref: this.setCategoriesRef
					}, r.a.createElement("div", {
						className: k.a.VisibleCategories,
						ref: this.setVisibleCategoriesRef
					}, f.slice(0, g).map(this.renderVisibleCategory), v.length > 0 && r.a.createElement(b.b, {
						className: k.a.OverflowMenu,
						dropdownClassName: Object(i.a)(k.a.OverflowMenuDropdown, P),
						dropdownId: "categories-navigation",
						isFixed: !0,
						onClick: this.sendOverflowClickEvent,
						targetPosition: B,
						tooltipPosition: D
					}, v.map(this.renderHiddenCategory)), f.slice(g).map(this.renderVisibleCategory))), r.a.createElement(h.a, {
						onResize: this.handleResize
					}))
				}
			}
			var W = Object(v.t)()(R(Object(g.b)(A))),
				H = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				U = s("./src/reddit/constants/experiments.ts"),
				V = s("./src/reddit/constants/postLayout.ts"),
				G = s("./src/reddit/selectors/category.ts"),
				K = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				q = s("./node_modules/lodash/isEqual.js"),
				z = s.n(q),
				Q = s("./node_modules/react-motion/lib/react-motion.js"),
				J = s("./src/reddit/constants/page.ts"),
				Y = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Z = s("./src/reddit/actions/category.ts"),
				X = s("./src/reddit/components/CategoriesNavigation/Categories/index.m.less"),
				$ = s.n(X);
			class ee extends r.a.Component {
				constructor() {
					super(...arguments), this.sendClickEvent = () => {
						this.props.sendEvent(Object(j.b)(Object(E.f)(this.props.category.name)))
					}, this.handleButtonClick = () => {
						this.sendClickEvent(), this.props.loadSubredditsAndNavigate()
					}
				}
				render() {
					const {
						category: e
					} = this.props;
					return r.a.createElement("span", {
						className: $.a.item,
						ref: this.props.innerRef
					}, r.a.createElement(C.a, {
						className: Object(i.a)($.a.link, this.props.isActive && $.a.linkActive),
						to: "".concat(y.c[J.d.Explore], "/").concat(Object(E.f)(e.name)),
						onMouseDown: this.sendClickEvent
					}, e.name))
				}
			}
			var te = Object(o.b)(() => {
				const e = Object(G.c)();
				return Object(a.c)({
					language: N.P,
					subreddits: (t, s) => {
						let {
							category: n
						} = s;
						return e(t, {
							categoryName: Object(E.f)(n.name)
						})
					}
				})
			}, (e, t) => {
				let {
					category: s
				} = t;
				return {
					loadSubredditsAndNavigate: () => e(Z.j(s.id))
				}
			})(Object(g.b)(ee));
			class se extends r.a.Component {
				constructor() {
					super(...arguments), this.scrollTo = e => {
						this.containerRef && (this.containerRef.scrollLeft = e)
					}, this.setContainerRef = e => {
						this.containerRef = e, this.props.innerRef && this.props.innerRef(e)
					}
				}
				componentDidMount() {
					this.scrollTo(this.props.scrollLeft)
				}
				componentDidUpdate(e) {
					this.scrollTo(e.scrollLeft)
				}
				render() {
					return r.a.createElement("div", {
						className: Object(i.a)($.a.container, this.props.className),
						ref: this.setContainerRef
					}, this.props.children)
				}
			}
			const ne = 300,
				re = 24,
				oe = {
					x: 0
				},
				ae = e => r.a.createElement("div", {
					className: Object(i.a)($.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(Y.b, {
					className: $.a.arrowIcon
				}));
			class ie extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						scrollLeft: 0,
						showLeftArrow: !1,
						showRightArrow: !1
					}, this.scrollTo = e => {
						if (!this.containerRef) return;
						const t = this.getMaxScrollLeft(),
							s = Math.min(Math.max(0, e), t),
							n = {
								scrollLeft: s,
								showLeftArrow: 0 !== s,
								showRightArrow: s !== t
							};
						this.setState(e => z()(e, n) ? null : n)
					}, this.handleResize = () => {
						if (!this.containerRef) return;
						let e;
						const {
							scrollLeft: t
						} = this.state, {
							clientWidth: s,
							scrollWidth: n
						} = this.containerRef;
						e = n > s ? {
							scrollLeft: Math.min(this.getMaxScrollLeft(), t),
							showLeftArrow: t > 0,
							showRightArrow: t + s < n
						} : {
							scrollLeft: 0,
							showLeftArrow: !1,
							showRightArrow: !1
						}, this.setState(t => z()(t, e) ? null : e)
					}, this.handleLeftArrowClick = () => {
						const {
							scrollLeft: e
						} = this.state;
						if (!this.containerRef || 0 === e) return;
						this.sendScrollEvent();
						const t = Math.max(0, e - ne);
						this.setState({
							scrollLeft: t,
							showLeftArrow: 0 !== t,
							showRightArrow: !0
						})
					}, this.handleRightArrowClick = () => {
						const {
							scrollLeft: e
						} = this.state, t = this.getMaxScrollLeft();
						if (!this.containerRef || e >= t) return;
						this.sendScrollEvent();
						const s = Math.min(t, e + ne);
						this.setState({
							scrollLeft: s,
							showLeftArrow: !0,
							showRightArrow: s !== t
						})
					}, this.sendScrollEvent = () => {
						this.props.sendEvent(j.c)
					}, this.sendAllCategoriesClickEvent = () => {
						this.props.sendEvent(Object(j.b)("all"))
					}, this.sendPopularClickEvent = () => {
						this.props.sendEvent(Object(j.b)(J.d.Popular))
					}, this.setContainerRef = e => {
						this.containerRef = e, this.handleResize(), this.ensureActiveIsVisible()
					}, this.setActiveRef = e => {
						this.activeRef = e, this.ensureActiveIsVisible()
					}, this.renderCategory = e => {
						const t = Object(E.f)(e.name),
							s = t === Object(E.f)(this.props.category || "");
						return r.a.createElement(te, {
							category: e,
							innerRef: s ? this.setActiveRef : void 0,
							isActive: s,
							key: t
						})
					}, this.renderContent = e => {
						const t = void 0 === this.props.category,
							s = this.props.category === J.d.Popular;
						return r.a.createElement(se, {
							className: this.props.className,
							innerRef: this.setContainerRef,
							scrollLeft: e.x
						}, r.a.createElement("span", {
							className: $.a.item,
							ref: t ? this.setActiveRef : void 0
						}, r.a.createElement(C.a, {
							className: Object(i.a)($.a.link, t ? $.a.linkActive : ""),
							onMouseDown: this.sendAllCategoriesClickEvent,
							to: this.props.baseUrl
						}, r.a.createElement(w.c, null, "All Categories"))), Object(K.d)(this.props.exploreV2Variant) && r.a.createElement("span", {
							className: $.a.item,
							ref: s ? this.setActiveRef : void 0
						}, r.a.createElement(C.a, {
							className: Object(i.a)($.a.link, s ? $.a.linkActive : ""),
							onMouseDown: this.sendPopularClickEvent,
							to: y.c[J.d.Popular]
						}, r.a.createElement(w.c, null, "Popular"))), this.props.categories.map(this.renderCategory), this.state.showLeftArrow && r.a.createElement(ae, {
							className: $.a.arrowLeft,
							onClick: this.handleLeftArrowClick
						}), this.state.showRightArrow && r.a.createElement(ae, {
							className: $.a.arrowRight,
							onClick: this.handleRightArrowClick
						}))
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize), setTimeout(() => {
						this.ensureActiveIsVisible(), this.handleResize()
					}, 2e3)
				}
				componentDidUpdate(e) {
					this.props.category !== e.category && this.ensureActiveIsVisible()
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				getMaxScrollLeft() {
					return this.containerRef ? this.containerRef.scrollWidth - this.containerRef.clientWidth : 0
				}
				ensureActiveIsVisible() {
					if (!this.containerRef || !this.activeRef) return;
					const e = this.state.scrollLeft,
						t = this.state.scrollLeft + this.containerRef.offsetWidth,
						s = this.activeRef.offsetLeft,
						n = this.activeRef.offsetLeft + this.activeRef.offsetWidth;
					if (s > t || n < e) this.scrollTo(this.activeRef.offsetLeft - this.containerRef.offsetWidth / 2 + this.activeRef.offsetWidth / 2);
					else if (n > t) {
						const e = n - t;
						this.scrollTo(this.state.scrollLeft + e + re)
					} else if (s < e) {
						const t = e - s;
						this.scrollTo(this.state.scrollLeft - t - re)
					}
				}
				render() {
					return 0 === this.props.categories.length ? null : r.a.createElement(r.a.Fragment, null, r.a.createElement(Q.Motion, {
						defaultStyle: oe,
						style: {
							x: Object(Q.spring)(this.state.scrollLeft)
						}
					}, this.renderContent), r.a.createElement(h.a, {
						onResize: this.handleResize
					}))
				}
			}
			var ce = Object(g.b)(ie),
				de = s("./src/reddit/components/CategoriesNavigation/index.m.less"),
				le = s.n(de);
			const me = Object(a.c)({
					categories: (e, t) => {
						const s = Object(S.a)(e, t) ? U.eb : void 0;
						return Object(G.r)(e, {
							categoriesOrder: s
						})
					},
					categoriesPlacementVariant: S.a,
					exploreV2Variant: K.a,
					isLoggedIn: N.G,
					isNightmode: N.R,
					layout: v.M
				}),
				ue = Object(o.b)(me),
				pe = Object(v.t)({
					isExplore: v.x,
					pageLayer: e => e
				});
			t.default = pe(ue(e => {
				if (e.isLoggedIn) return null;
				const t = {
					browserInfo: c.a,
					showFPR: !1,
					showSuspended: !1
				};
				return r.a.createElement(H.a, {
					className: Object(i.a)(le.a.container, e.className, Object(d.b)(le.a, t), {
						[le.a.blue]: Object(S.c)(e.categoriesPlacementVariant) && !e.isNightmode
					}),
					considerPinnedSubscriptions: !1,
					containerClassName: e.categoriesPlacementVariant && le.a.innerContainer,
					render: () => {
						if (e.categoriesPlacementVariant) return r.a.createElement(W, {
							baseUrl: e.baseUrl,
							categories: e.categories,
							categoriesPlacementVariant: e.categoriesPlacementVariant,
							category: e.category
						});
						const t = r.a.createElement(ce, {
							baseUrl: e.baseUrl,
							categories: e.categories,
							category: e.category,
							exploreV2Variant: e.exploreV2Variant
						});
						return e.isExplore && e.layout === V.g.Classic ? r.a.createElement("div", {
							className: le.a.categoriesContainer
						}, t) : t
					}
				})
			}))
		},
		"./src/reddit/components/CategoriesPlacement/Categories/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "SZcX5Syr-ed8bBsQe3tNA",
				titleFontH2: "_2fKL1yMob1Wr_gF1WyKIXp",
				titleFontH3: "_17043LP2YLngEfMedYc9Fl",
				titleFontH4: "oszneSSYb1zQ76508n0pZ",
				titleFontH5: "_2t_FwfovyZ9eQtHalf2GWe",
				titleFontH6: "_2hGX9YmziVSoSGJ8_f2dmX",
				metadataFont: "C8LBLgppLu5ATIIm0lTiR",
				flairFont: "_3XE11nCGd8DnQuhC6bVvgH",
				labelsFont: "_1fWq1XHq7PX_1EGJLMjYXH",
				actionFont: "_3GaJpiZImPGC_bkhp7x6BE",
				smallButtonFont: "_3GLp704sTP-aLtGyxuTA5Q",
				largeButtonFont: "_2stgUIR1e6_0Hy9-emRsW1",
				tabFont: "_5i4NqHqMcRT3KDta2Xzso",
				strongTextFont: "_2Kp8QLDa7bi21U50tiI2pZ",
				extraSmallFont: "_3Epb7cGcKP5ddJ1qd4A66X",
				bodyFontH1: "_1GLk49zeZjL2450L3r-Mm2",
				bodyFontH2: "_2fdNRQggfR7yh9tyttjr7g",
				bodyFontH3: "_2Bxj_NWl4eNrHz0wtVvljS",
				bodyFontH4: "_3A5XahHQ6t_SPVGwtdoXXK",
				bodyFontH5: "_2C2ldq5lzTBnkQ6kqwge8h",
				bodyFontH6: "_3lWzVuf96fBXmTtSQHtISW",
				bodyFont: "NrFepRahleC53K3xBeoM1",
				bodyFontSmall: "_35lfgRA2pLgtehOJlu5xrL",
				bodyFontMono: "_3I9wY4Cm0Hs5dsLAHUyvGN",
				Container: "EsD_FVvyVtS5ZSc0S6m-4",
				container: "EsD_FVvyVtS5ZSc0S6m-4",
				Categories: "_2GoOkfqKhRysDsY24tXBRg",
				categories: "_2GoOkfqKhRysDsY24tXBRg",
				VisibleCategories: "_2E7u_tiIyY6AbdEI6kcvLD",
				visibleCategories: "_2E7u_tiIyY6AbdEI6kcvLD",
				Item: "_35ooNMaCXaIrZc9-a0AwMN",
				item: "_35ooNMaCXaIrZc9-a0AwMN",
				Link: "_1oJfQuveGUwNMnAa4Pin2q",
				link: "_1oJfQuveGUwNMnAa4Pin2q",
				active: "_8LMJC9uFN3A1P3XdDWKPh",
				disabled: "_1vPOXuj5YXKTUkq70rzAbf",
				blue: "_1Sy8gTYjJfDxmLcKc8HNKB",
				OverflowMenu: "_3UCRZhAnhRs2rUWJe1imha",
				overflowMenu: "_3UCRZhAnhRs2rUWJe1imha",
				OverflowMenuDropdown: "CaaDPlsZy89vmAHCrdrPF",
				overflowMenuDropdown: "CaaDPlsZy89vmAHCrdrPF",
				Row: "_3fEwJpirWd9u0924h8KVsg",
				row: "_3fEwJpirWd9u0924h8KVsg",
				HomeDisabledTooltip: "_2u4sZzqS4yUuzyzmHNrlOP",
				homeDisabledTooltip: "_2u4sZzqS4yUuzyzmHNrlOP",
				ChangeButton: "_17YQtRa70Gvfc6VW3gVVpD",
				changeButton: "_17YQtRa70Gvfc6VW3gVVpD"
			}
		},
		"./src/reddit/components/CategoriesPlacement/EventCategory/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/reddit/constants/topic.ts"),
				i = s("./src/reddit/controls/InternalLink/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = e => {
				const {
					eventCategory: t
				} = e, s = d(e, ["eventCategory"]);
				return r.a.createElement(i.a, c({}, s, {
					rel: "nofollow",
					to: Object(a.b)(o.b)
				}), t.name)
			}
		},
		"./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.m.less": function(e, t, s) {
			e.exports = {
				Icon: "M27cOlSyrfsU8oXk4Kssq",
				icon: "M27cOlSyrfsU8oXk4Kssq",
				ChangeButton: "joDTxMCm6RDjn1_JXPEOR",
				changeButton: "joDTxMCm6RDjn1_JXPEOR",
				ChangeIcon: "_1Qc0BQ2sBRQafmy-f-xjKP",
				changeIcon: "_1Qc0BQ2sBRQafmy-f-xjKP",
				ModalBody: "_3x6FwuogSdxQ1wuQZecnpe",
				modalBody: "_3x6FwuogSdxQ1wuQZecnpe"
			}
		},
		"./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/components/ModalStyledComponents/Modal.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/categories.tsx"),
				u = s("./src/reddit/constants/topic.ts"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/i18n/utils.ts"),
				g = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 13 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444",
					fill: "inherit",
					fillRule: "evenodd",
					transform: "translate(-4 -2)"
				})),
				x = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				f = s("./src/reddit/selectors/categoriesPlacement.ts"),
				v = s("./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.m.less"),
				O = s.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const j = "geopopular-category-modal",
				w = () => {},
				S = Object(a.c)({
					geoObject: f.a,
					isModalOpen: Object(y.b)(j)
				}),
				_ = Object(o.b)(S, e => ({
					toggleModal: () => e(Object(c.i)(j))
				})),
				N = () => r.a.createElement("div", {
					className: O.a.ModalBody
				}, r.a.createElement(x.a, {
					className: O.a.ChangeIcon
				}));
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.changeGeo = () => {
						this.props.toggleModal(), this.props.sendEvent(Object(b.a)(m.c))
					}
				}
				render() {
					const e = this.props,
						{
							changeButtonClassName: t,
							geoObject: s,
							isModalOpen: n,
							sendEvent: o,
							toggleModal: a
						} = e,
						c = E(e, ["changeButtonClassName", "geoObject", "isModalOpen", "sendEvent", "toggleModal"]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(p.a, C({}, c, {
						rel: "nofollow",
						to: Object(u.b)(m.c)
					}), r.a.createElement(g, {
						className: O.a.Icon
					}), " ", s), r.a.createElement("button", {
						className: Object(i.a)(O.a.ChangeButton, t),
						onClick: this.changeGeo
					}, r.a.createElement(x.a, {
						className: O.a.ChangeIcon
					})), n && r.a.createElement(d.a, {
						actionText: Object(h.c)("Got it"),
						headerText: Object(h.c)("Feature is not available now"),
						modalBody: N,
						modalId: j,
						onConfirm: w,
						toggleModal: a
					}))
				}
			}
			t.a = _(Object(l.b)(P))
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, s) {
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
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				subscribeButton: "_2Oxv8udy0lsocAGXEQxb8x",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				m = s("./src/reddit/components/SubredditNav/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				x = s("./src/reddit/constants/tracking.ts"),
				y = s("./src/reddit/selectors/telemetry.ts");
			var f = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				O = s("./src/reddit/selectors/widgets.ts"),
				C = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				E = s.n(C);
			const j = d.a.wrapped(f.a, "Planet", E.a),
				w = d.a.img("SubredditIcon", E.a),
				S = Object(a.c)({
					spPollsEnabled: h.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(v.a)(e, {
							subredditId: s
						})
					},
					widget: O.f
				});
			t.a = Object(o.b)(S)(Object(c.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					s = e.subreddit ? e.subreddit.name : e.subredditName,
					n = e.subreddit ? e.subreddit.url : e.subredditUrl,
					o = e.subreddit ? e.subreddit.title : "",
					a = e.subreddit && Object(g.a)(e),
					c = !(!e.theme || !a),
					d = s.charAt(0).toUpperCase() + s.slice(1),
					h = !!e.subreddit && e.subredditInlineEditingEnabled,
					f = Object(i.a)(E.a.SubredditIcon, E.a.editableIcon, {
						[E.a.emptyEditableIcon]: !a
					}),
					v = r.a.createElement(l.a, {
						className: f,
						subreddit: e.subreddit,
						iconUrl: a || void 0,
						inTopBar: !0
					}),
					O = c ? r.a.createElement(w, {
						src: a || void 0
					}) : r.a.createElement(j, null),
					C = e.spPollsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0);
				return r.a.createElement("div", {
					className: E.a.container,
					style: {
						maxWidth: e.layout === p.g.Large ? "".concat(984, "px") : "100%"
					}
				}, r.a.createElement("div", {
					className: E.a.subredditMetaContainer
				}, h ? v : O, r.a.createElement("div", {
					className: Object(i.a)(E.a.textContainer, {
						[E.a.textContainerNoIcon]: !c
					})
				}, r.a.createElement("div", {
					className: E.a.text
				}, r.a.createElement("h1", {
					className: E.a.title
				}, o || d), !!o && r.a.createElement("h2", {
					className: E.a.description
				}, "r/", s)), r.a.createElement("div", {
					className: E.a.subscribeButtonContainer
				}, r.a.createElement(u.a, {
					className: E.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => Object.assign({}, y.defaults(t), {
							source: "id_banner",
							action: x.c.CLICK,
							noun: e,
							subreddit: y.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: s,
						type: b.a.SUBREDDIT
					},
					small: !0
				})))), C && r.a.createElement(m.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: n,
					subredditId: t,
					subredditNavContainerClassName: E.a.subredditNavContainer
				}))
			}))
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1BIJI1DdDH_4emkRdSgYtS",
				titleFontH2: "_23v2sEqtCPdekfIaLfBZp0",
				titleFontH3: "_3IPxgawQfrpK8awcnvf2tu",
				titleFontH4: "ZuN5dJ8fJ4v1pojDMILP0",
				titleFontH5: "_2ztaAHYqZbZbLYMI-lEtHX",
				titleFontH6: "FJTuq_jN8uqei2Q4GA66j",
				metadataFont: "_1cBJStdY8xmiR_5jS9gSeH",
				flairFont: "_1fMm1d_nUYPU1bZGhGW2bC",
				labelsFont: "_2_UCOjEBwHnvHk6zBrjPsR",
				actionFont: "_2yyPZbzMoNrAUtQO_SktBd",
				smallButtonFont: "_2_b2a8o6wkToROG8VNRtMR",
				largeButtonFont: "_3Ls4y5dDOPfsU8368YWswn",
				tabFont: "_2TXH3iCv_qoKnRDI_q5ehB",
				strongTextFont: "_1VYMlogcTatyZdJyEPfw1t",
				extraSmallFont: "A_BVHp4etEzRQfPWIVxb2",
				bodyFontH1: "_2ZqUm_Cp2QP_j0eqf4TOLu",
				bodyFontH2: "_3CcMb_6AI06xq5ar12VdGR",
				bodyFontH3: "_2rQURI6yWXPMKy8zTsJVhS",
				bodyFontH4: "_20eyEQiTe3oMfPFHKZsVTk",
				bodyFontH5: "_1LGkFCI_sPLVchg392lGmP",
				bodyFontH6: "NneW2LW2rvek7WBZYLULA",
				bodyFont: "_1WbHqicmob5scrxcNoRM6z",
				bodyFontSmall: "_1JhbrLSCwywCqsws4jUAzS",
				bodyFontMono: "_1DXzqFfRPHDAA7hSJMbTxi",
				banner: "_2bVJFy1zdpBBF6tNX6MsZt",
				button: "_3dn2kMjL3eThyGPEb1oAf-",
				buttonWrapper: "_2MsQ2gmnKXnwElZFA1jCbV",
				close: "_1MiKBKJCDaPRJ7r-vSQ8xU",
				closeContainer: "_3Amqa4WXRxq65XAjmjQw8E",
				heading: "aVXYLWktPH4YxXbOJbfEg",
				postIcon: "_2cBHGzAvbCcbR3bvPSt_Y1",
				text: "_3VcroXmJS3StZ2nIi8JODq"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n, r = s("./src/app/strings/index.ts"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/localStorageAvailable/index.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/components/Translated/index.tsx");
			! function(e) {
				e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner"
			}(n || (n = {}));
			var u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				h = e => a.a.createElement("svg", {
					viewBox: "0 0 56 56",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, a.a.createElement("g", {
					transform: "translate(1 1)",
					fill: "inherit",
					stroke: "inherit",
					fillRule: "evenodd"
				}, a.a.createElement("rect", {
					x: "16",
					y: "35",
					width: "22.4",
					height: "2.8",
					rx: "1.4",
					stroke: "none"
				}), a.a.createElement("path", {
					d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
				}), a.a.createElement("circle", {
					strokeWidth: "2",
					fill: "none",
					cx: "27",
					cy: "27",
					r: "27"
				}))),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/models/Toast/index.ts"),
				y = s("./src/reddit/components/CreatePostBanner/index.m.less"),
				f = s.n(y);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(i.b)(null, (e, t) => {
				let {
					language: s
				} = t;
				return {
					showToast: () => {
						e(Object(d.e)({
							kind: x.b.SuccessCommunity,
							text: Object(r.a)(s, "postCreation.modBanner.dismissed")
						}))
					}
				}
			});
			class C extends a.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(p.F)(n.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
							visible: !1
						}), this.props.showToast(), this.props.sendEvent(Object(b.b)())
					}, this.createPost = () => {
						this.props.sendEvent(Object(b.a)())
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
						subreddit: e
					} = this.props, t = Object(c.a)() && !Object(p.e)(n.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(Object(b.c)()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? a.a.createElement("div", {
						className: f.a.banner
					}, a.a.createElement("button", {
						className: f.a.closeContainer,
						onClick: this.closeBanner
					}, a.a.createElement(g.a, {
						className: f.a.close
					})), a.a.createElement(h, {
						className: f.a.postIcon
					}), a.a.createElement("div", {
						className: f.a.heading
					}, a.a.createElement(m.a, {
						msgId: "postCreation.modBanner.title",
						replacements: {
							displayText: e.displayText
						}
					})), a.a.createElement("div", {
						className: f.a.text
					}, v._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), a.a.createElement("br", null), v._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), a.a.createElement("div", {
						className: f.a.buttonWrapper
					}, a.a.createElement(u.g, {
						className: f.a.button,
						target: "_blank",
						href: "/".concat(e.displayText, "/submit"),
						onClick: this.createPost
					}, a.a.createElement(m.a, {
						msgId: "postCreation.modBanner.button"
					})))) : null
				}
			}
			t.a = O(Object(l.b)(C))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				c = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				d = s.n(c);
			t.a = e => r.a.createElement("div", {
				className: Object(o.a)(Object(i.c)(e.exploreV2Variant) ? d.a.oldContainer : e.exploreV2Variant ? Object(o.a)(d.a.smallContainer, a.b) : d.a.heroContainer, e.className)
			}, r.a.createElement("div", {
				className: Object(o.a)(d.a.header, e.headerClassName)
			}, e.header), r.a.createElement("div", {
				className: Object(o.a)(e.hidePadding ? d.a.bodyHidePadding : d.a.body, e.bodyClassName)
			}, e.children))
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.m.less": function(e, t, s) {
			e.exports = {
				loading: "_3gWqsGamiiRTC2h_yOIcgS"
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/featureFlags/component.tsx"),
				c = s("./src/reddit/components/Economics/CommunityTipJar/async.m.less"),
				d = s.n(c);
			const l = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t
					} = e;
					return r.a.createElement("div", {
						className: Object(a.a)(t, d.a.loading)
					})
				},
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsCommunityTipJar")]).then(s.bind(null, "./src/reddit/components/Economics/CommunityTipJar/index.tsx")).then(e => e.default)
			});
			t.a = Object(i.a)("spCommunityTipJar", l)
		},
		"./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less": function(e, t, s) {
			e.exports = {
				checkContainer: "vLDY173Vj0GmHGlQQPGsJ",
				check: "_1PIZA9aT40J0xlDyxPr-bH",
				col: "_2ueaZW2VmYFP3k8IpO59IR",
				explanation: "_3X0Y99cKtJPNprvvqIyeOk",
				header: "_2tkUUsImD0I5jWUKt77ZAH",
				img: "_2qJnksxaH_YpcbYwW6ggtA",
				tutorial: "_13vSv0_15yzB5YMudJnPJt"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less": function(e, t, s) {
			e.exports = {
				button: "aq9ZqWnC2Xwbkzhr1C8hJ",
				container: "m7z0uN9mDxptXfSHafLTw",
				cover: "xyt2inBPUfRQ_Efcqt_Ab",
				description: "KX_LU59tHaCYNg437pykk",
				freeCard: "_3qfrF-S8Mak5I9Y5F6oJFF",
				fullWidth: "_3c3Kr_1Q_oJTZvtAYy1N-6",
				img: "_2VRR41zg0aqqAAjxIzZGz0",
				title: "gRNqnS3tiW9yK_OX8aSV3",
				premiumCard: "_1J7mAZ1dsFqB0jBKT2A-Ry"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less": function(e, t, s) {
			e.exports = {
				container: "yQNQSPTLUWPNXeKzlqNu6",
				cover: "_24vnSg5ae29l97QtBxVV3-",
				divider: "_2fEN3CscLjkwMnMGeO-Gbi",
				trial: "_2o92N1SUEIcx7a3P7K3tJT"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less": function(e, t, s) {
			e.exports = {
				container: "ez89jyuMsOzC0NO44ciD1",
				cover: "i990kFkfa3m_m5S_U0sma",
				description: "a7ZSke4zXeciCfufC-OWq",
				image: "_29JFielihsv0FuuO4vTOLb",
				preview: "_1gyHt90KLC-GJrapFWERJx",
				redo: "_1sHLf9k2ibP_C7Mx2o9Xcf",
				title: "_2F4sRR7iIwaKQvPPvqmiX-"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less": function(e, t, s) {
			e.exports = {
				crown: "YKwhmGUT9303yZWJlH-QT",
				heading: "_2-PLWgbnP8j-2wARSQiPC6",
				prompt: "_34l-xSb_Lf_m0uJryaeQRG",
				sponsorship: "_2gij23f36Hizly0kdb-hWD",
				text: "NgOyQpTLN-QLfbsXr_kxQ"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/Option/index.m.less": function(e, t, s) {
			e.exports = {
				container: "bIIqFNgEct-dJixmNGzH8",
				controller: "U9kRmM-8uzmN81_cyWilS",
				planet: "OsL6tpn4UXSU4UwEHQpxf",
				user: "_3Q0T-a4HcsAzBW8-YqMrdZ",
				selected: "_2rCRpMr2CIl-rgIl_ikgYT",
				triangle: "_1SxOqeKmgCBvhzxL632u7q"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_1-fWFAeAioWlCembFKUHMX",
				container: "_1ftim-rZF9xZL_CTpqF85f",
				title: "_3sTbD7175DPlp68I03ayUK"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less": function(e, t, s) {
			e.exports = {
				claim: "_2h8JoT5ednzNOqKdVKCHlM",
				close: "_308nelFEzZOnhnqbW5RpPv",
				container: "_26wdyRSALASUyhdTxV6U4k",
				content: "_3D6as82_3SjWTXYShWM5lz",
				dismissedContainer: "_2EAX2PYbs1gAVQGLJ5XaB9",
				dismissedText: "DBgaCJDh9aY3K_vHjS9Q3",
				example: "_3jYACS0eVj0IZYGd02X11f",
				header: "_12kLHf53On8M30LOB009-F",
				successContainer: "_1wtFNjoeAGTIux27TBYRFN"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/uuid/v4.js"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/config.ts"),
				b = s("./src/reddit/i18n/utils.ts"),
				h = s("./src/reddit/icons/svgs/Approve/index.tsx"),
				g = s("./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less"),
				x = s.n(g);
			const y = {
					description: Object(b.c)("Add your new emoji to comments! Use the action in the bottom right corner to add an emoji."),
					src: "".concat(p.a.assetPath, "/img/memberships/banners/how_to_use_emoji.gif")
				},
				f = {
					description: Object(b.c)("Open 'My Badges' in the Sidebar to apply your badge."),
					src: "".concat(p.a.assetPath, "/img/memberships/banners/how_to_apply_badge.gif")
				},
				v = {
					description: Object(b.c)("Want to change your badge? Visit the Gallery in the Sidebar to view the latest styles."),
					src: "".concat(p.a.assetPath, "/img/memberships/banners/how_to_apply_badge.gif")
				};

			function O(e) {
				const t = (e.hideEmoji ? [] : [y]).concat(e.boughtBadge ? f : v);
				return r.a.createElement("article", {
					className: Object(l.a)(e.className, x.a.container)
				}, r.a.createElement("header", {
					className: x.a.header
				}, r.a.createElement("div", {
					className: x.a.checkContainer
				}, r.a.createElement(h.a, {
					className: x.a.check
				})), Object(b.c)("Congrats! Here's how to use it")), r.a.createElement("div", {
					className: x.a.tutorial
				}, t.map(e => {
					let {
						description: t,
						src: s
					} = e;
					return r.a.createElement("div", {
						className: x.a.col,
						key: t
					}, r.a.createElement("img", {
						className: x.a.img,
						src: s
					}), r.a.createElement("div", {
						className: x.a.explanation
					}, t))
				})))
			}
			var C = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/contexts/ApiContext.tsx"),
				j = s("./src/reddit/controls/Button/index.tsx"),
				w = s("./src/reddit/endpoints/economics/banners.ts"),
				S = s("./src/reddit/endpoints/economics/emojis.ts"),
				_ = s("./src/reddit/helpers/economics/membershipPage.ts"),
				N = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				P = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/economics.ts"),
				T = s("./src/reddit/selectors/telemetry.ts"),
				L = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less"),
				M = s.n(L);

			function B(e) {
				return r.a.createElement("article", {
					className: Object(l.a)(e.className, M.a.container, {
						[M.a.fullWidth]: !!e.fullWidth
					})
				}, r.a.createElement("div", {
					className: M.a.cover
				}), r.a.createElement("header", {
					className: M.a.title
				}, e.title), r.a.createElement("img", {
					className: M.a.img,
					src: e.img
				}), r.a.createElement("div", {
					className: M.a.description
				}, e.description), r.a.createElement(j.n, {
					className: M.a.button,
					onClick: e.onClaim
				}, e.cta))
			}
			var D = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts"),
				F = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less"),
				R = s.n(F);

			function A(e) {
				const {
					className: t,
					platform: s,
					playerType: n,
					region: o,
					userIsSubscriber: a,
					onClaim: i
				} = e, c = Object(D.d)({
					platform: s,
					playerType: n,
					region: o,
					style: "bw"
				}), d = Object(D.d)({
					platform: s,
					playerType: n,
					region: o,
					style: "color"
				});
				return r.a.createElement("div", {
					className: Object(l.a)(R.a.container, t)
				}, !a && r.a.createElement(r.a.Fragment, null, r.a.createElement(B, {
					className: R.a.freeCard,
					cta: Object(b.c)("claim"),
					img: c,
					title: Object(b.c)("Claim Free Badge"),
					onClaim: () => i(!1)
				}), r.a.createElement("div", {
					className: R.a.divider
				}, r.a.createElement("div", {
					className: R.a.cover
				}), "OR"), r.a.createElement(B, {
					className: R.a.premiumCard,
					cta: Object(b.c)("become a supporter"),
					description: Object(b.c)("Colored badge + dozens more,\nemojis and GIFs in comments"),
					img: d,
					title: Object(b.c)("Claim Premium Badge"),
					onClaim: () => i(!0)
				}), r.a.createElement("img", {
					className: R.a.trial,
					src: "".concat(p.a.assetPath, "/img/memberships/banners/free-trial.png")
				})), a && r.a.createElement(B, {
					fullWidth: !0,
					className: R.a.fullWidthCard,
					cta: Object(b.c)("claim"),
					img: d,
					title: Object(b.c)("Claim Premium Badge"),
					onClaim: () => i(!1)
				}))
			}
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var W = s("./node_modules/lodash/sample.js"),
				H = s.n(W),
				U = s("./node_modules/react-motion/lib/react-motion.js"),
				V = s("./src/reddit/icons/svgs/Replay/index.tsx"),
				G = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less"),
				K = s.n(G);
			const q = {
				stiffness: 210,
				damping: 20
			};

			function z() {
				return {
					platform: H()(Object.keys(D.a)) || "pc",
					playerType: H()(Object.keys(D.b)) || "casual",
					region: H()(Object.keys(D.c)) || "nae"
				}
			}
			class Q extends r.a.Component {
				constructor(e) {
					super(e), this.state = z()
				}
				render() {
					const {
						platform: e,
						playerType: t,
						region: s
					} = this.state, n = D.a[e], o = D.b[t], a = D.c[s];
					return r.a.createElement("article", {
						className: Object(l.a)(K.a.container, this.props.className)
					}, r.a.createElement("div", {
						className: K.a.cover
					}), r.a.createElement("header", {
						className: K.a.title
					}, Object(b.c)("Example")), r.a.createElement(U.TransitionMotion, {
						defaultStyles: [{
							key: Object(D.d)(Object.assign({}, this.state, {
								style: "color"
							})),
							style: {
								rotation: 0
							}
						}],
						styles: [{
							key: Object(D.d)(Object.assign({}, this.state, {
								style: "color"
							})),
							style: {
								rotation: Object(U.spring)(0, q)
							}
						}],
						willEnter: () => ({
							rotation: -180
						}),
						willLeave: () => ({
							rotation: Object(U.spring)(180, q)
						})
					}, e => r.a.createElement("div", {
						className: K.a.preview
					}, e.map(e => r.a.createElement("img", {
						className: K.a.image,
						key: e.key,
						src: e.key,
						style: {
							transform: "rotateY(".concat(e.style.rotation, "deg)")
						}
					})))), r.a.createElement("footer", {
						className: K.a.description
					}, "".concat(a, ", ").concat(n, ", ").concat(o)), r.a.createElement(V.a, {
						className: K.a.redo,
						onClick: () => this.setState(z())
					}))
				}
			}
			var J = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less"),
				Y = s.n(J);
			const Z = Object(i.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(I.r)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var X = Object(o.b)(Z)((function(e) {
					const t = e.subreddit ? e.subreddit.displayText : "the community";
					return r.a.createElement("header", {
						className: Object(l.a)(Y.a.container, e.className)
					}, r.a.createElement("div", {
						className: Y.a.heading
					}, Object(b.c)("looking for game badge")), r.a.createElement("div", {
						className: Y.a.prompt
					}, Object(b.c)("Find New Gamers to Play Together"), r.a.createElement("div", {
						className: Y.a.sponsorship
					}, r.a.createElement("img", {
						className: Y.a.crown,
						src: "".concat(p.a.assetPath, "/img/memberships/paywall/fortnitebr/Crown.gif")
					}), Object(b.c)("Sponsored by ".concat(Object(b.b)("members", e.meta.memberAltPlural))))), r.a.createElement("div", {
						className: Y.a.text
					}, Object(b.c)("Get a badge that lets you find new teammates in ".concat(Object(b.b)("community", t), ". ")), Object(b.c)("Specify your region, platform, and your play style for the best match. "), Object(b.c)("The badge helps other players find you, and makes it easier for others to start a conversation in Reddit chat.")))
				})),
				$ = s("./src/higherOrderComponents/asTooltip.tsx"),
				ee = s("./src/reddit/controls/Dropdown/index.tsx"),
				te = s("./src/reddit/controls/Dropdown/Row.tsx"),
				se = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				ne = s("./src/reddit/icons/svgs/Planet/index.tsx"),
				re = s("./src/reddit/icons/svgs/User/index.tsx"),
				oe = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/Option/index.m.less"),
				ae = s.n(oe);
			const ie = new Map;
			ie.set(D.a, "LFG_BANNER_PLATFORM_DROPDOWN"), ie.set(D.b, "LFG_BANNER_PLAYERTYPE_DROPDOWN"), ie.set(D.c, "LFG_BANNER_REGION_DROPDOWN");
			const ce = new Map;
			ce.set(D.a, "platform"), ce.set(D.b, "playerType"), ce.set(D.c, "region");
			const de = new Map;
			de.set(D.a, r.a.createElement(e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.7658 8.30457C15.5196 6.40434 14.6685 3.93402 13.992 2.18306C13.4831 0.865888 12.2136 0 10.8015 0H5.01677C3.60472 0 2.33517 0.865888 1.82628 2.18306C1.1498 3.93402 0.298684 6.40434 0.0525311 8.30457C-0.374308 11.5997 1.94027 12 1.94027 12L5.31936 7.9067H10.4989L13.878 12C13.878 12 16.1926 11.5997 15.7658 8.30457ZM4.36141 3.50639C4.94606 3.50639 5.42001 3.03243 5.42001 2.44778C5.42001 1.86313 4.94606 1.38918 4.36141 1.38918C3.77676 1.38918 3.3028 1.86313 3.3028 2.44778C3.3028 3.03243 3.77676 3.50639 4.36141 3.50639ZM7.02295 5.43958C7.02295 6.02423 6.549 6.49818 5.96435 6.49818C5.3797 6.49818 4.90574 6.02423 4.90574 5.43958C4.90574 4.85493 5.3797 4.38097 5.96435 4.38097C6.549 4.38097 7.02295 4.85493 7.02295 5.43958ZM11.4569 3.50639C12.0416 3.50639 12.5155 3.03244 12.5155 2.44779C12.5155 1.86314 12.0416 1.38919 11.4569 1.38919C10.8723 1.38919 10.3983 1.86314 10.3983 2.44779C10.3983 3.03244 10.8723 3.50639 11.4569 3.50639ZM10.9126 5.43958C10.9126 6.02423 10.4386 6.49818 9.85398 6.49818C9.26933 6.49818 8.79538 6.02423 8.79538 5.43958C8.79538 4.85493 9.26933 4.38097 9.85398 4.38097C10.4386 4.38097 10.9126 4.85493 10.9126 5.43958Z"
			})), {
				className: ae.a.controller
			})), de.set(D.b, r.a.createElement(re.a, {
				className: ae.a.user
			})), de.set(D.c, r.a.createElement(ne.a, {
				className: ae.a.planet
			}));
			const le = Object($.a)(ee.a);
			var me, ue = Object(C.b)((function(e) {
					const t = de.get(e.type),
						s = ie.get(e.type);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(l.a)(ae.a.container, e.className, {
							[ae.a.selected]: !!e.selected
						}),
						id: s,
						onClick: e.onToggleDropdown
					}, t, e.text, r.a.createElement(se.b, {
						className: ae.a.triangle
					})), r.a.createElement(le, {
						tooltipId: s,
						isOpen: !!e.tooltipVisible
					}, Object.keys(e.type).map((t, s) => r.a.createElement(te.b, {
						"data-redditStyle": !0,
						key: s,
						index: s,
						displayText: String(e.type[t]),
						onClick: () => {
							e.onChange(t), e.sendEvent(s => {
								const n = T.defaults(s);
								return Object.assign({
									source: "meta",
									action: "click",
									noun: "lfg_banner_customize_badge",
									correlationId: e.correlationId
								}, n, {
									actionInfo: Object.assign({}, n.actionInfo, {
										paneName: ce.get(e.type),
										reason: t
									}),
									subreddit: T.subreddit(s)
								})
							})
						}
					}))))
				})),
				pe = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less"),
				be = s.n(pe),
				he = Object(C.b)(class extends r.a.Component {
					constructor() {
						super(...arguments), this.state = {
							selectedPlatform: void 0,
							selectedPlayerType: void 0,
							selectedRegion: void 0,
							visibleDropdown: void 0
						}
					}
					render() {
						const {
							className: e,
							onGenerate: t
						} = this.props, {
							selectedPlatform: s,
							selectedPlayerType: n,
							selectedRegion: o,
							visibleDropdown: a
						} = this.state, i = s ? D.a[s] : Object(b.c)("platform"), c = n ? D.b[n] : Object(b.c)("player type"), d = o ? D.c[o] : Object(b.c)("region");
						return r.a.createElement("article", {
							className: Object(l.a)(be.a.container, e)
						}, r.a.createElement("header", {
							className: be.a.title
						}, Object(b.c)("Setup Your Badge")), r.a.createElement(ue, {
							correlationId: this.props.correlationId,
							selected: !!o,
							tooltipVisible: "region" === a,
							text: d,
							type: D.c,
							onChange: e => this.setState({
								selectedRegion: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "region"
							}))
						}), r.a.createElement(ue, {
							correlationId: this.props.correlationId,
							selected: !!s,
							tooltipVisible: "platform" === a,
							text: i,
							type: D.a,
							onChange: e => this.setState({
								selectedPlatform: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "platform"
							}))
						}), r.a.createElement(ue, {
							correlationId: this.props.correlationId,
							selected: !!n,
							tooltipVisible: "playerType" === a,
							text: c,
							type: D.b,
							onChange: e => this.setState({
								selectedPlayerType: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "playerType"
							}))
						}), r.a.createElement(j.f, {
							className: be.a.button,
							disabled: !s || !n || !o,
							onClick: () => {
								s && n && o && (t({
									platform: s,
									playerType: n,
									region: o
								}), this.props.sendEvent(e => Object.assign({
									source: "meta",
									action: "click",
									noun: "lfg_banner_generate_badge",
									correlationId: this.props.correlationId
								}, T.defaults(e), {
									subreddit: T.subreddit(e)
								})))
							}
						}, Object(b.c)("generate badge")))
					}
				}),
				ge = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less"),
				xe = s.n(ge);
			! function(e) {
				e.CanClaim = "canclaim", e.Claimed = "claimed", e.Dismissed = "dismissed", e.Generating = "generating", e.Hidden = "hidden", e.Select = "select"
			}(me || (me = {}));
			class ye extends r.a.Component {
				constructor(e) {
					super(e), this.handleClaim = async e => {
						const {
							subscriberState: t,
							subreddit: s
						} = this.props, {
							selectedRegion: n,
							selectedPlatform: r,
							selectedPlayerType: o
						} = this.state;
						if (!(n && r && o && s && t !== I.b.DontKnow)) return null;
						const a = "".concat(n, "_").concat(r, "_").concat(o, "_badge"),
							i = await Object(S.a)(this.props.apiContext(), {
								productId: a,
								subredditId: this.props.subredditId
							});
						i.ok ? (this.setState({
							show: me.Claimed
						}), Object(w.c)(this.props.apiContext(), this.props.subredditId, w.a.LFG), this.props.onBadgeClaimed(a)) : this.props.onError(i.error), e && this.props.onOpenLandingPage(s, this.correlationId), this.props.sendEvent(t => {
							const s = T.defaults(t);
							return Object.assign({
								source: "meta",
								action: "click",
								noun: e && this.correlationId ? "lfg_banner_claim_premium" : "lfg_banner_claim",
								correlationId: this.correlationId
							}, s, {
								actionInfo: Object.assign({}, s.actionInfo, {
									reason: a,
									paneName: w.a.LFG
								}),
								subreddit: T.subreddit(t)
							})
						})
					}, this.handleDismiss = () => {
						this.state.show === me.Claimed ? this.setState({
							show: me.Hidden
						}) : (this.setState({
							show: me.Dismissed
						}), this.props.sendEvent(e => {
							const t = T.defaults(e);
							return Object.assign({
								source: "meta",
								action: "click",
								noun: "lfg_banner_dismiss",
								correlationId: this.correlationId
							}, t, {
								actionInfo: Object.assign({}, t.actionInfo, {
									paneName: w.a.LFG
								}),
								subreddit: T.subreddit(e)
							})
						})), Object(w.c)(this.props.apiContext(), this.props.subredditId, w.a.LFG)
					}, this.handleUndoDismiss = () => {
						this.setState({
							show: me.Select
						}), Object(w.e)(this.props.apiContext(), this.props.subredditId, w.a.LFG), this.props.sendEvent(e => {
							const t = T.defaults(e);
							return Object.assign({
								source: "meta",
								action: "click",
								noun: "lfg_banner_undo_dismiss",
								correlationId: this.correlationId
							}, t, {
								actionInfo: Object.assign({}, t.actionInfo, {
									paneName: w.a.LFG
								}),
								subreddit: T.subreddit(e)
							})
						})
					}, this.state = {
						show: me.Hidden
					}, this.correlationId = d()()
				}
				async componentDidMount() {
					if (this.props.userIsLoggedIn) {
						!!(await Object(w.b)(this.props.apiContext(), this.props.subredditId))[w.a.LFG] || (this.setState({
							show: me.Select
						}), this.props.sendEvent(e => {
							const t = T.defaults(e);
							return Object.assign({
								source: "meta",
								action: "view",
								noun: "lfg_banner",
								correlationId: this.correlationId
							}, t, {
								actionInfo: Object.assign({}, t.actionInfo, {
									paneName: w.a.LFG
								}),
								subreddit: T.subreddit(e)
							})
						}))
					}
				}
				render() {
					const {
						className: e,
						subredditId: t,
						subscriberState: s,
						userIsLoggedIn: n
					} = this.props, {
						show: o,
						selectedRegion: a,
						selectedPlatform: i,
						selectedPlayerType: c
					} = this.state;
					return n && s !== I.b.DontKnow && o !== me.Hidden ? this.state.show === me.Dismissed ? r.a.createElement("div", {
						className: Object(l.a)(xe.a.dismissedContainer, e)
					}, r.a.createElement("div", {
						className: xe.a.dismissedText
					}, Object(b.c)("Ok, we won't show you this again.")), r.a.createElement(j.f, {
						onClick: this.handleUndoDismiss
					}, Object(b.c)("undo"))) : this.state.show === me.Claimed ? r.a.createElement("div", {
						className: Object(l.a)(xe.a.successContainer, e)
					}, r.a.createElement(P.a, {
						className: xe.a.close,
						onClick: this.handleDismiss
					}), r.a.createElement(O, {
						boughtBadge: !0,
						hideEmoji: !0
					})) : r.a.createElement("article", {
						className: Object(l.a)(xe.a.container, e)
					}, r.a.createElement(X, {
						className: xe.a.header,
						subredditId: t
					}), r.a.createElement("div", {
						className: xe.a.content
					}, r.a.createElement(he, {
						correlationId: this.correlationId,
						onGenerate: e => this.setState(() => ({
							show: me.CanClaim,
							selectedRegion: e.region,
							selectedPlatform: e.platform,
							selectedPlayerType: e.playerType
						}))
					}), o === me.Select && r.a.createElement(Q, {
						className: xe.a.example
					}), o === me.CanClaim && a && i && c && r.a.createElement(A, {
						className: xe.a.claim,
						platform: i,
						playerType: c,
						region: a,
						userIsSubscriber: s === I.b.Subscribed,
						onClaim: e => this.handleClaim(e)
					})), r.a.createElement(P.a, {
						className: xe.a.close,
						onClick: this.handleDismiss
					})) : null
				}
			}
			const fe = Object(i.c)({
					subreddit: (e, t) => {
						let {
							subredditId: s
						} = t;
						return e.subreddits.models[s]
					},
					subscriberState: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(I.y)(e, s)
					},
					userIsLoggedIn: e => !!e.user.account
				}),
				ve = Object(C.b)(ye);
			t.a = Object(E.b)(Object(o.b)(fe, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onError: t => e(Object(u.e)({
						duration: 5e3,
						kind: k.b.Error,
						text: Object(N.a)(t)
					})),
					onBadgeClaimed: t => {
						e(Object(m.c)(s, t))
					},
					onOpenLandingPage: (t, s) => {
						e(Object(a.b)(Object(_.a)(t.name, s)))
					}
				}
			})(ve))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, s) {
			"use strict";
			var n, r, o, a;

			function i(e) {
				const {
					platform: t,
					playerType: s,
					region: n,
					style: r
				} = e;
				return "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_".concat(r, "/").concat(n, "_").concat(t, "_").concat(s, "_").concat(r, ".svg")
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})), s.d(t, "c", (function() {
					return o
				})), s.d(t, "d", (function() {
					return i
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(n || (n = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(r || (r = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(o || (o = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(a || (a = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const o = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumNewUserWelcome").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spPremium", o)
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/upperFirst.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/config.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/isFakeSubreddit/index.ts"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/components/EmptySubreddit.m.less"),
				g = s.n(h),
				x = s("./src/lib/lessComponent.tsx");
			const y = x.a.div("PrimaryText", g.a),
				f = x.a.div("SecondaryText", g.a),
				v = x.a.div("MainContentWrapper", g.a),
				O = x.a.div("MainContent", g.a),
				C = x.a.wrapped(b.a, "BackgroundPlaceholder", g.a),
				E = x.a.wrapped(p.h, "SubmitLink", g.a),
				j = x.a.img("SnooImg", g.a),
				w = x.a.div("EmptyHomepage", g.a),
				S = e => {
					switch (e) {
						case c.N.RISING:
							return Object(m.c)("Create a new post and take all the glory");
						case c.N.TOP:
						case c.N.CONTROVERSIAL:
							return null;
						default:
							return Object(m.c)("Be the first to till this fertile land.")
					}
				},
				_ = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const n = S(s);
					return a.a.createElement(O, null, a.a.createElement(y, null, (e => {
						switch (e) {
							case c.N.RISING:
								return Object(m.c)("Looks like nothing is rising fast enough in this subreddit");
							case c.N.TOP:
							case c.N.CONTROVERSIAL:
								return Object(m.c)("No posts were found using the ".concat(r()(e), " sort. Try changing the sort."));
							default:
								return Object(m.c)("There are no posts in this subreddit")
						}
					})(s)), t && !Object(d.a)(t) && !!n && a.a.createElement(a.a.Fragment, null, a.a.createElement(f, null, S(s)), a.a.createElement(E, {
						to: "/r/".concat(t, "/submit")
					}, a.a.createElement(l.c, null, "Add a post"))))
				},
				N = () => a.a.createElement(O, null, a.a.createElement(j, {
					src: "".concat(i.a.assetPath, "/img/snoo_discovery@1x.png")
				}), a.a.createElement(y, null, a.a.createElement(l.c, null, "Reddit gets better when you join communities, so find some that you’ll love!")), a.a.createElement(E, {
					to: "/r/popular"
				}, a.a.createElement(l.c, null, "Browse Popular Posts")));
			t.a = x.a.wrapped(e => a.a.createElement(w, null, a.a.createElement(C, {
				isLoading: !1,
				layout: u.g.Classic
			}), a.a.createElement(v, null, e.subreddit ? a.a.createElement(_, e) : a.a.createElement(N, null))), "Component", g.a)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/i18n/utils.ts"),
				f = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				v = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				O = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				w = s.n(j);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = "view--layout--FUE",
				N = "LayoutSwitch--picker",
				P = Object(i.a)(g.a),
				k = {
					[p.d.Card]: O.a,
					[p.d.Classic]: f.a,
					[p.d.Compact]: v.a
				},
				I = {
					[p.d.Card]: Object(y.c)("card"),
					[p.d.Classic]: Object(y.c)("classic"),
					[p.d.Compact]: Object(y.c)("compact")
				},
				T = Object(b.t)(),
				L = Object(a.c)({
					dropdownIsOpen: Object(E.b)(N),
					postLayout: b.M,
					redditStyle: b.B
				}),
				M = Object(o.b)(L, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					openDropdown: () => e(Object(m.g)({
						tooltipId: N
					}))
				}));
			class B extends r.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: r
						} = this.props;
						t ? t(e) : (s(e, r), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(C.screen)(t),
							subreddit: Object(C.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: o
						} = this.props, a = s || p.e[o], i = e === a, d = k[e];
						return r.a.createElement(x.b, S({}, t, {
							className: Object(c.a)(w.a.LayoutItem, {
								[w.a.selected]: i
							}),
							"data-layout": e,
							displayText: I[e],
							iconWrapperClassName: w.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: w.a.LayoutItemTextClassName
						}), r.a.createElement(d, {
							className: w.a.LayoutIcon,
							onClick: i ? void 0 : n
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(P, S({}, e, {
							className: w.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: w.a.DropdownRow,
							rowIconClassName: w.a.DropdownRowIcon,
							rowSelectedClassName: w.a.DropdownRowSelected,
							tooltipId: N
						}), this.renderItem(p.d.Card), this.renderItem(p.d.Classic), this.renderItem(p.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, o = t || p.e[n];
					return r.a.createElement("div", {
						className: Object(c.a)(w.a.Container, e),
						id: _
					}, r.a.createElement("div", {
						className: w.a.DropdownContainer,
						onClick: s
					}, this.renderItem(o, {
						id: N,
						showDropdownTriangle: !0
					}), r.a.createElement(h.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = T(M(Object(u.b)(Object(d.a)(B))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				TimeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				timeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				b = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/components/ListingSort/index.tsx"),
				x = s("./src/reddit/components/TimeSort/index.tsx"),
				y = s("./src/reddit/constants/listingSorts.ts"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				v = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/helpers/trackers/navigation.ts"),
				C = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				w = s.n(j);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = new Set([h.N.CONTROVERSIAL, h.N.TOP]),
				N = new Set([h.N.CONTROVERSIAL, h.N.RISING]),
				P = "ListingSort--Overflow",
				k = Object(l.t)({
					isFrontpage: l.z,
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				I = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, E.i, (e, t, s) => {
					if (e) return e;
					const n = [h.N.HOT, h.N.NEW, h.N.TOP, h.N.RISING];
					return t && s && n.unshift(h.N.BEST), n
				}),
				T = Object(p.c)({
					sortOptions: I
				});
			class L extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(O.d)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(b.a)(t, {
							sort: e
						}) : Object(v.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							sort: t
						} = this.props;
						return r.a.createElement(f.a, {
							className: Object(a.a)(w.a.SortLink, e === t && w.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, r.a.createElement(g.a, {
							className: w.a.SortIcon,
							sort: e
						}), r.a.createElement("div", {
							className: w.a.SortLabel
						}, y.a[e]))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: n,
						sortOptions: o,
						timeSort: i
					} = this.props, c = !t && _.has(n), d = N.has(n), l = o.filter(e => !N.has(e)), m = o.filter(e => N.has(e) && e !== n);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(g.d, S({}, this.props, {
						buttonClassName: w.a.DropdownButton,
						className: Object(a.a)(w.a.SortDropdown, e),
						rowClassName: w.a.DropdownRow,
						rowIconClassName: w.a.DropdownRowIcon,
						rowSelectedClassName: w.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(a.a)(w.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(n), c && r.a.createElement(x.a, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: w.a.DropdownButton,
						className: w.a.TimeSort,
						listingSort: n,
						onChange: s,
						rowClassName: w.a.DropdownRow,
						rowSelectedClassName: w.a.DropdownRowSelected,
						timeSort: i || h.Qb,
						wrapperClassName: w.a.TimeSortWrapper
					}), m.length > 0 && r.a.createElement(g.d, S({}, this.props, {
						className: Object(a.a)(w.a.SortOverflow, e),
						dropdownId: P,
						rowClassName: w.a.DropdownRow,
						rowIconClassName: w.a.DropdownRowIcon,
						rowSelectedClassName: w.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), r.a.createElement("button", {
						className: w.a.SortOverflowButton,
						id: P
					}, r.a.createElement(C.a, null))))
				}
			}
			var M = k(Object(o.b)(T)(Object(d.b)(L))),
				B = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				D = s.n(B);
			const F = Object(l.t)({
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				R = Object(o.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const r = Object(i.c)({
									sort: t,
									timeSort: n
								});
								e(Object(c.G)(s, r))
							}
						}
					}
				});
			class A extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: s,
						disabled: n = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(D.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(M, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !o && r.a.createElement(u.a, {
						className: D.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = F(R(Object(d.b)(A)))
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less": function(e, t, s) {
			e.exports = {
				publicAddressSection: "e0Te0bBkUsDG6nuCjsFky",
				publicAddress: "_3GWjMTgC3OErgLOUT3TdHw",
				yourWalletAddress: "_2ZVoGra9kSZDSEzU8EoxXp",
				settingsButton: "g2yJ86Mg6P4M5NIoQA0Ve",
				settingsIcon: "_1ZIhSQEemVyqYNEOTZVZGv"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less": function(e, t, s) {
			e.exports = {
				alertIcon: "_281dcYAIoQvZtLs7iI7QLT",
				risk: "_1r7M4su-D_hCOMd066XY3J",
				riskBody: "_12gDkO_ygs4ikCeyu5bcVg",
				riskTitle: "_3iYb38SYPwjAd1VG859AKs"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less": function(e, t, s) {
			e.exports = {
				overflowingText: "_3s4m8dsZEYcHZ4ojNFUV0R",
				cell: "_1-v1Zgj9IOmc-oaS_dfHfI",
				cellBottomLine: "_1YrPtUZyIgZmt7BoC3IOjC",
				cellContainer: "_3y3jYnCjkWtjpibBnc9e3l",
				cellTopLine: "-pS2f0b04dtavABCVdrie",
				explanation: "_1n5fyOsQxmVlxXd1xuw6fH",
				title: "_2Q8Se5aIjJDpE5JnGoGI5R",
				token: "_2tQrDQoIjV3V6CMgrLYXU3",
				tokenCell: "_2rBuuOwPxb-X6wEPWDBmYH",
				button: "_1Vg1f_Cp7IF32wBdY1l2Gq"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3WnHen22bLKwTkOL3W6F_D",
				link: "_3LjXe6j5_bQ3U8GZLY0HYO",
				showAll: "eRbX9WCebKIuLXdJIwNjK",
				title: "_3il8HJMlHzKppQleJjuboQ"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.m.less": function(e, t, s) {
			e.exports = {
				loading: "Jfh68QhZqpLgByZUbKyD1",
				section: "_3o2O8sLNM51xpdzuDH-ocD"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.tsx": function(e, t, s) {
			"use strict";
			var n, r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/selectors/gov.ts"),
				m = s("./src/app/strings/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/prettyPrintNumber/index.ts"),
				b = s("./src/reddit/actions/governance/index.ts"),
				h = s("./src/reddit/actions/login.ts"),
				g = s("./src/reddit/components/Governance/Token/index.tsx"),
				x = s("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/endpoints/governance/crypto.ts"),
				O = s("./src/reddit/helpers/governance/tokens.ts"),
				C = s("./src/reddit/i18n/components.tsx");
			! function(e) {
				e.Initial = "initial_distribution", e.Mod = "moderator_election"
			}(n || (n = {}));
			var E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/higherOrderComponents/asTooltip.tsx"),
				w = s("./src/lib/copyToClipboard/index.ts"),
				S = s("./src/reddit/actions/governance/errorToast.ts"),
				_ = s("./src/reddit/actions/toaster.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				P = s("./src/reddit/contexts/ApiContext.tsx"),
				k = s("./src/reddit/controls/Dropdown/index.tsx"),
				I = s("./src/reddit/controls/Dropdown/Row.tsx"),
				T = s("./src/reddit/helpers/governance/ethereum.ts"),
				L = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				M = s("./src/reddit/models/Toast/index.ts"),
				B = s("./src/reddit/selectors/tooltip.ts"),
				D = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less"),
				F = s.n(D);
			const R = Object(j.a)(k.a),
				A = "BlockchainWalletInfo--SettingsMenu";
			class W extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onCopyToClipboard = () => {
						Object(w.a)(this.props.publicAddress || "")
					}, this.onRemoveMyWallet = async () => {
						const e = await Object(v.b)(this.props.apiContext(), this.props.provider, this.props.publicAddress);
						e.ok ? this.props.onWalletRemoved() : this.props.onGovernanceError(e.error)
					}
				}
				render() {
					const {
						dropdownIsOpen: e,
						onOpenDropdown: t,
						provider: s,
						publicAddress: n,
						token: r,
						tokenName: a
					} = this.props;
					if (!n) return null;
					const i = s === v.a.Ethereum || s === v.a.Rinkeby,
						c = s === v.a.Stellar;
					return o.a.createElement("div", {
						className: F.a.publicAddressSection
					}, o.a.createElement("div", {
						className: F.a.publicAddress,
						title: n
					}, function(e, t) {
						switch (t) {
							case v.a.Stellar:
								return e.slice(0, 6) + "..." + e.slice(e.length - 6);
							default:
								return e
						}
					}(n, s)), o.a.createElement("div", {
						className: F.a.yourWalletAddress
					}, o.a.createElement(C.c, null, "Your Wallet Address"), (i || c) && o.a.createElement("button", {
						className: F.a.settingsButton,
						title: Object(d.c)("Wallet address settings"),
						role: "menu",
						onClick: t,
						id: A
					}, o.a.createElement(L.a, {
						className: F.a.settingsIcon
					})), i && o.a.createElement(R, {
						tooltipId: A,
						isOpen: e,
						renderContentsHidden: !0
					}, o.a.createElement(I.b, {
						displayText: Object(d.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}), s && o.a.createElement(I.b, {
						displayText: Object(d.c)("Remove My Wallet"),
						onClick: this.onRemoveMyWallet
					}), r && o.a.createElement(I.b, {
						displayText: Object(d.c)("Track ".concat(Object(d.b)("tokenName", a), " in MetaMask")),
						onClick: () => Object(T.i)(r)
					})), c && o.a.createElement(R, {
						tooltipId: A,
						isOpen: e,
						renderContentsHidden: !0
					}, o.a.createElement(I.b, {
						displayText: Object(d.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}))))
				}
			}
			const H = Object(i.c)({
					dropdownIsOpen: Object(B.b)(A),
					provider: l.a,
					token: l.q,
					tokenName: l.o
				}),
				U = Object(a.b)(H, (e, t) => ({
					onGovernanceError: t => {
						Object(S.a)(e, t)
					},
					onOpenDropdown: () => e(Object(N.g)({
						tooltipId: A
					})),
					onWalletRemoved: () => {
						e(Object(b.j)({
							subredditId: t.subredditId
						})), e(Object(_.e)({
							kind: M.b.SuccessCommunityGreen,
							text: Object(d.c)("Wallet removed successfully!")
						}))
					}
				}));
			var V = Object(P.b)(U(W)),
				G = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				K = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less"),
				q = s.n(K);

			function z(e) {
				return o.a.createElement("div", {
					className: q.a.risk
				}, o.a.createElement("div", {
					className: q.a.riskTitle
				}, o.a.createElement(G.a, {
					className: q.a.alertIcon
				}), e.title), o.a.createElement("div", {
					className: q.a.riskBody
				}, e.body))
			}
			var Q = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less"),
				J = s.n(Q);
			class Y extends o.a.PureComponent {
				componentDidMount() {
					const {
						pageLayer: e,
						provider: t,
						wallet: s
					} = this.props, n = s && s.publicAddress;
					Object(x.b)(e) && t && !n && this.props.onOpenRegistrationModal()
				}
				render() {
					const {
						className: e,
						distribution: t,
						isLoggedIn: s,
						language: r,
						onOpenLoginModal: a,
						onOpenRegistrationModal: i,
						onOpenTransferModal: c,
						provider: d,
						subredditId: l,
						tokenDisplayConversion: b,
						tokenName: h,
						useCrypto: x,
						wallet: y
					} = this.props, E = y && y.inactive && function(e, t, s) {
						const r = e.actionScheduledAt - Date.now(),
							o = Math.max(1, Math.floor(r / u.w)),
							a = 1 !== o ? "gov.pointsDecay.inactive.time.plural" : "gov.pointsDecay.inactive.time.singular",
							i = Object(m.a)(t, a, {
								numDays: o
							});
						switch (e.reason) {
							case n.Initial:
								return {
									title: Object(m.a)(t, "gov.pointsDecay.inactive.title", {
										tokenName: s
									}), body: Object(m.a)(t, "gov.pointsDecay.inactive.body", {
										time: i,
										tokenName: s
									})
								};
							case n.Mod:
								return {
									title: Object(m.a)(t, "gov.pointsDecay.election.title"), body: Object(m.a)(t, "gov.pointsDecay.election.body", {
										time: i,
										tokenName: s
									})
								}
						}
					}(y.inactive, r, h), j = y && y.publicAddress, w = d === v.a.Ethereum || d === v.a.Rinkeby;
					return o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: J.a.title
					}, h), o.a.createElement("div", {
						className: J.a.cellContainer
					}, y && Z(o.a.createElement("div", {
						className: J.a.tokenCell
					}, o.a.createElement(g.a, {
						className: J.a.token,
						subredditId: l
					}), Object(p.a)(Object(O.b)(y.amount, b))), Object(m.a)(r, "sidebar.gov.yourTokens", {
						tokenName: h
					})), t && Z(Object(p.a)(Object(O.b)(t.totalAvailable, b)), Object(m.a)(r, "sidebar.gov.tokensIssued"))), E && o.a.createElement(z, {
						body: E.body,
						title: E.title
					}), o.a.createElement("div", {
						className: J.a.explanation
					}, Object(m.a)(r, "sidebar.gov.tokenExplanation", {
						tokenName: h
					})), d && o.a.createElement(V, {
						publicAddress: j,
						subredditId: l
					}), d && !j && w && o.a.createElement(f.f, {
						className: J.a.button,
						onClick: s ? i : a
					}, o.a.createElement(C.c, null, "register")), y && !x && o.a.createElement(f.i, {
						className: J.a.button,
						onClick: c
					}, o.a.createElement(C.c, null, "send")))
				}
			}

			function Z(e, t) {
				return o.a.createElement("div", {
					className: J.a.cell
				}, o.a.createElement("div", {
					className: J.a.cellTopLine
				}, e), o.a.createElement("div", {
					className: J.a.cellBottomLine
				}, t))
			}
			const X = Object(i.c)({
				isLoggedIn: E.G,
				provider: l.a,
				tokenName: l.o,
				tokenDisplayConversion: l.n,
				language: e => e.user.language,
				useCrypto: l.r
			});
			var $ = Object(a.b)(X, e => ({
					onOpenLoginModal: () => e(Object(h.e)()),
					onOpenRegistrationModal: () => e(Object(b.i)()),
					onOpenTransferModal: () => e(Object(b.h)())
				}))(Object(y.t)()(Y)),
				ee = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				te = s("./src/lib/classNames/index.ts"),
				se = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				ne = s("./src/reddit/actions/subreddit.ts"),
				re = s("./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less"),
				oe = s.n(re);
			const ae = Object(i.c)({
				proposals: (e, t) => Object.keys(e.polls.models).map(t => e.polls.models[t]).filter(e => e.subredditId === t.subredditId).sort((e, t) => e.createdAt > t.createdAt ? -1 : e.createdAt < t.createdAt ? 1 : 0).map(t => e.posts.models[t.postId]).filter(Boolean).slice(0, 5)
			});
			var ie = Object(y.t)()(Object(a.b)(ae, (e, t) => ({
					onFilterProposals: () => e(Object(ne.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					return Object(y.F)(e.pageLayer) && e.proposals.length ? o.a.createElement("div", {
						className: Object(te.a)(e.className, oe.a.container)
					}, o.a.createElement("div", {
						className: oe.a.title
					}, o.a.createElement(C.c, null, "Latest Polls")), e.proposals.map(e => o.a.createElement(ee.a, {
						className: oe.a.link,
						key: e.permalink,
						title: e.title,
						to: Object(se.a)(e.permalink)
					}, e.title)), o.a.createElement("a", {
						className: oe.a.showAll,
						onClick: e.onFilterProposals
					}, o.a.createElement(C.c, null, "show all"))) : null
				}))),
				ce = s("./src/reddit/components/Governance/CommunityCard/index.m.less"),
				de = s.n(ce);
			const le = Object(i.c)({
				tokenName: l.o,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				wallet: l.g,
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			t.a = Object(a.b)(le)((function(e) {
				return o.a.createElement(c.a, {
					className: e.className,
					title: Object(d.c)("Subreddit Points")
				}, e.distribution ? o.a.createElement(r.Fragment, null, o.a.createElement($, {
					className: de.a.section,
					distribution: e.distribution,
					subredditId: e.subredditId,
					wallet: e.wallet
				}), e.subreddit && o.a.createElement(ie, {
					className: de.a.section,
					subredditId: e.subreddit.id
				})) : o.a.createElement("div", {
					className: de.a.loading
				}))
			}))
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Leaderboard").then(s.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/reddit/selectors/gov.ts");
			const d = Object(a.c)({
				tokenSymbol: c.p
			});
			t.a = Object(o.b)(d)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return r.a.createElement("img", {
					className: e.className,
					src: "".concat(i.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/VotingBanner/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx");
			const r = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceVotingBanner").then(s.bind(null, "./src/reddit/components/Governance/VotingBanner/index.tsx")).then(e => e.default)
			});
			t.a = r
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/reddit/featureFlags/index.ts");
			const d = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistration").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(a.c)({
				featureEnabled: c.d.spWalletRegistrationBanner
			});
			t.a = Object(o.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./src/lib/addQueryParams/index.ts");
			const r = "metamaskInstalled";

			function o() {
				window.location.replace(Object(n.a)(window.location.href, {
					[r]: "true"
				}))
			}

			function a(e) {
				return !!(e && e.queryParams && e.queryParams[r])
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/reddit/featureFlags/index.ts");
			const d = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistrationStellarBanner").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.tsx")).then(e => e.default)
			});
			const l = Object(a.c)({
				featureEnabled: c.d.spStellarWalletRegistration
			});
			t.a = Object(o.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				u = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/components/HeaderImage/index.m.less"),
				h = s.n(b);
			const g = c.a.wrapped(m.a, "Planet", h.a),
				x = c.a.div("SubredditIcon", h.a),
				y = c.a.div("PositionedImage", h.a),
				f = c.a.div("HeaderContent", h.a),
				v = c.a.div("HeaderContainer", h.a),
				O = c.a.span("HeaderText", h.a),
				C = c.a.wrapped(o.a, "HeaderUrl", h.a),
				E = c.a.span("Container", h.a),
				j = Object(i.a)(e => {
					const t = Object(u.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(p.a)(e).banner.positionedImageAlignment,
						o = Object(p.a)(e).banner.positionedImage,
						i = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let c;
					switch (n) {
						case "right":
							c = {
								right: "-8px"
							};
							break;
						case "centered":
							c = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							c = {
								left: "-8px"
							}
					}
					const m = !!o && !!i && "left" === n,
						b = Object(u.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						j = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						w = "".concat(4 + j, "px");
					return r.a.createElement(E, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: "".concat(Object(p.a)(e).banner.height, "px")
						}
					}, r.a.createElement(C, {
						className: e.className,
						to: e.url
					}, r.a.createElement(v, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || d.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(f, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (s ? r.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(s, ")"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: w,
							width: w
						}
					}) : r.a.createElement(g, {
						style: {
							padding: "".concat(Object(p.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: w,
							width: w
						}
					})), r.a.createElement(O, {
						style: {
							paddingTop: 32 === j ? "4px" : "14px"
						}
					}, t)), r.a.createElement(y, {
						className: Object(a.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!o,
							[h.a.hoverPositionedImage]: !!o && !!i
						}),
						style: Object.assign({}, c, {
							height: "".concat(Object(p.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = j
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/IdCard/index.m.less"),
				a = s.n(o);
			const i = r.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return r.a.createElement("div", {
					className: a.a.Banner,
					style: t && t.length ? {
						backgroundImage: "url(".concat(t, ")")
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/app/strings/index.ts"),
				r = s("./src/config.ts"),
				o = s("./src/reddit/constants/listings.ts"),
				a = s("./src/reddit/constants/page.ts");
			const i = e => e && e.toLowerCase() === o.b.Popular,
				c = e => e && e.toLowerCase() === o.b.All,
				d = e => e && e === a.c,
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: s,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, s, a, m, u, {
						language: p,
						listingName: b,
						isM2MEnabled: h,
						subreddit: g,
						idCardWidget: x
					} = e;
					const y = x && x.subscribersText || Object(n.a)(p, "structuredStyles.widgets.id-card.subscribersText"),
						f = x && x.currentlyViewingText || Object(n.a)(p, "structuredStyles.widgets.id-card.currentlyViewingText");
					let v, O;
					if (d(b))
						if (t = "".concat(r.a.assetPath, "/img/id-cards/home-banner@2x.png"), a = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = o.c[o.b.Home], h) m = Object(n.a)(p, "listings.populatedHome.title"), s = Object(n.a)(p, "listings.populatedHome.longDescription");
						else {
							s = Object(n.a)(p, "listings.home.longDescription");
							const e = Object(n.a)(p, "listings.home.title");
							m = e.charAt(0).toUpperCase() + e.slice(1)
						}
					else c(b) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), s = Object(n.a)(p, "listings.all.longDescription"), a = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), m = "r/all", u = o.c[o.b.All]) : i(b) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), s = Object(n.a)(p, "listings.popular.longDescription"), a = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), m = "r/popular", u = o.c[o.b.Popular]) : b && (s = x && x.description, a = l(""), m = g.displayText, u = g.url, O = x && x.subscribersCount, v = x && x.currentlyViewingCount);
					return Object.assign({
						snooBackground: a,
						description: s,
						titleText: m,
						url: u,
						subscribersCount: O,
						subscribersText: y,
						currentlyViewingText: f,
						currentlyViewingCount: v
					}, t ? {
						bannerBackgroundImage: t
					} : {})
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, s) {
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
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
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
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				CreateAccountButton: "_2wIWA7CTxkwjuDQ4-Msi_r",
				createAccountButton: "_2wIWA7CTxkwjuDQ4-Msi_r",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
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
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/IdCard/index.m.less"),
				i = s.n(a);
			const c = e => {
				let {
					snooBackground: t
				} = e;
				return r.a.createElement("div", {
					className: i.a.AdorableSnoo,
					style: {
						background: t.image,
						backgroundSize: "".concat(t.width, "px ").concat(t.height, "px"),
						height: t.height,
						width: t.width
					}
				})
			};
			t.a = e => {
				let {
					titleText: t,
					snooBackground: s
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(i.a.Title, i.a.TitleShifted)
				}, r.a.createElement(c, {
					snooBackground: s
				}), r.a.createElement("div", {
					className: i.a.TitleTextShiftedContainer
				}, r.a.createElement("span", {
					className: i.a.TitleText
				}, t)))
			}
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-InFeedPostCreation").then(s.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = s.n(a),
				c = s("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", i.a),
				l = c.a.div("TextWrapper", i.a);
			t.a = e => {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: a,
					title: c
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(t, i.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, r.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? r.a.createElement(d, null, n) : r.a.createElement(d, null), r.a.createElement(l, null, r.a.createElement("div", {
					className: i.a.title
				}, c), a && r.a.createElement("div", {
					className: i.a.subtitle
				}, a)))
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/i18n/utils.ts"),
				p = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				x = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				y = s.n(x);
			const f = r.a.createElement(p.a, {
					className: y.a.icon
				}),
				v = Object(a.c)({
					language: h.P,
					subreddit: b.B,
					subredditAboutInfo: b.y
				}),
				O = Object(o.b)(v);
			t.a = O(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s,
					language: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const o = s && s.quarantineMessageHtml,
					a = s && s.quarantineMessage || Object(i.a)(n, "contentGate.quarantinedSubreddit.quarantineMsg");
				return r.a.createElement(g.a, {
					className: y.a.container,
					color: d.a.quarantine,
					icon: f,
					subtitle: r.a.createElement("span", null, r.a.createElement(m.c, null, "This community is"), " ", r.a.createElement("a", {
						className: y.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, r.a.createElement(m.c, null, "quarantined")), ": ", o ? r.a.createElement(c.a, {
						className: y.a.rawHtmlDisplay,
						html: o
					}) : a, " ", r.a.createElement(l.a, {
						className: y.a.link,
						to: "/"
					}, r.a.createElement(m.c, null, "Click to return home."))),
					title: Object(u.c)("Community Quarantined")
				})
			})
		},
		"./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/selectors/widgets.ts"),
				b = s("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				h = s.n(b);
			const g = Object(a.c)({
					idCardWidget: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(p.d)(e, {
							subredditId: s
						})
					}
				}),
				x = e => e.includeIcon ? e.idCardWidget && e.idCardWidget.description ? r.a.createElement(u.c, null, "Edit your description and custom icon") : r.a.createElement(u.c, null, "Add a community description and custom icon") : e.idCardWidget && e.idCardWidget.description ? r.a.createElement(u.c, null, "Edit your description") : r.a.createElement(u.c, null, "Add a community description"),
				y = e => e.includeIcon ? r.a.createElement(u.c, null, "Tell us about your community and upload a custom avatar so users can easily identify your community") : r.a.createElement(u.c, null, "Tell us more about your community.");
			class f extends r.a.Component {
				componentDidMount() {
					this.props.sendEvent(m.e), this.props.onViewTooltip()
				}
				render() {
					const e = x(this.props),
						t = y(this.props);
					return r.a.createElement("div", {
						className: h.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, r.a.createElement("span", {
						className: h.a.topRow
					}, r.a.createElement("h3", {
						className: h.a.title
					}, e)), r.a.createElement("p", {
						className: h.a.tooltipBody
					}, t), r.a.createElement(d.f, {
						className: h.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, r.a.createElement(u.c, null, "Got it")))
				}
			}
			t.a = Object(o.b)(g, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onDismissTooltip: () => {
						e(Object(i.h)()), Object(l.O)(s, !0)
					},
					onViewTooltip: () => {
						Object(l.ab)()
					}
				}
			})(Object(c.b)(f))
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
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.t)(),
				g = Object(a.c)({
					layout: m.M
				}),
				x = Object(o.b)(g);
			class y extends r.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(p.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.n + c.r + c.s,
						t = l.a - e,
						s = c.h - t,
						n = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(n, "px) {\n              .").concat(p.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.h + c.r + c.s, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.s, "px) / 2);\n              }\n\n              .").concat(p.a.Component, ".").concat(p.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.h + c.r + c.s, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return r.a.createElement("div", {
						className: p.a.Container
					}, r.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = h(x(b.a.wrapped(y, "Component", p.a)))
		},
		"./src/reddit/components/LayoutNavigation/Container.m.less": function(e, t, s) {
			e.exports = {
				BodyContainer: "_1levonEFuP4txDjgWG4Akb",
				bodyContainer: "_1levonEFuP4txDjgWG4Akb",
				SidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				sidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				"m-collectionLayout": "_2QBg8k5_IhSEfaeA4P26Ix",
				mCollectionLayout: "_2QBg8k5_IhSEfaeA4P26Ix",
				InnerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				innerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				Component: "_12Ewyh01Y1cMPB3Ri_F1C4",
				component: "_12Ewyh01Y1cMPB3Ri_F1C4"
			}
		},
		"./src/reddit/components/LayoutNavigation/Container.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				d = s("./src/reddit/layout/page/Listing/Content.tsx"),
				l = s("./src/reddit/selectors/structuredStyles.ts"),
				m = s("./src/reddit/selectors/userPrefs.ts"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/Container.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const g = h.a.div("BodyContainer", b.a),
				x = h.a.div("SidebarPlaceholder", b.a),
				y = h.a.div("InnerContainer", b.a),
				f = Object(a.c)({
					bladeOpen: e => !!Object(l.j)(e),
					isSubscriptionsPinned: m.b
				}),
				v = Object(o.b)(f);
			class O extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						bodyScrollOffset: 0
					}
				}
				componentDidMount() {
					const e = () => {
						const {
							marginRight: e
						} = document.body.style;
						!!e != !!this.state.bodyScrollOffset && (e ? this.setState({
							bodyScrollOffset: Object(c.c)(document.body)
						}) : this.setState({
							bodyScrollOffset: 0
						}))
					};
					try {
						this.docObserver = new MutationObserver(e)
					} catch (t) {}
					this.docObserver && this.docObserver.observe(document.body, {
						attributes: !0
					})
				}
				componentWillUnmount() {
					this.docObserver && this.docObserver.disconnect()
				}
				render() {
					const {
						bladeOpen: e,
						considerPinnedSubscriptions: t = !0,
						containerClassName: s,
						isSubscriptionsPinned: n,
						considerSidebar: o = !0,
						onFocus: a,
						onBlur: c
					} = this.props;
					let l = 0;
					return n && !e && t && (l += i.v), 0 !== this.state.bodyScrollOffset && (l -= this.state.bodyScrollOffset), r.a.createElement("div", {
						className: this.props.className
					}, r.a.createElement(g, {
						onFocus: a,
						onBlur: c
					}, r.a.createElement(d.a, {
						fitPageToContent: !0
					}, r.a.createElement(y, {
						className: s
					}, r.a.createElement(u.a, {
						bladeOpen: e,
						considerSidebar: o,
						offsetLeft: l,
						render: this.props.render
					}))), o && r.a.createElement(x, null)))
				}
			}
			t.a = h.a.wrapped(v(O), "Component", b.a)
		},
		"./src/reddit/components/LayoutNavigation/index.m.less": function(e, t, s) {
			e.exports = {
				listingSort: "_3E6INjIzonJwM0r4N1QJYK",
				separator: "lMwVtd6llwkRVdjCNiCAl"
			}
		},
		"./src/reddit/components/LayoutNavigation/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-router-redux/es/index.js")),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				h = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/higherOrderComponents/asTooltip.tsx")),
				g = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/app/strings/index.ts");
			const f = {
				[i.Mb.AllStates]: Object(y.e)("stateSorts.allStates"),
				[i.Mb.Alaska]: Object(y.e)("stateSorts.alaska"),
				[i.Mb.Alabama]: Object(y.e)("stateSorts.alabama"),
				[i.Mb.Arkansas]: Object(y.e)("stateSorts.arkansas"),
				[i.Mb.Arizona]: Object(y.e)("stateSorts.arizona"),
				[i.Mb.California]: Object(y.e)("stateSorts.california"),
				[i.Mb.Colorado]: Object(y.e)("stateSorts.colorado"),
				[i.Mb.Connecticut]: Object(y.e)("stateSorts.connecticut"),
				[i.Mb.DistrictOfColumbia]: Object(y.e)("stateSorts.districtOfColumbia"),
				[i.Mb.Delaware]: Object(y.e)("stateSorts.delaware"),
				[i.Mb.Florida]: Object(y.e)("stateSorts.florida"),
				[i.Mb.Georgia]: Object(y.e)("stateSorts.georgia"),
				[i.Mb.Hawaii]: Object(y.e)("stateSorts.hawaii"),
				[i.Mb.Iowa]: Object(y.e)("stateSorts.iowa"),
				[i.Mb.Idaho]: Object(y.e)("stateSorts.idaho"),
				[i.Mb.Illinois]: Object(y.e)("stateSorts.illinois"),
				[i.Mb.Indiana]: Object(y.e)("stateSorts.indiana"),
				[i.Mb.Kansas]: Object(y.e)("stateSorts.kansas"),
				[i.Mb.Kentucky]: Object(y.e)("stateSorts.kentucky"),
				[i.Mb.Louisiana]: Object(y.e)("stateSorts.louisiana"),
				[i.Mb.Massachusetts]: Object(y.e)("stateSorts.massachusetts"),
				[i.Mb.Maryland]: Object(y.e)("stateSorts.maryland"),
				[i.Mb.Maine]: Object(y.e)("stateSorts.maine"),
				[i.Mb.Michigan]: Object(y.e)("stateSorts.michigan"),
				[i.Mb.Minnesota]: Object(y.e)("stateSorts.minnesota"),
				[i.Mb.Missouri]: Object(y.e)("stateSorts.missouri"),
				[i.Mb.Mississippi]: Object(y.e)("stateSorts.mississippi"),
				[i.Mb.Montana]: Object(y.e)("stateSorts.montana"),
				[i.Mb.NorthCarolina]: Object(y.e)("stateSorts.northCarolina"),
				[i.Mb.NorthDakota]: Object(y.e)("stateSorts.northDakota"),
				[i.Mb.Nebraska]: Object(y.e)("stateSorts.nebraska"),
				[i.Mb.NewHampshire]: Object(y.e)("stateSorts.newHampshire"),
				[i.Mb.NewJersey]: Object(y.e)("stateSorts.newJersey"),
				[i.Mb.NewMexico]: Object(y.e)("stateSorts.newMexico"),
				[i.Mb.Nevada]: Object(y.e)("stateSorts.nevada"),
				[i.Mb.NewYork]: Object(y.e)("stateSorts.newYork"),
				[i.Mb.Ohio]: Object(y.e)("stateSorts.ohio"),
				[i.Mb.Oklahoma]: Object(y.e)("stateSorts.oklahoma"),
				[i.Mb.Oregon]: Object(y.e)("stateSorts.oregon"),
				[i.Mb.Pennsylvania]: Object(y.e)("stateSorts.pennsylvania"),
				[i.Mb.RhodeIsland]: Object(y.e)("stateSorts.rhodeIsland"),
				[i.Mb.SouthCarolina]: Object(y.e)("stateSorts.southCarolina"),
				[i.Mb.SouthDakota]: Object(y.e)("stateSorts.southDakota"),
				[i.Mb.Tennessee]: Object(y.e)("stateSorts.tennessee"),
				[i.Mb.Texas]: Object(y.e)("stateSorts.texas"),
				[i.Mb.Utah]: Object(y.e)("stateSorts.utah"),
				[i.Mb.Virginia]: Object(y.e)("stateSorts.virginia"),
				[i.Mb.Vermont]: Object(y.e)("stateSorts.vermont"),
				[i.Mb.Washington]: Object(y.e)("stateSorts.washington"),
				[i.Mb.Wisconsin]: Object(y.e)("stateSorts.wisconsin"),
				[i.Mb.WestVirginia]: Object(y.e)("stateSorts.westVirginia"),
				[i.Mb.Wyoming]: Object(y.e)("stateSorts.wyoming")
			};
			var v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/contexts/Tooltip.ts"),
				C = s("./src/reddit/controls/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/StateSort/index.m.less"),
				_ = s.n(S);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = g.a.wrapped(C.a, "_Dropdown", _.a),
				k = Object(h.a)(P),
				I = e => {
					return e.indexOf("_") > 0 && L(e) === i.v.UnitedStates
				},
				T = e => {
					if (I(e)) {
						return e.split("_")[1]
					}
					return i.Mb.AllStates
				},
				L = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				M = e => {
					const t = L(e),
						s = T(e);
					return I(e) ? "".concat(t, "_").concat(s) : t
				},
				B = Object(v.t)(),
				D = Object(a.c)({
					dropdownIsOpen: Object(j.b)("StateSort--StateSortPicker"),
					language: w.P
				}),
				F = Object(o.b)(D, e => ({
					onOpenDropdown: () => e(Object(u.g)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(i.v.UnitedStates + "_" + s))
					}
				}));
			var R = g.a.wrapped(B(F(e => {
					const t = "".concat(e.baseUrl, "?").concat(x.g, "=").concat(i.v.UnitedStates);
					return r.a.createElement("div", {
						className: e.className,
						onClick: e.onOpenDropdown
					}, r.a.createElement(b.c, {
						disabled: e.disabled
					}, r.a.createElement(b.b, {
						displayText: f[e.sort](e.language),
						id: "StateSort--StateSortPicker",
						showDropdownTriangle: !0
					})), r.a.createElement(O.a.Consumer, null, s => r.a.createElement(k, N({
						isOpen: e.dropdownIsOpen,
						tooltipId: "StateSort--StateSortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(i.Mb).map(s => r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === i.Mb.AllStates ? t : "".concat(t, "_").concat(e))(i.Mb[s]), M(i.Mb[s]))
					}, r.a.createElement(E.b, {
						displayText: f[i.Mb[s]](e.language),
						isSelected: e.sort === s
					}))))))
				})), "Component", _.a),
				A = s("./src/reddit/constants/countrySorts.ts"),
				W = s("./src/reddit/components/CountrySort/index.m.less"),
				H = s.n(W);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(v.t)(),
				G = Object(a.c)({
					dropdownIsOpen: Object(j.b)("CountrySort--CountrySortPicker"),
					language: w.P
				});
			var K = V(Object(o.b)(G, e => ({
					onOpenDropdown: t => e(Object(u.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(s))
					}
				}))(e => {
					const t = L(e.sort),
						s = T(e.sort),
						n = "".concat(e.baseUrl, "?").concat(x.g, "=");
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(p.a)(H.a.countrySort, e.className),
						onClick: () => e.onOpenDropdown("CountrySort--CountrySortPicker")
					}, r.a.createElement(b.c, {
						disabled: e.disabled
					}, r.a.createElement(b.b, {
						displayText: (() => t in A.a ? A.a[t] : A.a[i.v.Everywhere])(),
						id: "CountrySort--CountrySortPicker",
						showDropdownTriangle: !0
					})), r.a.createElement(O.a.Consumer, null, s => r.a.createElement(k, U({
						isOpen: e.dropdownIsOpen,
						tooltipId: "CountrySort--CountrySortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(i.v).map(s => r.a.createElement("div", {
						key: s,
						onClick: () => e.onClickLink("".concat(n).concat(M(i.v[s])), i.v[s])
					}, r.a.createElement(E.b, {
						displayText: A.a[i.v[s]],
						isSelected: t === s
					})))))), t === i.v.UnitedStates && r.a.createElement(R, {
						baseUrl: e.baseUrl,
						disabled: e.disabled,
						sort: s
					}))
				})),
				q = s("./src/reddit/components/TimeSort/index.tsx"),
				z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = s("./src/reddit/constants/page.ts"),
				J = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				Y = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				Z = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				X = s.n(Z);
			const $ = Object(v.t)({
					isProfilePage: v.H,
					pageLayer: e => e
				}),
				ee = Object(a.c)({
					currentUser: w.i,
					language: w.P,
					isPopularListing: v.D,
					redditStyle: v.B
				}),
				te = Object(o.b)(ee, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const r = Object(c.c)({
									sort: t,
									timeSort: n
								});
								e(Object(l.G)(s, r))
							}
						}
					}
				});
			t.a = $(te(Object(z.b)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: n
				} = e, o = e.sort === i.N.TOP || e.sort === i.N.CONTROVERSIAL, a = s && e.countrySort && e.sort === i.N.HOT, c = e => {
					Y.a.setState({
						isListingFocused: e
					})
				};
				return r.a.createElement(d.a, {
					className: e.className,
					onFocus: () => c(!0),
					onBlur: () => c(!1),
					render: s => r.a.Children.toArray([n ? null : r.a.createElement(J.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), n ? null : r.a.createElement("div", {
						className: X.a.separator
					}), r.a.createElement(b.d, {
						className: X.a.listingSort,
						baseUrl: e.baseUrl,
						disabled: t,
						geopopularSort: e.countrySort,
						onChange: e.updateSortPreference,
						sort: e.sort,
						sortOptions: e.sortOptions
					}), !t && o && [r.a.createElement(q.a, {
						baseUrl: "".concat(e.baseUrl, "/").concat(e.sort),
						listingSort: e.sort,
						onChange: t => e.updateSortPreference(e.sort, t),
						timeSort: e.timeSort || i.Qb
					})], a && r.a.createElement(K, {
						baseUrl: e.isPopularListing ? "/r/".concat(Q.g, "/") : "",
						disabled: t,
						sort: e.countrySort
					})])
				})
			})))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				r = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(n.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/svgs/Best/index.m.less"),
				c = s.n(i);
			var d = e => r.a.createElement("svg", {
					className: Object(o.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), r.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				l = s("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = s.n(l);
			var u = e => r.a.createElement("svg", {
					className: Object(o.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				p = s("./src/reddit/icons/svgs/Hot/index.m.less"),
				b = s.n(p);
			var h = e => r.a.createElement("svg", {
					className: Object(o.a)(b.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("title", null, "Hot"), r.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				g = s("./src/reddit/icons/svgs/New/index.m.less"),
				x = s.n(g);
			var y = e => r.a.createElement("svg", {
					className: Object(o.a)(x.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				f = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				v = s.n(f);
			var O = e => r.a.createElement("svg", {
					className: Object(o.a)(v.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				C = s("./src/reddit/icons/svgs/Top/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/index.m.less"),
				j = s.n(E);
			const w = {
				[a.N.BEST]: d,
				[a.N.HOT]: h,
				[a.N.NEW]: y,
				[a.N.CONTROVERSIAL]: u,
				[a.N.TOP]: C.a,
				[a.N.RISING]: O
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const n = w[s];
				return n ? r.a.createElement(n, {
					className: Object(o.a)(t, j.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				ListingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW",
				listingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW"
			}
		},
		"./src/reddit/components/ListingSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return T
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "c", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/listingSorts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/helpers/path/index.ts"),
				f = s("./src/reddit/helpers/trackers/navigation.ts"),
				v = s("./src/reddit/i18n/components.tsx"),
				O = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				w = s("./src/reddit/components/ListingSort/index.m.less"),
				S = s.n(w),
				_ = s("./src/lib/lessComponent.tsx");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var P = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const k = "ListingSort--SortPicker",
				I = Object(i.a)(_.a.wrapped(g.a, "Dropdown", S.a)),
				T = _.a.wrapped(j.a, "ListingSortIcon", S.a),
				L = (_.a.wrapped(O.b, "DropdownTriangle", S.a), _.a.div("Title", S.a)),
				M = _.a.wrapped(e => r.a.createElement(x.b, N({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", S.a),
				B = e => {
					var {
						disabled: t
					} = e, s = P(e, ["disabled"]);
					return r.a.createElement("div", N({}, s, {
						className: Object(d.a)(S.a.SortWrapper, s.className, {
							[S.a.isDisabled]: t
						})
					}))
				},
				D = _.a.div("DropdownRowDisabled", S.a),
				F = Object(b.t)({
					isFrontpage: b.z,
					isProfilePage: b.H,
					pageLayer: e => e
				}),
				R = Object(a.c)({
					user: E.i,
					dropdownIsOpen: (e, t) => Object(C.b)(t.dropdownId || k)(e),
					language: E.P
				}),
				A = Object(o.b)(R, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: n
					} = t;
					return {
						onOpenDropdown: () => e(Object(m.g)({
							tooltipId: s || k
						}))
					}
				});
			t.d = _.a.wrapped(F(A(Object(u.b)(e => r.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && r.a.createElement(L, null, r.a.createElement(v.c, null, "Sort")), r.a.createElement(B, {
				disabled: e.disabled
			}, e.children || r.a.createElement(M, {
				className: e.buttonClassName,
				displayText: p.a[e.sort],
				id: e.dropdownId || k,
				showDropdownTriangle: !0
			}, r.a.createElement(T, {
				sort: e.sort
			}))), r.a.createElement(h.a.Consumer, null, t => r.a.createElement(I, N({
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || k
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? r.a.createElement(D, null, r.a.createElement(v.c, null, "Coming soon")) : (e.sortOptions || ((e, t) => {
				const s = [l.N.HOT, l.N.NEW, l.N.TOP, l.N.RISING];
				return e && t && s.unshift(l.N.BEST), s
			})(e.isFrontpage, e.user)).map(t => r.a.createElement(x.b, {
				className: Object(d.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: p.a[t],
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(f.d)(t))
				},
				href: e.isProfilePage ? Object(c.a)(e.baseUrl, {
					sort: t
				}) : Object(y.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, r.a.createElement(T, {
				className: e.rowIconClassName,
				sort: t
			}))))))))), "ListingSort", S.a)
		},
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3TV1zxvLEbF8phHfZ17hyU",
				shareIcon: "_2-No1ECt3Twm8oRh3GhL5T",
				shareMenu: "_1Y9kO8WxKheHpQbgAgYk9P",
				shareText: "_3ZNfZZMmSFZUWWm-nHK327",
				HorizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				horizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				score: "_3O9hIPB_M3zadlrD7rXaEG",
				ShareButton: "_3VIaRwebVBflQjPct1Wz6l",
				shareButton: "_3VIaRwebVBflQjPct1Wz6l"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/app/strings/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			const b = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", p.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					language: m,
					post: u,
					subredditOrProfile: h
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(p.a.container, t)
				}, r.a.createElement(d.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, r.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: h
				}), r.a.createElement("span", null, h.displayText)), ((e, t, s) => {
					if (s) return r.a.createElement("div", {
						role: "img",
						"aria-label": Object(o.a)(e, "posts.crosspostedByFrom", {
							by: Object(l.c)(t),
							from: s.displayText
						})
					}, r.a.createElement(b, null))
				})(m, u.author, s), h && h.isQuarantined && r.a.createElement(i.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className)
				}, r.a.createElement(a.a, {
					className: Object(o.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(o.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(o.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/MiniCardPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/isUrl/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postFlair.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/Media/index.tsx"),
				h = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				O = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				C = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				E = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Vote/index.ts"),
				w = s("./src/reddit/selectors/activeModalId.ts"),
				S = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = s("./src/reddit/selectors/postFlair.ts"),
				N = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/CommentsLink/index.tsx"),
				I = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				T = s("./src/reddit/components/Flatlist/index.tsx"),
				L = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				B = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				D = s("./src/reddit/components/ShareMenu/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./src/reddit/constants/postLayout.ts"),
				A = s("./src/reddit/helpers/trackers/post.ts"),
				W = s("./src/reddit/i18n/components.tsx"),
				H = s("./src/reddit/icons/fonts/Share/index.tsx"),
				U = s("./src/reddit/models/User/index.ts"),
				V = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				G = s.n(V),
				K = s("./src/lib/lessComponent.tsx");
			const q = "-MiniCardModMenu",
				z = "-MiniCardOverflowMenu",
				Q = "-MiniCardShareMenu",
				J = K.a.wrapped(I.a, "HorizontalVotes", G.a),
				Y = K.a.button("ShareButton", G.a),
				Z = Object(f.t)({
					currentProfileName: f.h,
					isCommentPermalink: f.v,
					isCommentsPage: f.w,
					isProfilePostListing: f.I,
					pageLayer: e => e
				}),
				X = Object(a.c)({
					layout: f.M,
					subreddit: f.q
				});
			var $ = Z(Object(o.b)(X, {})(Object(F.b)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: o,
						hasModFlairPerms: a,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: u,
						isSticky: p,
						language: b,
						layout: h,
						modModeEnabled: g,
						onCommentsClick: x,
						post: y,
						sendEvent: f,
						showEditFlair: v,
						showEditPost: O,
						subreddit: C
					} = e, E = e => f(Object(A.f)(y.id, e)), j = y.postId, w = Object(T.d)(q, y.id, m, p), S = !!n && Object(U.f)(n) === y.author;
					return r.a.createElement("div", {
						className: Object(i.a)(G.a.flatlistContainer, s)
					}, r.a.createElement(J, {
						compact: !1,
						model: y,
						onVoteClick: o,
						scoreClassName: G.a.score
					}), r.a.createElement(k.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						postId: y.id,
						modModeEnabled: g,
						numComments: y.numComments,
						type: R.g.Compact,
						onClick: x
					}), r.a.createElement(D.a, {
						className: G.a.shareMenu,
						dropdownId: Object(T.d)(Q, y.id, m, p),
						permalink: y.permalink,
						post: y,
						sendEventWithName: E,
						subreddit: C
					}, r.a.createElement(Y, null, r.a.createElement(H.a, {
						className: G.a.shareIcon
					}), r.a.createElement("span", {
						className: G.a.shareText
					}, r.a.createElement(W.c, null, "share")))), c && r.a.createElement(L.a, {
						dropdownId: w,
						onClick: () => E("post_mod_action_menu")
					}, r.a.createElement(T.b, {
						className: G.a.modActionsIcon
					}), r.a.createElement(M.a, {
						canEditFlair: a && !!v,
						hasModPostPerms: c,
						isOverlay: !!m,
						isPostAuthor: S,
						language: b,
						modModeEnabled: g,
						post: y,
						tooltipId: w
					})), r.a.createElement(B.g, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!m,
						isProfilePostListing: u,
						layout: h,
						pageLayer: e.pageLayer,
						permalink: y.permalink,
						postId: j,
						dropdownId: Object(T.d)(z, y.id, m, p),
						isFixed: p,
						sendEvent: f,
						showEditPost: !!O,
						showEditFlair: !!v,
						useFlatlistBreakpoints: Object(B.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				ee = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				te = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				se = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ne = s.n(se),
				re = s("./src/reddit/components/MiniCardPost/index.m.less"),
				oe = s.n(re);
			s.d(t, "a", (function() {
				return ie
			}));
			const ae = Object(f.t)(),
				ie = Object(o.b)(() => Object(a.c)({
					activeModalId: w.a,
					autoplayPref: P.b,
					crosspostRoot: N.c,
					crosspostSubredditOrProfile: N.d,
					currentUser: P.i,
					flairStyleTemplate: f.Q,
					hideNSFWPref: P.y,
					isActive: N.g,
					language: P.P,
					moderatorPermissions: S.i,
					modModeEnabled: f.O,
					post: N.I,
					showEditFlair: _.a,
					subredditOrProfile: N.U,
					userIsOp: P.fb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: n,
								selectedTemplateId: r
							} = t;
							return e(Object(m.h)({
								post: s,
								previewFlair: n,
								selectedTemplateId: r
							}))
						},
						handleVote: t => {
							const n = t === j.a.upvoted ? Object(l.N)(s) : Object(l.o)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(l.L)(s)),
						onOpenReportsDropdown: t => e(Object(u.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: n,
							selectedTemplateId: r
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: r
						})
					}
				}));
			t.b = ae(ie(Object(c.a)(e => {
				const {
					autoplayPref: t,
					availableWidth: s,
					className: n,
					crosspostRoot: o,
					crosspostSubredditOrProfile: a,
					currentUser: c,
					eventFactory: l,
					flairStyleTemplate: m,
					forceLoadMedia: u,
					hideNSFWPref: f,
					language: j,
					moderatorPermissions: w,
					modModeEnabled: S,
					onClickPost: _,
					post: N,
					scrollerItemRef: P,
					shouldPause: k,
					showMetaLine: I = !0,
					showEditFlair: T,
					subredditOrProfile: L,
					userIsOp: M
				} = e, {
					media: B
				} = o || N, D = B && B.type, F = Object(x.b)(N.id), R = D === E.n.RTJSON, A = M && R, W = Object(O.a)(w), H = Object(v.a)(w), U = B && D !== E.n.RTJSON && D !== E.n.TEXT, V = !B && !!N.source && Object(d.a)(N.source.url), G = B && r.a.createElement(b.a, {
					autoplayPref: t,
					availableWidth: s,
					className: oe.a.media,
					imageBoxClassName: oe.a.mediaImageBox,
					imageBoxContentImageClassName: oe.a.mediaImageBoxContentImage,
					forceAspectRatio: E.c,
					isListing: !0,
					isMiniCard: !0,
					isNotCardView: !0,
					post: o || N,
					scrollerItemRef: P,
					shouldPause: k,
					shouldLoad: u,
					showCentered: !0,
					showFull: !1
				});
				return r.a.createElement(g.a, {
					className: Object(i.a)(oe.a.postContainer, ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, Object(C.a)(e), n),
					style: Object.assign({}, Object(C.b)(e.flairStyleTemplate), Object(C.d)(e)),
					post: N,
					onClick: _,
					eventFactory: l
				}, r.a.createElement(h.a, {
					className: oe.a.backgroundWrapper,
					flairStyleTemplate: m
				}, U && G, r.a.createElement("div", {
					className: oe.a.innerContainer
				}, V && r.a.createElement(te.a, {
					post: N,
					templatePlaceholderImage: m ? m.postPlaceholderImage : void 0
				}), r.a.createElement(y.c, {
					className: oe.a.postTitleCompact,
					disableFlair: !0,
					hideSourceLink: !0,
					post: N,
					size: y.b.Large,
					titleColor: m && m.postTitleColor
				}), I && L && r.a.createElement(ee.a, {
					className: oe.a.metaLine,
					crosspostSubredditOrProfile: a,
					hideNSFWPref: f,
					language: j,
					post: N,
					subredditOrProfile: L
				}), !U && r.a.createElement("div", {
					className: oe.a.mediaWrapper
				}, G), r.a.createElement("div", {
					className: oe.a.flexSpacer
				}), r.a.createElement($, {
					currentUser: c,
					handleVote: e.handleVote,
					hasModFlairPerms: H,
					hasModPostPerms: W,
					language: j,
					modModeEnabled: S,
					post: N,
					showEditFlair: T,
					showEditPost: A
				}))), e.activeModalId === F && r.a.createElement(x.a, {
					flairs: N.flair,
					subredditId: N.belongsTo.id,
					modalId: F,
					onFlairChanged: e.onFlairChanged
				}), r.a.createElement(p.d, {
					postId: N.id
				}))
			})))
		},
		"./src/reddit/components/ModalStyledComponents/Modal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const d = e => e.preventDefault();
			t.a = Object(o.a)(e => {
				const t = !!e.cancelActionText,
					s = !(!e.actionText || !e.onConfirm);
				return r.a.createElement(a.c, {
					style: e.style
				}, r.a.createElement(a.g, null, r.a.createElement(c.a, null, r.a.createElement(a.n, null, e.headerText), !e.hideCancel && r.a.createElement(i.a, {
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, r.a.createElement(a.b, null)))), r.a.createElement(a.j, null, e.modalBody()), (t || s) && r.a.createElement(a.e, null, t && r.a.createElement(a.a, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, e.cancelActionText), s && r.a.createElement(a.r, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: t => {
						e.onConfirm && e.onConfirm(), e.toggleModal(), e.trackClick && e.trackClick()
					}
				}, e.actionText)))
			})
		},
		"./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				headerButton: "_3aSsYcE4XPX93_RpWvd-4s"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, s) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, s) {
			e.exports = {
				CommunityCount: "_2FGPtEJLumoHbu-QFFxout",
				communityCount: "_2FGPtEJLumoHbu-QFFxout",
				SubredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				subredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				SidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				sidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				ModalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq",
				modalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/i18n/components.tsx"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const g = h.a.wrapped(m.b, "SubredditIcon", b.a),
				x = h.a.span("Label", b.a),
				y = Object(l.c)({
					subredditOrProfile: u.M
				});
			var f = Object(d.b)(y)(e => {
				let {
					children: t,
					subredditOrProfile: s
				} = e;
				return t(s, o.a.createElement(o.a.Fragment, null, o.a.createElement(g, {
					subredditOrProfile: s
				}), o.a.createElement(x, null, s.displayText)))
			});
			var v = e => {
					let {
						children: t,
						className: s,
						subredditsOrProfilesIds: n
					} = e;
					const r = n.map(e => o.a.createElement(f, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return o.a.createElement("div", {
						className: s
					}, r)
				},
				O = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				C = s.n(O);
			s.d(t, "a", (function() {
				return w
			}));
			const E = h.a.div("CommunityCount", C.a),
				j = h.a.wrapped(v, "SubredditsOrProfiles", C.a),
				w = h.a.wrapped(a.a, "SidebarSubreddit", C.a),
				S = h.a.wrapped(a.a, "ModalSubreddit", C.a);
			var _;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(_ || (_ = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: s,
					language: r,
					onSeeMoreDetails: a,
					subredditCategory: d
				} = e, l = t ? w : S, m = s.length, u = t && s.length > 4;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(E, null, m > 0 ? Object(i.c)(r, "multireddit.info.communityCount", m, {
					object: Object(i.a)(r, d ? "multireddit.info.category" : "multireddit.info.multi")
				}) : Object(i.a)(r, "multireddit.empty")), m > 0 && o.a.createElement(j, {
					subredditsOrProfilesIds: t ? s.slice(0, 4) : s
				}, (t, s) => o.a.createElement(l, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, s)), m > 0 && u && o.a.createElement(c.n, {
					onClick: a
				}, o.a.createElement(n.c, null, "See more")))
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less": function(e, t, s) {
			e.exports = {
				SidebarTopSpacer: "AHfNtZK4Z7VFG9guitlj7",
				sidebarTopSpacer: "AHfNtZK4Z7VFG9guitlj7",
				ModalTopSpacer: "_2ispBvPlngXQd3xKtLWBQb",
				modalTopSpacer: "_2ispBvPlngXQd3xKtLWBQb",
				SidebarTitleContainer: "WHFQUhYmskfFnYj9Wop5R",
				sidebarTitleContainer: "WHFQUhYmskfFnYj9Wop5R",
				SidebarTitle: "_2K0i3XQzE9WLp3XNx1byXx",
				sidebarTitle: "_2K0i3XQzE9WLp3XNx1byXx",
				SidebarFlair: "L6WVFQA-UjKC-pAtGgJkG",
				sidebarFlair: "L6WVFQA-UjKC-pAtGgJkG",
				Attributon: "htg8GP8UyboUgLmuSYKen",
				attributon: "htg8GP8UyboUgLmuSYKen",
				FadingDescription: "_2Z-Kuo_aE91sy_TOtfCUkO",
				fadingDescription: "_2Z-Kuo_aE91sy_TOtfCUkO",
				shouldFade: "_2ONS322IFK1Sw2jAj3dZqW",
				Component: "_20vfWUdM54Wu07ZOfKYP8o",
				component: "_20vfWUdM54Wu07ZOfKYP8o"
			}
		},
		"./src/reddit/components/MultiredditInfo/index.m.less": function(e, t, s) {
			e.exports = {
				noSubredditsText: "EOCYiZiqAa39tAXUCAqmZ"
			}
		},
		"./src/reddit/components/MultiredditManageWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetContainer: "Md-M9lk_Fnyiovos-cWPZ",
				bubbleSelector: "_32QbfsW2hwOWwyV4hZJqEG",
				error: "s0AzWPiC_eJAnSdDAZPym",
				searchIcon: "_1wfVsnvMUNUkrQpFx5I6O9",
				bubble: "_3NfN8QVLJTyC1hzOZDqDa_",
				selected: "_3Mgq2YpcfG6lx6UTEtbSUX",
				bubbleIcon: "_3kWMG0X0DIgmFR4pMIpuWf",
				text: "_1boSpw2RVthfLh9y4Ln0H2",
				isEmpty: "lsui73aPZobEl_lU01DBf",
				closeIcon: "_1FGYwDvXjw09vL1EUCOelw",
				input: "_2LQWhKcfsIjm5PCEiFbnfv",
				emptyText: "Uqpbu2QyTc_VF5yeJOo0U",
				addButton: "_7aZcaB7RRfblay2Mpw4PJ",
				dropdown: "rUguk2cMQS0qUTWqZTUfE",
				expandButton: "_31vaGAnztsBt2uSP6kVo6D",
				expandButtonContainer: "_2b-PrKZyTcbtQSMmFYdZ3Z"
			}
		},
		"./src/reddit/components/MultiredditSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				detailsContainer: "_2o2cN1Q1R544f7UCxJHRTH",
				modalContainer: "_2qY6j7wtHkEaoEG4g5F53z",
				closeBtn: "_3NmSyduxNX74yaC9kmkYgh",
				modalMain: "_1hG7UoCi1oRW1UnsvoewhT",
				placeholder: "_1wCkMb-wQyvSVuqZWNjIEZ"
			}
		},
		"./src/reddit/components/MultiredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/actions/subscription/index.ts"),
				b = s("./src/reddit/components/OverflowMenu/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/i18n/utils.ts"),
				x = s("./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less"),
				y = s.n(x);
			var f = Object(i.b)(null, e => ({
					subscribe: t => e(Object(p.d)(t, !0))
				}))(e => {
					const {
						communities: t,
						subscribe: s
					} = e, n = t.filter(e => !e.isSubscribed);
					return n.length ? a.a.createElement(b.b, {
						className: y.a.headerButton,
						dropdownId: "MULTIREDDIT_INFO_DROPDOWN_ID",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, a.a.createElement(h.b, {
						displayText: Object(g.c)("Join all communities"),
						onClick: () => s(n)
					})) : null
				}),
				v = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				O = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				E = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				j = s("./src/reddit/i18n/components.tsx"),
				w = s("./src/reddit/selectors/multireddit.ts"),
				S = s("./src/reddit/components/MultiredditInfo/index.m.less"),
				_ = s.n(S);
			const N = Object(c.c)({
					communities: (e, t) => Object(w.b)(e, t.multireddit)
				}),
				P = Object(i.b)(N),
				k = e => {
					let {
						item: t
					} = e;
					return a.a.createElement(C.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: "".concat(t.type, "-").concat(t.name),
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: t.sendEvent,
						type: t.type
					})
				};
			var I = Object(O.b)(P(e => {
					const {
						communities: t,
						titleText: s
					} = e;
					return t.length ? a.a.createElement(v.a, {
						items: t,
						minimizedLength: 5,
						title: s,
						headerButton: a.a.createElement(f, {
							communities: t
						}),
						renderItem: k
					}) : a.a.createElement(E.a, {
						title: s
					}, a.a.createElement("div", {
						className: _.a.noSubredditsText
					}, a.a.createElement(j.c, null, "This custom feed does not yet contain any communities.")))
				})),
				T = s("./src/higherOrderComponents/sizeMe.tsx"),
				L = s("./src/lib/timeAgo/index.ts"),
				M = s("./src/reddit/components/Flair/index.tsx"),
				B = s("./src/reddit/components/RawHTMLDisplay/Listing.tsx"),
				D = s("./src/reddit/constants/posts.ts"),
				F = s("./src/reddit/controls/Button/index.tsx"),
				R = s("./src/reddit/models/Multireddit/index.ts"),
				A = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				W = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less"),
				H = s.n(W),
				U = s("./src/lib/lessComponent.tsx");
			const V = U.a.div("SidebarTopSpacer", H.a),
				G = U.a.div("ModalTopSpacer", H.a),
				K = U.a.div("SidebarTitleContainer", H.a),
				q = U.a.div("SidebarTitle", H.a),
				z = U.a.wrapped(M.a, "SidebarFlair", H.a),
				Q = U.a.div("Attributon", H.a),
				J = e => {
					let {
						children: t,
						className: s
					} = e;
					return a.a.createElement(B.a, {
						className: s,
						html: t
					})
				},
				Y = Object(T.a)(e => {
					let {
						children: t,
						language: s,
						onSeeMoreDetails: n,
						size: r
					} = e;
					const o = !r || "number" != typeof r.height || r.height > 152;
					return a.a.createElement("div", null, a.a.createElement(J, {
						className: Object(m.a)(H.a.FadingDescription, {
							[H.a.shouldFade]: o
						})
					}, t), o && a.a.createElement(F.n, {
						onClick: n
					}, a.a.createElement(j.c, null, "Read more")))
				});
			var Z;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(Z || (Z = {}));
			var X = U.a.wrapped(e => {
					const {
						mode: t,
						multireddit: s,
						language: n,
						onSeeMoreDetails: r,
						subredditCategory: o
					} = e, i = t === Z.Sidebar, [c, l] = i ? [V, Q] : [G, Q], m = Object(R.f)(s) ? () => a.a.createElement(c, null, i && a.a.createElement(K, null, a.a.createElement(q, null, s.displayText), s.visibility !== R.e.Public && a.a.createElement(z, {
						text: Object(d.a)(n, "multireddit.visibility.".concat(s.visibility))
					})), a.a.createElement(l, null, Object(d.a)(n, "multireddit.info.title", {
						timeAgo: Object(L.d)(n, s.created),
						username: Object(R.i)(s.url)
					}))) : () => null, u = Object(R.f)(s) && s.description ? () => a.a.createElement(c, null, i ? a.a.createElement(Y, {
						language: n,
						onSeeMoreDetails: r
					}, s.description) : a.a.createElement(B.a, {
						html: s.description
					})) : () => null, p = [...s.subredditIds && s.subredditIds.map(e => ({
						id: e,
						type: D.a.SUBREDDIT
					})) || [], ...s.profileIds && s.profileIds.map(e => ({
						id: e,
						type: D.a.PROFILE
					})) || []];
					return a.a.createElement("div", {
						className: e.className
					}, m(), u(), a.a.createElement(A.b, {
						isSidebar: i,
						language: n,
						onSeeMoreDetails: r,
						subredditCategory: o,
						subredditsOrProfilesIds: p
					}))
				}, "Component", H.a),
				$ = s("./node_modules/lodash/debounce.js"),
				ee = s.n($),
				te = s("./node_modules/lodash/noop.js"),
				se = s.n(te),
				ne = s("./src/lib/constants/index.ts"),
				re = s("./src/reddit/actions/multireddit/index.ts"),
				oe = s("./src/reddit/actions/subredditAutocomplete.ts"),
				ae = s("./src/reddit/actions/toaster.ts"),
				ie = s("./src/reddit/constants/keycodes.ts"),
				ce = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				de = s("./src/reddit/helpers/name/index.ts"),
				le = s("./src/reddit/icons/svgs/Close/index.tsx"),
				me = s("./src/reddit/icons/svgs/Search/index.tsx"),
				ue = s("./src/reddit/models/Toast/index.ts"),
				pe = s("./src/reddit/models/Widgets/index.ts"),
				be = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				he = s("./src/reddit/selectors/subredditAutocomplete.ts"),
				ge = s("./src/reddit/selectors/user.ts");
			const xe = Object(c.c)({
				isAutocompletePending: he.c,
				items: he.e,
				language: ge.P
			});
			class ye extends a.a.Component {
				constructor() {
					super(...arguments), this.onDropdownContainerMouseDown = e => {
						e.preventDefault()
					}, this.onEntrySelect = e => {
						this.props.onEntrySelect(this.props.items[e])
					}, this.onEntryFocus = e => {
						this.props.onEntryFocus(this.props.items[e], e)
					}
				}
				render() {
					const {
						className: e,
						focusedIndex: t,
						items: s,
						isAutocompletePending: n,
						language: r
					} = this.props;
					return a.a.createElement(be.a, {
						className: e,
						focusedIndex: t,
						items: s,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						showNoMatchesCaption: !n && 0 === s.length,
						language: r,
						isValid: !0
					})
				}
			}
			var fe = Object(i.b)(xe)(ye),
				ve = s("./src/reddit/components/MultiredditManageWidget/index.m.less"),
				Oe = s.n(ve);

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ee = 12,
				je = 5,
				we = 500,
				Se = Object(c.c)({
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					communityInformations: (e, t) => {
						let {
							multireddit: s
						} = t;
						return Object(w.b)(e, s)
					},
					removePending: e => e.multireddits.api.removeSubreddit.pending
				}),
				_e = Object(i.b)(Se, (e, t) => {
					let {
						multireddit: s
					} = t;
					return {
						addSubredditRequested: (t, n) => {
							const r = n ? Object(pe.g)(n) : void 0;
							e(Object(re.a)({
								communityInfo: r,
								identifier: t,
								multiredditNames: [s.name]
							}))
						},
						errorToast: t => e(Object(ae.e)({
							text: t,
							kind: ue.b.Error
						})),
						removeSubredditRequested: t => {
							let {
								id: n,
								name: r,
								type: o
							} = t;
							return n && e(Object(re.i)({
								id: n,
								multiredditName: s.name,
								name: r,
								type: o
							}))
						},
						subredditAutocompleteRequested: t => e(Object(oe.d)(t, s.isNSFW))
					}
				}),
				Ne = {
					choice: null,
					focusedIndex: -1,
					focusedItem: null,
					isAddError: null,
					isChoiceSelected: !1,
					isDropdownOpen: !1,
					isListExpanded: !1,
					memoizedShortList: [],
					query: ""
				};
			class Pe extends a.a.Component {
				constructor(e) {
					super(e), this.onRemoveClickedFnCache = {}, this.closeDropdown = () => {
						this.setState({
							isDropdownOpen: !1,
							focusedIndex: -1
						})
					}, this.onChange = e => {
						this.state.choice || (this.setState({
							isAddError: null,
							isDropdownOpen: e.target.value.trim().length > 0,
							query: e.target.value.trim()
						}), this.onQueryUpdated())
					}, this.onBlur = () => {
						this.closeDropdown()
					}, this.onFocus = () => {
						this.setState(e => e.query && !e.isDropdownOpen ? {
							isDropdownOpen: !0
						} : null)
					}, this.onKeydown = e => {
						this.state.choice ? this.state.choice && (e.which === ie.a.ArrowLeft ? this.onChoiceSelected() : this.state.isChoiceSelected ? e.which === ie.a.Backspace ? this.setState({
							choice: null
						}) : e.which === ie.a.ArrowRight && this.onChoiceDeselected() : e.which !== ie.a.Backspace || this.state.query.length || this.onChoiceSelected(), e.which === ie.a.Enter && this.onSubmit()) : this.state.isDropdownOpen ? e.which === ie.a.ArrowDown ? (this.setState({
							focusedIndex: this.state.focusedIndex + 1
						}), e.stopPropagation()) : e.which === ie.a.ArrowUp ? (this.setState({
							focusedIndex: this.state.focusedIndex - 1
						}), e.stopPropagation()) : e.which === ie.a.Escape ? (this.closeDropdown(), e.stopPropagation()) : e.which === ie.a.Enter && (this.state.focusedItem ? this.onDropdownItemSelect(this.state.focusedItem) : -1 === this.state.focusedIndex && this.onSubmit()) : e.which === ie.a.Enter && this.onSubmit()
					}, this.onQueryUpdated = () => {
						this.props.subredditAutocompleteRequested(this.state.query)
					}, this.onDropdownItemSelect = e => {
						this.setState(Object.assign({}, Ne, {
							choice: e,
							isListExpanded: this.state.isListExpanded,
							memoizedShortList: this.state.memoizedShortList
						}))
					}, this.onDropdownItemFocus = (e, t) => {
						this.setState({
							focusedItem: e,
							focusedIndex: t
						})
					}, this.onChoiceSelected = () => this.setState({
						isChoiceSelected: !0
					}), this.onChoiceDeselected = () => this.setState({
						isChoiceSelected: !1
					}), this.onChoiceRemoved = () => this.setState({
						choice: null
					}), this.onSubmit = () => {
						if (!this.props.addSubredditPending)
							if (this.state.choice) this.props.addSubredditRequested({
								name: this.state.choice.name,
								type: "subreddit"
							}, this.state.choice), this.setState({
								isDropdownOpen: !1
							});
							else {
								const {
									query: e
								} = this.state;
								if (e.length) {
									const t = Object(de.g)(e),
										s = t.startsWith(ne.Rb) ? "profile" : "subreddit",
										n = "profile" === s ? t.substring(2) : t;
									this.props.addSubredditRequested({
										name: n,
										type: s
									})
								}
							}
					}, this.getOnRemoveClickedFn = e => {
						const t = "".concat(e.id || "", ".").concat(e.name);
						return this.onRemoveClickedFnCache[t] ? this.onRemoveClickedFnCache[t] : (this.onRemoveClickedFnCache[t] = () => {
							this.props.removeSubredditRequested(e)
						}, this.onRemoveClickedFnCache[t])
					}, this.onToggleExpand = () => this.setState({
						isListExpanded: !this.state.isListExpanded
					}), this.state = Object.assign({}, Ne, {
						memoizedShortList: e.communityInformations.slice(0, je)
					}), this.onQueryUpdated = ee()(this.onQueryUpdated, we)
				}
				componentDidUpdate(e) {
					!this.props.addSubredditPending && e.addSubredditPending && (this.props.addSubredditError ? this.setState({
						isAddError: this.props.addSubredditError
					}) : this.setState(Ne)), this.props.communityInformations.length !== e.communityInformations.length && this.setState({
						memoizedShortList: this.props.communityInformations.slice(0, je)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							communityInformations: t,
							multireddit: s,
							removePending: n
						},
						state: {
							choice: r,
							focusedIndex: o,
							isAddError: i,
							isChoiceSelected: c,
							isDropdownOpen: d,
							isListExpanded: l,
							memoizedShortList: u,
							query: p
						}
					} = this;
					return a.a.createElement(E.a, {
						className: Oe.a.widgetContainer,
						headerButton: a.a.createElement(f, {
							communities: t
						}),
						title: Object(g.c)("manage communities")
					}, a.a.createElement("div", {
						className: Object(m.a)(Oe.a.bubbleSelector, {
							[Oe.a.error]: !!i
						}),
						onBlur: this.onBlur,
						onKeyDown: this.onKeydown
					}, r ? a.a.createElement("div", {
						className: Object(m.a)(Oe.a.bubble, {
							[Oe.a.selected]: c
						}),
						tabIndex: 0,
						onClick: this.onChoiceSelected
					}, a.a.createElement("img", {
						src: r.iconUrl,
						className: Oe.a.bubbleIcon
					}), a.a.createElement("span", {
						className: Oe.a.text
					}, "r/".concat(r.name)), a.a.createElement(le.a, {
						className: Oe.a.closeIcon,
						onClick: this.onChoiceRemoved
					})) : a.a.createElement(me.a, {
						className: Oe.a.searchIcon
					}), a.a.createElement("input", {
						className: Object(m.a)(Oe.a.input, {
							[Oe.a.isEmpty]: !!r
						}),
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: p
					}), !i && (r || p.length > 0) && (e ? a.a.createElement(ce.a, {
						sizePx: Ee
					}) : a.a.createElement(F.n, {
						className: Oe.a.addButton,
						onClick: this.onSubmit
					}, Object(g.c)("Add"))), d && a.a.createElement(fe, {
						className: Oe.a.dropdown,
						focusedIndex: o,
						multireddit: s,
						onEntryFocus: this.onDropdownItemFocus,
						onEntrySelect: this.onDropdownItemSelect,
						substring: p
					})), 0 === t.length ? a.a.createElement("p", {
						className: Oe.a.emptyText
					}, Object(g.c)("Try adding some communities to your custom feed!")) : (l ? t : u).map(e => a.a.createElement(C.a, Ce({}, e, {
						buttonDisabled: !!n,
						key: e.id,
						isLoading: n === e.id,
						onTertiaryButtonClick: this.getOnRemoveClickedFn(e),
						sendEvent: se.a,
						showTertiaryButtonOnHover: !0,
						tertiaryButtonText: Object(g.c)("Remove"),
						useTertiaryButton: !0
					}))), t.length > je && a.a.createElement("div", {
						className: Oe.a.expandButtonContainer
					}, a.a.createElement(F.n, {
						className: Oe.a.expandButton,
						onClick: this.onToggleExpand
					}, l ? Object(g.c)("show less") : Object(g.c)("show more"))))
				}
			}
			var ke = _e(Pe),
				Ie = s("./src/reddit/components/MultiredditSuggestionsWidget/index.m.less"),
				Te = s.n(Ie);
			const Le = 5,
				Me = Object(c.c)({
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditFetched: e => e.multireddits.api.addSubreddit.fetched,
					recommendations: w.k,
					recommendationsError: e => e.multireddits.api.recommendations.error,
					recommendationsPending: e => e.multireddits.api.recommendations.pending
				});
			class Be extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						memoizedRecommendations: this.props.recommendations,
						recommendationsToExclude: []
					}, this.onRecommendationsRefreshClicked = () => {
						this.setState(e => ({
							recommendationsToExclude: [...e.recommendationsToExclude, ...e.memoizedRecommendations.slice(0, Le).map(e => e.name)]
						}), () => this.props.recommendationsRefreshed(this.state.recommendationsToExclude))
					}
				}
				componentDidUpdate(e) {
					this.props.recommendations !== e.recommendations && this.setState({
						memoizedRecommendations: this.props.recommendations
					}), !this.props.addSubredditPending && e.addSubredditPending && this.setState(t => ({
						recommendationsToExclude: [...t.recommendationsToExclude, ...e.addSubredditPending ? [e.addSubredditPending] : []],
						memoizedRecommendations: t.memoizedRecommendations.filter(t => t.name !== e.addSubredditPending)
					}), () => {
						this.state.memoizedRecommendations.length < Le && this.props.recommendationsRefreshed(this.state.recommendationsToExclude)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							addSubredditRequested: t,
							recommendations: s,
							recommendationsError: n,
							recommendationsPending: r
						},
						state: {
							memoizedRecommendations: o
						}
					} = this;
					return a.a.createElement(C.b, {
						bottomButtonText: Object(g.c)("refresh"),
						className: Te.a.container,
						communities: o.slice(0, Le),
						errorMsg: Object(g.c)("Couldn't find any recommendations. Try adding more communities first!"),
						isError: !s.length || !!n,
						isLoading: r,
						loadingItemName: e || void 0,
						onBottomButtonClick: this.onRecommendationsRefreshClicked,
						onTertiaryButtonClick: t,
						sendEvent: se.a,
						showTertiaryButtonOnHover: !0,
						itemButtonDisabled: !!e,
						tertiaryButtonText: Object(g.c)("add"),
						title: Object(g.c)("People also added"),
						useTertiaryButton: !0
					})
				}
			}
			var De = Object(i.b)(Me, (e, t) => ({
					addSubredditRequested: s => {
						Object(R.f)(t.multireddit) && e(Object(re.a)({
							identifier: {
								name: s.name,
								type: s.type
							},
							multiredditNames: [t.multireddit.name],
							communityInfo: s
						}))
					},
					recommendationsRefreshed: s => {
						Object(R.f)(t.multireddit) && e(Object(re.h)({
							multiredditName: t.multireddit.name,
							username: t.multiUsername,
							toExcludeNames: s
						}))
					}
				}))(Be),
				Fe = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Re = s("./src/reddit/components/SidebarSectionHeader/index.m.less"),
				Ae = s.n(Re),
				We = U.a.div("Component", Ae.a),
				He = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Ue = s("./src/reddit/constants/zIndex.ts"),
				Ve = s("./src/reddit/controls/TextButton/index.tsx"),
				Ge = s("./src/reddit/helpers/trackers/idCard.ts"),
				Ke = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				qe = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				ze = s("./src/reddit/components/MultiredditSidebar/index.m.less"),
				Qe = s.n(ze);

			function Je() {
				return (Je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return Ze
			}));
			const Ye = Object(l.a)(e => a.a.createElement(u.c, {
					className: Qe.a.modalContainer
				}, !e.shouldHideHeader && a.a.createElement(u.g, null, a.a.createElement(Ke.a, null, a.a.createElement(u.n, null, e.multireddit.displayText), a.a.createElement(Ve.a, {
					onClick: e.onCloseModal
				}, a.a.createElement(u.b, null)))), a.a.createElement(u.j, null, a.a.createElement(X, {
					language: e.language,
					mode: Z.Modal,
					multireddit: e.multireddit,
					subredditCategory: e.subredditCategory
				})), e.shouldHideHeader && a.a.createElement(Ve.a, {
					className: Qe.a.closeBtn,
					onClick: e.onCloseModal
				}, a.a.createElement(u.b, null)))),
				Ze = e => a.a.createElement(Ye, Je({}, e, {
					overlayCustomStyles: {
						zIndex: Ue.b
					},
					withOverlay: !0
				})),
				Xe = () => a.a.createElement(E.a, null, r()(5, e => a.a.createElement("div", {
					className: Object(m.a)(Qe.a.placeholder, Object(qe.a)({
						isLoading: !0
					})),
					key: e
				}))),
				$e = e => Object(R.f)(e.multireddit) ? Object(R.g)(e.multireddit) ? e.isCurrentUserMultiredditOwner ? a.a.createElement(ke, {
					multireddit: e.multireddit
				}) : a.a.createElement(I, {
					multireddit: e.multireddit,
					titleText: Object(g.c)("Communities in this custom feed")
				}) : a.a.createElement(Xe, null) : a.a.createElement("div", {
					className: Qe.a.detailsContainer
				}, a.a.createElement(We, null, e.subredditCategory ? e.subredditCategory.name : Object(d.a)(e.language, "multireddit.sidebar.details")), a.a.createElement(X, {
					language: e.language,
					mode: Z.Sidebar,
					multireddit: e.multireddit,
					onSeeMoreDetails: e.onSeeMoreDetails,
					onSubredditClick: e.onSubredditClick,
					subredditCategory: e.subredditCategory
				})),
				et = Object(c.c)({
					isCurrentUserMultiredditOwner: (e, t) => {
						let {
							multireddit: s
						} = t;
						return Object(R.f)(s) && Object(w.c)(e, s.url)
					},
					language: (e, t) => {
						let {
							language: s
						} = t;
						return s || Object(ge.P)(e)
					}
				}),
				tt = Object(i.b)(et, (e, t) => {
					let {
						subredditCategory: s
					} = t;
					return {
						trackSeeMoreClicked: () => e((e, t) => Ge.a(t())),
						trackSubredditClicked: t => {
							if (!s) return;
							const n = Object(pe.i)(t);
							e((e, t) => Ge.b(t(), n, s.name))
						}
					}
				});
			class st extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showModal: !1
					}, this.closeModal = () => this.setState({
						showModal: !1
					}), this.openModal = () => this.setState({
						showModal: !0
					}, this.props.subredditCategory ? this.props.trackSeeMoreClicked : void 0)
				}
				render() {
					const {
						className: e,
						isCurrentUserMultiredditOwner: t,
						language: s,
						multireddit: n,
						multiUsername: r,
						subredditCategory: o
					} = this.props, i = t && n.subredditIds && n.subredditIds.length > 0;
					return a.a.createElement(Fe.a, {
						className: e
					}, a.a.createElement($e, {
						isCurrentUserMultiredditOwner: t,
						language: s,
						multireddit: n,
						subredditCategory: o,
						onSeeMoreDetails: this.openModal,
						onSubredditClick: this.props.trackSubredditClicked
					}), this.state.showModal ? a.a.createElement(Ze, {
						language: s,
						multireddit: n,
						subredditCategory: o,
						onCloseModal: this.closeModal,
						shouldHideHeader: !!o
					}) : null, i && a.a.createElement(De, {
						multireddit: n,
						multiUsername: r
					}), a.a.createElement(He.a, null))
				}
			}
			t.b = tt(st)
		},
		"./src/reddit/components/MultiredditSuggestionsWidget/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3jG8aJCgqOrmMUbRMiakpX"
			}
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: c,
					redditStyle: u,
					theme: p
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: a
				}, b), t)
			})
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/PostList/Placeholder.tsx"),
				o = s("./src/reddit/components/PostList/LoadMore.m.less"),
				a = s.n(o);
			t.a = n.a.wrapped(r.a, "Component", a.a)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/connectors/connectToLanguage.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/describeApiError/index.ts"),
				d = s("./src/reddit/components/PostList/index.m.less"),
				l = s.n(d);
			t.a = Object(a.a)(e => {
				const {
					language: t,
					onTryAgain: s,
					apiError: r
				} = e;
				let a = n.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return r && (a = Object(c.a)({
					apiError: r,
					language: t,
					isLoggedOut: !1
				})), o.a.createElement("div", {
					className: l.a.somethingWrong
				}, o.a.createElement("div", {
					className: l.a.somethingWrongText
				}, a), s && o.a.createElement(i.f, {
					onClick: s
				}, n.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			})
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, s) {
			e.exports = {
				placeholder: "FohHGMokxXLkon1aacMoi",
				seeMoreButton: "_1Uj2L1UhJuirkaXINcf9S8",
				seeMorePostsText: "_2DB_2VI3a-y6nk57R2aWVo",
				somethingWrong: "zfoxmi0VvZvMZu1rHVbMX",
				somethingWrongText: "Ii7DEkcMDxQHElTHeeaci",
				postList: "rpBJOHq2PR60pnwJlUyP0",
				truncatedPostList: "QBfRw7Rj8UkxybFpX-USO",
				SeeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				seeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				ArrowRight: "wakXAw7uCIqmSRV84RKMW",
				arrowRight: "wakXAw7uCIqmSRV84RKMW"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return z
			})), s.d(t, "a", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				o = s.n(r),
				a = s("./node_modules/lodash/last.js"),
				i = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/fastdom/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				f = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				v = s("./src/reddit/components/Scroller/Simple.tsx"),
				O = s("./src/reddit/components/Translated/index.tsx"),
				C = s("./src/reddit/constants/adEvents.ts"),
				E = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/constants/postLayout.ts"),
				w = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/reddit/helpers/getClickInfo.ts"),
				_ = s("./src/reddit/helpers/pixels.ts"),
				N = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				P = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/helpers/brandSafety/index.ts"),
				T = s("./src/lib/LRUCache/index.ts"),
				L = s("./src/telemetry/index.ts"),
				M = s("./src/telemetry/models/Timer.ts"),
				B = s("./src/reddit/components/PostList/index.m.less"),
				D = s.n(B),
				F = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const R = 500,
				A = new T.a(R),
				W = new T.a(R),
				H = new T.a(R),
				U = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				V = h.a.div("SeeMore", D.a),
				G = h.a.wrapped(P.a, "ArrowRight", D.a),
				K = (e, t, s, n, r, o, a, i) => {
					const c = s ? "last-".concat(n, "-").concat(r) : "",
						d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(o);
					let l = A.get(d);
					return void 0 === l && (l = () => {
						s && a.onBottomViewed(n, r), a.trackOnPostEnteredViewport(e, t, i)
					}, A.set(d, l)), l
				},
				q = (e, t, s, n) => {
					const r = "left-".concat(e, "-").concat(t);
					let o = W.get(r);
					return void 0 === o && (o = r => {
						s.trackOnPostExitedViewport(e, t, r, n)
					}, W.set(r, o)), o
				},
				z = (e, t) => {
					const s = "click-".concat(e);
					let n = H.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && Object(_.a)(s.events, C.a.Click, s), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(S.a)(e)
						})
					}, H.set(s, n)), n
				},
				Q = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class J extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new T.a(R), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = o()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: n
						} = this.props, r = t(), o = [];
						r.forEach(e => o.push(e.id));
						const a = o.map(e => s[e]).filter(Boolean),
							i = a.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(I.a)(a, i))
					}, p.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && L.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = L.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = L.c.end(this.timerId);
						setTimeout(() => Object(L.b)(p.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && L.c.cancel(this.timerId), e.postIds.length && (this.timerId = L.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (b.a.read(() => this.checkAndSendScreenview()), this.timerId && L.c.has(this.timerId)) {
						const e = L.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(L.b)(p.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && L.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && i()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return L.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = L.c.end(e);
					setTimeout(() => {
						s(t(n, M.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							postsById: s
						} = t,
						n = F(t, ["postsById"]),
						{
							postsById: r
						} = e,
						o = F(e, ["postsById"]),
						a = Object.keys(n),
						i = Object.keys(o);
					if (i.length !== a.length) return !0;
					if (i.some(e => n[e] !== o[e])) return !0;
					if (s === r) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((n, o) => {
							const a = 0 === o;
							return t({
								isFirstPost: a,
								layout: e,
								post: s[n]
							}) !== t({
								isFirstPost: a,
								layout: e,
								post: r[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: r,
						isCommentPermalink: o,
						isCommentsPage: a,
						isFrontpage: i,
						isProfilePostListing: c,
						listingKey: l,
						listingName: m,
						pageLayer: u,
						pageReferrer: b,
						postClickEvent: h,
						redditStyle: g
					} = this.props, y = 0 === t, f = s ? "last-index" : "", v = "post-".concat(n, "-").concat(e, "-").concat(t, "-").concat(f, "-").concat(m, "-").concat(l, "-").concat(b);
					let O;
					if (void 0 === (O = this.scrollChildCache.get(v))) {
						const {
							inSubredditOrProfile: f,
							postsById: C
						} = this.props, E = C[e], w = E.crosspostRootId && C[E.crosspostRootId] ? C[E.crosspostRootId] : E;
						E.crosspostRootId && !C[E.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", p.p.API), e.setExtra("description", "Post ".concat(E.id, " is crosspost of ").concat(E.crosspostRootId, ", but ") + "".concat(E.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const S = this.props.postComponentForLayout({
								isCrosspost: !!E.crosspostRootId,
								isFirstPost: y,
								layout: n,
								post: w
							}),
							_ = "post-list-item-[layout: ".concat(n, "]-[postId: ").concat(e, "]"),
							P = K(e, n, s, l, m, b, this.props, t),
							I = q(e, n, this.props, t),
							T = z(e, this.props),
							L = w.media && w.media.type === k.n.EMBED ? w.media.provider : null;
						O = {
							estHeight: Object(N.c)(E, n),
							id: e,
							isFocusable: !(!w.media || n !== j.g.Large) && (k.d.has(w.media.type) && (!L || !k.q.has(L)) && !w.isSpoiler && !w.isNSFW),
							trackOnEnteredViewport: P,
							trackOnExitedViewport: I,
							render: t => {
								let {
									className: n,
									height: p,
									width: b,
									remeasure: x,
									setScrollerChildRef: v,
									shouldLoadInitially: O
								} = t;
								return d.a.createElement(S, {
									className: n,
									currentProfileName: r,
									key: _,
									availableWidth: b,
									eventFactory: h,
									first: y,
									forceLoadMedia: O,
									inSubredditOrProfile: f,
									isCommentPermalink: o,
									isCommentsPage: a,
									isFrontpage: i,
									isProfilePostListing: c,
									listingKey: l,
									listingName: m,
									pageLayer: u,
									last: s,
									onClickPost: T,
									onSizeChanged: x,
									postId: e,
									redditStyle: g,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: v
								})
							}
						}, this.scrollChildCache.set(v, O)
					}
					return O
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return d.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: n,
						onTryAgain: r,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const a = o;
					return d.a.createElement("div", {
						className: D.a.placeholder
					}, d.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && d.a.createElement(f.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: r,
						onLoadMore: o
					} = this.props;
					if (!s) return d.a.createElement("div", {
						className: D.a.placeholder
					}, d.a.createElement(y.a, {
						className: r,
						isLoading: !!t,
						layout: n,
						countOverride: U[n]
					}), !!e && d.a.createElement(f.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: o,
						layout: a,
						location: i,
						loadMore: l,
						postIds: b,
						onLoadMore: h
					} = this.props;
					let g = b.map((e, t, s) => {
						const n = t === b.length - 1;
						return this.scrollChildForPost(e, t, n, a)
					});
					r && (g = Q(g, r));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(a) : void 0,
						y = i ? Object(n.e)(i) : null,
						f = y || o;
					return d.a.createElement(c.Fragment, null, d.a.createElement(v.b, {
						innerRef: this.updateScrollerRef,
						className: f ? D.a.truncatedPostList : Object(u.a)(D.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: h,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: E.g
					}, g), y && d.a.createElement(V, {
						className: D.a.seeMoreButton
					}, d.a.createElement(w.a, {
						className: D.a.seeMorePostsText,
						to: Object(m.a)(y, {
							type: p.Kb.Posts
						})
					}, d.a.createElement(O.a, {
						msgId: "search.seeMorePosts"
					}), d.a.createElement(G, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			J.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: d.a.Fragment
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/LRUCache/index.ts"),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/placeholders.tsx");
			const c = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: s
					} = e;
					return r.a.createElement(i.a, {
						className: t,
						layout: s
					})
				},
				getComponent: () => s.e("RpanListingUnit").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var d = e => r.a.createElement(c, e),
				l = s("./src/reddit/helpers/trackers/rpan.ts"),
				m = s("./src/reddit/constants/postLayout.ts");
			const u = e => e === m.g.Classic ? 88 : e === m.g.Compact ? 42 : 340;
			s.d(t, "a", (function() {
				return b
			}));
			const p = new o.a(20),
				b = e => {
					const t = "rpan-".concat(e.layout, "-").concat(e.listingKey),
						s = p.get(t);
					if (s) return s;
					const n = h(e.desiredIndex, e.children),
						o = {
							child: {
								id: t,
								estHeight: u(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(l.l)()),
								render: t => {
									let {
										className: s
									} = t;
									return r.a.createElement(d, {
										className: s,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: n
						};
					return p.set(t, o), o
				},
				h = (e, t) => {
					const s = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; s.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				moreContainer: "_3WyMekikYHiwNeWOKndqQp",
				moreCaption: "_2OsGQXO2YdWHs0NVAbBl99",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				thumbnailTitle: "asOYju9PbMblWUua6ZsDl",
				watchingCounter: "_39XcbVabXFJtShzyIs8H1I",
				redditorIcon: "_2hUZYf9a2TRLQxn5jLEohm",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				descriptionPlaceholder: "_1WqW1SYAmWeFcfecGlX5vw",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/placeholders.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				c = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				l = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				u = s.n(m),
				p = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				b = s.n(p);
			const h = e => {
					let {
						className: t
					} = e;
					return r.a.createElement("div", {
						className: Object(o.a)(t, b.a.container, b.a.placeholder, b.a.large, u.a.largeAndMediumPostStyles)
					}, r.a.createElement(d.a, {
						className: b.a.backgroundWrapper
					}, r.a.createElement("div", {
						className: b.a.titleAndDescriptionContainer
					}, r.a.createElement("div", {
						className: b.a.titlePlaceholder
					}), r.a.createElement("div", {
						className: b.a.descriptionPlaceholder
					})), r.a.createElement("div", {
						className: b.a.body
					}, g(a.j))))
				},
				g = e => Array.from({
					length: e
				}).map((e, t) => r.a.createElement("div", {
					className: Object(o.a)(b.a.thumbnailContainer, b.a.placeholder),
					key: "rpan-thumb-placeholder-".concat(t)
				}, r.a.createElement("div", {
					className: Object(o.a)(b.a.thumbnail, b.a.placeholder)
				})));
			t.a = e => {
				let {
					className: t,
					layout: s
				} = e;
				return s === l.g.Classic ? r.a.createElement(i.b, {
					className: Object(o.a)(t, b.a.classicPostPlaceholder),
					isLoading: !0
				}) : s === l.g.Compact ? r.a.createElement(c.a, {
					className: Object(o.a)(t, b.a.compactPostPlaceholder),
					isLoading: !0
				}) : r.a.createElement(h, {
					className: t
				})
			}
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "Pr5bGphZnd_UYC5p4gJCD",
				container: "Pr5bGphZnd_UYC5p4gJCD",
				PopularIcon: "_2uzMzf2xHgtXHeHKoewIn9",
				popularIcon: "_2uzMzf2xHgtXHeHKoewIn9"
			}
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/icons/svgs/Popular/index.tsx"),
				c = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					children: t,
					className: s,
					showIcon: n
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.Container, s)
				}, n && r.a.createElement(i.a, {
					className: d.a.PopularIcon
				}), r.a.createElement(a.b, {
					type: a.a.Widget
				}, t))
			}
		},
		"./src/reddit/components/RawHTMLDisplay/Listing.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				i = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => r.a.createElement(i.a, c({
				style: {
					color: Object(a.a)(e).post
				}
			}, e)))
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("header", o.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
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
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/index.tsx"),
				p = s("./src/reddit/components/Translated/index.tsx"),
				b = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				y = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/i18n/components.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = s("./src/reddit/components/MiniCardPost/index.m.less"),
				j = s.n(E),
				w = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				S = s.n(w);
			const _ = e => e.type === v.f.Spoiler,
				N = Object(h.t)();
			t.a = N(Object(u.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					innerContainerClassName: r,
					onPostClick: c,
					trendingPost: u,
					trendingSearch: h,
					shouldOpenPost: v,
					showSubredditMeta: E = !0,
					showSubredditName: w,
					subredditOrProfile: N
				} = e, P = u && u.preview && u.preview.url || void 0, k = u && u.isSponsored ? "promoted_trend" : "trending", I = u && Object(d.a)(u.permalink) || "", T = v && I || h && Object(a.a)("/search", {
					q: h.rawQuery,
					source: k
				}) || I, L = h ? h.subredditInfo && h.subredditInfo.icon : N && N.icon.url, M = h ? h.subredditInfo && h.subredditInfo.displayText : N && (N.displayText || N.name), B = u ? u.flair.filter(_) : [], D = u ? u.score : 0, F = u ? u.numComments : 0, R = u && u.isSponsored, A = Object(C.a)(e).body, W = "linear-gradient(\n      ".concat(Object(n.j)(A, .2), ",\n      ").concat(Object(n.j)(A, .3), ",\n      ").concat(Object(n.j)(A, .4), ",\n      ").concat(Object(n.j)(A, .6), ",\n      ").concat(Object(n.j)(A, .8), ",\n      ").concat(A, "\n    )"), H = o.a.createElement("div", {
					className: Object(i.a)(S.a.trendingPost, {
						[S.a["m-background"]]: !!P
					})
				}, o.a.createElement(g.a, {
					to: T
				}, o.a.createElement("div", {
					className: Object(i.a)(S.a.backgroundWrapper, j.a.backgroundWrapper, t),
					style: {
						background: Object(O.g)(Object(C.a)(e).body, P || Object(C.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": W
					}
				}, R && o.a.createElement("div", {
					className: S.a.promoted
				}, o.a.createElement(f.c, null, "promoted")), o.a.createElement("div", {
					className: Object(i.a)(S.a.innerContainer, j.a.innerContainer, r),
					onClick: c,
					title: u ? u.title : ""
				}, o.a.createElement("h2", {
					className: u ? S.a.title : S.a.titleNoDescription
				}, e.title), u ? o.a.createElement("div", {
					className: Object(i.a)(S.a.description, s)
				}, B.length > 0 && o.a.createElement(m.a, {
					className: S.a.flair,
					titleFlair: B,
					nowrap: !0,
					post: u,
					showCategoryTag: !1
				}), u.title) : o.a.createElement("div", {
					className: S.a.spacer
				}), E && L && M && o.a.createElement(x.a, {
					className: S.a.relatedSubredditMetaData,
					iconClassName: S.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: o.a.createElement(p.a, {
						msgId: "search.subredditMetaData.andMore",
						replacements: {
							displayText: M
						}
					})
				}), !E && u && o.a.createElement("div", {
					className: S.a.metaLine
				}, w && M && o.a.createElement("span", {
					className: S.a.meta
				}, Object(y.b)(M)), o.a.createElement("span", {
					className: S.a.meta
				}, o.a.createElement(f.c, null, "".concat(Object(l.b)(D), " "), o.a.createElement(f.a, {
					count: D,
					name: "score",
					plural: "points",
					singular: "point"
				}))), o.a.createElement("span", {
					className: S.a.meta
				}, o.a.createElement(f.c, null, "".concat(Object(l.b)(F), " "), o.a.createElement(f.a, {
					count: F,
					name: "numComments",
					plural: "comments",
					singular: "comment"
				}))))))));
				return R ? o.a.createElement(b.a, {
					post: u,
					children: H
				}) : H
			})))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					className: t,
					exploreV2Variant: s,
					layoutBodyClassName: n,
					showCardView: i
				} = e, d = {
					[c.a["m-card"]]: i
				};
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, d, t)
				}, r.a.createElement(a.a, {
					className: s ? void 0 : c.a.layout,
					bodyClassName: Object(o.a)(c.a.layoutBody, d, n),
					exploreV2Variant: s,
					header: e.header,
					headerClassName: Object(o.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3_c5cqV3WsdQo95Ql4El73",
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = s("./src/reddit/components/Translated/index.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				m = s.n(l);
			const u = r.a.createElement(a.a, {
					className: m.a.duHeader
				}, r.a.createElement(c.a, {
					msgId: "discoveryUnits.trendingToday"
				})),
				p = Object(d.a)({
					isLoading: !0
				});
			t.a = e => r.a.createElement(i.a, {
				className: e.className,
				exploreV2Variant: e.exploreV2Variant,
				header: u,
				layoutBodyClassName: m.a.layoutBody,
				showCardView: e.showCardView,
				children: Array.from({
					length: e.numberOfItems || 6
				}).map(e => r.a.createElement("div", {
					className: m.a.post,
					key: "placeholder-post-".concat(e)
				}, r.a.createElement("div", {
					className: Object(o.a)(m.a.desc, m.a.one, p)
				}), r.a.createElement("div", {
					className: Object(o.a)(m.a.desc, m.a.two, p)
				}), r.a.createElement("div", {
					className: Object(o.a)(m.a.icon, p)
				}), r.a.createElement("div", {
					className: Object(o.a)(m.a.name, p)
				})))
			})
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/BannerAd/index.tsx"),
				d = s("./src/config.ts"),
				l = s("./node_modules/lodash/random.js"),
				m = s.n(l),
				u = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.div("BannerContainer", p.a),
				g = b.a.wrapped(e => r.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", p.a),
				x = [{
					img: "/img/house-ads/btc.png",
					href: "/r/btc"
				}, {
					img: "/img/house-ads/campfirecooking.png",
					href: "/r/campfirecooking"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/rubberducks.png",
					href: "/r/advertising"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/imaginarycolorscapes.png",
					href: "/r/imaginarycolorscapes"
				}, {
					img: "/img/house-ads/imaginarydragons.png",
					href: "/r/imaginarydragons"
				}, {
					img: "/img/house-ads/oldschoolcelebs.png",
					href: "/r/oldschoolcelebs"
				}];
			var y = () => {
					const e = m()(0, x.length - 1),
						{
							img: t,
							href: s
						} = x[e];
					return r.a.createElement(h, {
						className: "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, r.a.createElement("a", {
						href: d.a.redditUrl + s,
						target: "_blank"
					}, r.a.createElement(g, {
						src: d.a.assetPath + t
					})))
				},
				f = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/components/PostMedia/index.tsx"),
				O = s("./src/reddit/components/PostTitle/index.tsx"),
				C = s("./src/reddit/components/PostTopMeta/index.tsx"),
				E = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				j = s("./src/lib/getShortenedLink.ts"),
				w = s("./src/lib/opener/index.ts"),
				S = s("./src/reddit/actions/ads/index.ts"),
				_ = s("./src/reddit/components/PostContainer/index.tsx"),
				N = s("./src/reddit/constants/adEvents.ts"),
				P = s("./src/reddit/contexts/InsideOverlay.tsx"),
				k = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				I = s("./src/reddit/helpers/adCount/index.ts"),
				T = s("./src/reddit/helpers/pixels.ts"),
				L = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				M = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				B = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				D = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				F = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				R = s("./src/reddit/models/Theme/index.ts"),
				A = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				W = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/reddit/components/NativeBannerAd/index.m.less"),
				U = s.n(H);
			const V = b.a.wrapped(e => r.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", U.a);
			class G extends r.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(W.F)(e.media) || Object(W.C)(e.media) ? "" : e.media.content,
						{
							type: s
						} = e.media;
					if (!t || !s) return null;
					switch (s) {
						case f.eb.IMAGE:
							return r.a.createElement(V, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var K = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				q = s.n(K);
			const z = b.a.wrapped(C.d, "PostTopMeta", q.a),
				Q = b.a.div("BannerAdContainer", q.a),
				J = e => {
					let {
						children: t
					} = e;
					return r.a.createElement("div", null, t)
				},
				Y = b.a.div("PromotedPostContainer", q.a),
				Z = b.a.wrapped(D.a, "OutboundLinkIcon", q.a),
				X = b.a.div("SourceLinkWrapper", q.a),
				$ = b.a.div("TopLine", q.a),
				ee = b.a.wrapped(O.c, "PostTitle", q.a),
				te = b.a.div("PostMediaWrapper", q.a),
				se = b.a.div("BackgroundWrapper", q.a),
				ne = b.a.wrapped(_.a, "PostContainer", q.a),
				re = 640,
				oe = (e, t) => {
					Object(T.a)(t.events, N.a.Click, t), t.source ? t.source.outboundUrl ? Object(w.d)(t.source.outboundUrl, w.c.BLANK) : Object(w.d)(t.source.url, w.c.BLANK) : Object(w.d)(t.permalink, w.c.BLANK)
				},
				ae = e => Object(B.a)(e.title, 100),
				ie = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(M.a)(Object(L.a)(e), F.a.actionIcon, F.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				ce = e => ({
					background: Object(R.g)(Object(A.a)(e).body, null, null) || ""
				});
			class de extends r.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: s,
						isOverlay: n
					} = this.props;
					let o, a, c = {};
					return e.isBlank ? (o = J, a = null) : e.isMediaOnly ? (o = Q, c = {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, a = r.a.createElement(G, {
						post: e
					})) : (o = Y, a = r.a.createElement(se, {
						style: ce(this.props)
					}, r.a.createElement($, null, r.a.createElement(z, {
						tooltipType: n ? C.c.Lightbox : void 0,
						language: f.y,
						post: e,
						showTimestamp: !1
					})), r.a.createElement(ee, {
						post: e,
						size: O.b.Large,
						format: ae
					}), e.source && r.a.createElement(X, null, r.a.createElement(k.a, {
						href: e.source.url,
						isSponsored: !0,
						source: e.source
					}, Object(j.a)(e), r.a.createElement(Z, null))), r.a.createElement(te, null, e.media && r.a.createElement(v.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: re,
						shouldLoad: !0
					})))), r.a.createElement(o, c, r.a.createElement(ne, {
						className: t,
						isOverlay: n,
						post: e,
						onClick: oe,
						eventFactory: s,
						style: ie(this.props)
					}, a))
				}
			}
			var le = Object(o.b)(null, (e, t) => ({
					refreshSidebarPromotedPost: () => {
						const {
							placement: s,
							placementIndex: n,
							isOverlay: r
						} = t;
						e(Object(S.c)(Object(I.a)(s, !!r, n)))
					}
				}))(Object(P.b)(Object(E.a)(de))),
				me = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				ue = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				pe = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				be = s.n(pe);
			const he = Object(a.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(I.a)(s, r, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				ge = Object(o.b)(he),
				xe = b.a.wrapped(c.a, "BannerAd", be.a),
				ye = b.a.wrapped(ue.a, "ThemedWidget", be.a),
				fe = b.a.div("SidebarAdPlaceholder", be.a),
				ve = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				Oe = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(W.B)(e.media) && e.media.content)),
				Ce = e => !!e && e.isBlank;
			class Ee extends r.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: n,
						placementIndex: o,
						refreshKey: a,
						listingName: c,
						placement: d,
						sizes: l,
						position: m,
						redditStyle: u,
						forcePlaceholder: p,
						forceHouseAd: b,
						waitForProgrammatic: h
					} = this.props;
					return p || t || !Oe(s) && h ? r.a.createElement(me.a, null, r.a.createElement(ye, {
						className: e,
						contentOnly: !0,
						redditStyle: u
					}, r.a.createElement(fe, {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}))) : b ? r.a.createElement(me.a, null, r.a.createElement(ye, {
						className: e,
						contentOnly: !0,
						redditStyle: u
					}, r.a.createElement(y, null))) : Oe(s) ? r.a.createElement(me.a, null, r.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: c,
						placement: d,
						placementIndex: o
					})) : r.a.createElement(me.a, null, r.a.createElement(ye, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: u
					}, Ce(s) && r.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: c,
						placement: d,
						placementIndex: o
					}), r.a.createElement(xe, {
						id: ve(d, n, o),
						sizes: l,
						placement: d,
						listingName: c,
						refreshKey: a,
						position: m,
						dataBeforeContent: Object(i.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = ge(Ee)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const u = Object(a.t)();
			t.a = u(Object(o.b)((e, t) => {
				let {
					listingName: s,
					pageLayer: n
				} = t;
				const r = Object(i.b)(e, {
						listingName: s,
						pageLayer: n
					}),
					o = Object(c.x)(e),
					a = Object(i.e)(e);
				return {
					canShowAd: r && !o,
					forcePlaceholder: !Object(i.c)(e),
					isAdsDisabled: o,
					viewIsUnsafe: a
				}
			})(e => {
				var {
					canShowAd: t,
					isAdsDisabled: s,
					viewIsUnsafe: n,
					pageLayer: o
				} = e, a = m(e, ["canShowAd", "isAdsDisabled", "viewIsUnsafe", "pageLayer"]);
				return !s && t && o ? r.a.createElement(d.a, l({
					forceHouseAd: n
				}, a)) : null
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/take.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				h = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/SidebarExpandableList/index.m.less"),
				y = s.n(x),
				f = s("./src/lib/lessComponent.tsx");
			const v = 10,
				O = f.a.wrapped(u.n, "TertiaryButton", y.a);
			class C extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && s && s()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							language: s,
							onLoadMore: n,
							pending: r
						} = this.props, o = !e || t && n ? Object(d.a)(s, "sidebar.widgets.expandableList.viewMore") : Object(d.a)(s, "sidebar.widgets.expandableList.viewLess");
						return a.a.createElement(O, {
							onClick: this.onButtonClick
						}, r ? a.a.createElement(p.a, {
							sizePx: v
						}) : o)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: s,
						items: n,
						minimizedLength: o,
						renderItem: i,
						title: c
					} = this.props, {
						expanded: d
					} = this.state, l = n.length > o || t, u = (!l || d ? n : r()(n, o)).map(e => i({
						item: e
					}));
					return a.a.createElement(m.a, {
						className: e,
						headerButton: s,
						title: c
					}, u, a.a.createElement(b.a, null, a.a.createElement(h.a, null, l && this.renderToggleButton())))
				}
			}
			C.defaultProps = {
				minimizedLength: l.Db
			};
			const E = Object(c.c)({
				language: g.P
			});
			t.a = Object(i.b)(E)(C)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = o.a.a("Link", c.a);
			t.a = e => r.a.createElement(a.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: c.a.LinkContainer
			}, r.a.createElement("div", {
				className: c.a.Column
			}, r.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, d._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, d._("Reddit App", null, {
				hk: "1ehrjP"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, d._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, d._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, d._("Reddit gifts", null, {
				hk: "2XziRN"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, d._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, d._("Top Posts", null, {
				hk: "2NOEW2"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, d._("Topics", null, {
				hk: "349RFt"
			}))), r.a.createElement("div", {
				className: c.a.Column
			}, r.a.createElement(l, {
				href: "https://about.reddit.com"
			}, d._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, d._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, d._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, d._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, d._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, d._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, d._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, d._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, d._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: c.a.Copyright
			}, d._("Reddit Inc © {year}. All rights reserved", [d._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, s) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarPostList/ObservedPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r);
			const a = .99;
			class i extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= a && t(s)
					}
				}
				render() {
					return o.a.createElement(n.a, {
						threshold: a,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			t.a = i
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/isFakeSubreddit/index.ts"),
				d = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/name/index.ts"),
				u = s("./src/reddit/helpers/overlay/index.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/components/SidebarPostList/ObservedPost/index.tsx"),
				x = s("./src/lib/isUrl/index.ts"),
				y = s("./src/lib/prettyPrintNumber/index.ts"),
				f = s("./src/reddit/components/FlairWrapper/index.tsx"),
				v = s("./src/reddit/components/Thumbnail/index.tsx"),
				O = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				w = s.n(j);
			const S = e => e.type === O.f.Nsfw || e.type === O.f.Spoiler,
				_ = Object(a.c)({
					language: E.P,
					post: h.I,
					subredditOrProfile: h.U
				});
			class N extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && s(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: s,
						showSubredditName: n,
						subredditOrProfile: o
					} = this.props, a = {
						post: t
					}, c = Object(x.a)(Object(v.b)(a)), d = t.flair.filter(S);
					return r.a.createElement("div", {
						className: Object(i.a)(w.a.container, e, {
							[w.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: w.a.mainLine
					}, c && r.a.createElement("div", {
						className: w.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(v.a, a)), r.a.createElement("div", {
						className: Object(i.a)(w.a.title, !c && w.a.titleSingle),
						title: t.title
					}, d.length > 0 && r.a.createElement(f.a, {
						className: w.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), r.a.createElement("div", {
						className: w.a.metaLine
					}, n && !!o && r.a.createElement("span", {
						className: w.a.meta
					}, Object(C.e)(o) ? Object(m.c)(o.displayText || o.name) : Object(m.b)(o.displayText || o.name)), r.a.createElement("span", {
						className: w.a.meta
					}, "".concat(Object(y.b)(t.score), " "), r.a.createElement(p.a, {
						count: t.score,
						name: "score",
						plural: "points",
						singular: "point"
					})), r.a.createElement("span", {
						className: w.a.meta
					}, "".concat(Object(y.b)(t.numComments), " "), r.a.createElement(p.a, {
						count: t.numComments,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					}))))
				}
			}
			var P = Object(o.b)(_, e => ({
					openLightbox: t => e(Object(u.a)(t.permalink))
				}))(N),
				k = s("./src/reddit/components/SidebarPostList/index.m.less"),
				I = s.n(k);
			s.d(t, "b", (function() {
				return M
			}));
			const T = 10,
				L = 2,
				M = Object(a.a)(h.O, e => e.filter(e => !e.isSponsored)),
				B = Object(a.c)({
					posts: M
				}),
				D = Object(o.b)(B, e => ({
					openPost: t => e(Object(u.a)(t.permalink))
				}));
			class F extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: s
						} = this.props, [n] = s;
						n && (t(n), e && e(n.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || T, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((s, n) => (e = Math.ceil(n.posts.length / t), {
							chunkIdx: s.chunkIdx < e - 1 ? s.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: s,
							onPostVisible: n,
							redditStyle: o,
							smallPostClassName: a
						} = this.props;
						return r.a.createElement(g.a, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, r.a.createElement(P, {
							className: Object(i.a)(I.a.smallPost, a),
							containerOnClick: s,
							postId: e.id,
							redditStyle: o,
							showSubredditName: Object(c.a)(Object(m.f)(t)),
							thumbnailOnClick: s
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: s,
						moreButtonText: n,
						onPostVisible: o,
						posts: a,
						redditStyle: u,
						showMoreButton: h,
						topPostsVariant: x
					} = this.props, {
						chunkIdx: y
					} = this.state;
					if (0 === a.length) return null;
					const f = this.getVisiblePostsCounts(),
						v = Object(b.a)(x),
						O = Object(b.b)(x),
						C = v || O,
						E = a.slice(y * f, (y + 1) * f),
						[j, ...w] = E,
						S = C ? E.slice(0, L) : w.slice(0, L),
						_ = C ? E.slice(L) : w.slice(L);
					return r.a.createElement("div", {
						className: Object(i.a)(I.a.container, t, {
							[I.a.redditStyle]: u
						})
					}, !C && r.a.createElement(g.a, {
						onPostVisible: o,
						postId: j.id
					}, r.a.createElement(d.a, {
						backgroundWrapperClassName: I.a.largePostBackgroundWrapper,
						descriptionClassName: I.a.largePostDescription,
						innerContainerClassName: I.a.largePostInnerContainer,
						"data-redditstyle": u,
						onPostClick: this.openLargePost,
						postId: j.id,
						showSubredditMeta: !1,
						showSubredditName: Object(c.a)(Object(m.f)(s)),
						trendingPost: j
					})), S.map(this.renderSmallPost), e, _.map(this.renderSmallPost), h && r.a.createElement(l.n, {
						className: I.a.SeeMore,
						onClick: this.showMorePosts
					}, n || r.a.createElement(p.c, null, "See More")))
				}
			}
			t.a = D(F)
		},
		"./src/reddit/components/SidebarSectionHeader/index.m.less": function(e, t, s) {
			e.exports = {
				headerStyles: "ySyP3_8M4Wb9GDZa0U3rV",
				Component: "_1X2juHHajDXGs8oboBFTY1",
				component: "_1X2juHHajDXGs8oboBFTY1"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(m),
				p = e => i.a.createElement("div", {
					className: Object(n.a)(e.className, u.a.container),
					style: e.style
				}, i.a.createElement(d.f, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, i.a.createElement(l.c, null, "Back to top"))),
				b = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				y = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = s.n(y),
				v = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const E = c.e[1] + 24,
				j = h.g + 8 + 152 + 32 + 16,
				w = j + E + 8,
				S = v.a.div("Container", f.a),
				_ = v.a.wrapped(e => {
					var {
						className: t
					} = e, s = C(e, ["className"]);
					return i.a.createElement(p, O({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", f.a),
				N = e => {
					let {
						categoriesPlacementVariant: t,
						children: s,
						className: r,
						isSticky: o
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(r, {
							[f.a.StickyStyles]: o,
							[f.a.LargeOffset]: Object(x.f)(t)
						})
					}, s)
				};
			class P extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > w,
						shouldFooterSticky: this.windowHeight > j
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
					}, this.handleResize = o()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.F), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
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
					const {
						props: {
							adComponent: e,
							categoriesPlacementVariant: t,
							children: s,
							className: n,
							hideFooter: r,
							railsWidgetsVariant: o
						}
					} = this, a = this.state.isAdSticky && !(!e && !s);
					return i.a.createElement(S, {
						className: n,
						innerRef: this.setWrapperRef
					}, i.a.createElement(N, {
						categoriesPlacementVariant: t,
						isSticky: a || !!o
					}, e, s, !r && i.a.createElement(b.a, null)), !this.props.hideBackToTop && i.a.createElement(_, null))
				}
			}
			const k = Object(g.t)();
			t.a = k(P)
		},
		"./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				Pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				DropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				dropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				OverflowMenu: "KZF0GvnWopJYsNtVGODBn",
				overflowMenu: "KZF0GvnWopJYsNtVGODBn"
			}
		},
		"./src/reddit/components/SidebarSubredditChannels/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2sEbIFP3ssTnt1Fo23m26r",
				wrapper: "_2sEbIFP3ssTnt1Fo23m26r"
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, s) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/loadWithRetries/index.ts"),
				p = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/selectors/moderatorPermissions.ts"),
				y = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/userPrefs.ts"),
				v = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				O = s.n(v),
				C = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const E = m.a.div("BladeContainer", O.a),
				j = m.a.wrapped(g.a, "CloseIcon", O.a),
				w = m.a.div("LoadingTitleContainer", O.a),
				S = m.a.div("LoadingNavContainer", O.a),
				_ = m.a.div("ShortLoadingNav", O.a),
				N = m.a.wrapped(h.a, "ThemedChevron", O.a),
				P = e => {
					var t = C(e, []);
					return a.a.createElement(E, null, a.a.createElement(j, null), a.a.createElement(p.k, null, a.a.createElement(p.p, null, a.a.createElement(b.c, null, "Back to mod tools")), a.a.createElement(p.o, null, a.a.createElement(w, null, a.a.createElement("div", {
						className: Object(l.a)(O.a.LoadingTitle, t.isLoading && O.a.loading)
					})), a.a.createElement(S, null, a.a.createElement("div", {
						className: Object(l.a)(O.a.LoadingNav, t.isLoading && O.a.loading)
					}), a.a.createElement(N, null)), a.a.createElement(S, null, a.a.createElement(_, null), a.a.createElement(N, null)), a.a.createElement(S, null, a.a.createElement("div", {
						className: Object(l.a)(O.a.LoadingNav, t.isLoading && O.a.loading)
					}), a.a.createElement(N, null)), a.a.createElement(S, null, a.a.createElement(_, null), a.a.createElement(N, null)), a.a.createElement(S, null, a.a.createElement("div", {
						className: Object(l.a)(O.a.LoadingNav, t.isLoading && O.a.loading)
					}), a.a.createElement(N, null)))))
				},
				k = Object(d.a)({
					getComponent: () => Object(u.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
					ErrorComponent: () => a.a.createElement(P, {
						gradientType: "posts",
						isLoading: !1
					}),
					LoadingComponent: () => a.a.createElement(P, {
						gradientType: "posts",
						isLoading: !0
					})
				}),
				I = Object(c.c)({
					isEditing: y.j,
					isSubscriptionsPinned: f.b,
					moderatorPermissions: x.j
				});
			t.a = Object(i.b)(I)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? a.a.createElement("div", {
					className: Object(l.a)(O.a.Container, e.isSubscriptionsPinned && O.a.isSubscriptionPinned)
				}, e.children, a.a.createElement(k, {
					subredditId: e.subredditId
				})) : a.a.createElement(o.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
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
				return a
			})), s.d(t, "p", (function() {
				return i
			})), s.d(t, "n", (function() {
				return c
			})), s.d(t, "o", (function() {
				return d
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "j", (function() {
				return O
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = s.n(r);
			const a = n.a.section("FormPage", o.a),
				i = n.a.h1("HomePageTitle", o.a),
				c = n.a.button("HomePageBreadcrumb", o.a),
				d = n.a.div("HomePageGroup", o.a),
				l = n.a.h1("FormPageTitle", o.a),
				m = n.a.div("FormPageSection", o.a),
				u = n.a.div("FormGroup", o.a),
				p = n.a.h2("FormGroupTitle", o.a),
				b = n.a.div("FormElement", o.a),
				h = n.a.div("FormGroupDescription", o.a),
				g = n.a.div("FormItem", o.a),
				x = n.a.h3("FormElementTitle", o.a),
				y = n.a.div("FormElementDescription", o.a),
				f = n.a.div("FormElementError", o.a),
				v = n.a.div("FormElementSubGroup", o.a),
				O = n.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/SubredditChannelList/index.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				primaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				ModalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				modalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				ModalText: "_3HL4gEFxPNzkrPu94hblvT",
				modalText: "_3HL4gEFxPNzkrPu94hblvT",
				ItemLink: "vByM_anguY6xuCJEcusmJ",
				itemLink: "vByM_anguY6xuCJEcusmJ",
				Detail: "_1hkd6aDOGqeroDz5-yntAS",
				detail: "_1hkd6aDOGqeroDz5-yntAS",
				DescText: "_2Kwn1xR6xMSka95C9d72vF",
				descText: "_2Kwn1xR6xMSka95C9d72vF",
				Title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				Header: "tLKlMoU4-CQkARSxZg_yj",
				header: "tLKlMoU4-CQkARSxZg_yj",
				ChatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				chatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				PlanetIcon: "hsKCEb94KysCjbHbmbhzx",
				planetIcon: "hsKCEb94KysCjbHbmbhzx",
				Pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				Group: "dfN8kolCvNCsNzzf9W39l",
				group: "dfN8kolCvNCsNzzf9W39l",
				Key: "_2fgNZYjyiPjn_UlFwxeaVr",
				key: "_2fgNZYjyiPjn_UlFwxeaVr",
				SubredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				subredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				EditButton: "_21mAHvYUh9NgVPMyp45QZJ",
				editButton: "_21mAHvYUh9NgVPMyp45QZJ",
				ShowAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				showAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				ChannelName: "KIQLM-ci4WJOXrwjTsEzx",
				channelName: "KIQLM-ci4WJOXrwjTsEzx",
				HeaderText: "_3n6CTc1D2t_MfB0tNSgiAj",
				headerText: "_3n6CTc1D2t_MfB0tNSgiAj"
			}
		},
		"./src/reddit/components/SubredditChannelList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/orderBy.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/opener/index.ts"),
				m = s("./src/app/strings/index.ts"),
				u = s("./src/chat/helpers/urls/index.ts"),
				p = s("./src/reddit/actions/chat/subredditChannel.ts"),
				b = s("./src/reddit/actions/chat/toggle.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				g = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				x = s("./src/reddit/components/SubredditIcon/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/modals.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/helpers/trackers/chat.ts"),
				C = s("./src/reddit/i18n/components.tsx"),
				E = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				j = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				w = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				S = s("./src/reddit/models/SubredditChannel/index.ts"),
				_ = s("./src/reddit/selectors/chat.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/subredditChannel.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/components/SubredditChannelList/index.m.less"),
				T = s.n(I);
			s.d(t, "a", (function() {
				return Z
			}));
			const L = d.a.wrapped(g.f, "ModalFormItem", T.a),
				M = d.a.wrapped(v.f, "PrimaryButton", T.a),
				B = d.a.wrapped(g.m, "ModalText", T.a),
				D = d.a.a("ItemLink", T.a),
				F = d.a.p("Detail", T.a),
				R = d.a.p("DescText", T.a),
				A = d.a.div("Title", T.a),
				W = d.a.div("Header", T.a),
				H = d.a.wrapped(j.a, "ChatIcon", T.a),
				U = d.a.wrapped(w.a, "PlanetIcon", T.a),
				V = d.a.wrapped(E.a, "Pencil", T.a),
				G = d.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("svg", {
						className: t,
						viewBox: "0 0 16 16",
						xmlns: "http://www.w3.org/2000/svg"
					}, a.a.createElement("g", {
						transform: "translate(-26.000000, -37.000000)"
					}, a.a.createElement("path", {
						d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
					})))
				}, "Group", T.a),
				K = d.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("svg", {
						className: t,
						viewBox: "0 0 16 16",
						xmlns: "http://www.w3.org/2000/svg"
					}, a.a.createElement("path", {
						d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
					}))
				}, "Key", T.a),
				q = d.a.wrapped(x.b, "SubredditIcon", T.a),
				z = d.a.button("EditButton", T.a),
				Q = d.a.button("ShowAllLink", T.a),
				J = d.a.span("ChannelName", T.a),
				Y = d.a.div("HeaderText", T.a);
			var Z;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Widget = 1] = "Widget"
			}(Z || (Z = {}));
			const X = Object(c.c)({
					isCollectionReady: P.e,
					isModerator: _.e,
					language: k.P,
					selectedSubreddit: N.S,
					shouldRequestCollection: P.f,
					subredditChannels: P.a
				}),
				$ = Object(i.b)(X, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						toggleModal: () => e(Object(h.i)(f.a.MANAGE_SUBREDDIT_CHAT)),
						toggleCreateModal: () => e(Object(h.i)(f.a.CREATE_SUBREDDIT_CHAT)),
						toggleEditModal: () => e(Object(h.i)(f.a.EDIT_SUBREDDIT_CHAT)),
						fetchSubredditChannels: t => e(Object(p.l)(t)),
						onChatLinkClick: (t, s) => e(Object(b.b)(t, s)),
						onSelectChannel: t => e(Object(p.m)({
							channelId: t
						}))
					}
				});
			class ee extends a.a.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					this.fetchChannelList()
				}
				fetchChannelList() {
					this.props.shouldRequestCollection && this.props.fetchSubredditChannels(this.props.selectedSubreddit.id)
				}
				getDisplayChannelList() {
					return this.props.subredditChannels && this.props.maxChannels ? this.props.subredditChannels.slice(0, this.props.maxChannels) : this.props.subredditChannels || []
				}
				displayShowAllLink() {
					return !!(this.props.maxChannels && this.props.subredditChannels && this.props.maxChannels < this.props.subredditChannels.length)
				}
				displayChannelsList() {
					const {
						props: {
							maxChannels: e,
							subredditChannels: t
						}
					} = this;
					if (t) {
						const s = r()(t, ["name"]);
						return e ? s.slice(0, e) : s
					}
					return []
				}
				onItemClick(e) {
					const {
						channelId: t
					} = e, {
						selectedSubreddit: s,
						onChatLinkClick: n
					} = this.props;
					n(t, s.name), this.trackItemClick(e)
				}
				trackItemClick(e) {
					const {
						Joined: t
					} = S.a, {
						channelId: s,
						channelState: n
					} = e, {
						Widget: r,
						Modal: o
					} = Z, {
						parentContext: a,
						sendEvent: i
					} = this.props;
					return a === r && n === t ? i(Object(O.c)(s)) : a === r ? i(Object(O.e)(s)) : a === o && n === t ? i(Object(O.a)(s)) : a === o ? i(Object(O.b)(s)) : void 0
				}
				onShowAllClick() {
					const {
						sendEvent: e,
						toggleModal: t
					} = this.props;
					t && (t(), e(Object(O.d)()))
				}
				getLinkURL(e) {
					const {
						selectedSubreddit: t
					} = this.props;
					return Object(u.channelUrl)(e.channelId, t.name)
				}
				render() {
					const {
						props: {
							className: e,
							isCollectionReady: t,
							isModerator: s,
							language: n,
							onAddChannel: r,
							toggleEditModal: o,
							selectedSubreddit: i,
							onSelectChannel: c,
							toggleCreateModal: d
						}
					} = this;
					if (!t) return null;
					const u = this.displayChannelsList();
					return a.a.createElement("div", {
						className: e
					}, u.length ? a.a.createElement(L, null, u.map((e, t) => a.a.createElement(D, {
						key: "item-link-".concat(t),
						href: this.getLinkURL(e),
						target: l.c.BLANK,
						rel: l.b,
						onClick: t => {
							this.onItemClick(e), t.stopPropagation(), t.preventDefault()
						}
					}, a.a.createElement(A, {
						key: "item-link-title-".concat(t)
					}, a.a.createElement(H, {
						key: "item-link-icon-".concat(t)
					}), i.icon.url ? a.a.createElement(q, {
						key: "subreddit-icon-".concat(t),
						iconUrl: i.icon.url
					}) : a.a.createElement(U, {
						key: "planet-".concat(t),
						isSmall: !0
					}), a.a.createElement(W, {
						key: "item-header-".concat(t)
					}, a.a.createElement(Y, {
						key: "item-header-text-".concat(t)
					}, a.a.createElement(F, {
						key: "item-detail-".concat(t)
					}, i.name, Object(m.c)(n, "listings.channelMembers", e.membersCount)), a.a.createElement(J, {
						key: "channel-name-".concat(t)
					}, e.type === S.c.Public ? a.a.createElement(G, null) : a.a.createElement(K, null), e.name)), s && a.a.createElement(z, {
						key: "button-".concat(t),
						onClick: t => {
							c(e.channelId), o(), t.stopPropagation(), t.preventDefault(), this.props.sendEvent(Object(O.l)())
						}
					}, a.a.createElement(V, null)))), e.description && a.a.createElement(R, {
						key: "desc-text-".concat(t)
					}, e.description))), this.displayShowAllLink() && a.a.createElement(Q, {
						type: "button",
						onClick: () => this.onShowAllClick()
					}, a.a.createElement(C.c, null, "See more"))) : s ? a.a.createElement(L, null, a.a.createElement(B, null, a.a.createElement(C.c, null, "Create your first room and get your community chatting in real time.")), a.a.createElement(M, {
						onClick: r || d
					}, a.a.createElement(C.c, null, "+ Add room"))) : a.a.createElement(L, null, a.a.createElement(B, null, a.a.createElement(C.c, null, "There are no joined chatrooms yet"))))
				}
			}
			t.b = $(Object(y.b)(ee))
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/ContentTooltip/index.tsx"),
				m = s("./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/tooltips.ts"),
				b = s("./src/reddit/controls/ImageInput/index.tsx"),
				h = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				x = s("./src/reddit/helpers/localStorage/index.ts"),
				y = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				f = s("./src/reddit/i18n/components.tsx"),
				v = s("./src/reddit/i18n/utils.ts"),
				O = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				C = e => r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 17",
					version: "1.1"
				}, r.a.createElement("path", {
					d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
					id: "a"
				})),
				E = s("./src/reddit/models/ApiRequestState/index.ts"),
				j = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				w = s("./src/reddit/components/SubredditIcon/index.m.less"),
				S = s.n(w);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var N = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					this.setState({
						tooltipDismissed: Object(x.l)(this.props.subredditId)
					})
				}
				render() {
					const e = this.props,
						{
							subredditId: t,
							className: s,
							inTopBar: n,
							tooltipDisabled: o
						} = e,
						a = N(e, ["subredditId", "className", "inTopBar", "tooltipDisabled"]),
						c = [s, S.a.inTopBar, S.a.iconContainer];
					return n ? c.push(S.a.emptyEditableIconInTopBar) : c.push(S.a.editableIcon, S.a.emptyEditableIcon), r.a.createElement("span", _({}, a, {
						id: this.props.tooltipDisabled ? void 0 : p.a,
						className: Object(i.a)(...c)
					}), n ? r.a.createElement(C, {
						className: S.a.emptyUploadButton
					}) : r.a.createElement(O.a, {
						className: S.a.emptyPlusButton
					}), this.props.children, !this.state.tooltipDismissed && !this.props.tooltipDisabled && r.a.createElement(l.a, {
						className: S.a.tooltip,
						tooltipId: p.a,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, r.a.createElement(m.a, {
						includeIcon: !n,
						subredditId: t
					})))
				}
			}
			const k = e => {
					const {
						iconColor: t,
						className: s,
						alt: n,
						role: o,
						onClick: a,
						inTopBar: c,
						src: d
					} = e;
					return r.a.createElement("span", {
						className: S.a.iconContainer
					}, r.a.createElement("img", {
						onClick: a,
						role: o,
						alt: n,
						src: d,
						className: Object(i.a)(s, {
							[S.a.editableIcon]: !c
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				I = Object(a.c)({
					isLoading: j.b
				});
			class T extends r.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(y.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => r.a.createElement(b.a, {
						className: S.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(E.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				componentDidMount() {
					this.props.inTopBar || this.props.onShowTooltip()
				}
				renderEditButton() {
					const {
						url: e
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? r.a.createElement("span", {
						className: S.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? r.a.createElement(f.c, null, "Update icon") : r.a.createElement(f.c, null, "Add icon")) : null
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
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = r.a.createElement(r.a.Fragment, null, r.a.createElement(k, _({
						src: e,
						alt: Object(v.c)("Subreddit icon"),
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, r.a.createElement(P, _({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : r.a.createElement(r.a.Fragment, null, r.a.createElement(P, _({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [S.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(S.a.loadingIconInTopBar), t = 32), r.a.createElement(h.a, {
							className: Object(i.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? r.a.createElement("div", {
						className: S.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(o.b)(I, (e, t) => ({
				onFileSelected: (s, n) => {
					e(Object(c.a)(t.subreddit, s, n))
				},
				onShowTooltip: () => {
					e(Object(d.f)({
						tooltipId: p.a
					}))
				}
			}))(Object(u.b)(T))
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, s) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/selectors/widgets.ts"),
				u = s("./src/reddit/actions/subreddit.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				b = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				h = s("./src/lib/classNames/index.ts"),
				g = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = s("./src/reddit/components/SubredditNav/index.m.less"),
				y = s.n(x);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const O = (e, t, s) => Object(h.a)(e, {
					[y.a.mActive]: t
				}, {
					[y.a.topBannerVariant]: s
				}),
				C = e => {
					var {
						children: t,
						isActive: s,
						isTopBannerVariant: n
					} = e, o = v(e, ["children", "isActive", "isTopBannerVariant"]);
					return r.a.createElement("div", f({
						className: O(y.a.subNavTitle, s, n)
					}, o), r.a.createElement("span", null, t), r.a.createElement(g.b, {
						className: y.a.navDropdownIcon
					}))
				},
				E = e => {
					var {
						className: t,
						isActive: s,
						to: n,
						isTopBannerVariant: o
					} = e, a = v(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const i = O(y.a.navLink, s, o);
					return n ? r.a.createElement(b.a, f({
						className: i,
						to: n
					}, a)) : r.a.createElement("a", f({
						className: i
					}, a))
				},
				j = e => {
					var {
						className: t,
						isActive: s
					} = e, n = v(e, ["className", "isActive"]);
					return r.a.createElement(b.a, f({
						className: O(y.a.navLink, s)
					}, n))
				},
				w = e => {
					var {
						className: t,
						isActive: s
					} = e, n = v(e, ["className", "isActive"]);
					return r.a.createElement("a", f({
						className: O(y.a.subNavLink, s)
					}, n))
				},
				S = e => {
					var {
						className: t
					} = e, s = v(e, ["className"]);
					return r.a.createElement("div", f({
						className: Object(h.a)(y.a.subNavContainer, t)
					}, s))
				},
				_ = e => {
					var {
						className: t,
						isOpen: s
					} = e, n = v(e, ["className", "isOpen"]);
					return r.a.createElement("div", f({
						className: Object(h.a)(y.a.subNavList, t, {
							[y.a.mIsOpen]: s
						})
					}, n))
				};
			const N = Object(a.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var P = Object(c.t)()(Object(o.b)(N, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: s
					} = e;
					return s ? r.a.createElement(j, {
						className: y.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(c.F)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, r.a.createElement(p.c, null, "Polls")) : null
				}))),
				k = s("./src/lib/linkMatchers/index.ts");
			class I extends r.a.Component {
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
					return r.a.createElement(S, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, r.a.createElement(C, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), r.a.createElement(_, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var T = I;
			const L = e => {
				const t = e.url && Object(k.g)(k.e, e.url);
				return t ? t.url : e.url
			};
			var M = e => e.menuItem.url ? r.a.createElement(E, {
					href: L(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(T, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(w, {
					key: "".concat(e.text, "-").concat(L(e)),
					role: "listitem",
					href: L(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				B = s("./src/lib/constants/index.ts");
			const D = Object(c.t)(),
				F = [B.yb.SUBREDDIT, B.yb.COMMENTS, B.yb.COLLECTION_COMMENTS],
				R = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && F.indexOf(t.pageLayer.meta.name) > -1
				});
			var A = D(Object(o.b)(R, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: s,
						isPostsRoute: n,
						isTopBannerVariant: o,
						onTurnOffMetaFilter: a
					} = e, i = n && !s;
					return r.a.createElement(E, {
						to: t,
						isActive: i,
						isTopBannerVariant: o,
						onClick: e => {
							s && (e.preventDefault(), a())
						}
					}, r.a.createElement(p.c, null, "Posts"))
				}))),
				W = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				H = s("./src/higherOrderComponents/makeAsync.tsx");
			var U = Object(H.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				V = s("./src/reddit/constants/postLayout.ts"),
				G = s("./src/reddit/constants/screenWidths.ts"),
				K = s("./src/reddit/models/Theme/index.ts"),
				q = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				z = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const Q = Object(W.a)(e => {
				var {
					className: t,
					children: s,
					isTopBannerVariant: n
				} = e, o = z(e, ["className", "children", "isTopBannerVariant"]);
				const a = Object(q.a)(o);
				return r.a.createElement("div", {
					className: Object(h.a)(y.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object(K.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var J = e => r.a.createElement(Q, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: y.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === V.g.Large ? "".concat(e.maxWidth || G.a, "px") : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement(U, null))),
				Y = s("./src/reddit/components/Translated/index.tsx"),
				Z = s("./src/reddit/constants/wiki.ts"),
				X = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			var $ = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, o = !!n && !!n.meta && n.meta.name === B.yb.SUBREDDIT_WIKI, a = "wiki/".concat(Z.i), i = t.endsWith("/") ? t + a : "".concat(t, "/").concat(a);
				return r.a.createElement(E, {
					isActive: o,
					isTopBannerVariant: s,
					to: i,
					onClick: () => e.sendEvent(Object(X.g)())
				}, r.a.createElement(Y.a, {
					msgId: "structuredStyles.forms.menuLinks.wikiHomeLinkLabel"
				}))
			};
			const ee = Object(d.a)("spPolls", P),
				te = Object(c.t)(),
				se = Object(a.c)({
					language: l.P,
					layout: c.M,
					widget: m.f
				}),
				ne = Object(o.b)(se);
			t.a = te(ne(Object(i.b)(e => r.a.createElement(J, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(A, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), r.a.createElement(ee, {
				subredditId: e.subredditId
			})), e.widget && r.a.createElement(r.a.Fragment, null, e.widget.showWiki && r.a.createElement($, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => r.a.createElement(M, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: s,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Economics/CommunityTipJar/async.tsx"),
				u = s("./src/higherOrderComponents/makeAsync.tsx"),
				p = s("./src/reddit/featureFlags/component.tsx");
			const b = Object(u.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("EconomicsSubredditPremiumSidebarCards")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			var h = Object(p.a)("spPremium", b),
				g = s("./src/reddit/components/Governance/CommunityCard/index.tsx"),
				x = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				y = s("./src/reddit/components/IdCard/async.tsx"),
				f = s("./src/lib/isFakeSubreddit/index.ts"),
				v = s("./src/reddit/components/IdCard/helpers.ts"),
				O = e => !Object(f.a)(e) || Object(v.c)(e) || Object(v.d)(e) || Object(v.e)(e),
				C = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				j = s("./src/reddit/components/SidebarContainer/index.tsx"),
				w = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				S = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				_ = s("./src/lib/classNames/index.ts"),
				N = s("./src/app/strings/index.ts"),
				P = s("./src/higherOrderComponents/asTooltip.tsx"),
				k = s("./src/reddit/actions/tooltip.ts"),
				I = s("./src/reddit/i18n/utils.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				L = s("./src/reddit/constants/modals.ts"),
				M = s("./src/reddit/controls/Dropdown/index.tsx"),
				B = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				D = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				F = s("./src/reddit/selectors/moderatorPermissions.ts"),
				R = s("./src/reddit/selectors/tooltip.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less"),
				H = s.n(W);
			const U = l.a.wrapped(M.a, "_Dropdown", H.a),
				V = l.a.wrapped(D.a, "Pencil", H.a),
				G = l.a.a("DropdownRow", H.a),
				K = Object(P.a)(U),
				q = e => "SubredditChannels--Menu--".concat(e),
				z = Object(c.c)({
					isModerator: F.g,
					language: A.P,
					isDropdownOpen: (e, t) => Object(R.b)(q(t.subredditId))(e)
				}),
				Q = l.a.wrapped(e => {
					const {
						className: t,
						isModerator: s,
						language: n,
						onOpenDropdown: r,
						isDropdownOpen: o,
						toggleModal: i
					} = e, c = q(e.subredditId);
					return a.a.createElement("button", {
						"aria-expanded": o,
						"aria-haspopup": !0,
						"aria-label": Object(I.c)("Chat menu"),
						className: Object(_.a)(H.a.top, t),
						id: c,
						onClick: () => r(c)
					}, a.a.createElement(B.a, null), a.a.createElement(K, {
						isOpen: o,
						tooltipId: c,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, a.a.createElement(G, {
						onClick: i
					}, s ? Object(N.a)(n, "subredditModeration.chat.subredditWidget.menu.manageRooms") : Object(N.a)(n, "subredditModeration.chat.subredditWidget.menu.viewRooms"), a.a.createElement(V, null))))
				}, "OverflowMenu", H.a);
			var J = Object(i.b)(z, e => ({
					onOpenDropdown: t => e(Object(k.g)({
						tooltipId: t
					})),
					toggleModal: () => e(Object(T.i)(L.a.MANAGE_SUBREDDIT_CHAT))
				}))(Q),
				Y = s("./src/reddit/components/SubredditChannelList/index.tsx"),
				Z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				X = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				$ = s("./src/reddit/helpers/trackers/chat.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/subredditChannel.ts"),
				se = s("./src/reddit/components/SidebarSubredditChannels/index.m.less"),
				ne = s.n(se);
			const re = l.a.div("Wrapper", ne.a),
				oe = Object(c.c)({
					isCollectionReady: te.e,
					isModerator: F.g,
					isWhitelistedSubreddit: ee.e,
					shouldRequestCollection: te.f,
					subredditChannels: te.a
				});
			let ae;
			class ie extends a.a.Component {
				constructor(e) {
					super(e)
				}
				shouldComponentUpdate(e, t) {
					return this.props.isCollectionReady !== e.isCollectionReady || this.props.isModerator !== e.isModerator || this.props.isWhitelistedSubreddit !== e.isWhitelistedSubreddit || this.props.shouldRequestCollection !== e.shouldRequestCollection || this.props.subredditChannels !== e.subredditChannels
				}
				trackViewEvent() {
					this.props.subredditId !== ae && (ae = this.props.subredditId, this.props.sendEvent(Object($.m)()))
				}
				isEnabled() {
					const {
						isModerator: e,
						isCollectionReady: t,
						isWhitelistedSubreddit: s,
						subredditChannels: n
					} = this.props, r = n && n.length;
					return !(!t || !s || !r && !e)
				}
				render() {
					const {
						subredditId: e,
						shouldRequestCollection: t
					} = this.props, s = a.a.createElement(Y.b, {
						maxChannels: 3,
						parentContext: Y.a.Widget,
						subredditId: e
					});
					return t ? s : this.isEnabled() ? (this.trackViewEvent(), a.a.createElement(w.a, null, a.a.createElement(X.a, {
						className: this.props.className,
						title: Object(I.c)("Chat rooms"),
						headerButton: a.a.createElement(J, {
							subredditId: e
						})
					}, a.a.createElement(re, null, s)))) : null
				}
			}
			var ce = Object(i.b)(oe)(Object(Z.b)(ie)),
				de = s("./src/lib/makeListingKey/index.ts"),
				le = s("./src/reddit/actions/subreddit.ts"),
				me = s("./src/reddit/components/SidebarPostList/index.tsx"),
				ue = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				pe = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				be = s("./src/reddit/selectors/discoveryUnit.ts"),
				he = s("./src/reddit/selectors/posts.ts"),
				ge = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				xe = s.n(ge);
			const ye = 10,
				fe = Object(c.a)((e, t) => t.subredditName, e => Object(de.a)(e, d.N.TOP, {
					t: d.Pb.WEEK
				})),
				ve = Object(c.c)({
					discoveryUnit: e => Object(be.f)(e, {
						unitName: pe.r
					}),
					listingKey: fe,
					posts: (e, t) => {
						const s = fe(e, t);
						return Object(he.O)(e, {
							listingKey: s
						})
					},
					subreddit: ee.B
				});
			class Oe extends a.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(ue.g)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(ue.x)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(ue.C)(t, e, void 0, s))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: s,
						loadMorePosts: n,
						posts: r,
						subredditName: o,
						topPostsVariant: i
					} = this.props;
					if (0 === r.length) return null;
					const c = o,
						d = r.length > ye;
					return a.a.createElement(X.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: Object(I.c)("Top posts this week")
					}, a.a.createElement(me.a, {
						listingKey: s,
						listingName: c,
						onShowMoreClick: n,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: xe.a.smallPost,
						showMoreButton: d,
						topPostsVariant: i
					}, a.a.createElement("div", null, e)))
				}
			}
			var Ce = Object(i.b)(ve, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						loadMorePosts: () => e(Object(le.r)({
							sort: d.N.TOP,
							subredditName: s,
							t: d.Pb.WEEK
						}))
					}
				})(Object(Z.b)(Oe)),
				Ee = s("./src/config.ts"),
				je = s("./src/lib/localStorageAvailable/index.ts"),
				we = s("./src/higherOrderComponents/asModal/index.tsx"),
				Se = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_e = s("./src/reddit/components/Translated/index.tsx"),
				Ne = s("./src/reddit/controls/TextButton/index.tsx"),
				Pe = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			class ke extends a.a.Component {
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement(Se.c, null, a.a.createElement(Se.g, null, a.a.createElement(Pe.a, null, a.a.createElement(Se.n, null, a.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.modal.title"
					})), a.a.createElement(Ne.a, {
						onClick: e.toggleModal
					}, a.a.createElement(Se.b, null)))), a.a.createElement(Se.j, null, a.a.createElement(Se.m, null, a.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.modal.text"
					}))), a.a.createElement(Se.e, null, a.a.createElement(Se.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, a.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.modal.cancel"
					})), a.a.createElement(Se.o, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, a.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.modal.confirm"
					}))))
				}
			}
			var Ie = Object(we.a)(ke),
				Te = s("./src/reddit/components/IdCard/Banner.tsx"),
				Le = s("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Me = s("./src/reddit/constants/blade.ts"),
				Be = s("./src/reddit/controls/Button/index.tsx"),
				De = s("./src/reddit/controls/InternalLink/index.tsx"),
				Fe = s("./src/reddit/helpers/localStorage/index.ts"),
				Re = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				Ae = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				We = s("./src/reddit/icons/svgs/Close/index.tsx"),
				He = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Ue = s("./src/reddit/selectors/activeModalId.ts"),
				Ve = s("./src/reddit/selectors/structuredStyles.ts"),
				Ge = s("./src/reddit/components/IdCard/index.m.less"),
				Ke = s.n(Ge),
				qe = s("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				ze = s.n(qe);
			const {
				fbt: Qe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Je = "mod_onboarding_modal", Ye = "mod_onboarding_widget", Ze = Object(c.a)(Ue.a, (e, t) => Object(F.a)(He.c.config)(e, {
				subredditId: t.subredditId
			}), (e, t) => Object(Ve.l)(e, {
				subredditId: t.subredditId
			}), (e, t, s) => ({
				activeModalId: e,
				hasModeratorPermissions: t,
				modHasEditedBanner: !s || !!(s.bannerBackgroundImage || s.bannerHeight || s.bannerPositionedImage || s.bannerBackgroundColor),
				modHasEditedColors: !s || !!(s.primaryColor || s.highlightColor || s.backgroundColor || s.backgroundImage),
				modHasEditedIcon: !s || (!!s.communityIcon || !!s.bannerShowCommunityIcon)
			}));
			class Xe extends a.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(Fe.S)(Ye, !0, this.props.subredditId), this.props.sendEvent(Object(Re.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(Re.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(Re.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(Re.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(Re.d)("styling_generic_link"))
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
						modHasEditedColors: s,
						modHasEditedIcon: n,
						subredditId: r
					} = this.props, o = e && !(t && s && n) && (!Object(je.a)() || !Object(Fe.q)(Ye, r));
					o !== this.state.visible && (this.setState({
						visible: o
					}), o && this.props.sendEvent(Object(Re.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						modHasEditedBanner: t,
						modHasEditedColors: s,
						modHasEditedIcon: n,
						subredditName: r,
						toggleCloseMenuModal: o
					} = this.props;
					return this.state.visible ? a.a.createElement(X.a, {
						className: Object(_.a)(ze.a.container, this.props.className)
					}, a.a.createElement(Te.a, {
						bannerBackgroundImage: "".concat(Ee.a.assetPath, "/img/id-cards/mod-onboarding@2x.png")
					}), a.a.createElement(We.a, {
						className: ze.a.closeIcon,
						onClick: o
					}), Object(Le.a)({
						titleText: a.a.createElement(_e.a, {
							msgId: "sidebar.moderatorOnboarding.title"
						}),
						snooBackground: Object(v.b)("url('".concat(Ee.a.assetPath, "/img/id-cards/snoo-artist@2x.png')"))
					}), a.a.createElement("div", {
						className: Object(_.a)(Ke.a.Description, ze.a.description)
					}, Qe._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview}. Here are some great ways to get started.", [Qe._param("=Customize Appearance Overview", a.a.createElement("a", {
						href: Me.e.exportImport,
						className: ze.a.modHelpLink,
						target: "_blank"
					}, Qe._("Customize Appearance Overview", null, {
						hk: "2qylj9"
					})))], {
						hk: "2BIfV4"
					})), a.a.createElement(De.a, {
						to: "/r/".concat(r, "?styling=true&route=").concat(Me.c.NameAndIcon),
						className: ze.a.link,
						onClick: this.customizeIcon
					}, n ? a.a.createElement(Ae.a, {
						className: ze.a.checked
					}) : a.a.createElement(Ae.a, {
						className: ze.a.unchecked
					}), a.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.addCommunityIcon"
					})), a.a.createElement(De.a, {
						to: "/r/".concat(r, "?styling=true&route=").concat(Me.c.Banner),
						className: ze.a.link,
						onClick: this.customizeBannerImage
					}, t ? a.a.createElement(Ae.a, {
						className: ze.a.checked
					}) : a.a.createElement(Ae.a, {
						className: ze.a.unchecked
					}), a.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.customizeHeader"
					})), a.a.createElement(De.a, {
						to: "/r/".concat(r, "?styling=true&route=").concat(Me.c.Global),
						className: ze.a.link,
						onClick: this.customizeThemeColors
					}, s ? a.a.createElement(Ae.a, {
						className: ze.a.checked
					}) : a.a.createElement(Ae.a, {
						className: ze.a.unchecked
					}), a.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.customizeColors"
					})), a.a.createElement(Be.k, {
						to: "/r/".concat(r, "?styling=true"),
						className: ze.a.button,
						onClick: this.customizeAppearance
					}, a.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.customizeAppearance"
					})), a.a.createElement("div", {
						className: ze.a.subtext
					}, a.a.createElement(_e.a, {
						msgId: "sidebar.moderatorOnboarding.onlyModerators"
					})), e === Je && a.a.createElement(Ie, {
						withOverlay: !0,
						toggleModal: o,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var $e = Object(i.b)(Ze, (e, t) => {
					let {
						subredditId: s,
						subredditName: n
					} = t;
					return {
						toggleCloseMenuModal: () => e(Object(T.i)(Je))
					}
				})(Object(Z.b)(Xe)),
				et = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				tt = s("./src/reddit/featureFlags/index.ts"),
				st = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				nt = s("./src/reddit/models/Widgets/index.ts"),
				rt = s("./src/reddit/selectors/communityFlairs.ts"),
				ot = s("./src/reddit/selectors/experiments/topPosts.ts"),
				at = s("./src/reddit/selectors/listings.ts"),
				it = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				ct = s.n(it);
			const dt = 250,
				lt = 270,
				mt = l.a.wrapped(j.a, "SidebarContainer", ct.a),
				ut = Object(c.c)({
					apiError: at.c,
					apiPending: at.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(rt.b)(e, s)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(rt.c)(e, s)
					},
					language: A.P,
					showGovernance: tt.d.spPoints,
					showLeaderboard: tt.d.spLeaderboard,
					widgets: ee.u
				}),
				pt = Object(i.b)(ut);
			class bt extends o.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const s = this.getRelatedCommunitiesWidgetData();
						return s ? {
							id: "related-communities-widget",
							kind: "community-list",
							shortName: Object(I.c)("Related Communities"),
							data: s
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys) return Object.assign({}, this.getPostFlairWidget(), {
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: nt.d.Cloud,
							shortName: Object(I.c)("Filter by flair"),
							templates: this.props.communityFlairModels
						})
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
					} = this.props, s = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets) || s
				}
				render() {
					const {
						className: e,
						language: t,
						listingName: s,
						showGovernance: n,
						showLeaderboard: r,
						subredditId: o,
						subredditName: i,
						topPostsVariant: c
					} = this.props;
					let l = 0;
					const u = Object(ot.a)(c),
						p = Object(ot.b)(c),
						b = Object(ot.c)(c),
						f = u || p,
						v = this.getCommunityWidgets(),
						j = this.makeFlairFilterWidget(),
						_ = this.makeRelatedCommunitiesWidget(u, p),
						N = !u,
						P = p,
						k = a.a.createElement(E.a, {
							placement: d.c.ABOVE_THE_FOLD,
							listingName: s,
							placementIndex: l++,
							position: st.a.FIRST,
							sizes: d.h
						});
					return a.a.createElement(mt, {
						className: e
					}, O(s) && a.a.createElement(y.a, {
						listingName: s
					}), a.a.createElement(h, {
						cardClassName: ct.a.card,
						subredditId: o
					}), f && a.a.createElement(w.a, null, a.a.createElement(Ce, {
						subredditName: i,
						topPostsVariant: c
					}, a.a.createElement("div", {
						className: ct.a.inFeedAd
					}, k))), f && _ && a.a.createElement(w.a, null, a.a.createElement(et.a, {
						subredditName: i,
						truncateThreshold: lt,
						widget: _
					})), P && v.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return a.a.createElement(w.a, {
							key: "widgetSpacer".concat(t)
						}, a.a.createElement(et.a, {
							subredditName: i,
							truncateThreshold: dt,
							widget: e
						}))
					}), a.a.createElement(m.a, {
						className: ct.a.card,
						subredditId: o
					}), a.a.createElement($e, {
						language: t,
						subredditId: o,
						subredditName: i
					}), n && a.a.createElement(g.a, {
						className: ct.a.card,
						subredditId: o
					}), j && a.a.createElement(w.a, null, a.a.createElement(et.a, {
						subredditName: i,
						widget: j
					})), r && a.a.createElement(x.a, {
						className: ct.a.card,
						subredditId: o,
						uniqueId: o
					}), a.a.createElement(C.g, {
						subredditId: o
					}), !f && k, N && !P && v.map((e, t) => {
						const s = "community-list" === e.kind;
						return a.a.createElement(w.a, {
							key: "widgetSpacer".concat(t)
						}, a.a.createElement(et.a, {
							subredditName: i,
							truncateThreshold: b && s ? lt : b ? dt : void 0,
							widget: e
						}))
					}), a.a.createElement(ce, {
						subredditId: o
					}), a.a.createElement(S.a, {
						adComponent: a.a.createElement(E.a, {
							placement: d.c.BELOW_THE_FOLD,
							listingName: s,
							placementIndex: l++,
							position: st.a.BOTTOM,
							sizes: d.m
						})
					}))
				}
			}
			t.a = pt(bt)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				p = s.n(u),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const y = h.a.button("IconButton", p.a),
				f = h.a.wrapped(l.a, "SubscribeIcon", p.a),
				v = h.a.wrapped(d.a, "UnsubscribeIcon", p.a),
				O = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return r.a.createElement(y, n, r.a.createElement(f, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", p.a),
				C = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return t ? r.a.createElement(i.f, g({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: s
						})
					})) : r.a.createElement(i.n, g({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", p.a),
				E = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(O, g({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : r.a.createElement(C, g({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				},
				j = h.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: o
					} = e, i = x(e, ["border", "language", "small", "type"]);
					return r.a.createElement(y, i, r.a.createElement(v, {
						className: Object(b.a)(a.o, i.className, {
							[p.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				w = h.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: o
					} = e, a = x(e, ["border", "language", "small", "type"]);
					const d = r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
							className: p.a.UnsubscribeButtonDefault
						}, "subreddit" === o ? Object(c.c)("Joined") : Object(c.c)("Following")), r.a.createElement("span", {
							className: p.a.UnsubscribeButtonHover
						}, "subreddit" === o ? Object(c.c)("Leave") : Object(c.c)("Unfollow"))),
						l = Object(b.a)(a.className, {
							[p.a.isSmall]: n
						});
					return t ? r.a.createElement(i.i, g({}, a, {
						className: l,
						children: d
					})) : r.a.createElement(i.n, g({}, a, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", p.a),
				S = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(j, g({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : r.a.createElement(w, g({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				};
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: s = !1,
						id: n,
						language: a,
						small: i = !1
					} = this.props, c = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: i
					};
					return this.props.userIsSubscriber ? r.a.createElement(S, g({}, c, {
						language: a,
						type: this.props.identifier.type
					})) : r.a.createElement(E, g({}, c, {
						id: n
					}), this.props.children, Object(o.a)(a, "subscriptions.".concat(Object(m.a)({
						type: this.props.identifier.type
					}), ".subscribe")))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				r = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(n.b)(o.a))
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-TabBadger-Component").then(s.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TabBadger/Loader.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/selectors/experiments/badging.ts"),
				l = s("./src/reddit/selectors/platform.ts"),
				m = s("./src/reddit/selectors/posts.ts");
			const u = Object(a.c)({
					postCount: m.N,
					previousPageIsOverlay: l.p,
					tabBadged: e => e.tabBadged,
					variant: e => Object(d.d)(e)
				}),
				p = Object(o.b)(u);
			t.a = p(Object(c.b)(e => 0 !== e.postCount && e.variant ? r.a.createElement(i.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged,
				variant: e.variant
			}) : null))
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TimeSort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/path-browserify/index.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/listingSorts.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/contexts/Tooltip.ts"),
				v = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/Row.tsx"),
				C = s("./src/reddit/helpers/trackers/navigation.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/TimeSort/index.m.less"),
				S = s.n(w),
				_ = s("./src/lib/lessComponent.tsx");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = "TimeSort--SortPicker",
				k = Object(l.a)(v.a),
				I = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(y.H)(e) || (n = r.a.join(n, t)), Object(m.a)(n, {
						[x.t]: s
					})
				},
				T = _.a.div("ListingSortContainer", S.a),
				L = Object(y.t)(),
				M = Object(c.c)({
					dropdownIsOpen: Object(E.b)(P),
					language: j.P
				}),
				B = Object(i.b)(M, e => ({
					onOpenDropdown: () => e(Object(p.g)({
						tooltipId: P
					}))
				}));
			t.a = L(B(Object(h.b)(e => a.a.createElement(T, {
				className: e.className,
				onClick: e.onOpenDropdown
			}, a.a.createElement(b.c, {
				className: e.wrapperClassName,
				disabled: !1
			}, a.a.createElement(b.b, {
				className: e.buttonClassName,
				displayText: g.b[e.timeSort],
				id: P,
				showDropdownTriangle: !0
			})), a.a.createElement(f.a.Consumer, null, t => a.a.createElement(k, N({
				isOpen: e.dropdownIsOpen,
				tooltipId: P
			}, t), [u.Pb.HOUR, u.Pb.DAY, u.Pb.WEEK, u.Pb.MONTH, u.Pb.YEAR, u.Pb.ALL].map(t => a.a.createElement(O.b, {
				className: Object(d.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: g.b[t],
				href: I(e.pageLayer, e.listingSort, t),
				isSelected: e.timeSort === t,
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(C.f)(t))
				}
			}))))))))
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, s) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const l = o.a.div("WidgetBackground", c.a),
				m = o.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return r.a.createElement("div", s, r.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				b = s("./src/reddit/actions/subscription/index.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const g = Object(i.c)({
				language: h.P
			});
			var x = Object(o.b)(g, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(b.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(b.e()),
						onUnsubscribe: () => e(b.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				y = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				j = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				w = s("./src/reddit/models/Flair/index.ts"),
				S = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				_ = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				N = s.n(_);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return k
			})), s.d(t, "a", (function() {
				return T
			}));
			const k = e => r.a.createElement(y.a, {
					className: Object(d.a)(N.a.Container, {
						[N.a.rails]: !!e.railsWidgetsVariant
					}, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.railsWidgetsVariant ? "" : e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, !!e.railsWidgetsVariant && r.a.createElement(u.a, {
					className: N.a.WidgetTitle
				}, e.title), r.a.createElement("div", {
					className: N.a.container
				}, e.isLoading ? r.a.createElement(O.a, {
					className: N.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: N.a.errorMsg
				}, e.errorMsg || Object(C.c)("Something went wrong.")) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(T, P({
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
					railsWidgetsVariant: e.railsWidgetsVariant,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(v.n, {
					className: N.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				I = Object(i.c)({
					hideNSFWPref: h.y,
					language: h.P
				}),
				T = Object(o.b)(I)(e => r.a.createElement("div", {
					className: N.a.communityItemContainer
				}, r.a.createElement(j.a, {
					widthRight: f.u
				}, r.a.createElement("div", {
					className: N.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: N.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(E.a, {
					className: N.a.planetIcon,
					"data-redditstyle": !0
				})), r.a.createElement("div", {
					className: N.a.communityDescriptionContainer
				}, r.a.createElement(a.a, {
					className: N.a.communityName,
					to: Object(S.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(S.b)(e.name, e.type)), r.a.createElement("div", {
					className: N.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: N.a.subscriberCount
				}, Object(c.c)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && r.a.createElement(m.b, {
					flair: {
						type: w.f.Nsfw,
						text: "nsfw"
					}
				}))), !e.railsWidgetsVariant && (e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(O.a, {
					className: Object(d.a)(N.a.communityCta, N.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(v.n, {
					className: Object(d.a)(N.a.communityCta, {
						[N.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(x, {
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
				}) : r.a.createElement(p.a, {
					disabled: e.buttonDisabled,
					identifier: {
						name: e.name,
						type: e.type
					},
					getEventFactory: e.getSubscribeEventFactory,
					small: !0
				}))), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: N.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function o(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(r.c)(e) : Object(r.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2j6XpwwZyn7dNcfH7Blz0B",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				rails: "_2ucwLgmYT_bEawlfA81Q3L",
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				WidgetTitle: "g-Bp8lR31etQDRRiyWCDU",
				widgetTitle: "g-Bp8lR31etQDRRiyWCDU"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, s) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, s) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, s) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				MessageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				messageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG"
			}
		},
		"./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				y = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/trackers/postFlair.ts"),
				v = s("./src/reddit/models/Widgets/index.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = s.n(C);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var w = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const S = 129,
				_ = Object(h.t)({
					filterName: e => Object(h.R)(e)[b.f],
					url: e => Object(h.V)(e)
				}),
				N = Object(i.c)({
					subredditId: (e, t) => Object(O.G)(e, t.subredditName)
				}),
				P = Object(a.b)(N),
				k = l.a.div("WidgetContent", E.a),
				I = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, r = w(e, ["display", "isFlairFilter", "onMouseDown"]);
					return o.a.createElement("li", {
						className: Object(c.a)(E.a.StyledFlair, t === v.d.Cloud && E.a.cloudDisplay, {
							[E.a.flairFilter]: s,
							[E.a["m-selected"]]: r.isSelected
						}),
						onMouseDown: n
					}, o.a.createElement(m.b, j({}, r, {
						className: E.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class T extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(f.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(f.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(f.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(f.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(y.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(y.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > S && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return o.a.createElement(g.n, {
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
						widget: s
					} = this.props;
					return o.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => o.a.createElement(I, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(y.e)(this.props.url, Object(y.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? S : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: E.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return o.a.createElement("ul", null, o.a.createElement(I, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(y.e)(this.props.url, Object(y.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(r) || void 0, i = t.order.length > n.length || s && !a;
					return o.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(k, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(r), i && this.renderButton()))
				}
			}
			t.a = _(P(Object(u.b)(T)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/connectors/connectToLanguage.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				m = s("./src/reddit/components/RichTextJson/index.tsx"),
				u = s("./src/reddit/helpers/dom/index.ts"),
				p = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				b = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				h = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				y = s.n(x);
			const f = d.a.div("RuleShortName", y.a),
				v = d.a.div("RuleIndex", y.a),
				O = d.a.div("RuleTitle", y.a),
				C = d.a.div("RuleDescription", y.a),
				E = d.a.wrapped(l.a, "RawHTMLDisplay", y.a),
				j = {};
			class w extends r.a.Component {
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
					return e.display === g.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: s,
						shouldShowFullDisplay: n
					} = this, o = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !n(e) && !!o;
					return r.a.createElement(f, {
						className: Object(c.a)({
							[y.a.pointerCursor]: a
						}),
						onClick: n(e) || !o ? void 0 : s
					}, r.a.createElement(h.a, null, r.a.createElement(v, null, "".concat(e.humanIndex, ".")), r.a.createElement(O, null, "".concat(e.rule.shortName)), r.a.createElement("div", null, !n(e) && o && (t.isVisible ? r.a.createElement(b.a, {
						className: y.a.Chevron
					}) : r.a.createElement(p.a, {
						className: y.a.Chevron
					})))), t.isVisible && r.a.createElement(C, null, e.rule.descriptionRichText ? r.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: j
					}) : e.rule.descriptionHtml ? r.a.createElement(E, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			s.d(t, "a", (function() {
				return S
			}));
			const S = Object(i.a)(e => e.rules.length > 0 ? r.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: Object(o.a)(e.language, "structuredStyles.widgets.subreddit-rules.subredditRules", {
					subreddit: e.subredditName
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return r.a.createElement(w, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null);
			t.b = e => r.a.createElement(S, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/selectors/telemetry.ts");
			const b = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(p.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, p.defaults);
			var h = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = s("./src/reddit/selectors/experiments/topPosts.ts"),
				y = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(O.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(O.a)(e).widgetColors.sidebarWidgetHeaderColor,
				j = e => {
					const t = C(e);
					return Object(v.f)(t)
				},
				w = e => {
					const t = E(e);
					return Object(v.f)(t)
				};
			var S = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				_ = s.n(S);
			const N = Object(m.t)(),
				P = Object(o.b)(() => Object(a.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(y.m)(e, {
								subredditId: s
							}),
							r = Object(f.R)(e);
						return n || r
					},
					nigtmode: f.R,
					subredditId: m.m,
					topPostVariant: x.d
				}));
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(b(e, t)), this.setState({
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
					return e.backgroundColor = C(this.props), e.borderColor = Object(g.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = j(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = w(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: o,
						onClick: a,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, p = s ? _.a.widgetContentOnly : _.a.widgetContent, b = !n && this.props.styles, g = b ? this.getWidgetBackgroundStyles() : {}, x = b ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, _.a.widgetBackground, {
							[_.a.redditStyle]: n,
							[_.a.clickable]: !!a,
							[_.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: g
					}, c && r.a.createElement("div", {
						className: _.a.widgetHeader,
						style: x
					}, r.a.createElement("div", {
						className: Object(i.a)(_.a.widgetTitle, l)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), o), r.a.createElement("div", {
						className: Object(i.a)(p, {
							[_.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(u.n, {
						className: _.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, r.a.createElement(h.c, null, "See More")))
				}
			}
			t.a = N(P(Object(c.a)(Object(l.b)(k))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/linkMatchers/index.ts"),
				b = s("./src/reddit/models/Image/index.tsx"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/Widgets/Button/index.m.less"),
				v = s.n(f);
			const O = (e, t, s) => {
					let n = {},
						r = {};
					n = e.kind === g.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, s) => {
						let {
							color: n,
							fillColor: r,
							textColor: o
						} = e;
						return t && (n = o = s, r = "transparent"), {
							"--widget-button-background-color": "".concat(r || "transparent"),
							"--widget-button-border": "1px solid ".concat(n),
							"--widget-button-color": "".concat(o || n)
						}
					})(e, t, s);
					const o = e.hoverState || e;
					if (o.kind === g.f.Image) r = {
						"--widget-button-hover-background-image": "url('".concat(o.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: a
						} = o;
						t && (e = a = s, n = "transparent"), r = {
							"--widget-button-hover-background-color": "".concat(n || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(a || e)
						}
					}
					return Object.assign({}, n, r)
				},
				C = e => e.kind === g.f.Image ? v.a.imageButton : v.a.textButton,
				E = e => {
					const t = Object(g.n)(e),
						s = Object(p.g)(p.e, t);
					return s ? s.url : e.url
				},
				j = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(h.a)(e).button;
					return r.a.createElement(d.i, {
						className: C(t),
						style: O(t, s, n)
					}, t.kind === g.f.Text && r.a.createElement("span", {
						className: t.hoverState ? v.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && r.a.createElement("span", {
						className: v.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				w = e => r.a.createElement(l.a, {
					href: E(e.button),
					isSponsored: !1,
					source: null
				}, r.a.createElement(j, e)),
				S = u.a.wrapped(i.a, "RawHTMLDisplay", v.a);
			var _ = Object(o.b)(() => Object(a.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: y.R
				}))(e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(S, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== b.c)).map(t => r.a.createElement(w, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				N = s("./src/lib/humanizeDate/index.ts"),
				P = s("./src/reddit/controls/TextButton/index.tsx"),
				k = s("./src/reddit/i18n/utils.ts"),
				I = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				T = s.n(I);
			const L = 100,
				M = {
					isExpanded: !1
				},
				B = u.a.wrapped(i.a, "RawHTMLDisplay", T.a),
				D = u.a.div("EventContainer", T.a),
				F = u.a.div("EventTitle", T.a),
				R = u.a.div("EventDate", T.a),
				A = u.a.div("EventLocation", T.a),
				W = u.a.div("EventDescription", T.a),
				H = u.a.wrapped(P.a, "ToggleDescription", T.a);
			class U extends r.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = M
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > L ? r.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, L), r.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? Object(k.c)("read less") : Object(k.c)("...read more"))) : r.a.createElement(W, null, e.text)
				}
			}
			const V = Object(a.c)({
				language: y.P
			});
			var G = Object(o.b)(V)(e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => r.a.createElement(D, {
					key: "".concat(s, "-").concat(t.title)
				}, r.a.createElement(F, null, t.titleHtml ? r.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(R, null, Object(N.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? "".concat(s, ":0").concat(n) : "".concat(s, ":").concat(n)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(A, null, t.locationHtml ? r.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(U, {
					language: e.language,
					text: t.description
				}))))),
				K = s("./src/reddit/components/TrackingHelper/index.tsx"),
				q = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var z = Object(K.b)(e => r.a.createElement(q.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Q = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				J = Object(o.b)(Q),
				Y = (e, t, s) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(s, "</body>");
			class Z extends r.a.Component {
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
					return r.a.createElement(c.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, r.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var X = J(Z),
				$ = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				ee = s.n($);
			var te = u.a.div("ImageFrame", ee.a),
				se = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = s.n(se);
			var re = u.a.img("StyledImage", ne.a);
			class oe extends r.a.Component {
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
				componentWillReceiveProps(e) {
					const {
						props: t,
						state: s
					} = this;
					e.subredditName === t.subredditName && e.widget.data[s.imageIndex] && e.widget.data[s.imageIndex] === t.widget.data[s.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const s = e.widget.data[t.imageIndex],
						n = r.a.createElement(te, null, r.a.createElement(re, {
							alt: Object(k.c)("Widget image"),
							src: s.url
						}));
					return s.linkUrl ? r.a.createElement(l.a, {
						href: s.linkUrl,
						isSponsored: !1,
						source: null
					}, n) : n
				}
			}
			var ae = oe,
				ie = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ce = s("./src/reddit/components/Flair/index.tsx"),
				de = s("./src/reddit/controls/InternalLink/index.tsx"),
				le = s("./src/reddit/icons/fonts/helpers.tsx"),
				me = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				ue = s.n(me);
			var pe = u.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(le.b)("envelope"), " ").concat(e.className)
				}), "Envelope", ue.a),
				be = s("./src/reddit/models/Flair/index.ts"),
				he = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ge = s.n(he);
			const xe = u.a.div("ModeratorListItem", ge.a),
				ye = u.a.div("Username", ge.a),
				fe = u.a.a("MessageModsLink", ge.a),
				ve = u.a.wrapped(ce.b, "FlairComponent", ge.a),
				Oe = e => e.authorFlairType === be.f.Richtext ? {
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
				Ce = e => r.a.createElement(ye, null, "u/".concat(e)),
				Ee = u.a.wrapped(de.a, "InternalLink", ge.a),
				je = u.a.div("LinkContainer", ge.a);
			var we = e => {
					const {
						subredditName: t,
						widget: s
					} = e;
					return r.a.createElement(c.a, {
						styles: s.styles,
						title: Object(k.c)("Moderators"),
						headerButton: r.a.createElement(fe, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, r.a.createElement(pe, null))
					}, s.mods.map(e => r.a.createElement(xe, {
						key: e.name
					}, (e => r.a.createElement(ie.a, {
						to: "/user/".concat(e.name, "/")
					}, Ce(e.name)))(e), r.a.createElement(ve, {
						flair: Oe(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(je, null, r.a.createElement(Ee, {
						to: "/r/".concat(t, "/about/moderators/")
					}, Object(k.c)("View All Moderators"))))
				},
				Se = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				_e = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ne = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Pe = s.n(Ne);
			const ke = u.a.div("WidgetContent", Pe.a),
				Ie = u.a.wrapped(i.a, "RawHTMLDisplay", Pe.a);
			var Te = e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(ke, null, r.a.createElement(Ie, {
					html: e.widget.textHtml || ""
				}))),
				Le = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Me = e => r.a.createElement(Le.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return we;
						case "textarea":
							return Te;
						case "button":
							return _;
						case "subreddit-rules":
							return _e.b;
						case "community-list":
							return z;
						case "calendar":
							return G;
						case "image":
							return ae;
						case "custom":
							return X;
						case "post-flair":
							return Se.a;
						default:
							return Me
					}
				}(e.widget);
				return r.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				p = s("./src/reddit/components/PostList/Placeholder.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/monthsToMinutes.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tracking.ts");

			function v() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.z,
					isProfilePostListing: l.I,
					pageLayer: e => e
				})
			}
			const O = v(),
				C = {
					apiError: h.c,
					apiPending: h.d,
					m2mIsEnabled: g.w,
					measureScrollFPS: b.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.M)(e, t),
					loadMore: h.g,
					postsById: x.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(x.F)(e, s, n, r)
					}),
					subredditsById: y.Y,
					viewportDataLoaded: f.a,
					pageReferrer: l.P,
					postListPlaceholderComponent: () => p.a
				},
				E = Object(r.c)(C),
				j = (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(i.x(t))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(i.A(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(i.B(t, n, r))
					}
				}),
				w = Object(n.b)(E, j, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: u.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(d.b)(O(w(e)))
		},
		"./src/reddit/constants/countrySorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/i18n/utils.ts");
			const o = {
				[n.v.Everywhere]: Object(r.c)("everywhere"),
				[n.v.UnitedStates]: Object(r.c)("united states"),
				[n.v.Argentina]: Object(r.c)("argentina"),
				[n.v.Australia]: Object(r.c)("australia"),
				[n.v.Bulgaria]: Object(r.c)("bulgaria"),
				[n.v.Canada]: Object(r.c)("canada"),
				[n.v.Chile]: Object(r.c)("chile"),
				[n.v.Colombia]: Object(r.c)("colombia"),
				[n.v.Croatia]: Object(r.c)("croatia"),
				[n.v.CzechRepublic]: Object(r.c)("czech republic"),
				[n.v.Finland]: Object(r.c)("finland"),
				[n.v.Greece]: Object(r.c)("greece"),
				[n.v.Hungary]: Object(r.c)("hungary"),
				[n.v.Iceland]: Object(r.c)("iceland"),
				[n.v.India]: Object(r.c)("india"),
				[n.v.Ireland]: Object(r.c)("ireland"),
				[n.v.Japan]: Object(r.c)("japan"),
				[n.v.Malaysia]: Object(r.c)("malaysia"),
				[n.v.Mexico]: Object(r.c)("mexico"),
				[n.v.NewZealand]: Object(r.c)("new zealand"),
				[n.v.Philippines]: Object(r.c)("philippines"),
				[n.v.Poland]: Object(r.c)("poland"),
				[n.v.Portugal]: Object(r.c)("portugal"),
				[n.v.PuertoRico]: Object(r.c)("puerto rico"),
				[n.v.Romania]: Object(r.c)("romania"),
				[n.v.Serbia]: Object(r.c)("serbia"),
				[n.v.Singapore]: Object(r.c)("singapore"),
				[n.v.Sweden]: Object(r.c)("sweden"),
				[n.v.Taiwan]: Object(r.c)("taiwan"),
				[n.v.Thailand]: Object(r.c)("thailand"),
				[n.v.Turkey]: Object(r.c)("turkey"),
				[n.v.UnitedKingdom]: Object(r.c)("united kingdom")
			}
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/i18n/utils.ts");
			const o = {
					[n.N.BEST]: Object(r.c)("best"),
					[n.N.HOT]: Object(r.c)("hot"),
					[n.N.NEW]: Object(r.c)("new"),
					[n.N.CONTROVERSIAL]: Object(r.c)("controversial"),
					[n.N.RISING]: Object(r.c)("rising"),
					[n.N.TOP]: Object(r.c)("top")
				},
				a = {
					[n.Pb.HOUR]: Object(r.c)("Now"),
					[n.Pb.DAY]: Object(r.c)("Today"),
					[n.Pb.WEEK]: Object(r.c)("This week"),
					[n.Pb.MONTH]: Object(r.c)("This month"),
					[n.Pb.YEAR]: Object(r.c)("This year"),
					[n.Pb.ALL]: Object(r.c)("All time")
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext({})
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			class o extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							s = this.props.multiple ? [...t] : t[0];
						this.props.onChange(s), this.setState(() => ({
							value: s
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || ""
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, o = s || n;
					return r.a.createElement("div", {
						className: e.className
					}, s && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: s,
						tabIndex: e.tabIndex
					}), !o && r.a.createElement("input", {
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
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				tooltip: "vCHkhDAaK6nnJdqEpMGq-",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				b = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				O = s.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const j = e => Object(c.a)(O.a.iconStyles, e.className, {
					[O.a.mDisabled]: e.disabled,
					[O.a.mRedditStyle]: e.redditStyle
				}),
				w = e => {
					var {
						isActive: t
					} = e, s = E(e, ["isActive"]);
					return r.a.createElement("button", C({
						className: Object(c.a)(O.a.layoutButton, {
							[O.a.mIsActive]: t
						})
					}, s))
				},
				S = Object(i.e)("listings.layoutSwitcher.label"),
				_ = Object(i.e)("listings.layoutSwitcher.card"),
				N = Object(i.e)("listings.layoutSwitcher.classic"),
				P = Object(i.e)("listings.layoutSwitcher.compact"),
				k = [{
					layout: u.d.Card,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, o = E(e, ["className", "disabled", "redditStyle"]);
						return r.a.createElement(h.a, C({
							className: j({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, o))
					},
					tooltipTranslation: _
				}, {
					layout: u.d.Classic,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, o = E(e, ["className", "disabled", "redditStyle"]);
						return r.a.createElement(p.a, C({
							className: j({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, o))
					},
					tooltipTranslation: N
				}, {
					layout: u.d.Compact,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, o = E(e, ["className", "disabled", "redditStyle"]);
						return r.a.createElement(b.a, C({
							className: j({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, o))
					},
					tooltipTranslation: P
				}],
				I = Object(x.t)(),
				T = Object(a.c)({
					language: f.P,
					postLayout: x.M,
					redditStyle: x.B
				}),
				L = Object(o.b)(T, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					toggleTooltip: t => e(Object(m.g)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = I(L(Object(g.b)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || u.e[e.postLayout];
				return r.a.createElement("div", {
					className: Object(c.a)(O.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, r.a.createElement("div", {
					className: O.a.title
				}, S(e.language)), r.a.createElement("div", {
					className: O.a.iconContainer
				}, k.map(o => {
					const a = () => (n => {
							e.onChange ? e.onChange(n) : (e.onListingLayoutChange(n, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: n,
								screen: Object(y.screen)(e),
								subreddit: Object(y.subreddit)(e)
							})))
						})(o.layout),
						i = () => e.toggleTooltip(c),
						c = "layoutSwitch--" + o.layout,
						l = o.layout === n;
					return r.a.createElement(w, {
						"aria-label": o.tooltipTranslation(e.language),
						"aria-pressed": l,
						id: c,
						isActive: l,
						key: o.layout,
						onClick: a,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: a
					}, r.a.createElement(o.Icon, {
						disabled: !l,
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), r.a.createElement(d.c, {
						className: O.a.tooltip,
						tooltipId: c,
						text: o.tooltipTranslation(e.language)
					}))
				})))
			})))
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less": function(e, t, s) {
			e.exports = {
				entry: "_2_6Q3rlmltjQM8nEBoNJr-",
				disabled: "_1eGUunOsIyMkgTF3IiieVl"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less": function(e, t, s) {
			e.exports = {
				title: "-T-WBPEANCCRwTdAGSdj_",
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, s) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, s) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				noMatches: "kaGogHhtbK_vPZj9943oa",
				container: "_3DQXGvoE1SM3Kmz20of7Iz",
				mIsValid: "_28z84WGIIVp4uDMcA3-Kgw",
				mIsVisible: "_3009h778F7QI2qu6YmsxVV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts");
			const d = {
				leading: !0,
				trailing: !1
			};
			var l = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d;
					const r = Object.assign({}, d, n),
						o = t > e ? 1 : -1;
					let a = e;
					if (e !== t) {
						for (r.leading || (a += o); a !== t;) s(a), a += o;
						r.trailing && s(a)
					} else(r.leading || r.trailing) && s(e)
				},
				m = s("./src/lib/forEachGroup/index.ts"),
				u = s("./src/reddit/models/SubredditAutocomplete/index.ts"),
				p = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				b = s.n(p);
			class h extends o.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.element = null, this.setRef = e => this.element = e, this.onMouseUp = () => {
						this.mouseDown && (this.props.disabled || this.props.onSelect(this.props.entryIndex), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onOver(this.props.entryIndex)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1, this.element && this.props.onUpdate(this.props.entryIndex, this.element)
				}
				render() {
					return a.a.createElement("div", {
						className: Object(c.a)(b.a.entry, this.props.disabled && b.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			s("./node_modules/core-js/modules/es6.symbol.js");
			var g = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				x = s.n(g);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				},
				v = e => {
					var {
						className: t,
						children: s,
						title: n
					} = e, r = f(e, ["className", "children", "title"]);
					return a.a.createElement("div", y({
						className: Object(c.a)(x.a.dropdownSection, t)
					}, r), n && a.a.createElement("div", {
						className: x.a.title
					}, n), s)
				},
				O = s("./src/reddit/helpers/name/index.ts"),
				C = s("./src/lib/lessComponent.tsx"),
				E = s("./src/reddit/components/SubredditIcon/index.tsx"),
				j = s("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				w = s("./src/reddit/icons/svgs/Link/index.tsx"),
				S = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Video/index.tsx"),
				N = s("./src/reddit/layout/row/Inline/index.tsx"),
				P = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				k = s.n(P);
			const I = [{
				type: "text",
				Icon: S.a
			}, {
				type: "images",
				Icon: j.a
			}, {
				type: "videos",
				Icon: _.a
			}, {
				type: "links",
				Icon: w.a
			}];
			var T = e => {
					const {
						allowedPostTypes: t,
						className: s
					} = e;
					return a.a.createElement(N.a, {
						className: Object(c.a)(k.a.rowStyle, s)
					}, I.map(e => {
						let {
							type: s,
							Icon: n
						} = e;
						return a.a.createElement("div", {
							className: Object(c.a)(k.a.iconWrapper, {
								[k.a.mDisabled]: !t[s]
							})
						}, a.a.createElement(n, null))
					}))
				},
				L = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				M = s.n(L);
			const B = C.a.wrapped(E.b, "subredditIcon", M.a);
			var D = e => {
					const {
						highlight: t,
						icon: s,
						title: n,
						secondaryText: r,
						item: o
					} = e, {
						allowedPostTypes: i
					} = o;
					return a.a.createElement("div", {
						className: Object(c.a)(M.a.container, {
							[M.a.mHighlight]: t
						})
					}, s, a.a.createElement("div", {
						className: M.a.main
					}, a.a.createElement("span", {
						className: M.a.title
					}, n), r && a.a.createElement("span", {
						className: M.a.secondary
					}, r)), t && i && a.a.createElement(T, {
						allowedPostTypes: i
					}))
				},
				F = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				R = s.n(F);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(i.d)("listings.subscribers");
			var H = e => {
				const {
					language: t,
					item: {
						name: s,
						iconUrl: n,
						subscribers: r
					}
				} = e, o = Object(O.c)(s), i = void 0 !== r ? W(t, r) : void 0, c = a.a.createElement(B, {
					className: R.a.profileIcon,
					iconUrl: n
				});
				return a.a.createElement(D, A({
					icon: c,
					title: o,
					secondaryText: i
				}, e))
			};

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(i.d)("listings.subscribers");
			var G = e => {
					const {
						language: t,
						item: {
							primaryColor: s,
							iconUrl: n,
							name: r,
							subscribers: o
						}
					} = e, i = Object(O.b)(r), c = void 0 !== o ? V(t, o) : void 0, d = a.a.createElement(B, {
						iconUrl: n,
						primaryColor: s,
						redditStyle: !0
					});
					return a.a.createElement(D, U({
						icon: d,
						title: i,
						secondaryText: c
					}, e))
				},
				K = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				q = s.n(K);
			const z = Object(i.e)("subredditPicker.noCommunitiesFound"),
				Q = {
					[u.a.OWN_PROFILE]: Object(i.e)("subredditPicker.sectionOwnProfile"),
					[u.a.SUBSCRIBED_TO_SUBREDDIT]: Object(i.e)("subredditPicker.sectionSubscriptions"),
					[u.a.OTHER_SUBREDDIT]: Object(i.e)("subredditPicker.sectionOthers"),
					[u.a.MODERATED_SUBREDDIT]: Object(i.e)("subredditPicker.sectionModeratedSubreddits")
				};
			t.a = class extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.selectedEntryElement = null, this.containerElement = null, this.ignoreEntryOverEvents = !1, this.activateEntryOverEvents = r()(() => this.ignoreEntryOverEvents = !1, 100), this.setContainerRef = e => this.containerElement = e, this.onEntryUpdate = (e, t) => {
						e === this.props.focusedIndex && (this.selectedEntryElement = t)
					}, this.onScroll = () => {
						this.ignoreEntryOverEvents && this.activateEntryOverEvents()
					}, this.onEntryOver = e => {
						this.ignoreEntryOverEvents || this.props.items[e].disabled || this.props.onEntryFocus(e), this.ignoreEntryOverEvents = !1
					}
				}
				componentDidUpdate() {
					if (this.props.focusedIndex >= 0 && this.selectedEntryElement && this.containerElement) {
						const e = this.selectedEntryElement.getBoundingClientRect(),
							t = this.containerElement.getBoundingClientRect();
						(e.top < t.top || e.bottom > t.bottom) && (this.ignoreEntryOverEvents = !0, 0 === this.props.focusedIndex ? this.containerElement.scrollTop = 0 : this.selectedEntryElement.scrollIntoView(e.top < t.top)), this.props.onEntryFocus(this.props.focusedIndex)
					}
				}
				getEntryContentComponent(e, t) {
					switch (e) {
						case u.a.OWN_PROFILE:
							return H;
						default:
							return G
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t,
						language: s
					} = this.props, n = [];
					return this.props.showNoMatchesCaption && n.push(a.a.createElement(v, {
						key: "no-matches"
					}, a.a.createElement("div", {
						className: q.a.noMatches
					}, s && z(s)))), Object(m.a)(t, {
						keyFn: e => e.type
					}, (r, o, i, c) => {
						const d = [];
						l(i, c, n => {
							const r = t[n],
								o = n === e,
								i = this.getEntryContentComponent(r.type, r.name);
							i && d.push(a.a.createElement(h, {
								entryIndex: n,
								disabled: r.disabled,
								key: r.id || r.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, a.a.createElement(i, {
								language: s,
								highlight: o,
								item: r
							})))
						});
						const m = Q[o];
						n.push(a.a.createElement(v, {
							key: o,
							title: m && m(s),
							children: d
						}))
					}), a.a.createElement("div", {
						className: Object(c.a)(q.a.container, this.props.className, {
							[q.a.mIsValid]: this.props.isValid,
							[q.a.mIsVisible]: n.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, n)
				}
			}
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r, o = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, s, n) {
				return Object(a.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
					method: "patch",
					data: n
				})
			}
			async function c(e, t) {
				const s = await async function(e, t, s) {
					return Object(a.a)(e, {
						endpoint: "".concat(o.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
						method: "get"
					})
				}(e, t, n.UpsellBanners);
				return s.ok && s.body || {}
			}
			async function d(e, t, s, r) {
					const o = await c(e, t),
						a = Object.assign({}, o, {
							[s]: r
						});
					return (await i(e, t, n.UpsellBanners, a)).ok ? a : o
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(n || (n = {})), s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return c
				})), s.d(t, "c", (function() {
					return l
				})), s.d(t, "e", (function() {
					return m
				})), s.d(t, "d", (function() {
					return u
				})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(r || (r = {}));
			const l = async (e, t, s) => d(e, t, s, !0), m = async (e, t, s) => d(e, t, s, !1), u = (e, t) => i(e, t, n.UpsellBanners, Object.keys(r).reduce((e, t) => (e[r[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var n, r = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case n.Ethereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function i(e, t, s) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function c(e, t, s) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: s
				})
			}
			async function d(e, t, s) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(s)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(n || (n = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/lodash/get.js"),
				r = s.n(n),
				o = s("./src/config.ts"),
				a = s("./src/graphql/operations/PollVote.json"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				l = (s("./src/reddit/models/Poll/index.ts"), s("./src/reddit/endpoints/governance/requester.ts"));

			function m(e, t, s, n) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(s, "/votes/me/").concat(n)
				})
			}
			const u = (e, t, s) => Object(i.a)(e, Object.assign({}, a, {
				variables: {
					input: {
						postId: t,
						optionId: s
					}
				}
			}));

			function p(e, t) {
				return Object(l.a)(Object(c.a)(e, [d.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: r()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: r()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/config.ts"),
				r = (s("./src/lib/bigNumberUtils/percent.ts"), s("./src/lib/constants/index.ts")),
				o = s("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: r.bb.GET
				}).then(e => {
					if (e.ok) {
						const s = e.body,
							n = {
								[t.subredditId]: s
							};
						return Object.assign({}, e, {
							body: n
						})
					}
					return e
				})
			}

			function i(e, t) {
				return Object(o.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(n.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: r.bb.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};

			function d(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(o.b)(n)(e => {
					const {
						featureEnabled: n,
						dispatch: o
					} = e, a = c(e, ["featureEnabled", "dispatch"]);
					return n ? r.a.createElement(t, a) : void 0 !== s ? r.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.a.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/isFakeSubreddit/index.ts"),
				r = s("./src/reddit/constants/postLayout.ts");
			const o = Math.floor(100 * Math.random());
			var a;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(a || (a = {}));
			t.b = (e, t, s, a, i) => {
				const c = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: r.b[t.prefs.layout]
				};
				return a && !Object(n.a)(a.name) && (c.subreddit = a.name, c.subreddit_screen = !0), c.wls = 6, c.whitelist_status = "all_ads", c.percentage = c.random_number = o, i && (c.position = i), c
			}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/app/strings/index.ts"),
				r = s("./src/lib/constants/index.ts");

			function o(e) {
				let {
					apiError: t,
					isLoggedOut: s,
					language: o
				} = e;
				switch (t.type) {
					case r.D.AUTHORIZATION_ERROR:
						return s ? Object(n.a)(o, "error.type.notLoggedIn") : Object(n.a)(o, "error.type.notAuthorized");
					case r.D.VALIDATION_ERROR:
						return Object(n.a)(o, "error.type.validation");
					case r.D.NOT_FOUND_ERROR:
						return Object(n.a)(o, "error.type.notFound");
					case r.D.SERVER_ERROR:
						return Object(n.a)(o, "error.type.server");
					case r.D.LIKELY_UBLOCK_ERROR:
						return Object(n.a)(o, "error.type.blocked");
					default:
						return Object(n.a)(o, "error.type.generic")
				}
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function r(e, t) {
				return Object(n.a)("/web/special-membership/".concat(e, "?corr=").concat(t))
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "i", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/i18n/utils.ts");

			function r() {
				return window.ethereum
			}

			function o() {
				const e = r();
				return !(!e || !e.isMetaMask)
			}

			function a() {
				const e = r();
				return e && e.selectedAddress || null
			}

			function i() {
				return r().networkVersion || null
			}

			function c() {
				const e = r();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return a() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, n, o) {
				const [a, i] = await Promise.all([s.e("vendors~CryptoLibEthers").then(s.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const d = new a.providers.Web3Provider(r()).getSigner(),
					l = new a.Contract(e, i, d),
					m = await l[n](...o);
				return await m.wait()
			}
			const m = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "to",
						type: "address"
					}, {
						name: "value",
						type: "uint256"
					}, {
						name: "data",
						type: "bytes"
					}],
					name: "send",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			const u = 1;
			async function p(e, t, n, r, o) {
				const a = await s.e("vendors~CryptoLibEthers").then(s.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: c,
						hexZeroPad: d,
						toUtf8Bytes: p
					} = a.utils,
					b = i(n).add(o),
					h = u,
					g = "0x" + [c(1)].concat([h, i(r), i(o)].map(c).map(e => d(e, 32))).concat(c(p(""))).map(e => e.substr(2)).join("");
				return async function(e, t, s, n) {
					return l(e, Promise.resolve(m), "send", [t, s, n])
				}(e, t, b.toString(), g)
			}
			const b = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "_subscriber",
						type: "address"
					}, {
						name: "_units",
						type: "uint16"
					}],
					name: "subscribe",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			async function h(e, t, s) {
				await c();
				const r = a() || "";
				if (t.toLowerCase() !== r.toLowerCase()) throw new Error(Object(n.c)("Please select your registered address in MetaMask: ") + t);
				return l(e, Promise.resolve(b), "subscribe", [t, s])
			}

			function g(e) {
				const t = r();
				return new Promise((s, r) => {
					const o = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, o],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) r(e);
						else {
							const e = t && t.result;
							e ? s(e) : r({
								message: Object(n.c)("No signature returned from ethereum provider.")
							})
						}
					})
				})
			}

			function x(e) {
				return new Promise((t, s) => {
					r().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, n) => {
						e || "error" in n ? s("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				r = s("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const s = new n.BigNumber(e),
					r = new n.BigNumber(t);
				return s.dividedBy(r).decimalPlaces(2).toString()
			}

			function a(e, t) {
				return Object(r.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const s = new n.BigNumber(e),
					r = new n.BigNumber(t);
				return s.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/isUrl/index.ts"),
				i = s("./src/lib/logs/console.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/models/Media/index.ts");
			const l = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-BlankPost").then(s.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
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
				m = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
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
				u = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
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
				b = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
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
				h = {
					[c.g.Large]: p,
					[c.g.Medium]: b,
					[c.g.Classic]: m,
					[c.g.Compact]: u
				},
				g = e => o.a.createElement(l, e),
				x = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				y = e => e.source && e.source.url && e.isSponsored && x.some(t => e.source.url.startsWith(t)),
				f = e => !e.media || e.media.type === d.n.EMBED && !(d.b.has(e.media.provider) || y(e)),
				v = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case c.g.Medium:
							return 188;
						case c.g.Classic:
							return 96;
						case c.g.Compact:
							return 32;
						default:
							return 200
					}
				};

			function O(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: n,
					post: r
				} = e;
				if (r.isBlank) return g;
				const o = !r.media && !!r.source && Object(a.a)(r.source.url),
					d = t && o;
				n === c.g.Large && f(r) && !d && (n = c.g.Medium);
				const l = h[n];
				return void 0 === l ? (Object(i.a)(void 0, "Could not find component for layout ".concat(n, ".")), g) : s && r.isSponsored && n === c.g.Large ? b : l
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return x
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				u = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				b = e => Object(n.o)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(o.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/idCard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts"),
				o = s("./src/reddit/selectors/widgets.ts"),
				a = s("./src/telemetry/index.ts");
			const i = e => {
					Object(a.a)(Object.assign({}, r.defaults(e), {
						action: n.c.CLICK,
						noun: "multi_detail",
						source: "id_card"
					}))
				},
				c = (e, t, s) => {
					const {
						subreddit: i,
						profile: c
					} = Object(o.b)(e, t);
					Object(a.a)(Object.assign({}, r.defaults(e), {
						action: n.c.CLICK,
						noun: "multi_detail_subreddit",
						profile: c,
						source: "id_card",
						subreddit: Object.assign({}, i, {
							categoryName: s
						})
					}))
				},
				d = e => t => ({
					action: n.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: r.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return i
			}));
			const n = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				r = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				o = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				}),
				a = e => t => ({
					source: "mod_edu_widget",
					action: "click",
					noun: e
				}),
				i = e => e => ({
					source: "mod_edu",
					action: "view",
					noun: "widget"
				})
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "j", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "g", (function() {
				return f
			}));
			var n = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => {
					switch (e) {
						case n.a.LIVE:
							return "stream_live";
						case n.a.VOD:
							return "stream_vod";
						case n.a.UNAVAILABLE:
							return "stream_unavailable";
						default:
							return
					}
				},
				a = (e, t) => {
					if (t) {
						const s = Object(n.i)(e, {
							streamIdFromPath: t.post.id
						});
						return {
							post: r.post(e, t.post.id),
							media: Object.assign({}, r.media(e, t.post.id, void 0, t), {
								type: o(s)
							})
						}
					}
				},
				i = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				c = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}),
				d = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					actionInfo: {
						position: t || 0
					}
				}, a(s, e)),
				l = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, i(t), e && Object.assign({}, a(t, e))),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, i(t), a(t, e)),
				u = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, i(t), a(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share"
				}, i(t), a(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, i(t), a(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, i(t), a(t, e)),
				g = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, i(t), a(t, e)),
				x = e => t => {
					const s = Object(n.l)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, a(t, s))
				},
				y = e => t => {
					const s = Object(n.l)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "send_chat"
					}, a(t, s))
				},
				f = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					}
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "q", (function() {
				return u
			})), s.d(t, "r", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "n", (function() {
				return j
			})), s.d(t, "o", (function() {
				return w
			}));
			var n = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => Object.assign({}, r.defaults(e), {
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				a = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, o(e)),
				i = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, o(e)),
				c = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, o(t)),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return c(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = c("compare_wiki_pages"),
				m = c("revert_wiki_page"),
				u = c("view_wiki_page"),
				p = c("view_source"),
				b = c("add_wiki_page_contributor"),
				h = c("remove_wiki_page_contributor"),
				g = c("save_wiki_page_settings"),
				x = c("copy_url"),
				y = c("add_wiki_subreddit_contributor"),
				f = c("remove_wiki_subreddit_contributor"),
				v = c("ban_wiki_contributor"),
				O = c("unban_wiki_contributor"),
				C = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				E = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				j = e => t => Object.assign({}, o(t), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: r.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				w = e => t => Object.assign({}, o(t), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: r.actionInfo(t, {
						settingValue: E[e]
					})
				})
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, s) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, s) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("title", null, "Planet"), r.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), r.a.createElement("g", null, r.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Top/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				transform: "translate(3, 4)"
			}, r.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
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
				r = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("rightAligned", o.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(i);
			t.a = Object(o.a)(e => r.a.createElement("div", {
				className: Object(a.a)(c.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, r;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(r || (r = {}))
		},
		"./src/reddit/pages/Subreddit/index.m.less": function(e, t, s) {
			e.exports = {
				duHeader: "otZ2uDhYTr1YmgF32ArRm",
				iframe: "_2c5jkTqwY6PkaTiAs5Ijuu",
				iframeContainer: "_1qwRT12qwOr9otmFG3skug",
				mShowCardView: "_11y6tAK6CZS-RU5Z28vPjw",
				cardChild: "_3HLyjC36ED_cOkMhS77Ts1",
				classicChild: "_2YjutkjJwMliy9kOCltIuA",
				compactChild: "m6QmcOHa4tObaem8JhVz8",
				newbieBanner: "_2yjtWm1t0hFL9JDdG1EXR5",
				sidebar: "_3ZmEUUvrdj4LXpXC9XZdN7",
				subredditPremiumUpsell: "_3s2ygGulpjIr920Ws4sGpx",
				Container: "_3LltgwlOPMqp9SuLSX3Qcs",
				container: "_3LltgwlOPMqp9SuLSX3Qcs",
				SidebarRight: "_33zikAe_JEyi3Ulm5L3p--",
				sidebarRight: "_33zikAe_JEyi3Ulm5L3p--",
				TrendingPosts: "_31DFU9jVTS4FfS8EjhrehO",
				trendingPosts: "_31DFU9jVTS4FfS8EjhrehO",
				large: "MCFasrNCNYTYDIlH3-nqu"
			}
		},
		"./src/reddit/pages/Subreddit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				r = s.n(n),
				o = s("./node_modules/core-js/modules/es6.array.sort.js"),
				a = s.n(o),
				i = s("./node_modules/core-js/modules/es6.regexp.search.js"),
				c = s.n(i),
				d = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/lodash/fromPairs.js"),
				m = s.n(l),
				u = s("./node_modules/react/index.js"),
				p = s.n(u),
				b = s("./node_modules/react-redux/es/index.js"),
				h = s("./src/reddit/i18n/components.tsx"),
				g = s("./node_modules/reselect/es/index.js"),
				x = s("./src/lib/classNames/index.ts"),
				y = s("./src/lib/extractQueryParams/index.ts"),
				f = s("./src/lib/isAdHocMultireddit/index.ts"),
				v = s("./src/lib/isFakeSubreddit/index.ts"),
				O = s("./src/lib/listingSort/index.ts"),
				C = s("./src/lib/makeListingKey/index.ts"),
				E = s("./src/lib/objectSelector/index.ts"),
				j = s("./src/lib/constants/index.ts"),
				w = s("./src/lib/fastdom/index.ts"),
				S = s("./src/lib/performanceTimings/index.tsx"),
				_ = s("./src/reddit/actions/pages/subreddit.ts"),
				N = s("./src/reddit/actions/preferences.ts"),
				P = s("./src/reddit/actions/search.ts"),
				k = s("./src/reddit/actions/subreddit.ts"),
				I = s("./src/reddit/components/AdHocMultiredditSidebar/index.tsx"),
				T = s("./src/reddit/components/CategoriesNavigation/index.tsx"),
				L = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				M = s("./src/reddit/components/ContentGate/index.tsx"),
				B = s("./src/reddit/components/CreatePostBanner/index.tsx"),
				D = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx"),
				F = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				R = s("./src/reddit/components/EmptySubreddit.tsx"),
				A = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				W = s("./src/reddit/components/Governance/VotingBanner/async.tsx"),
				H = s("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				U = s("./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx"),
				V = s("./src/reddit/components/HeaderImage/index.tsx"),
				G = s("./src/reddit/components/InFeedPostCreation/async.tsx"),
				K = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				q = s("./src/reddit/components/JumpToContent/index.tsx"),
				z = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				Q = s("./src/reddit/components/ListingPostList/index.tsx"),
				J = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				Y = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				Z = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				X = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				$ = s("./src/reddit/components/SubredditSidebar/index.tsx"),
				ee = s("./src/reddit/components/TabBadger/index.tsx"),
				te = s("./src/reddit/components/TrackingHelper/index.tsx"),
				se = s("./src/reddit/constants/listings.ts"),
				ne = s("./src/reddit/constants/page.ts"),
				re = s("./src/reddit/constants/parameters.ts"),
				oe = s("./src/reddit/constants/postLayout.ts"),
				ae = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = s("./src/reddit/featureFlags/index.ts"),
				ce = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				de = s("./src/reddit/helpers/trackers/screenview.ts"),
				le = s("./src/reddit/layout/page/Listing/index.tsx"),
				me = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				pe = s("./src/reddit/pages/Topic/SidebarLeft/Loader.ts"),
				be = s("./src/reddit/selectors/discoveryUnit.ts"),
				he = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				ge = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				xe = s("./src/reddit/selectors/experiments/generalCleanup.ts"),
				ye = s("./src/reddit/selectors/experiments/railsWidgets.ts"),
				fe = s("./src/reddit/selectors/experiments/topPosts.ts"),
				ve = s("./src/reddit/selectors/experiments/trending.ts"),
				Oe = s("./src/reddit/selectors/listings.ts"),
				Ce = s("./src/reddit/selectors/meta.ts"),
				Ee = s("./src/reddit/selectors/moderatorPermissions.ts"),
				je = s("./src/reddit/selectors/posts.ts"),
				we = s("./src/reddit/selectors/PublicAccessNetwork/discorveryUnit.ts"),
				Se = s("./src/reddit/selectors/subreddit.ts"),
				_e = s("./src/reddit/selectors/user.ts"),
				Ne = s("./src/reddit/pages/Subreddit/index.m.less"),
				Pe = s.n(Ne);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ie = Object(d.a)({
					resolved: {},
					chunkName: () => "reddit-components-LayersEmbed",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-LayersEmbed").then(s.bind(null, "./src/reddit/components/LayersEmbed/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/LayersEmbed/index.tsx"
					}
				}),
				Te = 5,
				Le = 3,
				Me = Object(ae.t)(),
				Be = Object(d.a)({
					resolved: {},
					chunkName: () => "SubredditTopContent",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), s.e("SubredditTopContent")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx"
					}
				}),
				De = Object(E.a)(Object(g.a)((e, t) => {
					let {
						location: s
					} = t;
					return s.search
				}, e => m()([...Object(y.a)(e)]))),
				Fe = Object(g.a)((e, t) => {
					let {
						match: s
					} = t;
					return s.params.subredditName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort
				}, De, _e.U, (e, t, s, n) => {
					let r = t;
					!r && Object(v.a)(e) && (r = j.N.HOT);
					const o = Object(_.f)(s, n);
					return Object(_.g)(e, r, s, o)
				}),
				Re = Object(g.c)({
					isTopContentDismissed: _e.M
				}),
				Ae = Object(g.c)({
					subreddit: (e, t) => Object(Se.B)(e, {
						subredditName: t.match.params.subredditName
					})
				}),
				We = Object(g.c)({
					countryMeta: Ce.b,
					geopopular: _e.m
				}),
				He = Object(g.c)({
					isLoggedIn: _e.G
				}),
				Ue = Object(E.a)((e, t) => {
					const {
						subreddit: s
					} = Ae(e, t), {
						subredditName: n
					} = t.match.params;
					if (s) {
						const r = Fe(e, t),
							o = Object(Ee.a)(ue.c.config)(e, {
								subredditId: s.id
							}),
							a = Object(je.F)(e, r, n, !0),
							i = !Object(Oe.d)(e, {
								listingKey: r
							});
						if (o && i && a.length <= 1) return !0
					}
					return !1
				}),
				Ve = Object(g.c)({
					exploreV2Variant: (e, t) => {
						if (Object(ae.D)(e, t)) return Object(ge.a)(e)
					},
					generalCleanupVariant: xe.a,
					isPopular: ae.D,
					isInTrendingEntrypointExperiment: ve.a
				}),
				Ge = e => {
					const t = re.t in e && e[re.t].toUpperCase();
					if ("string" == typeof t && t in j.Pb) return j.Pb[t]
				},
				Ke = Object(E.a)((e, t) => {
					const {
						sort: s,
						subredditName: n
					} = t.match.params, r = De(e, t);
					if (s) return Object(O.b)({
						sort: s,
						timeSort: Ge(r)
					});
					if (Object(v.a)(n)) return Object(O.b)({
						sort: j.N.HOT
					});
					const o = Fe(e, t),
						a = e.listings.postOrder.listingSort[o];
					if (a && !a.hasChanged) return Object(O.d)(a.sort);
					const {
						subreddit: i
					} = Ae(e, t);
					if (i) {
						const t = Object(Se.E)(e, {
							subredditId: i.id
						});
						return Object(O.d)(t)
					}
					return Object(O.d)(e.user.prefs.sort)
				}),
				qe = Object(E.a)((e, t) => {
					const {
						subredditName: s
					} = t.match.params;
					return Object(Se.W)(e, {
						subredditName: s
					})
				}),
				ze = Object(g.c)({
					subredditPremiumEnabled: ie.d.spPremiumUpsells,
					isBlacklistedTopContentPage: be.j,
					language: _e.P,
					layersEmbedEnabledOnSubreddit: ie.d.layersEmbed,
					listingKey: Fe,
					railsWidgetsVariant: ye.d,
					sortParams: Ke,
					stellarRegistrationBannerEnabled: ie.d.spStellarWalletRegistration,
					topContent: qe,
					topContentDiscoveryUnit: e => Object(be.f)(e, {
						unitName: me.a
					}),
					topPostsVariant: fe.d,
					walletRegistrationBannerEnabled: ie.d.spWalletRegistrationBanner
				}),
				Qe = Object(g.c)({
					categoriesPlacementVariant: he.a,
					showCreatePostBanner: Ue,
					contentGateInfo: (e, t) => Object(_e.f)(e, t.match.params.subredditName),
					layout: ae.M,
					isRpanDuVisible: (e, t) => {
						let {
							match: s
						} = t;
						return Object(we.a)(e, {
							listingName: "r/".concat(s.params.subredditName)
						})
					},
					rpanInjectionIndex: (e, t) => {
						let {
							match: s
						} = t;
						return Object(we.b)(e, {
							listingName: "r/".concat(s.params.subredditName)
						})
					}
				}),
				Je = () => Object(g.a)(_e.U, We, De, Re, Ae, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Se.y)(e, {
						subredditName: s.params.subredditName
					})
				}, He, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.subredditName
				}, Ve, ze, Qe, (e, t, s, n, r, o, a, i, c, d, l) => {
					let {
						countryMeta: m,
						geopopular: u
					} = t, {
						isTopContentDismissed: p
					} = n, {
						subreddit: b
					} = r, {
						isLoggedIn: h
					} = a, {
						exploreV2Variant: g,
						generalCleanupVariant: x,
						isInTrendingEntrypointExperiment: y,
						isPopular: f
					} = c, {
						subredditPremiumEnabled: v,
						language: O,
						layersEmbedEnabledOnSubreddit: C,
						listingKey: E,
						sortParams: {
							sort: w,
							timeSort: S
						},
						stellarRegistrationBannerEnabled: _,
						topContent: N,
						topContentDiscoveryUnit: P,
						topPostsVariant: k,
						isBlacklistedTopContentPage: I,
						railsWidgetsVariant: T,
						walletRegistrationBannerEnabled: L
					} = d;
					const M = m || j.v.Everywhere,
						B = u || M,
						D = s && re.g in s ? s[re.g].toUpperCase() : B,
						F = !!s.hasOwnProperty("f");
					return Object.assign({
						countrySort: D,
						exploreV2Variant: g,
						subredditPremiumEnabled: v,
						generalCleanupVariant: x,
						isLoggedIn: h,
						isInTrendingEntrypointExperiment: y,
						isPopular: f,
						language: O,
						layersEmbedEnabledOnSubreddit: C,
						listingKey: E,
						railsWidgetsVariant: T,
						renderNSFWContentGate: b && b.isNSFW && !e,
						isTopContentDismissed: p,
						sort: w,
						stellarRegistrationBannerEnabled: _,
						subreddit: b,
						subredditAboutInfo: o,
						subredditName: i,
						timeSort: S,
						topContent: N,
						topContentDiscoveryUnit: P,
						topPostsVariant: k,
						isBlacklistedTopContentPage: I,
						isFlairFilter: F,
						walletRegistrationBannerEnabled: L
					}, l)
				}),
				Ye = (e, t) => ({
					onLoadMorePosts: () => e(k.r({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					})),
					onLoadMoreSearchResults: () => e(Object(P.g)([j.Kb.Posts])),
					refreshFeed: () => e(k.s({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					})),
					setTopContentDismissalPref: () => e(Object(N.D)())
				}),
				Ze = Object(b.b)(Je, Ye),
				Xe = Object(d.a)({
					resolved: {},
					chunkName: () => "Trending",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Trending").then(s.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
					}
				}, {
					ssr: !1
				}),
				$e = e => p.a.createElement(Xe, ke({}, e, {
					fallback: p.a.createElement(Z.a, {
						className: e.className,
						showCardView: !!e.showCardView
					})
				})),
				et = Object(d.a)({
					resolved: {},
					chunkName: () => "FrontpageSidebar",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FrontpageSidebar").then(s.bind(null, "./src/reddit/components/FrontpageSidebar/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FrontpageSidebar/index.tsx"
					}
				}),
				tt = Object(d.a)({
					resolved: {},
					chunkName: () => "TopWeekPostsDiscoveryUnit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), s.e("TopWeekPostsDiscoveryUnit")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx"
					}
				});
			class st extends p.a.Component {
				constructor() {
					super(...arguments), this.onTopContentDismissed = () => {
						this.props.setTopContentDismissalPref()
					}
				}
				componentDidMount() {
					w.a.read(() => {
						Object(S.d)(S.c.Subreddit, this.props.isLoggedIn)
					})
				}
				render() {
					const {
						categoriesPlacementVariant: e,
						contentGateInfo: t,
						countrySort: s,
						exploreV2Variant: n,
						isInTrendingEntrypointExperiment: r,
						isPopular: o,
						isLoggedIn: a,
						language: i,
						layersEmbedEnabledOnSubreddit: c,
						layout: d,
						listingKey: l,
						match: m,
						railsWidgetsVariant: u,
						renderNSFWContentGate: b,
						showCreatePostBanner: g,
						sort: y,
						subredditPremiumEnabled: O,
						isTopContentDismissed: E,
						stellarRegistrationBannerEnabled: w,
						sendEvent: S,
						subreddit: _,
						subredditAboutInfo: N,
						subredditName: P,
						timeSort: k,
						topContent: Z,
						topContentDiscoveryUnit: te,
						topPostsVariant: re,
						isBlacklistedTopContentPage: ae,
						isRpanDuVisible: ie,
						rpanInjectionIndex: me,
						isFlairFilter: ue,
						walletRegistrationBannerEnabled: be
					} = this.props, ge = o && e, xe = !!ge && Object(he.e)(e), ye = !(xe || !n && !ge), ve = P.toLowerCase(), Oe = "/r/".concat(P, "/"), Ce = {
						className: xe ? Object(x.a)(Pe.a.SidebarRight, Pe.a.categories) : void 0,
						listingKey: l,
						listingName: ve
					}, Ee = Object(fe.a)(re), je = Object(fe.b)(re), we = Object(fe.c)(re);
					let Se;
					Object(v.a)(P) ? Se = Object(f.a)(P) ? p.a.createElement(I.a, Ce) : p.a.createElement(et, ke({}, Ce, {
						categoriesPlacementVariant: e,
						railsWidgetsVariant: u
					})) : _ && (Se = p.a.createElement($.a, ke({}, Ce, {
						className: Pe.a.sidebar,
						subredditId: _.id,
						subredditName: P,
						topPostsVariant: re
					})));
					const _e = Object(ce.a)(t, b, P);
					if (_e) return p.a.createElement(M.b, _e);
					const Ne = d === oe.g.Large,
						Me = o && r,
						De = _ ? _.id : void 0,
						Fe = !m.params.sort && Z && !Z.isSubscribed && Z.postIds && Z.postIds.length >= Te && !E && !ae && !Ee && !je;
					let Re;
					!_ || "sequence" !== _.name && "sequence_playground" !== _.name ? Me && (Re = p.a.createElement($e, {
						className: Object(x.a)(Pe.a.TrendingPosts, {
							[Pe.a.large]: xe
						}),
						showCardView: this.props.layout === oe.g.Large
					})) : Re = p.a.createElement("div", {
						className: Object(x.a)(Pe.a.iframeContainer, {
							[Pe.a.mShowCardView]: this.props.layout === oe.g.Large
						})
					}, p.a.createElement("iframe", {
						className: Pe.a.iframe,
						src: "https://www.reddit.com/sequence/embed",
						style: {
							overflow: "hidden"
						}
					}));
					const Ae = {},
						We = d === oe.g.Classic ? Pe.a.classicChild : d === oe.g.Compact ? Pe.a.compactChild : Pe.a.cardChild;
					if (O && _ && d === oe.g.Large && (Ae[0] = {
							estHeight: 487,
							id: "newbie-banner-".concat(d, "-").concat(l),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(F.a, {
									className: Object(x.a)(t, Pe.a.newbieBanner)
								})
							}
						}, Ae[3] = {
							estHeight: 256,
							id: "lfg-banner-".concat(d, "-").concat(l),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(D.a, {
									className: Object(x.a)(t, Pe.a.childLayoutClass),
									subredditId: _.id
								})
							}
						}), be && _ && (Ae[1] = {
							estHeight: 384,
							id: "wallet-registration-".concat(d, "-").concat(l),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(H.a, {
									className: Object(x.a)(t, We),
									subredditId: _.id
								})
							}
						}), w && _ && (Ae[2] = {
							estHeight: 200,
							id: "stellar-registration-".concat(d, "-").concat(l),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(U.a, {
									className: Object(x.a)(t, We),
									subredditId: _.id
								})
							}
						}), !o && we && k !== j.Pb.WEEK && d === oe.g.Large) {
						const e = Object(C.a)(P, j.N.TOP, {
							t: j.Pb.WEEK
						});
						Ae[Le] = {
							estHeight: 0,
							id: "top-week-posts-".concat(d, "-").concat(l),
							render: t => {
								let {
									className: s
								} = t;
								return p.a.createElement(tt, {
									className: s,
									listingKey: e,
									subredditName: P
								})
							}
						}
					}
					if (ie) {
						const {
							child: e,
							idx: t
						} = Object(J.a)({
							children: Ae,
							desiredIndex: me,
							layout: d,
							listingKey: l,
							listingName: "r/".concat(P),
							sendEvent: S
						});
						Ae[t] = e
					}
					const He = {
							baseUrl: Oe,
							countrySort: s,
							sort: y,
							subredditId: De,
							timeSort: k
						},
						Ue = ue ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Ve = Object(v.a)(P),
						Ge = _ && c && p.a.createElement(Ie, {
							subredditId: _.id,
							subredditName: P
						}),
						Ke = _ && _.subscribers;
					return p.a.createElement(X.a, {
						subredditId: De
					}, p.a.createElement(le.a, {
						subredditId: De,
						className: Object(x.a)(Pe.a.Container, this.props.className),
						fitPageToContent: !0,
						navBar: !Ve && p.a.Children.toArray([p.a.createElement(V.a, {
							headerText: _ ? _.name : P,
							disableFullscreen: Ne,
							isTopBannerVariant: !0,
							subredditOrProfile: _,
							url: Oe
						}), p.a.createElement(L.a, {
							layout: d,
							subreddit: _ || void 0,
							subredditId: De,
							subredditName: P,
							subredditUrl: Oe
						})]),
						trendingUnit: Re,
						contentNavBar: p.a.createElement(p.a.Fragment, null, ye && p.a.createElement(T.default, {
							baseUrl: se.c[ne.d.Explore],
							category: ne.d.Popular
						}), Ve && p.a.createElement(z.a, He)),
						content: p.a.createElement(p.a.Fragment, null, _ && _.isQuarantined && p.a.createElement(K.a, {
							subredditName: P
						}), _ && g && p.a.createElement(B.a, {
							subreddit: _,
							language: i,
							listingKey: l,
							listingName: ve
						}), Me && p.a.createElement(Y.a, {
							className: Pe.a.duHeader
						}, p.a.createElement(h.c, null, "Popular posts")), Fe && p.a.createElement(Be, {
							discoveryUnit: te,
							subredditName: _ ? _.name : P,
							topContent: Z,
							onCloseClick: this.onTopContentDismissed
						}), !Ve && a && !(N && N.userIsBanned) && p.a.createElement(G.a, {
							subredditName: P
						}), !Ve && p.a.createElement(A.a, He), p.a.createElement(q.a, null), p.a.createElement(ee.a, {
							handlePillClick: this.props.refreshFeed,
							listingKey: l,
							subredditName: P,
							subscriberCount: Ke
						}), p.a.createElement(Q.a, {
							injectChildren: Ae,
							listingKey: l,
							listingName: ve,
							listingViewed: (e, t) => Object(de.d)(l, y, t, e, k),
							noPostsComponent: () => p.a.createElement(R.a, {
								listingName: ve,
								sort: y,
								subreddit: _ || void 0
							}),
							onLoadMore: Ue,
							inSubredditOrProfile: !Object(v.a)(P)
						}), p.a.createElement(W.a, null)),
						sidebar: xe ? null : Se,
						sidebars: xe ? [p.a.createElement(pe.a, {
							categoriesPlacementVariant: e,
							topicName: se.b.Popular
						}), Se] : void 0,
						layerEmbed: Ge
					}))
				}
			}
			t.default = Me(Ze(Object(te.b)(st)))
		},
		"./src/reddit/pages/Topic/SidebarLeft/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-pages-Topic-SidebarLeft-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-pages-Topic-SidebarLeft-index").then(s.bind(null, "./src/reddit/pages/Topic/SidebarLeft/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/pages/Topic/SidebarLeft/index.tsx"
				}
			})
		},
		"./src/reddit/selectors/PublicAccessNetwork/discorveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = Object(n.a)(o.a, o.b, a.K, (e, t) => {
					let {
						listingName: s
					} = t;
					return s
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(i.n)(e, {
						subreddit: s
					})
				}, i.l, (e, t, s, n, o, a) => {
					if (!e) return !1;
					if (a.isPermanentlyCanceled) return !1;
					if (s) return !1;
					if (t) return !!o && o.show_discovery_unit;
					if (!a.global.viewer_enabled) return !1;
					return [r.R, "r/popular"].indexOf(n) > -1
				}),
				d = Object(n.a)(o.b, (e, t) => {
					let {
						listingName: s
					} = t;
					return s
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(i.n)(e, {
						subreddit: s
					})
				}, i.m, (e, t, s, n) => {
					if (!e) {
						const e = "home" === t ? n.home_feed_discovery_unit_index : "r/popular" === t ? n.popular_feed_discovery_unit_index : r.h;
						return "number" == typeof e ? e : r.h
					}
					return s ? s.discovery_unit_index : r.h
				})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				p = s.n(m)()(e => Object(r.a)(Object(n.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var b = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			s.d(t, "l", (function() {
				return E
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "f", (function() {
				return L
			})), s.d(t, "k", (function() {
				return M
			})), s.d(t, "m", (function() {
				return B
			})), s.d(t, "j", (function() {
				return D
			})), s.d(t, "e", (function() {
				return F
			})), s.d(t, "a", (function() {
				return W
			})), s.d(t, "i", (function() {
				return H
			})), s.d(t, "b", (function() {
				return U
			})), s.d(t, "d", (function() {
				return V
			}));
			const h = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				x = e => e.publicAccessNetwork.history.cursor,
				y = e => e.publicAccessNetwork.history.visitOrder,
				f = e => e.publicAccessNetwork.hlsStreams,
				v = Object(n.a)(f, e => e.ended),
				O = Object(n.a)(f, e => e.removed),
				C = Object(n.a)(e => e.publicAccessNetwork.models, v, O, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = R(n, i.b.ENDED) ? i.b.ENDED : n,
							o = s.stream.vod_accessible;
						return r === n && !0 === o ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: r,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = R(n, i.b.ENDED) ? i.b.ENDED : n,
							o = s.stream.vod_accessible;
						return r === n && !1 === o ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: r,
									vod_accessible: !1
								})
							})
						})
					}, n)
				}),
				E = (e, t) => {
					return C(e)[Object(a.k)(t)]
				},
				j = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => p(t.listingName)(e, t), C, h, c.f, d.b, (e, t, s, n, r, c) => {
					if (c) {
						const o = [];
						if (e) {
							const t = Object(a.k)(e);
							s[t] && o.push(t)
						}
						const c = o.concat(t),
							d = [...new Set(c)],
							l = new Set([...n, ...r]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== i.b.KILLED && t.stream.state !== i.b.PURGED
						})
					}
					const d = new Set([...n, ...r]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== o.o).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.b.KILLED && e.stream.state !== i.b.PURGED).map(e => e.post.id)
				}),
				w = Object(n.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, C, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: n
					} = t;
					return j(e, {
						listingName: s,
						streamIdFromPath: n
					})
				}, (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				S = Object(n.a)(y, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return w(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				_ = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, C, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return w(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, g, (e, t, s, n) => {
					if (!s.length) return;
					const r = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = r.find(e => e.stream.state === i.b.IS_LIVE);
					if (o) return o.post.id;
					const a = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				N = Object(r.a)(Object(n.a)(_, C, (e, t) => e ? t[e] : void 0)),
				P = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(a.k)(s) : void 0
				}, _, h, c.f, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return w(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t, s, n, r) => !e || s.includes(e) || n.includes(e) ? t || r[0] : e),
				k = Object(n.a)(x, y, S, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				I = Object(n.a)(x, y, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				T = Object(r.a)(Object(n.a)(P, C, (e, t) => e ? t[e] : void 0)),
				L = Object(r.a)(Object(n.a)(k, C, (e, t) => e ? t[e] : void 0)),
				M = Object(r.a)(Object(n.a)(I, C, (e, t) => e ? t[e] : void 0)),
				B = Object(r.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, C, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))),
				D = Object(n.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e]),
				F = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? E(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function R(e, t) {
				const s = {
					[i.b.NOT_STARTED]: 0,
					[i.b.PUBLISHED]: 1,
					[i.b.IS_LIVE]: 2,
					[i.b.DISCONNECTED]: 2,
					[i.b.ENDED]: 3,
					[i.b.KILLED]: 4,
					[i.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const A = Object(n.a)(P, g, (e, t) => e && t.timestamps[e] || 0);
			var W;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(W || (W = {}));
			const H = Object(n.a)(P, C, b.b, (e, t, s) => {
					if (s) return W.INTRO;
					const n = e && t[e];
					if (!n) return W.UNAVAILABLE;
					const r = n.stream.state;
					return r === i.b.IS_LIVE || r === i.b.DISCONNECTED ? W.LIVE : r === i.b.ENDED && n.stream.vod_accessible ? W.VOD : W.UNAVAILABLE
				}),
				U = Object(n.a)(T, H, b.b, l.c, l.p, (e, t, s, n, r) => s ? n : e ? t === W.LIVE || t === W.VOD ? e.stream.hls_url : r : void 0),
				V = Object(n.a)(T, H, A, (e, t, s) => e ? t === W.LIVE ? e.broadcast_time : t === W.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				i = Object(n.a)(a, o.o, (e, t) => t && !e.isIntroFinished),
				c = Object(n.a)(a, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/categoriesPlacement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = (s("./src/lib/makeOnboardingSubredditsKey/index.ts"), s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/countrySorts.ts")),
				o = s("./src/reddit/selectors/category.ts"),
				a = (s("./src/reddit/selectors/experiments/categoriesPlacement.ts"), s("./src/reddit/selectors/meta.ts"));
			s("./src/reddit/selectors/subreddit.ts");
			Object(o.c)();
			const i = Object(n.a)(a.a, a.i, a.b, (e, t, s) => e || t || r.a[s] || s)
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/platform.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = new Set(["pollstest", "whatssnoo"]),
				c = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl"]),
				d = e => i.has(e.toLowerCase()) || c.has(e.toLowerCase()),
				l = e => i.has((Object(o.e)(e) || "").toLowerCase()) || c.has((Object(o.e)(e) || "").toLowerCase()) && Object(r.c)(e, {
					experimentEligibilitySelector: a.G,
					experimentName: n.ib
				}) === n.pb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "o", (function() {
				return f
			})), s.d(t, "p", (function() {
				return v
			})), s.d(t, "n", (function() {
				return O
			})), s.d(t, "k", (function() {
				return C
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "s", (function() {
				return j
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "f", (function() {
				return S
			})), s.d(t, "q", (function() {
				return _
			})), s.d(t, "m", (function() {
				return N
			})), s.d(t, "r", (function() {
				return P
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/endpoints/governance/crypto.ts"),
				o = s("./src/reddit/featureFlags/index.ts"),
				a = s("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = s("./src/reddit/selectors/postCreations.ts");
			const c = [],
				d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				m = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = j(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				u = (e, t) => {
					const s = C(e, t);
					if (s) return s.mainHeader
				},
				p = (e, t) => {
					const s = C(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				b = (e, t) => {
					const s = C(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : d
				},
				h = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(a.b)(e)) {
						const t = Object(i.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const s = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return s && !e
					}
					return s
				},
				x = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				y = (e, t) => {
					const s = Object(n.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || c
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				O = (e, t) => {
					const s = _(e, t);
					return s && s.decimals ? "1" + "0".repeat(s.decimals) : "1"
				},
				C = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				E = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				j = (e, t) => {
					const s = E(e, t);
					return s && s.walletProvider
				},
				w = (e, t) => {
					const s = j(e, t),
						n = E(e, t);
					return s && s.provider || n && n.provider
				},
				S = (e, t) => {
					const s = w(e, t);
					return s === r.a.Ethereum || s === r.a.Rinkeby
				},
				_ = (e, t) => {
					const s = j(e, t),
						n = w(e, t);
					if (s && !s.inTransition && n === r.a.Stellar) return {
						address: s.extra && s.extra.issuerAddress || "",
						decimals: s.extra && s.extra.decimals || 7,
						symbol: s.extra && s.extra.token || "PHOTON"
					};
					const o = s && s.extra && s.extra.contracts,
						a = o && o.unlocked;
					return a && {
						address: a.address,
						symbol: a.token || "",
						decimals: a.decimals || 18,
						image: a.image
					}
				},
				N = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = j(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				P = (e, t) => {
					const s = E(e, t);
					return !!s && !!s.walletProvider && !s.walletProvider.inTransition
				}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=Subreddit.53ea1476a38343f5cc9a.js.map