// https://www.redditstatic.com/desktop2x/Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki.28f9f92b80760744cac1.js
// Retrieved at 4/1/2020, 7:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"], {
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var r = n("./node_modules/linkify-it/index.js"),
				a = n.n(r),
				s = n("./node_modules/tlds/index.js"),
				o = n.n(s),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				l = n("./node_modules/lodash/values.js"),
				c = n.n(l);
			const u = e => c()(i.b).includes(e.substring(1)),
				d = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, d);
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "h", (function() {
				return x
			}));
			const p = a()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				b = a()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = m(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				g = m(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				f = a()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				_ = p.normalize;
			p.normalize = e => {
				_.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const y = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = u(e.text);
						return !n || n && t
					})
				},
				k = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !u(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				E = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				x = e => {
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
				a = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const s = Object(a.e)(e),
					o = encodeURIComponent("".concat(t).concat(s));
				return "".concat(r.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(o)
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
			var r = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				d = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				h = n.n(b);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = p.a.div("FooterContainer", h.a), _ = p.a.div("UserAgreement", h.a), y = p.a.a("UserAgreementLink", h.a), k = p.a.a("PrivacyLink", h.a);
			var E = () => s.a.createElement(f, null, s.a.createElement(_, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", s.a.createElement(y, {
					href: "".concat(r.a.redditUrl, "/help/useragreement")
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", s.a.createElement(k, {
					href: "".concat(r.a.redditUrl, "/help/privacypolicy")
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				x = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = n("./src/reddit/components/RichTextJson/index.tsx"),
				S = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				j = n.n(S),
				B = n("./src/lib/linkMatchers/index.ts"),
				L = n("./src/lib/linkMatchers/customLinks.ts"),
				w = n("./src/reddit/controls/OutboundLink/index.tsx");
			const T = /\[(.+?)\]\((.+?)\)/g,
				O = e => {
					const t = e.split(T);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, a, s] = t.slice(r, r + 3);
						n.push(e), n.push([s, a])
					}
					return n
				};
			var N = s.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = j()(t, O)), e.parseRegularLinks && (t = j()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = B.e.add(L.g.subreddit.prefix, L.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const a of t) n.push(e.slice(r ? r.lastIndex : 0, a.index)), r = a, n.push([a.url, a.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), s.a.createElement(s.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, a] = t;
							return s.a.createElement(w.a, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: n,
								source: null
							}, a)
						}
						return s.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				P = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/reddit/models/ContentGate.ts"),
				D = n("./src/reddit/selectors/meta.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				U = n("./src/reddit/components/ContentGate/index.m.less"),
				M = n.n(U);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js"), z = p.a.div("ButtonsContainer", M.a), H = p.a.div("Container", M.a), A = p.a.div("Description", M.a), J = p.a.div("PrivateSubredditDetails", M.a), G = p.a.div("PrivateSubredditDescription", M.a), q = p.a.h3("PrivateSubredditName", M.a), W = p.a.a("Link", M.a), Y = p.a.wrapped(C.h, "LinkRouterButton", M.a), Z = p.a.wrapped(C.g, "LinkButton", M.a), K = p.a.wrapped(C.k, "SecondaryLinkRouterButton", M.a), V = p.a.wrapped(C.j, "SecondaryLinkButton", M.a), X = p.a.wrapped(Y, "GoHomeLinkButton", M.a), Q = p.a.img("Image", M.a), $ = p.a.img("ImagePlaceholder", M.a), ee = p.a.wrapped(Y, "LeftLinkRouterButton", M.a), te = p.a.wrapped(Z, "LeftLinkButton", M.a), ne = p.a.wrapped(V, "SecondaryLeftLinkButton", M.a), re = p.a.wrapped(K, "SecondaryLeftLinkRouterButton", M.a), ae = p.a.h3("Title", M.a), se = p.a.div("PageBody", M.a), oe = p.a.div("QuarantineMessageWrapper", M.a), ie = Object(l.c)({
				isLoggedIn: I.F,
				language: I.O,
				origin: D.h,
				user: I.i
			}), le = Object(P.t)(), ce = Object(o.b)(ie, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(d.A(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(u.l)())
					}
				}
			}), ue = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: a,
					isLoggedIn: o,
					language: i,
					location: l,
					origin: d,
					pageLayer: p,
					quarantineRequiresEmail: b,
					quarantineMessage: h,
					quarantineMessageHtml: g,
					quarantineMessageRTJson: f,
					setNSFWPreference: _,
					subredditDescription: y,
					subredditName: k,
					user: E
				} = e, S = () => {
					o ? _() : Object(u.k)(), window.location.reload()
				};
				switch (n) {
					case R.a.GoldSubreddit:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/gold/premium-crest.png")
						}), s.a.createElement(ae, null, F._("r/{community name} is a Reddit Premium community", [F._param("community name", k)], {
							hk: "2lyDwB"
						})), s.a.createElement(A, null, F._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), s.a.createElement(z, null, E ? s.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/premium")
						}, F._("Get Premium", null, {
							hk: "3ChWi4"
						})) : s.a.createElement(te, {
							href: Object(c.a)(l, d)
						}, F._("Sign Up", null, {
							hk: "rvpjy"
						})), E ? s.a.createElement(Y, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						})) : s.a.createElement(V, {
							href: Object(c.a)(l, d)
						}, F._("Log In", null, {
							hk: "35J1JT"
						}))));
					case R.a.Nsfw:
					case R.a.NsfwCustomFeed:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), s.a.createElement(ae, null, n === R.a.Nsfw ? F._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : F._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), s.a.createElement(A, null, F._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), s.a.createElement(z, null, s.a.createElement(ee, {
							to: "/"
						}, F._("No", null, {
							hk: "3fMglW"
						})), s.a.createElement(V, {
							onClick: S
						}, F._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case R.a.PrivateSubreddit:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/private.png")
						}), s.a.createElement(ae, null, F._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), y && y.length && s.a.createElement(J, null, s.a.createElement(q, null, "r/", k), s.a.createElement(G, null, s.a.createElement("div", null, y))), s.a.createElement(A, null, F._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), s.a.createElement(z, null, E ? s.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/message/compose?to=/r/").concat(k)
						}, F._("Message Mods", null, {
							hk: "vVe1i"
						})) : s.a.createElement(ne, {
							href: Object(c.a)(l, d)
						}, F._("Sign Up", null, {
							hk: "rvpjy"
						})), s.a.createElement(Y, {
							to: "/"
						}, E ? F._("Go Home", null, {
							hk: "49p4or"
						}) : F._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case R.a.QuarantinedSubreddit:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), s.a.createElement(ae, null, F._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), s.a.createElement(A, null, F._("This community is {=quarantined}", [F._param("=quarantined", s.a.createElement(W, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, F._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), s.a.createElement(oe, null, f ? s.a.createElement(v.a, {
							content: f,
							rtJsonElementProps: {
								pageLayer: p
							}
						}) : g ? s.a.createElement(x.a, {
							html: g
						}) : h || F._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), F._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), s.a.createElement(z, null, ((e, t, n, a) => {
							return !(e && e.hasVerifiedEmail) && a ? s.a.createElement(z, null, s.a.createElement(re, {
								to: "/"
							}, F._("No Thank You", null, {
								hk: "4B26AR"
							})), s.a.createElement(Z, {
								href: "".concat(r.a.redditUrl, "/prefs/update")
							}, F._("Verify Email", null, {
								hk: "1893cq"
							}))) : s.a.createElement(z, null, s.a.createElement(ee, {
								to: "/"
							}, F._("No Thank You", null, {
								hk: "4B26AR"
							})), s.a.createElement(V, {
								onClick: n
							}, F._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(E, 0, a, b)));
					case R.a.SubredditBanned:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/banned.png")
						}), s.a.createElement(ae, null, F._("r/{community name} has been banned from Reddit", [F._param("community name", k)], {
							hk: "2at9Se"
						})), (e => s.a.createElement(A, null, e ? s.a.createElement(N, {
							linkClassName: M.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : F._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), s.a.createElement(z, null, s.a.createElement(Y, {
							to: "/"
						}, F._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(ae, null, F._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), s.a.createElement(z, null, s.a.createElement(Y, {
							to: "/"
						}, F._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditDoesNotExist:
						return s.a.createElement("div", null, s.a.createElement($, null), s.a.createElement(ae, null, F._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), s.a.createElement(A, null, F._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), s.a.createElement(z, null, E && s.a.createElement(m.a, {
							eventSource: "content_gate"
						}), s.a.createElement(X, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.ProfileDoesNotExist:
					case R.a.ProfileDeleted:
					case R.a.ProfileSuspended:
					case R.a.ProfileBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(ae, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case R.a.ProfileBlockedForLegalReason:
									return F._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case R.a.ProfileDeleted:
									return F._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case R.a.ProfileSuspended:
									return s.a.createElement(s.a.Fragment, null, F._("This account has been {=suspended} .", [F._param("=suspended", s.a.createElement(W, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, F._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case R.a.ProfileDoesNotExist:
									return s.a.createElement(s.a.Fragment, null, s.a.createElement(ae, null, F._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), s.a.createElement(A, null, F._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), s.a.createElement(z, null, s.a.createElement(X, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.CustomFeedDoesNotExist:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(ae, null, F._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), s.a.createElement(z, null, s.a.createElement(X, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.PostBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(ae, null, F._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), s.a.createElement(z, null, s.a.createElement(Y, {
							to: "/"
						}, F._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.a = le(ce(Object(i.i)(e => s.a.createElement(H, null, s.a.createElement("div", null, s.a.createElement(se, null, ue(e))), s.a.createElement(E, null)))))
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(h),
				f = n("./src/lib/lessComponent.tsx");
			const _ = "create-community-button",
				y = f.a.wrapped(d.i, "SecondaryButton", g.a),
				k = f.a.wrapped(c.c, "StyledTooltip", g.a),
				E = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.Y)(e),
					userIsSuspended: b.K
				});
			t.a = Object(o.b)(E, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.b)(n)), e(Object(m.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(l.f)({
						tooltipId: _
					})),
					onHideTooltip: () => e(Object(l.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: a,
					onHideTooltip: o,
					openCommunityCreation: i,
					sendEvent: l,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: u
				} = e;
				return s.a.createElement(y, {
					className: t,
					disabled: u || c,
					onClick: () => i(l),
					onMouseEnter: a,
					onMouseLeave: o,
					id: _
				}, r.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), c ? s.a.createElement(k, {
					caretOnTop: !0,
					tooltipId: _,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : u ? s.a.createElement(k, {
					caretOnTop: !0,
					tooltipId: _,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
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
			var r = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/page.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(d);
			const p = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				b = l.a.wrapped(e => s.a.createElement("div", {
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
						"--RawHTMLDisplay-tr-even": Object(r.g)(Object(u.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(r.g)(Object(u.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(i.a)(b))
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
				return B
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/constants/elementClassNames.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				m = n.n(d),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
				}
				return n
			};
			const f = b.a.button("IconButton", m.a),
				_ = b.a.wrapped(c.a, "SubscribeIcon", m.a),
				y = b.a.wrapped(l.a, "UnsubscribeIcon", m.a),
				k = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, r = g(e, ["border", "small"]);
					return s.a.createElement(f, r, s.a.createElement(_, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", m.a),
				E = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, r = g(e, ["border", "small"]);
					return t ? s.a.createElement(i.f, h({}, r, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: n
						})
					})) : s.a.createElement(i.n, h({}, r, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", m.a),
				x = e => {
					var {
						icon: t
					} = e, n = g(e, ["icon"]);
					return t ? s.a.createElement(k, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : s.a.createElement(E, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				},
				v = b.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: r,
						type: a
					} = e, i = g(e, ["border", "language", "small", "type"]);
					return s.a.createElement(f, i, s.a.createElement(y, {
						className: Object(p.a)(o.n, i.className, {
							[m.a.isSmall]: r
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				S = b.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: a,
						type: o
					} = e, l = g(e, ["border", "language", "small", "type"]);
					const c = s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === o ? r.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : r.fbt._("Following", null, {
							hk: "1wQlVR"
						})), s.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === o ? r.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : r.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						u = Object(p.a)(l.className, {
							[m.a.isSmall]: a
						});
					return t ? s.a.createElement(i.i, h({}, l, {
						className: u,
						children: c
					})) : s.a.createElement(i.n, h({}, l, {
						className: u,
						children: c
					}))
				}, "UnsubscribeButton", m.a),
				j = e => {
					var {
						icon: t
					} = e, n = g(e, ["icon"]);
					return t ? s.a.createElement(v, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : s.a.createElement(S, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				};
			class B extends s.a.Component {
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
						id: r,
						language: a,
						small: o = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: o
					};
					return this.props.userIsSubscriber ? s.a.createElement(j, h({}, i, {
						language: a,
						type: this.props.identifier.type
					})) : s.a.createElement(x, h({}, i, {
						id: r
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const a = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				s = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = e => {
					let {
						type: t,
						key: n
					} = e;
					return s[a({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				s = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(a.a)(Object(r.c)(s.a))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = Object(r.b)(() => Object(a.c)({
				language: i.O,
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				i = n.n(o);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(s.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", i.a);
			t.a = l
		}
	}
]);
//# sourceMappingURL=Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki.28f9f92b80760744cac1.js.map