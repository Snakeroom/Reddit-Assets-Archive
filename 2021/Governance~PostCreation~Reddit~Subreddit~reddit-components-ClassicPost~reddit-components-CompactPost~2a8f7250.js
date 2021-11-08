// https://www.redditstatic.com/desktop2x/Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250.c521c856e3c85c4b5424.js
// Retrieved at 11/8/2021, 10:50:15 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"], {
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/intlSupport.ts");

			function o(e, {
				showDay: t,
				useUtc: n,
				shortMonths: o,
				locale: i = r.C
			} = {}) {
				const a = new Date(e * r.Qb);
				return s.a ? new Intl.DateTimeFormat(i, {
					month: o ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(a) : a.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/index.ts");
			t.a = (e, t = r.C) => {
				return new Date(1e3 * e).toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(r.a)(s)
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return F
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return W
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				a = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subscription/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var f = n("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				h = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				x = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				y = n("./src/reddit/models/GqlTopLevelField.ts"),
				g = n("./src/reddit/models/User/index.ts");

			function O(e) {
				const t = [],
					n = [],
					r = {},
					s = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== g.c.AvailableRedditor || !a.node.profile) continue;
					const e = Object(h.a)(a.node.profile);
					r[e.id] = e;
					const {
						isFavorite: n
					} = a.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== y.a.Subreddit) continue;
					const e = Object(x.a)(a.node);
					s[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: r,
					subreddits: s
				}
			}
			var j = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/profile.ts"),
				k = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/subscriptions.ts"),
				_ = n("./src/reddit/selectors/user.ts");
			const T = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				I = Object(o.a)(d.c),
				S = Object(o.a)(d.b),
				E = Object(o.a)(d.a),
				N = Object(o.a)(d.h),
				F = (Object(o.a)(d.i), Object(o.a)(d.g), () => async (e, t, {
					gqlContext: n
				}) => {
					const r = t();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					e(S());
					const s = await Object(f.a)(n());
					if (s.ok) {
						const t = O(s.body.data);
						e(I(t))
					} else e(E({
						error: s.error
					}))
				}),
				w = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				P = (e, t, n) => async (o, d, {
					apiContext: m
				}) => {
					let p = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(k.B)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(C.m)(d(), e.name),
						name: `${s.gc}${e.name}`,
						type: e.type
					});
					if (!Object(_.K)(d())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(a.k)());
					const b = Object(_.k)(d());
					if (b) {
						const t = p.length,
							n = e.length;
						if (p = p.filter(e => !w(b, e)), (e = e.filter(e => !w(b, e))).length !== n || p.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.f)(Object(l.e)(e, j.b.Error)))
						}
						if (!e.length && !p.length) return
					}
					if (o(N({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(v.b)(d()),
							userIsSubscriber: t,
							widgetId: n
						})), (await Object(f.c)(m(), {
							subredditNames: p.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : r.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [r.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							s = r.fbt._("Sucсessfully followed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1S5AXJ"
							}),
							a = r.fbt._("Sucсessfully unfollowed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "2XWHyB"
							}),
							c = r.fbt._("Sucсessfully joined {communityname}", [r.fbt._param("communityname", n)], {
								hk: "3Al8aF"
							}),
							d = r.fbt._("Sucсessfully left {communityname}", [r.fbt._param("communityname", n)], {
								hk: "2w5JFZ"
							});
						o(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : a : t ? c : d
						}))
					} else {
						o(N({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(v.b)(d()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const s = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.f)(Object(l.e)(s, j.b.Error)))
					}
				}, L = Object(o.a)(d.f), D = e => async (t, n, {
					apiContext: r
				}) => {
					const s = n(),
						o = Object(k.I)(s, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === u.a.SUBREDDIT ? o.name : `u_${o.name}`,
						a = s.subscriptions.favoriteSubredditOrder || [],
						c = s.subscriptions.favoriteProfileOrder || [],
						d = a.indexOf(e.id),
						m = c.indexOf(e.id),
						p = -1 === d && -1 === m,
						b = s.subreddits.models,
						h = s.profiles.models;
					t(L({
						makeFavorite: p,
						identifier: e,
						subredditModels: b,
						profileModels: h
					}));
					const x = {
							type: e.type,
							name: o.name
						},
						y = () => Object(k.cb)(n(), {
							identifier: x
						});
					(y() || (await t(P([x], !0)), y())) && ((await Object(f.b)(r(), i, p)).ok || (t(L({
						makeFavorite: !p,
						identifier: e,
						subredditModels: b,
						profileModels: h
					})), t(Object(l.f)({
						text: T(),
						kind: j.b.Error
					}))))
				}, A = Object(o.a)(d.d), R = e => async (t, n, {
					apiContext: r
				}) => {
					const o = n().multireddits.models,
						i = () => {
							t(Object(l.f)({
								text: T(),
								kind: j.b.Error
							}))
						},
						a = o[e];
					if (!a) return void i();
					const c = !a.isFavorited;
					t(A({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: s.ib.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(r(), e, c)).ok || (t(A({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), i())
				}, M = Object(o.a)(d.e), W = e => async (t, n, {
					apiContext: o
				}) => {
					const i = n(),
						a = i.multireddits.models;
					if (!Object(_.K)(i)) return;
					const c = (e = !0) => {
							t(Object(l.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "2I4uia"
								}) : r.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: j.b.Error
							}))
						},
						d = a[e];
					if (!d) return void c();
					const u = !d.isFollowed;
					t(M({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: s.ib.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, u)).ok || (t(M({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), c(u))
				}
		},
		"./src/reddit/components/CategoryTag/index.m.less": function(e, t, n) {
			e.exports = {
				metaFlair: "_7_d4sJjd2oYzaJuU_QpOI",
				"m-lightboxHeader": "_1rtoCmW_7bFJWYffSOwt4R",
				mLightboxHeader: "_1rtoCmW_7bFJWYffSOwt4R"
			}
		},
		"./src/reddit/components/CategoryTagList/index.m.less": function(e, t, n) {
			e.exports = {
				categoryTagWrapper: "_13jLUpnQtcA8FXyw5Kv06q"
			}
		},
		"./src/reddit/components/CategoryTagList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/lib/addQueryParams/index.ts");
			const b = (e, t, n, r, s) => {
				const o = s || "*:*",
					i = n || l.W;
				return Object(p.a)("/search", {
					q: o,
					sort: i,
					t: r,
					category_name: e,
					category: t
				})
			};
			var f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				h = n("./src/reddit/selectors/telemetry.ts");
			const x = (e, t) => n => ({
				source: "post",
				action: "click",
				noun: "meta_flair",
				...h.defaults(n),
				correlationId: Object(f.c)(f.a.SearchResults),
				post: h.post(n, e),
				search: h.postFlairClickToSearch(n, t),
				subreddit: h.subreddit(n)
			});
			var y = n("./src/reddit/components/CategoryTag/index.m.less"),
				g = n.n(y);
			class O extends s.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const e = {
							id: this.props.category.categoryId,
							title: this.props.category.categoryName,
							eventType: u.a.SUBREDDIT,
							originElement: "meta_flair"
						};
						this.props.sendEvent(x(this.props.postId, e))
					}
				}
				render() {
					const e = this.props.category,
						t = this.props.inLightboxHeader,
						n = e.categoryId,
						r = e.categoryName,
						o = s.a.createElement("span", null, r);
					return s.a.createElement("span", {
						className: Object(d.a)(g.a.metaFlair, {
							[g.a["m-lightboxHeader"]]: t
						})
					}, s.a.createElement(m.a, {
						onClick: this.onClick,
						to: b(r, n, l.Wb.Relevance, l.ec.DAY),
						children: o
					}))
				}
			}
			var j = n("./src/reddit/components/CategoryTagList/index.m.less"),
				C = n.n(j);
			const k = Object(o.b)(() => Object(i.c)({
				labelNSFW: c.U
			}));
			t.a = k(Object(a.c)(({
				postCategories: e,
				postId: t,
				inLightboxHeader: n,
				sendEvent: r
			}) => s.a.createElement("span", {
				className: n ? void 0 : C.a.categoryTagWrapper
			}, e.map(e => s.a.createElement(O, {
				postId: t,
				category: e,
				key: e.categoryId,
				inLightboxHeader: n,
				sendEvent: r
			})))))
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, n) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, n) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return U
			})), n.d(t, "a", (function() {
				return H
			})), n.d(t, "b", (function() {
				return $
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				o = n.n(s),
				i = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Emoji/index.m.less"),
				f = n.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = p.a.wrapped(({
				backgroundImage: e,
				style: t,
				...n
			}) => c.a.createElement("div", h({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, n)), "EmojiDisplay", f.a);
			var y = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				g = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				O = n("./src/reddit/constants/colors.ts"),
				j = n("./src/reddit/constants/parameters.ts"),
				C = n("./src/reddit/controls/InternalLink/index.tsx"),
				k = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				v = n("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = n("./src/reddit/models/Flair/index.ts"),
				T = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = n("./src/reddit/components/Flair/index.m.less"),
				S = n.n(I);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = Object(g.a)(y.b),
				F = p.a.div("FlairWrapper", S.a),
				w = p.a.wrapped(d.a, "CloseButton", S.a),
				P = p.a.wrapped(Object(m.a)(({
					forceSmallEmojis: e,
					theme: t,
					...n
				}) => {
					const r = t;
					return c.a.createElement(x, E({
						style: {
							...L(!!e, r) || {}
						}
					}, n))
				}), "FlairEmojiDisplay", S.a),
				L = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				D = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[j.p]: r,
						[j.s]: t ? "1" : ""
					})
				},
				A = e => e.isFlairFilter ? c.a.createElement(C.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(C.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: D(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class R extends c.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = c.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[S.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(T.a)(this.props).flair,
							color: `${U(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(w, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(v.a, {
						className: S.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(T.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(N, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(A, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const M = Object(m.a)(R),
				W = Object(m.a)(e => {
					let t = "",
						n = !1;
					const r = e.richtext.map((r, s) => {
						if (r.e === _.c.Emoji) {
							const o = r;
							return t += o.a, n = !0, c.a.createElement(P, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: o.u,
								key: s,
								title: o.a
							})
						} {
							const e = r;
							return t += e.t, c.a.createElement("span", {
								key: s
							}, e.t)
						}
					});
					let s;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (s = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const o = c.a.createElement(F, {
						className: Object(u.a)(e.className, {
							[S.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...s,
							backgroundColor: e.backgroundColor || Object(T.a)(e).flair,
							color: `${U(e)}`
						}
					}, r, e.isSelected && c.a.createElement(w, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(v.a, {
						className: S.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(T.a)(e).flair
						}
					})));
					return c.a.createElement(A, {
						flair: o,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				U = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(T.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(k.a)(Object(T.a)(e).post, O.b.black, O.b.white) : e.textColor === _.e.Dark ? O.b.black : O.b.white,
				H = p.a.wrapped(M, "TextFlair", S.a),
				K = p.a.wrapped(W, "RichTextFlair", S.a),
				B = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.i)(.1, Object(T.a)(o()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				q = p.a.wrapped(e => {
					const t = B(e),
						n = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(A, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", S.a);

			function $(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: s,
					isFlairFilter: o,
					isSelected: i,
					onClick: a,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: f
				} = e, h = Object(u.a)({
					[S.a.flairVariant]: o,
					[S.a.small]: o && !e.large,
					[S.a.large]: o && e.large
				}, t);
				switch (s.type) {
					case _.f.Richtext:
						return n || !s.richtext ? null : c.a.createElement(K, {
							backgroundColor: s.backgroundColor,
							className: h,
							forceSmallEmojis: b,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: s.richtext,
							subredditName: m,
							textColor: s.textColor,
							to: f
						});
					case _.f.Text:
						return n || !s.text ? null : c.a.createElement(H, {
							backgroundColor: s.backgroundColor,
							className: h,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: f
						});
					case _.f.Meta:
						return c.a.createElement(H, {
							backgroundColor: s.backgroundColor,
							className: t,
							isFlairFilter: o,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: f
						});
					case _.f.Nsfw:
					case _.f.Spoiler:
						return c.a.createElement(q, {
							className: t,
							text: s.text,
							type: s.type
						});
					case _.f.Quarantined:
						return null;
					case _.f.Oc:
						return c.a.createElement(H, {
							backgroundColor: O.b.alienblue,
							text: s.text,
							textColor: _.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return s.text ? c.a.createElement(H, {
							backgroundColor: s.backgroundColor,
							className: h,
							isFlairFilter: o,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							redditStyle: !p,
							to: f
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/noop.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/Flair/index.tsx"),
				l = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.U
				}),
				b = Object(a.b)(p),
				f = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = b(({
				className: e,
				isFlairFilter: t,
				onClick: n,
				onMouseDown: r,
				disabled: o = !1,
				flair: a,
				labelNSFW: c,
				subredditName: m
			}) => {
				const p = !!a.find(e => e.type === u.f.Richtext),
					b = a.map(e => {
						if (e.type === u.f.Text && p) return null;
						if (!c && e.type === u.f.Nsfw) return null;
						const a = Object(l.j)(e),
							b = `/r/${m}/`,
							h = r ? () => r(e) : s.a;
						return i.a.createElement(d.b, {
							isFlairFilter: t,
							key: f(e),
							onClick: n,
							onMouseDown: h,
							disabled: o,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: m,
							to: Object(l.e)(b, a)
						})
					});
				return i.a.createElement("div", {
					className: e
				}, b)
			})
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return k
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/CategoryTagList/index.tsx"),
				l = n("./src/reddit/components/FlairList/index.tsx"),
				u = n("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/correlationIdTracker.ts"),
				b = n("./src/reddit/helpers/flair.ts"),
				f = n("./src/reddit/helpers/trackers/postFlair.ts"),
				h = n("./src/reddit/models/Flair/index.ts"),
				x = n("./src/reddit/selectors/postFlair.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/components/FlairWrapper/index.m.less"),
				j = n.n(O);
			const C = Object(i.b)(() => Object(a.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.q)(e, {
						pageLayer: t
					}),
					isPostFlairEnabled: (e, t) => Object(x.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, {
						post: t
					}) => Object(y.x)(e, t),
					subredditName: (e, {
						post: t
					}) => Object(g.Q)(e, {
						subredditId: t.belongsTo.id
					}).name
				})),
				k = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: r.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: h.f.Oc
					}), e.isMeta && t.push({
						text: r.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: h.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = C(({
				className: e,
				disableFlair: t,
				flairPosition: n,
				isFlairFilter: r,
				isPostFlairEnabled: s,
				nowrap: i,
				post: a,
				postCategories: m,
				sendEvent: x,
				showCategoryTag: y,
				subredditName: g,
				titleFlair: O
			}) => {
				const C = Object(u.b)(),
					v = n === h.b.Left,
					_ = O || k(a),
					T = [];
				let I = [];
				v ? _.map(e => {
					Object(b.q)(e.type) ? T.push(e) : I.push(e)
				}) : I = _;
				const S = i ? j.a.flairNoWrap : T.length > 0 || I.length > 0 || m && y ? j.a.flairWrapper : null,
					E = e => {
						const t = {
							id: a.belongsTo.id,
							eventType: a.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(p.d)(p.a.SearchResults), x && x(Object(f.a)(a.id, t))
					},
					N = e => {
						Object(p.d)(p.a.SearchResults), x && x(Object(f.e)(e, a.id))
					},
					F = !(t || !_ || !_.length),
					w = !!(y && m && m.length);
				return F || w ? o.a.createElement("div", {
					className: Object(c.a)(S, e),
					"data-ignore-click": C
				}, F && T && o.a.createElement(l.a, {
					className: j.a.flairList,
					isFlairFilter: r,
					key: "leftFlair",
					onClick: E,
					onMouseDown: N,
					flair: T,
					disabled: !s,
					subredditName: g
				}), F && o.a.createElement(l.a, {
					className: j.a.flairList,
					isFlairFilter: r,
					key: "rightFlair",
					onClick: E,
					onMouseDown: N,
					flair: I,
					disabled: !s,
					subredditName: g
				}), w && o.a.createElement(d.a, {
					inLightboxHeader: i,
					postId: a.id,
					postCategories: m
				})) : null
			})
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(r.a)({
				ErrorComponent: o,
				getComponent: () => Object(s.a)(() => n.e("SubredditHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/timeAgo/index.ts"),
				i = n("./src/reddit/hooks/useLocale.ts");
			var a = function({
					seconds: e,
					...t
				}) {
					var n;
					const r = Object(i.a)(),
						a = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : r
						};
					return s.a.createElement(s.a.Fragment, null, Object(o.d)(e, a))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var d = function({
					seconds: e,
					...t
				}) {
					var n;
					const r = Object(i.a)(),
						o = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : r
						};
					return s.a.createElement(s.a.Fragment, null, Object(c.a)(e, o))
				},
				l = n("./src/lib/constants/index.ts");
			var u = function({
					seconds: e,
					locale: t
				}) {
					const n = Object(i.a)(),
						r = null != t ? t : n;
					return s.a.createElement(s.a.Fragment, null, function(e, t = l.C) {
						const n = e * l.Qb;
						return new Date(n).toLocaleString(t, {
							weekday: "short",
							month: "short",
							year: "numeric",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							timeZoneName: "long"
						})
					}(e, r))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function b(e, t = l.C) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t, n = !1, r = l.C) {
				const s = Object(p.e)(e, t),
					o = new Date(e * l.Qb);
				let i;
				if (s === p.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === p.a.Future ? i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(o, r) : function(e, t = l.C) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, r) : s === p.a.Past && (i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(o, r)), `${i} @ ${function(e,t=l.C){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,r)}`
			}
			var h = function({
				startTime: e,
				endTime: t,
				isLive: n,
				locale: r
			}) {
				const o = Object(i.a)(),
					a = null != r ? r : o;
				return s.a.createElement(s.a.Fragment, null, f(e, t, n, a))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return x
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
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
			const b = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				h = e => s.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				x = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				y = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				g = Object(c.a)(x, [a.a.Click, a.a.Keydown]),
				O = Object(c.a)(h, [a.a.Click, a.a.Keydown]),
				j = Object(o.b)(y);
			t.c = j(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(g, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(O, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(o.a)(e, t);
				class r extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(n, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(r)
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js");
			const s = Object(r.createContext)(!1);

			function o() {
				return Object(r.useContext)(s)
			}
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, n) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return M
			}));
			var r = n("./src/lib/isUrl/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = n("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = n("./src/lib/constants/icons.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/constants/elementClassNames.ts"),
				b = n("./src/reddit/controls/ContentType/index.m.less"),
				f = n.n(b);
			const h = e => Object(i.a)(f.a.contentTypeIcon, e.className),
				x = {
					embed: u.a.embed,
					gallery: u.a.media_gallery,
					gifvideo: u.a.gif_post,
					image: u.a.image_post,
					meta: u.a.poll_post,
					rpan: u.a.video_live,
					rtjson: u.a.text_post,
					text: u.a.text_post,
					video: u.a.video_post,
					liveaudio: u.a.audio
				};

			function y(e) {
				const t = h(e),
					n = e.type && x[e.type] || u.a.link_post;
				return o.a.createElement(m.a, {
					name: n,
					className: Object(i.a)({
						[p.a]: n === u.a.link_post
					}, t)
				})
			}
			var g = n("./src/reddit/controls/OutboundLink/index.tsx"),
				O = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = n("./src/reddit/models/Media/index.ts"),
				C = n("./src/reddit/models/Theme/index.ts"),
				k = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = n("./src/telemetry/models/Outbound.ts"),
				_ = n("./src/reddit/components/Thumbnail/index.m.less"),
				T = n.n(_);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => e.placeholderImage || Object(k.a)(e).placeholderImage,
				E = e => e.placeholderImage ? "cover" : Object(k.a)(e).placeholderImagePosition,
				N = c.a.span("LinkText", T.a),
				F = ({
					className: e,
					onClick: t,
					children: n
				}) => o.a.createElement("div", {
					onClick: t,
					className: Object(i.a)(T.a.linkIcon, e)
				}, n),
				w = e => o.a.createElement("img", {
					alt: e.alt,
					className: Object(i.a)(T.a.hiddenImage, e.className)
				}),
				P = e => {
					const t = o.a.createRef(),
						{
							src: n,
							errorSrc: r
						} = e;
					return n && r && Object(l.a)(n).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${r})`)
					}), o.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(i.a)(T.a.thumbnail, T.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(k.a)(e).button : Object(k.a)(e).line
						}
					}, e.isOutbound && o.a.createElement(F, {
						className: e.linkIconClassName
					}, o.a.createElement(O.a, {
						className: Object(i.a)(T.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(N, {
						className: e.linkTextClassName
					}, e.text)), o.a.createElement(w, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				L = e => e.isOutbound ? Object(k.a)(e).button : e.placeholderImage ? "transparent" : Object(k.a)(e).line,
				D = e => {
					const t = S(e),
						n = t && {
							background: Object(C.g)(Object(k.a)(e).placeholder, t, E(e))
						};
					return o.a.createElement("div", {
						className: Object(i.a)(T.a.thumbnail, T.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...n,
							borderColor: L(e)
						}
					}, (!e.placeholderImage || e.showContentType) && o.a.createElement(y, {
						className: Object(i.a)(e.contentTypeClassName, T.a.contentType, {
							[T.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && o.a.createElement(F, {
						className: e.linkIconClassName
					}, o.a.createElement(O.a, {
						className: Object(i.a)(T.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(N, {
						className: e.linkTextClassName
					}, e.text)))
				},
				A = e => o.a.createElement(P, I({}, e, {
					className: Object(i.a)(T.a.blurredThumbnail, e.className)
				})),
				R = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: n,
						contentTypeClassName: s,
						crosspost: a,
						forceShowNSFW: c,
						isCommentsPage: d,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: m,
						outboundLinkIconClassName: p,
						post: b,
						redditStyle: f,
						removeLink: h,
						showContentType: x,
						templatePlaceholderImage: y,
						text: O,
						theme: C,
						usePreview: k
					} = e, _ = !C.subredditContext.shouldShowNSFWContent && (b.isNSFW || !(!a || !a.isNSFW)) && !c, I = S({
						placeholderImage: y,
						redditStyle: f,
						theme: C
					}), E = M(e), N = d ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage, F = U(b, t, I, _, O, C, E, l, x, h, f, u, m, p, s), w = Object(j.D)(b);
					return Object(r.a)(w) && !h && w.indexOf("redditmedia") < 0 ? o.a.createElement("div", {
						className: Object(i.a)(T.a.container, k ? T.a.usePreview : "", n)
					}, o.a.createElement(g.b, {
						href: Object(j.D)(b),
						isSponsored: b.isSponsored,
						postId: b.id,
						source: b.source,
						sourceElement: N
					}, F)) : o.a.createElement("div", {
						className: Object(i.a)(T.a.container, k ? T.a.usePreview : "", n)
					}, F)
				}),
				M = ({
					crosspost: e,
					post: t,
					url: n,
					usePreview: r
				}) => {
					if (n) return n;
					const {
						preview: s,
						media: o,
						thumbnail: i
					} = e || t;
					return r && s ? s.url : t.isSponsored && s && "default" === i.url ? s.url : W(o) ? o.scrubberThumbSource : i.url
				},
				W = e => !!e && e.type === j.o.LIVEVIDEO,
				U = (e, t, n, s, a, c, l, u, m, p, b, f, h, x, y) => {
					const g = e.source && !e.isSponsored || !1;
					if (Object(r.a)(l)) {
						const n = W(e.media),
							r = n ? {
								errorSrc: d.U
							} : {},
							u = Object(i.a)(t, {
								[T.a.verticallyCenterThumbnail]: n
							});
						return s ? o.a.createElement(A, I({
							"data-click-id": "image",
							src: l
						}, r, {
							className: u,
							isOutbound: g && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: a,
							theme: c
						})) : o.a.createElement(P, I({
							alt: e.title,
							className: u,
							src: l
						}, r, {
							isOutbound: g && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: a,
							theme: c
						}))
					}
					return o.a.createElement(D, {
						className: t,
						contentTypeClassName: y,
						placeholderImage: n,
						isMeta: u,
						isOutbound: g && !p,
						linkIconClassName: f,
						linkTextClassName: h,
						outboundLinkIconClassName: x,
						redditStyle: b,
						showContentType: m,
						text: a,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = R
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, n) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/constants/elementClassNames.ts"),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = n.n(i);
			t.a = r.a.wrapped(o.b, "styledOutboundLink", {
				styledOutboundLink: `${a.a.styledOutboundLink} ${s.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, n) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./src/redditGQL/operations/SubscribedSubreddits.json"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(i.a)(e, r);
			const l = (e, {
					subredditIds: t,
					subredditNames: n,
					subscribe: r
				}) => Object(o.a)(Object(a.a)(e, [c.a]), {
					method: s.ib.POST,
					endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
					data: {
						action: r ? "sub" : "unsub",
						sr: t && t.join(",") || void 0,
						sr_name: n && n.join(",") || void 0,
						api_type: "json"
					}
				}),
				u = (e, t, n) => Object(o.a)(Object(a.a)(e, [c.a]), {
					method: s.ib.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: n ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/constants/comments.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case r.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case r.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case r.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				d = (e, t) => e.type === r.a.MoreComments ? t[e.id].numComments : 1,
				l = (e, t, n, r) => {
					let o = Object(s.n)(r, {
							commentLink: t,
							commentsPageKey: e
						}),
						i = t;
					for (; o && o.depth > n && o.prev && (i = o.prev, (o = Object(s.n)(r, {
							commentLink: i,
							commentsPageKey: e
						})) && !(o.depth <= n)););
					return i.id
				},
				u = (e, t, n) => {
					const {
						commentLists: r,
						comments: s
					} = e, {
						head: a
					} = r[t];
					if (a) return Object.keys(s).filter(e => {
						const t = s[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(i.c)(e, {
								experimentEligibilitySelector: i.a,
								experimentName: o.F,
								expEventOverride: t
							});
							return !!(Object(o.df)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/RichTextJson/index.ts");
			const s = "giphy|",
				o = "emote|",
				i = "|downsized";

			function a(e, t) {
				return s + e + (t ? i : "")
			}

			function c(e) {
				return !!(null == e ? void 0 : e.startsWith(s))
			}

			function d(e) {
				return !!(null == e ? void 0 : e.startsWith(o))
			}

			function l(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(c)
			}

			function u(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(d)
			}

			function m(e) {
				let t = e.substring(s.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function p(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...p(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function b(e) {
				return p(e, r.F).map(e => e.id)
			}

			function f(e) {
				return p(e, e => e.e === r.o).map(e => e.u)
			}
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/helpers/flair.ts");
			const i = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: "post_flair",
					...s.defaults(n),
					actionInfo: s.actionInfo(n),
					correlationId: Object(r.c)(r.a.SearchResults),
					post: s.post(n, e),
					search: {
						...s.postFlairClickToSearch(n, t),
						query: `flair_name:'${t.postFlairName}'`,
						queryId: Object(r.c)(r.a.SearchResults)
					},
					subreddit: s.subreddit(n)
				}),
				a = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...s.defaults(t),
					actionInfo: s.actionInfo(t),
					correlationId: Object(r.c)(r.a.SearchResults),
					search: s.postFlairClickToSearch(t, e),
					subreddit: s.subreddit(t)
				}),
				c = e => t => {
					const n = Object(o.g)(e);
					return {
						...s.defaults(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: s.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				d = () => e => ({
					...s.defaults(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: s.subreddit(e)
				}),
				l = e => t => {
					const n = Object(o.g)(e);
					return {
						...s.defaults(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: s.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				u = (e, t) => n => {
					const i = Object(o.g)(e),
						a = s.post(n, t);
					return {
						...s.defaults(n),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: s.subreddit(n),
						postFlair: {
							id: e.templateId,
							title: i
						},
						post: a,
						search: {
							query: `flair_name:'${i}'`,
							subredditId: a ? a.subredditId : void 0,
							subredditName: a ? a.subredditName : void 0,
							postFlairName: i,
							originElement: "post_flair",
							queryId: Object(r.c)(r.a.SearchResults),
							originPageType: n.platform.currentPage ? s.getPageTypeFromCurrentPage(n.platform.currentPage) : void 0
						},
						feed: s.feed(n)
					}
				}
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/clickSourceData/index.ts");

			function i() {
				const e = Object(s.e)(e => e.platform.currentPage),
					[t, n] = Object(r.useState)({});
				return Object(r.useEffect)(() => {
					n(Object(o.a)(e))
				}, [e]), t
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/meta.ts");
			t.a = "undefined" == typeof document ? function() {
				const e = Object(o.e)(i.i) || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			}
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/sentry/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/Post/index.tsx");

			function i() {
				const e = Object(s.useContext)(o.c);
				return e || r.c.captureMessage("No post context provided"), e
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(r.useContext)(s.b)
			}
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(o.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var i = (e = o, t) => {
					switch (t.type) {
						case s.o:
							return t.payload;
						case s.p:
						default:
							return e
					}
				},
				a = n("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var d = (e = c, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.h:
					case a.f: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case a.a:
					case a.e: {
						const {
							key: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r || {}
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var u = (e = l, t) => {
				switch (t.type) {
					case a.c:
					case a.g: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case a.d:
						case a.h: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case a.b:
						case a.a:
						case a.f:
						case a.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				b = Object(r.c)({
					error: d,
					fullyLoaded: u,
					pending: p
				}),
				f = n("./src/reddit/actions/comment/constants.ts");
			const h = [];
			var x = (e = h, t) => {
					switch (t.type) {
						case f.E:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case f.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case f.u:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				y = n("./node_modules/lodash/uniqBy.js"),
				g = n.n(y),
				O = n("./node_modules/lodash/values.js"),
				j = n.n(O),
				C = n("./src/reddit/actions/comment/websocket/constants.ts");
			const k = {};

			function v(e) {
				return g()(e, "id").sort((e, t) => e.created - t.created)
			}
			var _ = (e = k, t) => {
					switch (t.type) {
						case a.f:
						case f.w:
						case a.b: {
							const {
								comments: n,
								key: r
							} = t.payload, s = e[r] ? e[r] : [], o = function(e, t) {
								return j()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, s.find(e => e.stickied)), i = v([...s, ...o]);
							return {
								...e,
								[r]: [...i]
							}
						}
						case C.b:
						case C.c:
						case C.d:
						case f.J:
						case f.I: {
							const {
								comment: {
									id: n,
									created: r,
									isStickied: s,
									authorId: o
								},
								commentsPageKey: i
							} = t.payload;
							return {
								...e,
								[i]: [...v([...e[i] ? e[i] : [], {
									id: n,
									created: r,
									stickied: s,
									authorId: o
								}])]
							}
						}
						default:
							return e
					}
				},
				T = n("./node_modules/lodash/mapValues.js"),
				I = n.n(T),
				S = n("./src/reddit/helpers/commentList/index.ts"),
				E = n("./src/reddit/models/Comment/index.ts");
			const N = {};

			function F(e) {
				const t = e;
				return I()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var w = (e = N, t) => {
				switch (t.type) {
					case f.w: {
						const {
							comments: n,
							commentLists: r,
							continueThreads: s,
							key: o,
							moreCommentsItem: i,
							moreComments: a
						} = t.payload, c = r[i.postId], d = e[o], l = {}, u = d[i.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							l[e] = {
								...d[e],
								next: c.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							l[e] = {
								...d[e],
								prev: c.tail || u.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(S.c)({
									commentLink: c.head,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: s
								}),
								t = Object(S.c)({
									commentLink: c.tail,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: s
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...F(n),
								...F(s),
								...F(a),
								...l
							}
						}
					}
					case a.b:
					case a.f: {
						const {
							comments: n,
							continueThreads: r,
							key: s,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...F(n),
								...F(r),
								...F(o)
							}
						}
					}
					case C.b:
					case f.J: {
						const {
							comment: n,
							commentsPageKey: r,
							headCommentId: s
						} = t.payload, o = e[r], i = {};
						let a = null;
						return s && (i[s] = {
							...o[s],
							prev: Object(E.i)(n.id)
						}, a = Object(E.i)(s)), {
							...e,
							[r]: {
								...e[r],
								...i,
								[n.id]: {
									depth: 0,
									next: a,
									prev: null
								}
							}
						}
					}
					case f.I: {
						const {
							comment: n,
							commentsPageKey: r,
							parentCommentId: s,
							depth: o
						} = t.payload, i = e[r], a = {};
						let c = null;
						if (!i[s]) return e;
						const d = i[s].next;
						return d && (a[d.id] = {
							...i[d.id],
							prev: Object(E.i)(n.id)
						}, c = d), a[s] = {
							...i[s],
							next: Object(E.i)(n.id)
						}, {
							...e,
							[r]: {
								...e[r],
								...a,
								[n.id]: {
									depth: o,
									next: c,
									prev: Object(E.i)(s)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const P = {};
			var L = (e = P, t) => {
				switch (t.type) {
					case C.b:
					case C.c:
					case f.J: {
						const {
							comment: n,
							commentsPageKey: r
						} = t.payload;
						return {
							...e,
							[r]: n.id
						}
					}
					case a.b:
					case a.f: {
						const {
							commentLists: n,
							key: r,
							postId: s
						} = t.payload;
						return {
							...e,
							[r]: n[s] && n[s].head ? n[s].head.id : null
						}
					}
					default:
						return e
				}
			};
			const D = {};
			var A = (e = D, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.c:
					case a.h: {
						const {
							key: n,
							postId: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case f.J: {
						const {
							parentId: n,
							commentsPageKey: r
						} = t.payload;
						return e[r] ? e : {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				api: b,
				followed: x,
				keyToChatCommentLinks: _,
				keyToCommentThreadLinkSets: w,
				keyToHeadCommentId: L,
				keyToPostId: A,
				ads: i
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "u", (function() {
				return h
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "x", (function() {
				return y
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "G", (function() {
				return C
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "l", (function() {
				return T
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "m", (function() {
				return F
			})), n.d(t, "t", (function() {
				return w
			})), n.d(t, "z", (function() {
				return P
			})), n.d(t, "I", (function() {
				return L
			})), n.d(t, "s", (function() {
				return D
			})), n.d(t, "C", (function() {
				return A
			})), n.d(t, "D", (function() {
				return R
			})), n.d(t, "E", (function() {
				return M
			})), n.d(t, "r", (function() {
				return W
			})), n.d(t, "e", (function() {
				return U
			})), n.d(t, "v", (function() {
				return H
			})), n.d(t, "J", (function() {
				return K
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "i", (function() {
				return q
			})), n.d(t, "F", (function() {
				return $
			})), n.d(t, "B", (function() {
				return G
			})), n.d(t, "H", (function() {
				return J
			})), n.d(t, "p", (function() {
				return z
			})), n.d(t, "K", (function() {
				return V
			})), n.d(t, "y", (function() {
				return Q
			})), n.d(t, "A", (function() {
				return X
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/constants/comments.ts"),
				c = n("./src/reddit/models/Post/index.ts"),
				d = n("./src/reddit/selectors/subreddit.ts"),
				l = n("./src/reddit/selectors/commentSelector.ts"),
				u = n("./src/lib/initializeClient/installReducer.ts"),
				m = n("./src/reddit/reducers/features/comments/index.ts"),
				p = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(u.a)({
				features: {
					comments: m.a
				},
				pages: {
					comments: p.a
				}
			});
			const b = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				f = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				h = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				x = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				y = (e, t) => {
					const n = x(e, t);
					if (n) return Object(l.b)(e, {
						commentId: n
					})
				},
				g = [],
				O = Object(i.a)((e, t) => {
					const n = y(e, t),
						r = n && n.id;
					if (!r) return g;
					const {
						commentsPageKey: s
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[s], i = [];
					let c = {
						id: r,
						type: a.a.Comment
					};
					do {
						i.push(c), c = o[c.id].next
					} while (c);
					return i
				}),
				j = (e, t) => x(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				C = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				k = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: r
				}) => {
					const s = e.pages.comments.keyToCommentThreadLinkSets[r];
					return s ? n ? s[n.id] : t ? s[t] : null : null
				},
				v = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				_ = (e, t) => {
					const n = t.commentsPageKey ? k(e, t) : null;
					return n ? n.depth : null
				},
				T = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: r
					} = t;
					switch (r) {
						case a.a.Comment:
							return e.features.comments.models[n];
						case a.a.MoreComments:
							return e.moreComments.models[n];
						case a.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				I = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(c.t)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== o.D).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				S = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				E = e => e.moreComments.models,
				N = e => e.features.comments.models,
				F = (e, {
					commentId: t
				}) => {
					const n = Object(l.b)(e, {
						commentId: t
					});
					return n ? Object(l.a)(e, n) : ""
				},
				w = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				P = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				L = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				D = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						r = Object.keys(n).find(e => n[e]),
						s = Object(l.b)(e, {
							commentId: r
						}),
						o = s && _(e, {
							commentId: s.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (s && "number" == typeof o) return {
						...s,
						depth: o
					}
				},
				A = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				R = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				M = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = s()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				W = (e, {
					id: t
				}) => e.continueThreads.models[t],
				U = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const r = e.authorFlair.models[n.subredditId];
					return r ? r[n.author] : null
				},
				H = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				K = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				B = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				q = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				$ = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				G = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				J = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				z = e => e.features.comments.visitHighlightFilter,
				V = (e, t) => {
					const n = Object(l.b)(e, t);
					if (n) return Object(d.V)(e, n)
				},
				Q = (e, {
					commentId: t
				}) => {
					var n, r;
					return !!((null === (r = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === r ? void 0 : r.followed) || []).find(e => e.id === t)
				},
				X = (e, {
					commentId: t
				}) => {
					var n, r;
					const s = ((null === (r = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === r ? void 0 : r.followed) || []).find(e => e.id === t);
					return !!(s && s.expiresAt < Date.now())
				}
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250.c521c856e3c85c4b5424.js.map