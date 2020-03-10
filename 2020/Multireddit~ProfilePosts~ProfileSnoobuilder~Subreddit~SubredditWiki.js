// https://www.redditstatic.com/desktop2x/Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki.b99679a89bb898a20a19.js
// Retrieved at 3/10/2020, 5:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"], {
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var a = n("./node_modules/linkify-it/index.js"),
				r = n.n(a),
				s = n("./node_modules/tlds/index.js"),
				o = n.n(s),
				l = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./node_modules/lodash/values.js"),
				i = n.n(c);
			const u = e => i()(l.b).includes(e.substring(1)),
				d = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, d);
			n.d(t, "e", (function() {
				return b
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return v
			}));
			const b = r()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				p = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(l.g.mention.prefix, l.g.mention.config),
				g = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(l.g.subreddit.prefix, l.g.subreddit.config).add(l.g.subredditFull.prefix, l.g.subreddit.config),
				h = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(l.g.profile.prefix, l.g.profile.config).add(l.g.profileFull.prefix, l.g.profile.config),
				f = r()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(l.g.subreddit.prefix, l.g.subreddit.config).add(l.g.subredditFull.prefix, l.g.subreddit.config).add(l.g.profile.prefix, l.g.profile.config).add(l.g.profileFull.prefix, l.g.profile.config).add(l.g.mention.prefix, l.g.mention.config),
				E = b.normalize;
			b.normalize = e => {
				E.call(b, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const y = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = u(e.text);
						return !n || n && t
					})
				},
				x = e => {
					return [...h.match(e) || [], ...p.match(e) || []].map(e => !u(e.text) && e.text.replace(l.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				v = e => {
					const t = b.match(e);
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
				l = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/app/strings/index.ts"),
				u = n("./src/lib/loginHref/index.ts"),
				d = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				g = n("./src/reddit/i18n/components.tsx"),
				h = n("./src/reddit/components/Footer/index.m.less"),
				f = n.n(h);
			const E = p.a.div("FooterContainer", f.a),
				y = p.a.div("UserAgreement", f.a),
				x = p.a.a("UserAgreementLink", f.a),
				_ = p.a.a("PrivacyLink", f.a),
				v = Object(c.c)({
					language: e => e.user.language
				});
			var k = Object(o.b)(v)(e => {
					const {
						language: t
					} = e;
					return s.a.createElement(E, null, s.a.createElement(y, null, s.a.createElement(g.c, null, "Use of this site constitutes acceptance of our "), s.a.createElement(x, {
						href: "".concat(a.a.redditUrl, "/help/useragreement")
					}, s.a.createElement(g.c, null, "User Agreement")), s.a.createElement(g.c, null, " and "), s.a.createElement(_, {
						href: "".concat(a.a.redditUrl, "/help/privacypolicy")
					}, s.a.createElement(g.c, null, "Privacy Policy")), Object(i.a)(t, "footer.legalbottom.part3", {
						year: (new Date).getFullYear()
					})))
				}),
				S = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				j = n("./src/reddit/components/RichTextJson/index.tsx"),
				L = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				B = n.n(L),
				O = n("./src/lib/linkMatchers/index.ts"),
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
					return e.parseMdLinks && (t = B()(t, N)), e.parseRegularLinks && (t = B()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = O.e.match(e);
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
				P = n("./src/reddit/contexts/PageLayer/index.tsx"),
				D = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/reddit/models/ContentGate.ts"),
				I = n("./src/reddit/selectors/meta.ts"),
				z = n("./src/reddit/selectors/user.ts"),
				U = n("./src/reddit/components/ContentGate/index.m.less"),
				M = n.n(U);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js"), H = p.a.div("ButtonsContainer", M.a), G = p.a.div("Container", M.a), A = p.a.div("Description", M.a), J = p.a.div("PrivateSubredditDetails", M.a), W = p.a.div("PrivateSubredditDescription", M.a), Y = p.a.h3("PrivateSubredditName", M.a), Z = p.a.a("Link", M.a), q = p.a.wrapped(D.h, "LinkRouterButton", M.a), K = p.a.wrapped(D.g, "LinkButton", M.a), V = p.a.wrapped(D.k, "SecondaryLinkRouterButton", M.a), X = p.a.wrapped(D.j, "SecondaryLinkButton", M.a), Q = p.a.wrapped(q, "GoHomeLinkButton", M.a), $ = p.a.img("Image", M.a), ee = p.a.img("ImagePlaceholder", M.a), te = p.a.wrapped(q, "LeftLinkRouterButton", M.a), ne = p.a.wrapped(K, "LeftLinkButton", M.a), ae = p.a.wrapped(X, "SecondaryLeftLinkButton", M.a), re = p.a.wrapped(V, "SecondaryLeftLinkRouterButton", M.a), se = p.a.h3("Title", M.a), oe = p.a.div("PageBody", M.a), le = p.a.div("QuarantineMessageWrapper", M.a), ce = Object(c.c)({
				isLoggedIn: z.F,
				language: z.O,
				origin: I.h,
				user: z.i
			}), ie = Object(P.t)(), ue = Object(o.b)(ce, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(m.A(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(d.l)())
					}
				}
			}), de = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: o,
					language: l,
					location: c,
					origin: m,
					pageLayer: p,
					quarantineRequiresEmail: h,
					quarantineMessage: f,
					quarantineMessageHtml: E,
					quarantineMessageRTJson: y,
					setNSFWPreference: x,
					subredditDescription: _,
					subredditName: v,
					user: k
				} = e, L = () => {
					o ? x() : Object(d.k)(), window.location.reload()
				};
				switch (n) {
					case R.a.GoldSubreddit:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/gold/premium-crest.png")
						}), s.a.createElement(se, null, Object(i.a)(l, "contentGate.goldSubreddit.titlePremium", {
							subredditName: v
						})), s.a.createElement(A, null, s.a.createElement(g.c, null, "The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.")), s.a.createElement(H, null, k ? s.a.createElement(ae, {
							href: "".concat(a.a.redditUrl, "/premium")
						}, s.a.createElement(g.c, null, "Get Premium")) : s.a.createElement(ne, {
							href: Object(u.a)(c, m)
						}, s.a.createElement(g.c, null, "Sign Up")), k ? s.a.createElement(q, {
							to: "/"
						}, s.a.createElement(g.c, null, "Go Home")) : s.a.createElement(X, {
							href: Object(u.a)(c, m)
						}, s.a.createElement(g.c, null, "Log In"))));
					case R.a.Nsfw:
					case R.a.NsfwCustomFeed:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), s.a.createElement(se, null, n === R.a.Nsfw ? Object(i.a)(l, "contentGate.over18.title") : s.a.createElement(g.c, null, "You must be 18+ to view this Custom Feed")), s.a.createElement(A, null, s.a.createElement(g.c, null, "You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?")), s.a.createElement(H, null, s.a.createElement(te, {
							to: "/"
						}, s.a.createElement(g.c, null, "No")), s.a.createElement(X, {
							onClick: L
						}, s.a.createElement(g.c, null, "Yes"))));
					case R.a.PrivateSubreddit:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/content-gate-icons/private.png")
						}), s.a.createElement(se, null, Object(i.a)(l, "contentGate.privateSubreddit.title", {
							subredditName: v
						})), _ && _.length && s.a.createElement(J, null, s.a.createElement(Y, null, "r/", v), s.a.createElement(W, null, s.a.createElement("div", null, _))), s.a.createElement(A, null, s.a.createElement(g.c, null, "The moderators in this community have set it to private. You must be a moderator or approved user to visit.")), s.a.createElement(H, null, k ? s.a.createElement(ae, {
							href: "".concat(a.a.redditUrl, "/message/compose?to=/r/").concat(v)
						}, s.a.createElement(g.c, null, "Message Mods")) : s.a.createElement(ae, {
							href: Object(u.a)(c, m)
						}, s.a.createElement(g.c, null, "Sign Up")), s.a.createElement(q, {
							to: "/"
						}, k ? Object(i.a)(l, "contentGate.privateSubreddit.goHome") : Object(i.a)(l, "contentGate.privateSubreddit.exploreReddit"))));
					case R.a.QuarantinedSubreddit:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), s.a.createElement(se, null, s.a.createElement(g.c, null, "Are you sure you want to view this community?")), s.a.createElement(A, null, s.a.createElement(g.c, null, "This community is"), " ", s.a.createElement(Z, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, s.a.createElement(g.c, null, "quarantined")), s.a.createElement(le, null, y ? s.a.createElement(j.a, {
							content: y,
							rtJsonElementProps: {
								pageLayer: p
							}
						}) : E ? s.a.createElement(S.a, {
							html: E
						}) : f || F._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), s.a.createElement(g.c, null, "Are you certain you want to continue?")), s.a.createElement(H, null, ((e, t, n, r) => {
							return !(e && e.hasVerifiedEmail) && r ? s.a.createElement(H, null, s.a.createElement(re, {
								to: "/"
							}, s.a.createElement(g.c, null, "No Thank You")), s.a.createElement(K, {
								href: "".concat(a.a.redditUrl, "/prefs/update")
							}, s.a.createElement(g.c, null, "Verify Email"))) : s.a.createElement(H, null, s.a.createElement(te, {
								to: "/"
							}, s.a.createElement(g.c, null, "No Thank You")), s.a.createElement(X, {
								onClick: n
							}, s.a.createElement(g.c, null, "Continue")))
						})(k, 0, r, h)));
					case R.a.SubredditBanned:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/content-gate-icons/banned.png")
						}), s.a.createElement(se, null, Object(i.a)(l, "contentGate.subredditBanned.title", {
							subredditName: v
						})), (e => s.a.createElement(A, null, e ? s.a.createElement(C, {
							linkClassName: M.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : s.a.createElement(g.c, null, "This community has been banned for violating the Reddit rules.")))(t), s.a.createElement(H, null, s.a.createElement(q, {
							to: "/"
						}, s.a.createElement(g.c, null, "Explore Reddit"))));
					case R.a.SubredditBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(se, null, F._("Sorry, this subreddit is not available.", null, {
							hk: "1qeg1J"
						})), s.a.createElement(H, null, s.a.createElement(q, {
							to: "/"
						}, F._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditDoesNotExist:
						return s.a.createElement("div", null, s.a.createElement(ee, null), s.a.createElement(se, null, F._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), s.a.createElement(A, null, F._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), s.a.createElement(H, null, k && s.a.createElement(b.a, {
							eventSource: "content_gate"
						}), s.a.createElement(Q, {
							to: "/"
						}, s.a.createElement(g.c, null, "Go Home"))));
					case R.a.ProfileDoesNotExist:
					case R.a.ProfileDeleted:
					case R.a.ProfileSuspended:
					case R.a.ProfileBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(se, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case R.a.ProfileBlockedForLegalReason:
									return F._("Sorry, this account is not available.", null, {
										hk: "3sltUC"
									});
								case R.a.ProfileDeleted:
									return s.a.createElement(g.c, null, "This user has deleted their account.");
								case R.a.ProfileSuspended:
									return s.a.createElement(s.a.Fragment, null, s.a.createElement(g.c, null, "This account has been"), " ", s.a.createElement(Z, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, s.a.createElement(g.c, null, "suspended")), ".");
								case R.a.ProfileDoesNotExist:
									return s.a.createElement(s.a.Fragment, null, s.a.createElement(se, null, F._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), s.a.createElement(A, null, F._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), s.a.createElement(H, null, s.a.createElement(Q, {
							to: "/"
						}, s.a.createElement(g.c, null, "Go Home"))));
					case R.a.CustomFeedDoesNotExist:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(se, null, s.a.createElement(g.c, null, "Sorry, this custom feed is private or does not exist.")), s.a.createElement(H, null, s.a.createElement(Q, {
							to: "/"
						}, s.a.createElement(g.c, null, "Go Home"))));
					case R.a.PostBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement($, {
							src: "".concat(a.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(se, null, F._("Sorry, this content is unavailable", null, {
							hk: "1SDGzE"
						})), s.a.createElement(H, null, s.a.createElement(q, {
							to: "/"
						}, F._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.a = ie(ue(Object(l.i)(e => s.a.createElement(G, null, s.a.createElement("div", null, s.a.createElement(oe, null, de(e))), s.a.createElement(k, null)))))
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
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/helpers/overlay/index.ts"),
				m = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/i18n/components.tsx"),
				p = n("./src/reddit/i18n/utils.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(h),
				E = n("./src/lib/lessComponent.tsx");
			const y = "create-community-button",
				x = E.a.wrapped(u.i, "SecondaryButton", f.a),
				_ = E.a.wrapped(c.c, "StyledTooltip", f.a),
				v = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(g.Y)(e),
					userIsSuspended: g.K
				});
			t.a = Object(s.b)(v, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(m.b)(n)), e(Object(d.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(l.f)({
						tooltipId: y
					})),
					onHideTooltip: () => e(Object(l.i)())
				}
			})(Object(i.b)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: a,
					onHideTooltip: s,
					openCommunityCreation: o,
					sendEvent: l,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: i
				} = e;
				return r.a.createElement(x, {
					className: t,
					disabled: i || c,
					onClick: () => o(l),
					onMouseEnter: a,
					onMouseLeave: s,
					id: y
				}, r.a.createElement(b.c, null, "Create Community"), c ? r.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: y,
					text: Object(p.c)("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.")
				}) : i ? r.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: y,
					text: Object(p.c)("Accounts banned from the site can not create communities until the ban is lifted.")
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
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/actions/page.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(d);
			const b = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(i.G)(t))
				})),
				p = c.a.wrapped(e => s.a.createElement("div", {
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
						"--RawHTMLDisplay-tr-even": Object(a.j)(Object(u.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(a.j)(Object(u.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = b(Object(l.a)(p))
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
				return L
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				i = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				m = n.n(d),
				b = n("./src/lib/classNames/index.ts"),
				p = n("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var h = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			};
			const f = p.a.button("IconButton", m.a),
				E = p.a.wrapped(i.a, "SubscribeIcon", m.a),
				y = p.a.wrapped(c.a, "UnsubscribeIcon", m.a),
				x = p.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, a = h(e, ["border", "small"]);
					return s.a.createElement(f, a, s.a.createElement(E, {
						className: Object(b.a)(a.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", m.a),
				_ = p.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, a = h(e, ["border", "small"]);
					return t ? s.a.createElement(l.f, g({}, a, {
						className: Object(b.a)(a.className, {
							[m.a.isSmall]: n
						})
					})) : s.a.createElement(l.n, g({}, a, {
						className: Object(b.a)(a.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", m.a),
				v = e => {
					var {
						icon: t
					} = e, n = h(e, ["icon"]);
					return t ? s.a.createElement(x, g({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : s.a.createElement(_, g({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				},
				k = p.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: a,
						type: r
					} = e, l = h(e, ["border", "language", "small", "type"]);
					return s.a.createElement(f, l, s.a.createElement(y, {
						className: Object(b.a)(o.n, l.className, {
							[m.a.isSmall]: a
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				S = p.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: r,
						type: o
					} = e, c = h(e, ["border", "language", "small", "type"]);
					const i = s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === o ? a.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : a.fbt._("Following", null, {
							hk: "1wQlVR"
						})), s.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === o ? a.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : a.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						u = Object(b.a)(c.className, {
							[m.a.isSmall]: r
						});
					return t ? s.a.createElement(l.i, g({}, c, {
						className: u,
						children: i
					})) : s.a.createElement(l.n, g({}, c, {
						className: u,
						children: i
					}))
				}, "UnsubscribeButton", m.a),
				j = e => {
					var {
						icon: t
					} = e, n = h(e, ["icon"]);
					return t ? s.a.createElement(k, g({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : s.a.createElement(S, g({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				};
			class L extends s.a.Component {
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
						language: r,
						small: o = !1
					} = this.props, l = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: o
					};
					return this.props.userIsSubscriber ? s.a.createElement(j, g({}, l, {
						language: r,
						type: this.props.identifier.type
					})) : s.a.createElement(v, g({}, l, {
						id: a
					}), this.props.children, Object(u.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				s = {
					subredditActions: {
						subscribe: () => a.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => a.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => a.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => a.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => a.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => a.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = e => {
					let {
						type: t,
						key: n
					} = e;
					return s[r({
						type: t
					})][n]()
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
				l = n("./src/reddit/selectors/user.ts");
			t.a = Object(a.b)(() => Object(r.c)({
				language: l.O,
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
				l = n.n(o);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(s.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", l.a);
			t.a = c
		}
	}
]);
//# sourceMappingURL=Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki.b99679a89bb898a20a19.js.map