// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.22c2c1d760924af882b2.js
// Retrieved at 10/3/2022, 2:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/higherOrderComponents/asTooltip.tsx"),
				s = o("./src/lib/classNames/index.ts"),
				a = o("./node_modules/react/index.js"),
				r = o.n(a),
				i = o("./node_modules/react-redux/es/index.js"),
				d = o("./src/reddit/actions/tooltip.ts"),
				l = o("./src/reddit/components/UserIcon/index.tsx"),
				c = o("./src/reddit/controls/Dropdown/index.tsx"),
				u = o("./src/lib/makeGqlRequest/index.ts"),
				m = o("./src/redditGQL/operations/LastModActionInSubreddit.json");
			o("./src/redditGQL/operations/ModActivitySummariesByNames.json");
			var v = o("./src/reddit/helpers/graphql/helpers.ts"),
				b = o("./src/reddit/hooks/useGqlContext.ts"),
				p = o("./src/reddit/selectors/modQueue.ts"),
				q = o("./src/reddit/selectors/platform.ts"),
				_ = o("./src/reddit/selectors/subreddit.ts"),
				h = o("./src/reddit/selectors/tooltip.ts"),
				k = o("./src/reddit/selectors/user.ts"),
				f = o("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				g = o.n(f),
				C = o("./src/config.ts"),
				S = o("./node_modules/fbt/lib/FbtPublic.js"),
				A = o("./src/lib/timeAgo/index.ts"),
				N = o("./src/redditGQL/types.ts");
			const R = `${C.a.assetPath}/img/snoo-sunglasses.png`,
				y = e => {
					let {
						data: t
					} = e;
					var o, n, s, a, i, d, c;
					const u = (null === (o = t.info) || void 0 === o ? void 0 : o.displayName) || (null === (n = t.info) || void 0 === n ? void 0 : n.name),
						{
							lastModAction: m
						} = t;
					return r.a.createElement("div", {
						className: g.a.modRow
					}, r.a.createElement(l.a, {
						className: g.a.modIcon,
						userName: u || "",
						iconUrl: null === (a = null === (s = null == t ? void 0 : t.info) || void 0 === s ? void 0 : s.icon) || void 0 === a ? void 0 : a.url,
						isNSFW: !!(null === (d = null === (i = t.info) || void 0 === i ? void 0 : i.profile) || void 0 === d ? void 0 : d.isNsfw)
					}), r.a.createElement("div", {
						className: g.a.subredditRowText
					}, r.a.createElement("div", {
						className: g.a.username
					}, u), r.a.createElement("div", {
						className: g.a.detailText
					}, m && r.a.createElement(r.a.Fragment, null, ((e, t) => {
						switch (e) {
							case N.q.AddNote:
								return S.fbt._("Added mod note", null, {
									hk: "4EQdI3"
								});
							case N.q.AddRemovalReason:
								return S.fbt._("Added removal reason", null, {
									hk: "3sDuRA"
								});
							case N.q.AdjustPostCrowdControlLevel:
								return S.fbt._("Adjusted post crowd control level", null, {
									hk: "3Ru27s"
								});
							case N.q.EnablePostCrowdControlFilter:
								return S.fbt._("Enabled post crowd control level", null, {
									hk: "bnrbt"
								});
							case N.q.DisablePostCrowdControlFilter:
								return S.fbt._("Disabled post crowd control level", null, {
									hk: "3Pn8Cm"
								});
							case N.q.ApproveComment:
								return S.fbt._("Approved comment", null, {
									hk: "15N4AH"
								});
							case N.q.ApproveLink:
								return S.fbt._("Approved post", null, {
									hk: "2pHeO6"
								});
							case N.q.BanUser:
								return S.fbt._("Banned user", null, {
									hk: "30ZUto"
								});
							case N.q.Collections:
								return S.fbt._("Collections", null, {
									hk: "4DLN5q"
								});
							case N.q.DeleteNote:
								return S.fbt._("Deleted mod note", null, {
									hk: "24mUGI"
								});
							case N.q.Distinguish:
								return "SubredditPost" === t ? S.fbt._("Post distinguished", null, {
									hk: "1EzjPd"
								}) : S.fbt._("Comment distinguished", null, {
									hk: "3TNqQa"
								});
							case N.q.EditFlair:
								return "SubredditPost" === t ? S.fbt._("Post flair edited", null, {
									hk: "2oj67i"
								}) : S.fbt._("User flair edited", null, {
									hk: "2WAVS8"
								});
							case N.q.IgnoreReports:
								return "SubredditPost" === t ? S.fbt._("Post reports ignored", null, {
									hk: "1HbgCS"
								}) : S.fbt._("Comment reports ignored", null, {
									hk: "3eLRwL"
								});
							case N.q.Lock:
								return "SubredditPost" === t ? S.fbt._("Post locked", null, {
									hk: "45Huvj"
								}) : S.fbt._("Comment locked", null, {
									hk: "2HzroI"
								});
							case N.q.MarkNsfw:
								return S.fbt._("Marked post NSFW", null, {
									hk: "4qw3UI"
								});
							case N.q.MarkOriginalContent:
								return S.fbt._("Marked post Original Content", null, {
									hk: "4d9kgS"
								});
							case N.q.MuteUser:
								return S.fbt._("Muted user", null, {
									hk: "31YWRG"
								});
							case N.q.RemoveComment:
								return S.fbt._("Removed comment", null, {
									hk: "2qfmzC"
								});
							case N.q.RemoveLink:
								return S.fbt._("Removed post", null, {
									hk: "2leMij"
								});
							case N.q.SetContestMode:
								return S.fbt._("Set post contest mode", null, {
									hk: "2iE074"
								});
							case N.q.SetSuggestedsort:
								return S.fbt._("Set post suggested sort", null, {
									hk: "3zw33Q"
								});
							case N.q.ShowComment:
								return S.fbt._("Showed comment", null, {
									hk: "1xvaXS"
								});
							case N.q.SpamComment:
								return S.fbt._("Marked comment as spam", null, {
									hk: "E6CLe"
								});
							case N.q.SpamLink:
								return S.fbt._("Removed post as spam", null, {
									hk: "1Al2xz"
								});
							case N.q.Spoiler:
								return S.fbt._("Added spoiler tag", null, {
									hk: "254Axx"
								});
							case N.q.Sticky:
								return "SubredditPost" === t ? S.fbt._("Post stickied", null, {
									hk: "4m9DRx"
								}) : S.fbt._("Comment stickied", null, {
									hk: "1JIPzu"
								});
							case N.q.UnbanUser:
								return S.fbt._("Unbanned user", null, {
									hk: "3U4olT"
								});
							case N.q.Unlock:
								return "SubredditPost" === t ? S.fbt._("Post unlocked", null, {
									hk: "3IXrG"
								}) : S.fbt._("Comment unlocked", null, {
									hk: "4v2jmJ"
								});
							case N.q.UnmuteUser:
								return S.fbt._("Unmuted user", null, {
									hk: "2aB30x"
								});
							case N.q.UnsetContestMode:
								return S.fbt._("Unset post contest mode", null, {
									hk: "W4Yjf"
								});
							case N.q.UnsnoozeReports:
								return "SubredditPost" === t ? S.fbt._("Post unsnoozed", null, {
									hk: "3jp8zr"
								}) : S.fbt._("Comment unsnoozed", null, {
									hk: "2x01Eq"
								});
							case N.q.Unspoiler:
								return S.fbt._("Removed spoiler tag", null, {
									hk: "2GvhDn"
								});
							case N.q.Unsticky:
								return "SubredditPost" === t ? S.fbt._("Post unstickied", null, {
									hk: "KXoHl"
								}) : S.fbt._("Comment unstickied", null, {
									hk: "dpEKC"
								});
							case N.q.UpdateRemovalReason:
							case N.q.WikiBanned:
							case N.q.WikiContributor:
							case N.q.WikiPageListed:
							case N.q.WikiPermLevel:
							case N.q.WikiRevise:
							case N.q.WikiUnbanned:
							case N.q.AcceptModeratorInvite:
							case N.q.AddCommunityTopics:
							case N.q.AddContributor:
							case N.q.AddModerator:
							case N.q.CreateAward:
							case N.q.CreateScheduledPost:
							case N.q.CreateRemovalReason:
							case N.q.CommunityStyling:
							case N.q.CommunityWidgets:
							case N.q.CreateRule:
							case N.q.DeleteAward:
							case N.q.DeleteRule:
							case N.q.DeleteScheduledPost:
							case N.q.DeleteOverriddenClassification:
							case N.q.DeleteRemovalReason:
							case N.q.DisableAward:
							case N.q.EditPostRequirements:
							case N.q.EditRule:
							case N.q.EditScheduledPost:
							case N.q.EditSettings:
							case N.q.EnableAward:
							case N.q.Events:
							case N.q.HiddenAward:
							case N.q.InviteModerator:
							case N.q.InviteSubscriber:
							case N.q.ModAwardGiven:
							case N.q.ModmailEnrollment:
							case N.q.OverrideClassification:
							case N.q.RemoveCommunityTopics:
							case N.q.RemoveContributor:
							case N.q.RemoveModerator:
							case N.q.RemoveWikiContributor:
							case N.q.ReorderModerators:
							case N.q.ReorderRules:
							case N.q.SetPermissions:
							case N.q.SnoozeReports:
							case N.q.SubmitContentRatingSurvey:
							case N.q.SubmitScheduledPost:
							case N.q.UnignoreReports:
							case N.q.UninviteModerator:
							default:
								return S.fbt._("Last mod action", null, {
									hk: "S9AMb"
								})
						}
					})(null == m ? void 0 : m.action, null === (c = null == m ? void 0 : m.target) || void 0 === c ? void 0 : c.__typename), " ", Object(A.d)(Object(v.g)(m.createdAt) / 1e3)))))
				},
				E = e => {
					let {
						mostRecentAction: t
					} = e;
					return r.a.createElement("div", {
						className: g.a.emptyTooltip
					}, r.a.createElement("img", {
						alt: S.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: R,
						className: g.a.snooImage
					}), r.a.createElement("div", {
						className: g.a.emptyText
					}, S.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), r.a.createElement("div", {
						className: g.a.emptyDetailText
					}, S.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && r.a.createElement("div", {
						className: g.a.lastActionContainer
					}, r.a.createElement("div", {
						className: g.a.lastActionTitle
					}, S.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), r.a.createElement(y, {
						data: t
					})))
				},
				j = e => {
					let {
						orderedModsList: t,
						subredditName: o,
						mods: n,
						mostRecentAction: a
					} = e;
					return 0 === t.length ? r.a.createElement(E, {
						mostRecentAction: a
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: g.a.tooltipTitle
					}, t.length, " ", S.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [S.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), o), n && t.slice(0, 10).map(e => r.a.createElement(y, {
						data: n[e],
						key: e
					})), t.length > 10 && r.a.createElement("div", {
						className: Object(s.a)(g.a.detailText, g.a.more)
					}, "+", t.length - 10, " ", S.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				w = Object(n.a)(c.a),
				M = e => e ? Object.keys(e).sort((t, o) => ((e, t, o) => {
					var n, s, a, r;
					const i = null === (s = null === (n = o[e]) || void 0 === n ? void 0 : n.lastModAction) || void 0 === s ? void 0 : s.createdAt,
						d = null === (r = null === (a = o[t]) || void 0 === a ? void 0 : a.lastModAction) || void 0 === r ? void 0 : r.createdAt;
					return Object(v.g)(i || "") - Object(v.g)(d || "")
				})(t, o, e)) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: o,
					maxMods: n
				} = e;
				const c = Object(i.e)(q.c),
					v = o || c,
					f = Object(i.e)(e => Object(_.h)(e, {
						subredditId: v || ""
					})),
					C = Object(i.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[v || ""]) || {}
					}),
					{
						mods: S
					} = C,
					A = Object(a.useCallback)(e => M(e), [])(S),
					[N, R] = Object(a.useState)(void 0),
					y = Object(b.a)();
				Object(a.useEffect)(() => {
					(async () => {
						var e, t, o, n;
						if (0 === A.length && f) {
							const s = null === (t = null === (e = (await ((e, t) => Object(u.a)(e, {
								...m,
								variables: t
							}))(y(), {
								subredditName: f
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == s ? void 0 : s.actions) && (null === (n = null === (o = s.actions) || void 0 === o ? void 0 : o.edges) || void 0 === n || n.map(e => {
								const {
									moderatorInfo: t,
									...o
								} = null == e ? void 0 : e.node;
								R({
									info: t,
									lastModAction: o
								})
							}))
						}
					})()
				}, [y, A.length, f]);
				const E = (e => `mod_activity_tooltip_id-${e}`)(f || ""),
					O = Object(i.d)(),
					P = Object(a.useCallback)(() => {
						O(Object(d.h)({
							tooltipId: E
						}))
					}, [O, E]),
					x = Object(i.e)(e => Object(h.b)(E)(e)),
					L = Object(i.e)(p.d),
					D = Object(i.e)(k.k),
					U = n || 5;
				return r.a.createElement("div", {
					className: Object(s.a)(g.a.preview, t, {
						[g.a.isModListing]: !!L
					}),
					id: E,
					onMouseEnter: P,
					onMouseLeave: P,
					"data-testid": "mod-activity-preview"
				}, S && A.length > 0 ? A.slice(0, U).map((e, t) => {
					var o, n, a, i, d, c, u, m, v, b;
					return r.a.createElement(l.a, {
						className: Object(s.a)(g.a.userIcon, {
							[g.a.noMargin]: t === A.length - 1 && !(t === U - 1 && A.length > U)
						}),
						key: null === (n = null === (o = S[e]) || void 0 === o ? void 0 : o.info) || void 0 === n ? void 0 : n.displayName,
						userName: (null === (i = null === (a = S[e]) || void 0 === a ? void 0 : a.info) || void 0 === i ? void 0 : i.displayName) || "",
						iconUrl: null === (u = null === (c = null === (d = S[e]) || void 0 === d ? void 0 : d.info) || void 0 === c ? void 0 : c.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (b = null === (v = null === (m = S[e]) || void 0 === m ? void 0 : m.info) || void 0 === v ? void 0 : v.profile) || void 0 === b ? void 0 : b.isNsfw)
					})
				}) : L ? null : r.a.createElement(l.a, {
					className: Object(s.a)(g.a.userIcon, g.a.noMargin),
					userName: (null == D ? void 0 : D.displayName) || "",
					iconUrl: null == D ? void 0 : D.accountIcon,
					isNSFW: !1
				}), A.length > U && r.a.createElement("div", {
					className: g.a.moreMods
				}, "+", A.length - U), r.a.createElement(w, {
					tooltipId: E,
					isOpen: x,
					className: g.a.tooltip,
					tooltipPosition: L ? void 0 : ["center", "top"]
				}, r.a.createElement(j, {
					orderedModsList: A,
					subredditName: f || "",
					mods: S,
					mostRecentAction: N
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, o) {
			e.exports = {
				widget: "_2S3Rmz2Q8AgpyxfJD6L9Ni",
				titleContainer: "pg3jNvZKVsr3JdwcUwg2Q",
				widgetContent: "k9g6oop3qzXe5kYHchR2G",
				modIcon: "_3_ODW9yvfhSXaAyu-nkEVf",
				subredditIcon: "_3xHqnRKD2oZKVSbBsrhnhK",
				modRow: "_5sL4TmBPDSK5a3KCST8_D",
				subredditRow: "_13BVggQ6qexDLjYZd0OF_G",
				subredditRowText: "_251DNBern7Si-he5HNkDm7",
				emptyCard: "_1Df-DRjGp1nY8gKsqVuIWB",
				emptyText: "_25rN30WWKtFVSZo9ZhYJLx",
				subredditName: "_1-JqcOMFgfEZRr9C1rwtvN",
				tooltipTitle: "Edh6iORXd4A_ZV0h1CB8j",
				username: "_3iBG4sU_nNewURNnz2rmHn",
				emptyDetailText: "_138KBSl-Hzt-QdKbcCX4tv",
				detailText: "_1rZ6aZqtR9nzTvKOqVb7dP",
				snooImage: "Vg69__zCqDdWEkb_CTQcn",
				headerButtonContainer: "EzEg04ghsOqxnE1GnfnIr",
				headerButtonIcon: "yga1BOrh_Ki70reuqnYLi",
				up: "B30eRoRGRtXKAX8-rAmXV",
				more: "_22P9QU0SjkaqhoKGnofYXo",
				preview: "_2akotn_qPD4--TkwhPFyTR",
				isModListing: "_2JF1Rg88IUr9hs0b3iqckj",
				moreMods: "NbzlGrDvVUNrngQOyDY28",
				userIcon: "_1hC77l9y_LwLvok2bogZDP",
				noMargin: "_3K_wetbUvC8wNm6ueBwvh-",
				tooltip: "kRLDbyQSWoBrnkmHt5nmj",
				emptyTooltip: "_1yrR_PVgnpPVl0FS5aNxmY",
				lastActionContainer: "rU1nWYL0Qtmi0poIUJXmm",
				lastActionTitle: "_2bxj74obMqZ-SI9UrnCg7x"
			}
		},
		"./src/redditGQL/operations/LastModActionInSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"7888d2d30843"}')
		},
		"./src/redditGQL/operations/ModActivitySummariesByNames.json": function(e) {
			e.exports = JSON.parse('{"id":"23e855c12457"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.22c2c1d760924af882b2.js.map