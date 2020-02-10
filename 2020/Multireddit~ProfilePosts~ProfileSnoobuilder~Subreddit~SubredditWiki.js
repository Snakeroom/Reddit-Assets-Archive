// https://www.redditstatic.com/desktop2x/Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki.b4cde84c24f0708681bd.js
// Retrieved at 2/10/2020, 1:40:17 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"], {
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var a = n("./node_modules/linkify-it/index.js"),
				r = n.n(a),
				s = n("./node_modules/tlds/index.js"),
				o = n.n(s),
				c = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./node_modules/lodash/values.js"),
				l = n.n(i);
			const d = e => l()(c.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u);
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return v
			}));
			const p = r()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				b = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(c.g.mention.prefix, c.g.mention.config),
				g = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config),
				E = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config),
				f = r()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config).add(c.g.mention.prefix, c.g.mention.config),
				h = p.normalize;
			p.normalize = e => {
				h.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const x = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				y = e => {
					return [...E.match(e) || [], ...b.match(e) || []].map(e => !d(e.text) && e.text.replace(c.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				v = e => {
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
			var a = n("./src/config.ts"),
				r = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const s = Object(r.e)(e),
					o = encodeURIComponent("".concat(t).concat(s));
				return "".concat(a.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(o)
			}
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
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/app/strings/index.ts"),
				d = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				b = n("./src/lib/lessComponent.tsx"),
				g = n("./src/reddit/i18n/components.tsx"),
				E = n("./src/reddit/components/Footer/index.m.less"),
				f = n.n(E);
			const h = b.a.div("FooterContainer", f.a),
				x = b.a.div("UserAgreement", f.a),
				y = b.a.a("UserAgreementLink", f.a),
				_ = b.a.a("PrivacyLink", f.a),
				v = Object(i.c)({
					language: e => e.user.language
				});
			var S = Object(o.b)(v)(e => {
					const {
						language: t
					} = e;
					return s.a.createElement(h, null, s.a.createElement(x, null, s.a.createElement(g.c, null, "Use of this site constitutes acceptance of our "), s.a.createElement(y, {
						href: "".concat(a.a.redditUrl, "/help/useragreement")
					}, s.a.createElement(g.c, null, "User Agreement")), s.a.createElement(g.c, null, " and  "), s.a.createElement(_, {
						href: "".concat(a.a.redditUrl, "/help/privacypolicy")
					}, s.a.createElement(g.c, null, "Privacy Policy")), Object(l.a)(t, "footer.legalbottom.part3", {
						year: (new Date).getFullYear()
					})))
				}),
				j = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				k = n("./src/reddit/components/RichTextJson/index.tsx"),
				L = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				O = n.n(L),
				B = n("./src/lib/linkMatchers/index.ts"),
				w = n("./src/reddit/controls/OutboundLink/index.tsx");
			const T = /\[(.+?)\]\((.+?)\)/g,
				N = e => {
					const t = e.split(T);
					if (1 === t.length) return [e];
					const n = [];
					for (let a = 0; a < t.length; a += 3) {
						const [e, r, s] = t.slice(a, a + 3);
						n.push(e), n.push([s, r])
					}
					return n
				};
			var C = s.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = O()(t, N)), e.parseRegularLinks && (t = O()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = B.e.match(e);
						if (!t) return [e];
						const n = [];
						let a = null;
						for (const r of t) n.push(e.slice(a ? a.lastIndex : 0, r.index)), a = r, n.push([r.url, r.text]);
						return a && n.push(e.slice(a.lastIndex)), n
					})(e))), s.a.createElement(s.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [a, r] = t;
							return s.a.createElement(w.a, {
								className: e.linkClassName,
								href: a,
								isSponsored: !1,
								key: n,
								source: null
							}, r)
						}
						return s.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				D = n("./src/reddit/contexts/PageLayer/index.tsx"),
				P = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/models/ContentGate.ts"),
				z = n("./src/reddit/selectors/meta.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				R = n("./src/reddit/components/ContentGate/index.m.less"),
				H = n.n(R);
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js"), A = b.a.div("ButtonsContainer", H.a), F = b.a.div("Container", H.a), G = b.a.div("Description", H.a), J = b.a.div("PrivateSubredditDetails", H.a), W = b.a.div("PrivateSubredditDescription", H.a), Z = b.a.h3("PrivateSubredditName", H.a), q = b.a.a("Link", H.a), Y = b.a.wrapped(P.h, "LinkRouterButton", H.a), K = b.a.wrapped(P.g, "LinkButton", H.a), V = b.a.wrapped(P.k, "SecondaryLinkRouterButton", H.a), X = b.a.wrapped(P.j, "SecondaryLinkButton", H.a), Q = b.a.wrapped(Y, "GoHomeLinkButton", H.a), $ = b.a.img("Image", H.a), ee = b.a.img("ImagePlaceholder", H.a), te = b.a.wrapped(Y, "LeftLinkRouterButton", H.a), ne = b.a.wrapped(K, "LeftLinkButton", H.a), ae = b.a.wrapped(X, "SecondaryLeftLinkButton", H.a), re = b.a.wrapped(V, "SecondaryLeftLinkRouterButton", H.a), se = b.a.h3("Title", H.a), oe = b.a.div("PageBody", H.a), ce = b.a.div("QuarantineMessageWrapper", H.a), ie = Object(i.c)({
				isLoggedIn: M.F,
				language: M.P,
				origin: z.h,
				user: M.i
			}), le = Object(D.t)(), de = Object(o.b)(ie, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(m.A(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(u.j)())
					}
				}
			}), ue = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: o,
					language: c,
					location: i,
					origin: m,
					pageLayer: b,
					quarantineRequiresEmail: E,
					quarantineMessage: f,
					quarantineMessageHtml: h,
					quarantineMessageRTJson: x,
					setNSFWPreference: y,
					subredditDescription: _,
					subredditName: v,
					user: S
				} = e, L = () => {
					o ? y() : Object(u.i)(), window.location.reload()
				};
				switch (n) {
					case I.a.GoldSubreddit:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/gold/premium-crest.png")
						}), s.a.createElement(se, null, Object(l.a)(c, "contentGate.goldSubreddit.titlePremium", {
							subredditName: v
						})), s.a.createElement(G, null, s.a.createElement(g.c, null, "The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.")), s.a.createElement(A, null, S ? s.a.createElement(ae, {
							href: "".concat(a.a.redditUrl, "/premium")
						}, s.a.createElement(g.c, null, "Get Premium")) : s.a.createElement(ne, {
							href: Object(d.a)(i, m)
						}, s.a.createElement(g.c, null, "Sign Up")), S ? s.a.createElement(Y, {
							to: "/"
						}, s.a.createElement(g.c, null, "Go Home")) : s.a.createElement(X, {
							href: Object(d.a)(i, m)
						}, s.a.createElement(g.c, null, "Log In"))));
					case I.a.Nsfw:
					case I.a.NsfwCustomFeed:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), s.a.createElement(se, null, n === I.a.Nsfw ? Object(l.a)(c, "contentGate.over18.title") : s.a.createElement(g.c, null, "You must be 18+ to view this Custom Feed")), s.a.createElement(G, null, s.a.createElement(g.c, null, "You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?")), s.a.createElement(A, null, s.a.createElement(te, {
							to: "/"
						}, s.a.createElement(g.c, null, "No")), s.a.createElement(X, {
							onClick: L
						}, s.a.createElement(g.c, null, "Yes"))));
					case I.a.PrivateSubreddit:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/content-gate-icons/private.png")
						}), s.a.createElement(se, null, Object(l.a)(c, "contentGate.privateSubreddit.title", {
							subredditName: v
						})), _ && _.length && s.a.createElement(J, null, s.a.createElement(Z, null, "r/", v), s.a.createElement(W, null, s.a.createElement("div", null, _))), s.a.createElement(G, null, s.a.createElement(g.c, null, "The moderators in this community have set it to private. You must be a moderator or approved user to visit.")), s.a.createElement(A, null, S ? s.a.createElement(ae, {
							href: "".concat(a.a.redditUrl, "/message/compose?to=/r/").concat(v)
						}, s.a.createElement(g.c, null, "Message Mods")) : s.a.createElement(ae, {
							href: Object(d.a)(i, m)
						}, s.a.createElement(g.c, null, "Sign Up")), s.a.createElement(Y, {
							to: "/"
						}, S ? Object(l.a)(c, "contentGate.privateSubreddit.goHome") : Object(l.a)(c, "contentGate.privateSubreddit.exploreReddit"))));
					case I.a.QuarantinedSubreddit:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), s.a.createElement(se, null, s.a.createElement(g.c, null, "Are you sure you want to view this community?")), s.a.createElement(G, null, s.a.createElement(g.c, null, "This community is"), " ", s.a.createElement(q, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, s.a.createElement(g.c, null, "quarantined")), s.a.createElement(ce, null, x ? s.a.createElement(k.a, {
							content: x,
							rtJsonElementProps: {
								pageLayer: b
							}
						}) : h ? s.a.createElement(j.a, {
							html: h
						}) : f || U._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), s.a.createElement(g.c, null, "Are you certain you want to continue?")), s.a.createElement(A, null, ((e, t, n, r) => {
							return !(e && e.hasVerifiedEmail) && r ? s.a.createElement(A, null, s.a.createElement(re, {
								to: "/"
							}, s.a.createElement(g.c, null, "No Thank You")), s.a.createElement(K, {
								href: "".concat(a.a.redditUrl, "/prefs/update")
							}, s.a.createElement(g.c, null, "Verify Email"))) : s.a.createElement(A, null, s.a.createElement(te, {
								to: "/"
							}, s.a.createElement(g.c, null, "No Thank You")), s.a.createElement(X, {
								onClick: n
							}, s.a.createElement(g.c, null, "Continue")))
						})(S, 0, r, E)));
					case I.a.SubredditBanned:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/content-gate-icons/banned.png")
						}), s.a.createElement(se, null, Object(l.a)(c, "contentGate.subredditBanned.title", {
							subredditName: v
						})), (e => s.a.createElement(G, null, e ? s.a.createElement(C, {
							linkClassName: H.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : s.a.createElement(g.c, null, "This community has been banned for violating the Reddit rules.")))(t), s.a.createElement(A, null, s.a.createElement(Y, {
							to: "/"
						}, s.a.createElement(g.c, null, "Explore Reddit"))));
					case I.a.SubredditDoesNotExist:
						return s.a.createElement("div", null, s.a.createElement(ee, null), s.a.createElement(se, null, U._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), s.a.createElement(G, null, U._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), s.a.createElement(A, null, S && s.a.createElement(p.a, {
							eventSource: "content_gate"
						}), s.a.createElement(Q, {
							to: "/"
						}, s.a.createElement(g.c, null, "Go Home"))));
					case I.a.ProfileDoesNotExist:
					case I.a.ProfileDeleted:
					case I.a.ProfileSuspended:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(se, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case I.a.ProfileDeleted:
									return s.a.createElement(g.c, null, "This user has deleted their account.");
								case I.a.ProfileSuspended:
									return s.a.createElement(s.a.Fragment, null, s.a.createElement(g.c, null, "This account has been"), " ", s.a.createElement(q, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, s.a.createElement(g.c, null, "suspended")), ".");
								case I.a.ProfileDoesNotExist:
									return s.a.createElement(s.a.Fragment, null, s.a.createElement(se, null, U._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), s.a.createElement(G, null, U._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), s.a.createElement(A, null, s.a.createElement(Q, {
							to: "/"
						}, s.a.createElement(g.c, null, "Go Home"))));
					case I.a.CustomFeedDoesNotExist:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(se, null, s.a.createElement(g.c, null, "Sorry, this custom feed is private or does not exist.")), s.a.createElement(A, null, s.a.createElement(Q, {
							to: "/"
						}, s.a.createElement(g.c, null, "Go Home"))))
				}
			};
			t.a = le(de(Object(c.i)(e => s.a.createElement(F, null, s.a.createElement("div", null, s.a.createElement(oe, null, ue(e))), s.a.createElement(S, null)))))
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				SecondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				secondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/overlay/index.ts"),
				m = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				p = n("./src/reddit/i18n/components.tsx"),
				b = n("./src/reddit/i18n/utils.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(E),
				h = n("./src/lib/lessComponent.tsx");
			const x = "create-community-button",
				y = h.a.wrapped(d.i, "SecondaryButton", f.a),
				_ = h.a.wrapped(i.c, "StyledTooltip", f.a),
				v = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(g.Z)(e),
					userIsSuspended: g.L
				});
			t.a = Object(s.b)(v, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(m.b)(n)), e(Object(u.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: x
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(l.b)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: a,
					onHideTooltip: s,
					openCommunityCreation: o,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: i,
					userIsSuspended: l
				} = e;
				return r.a.createElement(y, {
					className: t,
					disabled: l || i,
					onClick: () => o(c),
					onMouseEnter: a,
					onMouseLeave: s,
					id: x
				}, r.a.createElement(p.c, null, "Create Community"), i ? r.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: x,
					text: Object(b.c)("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.")
				}) : l ? r.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: x,
					text: Object(b.c)("Accounts banned from the site can not create communities until the ban is lifted.")
				}) : null)
			}))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/page.ts"),
				d = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(l.H)(t))
				})),
				b = i.a.wrapped(e => s.a.createElement("div", {
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
					style: Object.assign({}, e.style, {
						"--RawHTMLDisplay-tr-even": Object(a.j)(Object(d.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(a.j)(Object(d.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(c.a)(b))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/app/strings/index.ts"),
				o = n("./src/reddit/constants/elementClassNames.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/i18n/utils.ts"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				p = n.n(m),
				b = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			};
			const h = g.a.button("IconButton", p.a),
				x = g.a.wrapped(d.a, "SubscribeIcon", p.a),
				y = g.a.wrapped(l.a, "UnsubscribeIcon", p.a),
				_ = g.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, a = f(e, ["border", "small"]);
					return r.a.createElement(h, a, r.a.createElement(x, {
						className: Object(b.a)(a.className, {
							[p.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", p.a),
				v = g.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, a = f(e, ["border", "small"]);
					return t ? r.a.createElement(c.f, E({}, a, {
						className: Object(b.a)(a.className, {
							[p.a.isSmall]: n
						})
					})) : r.a.createElement(c.n, E({}, a, {
						className: Object(b.a)(a.className, {
							[p.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", p.a),
				S = e => {
					var {
						icon: t
					} = e, n = f(e, ["icon"]);
					return t ? r.a.createElement(_, E({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: n.small
						})
					})) : r.a.createElement(v, E({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: n.small
						})
					}))
				},
				j = g.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: a,
						type: s
					} = e, c = f(e, ["border", "language", "small", "type"]);
					return r.a.createElement(h, c, r.a.createElement(y, {
						className: Object(b.a)(o.n, c.className, {
							[p.a.isSmall]: a
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				k = g.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: a,
						type: s
					} = e, o = f(e, ["border", "language", "small", "type"]);
					const l = r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
							className: p.a.UnsubscribeButtonDefault
						}, "subreddit" === s ? Object(i.c)("Joined") : Object(i.c)("Following")), r.a.createElement("span", {
							className: p.a.UnsubscribeButtonHover
						}, "subreddit" === s ? Object(i.c)("Leave") : Object(i.c)("Unfollow"))),
						d = Object(b.a)(o.className, {
							[p.a.isSmall]: a
						});
					return t ? r.a.createElement(c.i, E({}, o, {
						className: d,
						children: l
					})) : r.a.createElement(c.n, E({}, o, {
						className: d,
						children: l
					}))
				}, "UnsubscribeButton", p.a),
				L = e => {
					var {
						icon: t
					} = e, n = f(e, ["icon"]);
					return t ? r.a.createElement(j, E({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: n.small
						})
					})) : r.a.createElement(k, E({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: n.small
						})
					}))
				};
			class O extends r.a.Component {
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
						icon: n = !1,
						id: a,
						language: o,
						small: c = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: c
					};
					return this.props.userIsSubscriber ? r.a.createElement(L, E({}, i, {
						language: o,
						type: this.props.identifier.type
					})) : r.a.createElement(S, E({}, i, {
						id: a
					}), this.props.children, Object(s.a)(o, "subscriptions.".concat(Object(u.a)({
						type: this.props.identifier.type
					}), ".subscribe")))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				let {
					type: t
				} = e;
				return "subreddit" === t ? "subredditActions" : "profileActions"
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				s = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(a.b)(s.a))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = Object(a.b)(() => Object(r.c)({
				language: c.P,
				userIsSubscriber: o.Z
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(s.d([n], !0)),
					onSubscriptionsRequested: () => e(s.e()),
					onUnsubscribe: () => e(s.d([n], !1))
				}
			})
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: a
				} = e;
				return r.a.createElement("div", {
					className: Object(s.a)(c.a.loadingIcon, n, {
						[c.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(a, "px")
					}
				})
			}
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				c = n.n(o);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(s.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", c.a);
			t.a = i
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki.b4cde84c24f0708681bd.js.map